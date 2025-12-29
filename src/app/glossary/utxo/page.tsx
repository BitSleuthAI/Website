// src/app/glossary/utxo/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Coins, Receipt, Wallet } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function UTXOGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'coin-selection', title: 'Coin Selection', description: 'UTXO selection strategy' },
    { slug: 'dust-limit', title: 'Dust Limit', description: 'Minimum transaction amount' },
    { slug: 'address', title: 'Address', description: 'Bitcoin receiving address' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="utxo" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is a UTXO <span className="text-primary">(Unspent Transaction Output)</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              A UTXO (Unspent Transaction Output) is a discrete chunk of bitcoin that remains after a transaction and can be spent in future transactions. Think of UTXOs as digital bills or coins in your <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link> - each one represents a specific amount of bitcoin that you own and can spend.
            </p>

            <Card className="my-6 bg-card border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Coins className="mr-2 h-6 w-6 text-primary" />
                    Bitcoin's Accounting Model
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Unlike traditional bank accounts with balances, Bitcoin tracks individual outputs from previous transactions. Your wallet balance is simply the sum of all UTXOs controlled by your <Link href="/glossary/private-key" className="text-primary hover:underline">private keys</Link>.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              How UTXOs Work
            </h2>

             <div className="mt-8 grid gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Receipt className="mr-2 h-6 w-6 text-primary" />
                        Transaction Inputs & Outputs
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      When you send bitcoin, you consume one or more UTXOs as inputs and create new UTXOs as outputs. If a UTXO is larger than the amount you want to send, the difference is returned to you as "change" in a new UTXO.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Wallet className="mr-2 h-6 w-6 text-primary" />
                        Coin Selection
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Your wallet automatically selects which UTXOs to spend when creating a transaction through a process called <Link href="/glossary/coin-selection" className="text-primary hover:underline">coin selection</Link>. This affects transaction size, fees, and privacy.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             The UTXO model is fundamental to Bitcoin's design, providing strong security properties and enabling features like <Link href="/glossary/transaction-privacy" className="text-primary hover:underline">transaction privacy</Link> techniques. Understanding UTXOs is essential for advanced Bitcoin usage and optimization.
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
