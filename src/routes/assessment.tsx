import { createFileRoute } from "@tanstack/react-router";

const CAL_URL = "https://cal.com/donovin";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Free Operations Audit — Clockout · 20 minutes, written report" },
      {
        name: "description",
        content:
          "A 20-minute call. A written ROI report. An effort/impact matrix. No pitch. No obligation. Roscoe · Rockford · Beloit.",
      },
      { property: "og:title", content: "Free Operations Audit — Clockout" },
      {
        property: "og:description",
        content:
          "20 minutes. Written report. The exact leak, in dollars. Then you decide what to do with it.",
      },
    ],
  }),
  component: Assessment,
});

const ITEMS = [
  {
    h: "A written leak report",
    p: "Where you're losing money, in dollars per month and per year. No fluff.",
  },
  {
    h: "An effort / impact matrix",
    p: "Every leak ranked by what it costs to fix versus what it brings back.",
  },
  {
    h: "A single recommendation",
    p: "The one fix I'd install first. With the price, known upfront. No surprises.",
  },
  {
    h: "A walk-away",
    p: "If there's nothing worth fixing, I'll say so. You keep the report.",
  },
];

const ITEMS_FAQ = [
  {
    q: "How long is the call?",
    a: "20 minutes. I respect your time. If we run long, it's because you wanted to.",
  },
  {
    q: "What do I need to bring?",
    a: "Nothing. Just be near your phone and your normal day. I'll ask what I need.",
  },
  {
    q: "Will you pitch me?",
    a: "No. You'll leave with a written report. If you want to hire me, you'll tell me.",
  },
  {
    q: "Is it really free?",
    a: "Yes. I do this because most of the time the math sells itself. I don't need to.",
  },
  {
    q: "Can we do it in person?",
    a: "If you're in Roscoe, Rockford, Loves Park, Machesney, South Beloit, or anywhere in Winnebago / Boone County — yes. I'll drive.",
  },
];

function Assessment() {
  return (
    <>
      <section className="hero" style={{ minHeight: "auto" }} aria-labelledby="as-h">
        <div className="hero__rail">
          <span className="hero__rail-dot" aria-hidden="true" />
          <span>Free · 20 minutes · written report · no pitch</span>
        </div>
        <h1 className="hero__display" id="as-h" style={{ maxWidth: "22ch" }}>
          <span className="hero__line">Find the leak.</span>
          <span className="hero__line">
            <em>In dollars.</em>
          </span>
        </h1>
        <div className="hero__ctas">
          <a href={CAL_URL} target="_blank" rel="noreferrer" className="cta cta--primary cta--lg">
            <span>Book your free audit</span>
            <span className="cta__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>

      <section className="how">
        <header className="section-head">
          <p className="section-eyebrow">
            <span className="num tnum">01</span> · What you get
          </p>
          <h2 className="section-h">Four things. In writing. After 20 minutes.</h2>
        </header>
        <div className="how__steps" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {ITEMS.map((i, idx) => (
            <div key={i.h} className="how__step">
              <p className="how__num tnum">0{idx + 1}</p>
              <h3 className="how__h">{i.h}</h3>
              <p className="how__p">{i.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="proof">
        <div className="proof__grid" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "start" }}>
          <div className="proof__copy">
            <p className="section-eyebrow">
              <span className="num tnum">02</span> · Who this is for
            </p>
            <h2 className="section-h">Owners. Bottlenecks. Both.</h2>
            <p>
              You're still the person answering calls, chasing leads, doing admin at the kitchen
              table. Your business is good. The system around it is the problem.
            </p>
            <ul className="proof__list">
              <li>HVAC, plumbing, electrical, auto repair</li>
              <li>Real estate, nail salons, barbershops, landscaping</li>
              <li>Any local owner whose phone is the front desk</li>
              <li>You're in or near the Rockford / Beloit corridor</li>
            </ul>
          </div>
          <div className="proof__copy">
            <p className="section-eyebrow">
              <span className="num tnum">03</span> · Who this isn't for
            </p>
            <h2 className="section-h">Tire-kickers. Big agencies.</h2>
            <p>
              If you want a monthly retainer with a fancy dashboard and a quarterly business
              review, I'm not your guy. If you want a SaaS tool with 47 features you'll never use,
              also not me.
            </p>
            <ul className="proof__list">
              <li>Not a marketing agency</li>
              <li>Not a SaaS subscription</li>
              <li>Not a "free strategy session" that's actually a 90-minute pitch</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="guarantee">
        <div className="guarantee__card">
          <p className="guarantee__eyebrow">Investment</p>
          <h2 className="guarantee__h">
            The audit is free. The fix is <em>flat-fee.</em>
          </h2>
          <p className="guarantee__p">
            Single System Fix: $300–$800. Operations Stack: $1,200–$3,000. One-time. You own the
            system. We install your system in 7 days. If it doesn't recover 10 hours a week within
            30 days, we keep working for free until it does.
          </p>
          <a href={CAL_URL} target="_blank" rel="noreferrer" className="cta cta--primary cta--lg">
            <span>Book your free audit</span>
            <span className="cta__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>

      <section className="faq">
        <header className="section-head">
          <p className="section-eyebrow">
            <span className="num tnum">04</span> · Questions
          </p>
          <h2 className="section-h">Quick answers.</h2>
        </header>
        <div className="faq__list">
          {ITEMS_FAQ.map((f) => (
            <details key={f.q} className="faq__item">
              <summary>
                <span>{f.q}</span>
                <span className="faq__chev" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq__a">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="finalcta">
        <div className="finalcta__inner">
          <h2 className="finalcta__h">
            One call. <em>One number.</em>
          </h2>
          <p className="finalcta__p">
            Twenty minutes to know exactly what your operational chaos is costing you.
          </p>
          <a href={CAL_URL} target="_blank" rel="noreferrer" className="cta cta--primary cta--lg">
            <span>Book your free audit</span>
            <span className="cta__arrow" aria-hidden="true">
              →
            </span>
          </a>
          <p className="finalcta__guar">
            No pitch on the call. You leave with a written report either way.
          </p>
        </div>
      </section>
    </>
  );
}
