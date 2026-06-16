import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ImageWithFallback } from "@/components/site/ImageWithFallback";
import { CTA } from "@/components/site/CTA";
import { GuaranteeBlock } from "@/components/site/GuaranteeBlock";
import { Mail } from "lucide-react";
import { FacebookIcon } from "@/components/site/FacebookIcon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Donovin Sims — Founder of Clockout · Roscoe, IL" },
      { name: "description", content: "Roscoe-raised. Hononegah baseball, NIU pitcher, ex-Uber Product Ops and ex-Walgreens. Donovin built Clockout to install the enterprise revenue-leak playbook into Northern Illinois trade shops at a flat one-time price." },
      { property: "og:title", content: "About Donovin Sims — Founder of Clockout" },
      { property: "og:description", content: "Operator. Roscoe local. Ex-Uber, ex-Walgreens. Bringing the enterprise revenue-leak playbook to Main Street trades." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Donovin Sims",
          jobTitle: "Founder",
          worksFor: { "@type": "Organization", name: "Clockout" },
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "Northern Illinois University" },
            { "@type": "HighSchool", name: "Hononegah Community High School" },
          ],
          homeLocation: { "@type": "Place", name: "Roscoe, IL" },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="relative border-b border-line">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="container-x relative grid gap-12 py-20 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-28">
          <div>
            <ImageWithFallback
              alt="Donovin Sims, founder of Clockout, Roscoe IL"
              label="Photo of Donovin"
              width={400}
              height={500}
              className="w-full max-w-sm"
            />
            <div className="mt-6 space-y-2 text-sm">
              <div className="eyebrow">Connect</div>
              <a className="flex items-center gap-2 text-foreground/85 hover:text-amber" href="https://www.facebook.com/profile.php?id=61590861503566" target="_blank" rel="noreferrer">
                <FacebookIcon /> Clockout on Facebook
              </a>
              <a className="flex items-center gap-2 text-foreground/85 hover:text-amber" href="https://www.facebook.com/donovinsims/" target="_blank" rel="noreferrer">
                <FacebookIcon /> Donovin on Facebook
              </a>
              <a className="flex items-center gap-2 text-foreground/85 hover:text-amber" href="mailto:don@clockout.us">
                <Mail className="h-4 w-4" /> don@clockout.us
              </a>
            </div>
          </div>

          <article>
            <div className="eyebrow mb-4">About Donovin</div>
            <h1 className="text-5xl leading-[1.05] md:text-6xl">
              I grew up here. I left for ten years. I came back with the playbook.
            </h1>

            <div className="prose-spaced mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/85">
              <p>
                I grew up in Roscoe, played baseball at Hononegah, and got ranked by Perfect Game before pitching for Northern Illinois. Spent my college summers with the Winnebago County Highway Department. I know what this area looks like at 5am and what it feels like to be in a job where showing up is the whole job.
              </p>
              <p>
                After NIU I went into operations. Product Operations at Uber. Live events across the US and Canada, venues with 50,000+ people, real-time dispatch, and no margin for a missed handoff. Then Walgreens, building and shipping digital products at national retail scale.
              </p>
              <p>
                Six-plus years in rooms where a broken system bleeds money by the minute.
              </p>

              <h2 className="pt-6 text-3xl">What those years taught me</h2>
              <p>
                The leaks are predictable. A missed call, a quote that goes cold, a customer who hasn't heard from you since their last service. These aren't random. They're the same seven revenue drains, showing up in every service business, every time. Enterprise companies figured this out years ago. Local contractors haven't had access to the same playbook.
              </p>
              <p>
                Clockout is that playbook, installed in your business, at a flat price you pay once.
              </p>

              <h2 className="pt-6 text-3xl">Why I came back</h2>
              <p>
                I moved back to Northern Illinois to build this because this is my market. Rockford, Roscoe, Beloit. I know these businesses. I've sat across from the owners. I've seen the same missed call, the same unsigned quote sitting in an inbox, the same customer who called the next guy because nobody texted them back in time.
              </p>

              <h2 className="pt-6 text-3xl">How it works</h2>
              <p>
                I don't sell subscriptions. I come in, spend 48 hours mapping every dollar leaking out of your business, build the system that stops it, hand it over, and leave. You own everything. No retainer. No monthly fee.
              </p>
              <p>
                Three missed calls a week at $450 average ticket is $5,400 gone every month. That's what we're fixing.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CTA to="/assessment" size="lg">
                Book a free 20-minute assessment →
              </CTA>
              <Link to="/faq" className="text-sm text-foreground/80 hover:text-amber">
                Read the FAQ →
              </Link>
            </div>
            <p className="mt-3 text-sm text-dim">
              10 hrs/week back in 30 days or the build is free.
            </p>
          </article>
        </div>
      </section>

      <GuaranteeBlock />
    </SiteShell>
  );
}
