import { FileText, MessageSquare, Key } from "lucide-react";

const steps = [
  {
    n: "01",
    label: "Audit",
    time: "48 hours",
    title: "I trace one real job through your business.",
    body:
      "Phone tree, CRM, dispatch, invoice. I find every place revenue is leaking — missed calls, slow quotes, dropped follow-ups, churned customers. You get a written report with every leak quantified in dollars.",
    icon: FileText,
    artifact: (
      <div className="rounded-[12px] border border-line bg-surface p-5">
        <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
          <span className="mono-num">REVENUE_LEAK_AUDIT.pdf</span>
          <span className="mono-num">12 pages</span>
        </div>
        <div className="space-y-2.5">
          {[
            ["Missed after-hours calls", "$4,200/mo"],
            ["Quotes never followed up", "$2,850/mo"],
            ["Maintenance non-renewals", "$1,900/mo"],
            ["Reviews not requested", "$1,100/mo"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between border-b border-line/60 pb-2 text-sm last:border-0">
              <span className="text-foreground">{k}</span>
              <span className="mono-num font-medium text-primary">{v}</span>
            </div>
          ))}
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-semibold">Total leak</span>
            <span className="mono-num text-xl font-semibold text-foreground">$10,050/mo</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    n: "02",
    label: "Build",
    time: "7 days",
    title: "I build the fix inside the tools you already pay for.",
    body:
      "24/7 front desk, missed-call rescue, quote follow-up, review pipeline, reactivation flows. Installed in your stack. Your team gets zero new logins.",
    icon: MessageSquare,
    artifact: (
      <div className="mx-auto w-full max-w-xs rounded-[20px] border-4 border-foreground/10 bg-background p-3 shadow-card">
        <div className="rounded-[16px] bg-surface p-4">
          <div className="text-xs text-muted-foreground">Missed call · 7:42pm</div>
          <div className="mt-1 text-sm font-medium">+1 (815) 555-0142</div>
          <div className="mt-4 rounded-[12px] bg-primary/10 p-3 text-sm text-foreground">
            Hey, this is Donovin with Northside HVAC — sorry I missed you. Want me to grab
            your address and book a tech first thing tomorrow?
          </div>
          <div className="mt-2 text-right text-xs text-muted-foreground mono-num">7:42pm · auto-sent in 28s</div>
        </div>
      </div>
    ),
  },
  {
    n: "03",
    label: "Handover",
    time: "Day 9",
    title: "You get every login, every doc, and the keys.",
    body:
      "Full demo. Full documentation. Full training. You own the system outright. If I disappeared tomorrow, it keeps running. No subscription. No retainer. No lock-in.",
    icon: Key,
    artifact: (
      <div className="rounded-[12px] border border-line bg-surface p-5">
        <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
          <Key className="h-3.5 w-3.5" aria-hidden /> Handover checklist
        </div>
        <ul className="space-y-2.5 text-sm">
          {[
            "Every login + API key transferred to your accounts",
            "Written runbook for each automation",
            "60-min walkthrough recorded for your team",
            "30 days of post-handover tuning included",
          ].map((x) => (
            <li key={x} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-foreground">{x}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <div className="container-x">
        <div className="eyebrow mb-3">The process</div>
        <h2 className="max-w-3xl text-4xl md:text-5xl">
          Three steps. Nine days. Then it runs without you.
        </h2>

        <div className="mt-14 space-y-20">
          {steps.map((s, idx) => (
            <div
              key={s.n}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="mono-num text-sm text-primary">{s.n}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label} · {s.time}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-4 text-[17px] text-muted-foreground">{s.body}</p>
              </div>
              <div>{s.artifact}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
