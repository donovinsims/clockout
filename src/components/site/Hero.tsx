import { CTA } from "./CTA";
import { BetaSpots } from "./BetaSpots";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="container-x relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          {/* LEFT — copy */}
          <div>
            <div className="eyebrow mb-5">
              The 9-Day Time Recovery System
            </div>
            <h1
              className="font-display text-foreground"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 600,
              }}
            >
              What would you do with 10 extra hours a week?
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground md:text-xl">
              I audit your business in 48 hours, surface $10K+ in fixable revenue leaks, and build the automations in 7 days — for one flat fee. If it doesn't save you 10 hours a week, I keep working until it does.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTA to="/assessment" size="lg">
                Get Your 10 Hours Back →
              </CTA>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Or text <a className="font-medium text-foreground underline underline-offset-4" href="sms:+16087131651?body=AUDIT">AUDIT to (608) 713-1651</a>
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
              <BetaSpots />
              <span aria-hidden>·</span>
              <span>10 hrs/week back in 30 days — or free</span>
            </div>
          </div>

          {/* RIGHT — testimonial card */}
          <div>
            <div className="overflow-hidden rounded-[12px] border border-line bg-surface shadow-card">
              <div className="flex h-full flex-col justify-center bg-gradient-to-br from-primary/5 via-surface to-background">
                <blockquote className="px-6 py-10 md:px-8 md:py-14">
                  <p className="text-[15px] leading-relaxed text-foreground/90 md:text-base">
                    &ldquo;The system that Donovin built for me exceeded every expectation. The automations run perfectly in the background, making the entire client experience incredibly smooth. It has saved me 10+ hours a week and has allowed me to concentrate on my clients&rsquo; &amp; families&rsquo; needs.&rdquo;
                  </p>
                </blockquote>
              </div>
              <div className="border-t border-line bg-background p-5">
                <div className="font-semibold text-foreground">Shea S.</div>
                <div className="mt-0.5 text-sm text-muted-foreground">
                  Trading Community Founder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

