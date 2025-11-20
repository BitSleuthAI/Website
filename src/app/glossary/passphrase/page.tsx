
// src/app/glossary/passphrase/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';

import { AlertCircle } from 'lucide-react';


import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function PassphraseGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'bip39', title: 'Bip39', description: 'Bitcoin concept' },
    { slug: 'bip32', title: 'Bip32', description: 'HD wallet standard' },
    { slug: 'private-key', title: 'Private Key', description: 'Secret ownership key' },
    { slug: 'wallet', title: 'Wallet', description: 'Bitcoin concept' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="passphrase" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-gradient-title">
              What Is a Passphrase? Understanding Your Wallet&apos;s Most Important Security Feature
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              A cryptocurrency passphrase is a secure, human-readable backup of your wallet&apos;s
              private key. It typically consists of 12 random words, separated by spaces, generated
              from a fixed list of 2,048 English words (
              <a
                href="https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-complementary hover:underline"
              >
                view word list
              </a>
              ).
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                <p className="font-semibold mb-2">Example passphrase:</p>
                <code className="text-lg font-mono bg-background/50 p-2 rounded-md">
                  fasset diamond super boring hip mention forward garlic jump mistake cash large
                </code>
              </CardContent>
            </Card>

            <p className="text-muted-foreground font-normal">
              The BitSleuth Wallet supports standard BIP39-compatible passphrases of 12, 15, 18, 21,
              or 24 words, making it compatible with most major wallets.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Why Your Crypto Passphrase Matters
            </h2>
            <p className="text-muted-foreground font-normal">
              Your passphrase is essentially your master private key in word form. This single
              string of words is all you need to restore or access your crypto wallet - even if you
              forget your PIN. If you lose your passphrase, you permanently lose access to your
              wallet and all the funds it contains.
            </p>

            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-bold flex items-center">
                <AlertCircle className="mr-2 h-6 w-6 text-complementary" />
                Important Security Tips:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground font-normal pl-4">
                <li>
                  <strong>Store your passphrase securely</strong> - preferably offline, in multiple
                  safe locations.
                </li>
                <li>
                  <strong>Never share your passphrase</strong> - anyone with it can access and spend
                  your cryptocurrency.
                </li>
                <li>
                  <strong>BitSleuth Wallet does not store your passphrase</strong> - we don’t hold
                  private keys, can’t recover accounts, reset wallets, or reverse transactions.
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Your Crypto, Your Responsibility
            </h2>
            <p className="text-muted-foreground font-normal">
              BitSleuth Wallet is a non-custodial crypto wallet, meaning you remain fully in control
              of your keys and funds. Always double-check that you&apos;re using the correct URL and take
              every precaution to protect your passphrase.
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
