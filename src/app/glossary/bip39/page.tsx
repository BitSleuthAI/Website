// src/app/glossary/bip39/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Shield, Eye } from 'lucide-react';
import Link from 'next/link';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function BIP39GlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  const relatedTerms = [
    { slug: 'bip32', title: 'BIP32', description: 'HD wallet standard' },
    { slug: 'bip44', title: 'BIP44', description: 'Multi-account hierarchy' },
    { slug: 'passphrase', title: 'Passphrase', description: 'Wallet recovery phrase' },
    { slug: 'wallet', title: 'Wallet', description: 'Bitcoin concept' },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="bip39" relatedTerms={relatedTerms}>
        <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is BIP39 <span className="text-primary">(Mnemonic Phrases)</span>?
            </h1>
        <p itemProp="description" className="text-lg text-muted-foreground font-normal">
          BIP39 (Bitcoin Improvement Proposal 39) is the standard for converting a random seed into a human-readable list of words, known as a mnemonic phrase or <Link href="/glossary/passphrase" className="text-primary hover:underline">passphrase</Link>. These 12, 18, or 24 words represent your entire <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link> and can restore all your bitcoin.
        </p>

        <Card className="my-6 bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
          <CardContent className="p-4">
             <h3 className="text-xl font-bold flex items-center mb-2">
                <FileText className="mr-2 h-6 w-6 text-primary" />
                Example Mnemonic Phrase
            </h3>
            <p className="text-muted-foreground mt-2 font-normal">
                "witch collapse practice feed shame open despair creek road again ice least" - These 12 words, selected from a standardized 2,048-word dictionary, encode enough entropy to securely generate all your keys.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
          Key Characteristics
        </h2>

         <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold flex items-center">
                    <Eye className="mr-2 h-6 w-6 text-primary" />
                    Human-Friendly Backup
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                  Instead of backing up complex hexadecimal strings, BIP39 lets you write down common English words. This makes backup and recovery far more accessible and less error-prone for everyday users.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-bold flex items-center">
                    <Shield className="mr-2 h-6 w-6 text-primary" />
                    Strong Security
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                  A 12-word phrase provides 128 bits of entropy, while a 24-word phrase provides 256 bits - both offering cryptographic security strong enough to protect your bitcoin indefinitely when stored properly.
                </p>
            </div>
        </div>
        
        <p className="text-muted-foreground mt-8 font-normal">
         BIP39 works seamlessly with <Link href="/glossary/bip32" className="text-primary hover:underline">BIP32</Link> (HD wallets) to create a complete wallet recovery system. Your mnemonic phrase is converted into the master seed that generates all your <Link href="/glossary/private-key" className="text-primary hover:underline">private keys</Link> via BIP32's hierarchical derivation.
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
