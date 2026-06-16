export const offer = {
  betaPrice: 497,
  standardPrice: 1494,
  spotsTotal: 15,
  spotsRemaining: 3,
  auditHours: 48,
  buildDays: 7,
  guaranteeShort: "10 hrs/week back in 30 days or the build is free.",
  guaranteeLong:
    "If the system doesn't recover 10 hours a week within 30 days, I keep working until it does. Free. And if the audit doesn't surface at least $10K in fixable revenue leaks, you don't pay for the audit either.",
  ownership: "You own it outright. All logins. All docs. No subscription. No lock-in.",
  ctaPrimary: "Reserve Beta Access",
  ctaSecondary: "See my revenue leaks",
  assessmentPath: "/assessment",
} as const;

export const includes = [
  "Full lead-to-cash workflow mapping",
  "48-hour written revenue leak report (every leak quantified in dollars)",
  "Custom automation build for your top leaks, installed in 7 days",
  "Lives inside the tools you already use — no new logins for your team",
  "Full handover: demo, documentation, training",
  "You keep every login, every doc, every line of code",
];
