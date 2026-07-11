import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CTA } from "@/components/site/CTA";
import { GuaranteeBlock } from "@/components/site/GuaranteeBlock";
import { FinalCta } from "@/components/site/FinalCta";
import { offer } from "@/data/offer";
import { PHONE_DISPLAY, SMS_HREF } from "@/data/phone";
import { faqs } from "@/data/faqs";

const BETA = offer.betaPrice;
const STANDARD = offer.standardPrice;
const CONCIERGE = 750;

const compareRows: { label: string; them: string; us: string }[] = [
  {
    label: "Pricing",
    them: "$797\u2013$5,000/mo, forever",
    us: "Free audit \u00b7 $497 one-time build \u00b7 concierge only if you want it",
  },
  { label: "Contract", them: "12 months, locked in", us: "None. Cancel any month." },
  {
    label: "Ownership",
    them: "They keep it \u2014 leave and it's gone",
    us: "You own everything: logins, code, docs",
  },
  { label: "If you stop paying", them: "It all shuts off", us: "You keep every automation" },
  { label: "Install time", them: "2\u20136 weeks", us: "Days" },
  {
    label: "Guarantee",
    them: "60-day refund, fine print",
    us: "10 hours a week back in 30 days, or I keep working",
  },
];

const objections = [
  {
    q: "\u201cWhy would I pay monthly after I own it?\u201d",
    a: "You don\u2019t have to \u2014 plenty of owners take the build and run it solo forever. The concierge is for the ones who\u2019d rather keep a pro shipping new automations every couple weeks than do it themselves. No contract, cancel the month it stops being worth it.",
  },
  {
    q: "\u201cWhy so cheap for the build?\u201d",
    a: "Beta pricing \u2014 the first clients get the discount in exchange for a before/after case study. It goes to $1,494 after.",
  },
  {
    q: "\u201cWhat if it doesn\u2019t work?\u201d",
    a: "The audit\u2019s free, and the build\u2019s backed by the 10-Hour Guarantee: 10 hours a week back in 30 days, or I keep working \u2014 free.",
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      {
        title:
          "Pricing \u2014 Clockout \u00b7 Start free \u00b7 Own what I build \u00b7 No contracts",
      },
      {
        name: "description",
        content:
          "Start with a free audit. Pay once for the build and own everything. Keep me on as your concierge only if you want \u2014 month to month, cancel anytime.",
      },
      {
        property: "og:title",
        content: "Pricing \u2014 Start free. Own what I build. No contracts.",
      },
      {
        property: "og:description",
        content: "Free audit. One-time build. Month-to-month concierge. You own everything.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <SiteShell>
      {/* 1. Hero */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-4">PRICING</div>
          <h1 className="max-w-4xl text-5xl leading-[1.05] md:text-7xl">
            Start free. Own what I build. No contracts, ever.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            No rented software. No 12-month lock-in. No dashboard you'll never log into. You start
            with a free audit, pay once to get it built (and own every bit of it), and keep me on
            only if it's worth it to you &mdash; cancel any month.
          </p>
        </div>
      </section>

      {/* 2. The Ladder */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">The ladder</div>
          <h2 className="max-w-3xl text-4xl md:text-5xl">Three steps. Stop wherever you want.</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {/* Rung 1 — The Audit */}
            <div className="bg-background flex flex-col p-7">
              <div className="eyebrow">RUNG 1</div>
              <h3 className="mt-3 text-2xl font-semibold">The Audit</h3>
              <div className="mt-2">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Free
                </span>
              </div>
              <p className="mt-4 text-sm text-foreground/75 italic">
                &ldquo;I think I'm losing money but I don't know where.&rdquo;
              </p>
              <ul className="mt-4 flex-1 space-y-3 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1 w-1 rounded-full bg-primary/60 shrink-0" />A
                  20-minute call where I show you exactly where you're leaking jobs and dollars,
                  plus your Money-Leak Map &mdash; your biggest leaks ranked, with the first one I'd
                  fix. Yours to keep, hire me or not.
                </li>
              </ul>
              <CTA to="/assessment" variant="outline" size="md" className="mt-8">
                Find the Money I'm Losing &rarr;
              </CTA>
            </div>

            {/* Rung 2 — The Build */}
            <div className="bg-background flex flex-col p-7 md:-mx-px md:scale-105 md:rounded-2xl md:border md:border-primary/30 md:bg-surface md:shadow-[0_0_40px_-16px_color-mix(in_oklab,var(--color-primary)_25%,transparent)]">
              <div className="eyebrow text-primary">RUNG 2</div>
              <h3 className="mt-3 text-2xl font-semibold">The Build</h3>
              <p className="mt-1 text-xs text-primary/70 font-medium">Most owners start here</p>
              <div className="mt-2">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  ${BETA} beta (reg. ${STANDARD}) &middot; one-time &middot; you own it
                </span>
              </div>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                  24/7 missed-call text-back + AI front desk &mdash; catches the calls you miss on a
                  job (answering services run $300&ndash;$800/mo)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                  Quote follow-up engine &mdash; chases every quote at 1 hour, 1 day, 3 days, 7
                  days; recovers 20&ndash;35% that would've gone cold
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                  Automatic review engine &mdash; turns happy jobs into Google reviews on autopilot
                  (reputation tools run $50&ndash;$150/mo)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                  Past-customer reactivation &mdash; wakes up the list you haven't called in a year
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                  Owner dashboard &mdash; calls answered, quotes recovered, hours saved, in real
                  numbers
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                  30 days of tuning after handover
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                  Your Money-Leak Map from the audit
                </li>
              </ul>
              <p className="mt-4 text-xs text-foreground/70 leading-relaxed">
                A GoHighLevel or marketing agency charges $797&ndash;$1,497 every month to run this
                same stack &mdash; and you never own it. The Build is ${BETA}, once. You own all of
                it, and it keeps running the day you stop paying. Three missed calls a week at a
                $450 ticket is $5,400 walking out the door every month &mdash; the kind of number I
                turn up in a real audit. The fix is a one-time ${BETA}.
              </p>
              <CTA to="/assessment" variant="primary" size="md" className="mt-8">
                Find the Money I'm Losing &rarr;
              </CTA>
            </div>

            {/* Rung 3 — Operator OS Concierge */}
            <div className="bg-background flex flex-col p-7">
              <div className="eyebrow">RUNG 3</div>
              <h3 className="mt-3 text-2xl font-semibold">Operator OS Concierge</h3>
              <div className="mt-2">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  ${CONCIERGE}/mo &mdash; founding rate, locked for life &middot; cancel anytime
                </span>
              </div>
              <p className="mt-4 text-sm text-foreground/75 italic">
                &ldquo;I'd rather keep a pro in my corner than babysit this myself.&rdquo;
              </p>
              <ul className="mt-4 flex-1 space-y-3 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1 block h-1 w-1 rounded-full bg-primary/60 shrink-0" />I stay
                  on as your AI operator &mdash; a new automation every couple weeks, biweekly build
                  sessions, on call between, and a running log of everything we've built. You still
                  own all of it. Month to month. Cancel any time and keep everything.
                </li>
              </ul>
              <p className="mt-4 text-xs text-foreground/70 leading-relaxed">
                A marketing agency charges $2,200&ndash;$5,000/month to manage this and locks you
                into a year. Operator OS is $750/month, cancel any time, and you own everything we
                build.
              </p>
              <p className="mt-2 text-xs text-foreground/60">
                First two weeks free if I stall: if I don't ship a working automation in your first
                two weeks, that month's on me.
              </p>
              <p className="mt-2 text-xs text-foreground/50 italic">
                Note: You only get here after the build &mdash; never a forced upsell. You decide
                once you've seen the work.
              </p>
              <CTA to="/assessment" variant="outline" size="md" className="mt-6">
                Find the Money I'm Losing &rarr;
              </CTA>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Guarantees */}
      <GuaranteeBlock />
      <section className="border-b border-line bg-surface/20 py-16 md:py-20">
        <div className="container-x">
          <div className="eyebrow mb-3">The Two-Week Guarantee</div>
          <h2 className="max-w-3xl text-3xl md:text-4xl">
            The Two-Week Guarantee (the Concierge): if I don't ship a working automation in your
            first two weeks on the concierge, that month is free.
          </h2>
        </div>
      </section>

      {/* 4. The Comparison */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">The comparison</div>
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            What an agency rents you vs. what I build you
          </h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-3 border-b border-line bg-surface text-sm">
                <div className="p-5 text-dim" />
                <div className="p-5 text-foreground/70">Typical agency / SaaS</div>
                <div className="p-5 text-primary">Clockout</div>
              </div>
              {compareRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 text-sm md:text-[15px] ${i % 2 ? "bg-surface/30" : ""}`}
                >
                  <div className="border-r border-line p-5 text-foreground/85">{row.label}</div>
                  <div className="border-r border-line p-5 text-foreground/70">{row.them}</div>
                  <div className="p-5 font-medium text-foreground">{row.us}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Straight Answers */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">Straight answers</div>
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            Questions you&rsquo;re probably thinking. Answered before you ask.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {objections.map((item, i) => (
              <div key={i} className="rounded-2xl border border-line bg-surface/50 p-6">
                <p className="font-medium text-foreground">{item.q}</p>
                <p className="mt-3 text-sm text-foreground/80">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Proof */}
      <section className="border-b border-line py-16 md:py-20">
        <div className="container-x">
          <blockquote className="mx-auto max-w-2xl text-center text-xl leading-relaxed text-foreground/85">
            &ldquo;It's saved me 10+ hours a week&hellip; complex operations, simplified and
            automated. Exactly who you want building it.&rdquo;
            <footer className="mt-4 text-sm text-dim">&mdash; Shea S., Founder</footer>
          </blockquote>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="border-b border-line bg-surface">
        <div className="container-x py-24 text-center md:py-32">
          <h2 className="mx-auto max-w-3xl text-4xl md:text-6xl">
            Start with the free audit. Decide the rest later.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            20 minutes, free, and your Money-Leak Map to keep.
          </p>
          <p className="mt-4 text-sm text-foreground/70">
            Only 8 founding spots &mdash; 3 left. Founding pricing locks for life while there's
            room.
          </p>
          <div className="mt-9 flex justify-center">
            <CTA to="/assessment" variant="primary" size="lg">
              Find the Money I'm Losing &rarr;
            </CTA>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Or text{" "}
            <a className="font-medium text-foreground underline underline-offset-4" href={SMS_HREF}>
              AUDIT to {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            No contracts. Cancel anytime. You own everything.
          </p>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="border-b border-line py-20">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="eyebrow mb-3">Common questions</div>
            <h2 className="text-4xl md:text-5xl">The honest pricing FAQ.</h2>
            <p className="mt-5 text-foreground/75">
              More questions on the{" "}
              <Link to="/faq" className="text-amber hover:underline">
                full FAQ page
              </Link>
              .
            </p>
          </div>
          <div className="space-y-1">
            {faqs.slice(0, 6).map((f) => (
              <details
                key={f.q}
                className="group rounded-lg border border-line bg-surface/40 p-5 open:bg-surface"
              >
                <summary className="cursor-pointer list-none text-lg font-medium text-foreground">
                  {f.q}
                </summary>
                <p className="mt-3 text-foreground/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
