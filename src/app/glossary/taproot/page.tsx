// src/app/glossary/taproot/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Eye, Zap } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function TaprootGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'schnorr-signature', title: 'Schnorr Signature', description: 'Advanced signature type' },
    { slug: 'segwit', title: 'Segwit', description: 'Segregated Witness upgrade' },
    { slug: 'miniscript', title: 'Miniscript', description: 'Structured Bitcoin scripts' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="taproot" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is <span className="text-primary">Taproot</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              Taproot is a major Bitcoin protocol upgrade activated in November 2021 that enhances privacy, efficiency, and smart contract flexibility. It introduces <Link href="/glossary/schnorr-signature" className="text-primary hover:underline">Schnorr signatures</Link> and enables more complex Bitcoin scripts to appear identical to simple transactions on the blockchain.
            </p>

            <Card className="my-6 bg-card border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Lock className="mr-2 h-6 w-6 text-primary" />
                    Privacy Through Uniformity
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    With Taproot, complex multi-signature setups and smart contracts look the same as regular single-signature transactions. This makes it impossible for outside observers to distinguish between different transaction types, significantly improving privacy.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Key Improvements
            </h2>

             <div className="mt-8 grid gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Eye className="mr-2 h-6 w-6 text-primary" />
                        Enhanced Privacy
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      By making all transactions look similar on-chain, Taproot obscures the details of complex spending conditions, protecting user privacy while maintaining Bitcoin's transparency for verification purposes.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Zap className="mr-2 h-6 w-6 text-primary" />
                        Lower Fees & Better Efficiency
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Schnorr signatures enable signature aggregation, reducing the data size of multi-signature transactions. This results in lower <Link href="/glossary/fee-rate" className="text-primary hover:underline">fees</Link> and more efficient use of block space.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Taproot builds on <Link href="/glossary/segwit" className="text-primary hover:underline">SegWit</Link> and works alongside <Link href="/glossary/miniscript" className="text-primary hover:underline">Miniscript</Link> to enable more sophisticated Bitcoin applications while keeping the network secure and private. It represents a significant step forward in Bitcoin's evolution.
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
