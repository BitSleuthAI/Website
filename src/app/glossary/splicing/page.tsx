// src/app/glossary/splicing/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, TrendingUp, TrendingDown } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function SplicingGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'lightning-network', title: 'Lightning Network', description: 'Layer 2 scaling' },
    { slug: 'htlc', title: 'Htlc', description: 'Conditional payment contract' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="splicing" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is <span className="text-primary">Splicing</span> (Lightning)?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              Splicing is a <Link href="/glossary/lightning-network" className="text-primary hover:underline">Lightning Network</Link> feature that allows users to add or remove funds from a payment channel without closing it. This enables dynamic channel capacity management while keeping channels open and operational.
            </p>

            <Card className="my-6 bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Zap className="mr-2 h-6 w-6 text-primary" />
                    Seamless Channel Management
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Traditional Lightning channels require closing and reopening to adjust capacity, losing routing history and requiring on-chain <Link href="/glossary/confirmation" className="text-primary hover:underline">confirmations</Link>. Splicing allows in-flight adjustments with a single on-chain transaction.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Types of Splicing
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <TrendingUp className="mr-2 h-6 w-6 text-primary" />
                        Splice-In
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Adding funds to an existing channel by combining on-chain <Link href="/glossary/utxo" className="text-primary hover:underline">UTXOs</Link> with the channel output. This increases channel capacity without disrupting connectivity or losing established routes.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <TrendingDown className="mr-2 h-6 w-6 text-primary" />
                        Splice-Out
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Withdrawing funds from a channel to on-chain addresses while keeping the channel open. Useful for moving excess liquidity or making on-chain payments without closing channels.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Splicing improves Lightning's user experience by making channel management more flexible and less disruptive. It reduces on-chain transaction costs and maintains channel state continuity. Combined with other Lightning advancements, splicing makes the network more practical for everyday use.
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
