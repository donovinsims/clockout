import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { industryOptions as INDUSTRIES } from "@/data/industries";
import { createSubscriber } from "@/lib/api/sequenzy.functions";

const LS_KEY = "clockout_lead_magnet";
const SHOW_AGAIN_DAYS = 30;

function isBrowser() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

type LsRecord = { dismissedAt?: number; convertedAt?: number; version: number } | null;

function getDismissal(): LsRecord {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Exclude<LsRecord, null>;
  } catch {
    return null;
  }
}

function setDismissed() {
  if (!isBrowser()) return;
  localStorage.setItem(LS_KEY, JSON.stringify({ dismissedAt: Date.now(), version: 1 }));
}

function setConverted() {
  if (!isBrowser()) return;
  localStorage.setItem(LS_KEY, JSON.stringify({ convertedAt: Date.now(), version: 1 }));
}

function isExpired(record: LsRecord) {
  if (!record?.dismissedAt) return true;
  return Date.now() - record.dismissedAt > SHOW_AGAIN_DAYS * 24 * 60 * 60 * 1000;
}

function maskEmail(email: string) {
  const [name, domain] = email.split("@");
  if (!domain) return email;
  const visible = name.length > 2 ? name.slice(0, 2) : name.slice(0, 1);
  return `${visible}***@${domain}`;
}

export function LeadMagnetPopup() {
  const [visible, setVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [capturing, setCapturing] = useState(false);
  const [captured, setCaptured] = useState(false);
  const [wasSubscriberAlready, setWasSubscriberAlready] = useState(false);
  const [error, setError] = useState("");
  const shownRef = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);
  const exitShownRef = useRef(false);
  const prefersReducedMotion =
    isBrowser() && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [suppressed] = useState(() => {
    const record = getDismissal();
    return (
      record?.convertedAt !== undefined || (record?.dismissedAt !== undefined && !isExpired(record))
    );
  });

  // Scroll trigger (45%)
  useEffect(() => {
    if (suppressed || shownRef.current) return;
    const handleScroll = () => {
      if (shownRef.current) return;
      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPct > 0.45) {
        shownRef.current = true;
        setVisible(true);
      }
    };
    const timer = setTimeout(() => {
      if (!shownRef.current) {
        shownRef.current = true;
        setVisible(true);
      }
    }, 40_000);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [suppressed]);

  // Exit-intent trigger
  useEffect(() => {
    if (suppressed || exitShownRef.current) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (exitShownRef.current) return;
      if (e.clientY <= 0) {
        exitShownRef.current = true;
        if (!shownRef.current) {
          shownRef.current = true;
          setVisible(true);
        }
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [suppressed]);

  // Focus success panel on conversion for a11y
  useEffect(() => {
    if (captured && successRef.current) {
      successRef.current.focus();
    }
  }, [captured]);

  const handleDismiss = () => {
    if (captured) return;
    setVisible(false);
    setDismissed();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !industry) return;
    setCapturing(true);
    setError("");
    try {
      await createSubscriber({
        data: {
          email: email.trim(),
          firstName: name.trim(),
          tag: `industry-${industry}`,
        },
      });
      setCaptured(true);
      setConverted();
    } catch (err) {
      const raw = err instanceof Error ? err.message : "";
      try {
        const parsed = JSON.parse(raw);
        if (parsed?.error?.includes("already exists") || parsed?.error?.includes("duplicate")) {
          setCaptured(true);
          setWasSubscriberAlready(true);
          setConverted();
          return;
        }
        if (
          parsed?.error?.includes("Invalid domain") ||
          parsed?.error?.includes("cannot receive email")
        ) {
          setError("That email address can't receive messages — double-check it and try again.");
          return;
        }
      } catch {
        /* not JSON — fall through */
      }
      if (raw.includes("already exists") || raw.includes("duplicate")) {
        setCaptured(true);
        setWasSubscriberAlready(true);
        setConverted();
      } else if (raw.includes("SEQUENZY_API_KEY not configured")) {
        setError(
          "Service temporarily unavailable. Email contact@clockout.us and we'll send it right over.",
        );
      } else {
        setError("Something went wrong. Try again or email contact@clockout.us.");
      }
    } finally {
      setCapturing(false);
    }
  };

  if (suppressed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]"
            onClick={handleDismiss}
            aria-hidden="true"
          />

          {/* Slide-in panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Get the 10-Hour Recovery Guide"
            className="fixed bottom-0 right-0 z-50 w-full sm:bottom-6 sm:right-6 sm:max-w-sm"
          >
            <div className="mx-4 mb-4 overflow-hidden rounded-[16px] border border-line bg-background p-6 shadow-xl sm:mx-0 sm:mb-0">
              {/* Close */}
              <button
                onClick={handleDismiss}
                className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {!captured ? (
                <>
                  <div className="eyebrow mb-2 pr-6">Free guide</div>
                  <h3 className="text-xl font-semibold text-foreground">
                    The 10-Hour Recovery Guide
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Five strategies to recover a full day a week in your service business.
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                    {[
                      "Catch every call — and catch it within 60 seconds",
                      "Stop quoting into the void (recover 20–35% of unsigned quotes)",
                      "Automate the booking & dispatch loop",
                      "Let past customers do your marketing",
                      "Stop financing your customers",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {!showForm ? (
                    <button
                      onClick={() => setShowForm(true)}
                      className="mt-4 w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      Send me the free guide →
                    </button>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                      <input
                        type="text"
                        placeholder="First name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <select
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Your trade</option>
                        {INDUSTRIES.map((ind) => (
                          <option key={ind.value} value={ind.value}>
                            {ind.label}
                          </option>
                        ))}
                      </select>

                      {error && <p className="text-xs text-destructive">{error}</p>}

                      <button
                        type="submit"
                        disabled={capturing}
                        className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                      >
                        {capturing ? "Sending..." : "Send me the free guide →"}
                      </button>
                      <p className="text-center text-xs text-muted-foreground">
                        No spam. Unsubscribe anytime.
                      </p>
                    </form>
                  )}

                  <button
                    onClick={handleDismiss}
                    className="mt-2 w-full text-center text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
                  >
                    No thanks, I&rsquo;ll do it myself
                  </button>
                </>
              ) : (
                <motion.div
                  key="captured"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  ref={successRef}
                  role="status"
                  aria-live="polite"
                  tabIndex={-1}
                  className="py-4 text-center outline-none"
                >
                  {/* Animated checkmark */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 300, damping: 18 }
                    }
                    className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-primary/15"
                  >
                    <motion.svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { duration: 0.4, delay: 0.15, ease: "easeOut" }
                      }
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </motion.svg>
                  </motion.div>

                  <h3 className="text-lg font-semibold text-foreground">You're in, {name}!</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {wasSubscriberAlready
                      ? "You're already subscribed — no duplicates, you just saved me the trouble."
                      : `Sent to ${maskEmail(email)}. Check your inbox!`}
                  </p>

                  <Link
                    to="/assessment"
                    onClick={handleDismiss}
                    className="mt-4 block w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Find the Money I'm Losing →
                  </Link>

                  <button
                    onClick={() => {
                      setVisible(false);
                      setDismissed();
                    }}
                    className="mt-2 w-full text-center text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
                  >
                    No thanks, I'll do the math myself
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
