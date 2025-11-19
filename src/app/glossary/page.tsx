
// src/app/glossary/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, ArrowLeft, Search, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { generateGlossaryCollectionSchema } from '@/lib/structured-data';
import { ValueBadge } from '@/components/ui/value-badge';


const glossaryTerms = [
  {
    term: 'Address',
    definition:
      "A unique identifier, like a virtual mailbox, used to receive Bitcoin. For security and privacy, it is strongly recommended to use a new address for every transaction.",
    href: '/glossary/address',
  },
  {
    term: 'BIP32 (Hierarchical Deterministic Wallets)',
    definition: 'A standard for HD wallets that allows a single master seed to generate an entire tree of key pairs, enabling unlimited addresses from one backup.',
    href: '/glossary/bip32',
  },
  {
    term: 'BIP39 (Mnemonic Phrases)',
    definition: 'The standard for converting a random seed into a human-readable list of words (12-24 words) that represent your entire wallet and can restore all your bitcoin.',
    href: '/glossary/bip39',
  },
  {
    term: 'BIP44 (Multi-Account Hierarchy)',
    definition: 'Extends BIP32 by defining a standard hierarchical structure for organizing multiple accounts and cryptocurrencies within a single wallet.',
    href: '/glossary/bip44',
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
    term: 'CLTV (CheckLockTimeVerify)',
    definition: 'A Bitcoin script opcode that prevents a UTXO from being spent until a specific block height or timestamp is reached, enabling time-locked transactions.',
    href: '/glossary/cltv',
  },
  {
    term: 'Coin Selection',
    definition: 'The process by which a wallet chooses which UTXOs to spend when creating a transaction, optimizing for fees, privacy, or reducing wallet complexity.',
    href: '/glossary/coin-selection',
  },
  {
    term: 'CoinJoin',
    definition: 'A privacy-enhancing technique where multiple users combine their transactions into a single collaborative transaction, breaking the common input ownership heuristic.',
    href: '/glossary/coinjoin',
  },
  {
    term: 'Confirmation',
    definition: 'The act of a transaction being successfully verified by the network and included in a block on the blockchain. More confirmations mean greater security.',
    href: '/glossary/confirmation',
  },
  {
    term: 'CPFP (Child Pays for Parent)',
    definition: 'A fee bumping technique where a recipient creates a high-fee transaction that spends an unconfirmed transaction, incentivizing miners to include both.',
    href: '/glossary/cpfp',
  },
  {
    term: 'Cryptography',
    definition: 'The mathematical foundation of Bitcoin, used to secure wallets, sign transactions, and ensure the integrity of the blockchain.',
    href: '/glossary/cryptography',
  },
  {
    term: 'CSV (CheckSequenceVerify)',
    definition: 'A Bitcoin script opcode that enforces relative timelocks, requiring a certain number of blocks to be mined after a UTXO is created before it can be spent.',
    href: '/glossary/csv',
  },
  {
    term: 'Descriptor Wallet',
    definition: 'A modern wallet implementation that uses output script descriptors to precisely define how to derive addresses and create spending conditions.',
    href: '/glossary/descriptor-wallet',
  },
  {
    term: 'Double Spend',
    definition: 'An attack where the same bitcoins are spent in more than one transaction. The Bitcoin network is designed to prevent this through its consensus mechanism.',
    href: '/glossary/double-spend',
  },
  {
    term: 'Dust Limit',
    definition: 'The minimum amount of bitcoin that makes economic sense to transact, where a UTXO is considered "dust" if it costs more in fees to spend than its value.',
    href: '/glossary/dust-limit',
  },
  {
    term: 'Fee Rate (sat/vB)',
    definition: 'The amount paid per unit of transaction data in satoshis per virtual byte, the primary metric miners use to prioritize transactions.',
    href: '/glossary/fee-rate',
  },
  {
    term: 'Hash Rate',
    definition: 'The total combined computational power being used to mine and process transactions on the Bitcoin network. A higher hash rate indicates a more secure network.',
    href: '/glossary/hash-rate',
  },
  {
    term: 'HTLC (Hashed Timelock Contract)',
    definition: 'A type of Bitcoin script that enables conditional payments based on cryptographic proof and time constraints, fundamental to the Lightning Network.',
    href: '/glossary/htlc',
  },
  {
    term: 'Lightning Network',
    definition: 'A Layer 2 payment protocol built on Bitcoin that enables instant, low-cost transactions by moving them off the main blockchain using payment channels.',
    href: '/glossary/lightning-network',
  },
  {
    term: 'Mempool',
    definition: 'A waiting area where unconfirmed Bitcoin transactions are held before being included in a block. Each node maintains its own mempool.',
    href: '/glossary/mempool',
  },
  {
    term: 'Merkle Tree',
    definition: 'A cryptographic data structure used to efficiently summarize and verify all transactions in a block through a tree of hashes with the Merkle root at the top.',
    href: '/glossary/merkle-tree',
  },
  {
    term: 'Mining',
    definition: 'The process of using powerful computers to solve complex puzzles, which confirms transactions, adds them to the blockchain, and creates new bitcoins.',
    href: '/glossary/mining',
  },
  {
    term: 'Miniscript',
    definition: 'A language for writing Bitcoin Scripts in a structured way that makes them easier to write, analyze, and verify while maintaining protocol compatibility.',
    href: '/glossary/miniscript',
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
    term: 'PayJoin',
    definition: 'A privacy-enhancing transaction type where the receiver contributes their own UTXO as an additional input, breaking chain analysis assumptions.',
    href: '/glossary/payjoin',
  },
  {
    term: 'Private Key',
    definition: 'The secret, cryptographic key that proves ownership and allows you to spend bitcoins. It is generated from your passphrase and should never be handled directly.',
    href: '/glossary/private-key',
  },
  {
    term: 'PSBT (Partially Signed Bitcoin Transaction)',
    definition: 'A standardized format for Bitcoin transactions that allows multiple parties or devices to collaborate on creating and signing a transaction.',
    href: '/glossary/psbt',
  },
  {
    term: 'RBF (Replace-by-Fee)',
    definition: 'A protocol feature that allows an unconfirmed transaction to be replaced with a new version that pays a higher fee for faster confirmation.',
    href: '/glossary/rbf',
  },
  {
    term: 'Schnorr Signature',
    definition: 'A type of digital signature adopted with Taproot that enables signature aggregation, batch verification, and improved privacy for complex scripts.',
    href: '/glossary/schnorr-signature',
  },
  {
    term: 'ScriptPubKey / ScriptSig',
    definition: 'The two halves of Bitcoin\'s programmable transaction system: ScriptPubKey defines spending conditions, while ScriptSig provides the data to satisfy them.',
    href: '/glossary/scriptpubkey-scriptsig',
  },
  {
    term: 'SegWit (Segregated Witness)',
    definition: 'A 2017 protocol upgrade that separates signature data from transaction data, increasing block capacity and fixing transaction malleability.',
    href: '/glossary/segwit',
  },
  {
    term: 'Sidechain',
    definition: 'A separate blockchain that runs parallel to Bitcoin\'s main chain, connected through a two-way peg that allows bitcoin to be transferred between chains.',
    href: '/glossary/sidechain',
  },
  {
    term: 'Signature',
    definition: 'A digital proof of ownership created with a private key to authorize a transaction. It allows you to spend bitcoins without revealing the key itself.',
    href: '/glossary/signature',
  },
  {
    term: 'Silent Payments',
    definition: 'A protocol that allows publishing a single static address that can receive unlimited payments, with each payment going to a unique on-chain address.',
    href: '/glossary/silent-payments',
  },
  {
    term: 'Splicing (Lightning)',
    definition: 'A Lightning Network feature that allows adding or removing funds from a payment channel without closing it, enabling dynamic capacity management.',
    href: '/glossary/splicing',
  },
  {
    term: 'Taproot',
    definition: 'A major 2021 Bitcoin upgrade that introduces Schnorr signatures and enables complex Bitcoin scripts to appear identical to simple transactions.',
    href: '/glossary/taproot',
  },
  {
    term: 'Transaction Privacy',
    definition:
      'Understand the difference between pseudonymity and anonymity in Bitcoin, and learn about on-chain and IP address privacy considerations.',
    href: '/glossary/transaction-privacy',
  },
  {
    term: 'UTXO (Unspent Transaction Output)',
    definition: 'A discrete chunk of bitcoin that remains after a transaction and can be spent in future transactions, like digital bills or coins in your wallet.',
    href: '/glossary/utxo',
  },
   {
    term: 'Wallet',
    definition: 'Software that manages your private keys and allows you to interact with the Bitcoin network to send and receive funds. Wallets come in various forms, such as mobile, desktop, and hardware.',
    href: '/glossary/wallet',
  },
];

export default function GlossaryIndexPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  // Add structured data for SEO and AEO
  useEffect(() => {
    const structuredData = generateGlossaryCollectionSchema(glossaryTerms.length);
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    script.id = 'glossary-structured-data';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('glossary-structured-data');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Filter glossary terms based on search query
  const filteredTerms = glossaryTerms.filter((item) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    
    return (
      item.term.toLowerCase().includes(query) ||
      item.definition.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="edge-to-edge-section py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background to-muted dark:to-black text-foreground relative overflow-hidden">
          <BackgroundBeams />
          <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
              </Link>
            </Button>
            <div className="space-y-6 text-center">
              <div className="mb-4 inline-block">
                <ValueBadge icon={GraduationCap} text="Learning Hub" variant="primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gradient-title pb-2">
                Bitcoin Glossary
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                Your comprehensive educational resource for understanding Bitcoin, blockchain technology, and cryptocurrency terminology.
              </p>
              <div className="max-w-3xl mx-auto space-y-4 pt-4">
                <p className="text-lg text-muted-foreground md:text-xl font-normal leading-relaxed">
                  <span className="font-semibold text-foreground">Bitcoin</span> is powered by{' '}
                  <span className="font-semibold text-foreground">peer-to-peer technology</span>, with no central authority or banks in control. Transactions and the creation of new bitcoins are managed by the network itself.
                </p>
                <p className="text-lg text-muted-foreground md:text-xl font-normal leading-relaxed">
                  It's <span className="font-semibold text-foreground">open-source</span> and{' '}
                  <span className="font-semibold text-foreground">public by design</span> - nobody owns it, and{' '}
                  <span className="font-semibold text-foreground">anyone can take part</span>.
                </p>
                <p className="text-lg text-muted-foreground md:text-xl font-normal leading-relaxed">
                  With its <span className="font-semibold text-foreground">unique properties</span>, Bitcoin unlocks possibilities that no traditional payment system ever could.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Glossary Terms */}
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <BackgroundBeams intensity="subtle" />
          <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
                <Input
                  type="text"
                  placeholder="Search glossary terms and definitions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base shadow-lg border-primary/20 focus-visible:border-primary/50"
                  aria-label="Search glossary"
                />
              </div>
            </div>

            {/* Results or No Results Message */}
            {filteredTerms.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or{' '}
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-primary hover:underline font-medium"
                    aria-label="Clear search"
                  >
                    clear the search
                  </button>
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredTerms.sort((a,b) => a.term.localeCompare(b.term)).map((item) => (
              <Link key={item.term} href={item.href} className="block group">
                <Card className="hover:border-primary/50 hover:bg-secondary/20 transition-colors shadow-glow">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-primary group-hover:underline">
                        {item.term}
                      </h2>
                      <p className="text-muted-foreground mt-2 font-normal">{item.definition}</p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
              </div>
            )}
          </div>
        </section>
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
