import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { FinalCta } from "@/components/site/FinalCta";
import { faqs } from "@/data/faqs";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Clockout · The honest version" },
      { name: "description", content: "What the audit actually covers, what the guarantee really means, how it works with your existing tools, and what 'you own it' actually looks like." },
      { property: "og:title", content: "Clockout FAQ — the honest version" },
      { property: "og:description", content: "Real questions, no marketing fluff." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteShell>
      <section className="border-b border-line py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow mb-4">FAQ</div>
          <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            The honest version.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            If a question isn't here, email <a href="mailto:don@clockout.us" className="text-amber hover:underline">don@clockout.us</a> and I'll answer it directly.
          </p>
        </div>
      </section>

      <section className="border-b border-line py-16">
        <div className="container-x grid gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-line bg-surface/40 p-6 open:bg-surface">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium text-foreground">
                <span>{f.q}</span>
                <span className="mono-num shrink-0 text-amber transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-foreground/80">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <FinalCta />
    </SiteShell>
  );
}
