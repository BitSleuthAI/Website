// src/app/glossary/lightning-network/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Network, DollarSign } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function LightningNetworkGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'htlc', title: 'Htlc', description: 'Conditional payment contract' },
    { slug: 'splicing', title: 'Splicing', description: 'Lightning channel management' },
    { slug: 'sidechain', title: 'Sidechain', description: 'Parallel blockchain' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="lightning-network" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is the Lightning <span className="text-primary">Network</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              The Lightning Network is a Layer 2 payment protocol built on top of Bitcoin that enables instant, low-cost transactions by moving them off the main <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link>. It uses payment channels and multi-hop routing to allow users to transact without waiting for block confirmations.
            </p>

            <Card className="my-6 bg-card border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Network className="mr-2 h-6 w-6 text-primary" />
                    Payment Channels
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Two parties lock bitcoin into a 2-of-2 multi-signature <Link href="/glossary/address" className="text-primary hover:underline">address</Link> to open a channel. They can then transact instantly off-chain by updating the channel balance. Only the opening and closing transactions touch the main blockchain.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Key Features
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Zap className="mr-2 h-6 w-6 text-primary" />
                        Instant Payments
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Lightning transactions settle in milliseconds rather than waiting for <Link href="/glossary/confirmation" className="text-primary hover:underline">confirmations</Link>. This makes Bitcoin practical for everyday purchases like coffee, where waiting 10+ minutes is impractical.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <DollarSign className="mr-2 h-6 w-6 text-primary" />
                        Micro-Fees
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Lightning fees are typically a fraction of a cent, regardless of transaction size. This enables micropayments and streaming payments that would be economically impossible on the main chain.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Lightning uses <Link href="/glossary/htlc" className="text-primary hover:underline">HTLCs</Link> for routing payments through intermediate nodes, enabling transactions between parties without direct channels. Features like <Link href="/glossary/splicing" className="text-primary hover:underline">splicing</Link> continue improving its usability. The network relies on Bitcoin's security while dramatically improving scalability.
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
