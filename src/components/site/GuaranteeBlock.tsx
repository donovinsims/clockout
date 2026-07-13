import { GUARANTEE } from "@/data/offer";

export function GuaranteeBlock() {
  return (
    <section className="border-b border-line bg-surface/40 py-20 md:py-28">
      <div className="container-x">
        <div className="eyebrow mb-3">The 10-Hour Guarantee</div>
        <h2 className="max-w-3xl text-4xl md:text-5xl">{GUARANTEE}</h2>
      </div>
    </section>
  );
}
