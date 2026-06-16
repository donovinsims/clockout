import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { OfferCard } from "@/components/site/OfferCard";
import { GuaranteeBlock } from "@/components/site/GuaranteeBlock";
import { FinalCta } from "@/components/site/FinalCta";
import { Check, X } from "lucide-react";
import { faqs } from "@/data/faqs";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Clockout · $497 beta · No subscription, ever" },
      { name: "description", content: "$497 all-in beta pricing. Audit + full automation build. No retainer, no subscription. You own everything. Standard price after beta: $1,494." },
      { property: "og:title", content: "Clockout pricing — $497 beta · You own it" },
      { property: "og:description", content: "Flat-fee automation builds. No monthly software fees. Beta capped at 15 shops." },
    ],
  }),
  component: PricingPage,
});

const compareRows: { label: string; them: string; us: string; themGood?: boolean }[] = [
  { label: "Pricing model", them: "$500–$5,000 / month forever", us: "$497 once. Done." },
  { label: "Contract length", them: "12-month lock-in", us: "No contract" },
  { label: "Who owns the system", them: "They do. You rent.", us: "You do. Outright." },
  { label: "Time to install", them: "2–6 weeks setup", us: "7 days end to end" },
  { label: "Built for your trade", them: "Generic CRM, you configure", us: "Vertical-specific, configured for you" },
  { label: "Login proliferation", them: "Yet another dashboard", us: "Lives inside your existing stack" },
  { label: "If they go out of business", them: "Your system dies with them", us: "Yours keeps running" },
  { label: "Guarantee", them: "60-day refund (small print)", us: "10 hrs/week back in 30 days or free" },
];

function PricingPage() {
  return (
    <SiteShell>
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-4">Pricing</div>
          <h1 className="max-w-4xl text-5xl leading-[1.05] md:text-7xl">
            $497. One time. You own it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            No retainer. No subscription. No "starter plan" upsell at month three. The beta price gets you the same audit and the same build I'll charge $1,494 for after the first 15 case studies are done.
          </p>
        </div>
      </section>

      <section className="border-b border-line py-16 md:py-20">
        <div className="container-x">
          <OfferCard />
        </div>
      </section>

      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">Compare</div>
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            What you'd pay an agency vs. what you pay Clockout.
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-line">
            <div className="grid grid-cols-3 border-b border-line bg-surface text-sm">
              <div className="p-5 text-dim">Compared to</div>
              <div className="p-5 text-foreground/70">Typical agency / SaaS</div>
              <div className="p-5 text-amber">Clockout</div>
            </div>
            {compareRows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 text-sm md:text-[15px] ${i % 2 ? "bg-surface/30" : ""}`}>
                <div className="border-r border-line p-5 text-foreground/85">{row.label}</div>
                <div className="border-r border-line p-5 text-foreground/70">
                  <span className="inline-flex items-center gap-2"><X className="h-4 w-4 text-destructive" />{row.them}</span>
                </div>
                <div className="p-5 text-foreground">
                  <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-amber" />{row.us}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-20">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="eyebrow mb-3">Common questions</div>
            <h2 className="text-4xl md:text-5xl">The honest pricing FAQ.</h2>
            <p className="mt-5 text-foreground/75">More questions on the <Link to="/faq" className="text-amber hover:underline">full FAQ page</Link>.</p>
          </div>
          <div className="space-y-1">
            {faqs.slice(0, 6).map((f) => (
              <details key={f.q} className="group rounded-lg border border-line bg-surface/40 p-5 open:bg-surface">
                <summary className="cursor-pointer list-none text-lg font-medium text-foreground">
                  {f.q}
                </summary>
                <p className="mt-3 text-foreground/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <GuaranteeBlock />
      <FinalCta />
    </SiteShell>
  );
}
