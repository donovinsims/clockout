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
              For HVAC · Plumbing · Electrical · Roofing — Northern IL & Southern WI
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
              Answer every call. Follow up every quote. Ask for every review. In 9 days, for $497.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground md:text-xl">
              I audit your shop in 48 hours, build the automations inside the tools you already use, and hand you the keys. Flat price. No subscription. You own it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTA to="/assessment" size="lg">
                Book the 48-hour audit →
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

          {/* RIGHT — founder card */}
          <div>
            <div className="overflow-hidden rounded-[12px] border border-line bg-surface shadow-card">
              <div className="aspect-[4/5] w-full bg-gradient-to-br from-primary/5 via-surface to-background">
                <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/20">
                    <span className="font-display text-4xl font-bold tracking-tight">D</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-line bg-background p-5">
                <div className="font-semibold text-foreground">Donovin Sims</div>
                <div className="mt-0.5 text-sm text-muted-foreground">
                  Founder · Roscoe, IL · ex-Uber Ops, ex-Walgreens
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

