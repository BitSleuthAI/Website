
// src/app/glossary/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';


const glossaryTerms = [
  {
    term: 'Address',
    definition:
      "A unique identifier, like a virtual mailbox, used to receive Bitcoin. For security and privacy, it is strongly recommended to use a new address for every transaction.",
    href: '/glossary/address',
  },
   {
    term: 'Bit',
    definition: 'A user-friendly sub-unit of a bitcoin, where 1 BTC equals 1,000,000 bits. It makes dealing with smaller amounts easier to read and comprehend.',
    href: '/glossary/bit',
  },
  {
    term: 'Bitcoin',
    definition: 'A decentralized digital currency (bitcoin) and the global network it runs on (Bitcoin), enabling peer-to-peer transactions without a central authority.',
    href: '/glossary/bitcoin',
  },
  {
    term: 'Block',
    definition: 'A permanent record in the blockchain containing a batch of recent, confirmed transactions. A new block is added approximately every 10 minutes.',
    href: '/glossary/block',
  },
  {
    term: 'Blockchain',
    definition: 'A public, decentralized, and immutable ledger of every Bitcoin transaction ever made. It consists of a chronological chain of blocks linked together with cryptography.',
    href: '/glossary/blockchain',
  },
  {
    term: 'BTC',
    definition: 'The ticker symbol and most common abbreviation for one bitcoin, the currency of the Bitcoin network.',
    href: '/glossary/btc',
  },
  {
    term: 'Confirmation',
    definition: 'The act of a transaction being successfully verified by the network and included in a block on the blockchain. More confirmations mean greater security.',
    href: '/glossary/confirmation',
  },
  {
    term: 'Cryptography',
    definition: 'The mathematical foundation of Bitcoin, used to secure wallets, sign transactions, and ensure the integrity of the blockchain.',
    href: '/glossary/cryptography',
  },
  {
    term: 'Double Spend',
    definition: 'An attack where the same bitcoins are spent in more than one transaction. The Bitcoin network is designed to prevent this through its consensus mechanism.',
    href: '/glossary/double-spend',
  },
  {
    term: 'Hash Rate',
    definition: 'The total combined computational power being used to mine and process transactions on the Bitcoin network. A higher hash rate indicates a more secure network.',
    href: '/glossary/hash-rate',
  },
  {
    term: 'Mining',
    definition: 'The process of using powerful computers to solve complex puzzles, which confirms transactions, adds them to the blockchain, and creates new bitcoins.',
    href: '/glossary/mining',
  },
  {
    term: 'P2P (Peer-to-Peer)',
    definition: 'A decentralized network where participants, or peers, interact directly with each other without needing a central authority like a bank.',
    href: '/glossary/p2p',
  },
  {
    term: 'Passphrase',
    definition:
      'A human-readable backup of your crypto wallet’s private key, usually made up of 12 to 24 randomly chosen words. Most cryptocurrency wallets, including BitSleuth Wallet, use BIP39-compatible passphrases for secure backup and recovery.',
    href: '/glossary/passphrase',
  },
  {
    term: 'Private Key',
    definition: 'The secret, cryptographic key that proves ownership and allows you to spend bitcoins. It is generated from your passphrase and should never be handled directly.',
    href: '/glossary/private-key',
  },
  {
    term: 'Signature',
    definition: 'A digital proof of ownership created with a private key to authorize a transaction. It allows you to spend bitcoins without revealing the key itself.',
    href: '/glossary/signature',
  },
  {
    term: 'Transaction Privacy',
    definition:
      'Understand the difference between pseudonymity and anonymity in Bitcoin, and learn about on-chain and IP address privacy considerations.',
    href: '/glossary/transaction-privacy',
  },
   {
    term: 'Wallet',
    definition: 'Software that manages your private keys and allows you to interact with the Bitcoin network to send and receive funds. Wallets come in various forms, such as mobile, desktop, and hardware.',
    href: '/glossary/wallet',
  },
];

export default function GlossaryIndexPage() {
  const router = useRouter();
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
            <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-8 text-gradient-title">
            Glossary
          </h1>
          <div className="space-y-6">
            {glossaryTerms.sort((a,b) => a.term.localeCompare(b.term)).map((item) => (
              <Link key={item.term} href={item.href} className="block group">
                <Card className="hover:border-primary/50 hover:bg-secondary/20 transition-colors shadow-glow">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-primary group-hover:underline">
                        {item.term}
                      </h2>
                      <p className="text-muted-foreground mt-2 font-normal">{item.definition}</p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
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
