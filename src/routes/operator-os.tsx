import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CTA } from "@/components/site/CTA";
import { FinalCta } from "@/components/site/FinalCta";
import { Inbox, GitBranch, Bell, Sunrise, Calendar, MessageCircle, Sparkles } from "lucide-react";

export const Route = createFileRoute("/operator-os")({
  head: () => ({
    meta: [
      { title: "Operator OS — A personal operating system for founders & operators" },
      { name: "description", content: "Capture every signal. Route by urgency. Surface only what needs you. A premium personal operating system that ends the fire-drill cycle for the people who run things." },
      { property: "og:title", content: "Operator OS — End the fire-drill cycle. Run your week on a rail." },
      { property: "og:description", content: "A personal operating system for founders, operators, and managers. Inbox triage, calendar defense, follow-up cadence, weekly review — handled." },
    ],
    links: [{ rel: "canonical", href: "/operator-os" }],
  }),
  component: OperatorPage,
});

const pillars = [
  {
    icon: Inbox,
    n: "01",
    title: "Capture",
    body: "Every signal — every call, text, email, voice memo, calendar invite, Slack ping, even the note you scribble in the truck — lands in one place. You stop running your week on memory because nothing depends on you remembering it anymore.",
  },
  {
    icon: GitBranch,
    n: "02",
    title: "Route",
    body: "Each captured signal gets triaged by what it actually is. Emergencies escalate. Drudgery handles itself. Decisions that need a human get teed up with full context, so the moment you sit down you're already moving — never starting from zero.",
  },
  {
    icon: Bell,
    n: "03",
    title: "Surface",
    body: "You see only what genuinely needs your attention. A hire to make. A price to negotiate. A relationship to repair. Everything else runs on autopilot. Most tools try to make you faster at busywork. Operator OS makes the busywork disappear.",
  },
];

const dayInLife = [
  {
    icon: Sunrise,
    time: "6:42 AM",
    title: "Morning brief, already written",
    body: "Before your feet hit the floor, Operator OS has read every overnight signal and pre-built your day on one screen. Top three moves. Anything urgent. The two emails you actually need to answer. That's it.",
  },
  {
    icon: Calendar,
    time: "10:15 AM",
    title: "Your calendar defends itself",
    body: "Meeting requests get sorted by who's asking and why. Low-value asks get a polite, written-in-your-voice decline. Real ones get slotted into the windows you protect for deep work.",
  },
  {
    icon: MessageCircle,
    time: "2:30 PM",
    title: "Follow-ups that actually happen",
    body: "Every loose end from the last 30 days — the quote you sent, the favor you owed, the intro you promised — is being chased on cadence. You don't remember to follow up. The system never forgets.",
  },
  {
    icon: Sparkles,
    time: "5:45 PM",
    title: "End-of-day, end-of-day",
    body: "Tomorrow is already staged. The mental tabs are closed. You leave work at work — because the system carries what your head used to carry.",
  },
];

function OperatorPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="container-x relative py-24 md:py-32">
          <div className="eyebrow mb-5">Operator OS · Personal operating system</div>
          <h1
            className="max-w-4xl font-display"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.04, letterSpacing: "-0.02em", fontWeight: 600 }}
          >
            Your brain wasn't built to hold 200 open tabs. Operator OS is.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-foreground/80 md:text-xl">
            A premium personal operating system for founders, operators, and managers — the people who run things. It captures everything you're tracking, routes it by what actually matters, and hands you back the hours you've been losing to your own inbox.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CTA to="/assessment" size="lg">Join the early-access list →</CTA>
            <CTA to="/services" variant="outline" size="lg">See the business builds</CTA>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Currently piloting with a small founding cohort. Early-access pricing locks in for life.
          </p>
        </div>
      </section>

      {/* The promise */}
      <section className="border-b border-line bg-surface/40 py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            <div className="eyebrow mb-3">The promise</div>
            <h2 className="text-4xl md:text-5xl">
              Run your week on a rail, not a fire alarm.
            </h2>
          </div>
          <div className="space-y-5 text-[17px] text-foreground/85">
            <p>
              You already know the feeling. Sunday night dread. The mental list that runs while you're trying to fall asleep. The 47 unread threads you keep promising to "get to this week."
            </p>
            <p>
              That isn't a discipline problem. It's a system problem. You're holding too much in your head, and no productivity app fixes it because they all just add another inbox to check.
            </p>
            <p className="text-foreground">
              Operator OS works the other direction. It pulls everything <em>out</em> of your head, decides what matters, and only interrupts you when there's a real call to make.
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">How it works</div>
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            Three moves. That's the whole trick.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[12px] border border-line bg-line md:grid-cols-3">
            {pillars.map((s) => (
              <div key={s.n} className="bg-background p-7 md:p-9">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-[12px] border border-primary/30 bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="mono-num text-primary">{s.n}</span>
                </div>
                <h3 className="mt-7 text-3xl">{s.title}</h3>
                <p className="mt-4 text-foreground/80">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A day in the life */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">A day on Operator OS</div>
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            What "handled" actually feels like.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[12px] border border-line bg-line md:grid-cols-2">
            {dayInLife.map((d) => (
              <div key={d.time} className="bg-background p-7">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                    <d.icon className="h-4 w-4" />
                  </div>
                  <span className="mono-num text-sm text-muted-foreground">{d.time}</span>
                </div>
                <h3 className="mt-5 text-2xl">{d.title}</h3>
                <p className="mt-3 text-foreground/80">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get back */}
      <section className="border-b border-line bg-surface/40 py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">What you get back</div>
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            Not more productivity. Less of your life spent managing your life.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { stat: "10+ hrs", label: "per week, off your calendar and out of your inbox." },
              { stat: "0", label: "new apps to learn. It runs inside the tools you already use." },
              { stat: "1", label: "screen that tells you exactly what your day actually requires." },
            ].map((b) => (
              <div key={b.label} className="rounded-[12px] border border-line bg-background p-7">
                <div className="mono-num text-4xl text-primary md:text-5xl">{b.stat}</div>
                <p className="mt-4 text-foreground/80">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two doors */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <div className="rounded-[12px] border border-line bg-surface p-8">
            <div className="eyebrow mb-3">For your shop</div>
            <h3 className="text-3xl">Operator OS for service businesses</h3>
            <p className="mt-4 text-foreground/80">
              Delivered as a 9-day Clockout build. We map your workflow, install the automations inside your existing stack, and hand you every credential.
            </p>
            <ul className="mt-6 space-y-2 text-foreground/80">
              <li>· 48-hour audit, 7-day build</li>
              <li>· Lives in the tools you already pay for</li>
              <li>· You own it outright. Flat fee.</li>
            </ul>
            <div className="mt-8">
              <CTA to="/pricing" size="md">See pricing →</CTA>
            </div>
          </div>
          <div className="rounded-[12px] border border-primary/40 bg-surface p-8">
            <div className="eyebrow mb-3">For you personally</div>
            <h3 className="text-3xl">Operator OS for founders & operators</h3>
            <p className="mt-4 text-foreground/80">
              The same framework, tuned to your life. Inbox triage, calendar defense, follow-up cadence, and a weekly review that actually happens — on a rail.
            </p>
            <ul className="mt-6 space-y-2 text-foreground/80">
              <li>· Personal capture system that holds everything</li>
              <li>· Triage rules tuned to your role and your goals</li>
              <li>· A weekly surface session with you and your data</li>
            </ul>
            <div className="mt-8">
              <CTA to="/assessment" size="md">Join the early list →</CTA>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        headline="Stop running the day on memory."
        sub="Whether it's your shop or your week, Capture → Route → Surface ends the fire-drill cycle. Start with a 20-minute assessment."
      />
    </SiteShell>
  );
}
