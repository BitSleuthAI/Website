
// src/app/glossary/double-spend/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ShieldCheck, GitBranch, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import Link from 'next/link';

export default function DoubleSpendGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
           <Button variant="ghost" asChild className="mb-8">
            <Link href="/glossary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Glossary
            </Link>
          </Button>
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4 text-gradient-title">
              What Is a Double Spend?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              A double spend is a type of attack where the same digital currency is sent to two different recipients. Before Bitcoin, this was the fundamental problem that prevented the creation of a reliable peer-to-peer digital cash system. Bitcoin was designed specifically to solve this issue.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Copy className="mr-2 h-6 w-6 text-primary" />
                    The Digital Dilemma
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                   Because digital information can be easily copied, a malicious actor could try to broadcast two conflicting transactions at the same time, effectively spending their coins twice.
                </p>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <GitBranch className="mr-2 h-6 w-6 text-primary" />
                        How Bitcoin Prevents It
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      All transactions are broadcast to the entire network. The first transaction to be included in a confirmed <Link href="/glossary/block" className="text-primary hover:underline">block</Link> is considered valid, while the other is rejected.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
                        The Role of Confirmations
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      This is why waiting for <Link href="/glossary/confirmation" className="text-primary hover:underline">confirmations</Link> is crucial. The more blocks that are built on top of a transaction, the more certain it is that it's the legitimate one and cannot be reversed.
                    </p>
                </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              A Fundamental Breakthrough
            </h2>
            <p className="text-muted-foreground font-normal">
             By using a public ledger (the blockchain) and a proof-of-work consensus mechanism, Bitcoin creates a system where everyone agrees on a single transaction history. This makes double spending practically impossible, providing the trust needed for a decentralized currency to function.
            </p>
          </article>
        </div>
      </main>
      <Footer onPrivacyClick={openPrivacyModal} onTermsClick={openTermsModal} />
      <PrivacyPolicyModal isOpen={activeModal === 'privacy'} onOpenChange={closeModal} />
      <TermsOfServiceModal 
        isOpen={activeModal === 'terms'} 
        onOpenChange={closeModal}
        onPrivacyClick={openPrivacyModal} 
      />
    </div>
  );
}
