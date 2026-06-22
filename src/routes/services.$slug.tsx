import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ProofBar } from "@/components/site/ProofBar";
import { HowItWorks } from "@/components/site/HowItWorks";
import { OfferCard } from "@/components/site/OfferCard";
import { GuaranteeBlock } from "@/components/site/GuaranteeBlock";
import { FinalCta } from "@/components/site/FinalCta";
import { CTA } from "@/components/site/CTA";
import { BetaSpots } from "@/components/site/BetaSpots";
import { getIndustry } from "@/data/industries";
import { getHeroSub } from "@/lib/heroSub";
import { towns as allServiceTowns } from "@/data/serviceArea";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ params, loaderData }) => {
    const i = loaderData?.industry;
    if (!i) {
      return {
        meta: [
          { title: "Industry not found — Clockout" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${i.name} Automation in ${i.town}, IL — Clockout · Built in Days, You Own the System`;
    const description = `Flat-fee automation builds for ${i.name.toLowerCase()} shops in ${i.town} and across the Rockford–Roscoe–Beloit corridor. $497 beta. Money-Leak Map included. No contracts.`;
    const url = `https://clockout.us/services/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "product" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${i.name} Revenue-Leak Audit + Automation Build`,
            serviceType: `${i.name} business automation`,
            provider: {
              "@type": "LocalBusiness",
              name: "Clockout",
              address: { "@type": "PostalAddress", addressLocality: "Roscoe", addressRegion: "IL", addressCountry: "US" },
              email: "contact@clockout.us",
              telephone: "+1-608-713-1651",
            },
            areaServed: [i.town, "Rockford, IL", "Loves Park, IL", "Machesney Park, IL", "Roscoe, IL", "Beloit, WI", "Janesville, WI"],
            offers: {
              "@type": "Offer",
              price: 497,
              priceCurrency: "USD",
              description: "Beta pricing — Money-Leak Map + built in days, one-time flat fee.",
            },
          }),
        },
      ],
    };
  },
  component: IndustryPage,
  notFoundComponent: () => (
    <SiteShell>
      <div className="container-x py-32 text-center">
        <div className="mono-num text-xs uppercase tracking-wider text-amber">404 / industry not found</div>
        <h1 className="mt-4 text-4xl md:text-5xl">That trade page doesn't exist.</h1>
        <p className="mt-4 text-muted-foreground">Pick a trade from the menu, or head home.</p>
        <div className="mt-7 flex justify-center gap-3">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-amber px-5 py-3 text-sm font-medium text-amber-foreground hover:bg-amber/90">
            Go home →
          </Link>
        </div>
      </div>
    </SiteShell>
  ),
  errorComponent: () => (
    <SiteShell>
      <div className="container-x py-32 text-center">
        <h1 className="text-3xl">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">
          This page didn't load. Please try again or head home.
        </p>
      </div>
    </SiteShell>
  ),
});

function IndustryPage() {
  const { industry: i } = Route.useLoaderData();
  const localTowns = allServiceTowns
    .map((t) => t.split(",")[0])
    .filter((t) => t !== i.town)
    .slice(0, 2);

  return (
    <SiteShell>
      {/* 1. Hero — trade-specific */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="container-x grid gap-12 pt-16 pb-20 md:grid-cols-[1.3fr_1fr] md:pt-24 md:pb-28">
          <div>
            <div className="eyebrow mb-5">
              {i.name} · {i.town}, {localTowns.join(" & ")}
            </div>
            <h1
              className="font-display"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 600 }}
            >
              {i.heroHeadline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {getHeroSub(i.slug, i.town)}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTA to="/assessment" size="lg">Find the Money I'm Losing →</CTA>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
              <BetaSpots />
              <span aria-hidden>·</span>
              <span>10 hrs/week back in 30 days — or free</span>
            </div>
          </div>
          <aside className="overflow-hidden rounded-[12px] border border-border bg-background shadow-card flex flex-col">
            <div className="px-6 pt-6 md:px-7 md:pt-7">
              <div className="eyebrow">The process</div>
            </div>

            <div className="flex-1 flex flex-col px-6 pb-6 md:px-7 md:pb-7">
              {/* Phase 1 — Audit */}
              <motion.div
                className="flex gap-4 items-start"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center">
                  <div className="mt-1 h-[10px] w-[10px] shrink-0 rounded-full bg-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Money-Leak Map</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    Every revenue leak priced in dollars
                  </div>
                </div>
              </motion.div>

              {/* Connector */}
              <motion.div
                className="flex flex-1 justify-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="w-px bg-line" />
              </motion.div>

              {/* Phase 2 — Build */}
              <motion.div
                className="flex gap-4 items-start"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center">
                  <div className="mt-1 h-[10px] w-[10px] shrink-0 rounded-full bg-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Built in days</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    Automation built inside your existing tools
                  </div>
                </div>
              </motion.div>

              {/* Connector */}
              <motion.div
                className="flex flex-1 justify-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.45 }}
              >
                <div className="w-px bg-line" />
              </motion.div>

              {/* Phase 3 — You own it */}
              <motion.div
                className="flex gap-4 items-start"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center">
                  <div className="mt-1 h-[10px] w-[10px] shrink-0 rounded-full bg-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">You own it</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    Every credential — you own everything, no contracts
                  </div>
                </div>
              </motion.div>
            </div>
          </aside>
        </div>
      </section>

      {/* 2. ProofBar */}
      <ProofBar stats={i.proof} />

      {/* 3. PainPoints */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x grid gap-14 md:grid-cols-[1fr_1.3fr]">
          <div>
            <div className="eyebrow mb-3">Where it hurts</div>
            <h2 className="text-4xl md:text-5xl">
              {i.painHeadline}
            </h2>
            <p className="mt-5 text-muted-foreground">
              You already know what this list says. Reading it out loud just makes it real.
            </p>
          </div>
          <ul className="space-y-5">
            {i.pains.map((p: string, idx: number) => (
              <li key={p} className="flex gap-4 rounded-[12px] border border-line bg-surface/40 p-5">
                <span className="mono-num text-primary">{String(idx + 1).padStart(2, "0")}</span>
                <span className="text-[17px] text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. WhatGetsBuilt */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">What gets built</div>
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            The exact deliverables for your {i.name.toLowerCase()} shop.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[12px] border border-line bg-line md:grid-cols-2">
            {i.built.map((b: string) => (
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
          <p className="mt-8 text-sm text-muted-foreground">
            Built right inside {i.toolName} — the system you already run. Your team gets zero new logins. You keep every credential.
          </p>
        </div>
      </section>

      {/* 5. HowItWorks */}
      <HowItWorks slug={i.slug} />

      {/* 6. OfferCard */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">The offer</div>
          <h2 className="mb-10 max-w-3xl text-4xl md:text-5xl">
            Start free. A 20-minute call where I show you exactly where your{" "}
            {i.name.toLowerCase()} shop is leaking money — plus a written plan
            you keep. Want it fixed? The build's $497 (beta, reg. $1,494) and
            you own everything — 10 hrs a week back in 30 days or I keep
            working. Keep me on as your concierge after if you want — $750/mo,
            month to month, cancel anytime.
          </h2>
          <OfferCard />
        </div>
      </section>

      {/* 7. GuaranteeBlock */}
      <GuaranteeBlock />

      {/* 8. FinalCta */}
      <FinalCta
        headline={`Tell me about your ${i.name.toLowerCase()} shop. I'll show you the leaks — free, in a 20-minute call.`}
      />
    </SiteShell>
  );
}
