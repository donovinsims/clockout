import { tools as TOOLS } from "@/data/tools";

export function ToolsStrip() {
  return (
    <section className="border-b border-line bg-surface-2">
      <div className="container-x py-12 md:py-16">
        <div className="eyebrow mb-6 text-center text-muted-foreground">
          Works with the tools you already use
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {TOOLS.map((t) => (
            <span
              key={t}
              className="mono-num text-sm font-medium uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
