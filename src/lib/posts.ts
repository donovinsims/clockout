export interface PostSection {
  heading?: string;
  body: string[];
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tag: string;
  lede: string;
  sections: PostSection[];
  ps: string;
}

export const POSTS: Post[] = [
  {
    slug: "math-on-missed-calls-roofers",
    title: "The Math On Missed Calls For Local Roofers",
    date: "Aug 14",
    excerpt:
      "Why the average roofer loses $14,000 a month to the voicemail box, and how to stop it without hiring an answering service.",
    readTime: "4 min read",
    tag: "Missed Calls",
    lede:
      "Replace this paragraph with the opening problem. Lead with the dollar amount. Show the math before you show the solution.",
    sections: [
      {
        heading: "The cost per missed call",
        body: [
          "Replace with: average roofing job value × your close rate × monthly missed call volume.",
          "Show your math. Don't make claims — make equations.",
        ],
      },
      {
        heading: "Why it keeps happening",
        body: [
          "Replace with: the operational reason the phone goes unanswered — on the roof, in the truck, at the supply house.",
        ],
      },
      {
        heading: "The fix",
        body: [
          "Replace with: exactly how missed-call text-back works, how long it takes to install, what it costs.",
          "Time to build: 2 days. Cost: $350 flat.",
        ],
      },
    ],
    ps: "P.S. If you want to know your exact number — not an industry average, your business — book a free 20-minute audit. We calculate it live and send you the written report the same day.",
  },
  {
    slug: "stop-no-shows-without-hiring",
    title: "How To Stop No-Shows Without Hiring A Front Desk Admin",
    date: "Aug 02",
    excerpt:
      "You don't need a $40k/yr employee to confirm appointments. You just need a system that texts them 24 hours before.",
    readTime: "4 min read",
    tag: "No-Shows",
    lede:
      "Replace this paragraph with the opening problem. Lead with the dollar amount. Show the math before you show the solution.",
    sections: [
      {
        heading: "What a no-show actually costs",
        body: [
          "Replace with: blocked time slot × average job value × monthly no-show rate.",
        ],
      },
      {
        heading: "Why reminder calls don't work",
        body: [
          "Replace with: the real reason owners stop calling to confirm — time, awkwardness, inconsistency.",
        ],
      },
      {
        heading: "The fix",
        body: [
          "Replace with: automated SMS confirmation sequence. How it works, what it says, what happens if they don't reply.",
          "Time to build: 1 day. Cost: $250 flat.",
        ],
      },
    ],
    ps: "P.S. Book a free 20-minute audit. We'll map your no-show rate, calculate the monthly cost, and show you exactly what a fix would return.",
  },
  {
    slug: "plumbers-lose-money-follow-up",
    title: "Why Plumbers Lose Money On Follow-Up (And How To Fix It)",
    date: "Jul 18",
    excerpt:
      "Sending a $5,000 quote and waiting for the phone to ring is a guaranteed way to lose the bid to the shop down the street.",
    readTime: "4 min read",
    tag: "Follow-Up",
    lede:
      "Replace this paragraph with the opening problem. Lead with the dollar amount. Show the math before you show the solution.",
    sections: [
      {
        heading: "The follow-up math",
        body: [
          "Replace with: average quote value × close rate with follow-up vs. without × monthly quote volume.",
        ],
      },
      {
        heading: "Why it doesn't happen",
        body: [
          "Replace with: the honest reason plumbers don't follow up — busy, forget, don't want to feel pushy.",
        ],
      },
      {
        heading: "The fix",
        body: [
          "Replace with: automated quote follow-up sequence. Day 1, Day 3, Day 7. What it says. What it does when they reply.",
          "Time to build: 2 days. Cost: $400 flat.",
        ],
      },
    ],
    ps: "P.S. Book a free 20-minute audit. We'll calculate how many quotes you've sent in the last 90 days, estimate the recovery rate, and give you the dollar number before you spend anything.",
  },
];
