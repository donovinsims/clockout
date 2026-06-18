import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/site/Hero";
import { ToolsStrip } from "@/components/site/ToolsStrip";
import { HowItWorks } from "@/components/site/HowItWorks";
import { FounderProof } from "@/components/site/FounderProof";
import { LeakCalculator } from "@/components/site/LeakCalculator";
import { OfferCard } from "@/components/site/OfferCard";
import { IndustryGrid } from "@/components/site/IndustryGrid";
import { FAQ } from "@/components/site/FAQ";
import { FinalCta } from "@/components/site/FinalCta";
import { faqs } from "@/data/faqs";

const homeFaqs = faqs.slice(0, 8);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clockout — 9-day automation builds for HVAC, plumbing, electrical & roofing shops in Northern IL" },
      { name: "description", content: "$497 beta. 48-hour audit, 7-day build, you own it outright. For owner-operated trade shops in Northern Illinois and Southern Wisconsin." },
      { property: "og:title", content: "Clockout — Answer every call. Follow up every quote. In 9 days, for $497." },
      { property: "og:description", content: "Done-for-you automation for owner-operated trade shops. Flat fee. You own it. 10 hrs/week back in 30 days or free." },
      { property: "og:url", content: "https://clockout.us/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <ToolsStrip />
      <HowItWorks />
      <FounderProof />
      <LeakCalculator />

      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">The offer</div>
          <h2 className="mb-10 max-w-3xl text-4xl md:text-5xl">
            One flat price. No retainer. No subscription. Ever.
          </h2>
          <OfferCard />
        </div>
      </section>

      <IndustryGrid />
      <FAQ items={homeFaqs} />
      <FinalCta />
    </SiteShell>
  );
}
