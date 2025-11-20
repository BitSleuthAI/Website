
// src/app/glossary/wallet/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { KeyRound, Monitor, Smartphone, HardDrive, Flame, Snowflake } from 'lucide-react';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function WalletGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  const relatedTerms = [
    { slug: 'private-key', title: 'Private Key', description: 'Secret key for bitcoin ownership' },
    { slug: 'passphrase', title: 'Passphrase', description: 'Wallet recovery phrase' },
    { slug: 'address', title: 'Address', description: 'Bitcoin receiving address' },
    { slug: 'bip39', title: 'BIP39', description: 'Mnemonic phrase standard' },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="wallet" relatedTerms={relatedTerms}>
        <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-gradient-title">
          What Is a Bitcoin Wallet?
        </h1>
        <p itemProp="description" className="text-lg text-muted-foreground font-normal">
          A Bitcoin wallet is the software you use to interact with the Bitcoin network. It allows you to send, receive, and store your bitcoin securely. Contrary to its name, a wallet doesn't store your actual coins; instead, it holds your essential <Link href="/glossary/private-key" className="text-primary hover:underline">private keys</Link>.
        </p>

        <Card className="my-6 bg-secondary/30">
          <CardContent className="p-4">
             <h3 className="text-xl font-bold flex items-center mb-2">
                <KeyRound className="mr-2 h-6 w-6 text-primary" />
                Your Keys, Your Coins
            </h3>
            <p className="text-muted-foreground mt-2 font-normal">
                The most important function of a wallet is to manage your <Link href="/glossary/private-key" className="text-primary hover:underline">private keys</Link>. These keys are what give you ownership and control over your bitcoin. A "non-custodial" wallet, like the BitSleuth Wallet, ensures that only you ever have access to these keys.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
          Types of Wallets
        </h2>
        <p className="text-muted-foreground font-normal">
          Bitcoin wallets come in various forms, each offering different balances of convenience and security.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div>
                <h3 className="text-xl font-bold flex items-center">
                    <Smartphone className="mr-2 h-6 w-6 text-primary" />
                    Mobile
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                  Apps on your smartphone that make it easy to send and receive bitcoin on the go. They are convenient for daily use.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-bold flex items-center">
                    <Monitor className="mr-2 h-6 w-6 text-primary" />
                    Desktop
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                  Software installed on your computer, often providing more advanced features and a high level of control over your funds.
                </p>
            </div>
             <div>
                <h3 className="text-xl font-bold flex items-center">
                    <HardDrive className="mr-2 h-6 w-6 text-primary" />
                    Hardware
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                  Physical devices that store your private keys offline, providing the highest level of security against online threats.
                </p>
            </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
          Hot vs. Cold Wallets
        </h2>
        <p className="text-muted-foreground font-normal">
          Wallets are also categorized by whether they are connected to the internet. This is one of the most important security considerations.
        </p>

         <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold flex items-center">
                    <Flame className="mr-2 h-6 w-6 text-primary" />
                    Hot Wallets
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                  Any wallet that is connected to the internet (e.g., mobile and desktop wallets). They are convenient for spending and frequent use but are more vulnerable to online attacks. Best for small amounts.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-bold flex items-center">
                    <Snowflake className="mr-2 h-6 w-6 text-primary" />
                    Cold Wallets
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                  A wallet where the <Link href="/glossary/private-key" className="text-primary hover:underline">private keys</Link> are stored completely offline (e.g., a hardware wallet or paper wallet). They offer the highest level of security for long-term storage but are less convenient for transactions. Best for large amounts.
                </p>
            </div>
        </div>

        <p className="text-muted-foreground mt-8 font-normal">
          Most modern wallets support <Link href="/glossary/bip39" className="text-primary hover:underline">BIP39 mnemonic phrases</Link> for backup and recovery, making it easy to restore your wallet on any compatible device using your <Link href="/glossary/passphrase" className="text-primary hover:underline">passphrase</Link>.
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
