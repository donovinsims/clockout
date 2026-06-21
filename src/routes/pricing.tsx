import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { OfferCard } from "@/components/site/OfferCard";
import { GuaranteeBlock } from "@/components/site/GuaranteeBlock";
import { FinalCta } from "@/components/site/FinalCta";
import { faqs } from "@/data/faqs";
import { offer } from "@/data/offer";

const BETA = offer.betaPrice;
const STANDARD = offer.standardPrice;

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: `Pricing — Clockout · $${BETA} beta · No contracts.` },
      { name: "description", content: `$${BETA} beta. Full automation build. No contracts. Cancel anytime. You own everything. Standard price after beta: $${STANDARD}.` },
      { property: "og:title", content: `Clockout pricing — $${BETA} beta · You own it` },
      { property: "og:description", content: "Flat-fee automation builds. No contracts. Cancel anytime. Beta capped at 8 shops." },
    ],
  }),
  component: PricingPage,
});

const compareRows: { label: string; them: string; us: string }[] = [
  { label: "Pricing model", them: "$500–$5,000 / month forever", us: `$${BETA} once. Done.` },
  { label: "Contract length", them: "12-month lock-in", us: "No contract. Cancel anytime." },
  { label: "Who owns the system", them: "They do. You rent.", us: "You do. Outright." },
  { label: "Time to install", them: "2–6 weeks setup", us: "7 days end to end" },
  { label: "Built for your trade", them: "Generic CRM, you configure", us: "Vertical-specific, configured for you" },
  { label: "Login proliferation", them: "Yet another dashboard", us: "Lives inside your existing stack" },
  { label: "If they go out of business", them: "Your system dies with them", us: "Yours keeps running" },
  { label: "Guarantee", them: "60-day refund (small print)", us: "Money-Back Guarantee — full refund or free until it works" },
];

function PricingPage() {
  return (
    <SiteShell>
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-4">Pricing</div>
          <h1 className="max-w-4xl text-5xl leading-[1.05] md:text-7xl">
            ${BETA}. One time. You own it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            No contracts. Cancel anytime. You own everything. One flat fee &mdash; you own the whole system. If it doesn't save you 10 hours a week within 30 days, I keep working until it does. That's on me.
          </p>
          <div className="mt-8 max-w-xl rounded-xl border border-line bg-surface/40 px-5 py-4 text-sm text-muted-foreground">
            &ldquo;The automations run perfectly in the background, making the entire client experience incredibly smooth.&rdquo; &mdash; Shea S., Trading Community
          </div>
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
            What $4,000/month looks like vs. one flat build fee.
          </h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-3 border-b border-line bg-surface text-sm">
                <div className="p-5 text-dim">Compared to</div>
                <div className="p-5 text-foreground/70">Typical agency / SaaS</div>
                <div className="p-5 text-primary">Clockout</div>
              </div>
              {compareRows.map((row, i) => (
                <div key={row.label} className={`grid grid-cols-3 text-sm md:text-[15px] ${i % 2 ? "bg-surface/30" : ""}`}>
                  <div className="border-r border-line p-5 text-foreground/85">{row.label}</div>
                  <div className="border-r border-line p-5 text-foreground/70">{row.them}</div>
                  <div className="p-5 text-foreground font-medium">{row.us}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objection mini-cards */}
      <section className="border-b border-line py-16 md:py-20">
        <div className="container-x">
          <div className="eyebrow mb-3">Three things people ask before signing up</div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            <div className="bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground">What if it doesn&rsquo;t work?</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Money-Back Guarantee: if the Money-Leak Map doesn't identify $10K/year in recoverable leaks, you don't pay a dime. Not a refund &mdash; a commitment to the result.
              </p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground">Why is it so affordable?</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Beta pricing for the first 8 clients in exchange for letting me study your operation. Same build I&rsquo;ll charge ${STANDARD} for after launch. 3 spots left.
              </p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground">I already tried automation.</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                You tried a template. I build custom to your exact workflow, inside the tools you already use. If I can&rsquo;t find $10K in leaks during the Money-Leak Map, you pay nothing and walk away.
              </p>
            </div>
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
