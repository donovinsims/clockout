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
      { title: "Clockout — 7-Day Automation Builds for Local Service Businesses" },
      { name: "description", content: "What would you do with 10 extra hours a week? Money-Leak Map delivered in 20 minutes. Full build in 7 days. You own everything. No contracts." },
      { property: "og:title", content: "Clockout — 10 Hours Back. You Own the System." },
      { property: "og:description", content: "I hand you a Money-Leak Map that shows exactly where you're losing time and money. Then I build the automations in 7 days — for one flat fee. 10 hrs/week back in 30 days or free." },
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

      {/* Testimonial */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x max-w-4xl text-center">
          <div className="eyebrow mb-4">Real results</div>
          <h2 className="text-3xl md:text-4xl">
            It works across industries.<br />
            <span>The outcome is the same.</span>
          </h2>
          <blockquote className="relative mt-12">
            <p className="text-balance text-lg leading-relaxed text-foreground/85 md:text-xl">
              &ldquo;I started a trading community and needed a seamless, professional portal for my clients, and the system that Donovin built for me exceeded every expectation. The automations run perfectly in the background, making the entire client experience incredibly smooth. It has saved me 10+ hours a week and has allowed me to concentrate on my clients&rsquo; &amp; families&rsquo; needs. If you need complex operations, simplified and automated, this is exactly who you want building it!&rdquo;
            </p>
            <footer className="mt-8">
              <cite className="not-italic font-semibold text-foreground">
                &mdash; Shea S.
              </cite>
              <span className="block mt-1 text-sm text-muted-foreground">
                Trading Community Founder
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      <FounderProof />
      <LeakCalculator />

      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">The offer</div>
          <h2 className="mb-10 max-w-3xl text-4xl md:text-5xl">
            One flat price. No contracts. Cancel anytime. You own everything.
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
