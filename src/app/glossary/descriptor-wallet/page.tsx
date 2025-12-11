// src/app/glossary/descriptor-wallet/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { FileCode, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function DescriptorWalletGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'bip32', title: 'Bip32', description: 'HD wallet standard' },
    { slug: 'miniscript', title: 'Miniscript', description: 'Structured Bitcoin scripts' },
    { slug: 'psbt', title: 'Psbt', description: 'Partially signed transaction' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="descriptor-wallet" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is a Descriptor <span className="text-primary">Wallet</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              A descriptor wallet is a modern Bitcoin <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link> implementation that uses output script descriptors to precisely define how to derive addresses and create spending conditions. It provides a more flexible and explicit alternative to traditional <Link href="/glossary/bip32" className="text-primary hover:underline">BIP32</Link>/<Link href="/glossary/bip44" className="text-primary hover:underline">BIP44</Link> wallets.
            </p>

            <Card className="my-6 bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <FileCode className="mr-2 h-6 w-6 text-primary" />
                    What Are Descriptors?
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Descriptors are compact strings that encode all information needed to derive addresses and construct spending transactions. They explicitly specify address types (P2PKH, P2WPKH, P2TR), key derivation paths, and multi-sig configurations.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Advantages
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-6 w-6 text-primary" />
                        Explicit & Unambiguous
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Descriptors remove guesswork by explicitly stating how to generate <Link href="/glossary/address" className="text-primary hover:underline">addresses</Link>. This eliminates compatibility issues and ensures wallets can always reconstruct the correct address types.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Zap className="mr-2 h-6 w-6 text-primary" />
                        Advanced Features
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Descriptor wallets natively support modern address formats like <Link href="/glossary/taproot" className="text-primary hover:underline">Taproot</Link> (P2TR) and work seamlessly with <Link href="/glossary/miniscript" className="text-primary hover:underline">Miniscript</Link> for complex spending policies.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Bitcoin Core adopted descriptor wallets as the default in version 23.0, reflecting their growing importance. They're particularly valuable for multi-sig setups, hardware wallet coordination, and <Link href="/glossary/psbt" className="text-primary hover:underline">PSBT</Link> workflows requiring precise script definitions.
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
