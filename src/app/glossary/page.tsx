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
    category: 'wallet-basics' as const,
  },
  {
    term: 'BIP32 (Hierarchical Deterministic Wallets)',
    definition: 'A standard for HD wallets that allows a single master seed to generate an entire tree of key pairs, enabling unlimited addresses from one backup.',
    href: '/glossary/bip32',
    category: 'wallet-standards' as const,
  },
  {
    term: 'BIP39 (Mnemonic Phrases)',
    definition: 'The standard for converting a random seed into a human-readable list of words (12-24 words) that represent your entire wallet and can restore all your bitcoin.',
    href: '/glossary/bip39',
    category: 'wallet-standards' as const,
  },
  {
    term: 'BIP44 (Multi-Account Hierarchy)',
    definition: 'Extends BIP32 by defining a standard hierarchical structure for organizing multiple accounts and cryptocurrencies within a single wallet.',
    href: '/glossary/bip44',
    category: 'wallet-standards' as const,
  },
  {
    term: 'Bit',
    definition: 'A user-friendly sub-unit of a bitcoin, where 1 BTC equals 1,000,000 bits. It makes dealing with smaller amounts easier to read and comprehend.',
    href: '/glossary/bit',
    category: 'wallet-basics' as const,
  },
  {
    term: 'Bitcoin',
    definition: 'A decentralized digital currency (bitcoin) and the global network it runs on (Bitcoin), enabling peer-to-peer transactions without a central authority.',
    href: '/glossary/bitcoin',
    category: 'wallet-basics' as const,
  },
  {
    term: 'Block',
    definition: 'A permanent record in the blockchain containing a batch of recent, confirmed transactions. A new block is added approximately every 10 minutes.',
    href: '/glossary/block',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Blockchain',
    definition: 'A public, decentralized, and immutable ledger of every Bitcoin transaction ever made. It consists of a chronological chain of blocks linked together with cryptography.',
    href: '/glossary/blockchain',
    category: 'wallet-basics' as const,
  },
  {
    term: 'BTC',
    definition: 'The ticker symbol and most common abbreviation for one bitcoin, the currency of the Bitcoin network.',
    href: '/glossary/btc',
    category: 'wallet-basics' as const,
  },
  {
    term: 'CLTV (CheckLockTimeVerify)',
    definition: 'A Bitcoin script opcode that prevents a UTXO from being spent until a specific block height or timestamp is reached, enabling time-locked transactions.',
    href: '/glossary/cltv',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Coin Selection',
    definition: 'The process by which a wallet chooses which UTXOs to spend when creating a transaction, optimizing for fees, privacy, or reducing wallet complexity.',
    href: '/glossary/coin-selection',
    category: 'privacy-features' as const,
  },
  {
    term: 'CoinJoin',
    definition: 'A privacy-enhancing technique where multiple users combine their transactions into a single collaborative transaction, breaking the common input ownership heuristic.',
    href: '/glossary/coinjoin',
    category: 'privacy-features' as const,
  },
  {
    term: 'Confirmation',
    definition: 'The act of a transaction being successfully verified by the network and included in a block on the blockchain. More confirmations mean greater security.',
    href: '/glossary/confirmation',
    category: 'wallet-basics' as const,
  },
  {
    term: 'CPFP (Child Pays for Parent)',
    definition: 'A fee bumping technique where a recipient creates a high-fee transaction that spends an unconfirmed transaction, incentivizing miners to include both.',
    href: '/glossary/cpfp',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Cryptography',
    definition: 'The mathematical foundation of Bitcoin, used to secure wallets, sign transactions, and ensure the integrity of the blockchain.',
    href: '/glossary/cryptography',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'CSV (CheckSequenceVerify)',
    definition: 'A Bitcoin script opcode that enforces relative timelocks, requiring a certain number of blocks to be mined after a UTXO is created before it can be spent.',
    href: '/glossary/csv',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Descriptor Wallet',
    definition: 'A modern wallet implementation that uses output script descriptors to precisely define how to derive addresses and create spending conditions.',
    href: '/glossary/descriptor-wallet',
    category: 'wallet-standards' as const,
  },
  {
    term: 'Double Spend',
    definition: 'An attack where the same bitcoins are spent in more than one transaction. The Bitcoin network is designed to prevent this through its consensus mechanism.',
    href: '/glossary/double-spend',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Dust Limit',
    definition: 'The minimum amount of bitcoin that makes economic sense to transact, where a UTXO is considered "dust" if it costs more in fees to spend than its value.',
    href: '/glossary/dust-limit',
    category: 'wallet-basics' as const,
  },
  {
    term: 'Fee Rate (sat/vB)',
    definition: 'The amount paid per unit of transaction data in satoshis per virtual byte, the primary metric miners use to prioritize transactions.',
    href: '/glossary/fee-rate',
    category: 'wallet-basics' as const,
  },
  {
    term: 'Hash Rate',
    definition: 'The total combined computational power being used to mine and process transactions on the Bitcoin network. A higher hash rate indicates a more secure network.',
    href: '/glossary/hash-rate',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'HTLC (Hashed Timelock Contract)',
    definition: 'A type of Bitcoin script that enables conditional payments based on cryptographic proof and time constraints, fundamental to the Lightning Network.',
    href: '/glossary/htlc',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Lightning Network',
    definition: 'A Layer 2 payment protocol built on Bitcoin that enables instant, low-cost transactions by moving them off the main blockchain using payment channels.',
    href: '/glossary/lightning-network',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Mempool',
    definition: 'A waiting area where unconfirmed Bitcoin transactions are held before being included in a block. Each node maintains its own mempool.',
    href: '/glossary/mempool',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Merkle Tree',
    definition: 'A cryptographic data structure used to efficiently summarize and verify all transactions in a block through a tree of hashes with the Merkle root at the top.',
    href: '/glossary/merkle-tree',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Mining',
    definition: 'The process of using powerful computers to solve complex puzzles, which confirms transactions, adds them to the blockchain, and creates new bitcoins.',
    href: '/glossary/mining',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Miniscript',
    definition: 'A language for writing Bitcoin Scripts in a structured way that makes them easier to write, analyze, and verify while maintaining protocol compatibility.',
    href: '/glossary/miniscript',
    category: 'wallet-standards' as const,
  },
  {
    term: 'P2P (Peer-to-Peer)',
    definition: 'A decentralized network where participants, or peers, interact directly with each other without needing a central authority like a bank.',
    href: '/glossary/p2p',
    category: 'wallet-basics' as const,
  },
  {
    term: 'Passphrase',
    definition:
      'A human-readable backup of your crypto wallet’s private key, usually made up of 12 to 24 randomly chosen words. Most cryptocurrency wallets, including BitSleuth Wallet, use BIP39-compatible passphrases for secure backup and recovery.',
    href: '/glossary/passphrase',
    category: 'wallet-basics' as const,
  },
  {
    term: 'PayJoin',
    definition: 'A privacy-enhancing transaction type where the receiver contributes their own UTXO as an additional input, breaking chain analysis assumptions.',
    href: '/glossary/payjoin',
    category: 'privacy-features' as const,
  },
  {
    term: 'Private Key',
    definition: 'The secret, cryptographic key that proves ownership and allows you to spend bitcoins. It is generated from your passphrase and should never be handled directly.',
    href: '/glossary/private-key',
    category: 'wallet-basics' as const,
  },
  {
    term: 'PSBT (Partially Signed Bitcoin Transaction)',
    definition: 'A standardized format for Bitcoin transactions that allows multiple parties or devices to collaborate on creating and signing a transaction.',
    href: '/glossary/psbt',
    category: 'wallet-standards' as const,
  },
  {
    term: 'RBF (Replace-by-Fee)',
    definition: 'A protocol feature that allows an unconfirmed transaction to be replaced with a new version that pays a higher fee for faster confirmation.',
    href: '/glossary/rbf',
    category: 'wallet-standards' as const,
  },
  {
    term: 'Schnorr Signature',
    definition: 'A type of digital signature adopted with Taproot that enables signature aggregation, batch verification, and improved privacy for complex scripts.',
    href: '/glossary/schnorr-signature',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'ScriptPubKey / ScriptSig',
    definition: 'The two halves of Bitcoin\'s programmable transaction system: ScriptPubKey defines spending conditions, while ScriptSig provides the data to satisfy them.',
    href: '/glossary/scriptpubkey-scriptsig',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'SegWit (Segregated Witness)',
    definition: 'A 2017 protocol upgrade that separates signature data from transaction data, increasing block capacity and fixing transaction malleability.',
    href: '/glossary/segwit',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Sidechain',
    definition: 'A separate blockchain that runs parallel to Bitcoin\'s main chain, connected through a two-way peg that allows bitcoin to be transferred between chains.',
    href: '/glossary/sidechain',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Signature',
    definition: 'A digital proof of ownership created with a private key to authorize a transaction. It allows you to spend bitcoins without revealing the key itself.',
    href: '/glossary/signature',
    category: 'wallet-basics' as const,
  },
  {
    term: 'Silent Payments',
    definition: 'A protocol that allows publishing a single static address that can receive unlimited payments, with each payment going to a unique on-chain address.',
    href: '/glossary/silent-payments',
    category: 'privacy-features' as const,
  },
  {
    term: 'Splicing (Lightning)',
    definition: 'A Lightning Network feature that allows adding or removing funds from a payment channel without closing it, enabling dynamic capacity management.',
    href: '/glossary/splicing',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Taproot',
    definition: 'A major 2021 Bitcoin upgrade that introduces Schnorr signatures and enables complex Bitcoin scripts to appear identical to simple transactions.',
    href: '/glossary/taproot',
    category: 'advanced-bitcoin' as const,
  },
  {
    term: 'Transaction Privacy',
    definition:
      'Understand the difference between pseudonymity and anonymity in Bitcoin, and learn about on-chain and IP address privacy considerations.',
    href: '/glossary/transaction-privacy',
    category: 'privacy-features' as const,
  },
  {
    term: 'UTXO (Unspent Transaction Output)',
    definition: 'A discrete chunk of bitcoin that remains after a transaction and can be spent in future transactions, like digital bills or coins in your wallet.',
    href: '/glossary/utxo',
    category: 'wallet-basics' as const,
  },
  {
    term: 'Wallet',
    definition: 'Software that manages your private keys and allows you to interact with the Bitcoin network to send and receive funds. Wallets come in various forms, such as mobile, desktop, and hardware.',
    href: '/glossary/wallet',
    category: 'wallet-basics' as const,
  },
];

export default function GlossaryIndexPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'' | 'wallet-basics' | 'wallet-standards' | 'privacy-features' | 'advanced-bitcoin'>('');

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

  // Filter glossary terms based on search query and category
  const filteredTerms = glossaryTerms.filter((item) => {
    // Category filter
    if (categoryFilter && item.category !== categoryFilter) {
      return false;
    }

    // Search filter
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
        <section className="edge-to-edge-section py-16 md:py-20 lg:py-24 text-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background z-0" />
          <BackgroundBeams className="opacity-30" />
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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground pb-2">
                Bitcoin <span className="text-primary">Glossary</span>
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
        <section className="relative py-12 md:py-20 bg-background">
          <BackgroundBeams />
          <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
            {/* Search Bar */}
            <div className="mb-8 space-y-4">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
                <Input
                  type="text"
                  placeholder="Search glossary terms and definitions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base shadow-none border-primary/20 focus-visible:border-primary/50"
                  aria-label="Search glossary"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  variant={categoryFilter === '' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCategoryFilter('')}
                  className={categoryFilter === '' ? '' : 'border-primary/20 hover:bg-primary/10 hover:text-primary'}
                >
                  Clear
                </Button>
                <Button
                  variant={categoryFilter === 'wallet-basics' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCategoryFilter('wallet-basics')}
                  className={categoryFilter === 'wallet-basics' ? '' : 'border-primary/20 hover:bg-primary/10 hover:text-primary'}
                >
                  Wallet Basics
                </Button>
                <Button
                  variant={categoryFilter === 'wallet-standards' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCategoryFilter('wallet-standards')}
                  className={categoryFilter === 'wallet-standards' ? '' : 'border-primary/20 hover:bg-primary/10 hover:text-primary'}
                >
                  Wallet Standards
                </Button>
                <Button
                  variant={categoryFilter === 'privacy-features' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCategoryFilter('privacy-features')}
                  className={categoryFilter === 'privacy-features' ? '' : 'border-primary/20 hover:bg-primary/10 hover:text-primary'}
                >
                  Privacy Features
                </Button>
                <Button
                  variant={categoryFilter === 'advanced-bitcoin' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCategoryFilter('advanced-bitcoin')}
                  className={categoryFilter === 'advanced-bitcoin' ? '' : 'border-primary/20 hover:bg-primary/10 hover:text-primary'}
                >
                  Advanced Bitcoin
                </Button>
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
                {filteredTerms.sort((a, b) => a.term.localeCompare(b.term)).map((item) => (
                  <Link key={item.term} href={item.href} className="block group">
                    <Card className="bg-card border-none shadow-xl hover:shadow-2xl transition-all">
                      <CardContent className="p-6 flex items-center justify-between">
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold group-hover:underline text-primary">
                            {item.term}
                          </h2>
                          <p className="text-muted-foreground mt-2 font-normal">{item.definition}</p>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <ChevronRight className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
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
