import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionContentList } from "@/lib/data";
import React from "react";

const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {AccordionContentList.map((faq) => (
        <AccordionItem value={faq.id} key={faq.id}>
          <AccordionTrigger className="font-inter uppercase">
            {faq.title}
          </AccordionTrigger>
          <AccordionContent className="font-inter mt-4 mb-4 rounded-2xl bg-white px-5 py-4 text-base">
            {faq.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
