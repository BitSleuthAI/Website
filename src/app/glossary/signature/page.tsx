
// src/app/glossary/signature/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, PenSquare, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import Link from 'next/link';

export default function SignatureGlossaryPage() {
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
              What Is a Digital Signature?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              In Bitcoin, a digital signature is a mathematical proof that a transaction has been authorized by the owner of the funds. It is created using a <Link href="/glossary/private-key" className="text-primary hover:underline">private key</Link> and is included in every transaction broadcast to the network.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <PenSquare className="mr-2 h-6 w-6 text-primary" />
                    How It Works
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                   When you send bitcoin from your <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link>, it uses your private key to "sign" the transaction details. This signature is unique to that specific transaction and cannot be forged without the private key.
                </p>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
                        Proving Ownership
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      The network can verify this signature using your public key. This allows you to prove you own the funds and authorize the payment without ever revealing your private key.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <PenSquare className="mr-2 h-6 w-6 text-primary" />
                        Ensuring Integrity
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      A digital signature also ensures that the transaction has not been altered after it was signed. Any change to the transaction details would invalidate the signature, protecting against tampering.
                    </p>
                </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">
              The Key to Security
            </h2>
            <p className="text-muted-foreground font-normal">
             Digital signatures are a cornerstone of Bitcoin's security model. They are what allow you to have full control over your funds in a decentralized system, making every transaction secure and verifiable by the entire network.
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
