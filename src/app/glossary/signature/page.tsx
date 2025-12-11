
// src/app/glossary/signature/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { PenSquare, ShieldCheck } from 'lucide-react';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';
import Link from 'next/link';

export default function SignatureGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'private-key', title: 'Private Key', description: 'Secret ownership key' },
    { slug: 'schnorr-signature', title: 'Schnorr Signature', description: 'Advanced signature type' },
    { slug: 'psbt', title: 'Psbt', description: 'Partially signed transaction' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="signature" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is a Digital <span className="text-primary">Signature</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              In Bitcoin, a digital signature is a mathematical proof that a transaction has been authorized by the owner of the funds. It is created using a <Link href="/glossary/private-key" className="text-primary hover:underline">private key</Link> and is included in every transaction broadcast to the network.
            </p>

            <Card className="my-6 bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
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
            
            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              The Key to Security
            </h2>
            <p className="text-muted-foreground font-normal">
             Digital signatures are a cornerstone of Bitcoin's security model. They are what allow you to have full control over your funds in a decentralized system, making every transaction secure and verifiable by the entire network.
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
