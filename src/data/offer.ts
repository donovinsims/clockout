export const GUARANTEE_TITLE = "The 10-Hour Guarantee";

export const GUARANTEE_BODY =
  "if the Build doesn't give you back 10 hours a week within 30 days, I keep working \u2014 free \u2014 until it does.";

export const GUARANTEE = `${GUARANTEE_TITLE}: ${GUARANTEE_BODY}`;

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
  "10 hours back in 30 days — or I keep working free.",
  "A 20-minute call. A fix you own. No contract, no catch.",
] as const;

/**
 * A/B Headline Testing Protocol
 * ==============================
 * Active variant index (0, 1, or 2). Change this constant, deploy, and run for 2-4 weeks.
 *
 * Variant 0: "Start free. The build is $497. You own everything."
 *   — Process-led. Leads with the price and ownership.
 *
 * Variant 1: "10 hours back in 30 days — or you don't pay."
 *   — Outcome-led. Leads with the guarantee as headline promise.
 *
 * Variant 2: "A 20-minute call. A fix you own. No contract, no catch."
 *   — Trust/ownership-led. Emphasizes no-risk angle.
 *
 * Measure: assessment form starts, CTA clicks, time on page (via Plausible).
 * Note: This only affects service page offer h2 (/services/:slug).
 * The homepage h2 is separate (hardcoded in index.tsx).
 */
export const ACTIVE_HEADLINE_INDEX = 0;
