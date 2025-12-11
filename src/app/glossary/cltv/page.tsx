// src/app/glossary/cltv/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Lock, Shield } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function CLTVGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'csv', title: 'Csv', description: 'Relative timelock' },
    { slug: 'htlc', title: 'Htlc', description: 'Conditional payment contract' },
    { slug: 'miniscript', title: 'Miniscript', description: 'Structured Bitcoin scripts' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="cltv" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is CLTV <span className="text-primary">(CheckLockTimeVerify)</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              CLTV (CheckLockTimeVerify) is a Bitcoin script opcode (BIP 65) that prevents a <Link href="/glossary/utxo" className="text-primary hover:underline">UTXO</Link> from being spent until a specific block height or Unix timestamp is reached. It enables time-locked transactions, ensuring funds remain locked until a predetermined future date.
            </p>

            <Card className="my-6 bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Clock className="mr-2 h-6 w-6 text-primary" />
                    Absolute Timelocks
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    CLTV creates absolute timelocks specified in either block height (e.g., block 800,000) or Unix time (e.g., January 1, 2025). Once that point is reached, the funds can be spent according to other conditions in the <Link href="/glossary/scriptpubkey-scriptsig" className="text-primary hover:underline">script</Link>.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Use Cases
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Lock className="mr-2 h-6 w-6 text-primary" />
                        Inheritance & Vaults
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      CLTV enables time-delayed recovery mechanisms. For example, funds could require multiple signatures normally, but allow a single backup key to spend after 6 months of inactivity.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-6 w-6 text-primary" />
                        Payment Channels
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      The <Link href="/glossary/lightning-network" className="text-primary hover:underline">Lightning Network</Link> uses CLTV in <Link href="/glossary/htlc" className="text-primary hover:underline">HTLCs</Link> to ensure that payment routes have deadlines, preventing funds from being locked indefinitely.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             CLTV works alongside <Link href="/glossary/csv" className="text-primary hover:underline">CSV (CheckSequenceVerify)</Link>, which provides relative timelocks. Together, they enable sophisticated smart contracts and security mechanisms. Tools like <Link href="/glossary/miniscript" className="text-primary hover:underline">Miniscript</Link> make CLTV easier to use safely in complex spending conditions.
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
