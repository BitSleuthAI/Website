// src/app/glossary/fee-rate/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Scale, DollarSign } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function FeeRateGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'mempool', title: 'Mempool', description: 'Unconfirmed transaction pool' },
    { slug: 'confirmation', title: 'Confirmation', description: 'Transaction verification' },
    { slug: 'rbf', title: 'Rbf', description: 'Replace-by-fee' },
    { slug: 'cpfp', title: 'Cpfp', description: 'Fee bumping technique' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="fee-rate" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is Fee Rate <span className="text-primary">(sat/vB)</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              Fee rate, measured in satoshis per virtual byte (sat/vB), represents how much you're paying per unit of transaction data. It's the primary metric miners use to prioritize transactions from the <Link href="/glossary/mempool" className="text-primary hover:underline">mempool</Link> when building blocks.
            </p>

            <Card className="my-6 bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Scale className="mr-2 h-6 w-6 text-primary" />
                    Understanding Virtual Bytes
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Virtual bytes (vBytes) account for the <Link href="/glossary/segwit" className="text-primary hover:underline">SegWit</Link> discount, where witness data takes up less block weight. A transaction's total fee is calculated as: fee rate × transaction size in vBytes.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Key Concepts
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <TrendingUp className="mr-2 h-6 w-6 text-primary" />
                        Fee Market Dynamics
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Fee rates fluctuate based on network demand. During high activity, you need higher sat/vB rates for timely <Link href="/glossary/confirmation" className="text-primary hover:underline">confirmation</Link>. During quiet periods, lower rates suffice.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <DollarSign className="mr-2 h-6 w-6 text-primary" />
                        Optimizing Fees
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Transaction size varies based on input/output count and address types. <Link href="/glossary/segwit" className="text-primary hover:underline">SegWit</Link> and <Link href="/glossary/taproot" className="text-primary hover:underline">Taproot</Link> addresses reduce transaction size, resulting in lower total fees at the same sat/vB rate.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Most <Link href="/glossary/wallet" className="text-primary hover:underline">wallets</Link> automatically suggest appropriate fee rates based on current mempool conditions. Advanced users can manually set rates using tools like <Link href="/glossary/rbf" className="text-primary hover:underline">RBF</Link> to adjust after broadcasting if needed. Understanding fee rates helps optimize both cost and confirmation speed.
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
