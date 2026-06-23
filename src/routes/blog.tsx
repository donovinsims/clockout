import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCta } from "@/components/site/FinalCta";

const posts = [
  { title: "The missed-call playbook for HVAC shops", date: "Coming soon" },
  { title: "Why 'I'll get to it Monday' costs a roofer $4,200", date: "Coming soon" },
  {
    title: "Capture, Route, Surface: the operating system underneath every build",
    date: "Coming soon",
  },
  { title: "What we found in the first 5 audits (anonymized)", date: "Coming soon" },
  {
    title: "How a 6-truck plumbing shop won back 11 hours a week",
    date: "First case study in progress",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Field notes — Clockout" },
      {
        name: "description",
        content:
          "Notes from inside the builds. Audit findings, anti-patterns, and what actually moves the number.",
      },
      { property: "og:title", content: "Field notes — Clockout" },
      {
        property: "og:description",
        content: "Operator-voice writing on revenue leaks in local service businesses.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteShell>
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-4">Field notes</div>
          <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            Writing from inside the builds.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            Not a content marketing blog. Just notes from real audits and what actually moved the
            number. First posts ship as the first case studies close.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-x divide-y divide-line">
          {posts.map((p, i) => (
            <article
              key={i}
              className="flex flex-col gap-2 py-8 md:flex-row md:items-baseline md:justify-between"
            >
              <div>
                <h3 className="text-2xl md:text-3xl">{p.title}</h3>
              </div>
              <div className="mono-num text-sm text-dim">{p.date}</div>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
    </SiteShell>
  );
}
