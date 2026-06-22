import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

declare const Tally: { loadEmbeds: () => void };
import { SiteShell } from "@/components/site/SiteShell";
import { GuaranteeBlock } from "@/components/site/GuaranteeBlock";
import { BetaSpots } from "@/components/site/BetaSpots";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Free 20-Minute Revenue-Leak Audit \u2014 Clockout" },
      { name: "description", content: "Book a free 20-minute call. I'll show you exactly where your business is leaking money \u2014 and send you your Money-Leak Map to keep, whether you hire me or not." },
      { property: "og:title", content: "Free 20-Minute Revenue-Leak Audit \u2014 Clockout" },
      { property: "og:description", content: "Book a free 20-minute call. I'll show you exactly where your business is leaking money \u2014 and send you your Money-Leak Map to keep, whether you hire me or not." },
      { property: "og:url", content: "https://clockout.us/assessment" },
    ],
    links: [{ rel: "canonical", href: "/assessment" }],
  }),
  component: AssessmentPage,
});

const leakCategories = [
  { title: "Missed calls", body: "Every call you can't grab on a roof or under a sink is a job walking to the next guy.", figure: "~$5,400/mo" },
  { title: "After-hours drop-off", body: "Nights and weekends ring out to a voicemail nobody checks until Monday.", figure: "~$2,800/mo" },
  { title: "Slow quote follow-up", body: "Quotes sent, then silence \u2014 20\u201335% are recoverable with follow-up alone.", figure: "~$3,200/mo" },
  { title: "Manual admin & dispatch", body: "The hours you burn Sunday night on data entry instead of living your life.", figure: "~$1,950/mo" },
];

function AssessmentPage() {
  // Load Tally's embed.js for dynamic height and form-events forwarding
  useEffect(() => {
    const w = "https://tally.so/widgets/embed.js";
    const load = () => {
      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
      } else {
        document.querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])").forEach(
          (e) => { e.src = e.dataset.tallySrc || ""; },
        );
      }
    };
    if (typeof Tally !== "undefined") {
      load();
    } else if (!document.querySelector('script[src="' + w + '"]')) {
      const s = document.createElement("script");
      s.src = w;
      s.onload = load;
      s.onerror = load;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <SiteShell stickyCta={false} leadMagnet={false}>
      {/* 1. Hero */}
      <section className="relative border-b border-line">
        <div className="absolute inset-0 torch" aria-hidden />
        <div className="container-x relative py-20 md:py-28">
          <div className="eyebrow mb-3">FREE REVENUE-LEAK AUDIT</div>
          <h1 className="max-w-4xl text-5xl leading-[1.04] md:text-7xl">
            See exactly where your business is leaking money — in one 20-minute call.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-foreground/80">
            Tell me a few things about your shop and grab a time. Before we talk, I'll dig into your business — then on a quick 20-minute call I'll show you exactly where you're losing jobs and dollars: the missed calls, the quotes going cold, the follow-ups that never happen. A day later, you get your Money-Leak Map in writing — yours to keep, whether you hire me or not.
          </p>
          <div className="mt-8">
            <a
              href="#form"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-amber px-7 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Find the Money I'm Losing →
            </a>
          </div>
          <p className="mt-3 text-sm text-dim">
            Free 20-minute call · grab a time in 30 seconds · no pitch, no pressure
          </p>
          <p className="mt-3 text-sm text-dim">
            Built and run by Donovin — local, in Roscoe. Not a call center. No contract.
          </p>
        </div>
      </section>

      {/* 2. What you walk away with */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            What you get — free, even if you never hire me
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            <div className="bg-background p-7">
              <p>On the call: a live walkthrough of exactly where you're losing money, in real dollars — not vague "you should use AI" advice.</p>
            </div>
            <div className="bg-background p-7">
              <p>A day later: your Money-Leak Map — your biggest leaks, ranked, and the first one I'd plug. Keep it forever.</p>
            </div>
            <div className="bg-background p-7">
              <p>Zero obligation: if you never hire me, you've still got a Map you can run yourself.</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-dim">
            I can't hand you this before we talk — I don't know your business yet. The call is how I earn the right to give it to you.
          </p>
        </div>
      </section>

      {/* 3. Where the money leaks */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            Here's what I'm hunting for
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-line">
            <table className="w-full">
              <thead>
                <tr className="bg-surface/50">
                  <th className="p-4 text-left text-sm font-medium text-dim">Leak</th>
                  <th className="p-4 text-left text-sm font-medium text-dim">Typical bleed</th>
                  <th className="p-4 text-left text-sm font-medium text-dim">What it is</th>
                </tr>
              </thead>
              <tbody>
                {leakCategories.map((c) => (
                  <tr key={c.title} className="border-t border-line">
                    <td className="p-4 font-medium">{c.title}</td>
                    <td className="p-4 mono-num text-amber">{c.figure}</td>
                    <td className="p-4 text-sm text-foreground/80">{c.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-dim">
            Ranges for a shop your size, based on industry data (ServiceTitan, PMI). Your real number comes out on the call — that's what the Map is for.
          </p>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            How it works, start to finish
          </h2>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Tell me about your shop", b: "60 seconds, the form below." },
              { n: "02", t: "Grab a time", b: "You'll jump straight to my calendar." },
              { n: "03", t: "I do my homework", b: "I dig into your business before we ever talk." },
              { n: "04", t: "The 20-minute call", b: "I show you the leaks in dollars — then send your Money-Leak Map." },
            ].map((s) => (
              <li key={s.n} className="bg-background p-7">
                <span className="mono-num text-amber">{s.n}</span>
                <h3 className="mt-4 text-xl">{s.t}</h3>
                <p className="mt-3 text-sm text-foreground/80">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Form */}
      <section id="form" className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <h2 className="text-2xl md:text-3xl">Start here — takes about 60 seconds</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface">
            <iframe
              data-tally-src="https://tally.so/embed/RGVJ1J?hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
              loading="lazy"
              width="100%"
              height={181}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Start here — takes about 60 seconds"
            />
          </div>
          <p className="mt-4 text-center text-xs text-dim">
            You'll go straight to my calendar to pick a time. I'll never share your info — no spam, ever.
          </p>
        </div>
      </section>

      {/* 6. Straight answers */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            Straight answers
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                q: "\u201cIs this just a sales call?\u201d",
                a: "No. It\u2019s 20 minutes, it\u2019s free, and you leave with your Money-Leak Map \u2014 even if you never hire me. I\u2019d rather give you something useful than pitch you.",
              },
              {
                q: "\u201cI don\u2019t really have a website or much online.\u201d",
                a: "Even better \u2014 that\u2019s usually where the biggest leaks are hiding. You\u2019ll get more out of this than most.",
              },
              {
                q: "\u201cWhat\u2019s it going to cost me?\u201d",
                a: "The audit \u2014 the call and the Map \u2014 is free. If you want the leaks actually fixed, that\u2019s the paid part, and it\u2019s entirely your call after you\u2019ve seen the Map.",
              },
              {
                q: "\u201cWho am I talking to?\u201d",
                a: "Me. Donovin. I run Clockout solo, out of Roscoe \u2014 you won\u2019t get handed to a rep.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-line bg-surface/50 p-6">
                <p className="font-medium text-foreground">{item.q}</p>
                <p className="mt-3 text-sm text-foreground/80">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Guarantee */}
      <GuaranteeBlock />

      {/* 8. Social proof */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <blockquote className="mx-auto max-w-2xl text-center">
            <p className="text-xl italic text-foreground/80">
              "It\u2019s saved me 10+ hours a week\u2026 complex operations, simplified and automated. Exactly who you want building it."
            </p>
            <footer className="mt-4 text-sm text-dim">
              \u2014 Shea S., Founder
            </footer>
          </blockquote>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-20 md:py-28">
        <div className="container-x text-center">
          <h2 className="mx-auto max-w-3xl text-4xl md:text-5xl">
            Find out what your phone\u2019s been costing you.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-foreground/80">
            20 minutes. Free. Your Money-Leak Map to keep. Grab a time.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/80">
            If we get on the call and I can't point to real money you're leaving on the table, I'll be shocked — and you keep the Map anyway. You're risking 20 minutes.
          </p>
          <div className="mt-8">
            <a
              href="#form"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-amber px-7 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Find the Money I'm Losing →
            </a>
          </div>
          <p className="mt-6 text-sm text-dim">
            Only 8 founding spots — 3 left. Book while there's room.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
