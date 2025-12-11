// src/app/glossary/csv/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Timer, Lock, Shield } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function CSVGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'cltv', title: 'Cltv', description: 'Time-locked transactions' },
    { slug: 'htlc', title: 'Htlc', description: 'Conditional payment contract' },
    { slug: 'lightning-network', title: 'Lightning Network', description: 'Layer 2 scaling' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="csv" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is CSV <span className="text-primary">(CheckSequenceVerify)</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              CSV (CheckSequenceVerify) is a Bitcoin script opcode (BIP 112) that enforces relative timelocks, requiring a certain number of blocks to be mined after a <Link href="/glossary/utxo" className="text-primary hover:underline">UTXO</Link> is created before it can be spent. Unlike <Link href="/glossary/cltv" className="text-primary hover:underline">CLTV</Link>'s absolute timelocks, CSV's delays are relative to when the UTXO was confirmed.
            </p>

            <Card className="my-6 bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Timer className="mr-2 h-6 w-6 text-primary" />
                    Relative Timelocks
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    CSV specifies a delay in blocks (or time) relative to when the transaction creating the UTXO was confirmed. For example, "CSV 144" means the output can't be spent until 144 blocks (~24 hours) after <Link href="/glossary/confirmation" className="text-primary hover:underline">confirmation</Link>.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Key Applications
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Lock className="mr-2 h-6 w-6 text-primary" />
                        Payment Channels
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      CSV is essential for the <Link href="/glossary/lightning-network" className="text-primary hover:underline">Lightning Network</Link>, enabling unilateral channel closes with delays that give honest parties time to dispute fraudulent states before funds can be claimed.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-6 w-6 text-primary" />
                        Security Delays
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      CSV enables "cooling off" periods for high-security wallets. Large withdrawals can require a delay, giving time to cancel suspicious transactions before they complete.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             CSV's relative timelocks complement <Link href="/glossary/cltv" className="text-primary hover:underline">CLTV</Link>'s absolute timelocks, together enabling sophisticated Bitcoin <Link href="/glossary/scriptpubkey-scriptsig" className="text-primary hover:underline">scripts</Link>. Both are crucial for Layer 2 solutions, advanced custody, and <Link href="/glossary/miniscript" className="text-primary hover:underline">Miniscript</Link>-based spending policies.
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
