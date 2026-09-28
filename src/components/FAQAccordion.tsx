import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/empresa";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.pregunta}
          value={`faq-${i}`}
          className="border-b border-border last:border-b-0"
        >
          <AccordionTrigger className="py-5 text-left font-display text-base text-primary hover:no-underline sm:text-lg">
            {faq.pregunta}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
            {faq.respuesta}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
