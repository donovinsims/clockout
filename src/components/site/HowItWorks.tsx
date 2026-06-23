import { FileText, MessageSquare, Key } from "lucide-react";
import { getIndustry } from "@/data/industries";

function getDemoText(slug?: string) {
  if (!slug) {
    return "Hey, this is Donovin with Northside HVAC — sorry I missed you. Want me to grab your address and book a tech first thing tomorrow?";
  }
  const industry = getIndustry(slug);
  if (!industry) {
    return "Hey, this is Donovin — sorry I missed you. Want me to grab your details and get you on the schedule?";
  }
  return industry.demoText;
}

export function HowItWorks({ slug }: { slug?: string }) {
  const stepArtifacts = [
    // 01 — Call
    {
      n: "01",
      label: "Call",
      time: "20 min",
      title: "We trace one real job together \u2014 for free.",
      body:
        "20-minute call. Phone tree, CRM, dispatch, invoice. I find every place revenue is leaking \u2014 missed calls, slow quotes, dropped follow-ups, churned customers. Every leak priced in dollars. You keep the report either way.",
      artifact: (
        <div className="rounded-[12px] border border-line bg-surface p-5">
          <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
            <span className="mono-num">SAMPLE-Money-Leak-Map.pdf</span>
            <span className="mono-num">12 pages</span>
          </div>
          <p className="mb-3 text-[11px] italic text-dim">
            Sample Money-Leak Map — illustrative; your real numbers come from the call.
          </p>
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
    // 02 — Build
    {
      n: "02",
      label: "Build",
      time: "installed in days",
      title: "I build the fix inside the tools you already pay for.",
      body:
        "24/7 front desk, missed-call rescue, quote follow-up, review pipeline, reactivation flows. Installed in your stack. Your team gets zero new logins. You own every login and line of code.",
      artifact: (
        <div className="mx-auto w-full max-w-xs rounded-[20px] border-4 border-foreground/10 bg-background p-3 shadow-card">
          <div className="rounded-[16px] bg-surface p-4">
            <div className="text-xs text-muted-foreground">Missed call · 7:42pm</div>
            <div className="mt-1 text-sm font-medium">+1 (815) 555-0142</div>
            <div className="mt-4 rounded-[12px] bg-primary/10 p-3 text-sm text-foreground">
              {getDemoText(slug)}
            </div>
            <div className="mt-2 text-right text-xs text-muted-foreground mono-num">7:42pm · auto-sent in 28s</div>
          </div>
        </div>
      ),
    },
    // 03 — You own it
    {
      n: "03",
      label: "You own it",
      time: "no contract",
      title: "Keep me on as your concierge, or don\u2019t.",
      body:
        "Month to month, your call. I keep building new automations every couple of weeks and stay on call between. Or run it solo forever \u2014 you own every login and line of code either way. No contract, cancel anytime.",
      artifact: (
        <div className="rounded-[12px] border border-line bg-surface p-5">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
            <Key className="h-3.5 w-3.5" aria-hidden /> Ownership checklist
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

  return (
    <section className="border-b border-line py-20 md:py-28">
      <div className="container-x">
        <div className="eyebrow mb-3">The process</div>
        <h2 className="max-w-3xl text-4xl md:text-5xl">
          Free to start. Built in days.
          <br />
          Yours to keep.
        </h2>

        <div className="mt-14 space-y-20">
          {stepArtifacts.map((s, idx) => (
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
