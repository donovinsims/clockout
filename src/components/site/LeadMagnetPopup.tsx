import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useScrollTrigger } from "@/hooks/use-scroll-trigger";
import { useExitIntent } from "@/hooks/use-exit-intent";
import EmailCaptureForm from "./EmailCaptureForm";
import type { EmailCaptureFormSuccessData } from "./EmailCaptureForm";

const STORAGE_KEY = "clockout_lead_magnet";
const SHOW_AGAIN_DAYS = 30;
const SCROLL_TRIGGER_THRESHOLD = 0.45;
const FALLBACK_TIMER_MS = 40_000;
const REDUCED_MOTION_DURATION_ZERO = 0;
const SPRING_STIFFNESS = 300;
const SPRING_DAMPING = 18;
const CHECKMARK_PATH_DURATION = 0.4;
const CHECKMARK_PATH_DELAY = 0.15;

function isBrowser() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

type LsRecord = { dismissedAt?: number; convertedAt?: number; version: number } | null;

function getDismissal(): LsRecord {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Exclude<LsRecord, null>;
  } catch {
    return null;
  }
}

function setDismissed() {
  if (!isBrowser()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ dismissedAt: Date.now(), version: 1 }));
}

function setConverted() {
  if (!isBrowser()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ convertedAt: Date.now(), version: 1 }));
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
  const shownRef = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion =
    isBrowser() && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [suppressed] = useState(() => {
    const record = getDismissal();
    return (
      record?.convertedAt !== undefined || (record?.dismissedAt !== undefined && !isExpired(record))
    );
  });

  const scroll = useScrollTrigger({
    disabled: suppressed,
    threshold: SCROLL_TRIGGER_THRESHOLD,
    fallbackDelay: FALLBACK_TIMER_MS,
  });

  const exit = useExitIntent({ disabled: suppressed });

  const [successData, setSuccessData] = useState<EmailCaptureFormSuccessData | null>(null);

  // Combined trigger — show popup when scroll or exit-intent fires
  useEffect(() => {
    if (shownRef.current) return;
    if (scroll.triggered || exit.triggered) {
      shownRef.current = true;
      setVisible(true);
    }
  }, [scroll.triggered, exit.triggered]);

  // Focus success panel on conversion for a11y
  useEffect(() => {
    if (successData && successRef.current) {
      successRef.current.focus();
    }
  }, [successData]);

  const handleDismiss = () => {
    if (successData) return;
    setVisible(false);
    setDismissed();
  };

  const handleCaptureSuccess = (data: EmailCaptureFormSuccessData) => {
    setSuccessData(data);
    setConverted();
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

              {!successData ? (
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
                    <EmailCaptureForm onSuccess={handleCaptureSuccess} compact />
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
                        ? { duration: REDUCED_MOTION_DURATION_ZERO }
                        : {
                            type: "spring",
                            stiffness: SPRING_STIFFNESS,
                            damping: SPRING_DAMPING,
                          }
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
                          ? { duration: REDUCED_MOTION_DURATION_ZERO }
                          : {
                              duration: CHECKMARK_PATH_DURATION,
                              delay: CHECKMARK_PATH_DELAY,
                              ease: "easeOut",
                            }
                      }
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </motion.svg>
                  </motion.div>

                  <h3 className="text-lg font-semibold text-foreground">
                    You're in, {successData!.name}!
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {successData!.wasSubscriberAlready
                      ? "You're already subscribed — no duplicates, you just saved me the trouble."
                      : `Sent to ${maskEmail(successData!.email)}. Check your inbox!`}
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
