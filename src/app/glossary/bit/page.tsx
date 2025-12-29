
// src/app/glossary/bit/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Coins, Scale } from 'lucide-react';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { Card, CardContent } from '@/components/ui/card';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function BitGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'btc', title: 'Btc', description: 'Bitcoin ticker symbol' },
    { slug: 'bitcoin', title: 'Bitcoin', description: 'Bitcoin concept' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="bit" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is a <span className="text-primary">Bit</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              A bit is a sub-unit of a bitcoin, created to make transacting with smaller amounts of BTC more user-friendly. Just as a dollar can be broken down into cents, a bitcoin can be divided into smaller units. A bit is one of these convenient units.
            </p>

            <Card className="my-6 bg-card border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                <p className="font-semibold mb-2">The relationship is straightforward:</p>
                <code className="text-lg font-mono bg-background/50 p-2 rounded-md block break-all">
                  1 Bitcoin (BTC) = 1,000,000 bits
                </code>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Coins className="mr-2 h-6 w-6 text-primary" />
                        Why Use Bits?
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                        As the value of a single bitcoin has risen, quoting prices for everyday goods and services in full BTC (e.g., "0.0005 BTC for a coffee") can be cumbersome. Using 'bits' makes these small amounts easier to read and comprehend.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Scale className="mr-2 h-6 w-6 text-primary" />
                        Bits vs. Satoshis
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                        The smallest possible unit of Bitcoin is a "satoshi" or "sat." One bitcoin is made up of 100 million satoshis. A bit is simply a more "human-readable" layer on top of sats, where <strong className="font-semibold text-foreground">1 bit = 100 satoshis.</strong>
                    </p>
                </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              In Practice
            </h2>
            <p className="text-muted-foreground font-normal">
              While the underlying Bitcoin protocol always operates in satoshis, many wallets and services provide the option to display balances in bits or BTC for user convenience. Understanding these units is key to navigating the Bitcoin ecosystem effectively.
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
