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
const homeFaqs = [
  {
    q: "Is there a subscription?",
    a: "Only if you want one. The build is yours to own outright — no contract, no monthly fee required. If you choose the concierge to keep me building, that's month to month and you cancel anytime.",
  },
  {
    q: "What does the free audit cost me?",
    a: "Nothing. 20 minutes, and you walk away with your Money-Leak Map — even if you never hire me.",
  },
  {
    q: "Who actually does the work?",
    a: "Me. Donovin. Solo, out of Roscoe.",
  },
  {
    q: "What if I'm not local?",
    a: "The work's remote — I take builds anywhere in the US during the beta.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clockout — Stop losing jobs to missed calls, cold quotes & dead follow-ups" },
      { name: "description", content: "I find where your service business is leaking money, build the fixes inside the tools you already use, and hand you the keys. Starts with a free 20-minute audit." },
      { property: "og:title", content: "Clockout — Stop losing jobs to missed calls, cold quotes & dead follow-ups" },
      { property: "og:description", content: "I find where your service business is leaking money, build the fixes inside the tools you already use, and hand you the keys. Starts with a free 20-minute audit." },
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
          <h2 className="text-balance text-3xl md:text-4xl">
            It works across industries — the outcome&rsquo;s the same: 10+ hours a week back.
          </h2>
          <blockquote className="relative mt-12">
            <p className="text-balance text-lg leading-relaxed text-foreground/85 md:text-xl">
              &ldquo;I needed a seamless, professional client portal, and the system Donovin built exceeded every expectation. The automations run perfectly in the background, and the whole client experience is smooth. It&rsquo;s saved me 10+ hours a week and freed me to focus on my clients. If you need complex operations simplified and automated, this is exactly who you want building it.&rdquo;
            </p>
            <footer className="mt-8">
              <cite className="not-italic font-semibold text-foreground">
                &mdash; Shea S., Founder
              </cite>
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
            Start free. Own what I build. Keep me on only if you want.
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
