
// src/app/glossary/confirmation/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ShieldCheck, Clock, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import Link from 'next/link';

export default function ConfirmationGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
           <Button variant="ghost" asChild className="mb-8">
            <Link href="/glossary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Glossary
            </Link>
          </Button>
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">
              What Is a Confirmation?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              A confirmation means that a Bitcoin transaction has been successfully verified by the network and included in a <Link href="/glossary/block" className="text-primary hover:underline">block</Link> on the blockchain. Each new block that is added after your transaction's block counts as an additional confirmation.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
                    How It Works
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    When you send a transaction, it is first broadcast to the network. Miners then pick it up and include it in a new block. Once that block is solved and added to the blockchain, your transaction has received its first confirmation.
                </p>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Clock className="mr-2 h-6 w-6 text-primary" />
                        Why Wait for More?
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                       While one confirmation is often enough for small transactions, waiting for more confirmations increases security. Each new block makes it exponentially harder for the transaction to be reversed.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <LinkIcon className="mr-2 h-6 w-6 text-primary" />
                        Secure and Irreversible
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      After about six confirmations (roughly 60 minutes), a transaction is considered fully secured and practically irreversible. This is the standard many exchanges and services use for large amounts.
                    </p>
                </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">
              Confirmations in Practice
            </h2>
            <p className="text-muted-foreground font-normal">
             When you use a wallet, you'll often see a transaction as "pending" or "unconfirmed" until it receives its first confirmation. The number of confirmations is a direct measure of a transaction's security and finality on the Bitcoin network.
            </p>
          </article>
        </div>
      </main>
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
