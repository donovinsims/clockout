import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCta } from "@/components/site/FinalCta";
import { GuaranteeBlock } from "@/components/site/GuaranteeBlock";

export const Route = createFileRoute("/operator-os")({
  head: () => ({
    meta: [
      { title: "Operator OS — Your AI operator, on retainer | Clockout" },
      {
        name: "description",
        content:
          "Keep a pro building your business every couple of weeks. Operator OS is Clockout's AI concierge — new automations, on call between, you own everything. Month to month.",
      },
      {
        property: "og:title",
        content: "Operator OS — Your AI operator, on retainer | Clockout",
      },
      {
        property: "og:description",
        content:
          "Keep a pro building your business every couple of weeks. Operator OS is Clockout's AI concierge — new automations, on call between, you own everything. Month to month.",
      },
    ],
  }),
  component: OperatorOsPage,
});

function OperatorOsPage() {
  return (
    <SiteShell>
      {/* 1. Hero */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">OPERATOR OS · THE AI CONCIERGE</div>
          <h1 className="max-w-4xl text-5xl leading-[1.04] md:text-7xl">
            Your business, run on a rail — not a fire alarm.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-foreground/80">
            Most owners run the day on memory and missed calls. Operator OS puts a
            pro in your corner who keeps building the systems that catch the money
            you're leaving on the table — a new automation every couple of weeks,
            on call when something breaks or a new idea hits. You own all of it.
            Month to month, cancel anytime.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/assessment"
              className="inline-flex h-11 items-center justify-center rounded-[12px] bg-primary px-5 text-[15px] font-medium tracking-tight text-primary-foreground shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--color-primary)_60%,transparent)] transition-all duration-150 active:scale-[.98]"
            >
              Find the Money I'm Losing →
            </Link>
          </div>
          <p className="mt-4 text-sm text-dim">
            Starts with a free 20-minute audit · the concierge is your call, after
          </p>
        </div>
      </section>

      {/* 2. What it is */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            A pro who keeps building — so you don't have to
          </h2>
          <ul className="mt-10 max-w-3xl space-y-8">
            <li>
              <h3 className="text-lg font-medium text-foreground">
                Biweekly build sessions
              </h3>
              <p className="mt-2 text-foreground/80">
                every two weeks we ship a new automation together — missed-call
                capture, follow-up, reviews, reactivation, dispatch — whatever's
                leaking most right now.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-medium text-foreground">
                On call between
              </h3>
              <p className="mt-2 text-foreground/80">
                text me when something breaks or you've got a new idea. (Same- or
                next-business-day response.)
              </p>
            </li>
            <li>
              <h3 className="text-lg font-medium text-foreground">
                Your build log
              </h3>
              <p className="mt-2 text-foreground/80">
                a running record of everything we've shipped, so you see exactly
                what you're getting every month.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-medium text-foreground">
                You own everything
              </h3>
              <p className="mt-2 text-foreground/80">
                every login, every line of code. Cancel anytime and keep it all.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. What this costs elsewhere */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <p className="max-w-3xl text-lg text-foreground/80">
            A marketing agency charges $2,200–$5,000/month to manage this and locks
            you into a year. Operator OS is $750/month, cancel any time, and you
            own everything we build. You're not renting access — you're keeping a
            pro on call who hands you the keys to everything.
          </p>
        </div>
      </section>

      {/* 4. The Two-Week Guarantee */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-3">The Two-Week Guarantee</div>
          <p className="max-w-3xl text-lg text-foreground/80">
            If I don't ship a working automation in your first two weeks, that
            month is free. No long contract to find out if it's worth it — you'll
            see real work inside 14 days or you don't pay for the month.
          </p>
        </div>
      </section>

      {/* 5. Proof */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <blockquote className="max-w-3xl text-lg text-foreground/80">
            &ldquo;The automations run perfectly in the background&hellip; it's
            saved me 10+ hours a week. If you need complex operations simplified
            and automated, this is exactly who you want building it.&rdquo; —
            Shea S., Founder
          </blockquote>
          <p className="mt-6 text-sm italic text-dim">
            No trades testimonial yet — that's what these founding spots are for.
          </p>
        </div>
      </section>

      {/* 6. Who it's for */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            Built for owners who'd rather run the business than the software
          </h2>
          <ul className="mt-10 max-w-3xl space-y-4">
            <li className="text-foreground/80">
              You'd rather work on the business than babysit tools.
            </li>
            <li className="text-foreground/80">
              You've seen the leaks (from your audit) and you'd rather keep
              plugging them than watch them creep back.
            </li>
            <li className="text-foreground/80">
              You want a pro on speed-dial — not another contract.
            </li>
          </ul>
        </div>
      </section>

      {/* 7. How it starts */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <h2 className="max-w-3xl text-4xl md:text-5xl">
            You don't start here. You arrive here.
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-foreground/80">
            Everybody starts with the free audit and, if they want it, the
            one-time build they own outright. The concierge is the door you walk
            through only if you'd rather keep me building — never a forced step,
            never a contract. You decide after you've seen the work.
          </p>
        </div>
      </section>

      {/* 8. Price */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="rounded-2xl border border-primary/20 bg-surface p-10 text-center md:p-16">
            <div className="eyebrow mb-3 text-primary">
              Founding rate — locked for life
            </div>
            <div className="text-5xl font-semibold text-foreground md:text-6xl">
              $750<span className="text-2xl text-dim">/mo</span>
            </div>
            <p className="mt-4 text-foreground/75">
              Operator OS Concierge — $750/mo. Founding rate — only 8 spots, 3
              left — locked for life. Cancel anytime, keep everything. Backed by
              the Two-Week Guarantee above.
            </p>
            <Link
              to="/assessment"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-[12px] bg-primary px-5 text-[15px] font-medium tracking-tight text-primary-foreground shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--color-primary)_60%,transparent)] transition-all duration-150 active:scale-[.98]"
            >
              Find the Money I'm Losing →
            </Link>
          </div>
        </div>
      </section>

      <GuaranteeBlock />
      <FinalCta
        headline="Keep a pro in your corner."
        sub="Start with the free audit. Add the concierge when it's worth it to you."
      />
    </SiteShell>
  );
}
