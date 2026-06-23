import { ShieldCheck, Wrench, Users } from "lucide-react";
import { BetaSpots } from "./BetaSpots";

export function SocialProof() {
  return (
    <section className="border-b border-line py-16 md:py-20">
      <div className="container-x">
        <div className="eyebrow mb-3">Trust & transparency</div>
        <div className="grid items-end gap-6 md:grid-cols-[1.4fr_1fr]">
          <h2 className="text-3xl md:text-4xl">
            First case studies in progress. We'd rather be honest than make them up.
          </h2>
          <p className="text-foreground/70">
            Beta clients get a discounted build in exchange for a documented before/after. As soon
            as the first numbers are in, they live here. No stock photos. No fake names.
          </p>
        </div>

        {/* Trust signals — replacing empty placeholder cards */}
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          <div className="bg-background p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Built by an operator</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Donovin ran Product Operations at Uber (real-time dispatch, 50K+ attendees) and
              shipped digital products at Walgreens. Now bringing that discipline to local trade
              shops at a flat price.
            </p>
          </div>

          <div className="bg-background p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Guaranteed results</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              If the system doesn't give you 10 hours back every week within 30 days, I keep working
              until it does. Free. No fine print.
            </p>
          </div>

          <div className="bg-background p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <Wrench className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Beta validation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              <BetaSpots /> Each beta client gets a full build at a fraction of the future price in
              exchange for a documented case study.
            </p>
          </div>
        </div>

        {/* Live testimonial until case studies are published */}
        <div className="mt-6 rounded-xl border border-line bg-surface/40 px-6 py-5 text-center text-sm text-muted-foreground">
          First case study in progress. Until then: Saved me 10+ hours a week &mdash; Shea S.,
          Trading Community
        </div>
      </div>
    </section>
  );
}
