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
              Built in days. Yours to keep.
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
              You're losing jobs you never even hear about.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground md:text-xl">
              The phone rings while you're on a roof, under a sink, up a ladder — and whoever calls back first books the work. I find exactly where your money's leaking, then build the fix inside the tools you already pay for. You own it.
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
                    &ldquo;I was skeptical anything could save me that much time. The Money-Leak Map showed me exactly where my gaps were. We got those hours back in a week.&rdquo;
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

