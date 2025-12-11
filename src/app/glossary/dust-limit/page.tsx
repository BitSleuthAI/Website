// src/app/glossary/dust-limit/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, DollarSign, Shield } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function DustLimitGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'utxo', title: 'Utxo', description: 'Unspent transaction output' },
    { slug: 'fee-rate', title: 'Fee Rate', description: 'Transaction priority metric' },
    { slug: 'coin-selection', title: 'Coin Selection', description: 'UTXO selection strategy' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="dust-limit" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is the Dust <span className="text-primary">Limit</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              The dust limit is the minimum amount of bitcoin that makes economic sense to transact. A <Link href="/glossary/utxo" className="text-primary hover:underline">UTXO</Link> is considered "dust" if its value is so small that it would cost more in transaction fees to spend it than it's actually worth.
            </p>

            <Card className="my-6 bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <AlertTriangle className="mr-2 h-6 w-6 text-primary" />
                    Economic Viability
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    If a UTXO contains 500 satoshis but requires 1,000 satoshis in fees to spend, it's economically unspendable dust. The dust threshold varies based on current <Link href="/glossary/fee-rate" className="text-primary hover:underline">fee rates</Link> and transaction types.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Why Dust Matters
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <DollarSign className="mr-2 h-6 w-6 text-primary" />
                        UTXO Management
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Receiving many small payments creates dust UTXOs that become expensive to consolidate. Good <Link href="/glossary/coin-selection" className="text-primary hover:underline">coin selection</Link> strategies help avoid accumulating dust by consolidating UTXOs during low-fee periods.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-6 w-6 text-primary" />
                        Network Protection
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Bitcoin nodes may reject transactions that create dust outputs to prevent blockchain bloat. The standard dust threshold is around 546 satoshis for most output types, though this can vary by implementation.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Understanding dust limits is important for <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link> management and optimizing transaction costs. Using <Link href="/glossary/segwit" className="text-primary hover:underline">SegWit</Link> or <Link href="/glossary/taproot" className="text-primary hover:underline">Taproot</Link> addresses reduces transaction sizes, making smaller UTXOs more economically viable to spend.
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
