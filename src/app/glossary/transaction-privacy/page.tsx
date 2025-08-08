
// src/app/glossary/transaction-privacy/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Fingerprint, ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';

export default function TransactionPrivacyGlossaryPage() {
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
              Understanding Bitcoin Anonymity
            </h1>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold flex items-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">
                <Fingerprint className="mr-3 h-7 w-7 text-primary" />
                On-Chain Privacy
              </h2>
              <p className="text-muted-foreground mt-4 font-normal">
                All Bitcoin transactions are public and permanently stored on the blockchain. This means anyone can view the flow of funds between addresses. Bitcoin is pseudonymous, not anonymous. Your real-world identity is not directly linked to your address, but patterns in your transactions can sometimes be analyzed to de-anonymize you.
              </p>
              <p className="text-muted-foreground mt-2 font-normal">
                Advanced techniques like CoinJoin can mix transactions to break these links, but this wallet does not currently support these features.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold flex items-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">
                <ShieldCheck className="mr-3 h-7 w-7 text-primary" />
                IP Address Privacy
              </h2>
              <p className="text-muted-foreground mt-4 font-normal">
                When this wallet broadcasts a transaction to the network, our servers can see your device&apos;s IP address. To enhance your privacy, you can hide your IP address by using a trusted VPN service or by running your browser through the Tor network.
              </p>
              <p className="text-muted-foreground mt-2 font-normal">
                This application cannot enable a VPN or Tor for you. You must configure these tools yourself on your device before using the wallet for maximum privacy.
              </p>
            </div>
            
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
