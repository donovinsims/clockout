import { GUARANTEE } from "@/data/offer";

export function GuaranteeBlock() {
  return (
    <section className="border-b border-line bg-surface/40 py-16 md:py-20">
      <div className="container-x">
        <div className="eyebrow mb-3">The 10-Hour Guarantee</div>
        <h2 className="max-w-3xl text-3xl md:text-4xl">{GUARANTEE}</h2>
      </div>
    </section>
  );
}
