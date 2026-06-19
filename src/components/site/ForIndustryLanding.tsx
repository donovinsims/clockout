import { SiteShell } from "./SiteShell";
import { FinalCta } from "./FinalCta";
import { GuaranteeBlock } from "./GuaranteeBlock";
import { CTA } from "./CTA";
import { OfferCard } from "./OfferCard";
import { BetaSpots } from "./BetaSpots";
import { Check } from "lucide-react";
import type { Industry } from "@/data/industries";

export function ForIndustryLanding({ industry: i }: { industry: Industry }) {
  const slugDisplay = i.slug.replace(/-/g, " ");
  const title = `${i.name} Automation — Clockout · 9-Day Builds, You Own It`;

  return (
    <SiteShell>
      {/* Hero */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x max-w-4xl">
          <div className="eyebrow mb-4">
            For {slugDisplay} shops
          </div>
          <h1 className="text-5xl leading-[1.05] md:text-7xl">
            {i.heroHeadline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {i.heroSub(i.town)}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CTA to="/assessment" size="lg">
              Book the 48-hour audit →
            </CTA>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <BetaSpots />
            <span aria-hidden>·</span>
            <span>10 hrs/week back in 30 days — or free</span>
          </div>
        </div>
      </section>

      {/* Proof stats */}
      <section className="border-b border-line py-12 md:py-16">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-[12px] border border-line bg-line md:grid-cols-3">
            {i.proof.slice(0, 3).map((p) => (
              <div key={p.label} className="bg-background p-6">
                <div className="mono-num text-3xl text-primary">{p.stat}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="border-b border-line py-16 md:py-20">
        <div className="container-x max-w-4xl">
          <div className="eyebrow mb-3">The leaks</div>
          <h2 className="text-4xl md:text-5xl">
            {i.painHeadline}
          </h2>
          <div className="mt-10 space-y-4">
            {i.pains.slice(0, 4).map((p, idx) => (
              <div key={p} className="flex gap-4 rounded-[12px] border border-line bg-surface/40 p-5">
                <span className="mono-num shrink-0 text-primary">{String(idx + 1).padStart(2, "0")}</span>
                <span className="text-[17px] text-foreground/90">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What gets built */}
      <section className="border-b border-line py-16 md:py-20">
        <div className="container-x">
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            What a {slugDisplay} automation build looks like
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[12px] border border-line bg-line md:grid-cols-2">
            {i.built.slice(0, 4).map((b) => (
              <div key={b} className="bg-background p-6">
                <div className="flex items-start gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-[16px] text-foreground/90">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="border-b border-line py-16 md:py-20">
        <div className="container-x">
          <h2 className="mb-10 max-w-3xl text-4xl md:text-5xl">
            $497, all-in. You own everything. 10 hrs/week back in 30 days or the build is free.
          </h2>
          <OfferCard />
        </div>
      </section>

      <GuaranteeBlock />
      <FinalCta
        headline={`Tell me about your ${i.name.toLowerCase()} shop. I'll show you where the time goes.`}
      />
    </SiteShell>
  );
}
