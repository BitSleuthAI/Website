// src/app/glossary/bip32/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { GitBranch, Shield, Key } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function BIP32GlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'bip39', title: 'Bip39', description: 'Bitcoin concept' },
    { slug: 'bip44', title: 'Bip44', description: 'Multi-account hierarchy' },
    { slug: 'passphrase', title: 'Passphrase', description: 'Wallet recovery phrase' },
    { slug: 'private-key', title: 'Private Key', description: 'Secret ownership key' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="bip32" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-gradient-title">
              What Is BIP32 (Hierarchical Deterministic Wallets)?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              BIP32 (Bitcoin Improvement Proposal 32) defines the standard for Hierarchical Deterministic (HD) wallets. It allows a single master seed to generate an entire tree of key pairs, enabling users to create unlimited <Link href="/glossary/address" className="text-complementary hover:underline">addresses</Link> from one backup while maintaining organization.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Shield className="mr-2 h-6 w-6 text-complementary" />
                    One Seed, Infinite Keys
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Instead of backing up every <Link href="/glossary/private-key" className="text-complementary hover:underline">private key</Link> individually, HD wallets let you back up just the master seed once (usually as a <Link href="/glossary/bip39" className="text-complementary hover:underline">BIP39 mnemonic phrase</Link>). All future keys can be derived from this single seed.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Key Features
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <GitBranch className="mr-2 h-6 w-6 text-complementary" />
                        Hierarchical Structure
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Keys are organized in a tree structure with parent-child relationships. This enables logical organization (e.g., separate accounts for savings, spending) all from one seed.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Key className="mr-2 h-6 w-6 text-complementary" />
                        Deterministic Generation
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      All keys are mathematically derived from the master seed using a deterministic algorithm. The same seed will always generate the same sequence of keys, ensuring recovery is reliable and predictable.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             BIP32 is the foundation for modern Bitcoin <Link href="/glossary/wallet" className="text-complementary hover:underline">wallets</Link> and works alongside <Link href="/glossary/bip39" className="text-complementary hover:underline">BIP39</Link> (mnemonic phrases) and <Link href="/glossary/bip44" className="text-complementary hover:underline">BIP44</Link> (multi-account hierarchy) to create a complete, user-friendly wallet experience.
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
