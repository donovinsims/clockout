import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { GuaranteeBlock } from "@/components/site/GuaranteeBlock";
import { BetaSpots } from "@/components/site/BetaSpots";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Free Money-Leak Map — Clockout · 20 min form" },
      { name: "description", content: "20 minutes to fill the form. I'll hand you a Money-Leak Map quantifying every revenue and time leak — in dollars. If we don't find $10K in fixable leaks, it's free." },
      { property: "og:title", content: "Clockout — Find your 10 hours back" },
      { property: "og:description", content: "20 minutes to fill the form. I'll hand you a Money-Leak Map that shows every revenue and time leak in dollars. If we don't find $10K in fixable leaks, it's free." },
      { property: "og:url", content: "https://clockout.us/assessment" },
    ],
    links: [{ rel: "canonical", href: "/assessment" }],
  }),
  component: AssessmentPage,
});

const leakCategories = [
  { title: "Missed-call revenue", body: "Calls that ring out × your average ticket × your week. Every line of the report shows the dollar figure.", figure: "$5,400/mo" },
  { title: "After-hours drop-off", body: "What happens between 5pm Friday and 8am Monday. Most shops never measure it. We do.", figure: "$2,800/mo" },
  { title: "Manual dispatch time", body: "Hours per week you (or someone on payroll) spend triaging texts, emails, and voicemails × loaded labor rate.", figure: "$1,950/mo" },
  { title: "Quote follow-up lag", body: "Quotes sent that go cold without a second touch. 20–35% are recoverable with one automated sequence.", figure: "$3,200/mo" },
];

function AssessmentPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => setFormSubmitted(true);
    document.addEventListener("tally-form-submitted", handler);
    return () => document.removeEventListener("tally-form-submitted", handler);
  }, []);

  return (
    <SiteShell stickyCta={false} leadMagnet={false}>
      {/* 1. Hero */}
      <section className="relative border-b border-line">
        <div className="absolute inset-0 torch" aria-hidden />
        <div className="container-x relative py-20 md:py-28">
          <h1 className="max-w-4xl text-5xl leading-[1.04] md:text-7xl">
            Find your 10 hours back. It takes 20 minutes.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-foreground/80">
            Fill the short form. I'll build you a Money-Leak Map that traces one real job through your business — every revenue and time leak priced in dollars. If I can't find $10K in fixable leaks, it's free and you keep the map.
          </p>
        </div>
      </section>

      {/* 2. What the audit surfaces */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">What the Money-Leak Map surfaces</div>
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            Four leak categories. Every one written next to a real dollar figure.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {leakCategories.map((c) => (
              <div key={c.title} className="bg-background p-6">
                <div className="mono-num text-2xl text-amber">{c.figure}</div>
                <h3 className="mt-4 text-xl">{c.title}</h3>
                <p className="mt-3 text-sm text-foreground/80">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-dim">Sample figures from typical 5–15 employee service businesses. Yours come back with real numbers.</p>
        </div>
      </section>

      {/* 3. The process */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">The process</div>
          <h2 className="max-w-3xl text-4xl md:text-5xl">Three steps to your Money-Leak Map.</h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {[
              { n: "01", time: "15 seconds", t: "Fill the form below", b: "Tell me about your shop, what's leaking the worst, and how to reach you." },
              { n: "02", time: "~48 hours", t: "I build your map", b: "I trace one real job through your phone, CRM, dispatch, and invoice. Every gap gets a dollar figure." },
              { n: "03", time: "48 hours", t: "Money-Leak Map delivered", b: "PDF in your inbox. Yours to keep whether you move forward or not. If we don't surface $10K in fixable leaks, it's free." },
            ].map((s) => (
              <li key={s.n} className="bg-background p-7">
                <div className="flex items-center justify-between">
                  <span className="mono-num text-amber">{s.n}</span>
                  <span className="mono-num text-xs text-dim">{s.time}</span>
                </div>
                <h3 className="mt-4 text-xl">{s.t}</h3>
                <p className="mt-3 text-foreground/80">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Guarantee */}
      <GuaranteeBlock />

      {/* 5. Tally form */}
      <section id="form" className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">The form</div>
          <h2 className="max-w-3xl text-4xl md:text-5xl">Tell me about your shop.</h2>
          <p className="mt-5 max-w-2xl text-foreground/80">
            7 quick questions. I'll email you your Money-Leak Map inside 48 hours. If it doesn't show $10K in fixable leaks, you pay $0. That's the guarantee.
          </p>
          {formSubmitted ? (
            <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface p-9 text-center">
              <h3 className="text-2xl md:text-3xl">Thanks for filling that out!</h3>
              <p className="mx-auto mt-4 max-w-lg text-foreground/80">
                I'll build your Money-Leak Map and email you within 48 hours. Check your inbox (and spam).
              </p>
              <p className="mt-4 font-semibold">— Donovin</p>
              <p className="mt-2 text-sm text-dim">
                Follow-up:{" "}
                <a href="mailto:contact@clockout.us" className="text-amber hover:underline">
                  contact@clockout.us
                </a>
              </p>
            </div>
          ) : (
            <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface">
              <TallyForm />
            </div>
          )}
          <p className="mt-4 text-center text-xs text-dim">
            No spam. No newsletter. I email back personally at <a className="text-amber hover:underline" href="mailto:contact@clockout.us">contact@clockout.us</a>.
          </p>
        </div>
      </section>

      {/* 6. Scarcity footer */}
      <div className="bg-surface/40 py-12">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 text-sm">
            <BetaSpots />
            <div className="text-foreground/85">
              <span className="mono-num text-amber">$497</span> beta · <span className="mono-num line-through">$1,494</span> standard
            </div>
            <div className="text-sm text-foreground/75">
              Saved me 10+ hours a week &mdash; Shea S., Trading Community &middot; 10 hrs/week back in 30 days or free
            </div>
        </div>
      </div>
    </SiteShell>
  );
}

/**
 * Lazy-loaded, dynamic-height Tally embed.
 * - The iframe is mounted only after the user scrolls near it (IntersectionObserver).
 * - Tally's embeds.js handles dynamic resize so the form never has scroll bars.
 */
function TallyForm() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [mount, setMount] = useState(false);
  const [tallyFailed, setTallyFailed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setMount(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!mount) return;
    const timer = setTimeout(() => {
      // @ts-expect-error global injected by Tally
      if (typeof window.Tally === "undefined") {
        setTallyFailed(true);
      }
    }, 10_000);
    return () => clearTimeout(timer);
  }, [mount]);

  useEffect(() => {
    if (!mount || typeof window === "undefined") return;
    const SRC = "https://tally.so/widgets/embed.js";
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
    const load = () => {
      // @ts-expect-error global injected by Tally
      if (typeof window.Tally !== "undefined") window.Tally.loadEmbeds();
    };
    if (existing) {
      load();
      return;
    }
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    s.onload = load;
    document.body.appendChild(s);
  }, [mount]);

  return (
    <div ref={wrapRef} className="min-h-[600px]">
      {tallyFailed ? (
        <div className="flex min-h-[600px] items-center justify-center px-6 text-center">
          <p className="text-foreground/80">
            Form temporarily unavailable —{" "}
            <a href="mailto:contact@clockout.us" className="text-amber hover:underline">
              email contact@clockout.us
            </a>{" "}
            directly
          </p>
        </div>
      ) : mount ? (
        <iframe
          data-tally-src="https://tally.so/embed/RGVJ1J?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="804"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          title="Clockout Revenue-Leak Assessment"
          className="w-full"
        />
      ) : (
        <div className="grid min-h-[600px] place-items-center text-sm text-muted-foreground">
          Loading the form…
        </div>
      )}
    </div>
  );
}
