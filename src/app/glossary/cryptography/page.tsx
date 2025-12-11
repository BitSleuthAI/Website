
// src/app/glossary/cryptography/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, PenSquare } from 'lucide-react';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import Link from 'next/link';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function CryptographyGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'private-key', title: 'Private Key', description: 'Secret ownership key' },
    { slug: 'signature', title: 'Signature', description: 'Transaction authorization' },
    { slug: 'schnorr-signature', title: 'Schnorr Signature', description: 'Advanced signature type' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="cryptography" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is <span className="text-primary">Cryptography</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              Cryptography is the mathematical foundation of the Bitcoin network. It's the science of secure communication, used to protect information, secure wallets, sign transactions, and ensure the overall integrity of the <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link>.
            </p>

            <Card className="my-6 bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
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
            
            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Public Key Cryptography
            </h2>
            <p className="text-muted-foreground font-normal">
             Bitcoin relies on a specific type of cryptography called public-key cryptography. This system allows you to share your public key (and addresses) freely without ever revealing the private key that controls your funds. This one-way relationship is what makes non-custodial Bitcoin wallets possible and secure.
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
