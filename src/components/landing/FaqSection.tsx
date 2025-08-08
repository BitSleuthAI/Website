import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to connect my wallet or provide private keys?",
    answer: "Absolutely not. BitSleuth only requires a public Bitcoin address to work. Your keys and funds are never at risk.",
  },
  {
    question: "Is my search data stored or tracked?",
    answer: "No, all lookups are transient and anonymous by default. We do not store your search history unless you explicitly choose to save an analysis in a future version.",
  },
  {
    question: "Do you support the Lightning Network?",
    answer: "Not yet. Our focus is currently on on-chain Bitcoin transactions. Lightning Network support is on our long-term roadmap.",
  },
  {
    question: "How accurate is the AI analysis?",
    answer: "Our AI is trained on vast amounts of public blockchain data to identify patterns and risks. While it provides powerful insights, it should be used as a supplementary tool and not as financial advice."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-20 md:py-24 lg:py-32">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left font-semibold text-lg">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base font-normal">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
