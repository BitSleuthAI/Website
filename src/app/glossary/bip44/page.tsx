// src/app/glossary/bip44/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { FolderTree, Wallet, Shield } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function BIP44GlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'bip32', title: 'Bip32', description: 'HD wallet standard' },
    { slug: 'bip39', title: 'Bip39', description: 'Bitcoin concept' },
    { slug: 'descriptor-wallet', title: 'Descriptor Wallet', description: 'Modern wallet standard' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="bip44" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is BIP44 <span className="text-primary">(Multi-Account Hierarchy)</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              BIP44 (Bitcoin Improvement Proposal 44) extends <Link href="/glossary/bip32" className="text-primary hover:underline">BIP32</Link> by defining a standard hierarchical structure for organizing multiple accounts and cryptocurrencies within a single <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link>. It provides a universal derivation path format that ensures compatibility across different wallet software.
            </p>

            <Card className="my-6 bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <FolderTree className="mr-2 h-6 w-6 text-primary" />
                    Standard Derivation Path
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    BIP44 uses the path structure: m / 44' / coin_type' / account' / change / address_index. For Bitcoin, this typically looks like m/44'/0'/0'/0/0, where each level serves a specific organizational purpose.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Key Benefits
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Wallet className="mr-2 h-6 w-6 text-primary" />
                        Multiple Accounts
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      BIP44 lets you create separate accounts (like "savings", "spending", "business") all from one <Link href="/glossary/bip39" className="text-primary hover:underline">mnemonic phrase</Link>, each with its own set of <Link href="/glossary/address" className="text-primary hover:underline">addresses</Link>.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-6 w-6 text-primary" />
                        Wallet Portability
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Since BIP44 is a widely adopted standard, you can restore your wallet in any BIP44-compatible software and it will automatically discover all your accounts and addresses using the same derivation paths.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             BIP44 works in harmony with <Link href="/glossary/bip32" className="text-primary hover:underline">BIP32</Link> and <Link href="/glossary/bip39" className="text-primary hover:underline">BIP39</Link> to provide a complete, standardized wallet system. Modern wallets like <Link href="/glossary/descriptor-wallet" className="text-primary hover:underline">descriptor wallets</Link> build upon these foundations with even more flexibility.
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
