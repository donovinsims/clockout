import { ShieldCheck } from "lucide-react";
import { GUARANTEE } from "@/data/offer";

export function GuaranteeBlock() {
  return (
    <section className="border-b border-line bg-surface/40 py-16 md:py-20">
      <div className="container-x grid items-center gap-10 md:grid-cols-[auto_1fr]">
        <div className="grid h-20 w-20 place-items-center rounded-2xl border border-amber/40 bg-amber/10 text-amber">
          <ShieldCheck className="h-9 w-9" />
        </div>
        <div>
          <div className="eyebrow mb-3">The guarantee</div>
          <h2 className="max-w-3xl text-3xl md:text-4xl">{GUARANTEE}</h2>
        </div>
      </div>
    </section>
  );
}
