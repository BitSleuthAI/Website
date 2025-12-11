// src/app/glossary/cpfp/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { GitBranch, Users, Zap } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function CPFPGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'rbf', title: 'Rbf', description: 'Replace-by-fee' },
    { slug: 'fee-rate', title: 'Fee Rate', description: 'Transaction priority metric' },
    { slug: 'mempool', title: 'Mempool', description: 'Unconfirmed transaction pool' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="cpfp" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is CPFP <span className="text-primary">(Child Pays for Parent)</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              Child Pays for Parent (CPFP) is a fee bumping technique where a recipient creates a new transaction (child) that spends an unconfirmed transaction (parent) with a high enough fee to incentivize miners to include both transactions together. This allows recipients to accelerate stuck transactions.
            </p>

            <Card className="my-6 bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <GitBranch className="mr-2 h-6 w-6 text-primary" />
                    Transaction Dependencies
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    A child transaction cannot be confirmed without its parent being confirmed first. Miners recognize this dependency and consider the combined <Link href="/glossary/fee-rate" className="text-primary hover:underline">fee rate</Link> of both transactions when selecting which to include in a <Link href="/glossary/block" className="text-primary hover:underline">block</Link>.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              How It Works
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Users className="mr-2 h-6 w-6 text-primary" />
                        Recipient Control
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Unlike <Link href="/glossary/rbf" className="text-primary hover:underline">RBF</Link> which requires the sender to bump fees, CPFP empowers the recipient to accelerate confirmation. This is useful when receiving a payment with insufficient fees.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Zap className="mr-2 h-6 w-6 text-primary" />
                        Combined Fee Calculation
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Miners calculate the combined fee rate of parent and child transactions. If the child pays enough to make the combined rate attractive, both get mined together, even if the parent's original fee was low.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             CPFP is particularly useful when you need to use funds from an unconfirmed transaction or when helping someone who sent you bitcoin with too low a fee. Most modern <Link href="/glossary/wallet" className="text-primary hover:underline">wallets</Link> support CPFP functionality, making it a reliable alternative to RBF for fee management.
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
