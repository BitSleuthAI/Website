// src/app/glossary/coin-selection/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet, DollarSign, Eye } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function CoinSelectionGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'utxo', title: 'Utxo', description: 'Unspent transaction output' },
    { slug: 'fee-rate', title: 'Fee Rate', description: 'Transaction priority metric' },
    { slug: 'transaction-privacy', title: 'Transaction Privacy', description: 'Privacy techniques' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="coin-selection" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is Coin <span className="text-primary">Selection</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              Coin selection is the process by which a Bitcoin <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link> chooses which <Link href="/glossary/utxo" className="text-primary hover:underline">UTXOs</Link> to spend when creating a transaction. Different selection algorithms optimize for various goals like minimizing fees, enhancing privacy, or reducing future wallet complexity.
            </p>

            <Card className="my-6 bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Wallet className="mr-2 h-6 w-6 text-primary" />
                    Why It Matters
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Your wallet might have dozens or hundreds of UTXOs from previous transactions. The selection algorithm determines which ones to use as inputs, affecting transaction size, <Link href="/glossary/fee-rate" className="text-primary hover:underline">fees</Link>, privacy, and future wallet management.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Common Strategies
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <DollarSign className="mr-2 h-6 w-6 text-primary" />
                        Fee Optimization
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Strategies like "Branch and Bound" aim to create transactions with exact change or minimal change outputs, reducing overall transaction size and fees. Some algorithms consolidate <Link href="/glossary/dust-limit" className="text-primary hover:underline">dust</Link> UTXOs when fees are low.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Eye className="mr-2 h-6 w-6 text-primary" />
                        Privacy Considerations
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Poor coin selection can leak privacy by linking UTXOs from different sources. Advanced users may manually select coins to avoid linking addresses or to control which transaction histories get associated together.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Bitcoin Core and other wallets implement sophisticated coin selection algorithms. Some wallets offer manual coin control, letting advanced users choose specific UTXOs. Understanding coin selection helps optimize both costs and <Link href="/glossary/transaction-privacy" className="text-primary hover:underline">privacy</Link> in Bitcoin transactions.
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
