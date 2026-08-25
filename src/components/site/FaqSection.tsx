import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/content/site";

export function FaqSection({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;

  return (
    <section className="container-edit py-16 md:py-24 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <div className="eyebrow hairline">Dúvidas frequentes</div>
        <h2 className="section-title mt-6">Perguntas frequentes</h2>
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto mt-12">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="font-serif text-lg py-5">{item.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
