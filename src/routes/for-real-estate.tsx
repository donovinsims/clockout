import { createFileRoute, notFound } from "@tanstack/react-router";
import { ForIndustryLanding } from "@/components/site/ForIndustryLanding";
import { getIndustry } from "@/data/industries";

export const Route = createFileRoute("/for-real-estate")({
  loader: () => {
    const industry = getIndustry("real-estate");
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => {
    const i = loaderData?.industry;
    if (!i) {
      return { meta: [{ title: "Industry not found — Clockout" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `Real Estate Automation for Agents & Teams — Clockout` },
        { name: "description", content: `${i.painHeadline} Flat-fee automation builds for real estate agents. No subscription, no retainer. $497 beta.` },
        { property: "og:title", content: `Real Estate Automation — Clockout` },
        { property: "og:description", content: `${i.painHeadline} 48-hour audit, 7-day build, you own it.` },
      ],
      links: [{ rel: "canonical", href: "/for-real-estate" }],
    };
  },
  component: () => {
    const { industry } = Route.useLoaderData();
    return <ForIndustryLanding industry={industry} />;
  },
  notFoundComponent: () => null,
});
