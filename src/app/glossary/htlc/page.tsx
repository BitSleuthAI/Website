// src/app/glossary/htlc/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Clock, Route } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function HTLCGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'lightning-network', title: 'Lightning Network', description: 'Layer 2 scaling' },
    { slug: 'cltv', title: 'Cltv', description: 'Time-locked transactions' },
    { slug: 'csv', title: 'Csv', description: 'Relative timelock' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="htlc" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is an HTLC <span className="text-primary">(Hashed Timelock Contract)</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              A Hashed Timelock Contract (HTLC) is a type of Bitcoin script that enables conditional payments based on cryptographic proof and time constraints. HTLCs are the fundamental building block of the <Link href="/glossary/lightning-network" className="text-primary hover:underline">Lightning Network</Link>, allowing trustless multi-hop payment routing.
            </p>

            <Card className="my-6 bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Lock className="mr-2 h-6 w-6 text-primary" />
                    Two Spending Conditions
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    An HTLC locks funds that can be spent in two ways: (1) the recipient reveals a secret preimage (hash lock), or (2) after a timeout, the sender can reclaim the funds (time lock). This creates atomic, trustless payment chains.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              How HTLCs Work
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Route className="mr-2 h-6 w-6 text-primary" />
                        Payment Routing
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      HTLCs enable payments to route through intermediate nodes. Each hop uses an HTLC with the same hash but decreasing timeouts. When the final recipient reveals the preimage, all intermediate nodes can claim their funds.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Clock className="mr-2 h-6 w-6 text-primary" />
                        Safety Guarantees
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      The timelock ensures that if a payment fails, funds aren't stuck forever. Using <Link href="/glossary/cltv" className="text-primary hover:underline">CLTV</Link> and <Link href="/glossary/csv" className="text-primary hover:underline">CSV</Link>, HTLCs provide strong guarantees that either the payment completes or funds return to the sender.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             HTLCs combine <Link href="/glossary/cryptography" className="text-primary hover:underline">cryptographic</Link> hash functions with Bitcoin's scripting capabilities to create trustless conditional payments. They're essential for Lightning's security model and enable features like atomic swaps between different cryptocurrencies.
            </p>
          </GlossaryPageWrapper>
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
