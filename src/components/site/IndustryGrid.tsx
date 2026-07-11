import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PHONE_DISPLAY, SMS_HREF } from "@/data/phone";
import { industries } from "@/data/industries";

export function IndustryGrid({ heading = true }: { heading?: boolean }) {
  const featured = industries[0]; // HVAC
  const rest = industries.slice(1);

  return (
    <section className="border-b border-line py-20 md:py-28">
      <div className="container-x">
        {heading && (
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="eyebrow mb-3">Find your trade</div>
              <h2 className="max-w-2xl text-4xl md:text-5xl">
                Built first for HVAC. The same playbook works across the trades.
              </h2>
            </div>
          </div>
        )}

        {/* Featured */}
        <Link
          to="/services/$slug"
          params={{ slug: featured.slug }}
          className="group block overflow-hidden rounded-[12px] border border-border bg-background transition-all hover:border-primary/40"
        >
          <div className="grid gap-8 p-7 md:grid-cols-[1fr_1.2fr] md:gap-12 md:p-10">
            <div>
              <div className="mono-num text-xs text-primary">/ {featured.slug}</div>
              <h3 className="mt-3 text-3xl md:text-4xl">{featured.name}</h3>
              <p className="mt-4 text-[17px] text-muted-foreground">{featured.painHeadline}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                See the {featured.name} build
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </div>
            </div>
            <ul className="space-y-3 border-t border-line pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              {featured.built.slice(0, 4).map((b) => (
                <li key={b} className="flex gap-3 text-[15px]">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Link>

        {/* Rest as compact row — each links directly to its own page */}
        <nav aria-label="Other industries" className="mt-8">
          <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
            Also built for
          </div>
          <ul className="flex flex-wrap gap-2">
            {rest.map((i) => (
              <li key={i.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: i.slug }}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-foreground hover:border-primary hover:text-primary"
                >
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Don't see yours? Text{" "}
            <a className="font-medium text-foreground underline underline-offset-4" href={SMS_HREF}>
              AUDIT to {PHONE_DISPLAY}
            </a>{" "}
            — it probably still works.
          </p>
        </nav>
      </div>
    </section>
  );
}
