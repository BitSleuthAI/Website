
// src/app/glossary/cryptography/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ShieldCheck, PenSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import Link from 'next/link';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function CryptographyGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  return (
    <div className="flex flex-col min-h-dvh bg-background edge-to-edge-container">
      <Header />
      <main className="flex-1 py-12 md:py-20 lg:py-24 relative overflow-hidden edge-to-edge-main">
        <BackgroundBeams intensity="subtle" />
        <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
           <Button variant="ghost" asChild className="mb-8">
            <Link href="/glossary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Glossary
            </Link>
          </Button>
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4 text-gradient-title">
              What Is Cryptography?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              Cryptography is the mathematical foundation of the Bitcoin network. It's the science of secure communication, used to protect information, secure wallets, sign transactions, and ensure the overall integrity of the <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link>.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
                    The Bedrock of Security
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Without cryptography, there would be no way to prove ownership of bitcoin or prevent others from spending your funds. It provides the trust in a trustless system.
                </p>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <PenSquare className="mr-2 h-6 w-6 text-primary" />
                        Digital Signatures
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                       When you send bitcoin, you use your private key to create a unique digital signature for that transaction. This proves to the network that you are the rightful owner and have authorized the payment.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
                        Securing Your Wallet
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Cryptography is used to generate the pair of public and private keys that make up your Bitcoin <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link>. The public key creates receiving addresses, while the private key acts as your password.
                    </p>
                </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Public Key Cryptography
            </h2>
            <p className="text-muted-foreground font-normal">
             Bitcoin relies on a specific type of cryptography called public-key cryptography. This system allows you to share your public key (and addresses) freely without ever revealing the private key that controls your funds. This one-way relationship is what makes non-custodial Bitcoin wallets possible and secure.
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
