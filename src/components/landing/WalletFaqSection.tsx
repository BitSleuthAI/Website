// src/components/landing/WalletFaqSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

const faqs = [
  {
    question: "What does non-custodial mean?",
    answer: "It means you, and only you, have control over your private keys and your Bitcoin. BitSleuth never has access to your funds, so we cannot freeze your account or lose your assets.",
  },
  {
    question: "If I lose my passphrase, can BitSleuth recover it?",
    answer: <>No. We do not store your passphrase or any personal data. It is your sole responsibility to back up your passphrase securely. Learn more about passphrases in our <Link href="/glossary/passphrase" className="text-primary underline">glossary</Link>.</>,
  },
  {
    question: "How does this wallet improve my privacy?",
    answer: <>The wallet helps you avoid reusing addresses, which is a common privacy leak on the Bitcoin blockchain. By generating new addresses for receiving funds, it becomes much harder for others to link your transactions together. For more details, see our article on <Link href="/glossary/transaction-privacy" className="text-primary underline">transaction privacy</Link>.</>,
  },
  {
    question: "Is this wallet a good choice for beginners?",
    answer: "This wallet is designed for users who understand the importance of self-custody and are comfortable with the responsibility of managing their own keys. If you are new to Bitcoin, we recommend reading our glossary to understand the core concepts."
  },
  {
    question: "How can I get support?",
    answer: <>For any questions or assistance, please contact our support team at <a href="mailto:support@bitsleuth.ai" className="text-primary underline">support@bitsleuth.ai</a>.</>,
  }
];

export function WalletFaqSection() {
  return (
    <section id="faq" className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
          Frequently Asked <span className="text-primary">Questions</span>
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
