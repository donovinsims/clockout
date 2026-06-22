const heroSubTexts: Record<string, string> = {
  hvac:
    "For HVAC shops in {{town}} and across Northern Illinois. 62% of calls to home service businesses go unanswered. At a $450 ticket, that's a new truck payment leaking out every month.",
  plumbing:
    "For plumbing crews in {{town}} and the Rockford corridor. A 550K technician shortfall is coming by 2027 — the shops that automate intake and dispatch are the ones still standing.",
  roofing:
    "For roofers in {{town}} and Northern Illinois storm territory. Speed-to-lead is the whole game after a hail event. Two-day follow-up is how you lose the season.",
  electrical:
    "For electrical contractors in {{town}} and across the Rockford corridor. The license is in your name. The paperwork shouldn't be in your evenings.",
  landscaping:
    "For lawn and landscape crews in {{town}} and Northern Illinois. The route is your asset. Letting it churn every winter is how a good year turns into a flat year.",
  cleaning:
    "For cleaning companies in {{town}} and across the region. The schedule is your inventory. Empty slots are inventory that already expired.",
  "property-management":
    "For property managers in {{town}} and Northern Illinois. The owners pay you to handle it. Handling it shouldn't require you reading every email.",
  "real-estate":
    "For producing agents and small teams in {{town}} and across the region. Speed-to-lead and follow-up cadence are the whole game. Both are fixable in a week.",
};

export function getHeroSub(slug: string, town: string): string {
  const template = heroSubTexts[slug];
  if (!template) return "";
  return template.replace(/\{\{town\}\}/g, town);
}
