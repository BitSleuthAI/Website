// src/app/learn/page.tsx
"use client";
import Image from 'next/image';

import { useState } from 'react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowRight,
  Network,
  Lock,
  Users,
  Coins,
  TrendingUp,
  Shield,
  FileText,
  ExternalLink,
  BookOpen,
  GitBranch,
  Database,
  Zap,
  Wallet,
  ShoppingCart,
  CreditCard,
  Send,
  DownloadCloud,
  Building2,
  Globe
} from 'lucide-react';

export default function LearnPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "BitSleuth Bitcoin Educational Learning Hub",
            "description": "Learn how Bitcoin works through comprehensive educational content, visual guides, and detailed explanations of blockchain technology.",
            "url": "https://www.bitsleuth.ai/learn",
            "about": {
              "@type": "Thing",
              "name": "Bitcoin",
              "description": "Decentralized digital currency and peer-to-peer payment network"
            },
            "educationalLevel": "Beginner to Advanced",
            "teaches": [
              "Bitcoin fundamentals",
              "Blockchain technology",
              "Cryptocurrency transactions",
              "Bitcoin security",
              "Digital wallet management",
              "How to acquire bitcoin",
              "Bitcoin storage and usage",
              "Sending and receiving bitcoin"
            ]
          })
        }}
      />

      <div className="flex flex-col min-h-dvh bg-background">
        <Header basePath="/learn" />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 text-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background z-0" />
            {/* Top border removed for cleaner look */}
            <BackgroundBeams intensity="subtle" className="opacity-30" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="space-y-6 text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <BookOpen className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Educational Learning Hub</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground pb-2" aria-label="How Bitcoin Works">
                  How <span className="text-primary">Bitcoin</span> Works
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
                  Understand the revolutionary technology behind the world's first decentralized digital currency
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="#basics">
                      Start Learning
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-primary/20 hover:bg-primary/10 hover:text-primary">
                    <a href="/documents/bitcoin.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-5 w-5" />
                      Read the Whitepaper
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="relative w-full max-w-4xl mx-auto mt-12 aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-primary/20">
                  <Image
                    src="/images/learn_hero_illustration.png"
                    alt="Bitcoin Education Hero Illustration"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </section>

          {/* Bitcoin Basics Section */}
          <section id="basics" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                  What Is <span className="text-primary">Bitcoin</span>?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                  Bitcoin is the world's first decentralized digital currency, launched in 2009. It's a revolutionary <Link href="/glossary/p2p" className="text-primary hover:underline font-semibold">peer-to-peer</Link> electronic cash system that enables direct transactions without banks, governments, or any central authority.
                </p>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Unlike traditional money, Bitcoin exists entirely online and is powered by a global network of computers. Every transaction is recorded on a public, transparent ledger called the <Link href="/glossary/blockchain" className="text-primary hover:underline font-semibold">blockchain</Link>, making the system secure, open, and resistant to censorship.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Network className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">The Network</h3>
                    </div>
                    <p className="text-gray-400 mb-4">
                      Bitcoin (with capital 'B') refers to the entire network and protocol. It's a decentralized system running on thousands of computers worldwide, maintained by a global community of miners, developers, and users.
                    </p>
                    <p className="text-gray-400 mb-4">
                      The <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link> serves as a public ledger, recording every transaction in an immutable chain of blocks. This transparency allows anyone to verify transactions while maintaining user privacy through cryptographic addresses.
                    </p>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden my-4 border border-primary/10 shadow-lg">
                      <Image
                        src="/images/bitcoin_network_illustration.png"
                        alt="Bitcoin Network Decentralization Illustration"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-gray-400">

                      With no single point of control or failure, Bitcoin operates 24/7/365 across borders, enabling anyone with internet access to participate in the global economy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Coins className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">The Currency</h3>
                    </div>
                    <p className="text-gray-400 mb-4">
                      bitcoin (with lowercase 'b') refers to the digital currency units. Each <Link href="/glossary/btc" className="text-primary hover:underline">BTC</Link> can be divided into 100 million smaller units called satoshis, making it possible to transact in tiny fractions.
                    </p>
                    <p className="text-gray-400 mb-4">
                      With a fixed supply cap of 21 million bitcoins, it's designed to be scarce and deflationary by nature - no government or entity can print more. This predictable supply makes Bitcoin fundamentally different from traditional currencies that can be inflated at will.
                    </p>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 border border-primary/10 shadow-lg">
                      <Image
                        src="/images/bitcoin_currency_illustration.png"
                        alt="Bitcoin Currency Scarcity Illustration"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <p className="text-gray-400">
                      Bitcoin offers fast, borderless transactions with lower fees than traditional international transfers, operating independently of banking hours or geographic restrictions.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">The Original Vision</h3>
                      <p className="text-gray-400 mb-4">
                        In 2008, an individual or group using the pseudonym <span className="font-semibold text-primary">Satoshi Nakamoto</span> published the Bitcoin whitepaper titled <span className="italic">"Bitcoin: A Peer-to-Peer Electronic Cash System"</span>.
                      </p>
                      <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/10 hover:text-primary">
                        <a href="/documents/bitcoin.pdf" target="_blank" rel="noopener noreferrer">
                          Read the Whitepaper
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                  How <span className="text-primary">Bitcoin</span> Works
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                  Bitcoin combines cryptography, peer-to-peer networking, and economic incentives to create a secure, decentralized monetary system that operates without trusted intermediaries.
                </p>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Understanding the core mechanisms behind Bitcoin reveals why it's considered one of the most significant technological innovations of the 21st century.
                </p>
              </div>

              <div className="space-y-8">
                {/* Transactions */}
                <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Zap className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Transactions</h3>
                        <p className="text-gray-400 mb-4">
                          When you send bitcoin, you're creating a transaction that transfers ownership from your <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link> to another. Each transaction is digitally signed using your <Link href="/glossary/private-key" className="text-primary hover:underline">private key</Link>, proving you own the funds.
                        </p>
                        <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Database className="h-5 w-5 text-primary" />
                            Transaction Anatomy
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span><strong>Inputs:</strong> References to previous transactions (your <Link href="/glossary/utxo" className="text-primary hover:underline">UTXOs</Link>)</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span><strong>Outputs:</strong> New UTXOs created for recipients</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span><strong>Signature:</strong> Cryptographic proof of ownership using your <Link href="/glossary/signature" className="text-primary hover:underline">digital signature</Link></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Mining and Consensus */}
                <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Shield className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Mining & Security</h3>
                        <p className="text-gray-400 mb-4">
                          <Link href="/glossary/mining" className="text-primary hover:underline">Mining</Link> is the process of adding new transactions to the blockchain. Miners compete to solve complex mathematical puzzles, and the winner gets to add the next <Link href="/glossary/block" className="text-primary hover:underline">block</Link> of transactions.
                        </p>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 border border-primary/10 shadow-lg">
                          <Image
                            src="/images/mining_security_illustration.png"
                            alt="Bitcoin Mining and Security Illustration"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            Proof-of-Work
                          </h4>
                          <p className="text-sm text-gray-400 mb-3">
                            This computational work requires significant energy, making it extremely expensive to attack the network. The more <Link href="/glossary/hash-rate" className="text-primary hover:underline">hash rate</Link> (computing power) on the network, the more secure Bitcoin becomes.
                          </p>
                          <p className="text-sm text-gray-400">
                            Each block contains a reference to the previous block, creating an immutable chain. Changing historical data would require redoing all the computational work since that block - practically impossible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Decentralization */}
                <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <GitBranch className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Decentralization</h3>
                        <p className="text-gray-400 mb-4">
                          Bitcoin operates on a <Link href="/glossary/p2p" className="text-primary hover:underline">peer-to-peer network</Link> of thousands of nodes (computers) worldwide. No single entity controls the network, making it censorship-resistant and resilient.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2">Full Nodes</h4>
                            <p className="text-sm text-gray-400">
                              Independently verify all transactions and blocks, ensuring network rules are followed.
                            </p>
                          </div>
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2">No Central Authority</h4>
                            <p className="text-sm text-gray-400">
                              Consensus is reached through the proof-of-work mechanism, not by any governing body.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Cryptography */}
                <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Lock className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Cryptography</h3>
                        <p className="text-gray-400 mb-4">
                          <Link href="/glossary/cryptography" className="text-primary hover:underline">Cryptography</Link> is fundamental to Bitcoin's security. It enables:
                        </p>
                        <ul className="space-y-3 text-gray-400">
                          <li className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span><strong className="text-foreground">Ownership verification</strong> through public-key cryptography without revealing private keys</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span><strong className="text-foreground">Transaction integrity</strong> via cryptographic hashes that make tampering evident</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span><strong className="text-foreground">Address generation</strong> from public keys, providing privacy and security</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How to Get Bitcoin Section */}
          <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                  How to Get <span className="text-primary">Bitcoin</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  There are several ways to acquire bitcoin, from cryptocurrency exchanges to peer-to-peer transactions
                </p>
              </div>

              <div className="space-y-8">
                {/* Cryptocurrency Exchanges */}
                <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Building2 className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Cryptocurrency Exchanges</h3>
                        <p className="text-gray-400 mb-4">
                          The most common way to buy bitcoin is through regulated cryptocurrency exchanges like Coinbase, Kraken, or Binance. These platforms allow you to purchase bitcoin using traditional payment methods.
                        </p>
                        <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <CreditCard className="h-5 w-5 text-primary" />
                            Getting Started on an Exchange
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span><strong>Create an account:</strong> Sign up with your email and create a secure password</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span><strong>Verify your identity:</strong> Complete KYC (Know Your Customer) by providing government ID and proof of address</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span><strong>Add payment method:</strong> Link your bank account, debit card, or other payment options</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span><strong>Buy bitcoin:</strong> Choose the amount to purchase (you can start with as little as $1), review fees, and confirm</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Peer-to-Peer and Other Methods */}
                <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Users className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Alternative Acquisition Methods</h3>
                        <p className="text-gray-400 mb-4">
                          Beyond exchanges, there are several other ways to obtain bitcoin depending on your preferences and needs.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2">P2P Platforms</h4>
                            <p className="text-sm text-gray-400">
                              Trade directly with other users through peer-to-peer marketplaces like LocalBitcoins or Bisq for more privacy and payment flexibility.
                            </p>
                          </div>
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2">Bitcoin ATMs</h4>
                            <p className="text-sm text-gray-400">
                              Purchase bitcoin with cash at Bitcoin ATMs found in many cities, though fees are typically higher than online exchanges.
                            </p>
                          </div>
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2">Earn Bitcoin</h4>
                            <p className="text-sm text-gray-400">
                              Accept bitcoin as payment for goods or services, earn it through employment, or participate in the Bitcoin network as a miner.
                            </p>
                          </div>
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2">Gift & Transfer</h4>
                            <p className="text-sm text-gray-400">
                              Receive bitcoin as a gift from friends or family, or through promotional campaigns and rewards programs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Important Considerations */}
                <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Important Considerations</h3>
                        <ul className="space-y-2 text-gray-400">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span><strong className="text-foreground">Start small:</strong> Begin with a modest amount to familiarize yourself with the buying process and wallet management</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span><strong className="text-foreground">Compare fees:</strong> Different platforms and payment methods have varying fee structures - bank transfers are typically cheaper than card purchases</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span><strong className="text-foreground">Security first:</strong> Enable two-factor authentication (2FA) and use strong, unique passwords on all platforms</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span><strong className="text-foreground">Beware of scams:</strong> Only use reputable, regulated exchanges and never share your private keys or seed phrases</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How to Use Bitcoin Section */}
          <section className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                  How to Use <span className="text-primary">Bitcoin</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Learn how to store, send, receive, and spend your bitcoin securely and efficiently
                </p>
              </div>

              <div className="space-y-8">
                {/* Storing Bitcoin */}
                <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Wallet className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Storing Your Bitcoin</h3>
                        <p className="text-gray-400 mb-4">
                          A <Link href="/glossary/wallet" className="text-primary hover:underline">Bitcoin wallet</Link> is software that stores your <Link href="/glossary/private-key" className="text-primary hover:underline">private keys</Link> and enables you to send and receive bitcoin. Choosing the right wallet depends on your security needs and usage frequency.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <Globe className="h-5 w-5 text-primary" />
                              Hot Wallets
                            </h4>
                            <p className="text-sm text-gray-400 mb-2">
                              Connected to the internet for convenient access. Ideal for everyday transactions and smaller amounts.
                            </p>
                            <p className="text-xs text-gray-400 italic">
                              Examples: Mobile apps, desktop software, exchange wallets
                            </p>
                          </div>
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <Lock className="h-5 w-5 text-primary" />
                              Cold Wallets
                            </h4>
                            <p className="text-sm text-gray-400 mb-2">
                              Offline storage for maximum security. Best for long-term holdings and larger amounts.
                            </p>
                            <p className="text-xs text-gray-400 italic">
                              Examples: Hardware wallets (Ledger, Trezor), paper wallets
                            </p>
                          </div>
                        </div>
                        <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                          <p className="text-sm text-gray-400">
                            <strong className="text-foreground">Critical:</strong> Never share your private keys or seed phrase with anyone. These give complete control over your bitcoin. If lost, your funds are unrecoverable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sending and Receiving */}
                <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Send className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Sending & Receiving Bitcoin</h3>
                        <p className="text-gray-400 mb-4">
                          Bitcoin transactions are straightforward once you understand the basics. You'll use Bitcoin addresses (similar to email addresses) to send and receive funds.
                        </p>
                        <div className="space-y-4">
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <DownloadCloud className="h-5 w-5 text-primary" />
                              Receiving Bitcoin
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Open your wallet and locate your Bitcoin address (a long string starting with 1, 3, or bc1)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Share this address or QR code with the sender</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Wait for confirmations (typically 10-60 minutes for full security)</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <Send className="h-5 w-5 text-primary" />
                              Sending Bitcoin
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Enter the recipient's Bitcoin address (triple-check for accuracy - transactions can't be reversed!)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Specify the amount to send in BTC or your local currency</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Choose transaction fee (higher fees = faster confirmation)</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Review and confirm the transaction</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Spending Bitcoin */}
                <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <ShoppingCart className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Spending Bitcoin</h3>
                        <p className="text-gray-400 mb-4">
                          Bitcoin's growing acceptance means you can use it for an increasing range of purchases, from online shopping to real-world transactions.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2">Online Merchants</h4>
                            <p className="text-sm text-gray-400">
                              Major companies like Microsoft, Overstock, and Newegg accept bitcoin payments. Payment processors like BitPay make it easy for businesses to accept BTC.
                            </p>
                          </div>
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2">Gift Cards</h4>
                            <p className="text-sm text-gray-400">
                              Convert bitcoin to gift cards for popular retailers through services like Bitrefill, extending your spending options indirectly.
                            </p>
                          </div>
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2">Bitcoin Debit Cards</h4>
                            <p className="text-sm text-gray-400">
                              Load bitcoin onto crypto debit cards that automatically convert to local currency at point of sale, accepted anywhere traditional cards work.
                            </p>
                          </div>
                          <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                            <h4 className="font-semibold mb-2">Peer-to-Peer</h4>
                            <p className="text-sm text-gray-400">
                              Pay individuals directly for services, send money internationally, or exchange with friends - fast, borderless, and without intermediaries.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Best Practices */}
                <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Security Best Practices</h3>
                        <ul className="space-y-2 text-gray-400">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span><strong className="text-foreground">Use hardware wallets</strong> for significant holdings to protect against online threats</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span><strong className="text-foreground">Back up your wallet</strong> by securely storing your seed phrase in multiple physical locations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span><strong className="text-foreground">Verify addresses</strong> carefully before sending - double-check every character as transactions are irreversible</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span><strong className="text-foreground">Start with small amounts</strong> when testing new wallets or services</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span><strong className="text-foreground">Keep software updated</strong> to ensure you have the latest security patches and features</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span><strong className="text-foreground">Be aware of taxes</strong> as many jurisdictions treat bitcoin as property subject to capital gains tax</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Key Concepts Section */}
          <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground" aria-label="Key Bitcoin Concepts">
                  Key <span className="text-primary">Bitcoin</span> Concepts
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Essential terminology to deepen your understanding of the Bitcoin ecosystem
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    term: 'Blockchain',
                    description: 'The immutable public ledger recording all Bitcoin transactions',
                    icon: Database,
                    slug: 'blockchain',
                    colorScheme: 'primary'
                  },
                  {
                    term: 'Private Key',
                    description: 'Your secret code that proves ownership and allows spending',
                    icon: Lock,
                    slug: 'private-key',
                    colorScheme: 'primary'
                  },
                  {
                    term: 'Wallet',
                    description: 'Software managing your keys and enabling Bitcoin transactions',
                    icon: Shield,
                    slug: 'wallet',
                    colorScheme: 'primary'
                  },
                  {
                    term: 'Transaction',
                    description: 'Transfer of bitcoin value between addresses on the network',
                    icon: Zap,
                    slug: 'utxo',
                    colorScheme: 'primary'
                  },
                  {
                    term: 'Mining',
                    description: 'Process of validating transactions and securing the network',
                    icon: TrendingUp,
                    slug: 'mining',
                    colorScheme: 'primary'
                  },
                  {
                    term: 'Peer-to-Peer',
                    description: 'Decentralized network where participants interact directly',
                    icon: Users,
                    slug: 'p2p',
                    colorScheme: 'primary'
                  },
                ].map((concept) => (
                  <Link key={concept.slug} href={`/glossary/${concept.slug}`} className="group">
                    <Card className="h-full bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl group transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 rounded-lg transition-colors bg-primary/10 group-hover:bg-primary/20">
                            <concept.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                            {concept.term}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {concept.description}
                        </p>
                        <div className="mt-4 flex items-center text-sm group-hover:underline text-primary">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/glossary">
                    Explore Full Glossary
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Getting Started Section */}
          <section className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
              <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center space-y-6">
                    <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
                      Ready to Get Started?
                    </h2>
                    <p className="text-lg text-gray-400">
                      Explore our tools to analyze Bitcoin wallets and manage your own with privacy-first solutions
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href="/analyzer">
                          <Shield className="mr-2 h-5 w-5" />
                          Wallet Analyzer
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild className="border-primary/20 hover:bg-primary/10 hover:text-primary">
                        <Link href="/wallet">
                          <Lock className="mr-2 h-5 w-5" />
                          Privacy Wallet
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
    </>
  );
}
