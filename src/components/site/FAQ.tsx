import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function FAQ({ items = faqs.slice(0, 8) }: { items?: { q: string; a: string }[] }) {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-[1fr_1.5fr]">
        <div>
          <div className="eyebrow mb-3">Questions</div>
          <h2 className="text-4xl md:text-5xl">The things owners actually ask before they book.</h2>
          <p className="mt-5 max-w-sm text-muted-foreground">
            If yours isn't here, text it to{" "}
            <a className="text-foreground underline underline-offset-4" href="tel:+16087131651">
              (608) 713-1651
            </a>{" "}
            and you'll get a real answer.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-line">
              <AccordionTrigger className="text-left text-[17px] font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
