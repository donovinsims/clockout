export const GUARANTEE =
  "The 10-Hour Guarantee: if the Build doesn't give you back 10 hours a week within 30 days, I keep working \u2014 free \u2014 until it does.";

export const offer = {
  betaPrice: 497,
  standardPrice: 1494,
  spotsTotal: 8,
  spotsRemaining: 3,
  buildDays: 7,
  ownership: "No contracts. Cancel anytime. You own everything.",
  ctaPrimary: "Find the Money I'm Losing \u2192",
  ctaSecondary: "",
  assessmentPath: "/assessment",
} as const;

export const includes = [
  "Full lead-to-cash workflow mapping",
  "Money-Leak Map \u2014 a written report quantifying every revenue and time leak in dollars",
  "Custom automation build for your top leaks, installed in days",
  "Lives inside the tools you already use \u2014 no new logins for your team",
  "Full handover: demo, documentation, training",
  "You keep every login, every doc, every line of code",
  "30 days of tuning after handover",
];

/** Headline variants for the service page offer section. Swap the index to test. */
export const offerHeadlines = [
  "Start free. The build is $497. You own everything.",
  "10 hours back in 30 days — or you don't pay.",
  "A 20-minute call. A fix you own. No contract, no catch.",
] as const;
