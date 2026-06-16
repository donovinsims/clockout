export type Industry = {
  slug: string;
  name: string;
  short: string;
  painHeadline: string;
  heroHeadline: string;
  heroSub: (town: string) => string;
  proof: { label: string; stat: string }[];
  pains: string[];
  built: string[];
  town: string;
};

export const industries: Industry[] = [
  {
    slug: "hvac",
    name: "HVAC",
    short: "Heating & cooling shops",
    painHeadline: "Missed calls walking next door to your competitor.",
    heroHeadline: "Three missed calls today. Two of them just hired someone else.",
    heroSub: (t) => `For HVAC shops in ${t} and across Northern Illinois. 62% of calls to home service businesses go unanswered. At a $450 ticket, that's a new truck payment leaking out every month.`,
    proof: [
      { stat: "62%", label: "of calls to home service businesses go unanswered (ServiceTitan, 2025)" },
      { stat: "86%", label: "of callers who hit voicemail never leave a message" },
      { stat: "<60s", label: "response time wins the job. Five minutes loses it." },
    ],
    pains: [
      "You're on a rooftop. The phone rings. You can't pick up. That lead is gone in an hour.",
      "After-hours emergency calls land in a voicemail nobody listens to until Monday.",
      "Maintenance contracts you sold last spring? Half of them aren't going to renew because nobody called.",
      "Quote sent Tuesday, silence Wednesday, gone by Friday — and you don't even know which ones you lost.",
    ],
    built: [
      "24/7 AI front desk that answers, qualifies, books, and dispatches by your actual schedule",
      "Missed-call rescue: SMS callback within 30 seconds with a booking link",
      "Quote follow-up engine that recovers 20–35% of the ones that go cold",
      "Maintenance reactivation sequences that fire automatically before the season hits",
      "Review pipeline that catches 5-stars publicly and 3-stars privately",
    ],
    town: "Loves Park",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    short: "Residential & commercial plumbing",
    painHeadline: "Emergencies answered after your competitor already rolled a truck.",
    heroHeadline: "The pipe burst at 9pm. They called three plumbers. You were the third to call back.",
    heroSub: (t) => `For plumbing crews in ${t} and the Rockford corridor. A 550K technician shortfall is coming by 2027 — the shops that automate intake and dispatch are the ones still standing.`,
    proof: [
      { stat: "550K", label: "projected plumbing technician shortfall by 2027 (PMI)" },
      { stat: "1 hr", label: "average time a lead stays warm after an unanswered call" },
      { stat: "30–60d", label: "average commercial pay cycle. Cash flow has to be tight." },
    ],
    pains: [
      "Emergency at 11pm. You're already on one. The next caller hangs up at the second ring.",
      "Invoices going out late. Receivables stretched 60 days. You're financing your customers.",
      "Quotes for $8K water heater jobs that just disappear into the void.",
      "You hired a dispatcher. They quit in 90 days. Now you're back to your wife answering the phone.",
    ],
    built: [
      "24/7 AI dispatch that triages emergency vs. routine and routes to the right tech",
      "Missed-call rescue with auto-text and an emergency callback ladder",
      "Invoice and follow-up automation tied to job completion",
      "Quote follow-up sequences for the $5K+ work that needs three touches to close",
      "Review and repeat-customer flows so the people who already love you actually come back",
    ],
    town: "Rockford",
  },
  {
    slug: "roofing",
    name: "Roofing",
    short: "Storm chasers & retail roofing",
    painHeadline: "Storm leads cold by the time you follow up.",
    heroHeadline: "The hail hit Tuesday. By Friday, half your leads signed with someone else.",
    heroSub: (t) => `For roofers in ${t} and Northern Illinois storm territory. Speed-to-lead is the whole game after a hail event. Two-day follow-up is how you lose the season.`,
    proof: [
      { stat: "80%", label: "drop in conversion when first response takes >5 minutes" },
      { stat: "3 hrs", label: "average tech wastes per day on paperwork and admin" },
      { stat: "$12K+", label: "average storm-replacement job. One missed lead is a payroll." },
    ],
    pains: [
      "Door-knock pulls in 30 leads. Your guy enters them into a spreadsheet on Sunday. Too late.",
      "Insurance claim status updates getting lost between you, the adjuster, and the homeowner.",
      "Pre-season inspection list from last fall that nobody actually called in March.",
      "Reviews you earned but never asked for. Your competitor has 4× your Google count.",
    ],
    built: [
      "Storm-response intake that captures every door-knock lead the moment it's collected",
      "Insurance claim tracker that pings the homeowner with status updates on autopilot",
      "Inspection-list reactivation that calls and texts last year's leads before the season",
      "Review-request automation triggered by job completion",
      "Quote-to-contract follow-up so the signature actually gets chased",
    ],
    town: "Belvidere",
  },
  {
    slug: "electrical",
    name: "Electrical",
    short: "Residential & commercial electrical",
    painHeadline: "Disorganized schedules, late invoices, and code paperwork eating evenings.",
    heroHeadline: "You're a master electrician. You spent Sunday night doing data entry.",
    heroSub: (t) => `For electrical contractors in ${t} and across the Rockford corridor. The license is in your name. The paperwork shouldn't be in your evenings.`,
    proof: [
      { stat: "78%", label: "of contractor shops employ fewer than 10 people (ACCA)" },
      { stat: "2 hrs/day", label: "techs lose to admin noise — 25% of productive time" },
      { stat: "$0", label: "monthly software fees once Clockout is installed. You own it." },
    ],
    pains: [
      "Schedule changes texted to the wrong tech. He shows up. Job's not ready. Day lost.",
      "Permit and inspection paperwork that should be triggered by job stage — done by memory instead.",
      "Estimates that get verbal approval and then go uninvoiced for two weeks.",
      "Service-call customers from last year sitting silent. They had electrical work last spring and you never followed up.",
    ],
    built: [
      "24/7 AI front desk with trade-aware qualification (panel upgrade vs. service call vs. new construction)",
      "Job-stage triggers for permits, inspections, and invoices — nothing falls between cracks",
      "Quote follow-up automation for the $3K+ residential jobs",
      "Maintenance and safety-check reactivation for repeat customers",
      "Review request automation triggered on job completion",
    ],
    town: "Machesney Park",
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    short: "Lawn, design, & maintenance",
    painHeadline: "Recurring revenue that isn't actually recurring.",
    heroHeadline: "Your best customers from last year. Half of them didn't sign back up.",
    heroSub: (t) => `For lawn and landscape crews in ${t} and Northern Illinois. The route is your asset. Letting it churn every winter is how a good year turns into a flat year.`,
    proof: [
      { stat: "20–35%", label: "of unsigned quotes recovered when follow-up is automated" },
      { stat: "5×", label: "the cost to win a new customer vs. keep an existing one" },
      { stat: "60s", label: "callback time on missed calls. The lead doesn't know you were on a mower." },
    ],
    pains: [
      "Spring renewal season hits and you're calling last year's list by hand. Half don't pick up.",
      "Quote requests pile up in the inbox. By the time you respond, they hired your neighbor.",
      "Snow contracts, mulch sales, fall cleanup — recurring revenue that runs on memory, not a system.",
      "Reviews from happy customers that you never asked for. Your Google rank reflects it.",
    ],
    built: [
      "Seasonal renewal sequences that fire 30 days before spring, fall, and snow seasons",
      "Quote follow-up automation for design and install work",
      "Missed-call rescue so the phone doesn't have to ring inside your truck cab",
      "Add-on upsells (mulch, aeration, snow) triggered by job stage automatically",
      "Review pipeline that turns happy clients into Google stars without you asking",
    ],
    town: "Roscoe",
  },
  {
    slug: "cleaning",
    name: "Cleaning",
    short: "Residential & commercial cleaning",
    painHeadline: "No-shows, churn, and reviews you never asked for.",
    heroHeadline: "Three cancellations this week. Two customers ghosted. You're driving anyway.",
    heroSub: (t) => `For cleaning companies in ${t} and across the region. The schedule is your inventory. Empty slots are inventory that already expired.`,
    proof: [
      { stat: "30%", label: "of recurring cleaning customers churn in the first 6 months" },
      { stat: "60%", label: "of no-shows are recovered by an automated reminder 24 hours out" },
      { stat: "5-star", label: "review rates triple when the ask is automated, not asked verbally" },
    ],
    pains: [
      "Customer books online, you confirm, they ghost. No reminder, no recovery, slot lost.",
      "Recurring client misses a clean and never re-books. You didn't even notice for two weeks.",
      "Happy customers who would absolutely leave a review — if you ever remembered to ask.",
      "Front-desk inbox flooded with re-scheduling requests you handle at 9pm.",
    ],
    built: [
      "Booking confirmations and 24-hour reminders by SMS automatically",
      "No-show recovery flow that re-books on a tap",
      "Churn-saver sequence the moment a recurring customer skips two cleans",
      "Post-clean review request — 5-stars to Google, anything less straight to you",
      "Front-desk AI that handles reschedules and new bookings 24/7",
    ],
    town: "Beloit",
  },
  {
    slug: "property-management",
    name: "Property Management",
    short: "Residential & commercial PMs",
    painHeadline: "Maintenance requests dropped. Owners chasing you for updates.",
    heroHeadline: "Tenant texted on Saturday. You forwarded it. It's Tuesday. Nothing happened.",
    heroSub: (t) => `For property managers in ${t} and Northern Illinois. The owners pay you to handle it. Handling it shouldn't require you reading every email.`,
    proof: [
      { stat: "52%", label: "of field service work still runs on manual or paper processes" },
      { stat: "24 hrs", label: "is the new tenant-expectation window for a maintenance response" },
      { stat: "1 dashboard", label: "for owners. Not five emails a week from you." },
    ],
    pains: [
      "Maintenance request comes in by text, email, and portal. Three places to check. One gets missed.",
      "Owners calling for updates because you haven't sent the monthly report yet.",
      "Renewals coming up in 60 days and nobody has the conversation started.",
      "Vendor coordination — plumber, electrician, HVAC — running on your text messages.",
    ],
    built: [
      "Unified maintenance intake (text, email, portal) into one routed queue",
      "Owner update automation: monthly reports, status pings, renewal alerts",
      "Renewal sequences triggered 90, 60, and 30 days out",
      "Vendor coordination tracker so a job doesn't sit waiting on your reply",
      "Tenant communication AI for the routine questions that eat your evenings",
    ],
    town: "Rockford",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    short: "Producing agents & small teams",
    painHeadline: "Leads that never get a second call.",
    heroHeadline: "Open house pulled in 14 names. You called 6. The rest forgot you exist.",
    heroSub: (t) => `For producing agents and small teams in ${t} and across the region. Speed-to-lead and follow-up cadence are the whole game. Both are fixable in a week.`,
    proof: [
      { stat: "8×", label: "more likely to convert a lead contacted in <5 min vs. >30 min" },
      { stat: "12 touches", label: "average it takes to close a buyer. Most agents make 2." },
      { stat: "30%", label: "of past-client GCI lost to lack of follow-up after closing" },
    ],
    pains: [
      "Sphere database that you haven't touched since the last referral.",
      "Open-house sheets sitting in a stack on the passenger seat.",
      "Listing automations (price drop, open house, status change) you do by hand — when you remember.",
      "Past clients who would refer you all day — if they ever heard from you again.",
    ],
    built: [
      "Lead-capture and instant SMS response on new inquiries",
      "Long-haul nurture sequences for cold leads that warm up at month 4",
      "Listing-status automations: price drops, open houses, going pending",
      "Past-client touch program that runs without you opening the CRM",
      "Transaction milestone communication so buyers stop calling you for updates",
    ],
    town: "Roscoe",
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
