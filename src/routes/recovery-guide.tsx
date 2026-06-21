import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/recovery-guide")({
  head: () => ({
    meta: [
      { title: "10-Hour Recovery Guide — Clockout" },
      { name: "description", content: "Five strategies to recover 10 hours a week in your service business — without hiring, without lock-in contracts, without burning out." },
      { property: "og:title", content: "10-Hour Recovery Guide — Clockout" },
      { property: "og:description", content: "Five strategies to recover 10 hours a week in your service business. Free download." },
    ],
    links: [{ rel: "canonical", href: "/recovery-guide" }],
  }),
  component: RecoveryGuide,
});

const strategies = [
  {
    num: "01",
    title: "Catch every call — or catch it within 60 seconds",
    problem:
      "62% of calls to home service businesses go unanswered (ServiceTitan, 2025). 86% of callers who hit voicemail never leave a message. The lead is gone in an hour.",
    fix: "You don't need a receptionist. You need a 24/7 answering system that triages, qualifies, and books before you even pick up. Missed calls should auto-text a callback link within 30 seconds.",
    win: "Recover 3–5 hours/week managing callbacks. Plus the revenue from leads you'd have lost entirely.",
  },
  {
    num: "02",
    title: "Stop quoting into the void",
    problem:
      "Most quotes go cold after 48 hours. The customer got three bids, yours landed second, and you never followed up. That job is gone. You didn't even know you lost it.",
    fix: "Automated quote follow-up: day 1 check-in, day 3 testimonial from a similar job, day 7 final nudge. This recovers 20–35% of unsigned quotes — documented across every trade.",
    win: "Recover 1–2 hours/week of manual follow-up + 20–35% more signed jobs without any extra selling.",
  },
  {
    num: "03",
    title: "Automate the booking & dispatch loop",
    problem:
      "Schedule changes texted to the wrong tech. Dispatchers quitting after 90 days. Emergency calls landing in a voicemail nobody checks. The schedule controls your day instead of the other way around.",
    fix: "Build a single intake-to-dispatch pipeline: all booking channels (phone, text, web, portal) feed one queue, auto-routed by urgency and tech availability. The dispatcher works the queue instead of managing chaos.",
    win: "Recover 2–4 hours/week of dispatch overhead. Fewer scheduling errors means fewer angry customers and fewer unpaid callbacks.",
  },
  {
    num: "04",
    title: "Let your past customers do your marketing",
    problem:
      "You earned a 5-star review. You never asked for it. Your competitor has 4x the Google count. Your best referral source is sitting silent because nobody triggered the ask.",
    fix: "Post-job review request automated by job completion: 5-stars to Google, anything less straight to your phone. Same for repeat-business triggers — maintenance reminders, seasonal check-ins, renewal sequences.",
    win: "Recover 1–2 hours/week of follow-up. More reviews = more organic calls. More repeat business = higher customer lifetime value without spending on ads.",
  },
  {
    num: "05",
    title: "Stop financing your customers",
    problem:
      "Invoices that don't go out until Thursday. Receivables stretched 60 days. You're running a business and a bank at the same time.",
    fix: "Invoice and payment follow-up automated by job completion. Payment reminders, late-payment sequences, and digital payment links sent on autopilot. Cash flow tightens from 60 days to 2 weeks without a single awkward phone call.",
    win: "Recover 2–3 hours/week chasing payments. Better cash flow means you stop turning down work because you're waiting on money from last month.",
  },
];

function RecoveryGuide() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x max-w-3xl">
          <div className="eyebrow mb-4">Free guide</div>
          <h1 className="text-5xl leading-[1.05] md:text-7xl">
            The 10-Hour Recovery Guide
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Five strategies to take back a full day a week in your service business. No contracts. No hiring. No fluff.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            10 minutes to read. Start implementing Monday.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-b border-line py-12 md:py-16">
        <div className="container-x max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground/85">
            You didn't start your trade to sit behind a desk. But here you are: returning calls at 7pm, chasing invoices on Saturday, managing a schedule that manages you back.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/85">
            The problem isn't that you're bad at business. It's that your business has no systems. Every incoming call, every quote, every booking, every invoice is a manual decision that runs on your attention. And attention is the one thing you can't scale.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/85">
            This guide covers the five biggest time leaks in service businesses and the exact playbook to fix each one. Not theory — tactics I've used building systems for HVAC, plumbing, electrical, and other trades across Northern Illinois.
          </p>
          <p className="mt-6 rounded-lg border border-line bg-surface/40 p-4 text-sm text-muted-foreground">
            <strong className="text-foreground">One caveat:</strong> These are strategies, not software recommendations. The tools don't matter. The system does. If you want the full audit with dollar figures specific to your shop,{" "}
            <a href="/assessment" className="underline underline-offset-2 hover:text-primary">book your Money-Leak Map</a>.
          </p>
        </div>
      </section>

      {/* Strategies */}
      {strategies.map((s) => (
        <section key={s.num} className="border-b border-line py-14 md:py-20">
          <div className="container-x max-w-3xl">
            <div className="mono-num text-xs tracking-wider text-primary">{s.num}</div>
            <h2 className="mt-3 text-3xl md:text-4xl">{s.title}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1fr]">
              <div>
                <div className="eyebrow mb-2 text-xs">The problem</div>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{s.problem}</p>
              </div>
              <div>
                <div className="eyebrow mb-2 text-xs">The fix</div>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{s.fix}</p>
                <div className="mt-4 rounded-md bg-primary/10 px-3 py-2 text-sm text-primary">
                  <strong>Your win:</strong> {s.win}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Low-hanging fruit summary */}
      <section className="border-b border-line py-16 md:py-20">
        <div className="container-x max-w-3xl">
          <div className="eyebrow mb-3">Quick math</div>
          <h2 className="text-3xl md:text-4xl">
            What your 10 hours are worth
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-[12px] border border-line bg-line md:grid-cols-3">
            <div className="bg-background p-6">
              <div className="mono-num text-2xl text-primary">2 hrs/day</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Average tech time lost to admin and paperwork. That's 25% of every productive day.
              </p>
            </div>
            <div className="bg-background p-6">
              <div className="mono-num text-2xl text-primary">20–35%</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Quote recovery rate when follow-up is automated. Not more selling — just better timing.
              </p>
            </div>
            <div className="bg-background p-6">
              <div className="mono-num text-2xl text-primary">$0/mo</div>
              <p className="mt-2 text-sm text-muted-foreground">
                No contracts. Automation built inside tools you already use. You own everything.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            10 hours a week is 520 hours a year. At $150/hr shop rate, that's <strong className="text-foreground">$78,000 in recovered productive time</strong> — plus the revenue you stop leaking.
          </p>
        </div>
      </section>

      <FinalCta headline="Want me to find your specific leaks? Money-Leak Map. Flat fee." />
    </SiteShell>
  );
}
