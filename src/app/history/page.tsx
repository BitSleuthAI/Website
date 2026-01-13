"use client";

import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { PrivacyPolicyModal } from "@/components/landing/PrivacyPolicyModal";
import { TermsOfServiceModal } from "@/components/landing/TermsOfServiceModal";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  FileText,
  ExternalLink,
  Calendar,
  User,
  Scroll,
  Blocks,
  Lightbulb,
  Network,
  TrendingUp,
  Globe,
  Shield,
  Coins,
  Zap,
  Lock,
  Cpu,
  Rocket,
  Landmark,
} from "lucide-react";

export default function HistoryPage() {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(
    null
  );

  const openPrivacyModal = () => setActiveModal("privacy");
  const openTermsModal = () => setActiveModal("terms");
  const closeModal = () => setActiveModal(null);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "The Complete History of Bitcoin: From Creation to Global Impact",
            description:
              "An in-depth look at Bitcoin's history, including its creation by Satoshi Nakamoto, the revolutionary whitepaper, the Genesis Block, and its lasting influence on global finance.",
            author: {
              "@type": "Organization",
              name: "BitSleuth",
            },
            publisher: {
              "@type": "Organization",
              name: "BitSleuth",
            },
            datePublished: "2025-01-19",
            about: [
              {
                "@type": "Thing",
                name: "Bitcoin",
                sameAs: "https://en.wikipedia.org/wiki/Bitcoin",
              },
              {
                "@type": "Person",
                name: "Satoshi Nakamoto",
                sameAs: "https://en.wikipedia.org/wiki/Satoshi_Nakamoto",
              },
            ],
          }),
        }}
      />

      <div className="flex flex-col min-h-dvh bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="edge-to-edge-section py-12 md:py-16 lg:py-20 text-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background z-0" />
            <BackgroundBeams intensity="subtle" className="opacity-30" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <BookOpen className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      Bitcoin History
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground pb-2">
                    The History of <span className="text-primary">Bitcoin</span>
                  </h1>
                  <p className="text-xl text-muted-foreground md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto lg:mx-0">
                    From a revolutionary whitepaper to the world&apos;s first
                    decentralized digital currency
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                    <Button
                      size="lg"
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Link href="#when-created">
                        Explore Bitcoin&apos;s Origins
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="border-primary/20 hover:bg-primary/10 hover:text-primary"
                    >
                      <a
                        href="/documents/bitcoin.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="mr-2 h-5 w-5" />
                        Read the Whitepaper
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                  <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                    <Image
                      src="/images/history/hero.png"
                      alt="Bitcoin History Evolution"
                      fill
                      className="object-contain relative z-10 drop-shadow-2xl rounded-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* When was Bitcoin created? */}
          <section
            id="when-created"
            className="py-12 md:py-16 lg:py-20 relative overflow-hidden"
          >
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                  When Was <span className="text-primary">Bitcoin</span>{" "}
                  Created?
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <Card className="bg-card border-none shadow-xl hover:shadow-2xl">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <p className="text-lg text-muted-foreground">
                          Bitcoin&apos;s journey began on{" "}
                          <span className="font-semibold text-foreground">
                            October 31, 2008
                          </span>
                          , when an individual or group using the pseudonym{" "}
                          <span className="font-semibold text-foreground">
                            Satoshi Nakamoto
                          </span>{" "}
                          published a groundbreaking whitepaper to a
                          cryptography mailing list. The paper, titled{" "}
                          <span className="italic">
                            &quot;Bitcoin: A Peer-to-Peer Electronic Cash
                            System,&quot;
                          </span>{" "}
                          outlined a revolutionary vision for digital money.
                        </p>
                        <p className="text-lg text-muted-foreground">
                          However, Bitcoin truly came to life on{" "}
                          <span className="font-semibold text-foreground">
                            January 3, 2009
                          </span>
                          , when Satoshi mined the first block of the Bitcoin{" "}
                          <Link
                            href="/glossary/blockchain"
                            className="text-primary hover:underline font-semibold"
                          >
                            blockchain
                          </Link>{" "}
                          - known as the{" "}
                          <span className="font-semibold text-foreground">
                            Genesis Block
                          </span>{" "}
                          or Block 0. This historic moment marked the birth of
                          the world&apos;s first decentralized digital currency.
                        </p>
                        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                          <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                            <Calendar className="h-5 w-5 text-primary" />
                            Key Timeline
                          </h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="min-w-[140px] font-semibold text-foreground">
                                October 31, 2008
                              </div>
                              <div className="text-muted-foreground">
                                Bitcoin whitepaper published by Satoshi Nakamoto
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="min-w-[140px] font-semibold text-foreground">
                                January 3, 2009
                              </div>
                              <div className="text-muted-foreground">
                                Genesis Block mined, Bitcoin network launches
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="min-w-[140px] font-semibold text-foreground">
                                January 12, 2009
                              </div>
                              <div className="text-muted-foreground">
                                First Bitcoin transaction (Satoshi to Hal
                                Finney)
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="min-w-[140px] font-semibold text-foreground">
                                May 22, 2010
                              </div>
                              <div className="text-muted-foreground">
                                Bitcoin Pizza Day (10,000 BTC exchanged for two
                                pizzas)
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="min-w-[140px] font-semibold text-foreground">
                                2013
                              </div>
                              <div className="text-muted-foreground">
                                Mt. Gox dominance & first major adoption wave
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="min-w-[140px] font-semibold text-foreground">
                                August 1, 2017
                              </div>
                              <div className="text-muted-foreground">
                                Bitcoin Cash hard fork occurred
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="min-w-[140px] font-semibold text-foreground">
                                2021
                              </div>
                              <div className="text-muted-foreground">
                                El Salvador adoption & Taproot upgrade activated
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="min-w-[140px] font-semibold text-foreground">
                                Present
                              </div>
                              <div className="text-muted-foreground">
                                Global reserve asset & institutional adoption
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative order-first lg:order-last">
                  <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                    <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
                    <Image
                      src="/images/history/genesis.png"
                      alt="Bitcoin Genesis Block 2009"
                      fill
                      className="object-contain relative z-10 drop-shadow-2xl rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who created Bitcoin? */}
          <section className="py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                  Who Created <span className="text-primary">Bitcoin</span>?
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                    <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
                    <Image
                      src="/images/history/satoshi.png"
                      alt="Mystery of Satoshi Nakamoto"
                      fill
                      className="object-contain relative z-10 drop-shadow-2xl rounded-2xl"
                    />
                  </div>
                </div>
                <div className="space-y-8">
                  <Card className="bg-card border-none shadow-xl hover:shadow-2xl">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <User className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">
                            Satoshi Nakamoto
                          </h3>
                        </div>
                        <p className="text-lg text-muted-foreground">
                          Bitcoin was created by an individual or group using
                          the pseudonym{" "}
                          <span className="font-semibold text-foreground">
                            Satoshi Nakamoto
                          </span>
                          . Despite extensive investigations by journalists,
                          researchers, and cryptographers, Satoshi&apos;s true
                          identity remains one of technology&apos;s greatest
                          mysteries.
                        </p>
                        <p className="text-lg text-muted-foreground">
                          What we know about Satoshi comes from their writings
                          and code contributions between 2008 and 2011. They
                          were clearly a brilliant cryptographer and programmer
                          with deep knowledge of economics, computer science,
                          and distributed systems. Their communications
                          suggested fluency in British English, though this
                          could have been intentional misdirection.
                        </p>
                        <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                          <h3 className="text-xl font-bold mb-4 text-foreground">
                            Satoshi&apos;s Contributions
                          </h3>
                          <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              <span>
                                <strong className="text-foreground">
                                  Published the Bitcoin whitepaper
                                </strong>{" "}
                                outlining the technical and economic framework
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              <span>
                                <strong className="text-foreground">
                                  Wrote the initial Bitcoin software
                                </strong>{" "}
                                implementing the protocol
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              <span>
                                <strong className="text-foreground">
                                  Mined the first blocks
                                </strong>{" "}
                                and conducted the first transaction
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              <span>
                                <strong className="text-foreground">
                                  Collaborated with early developers
                                </strong>{" "}
                                to improve the protocol
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              <span>
                                <strong className="text-foreground">
                                  Gradually handed over control
                                </strong>{" "}
                                to the community before disappearing in 2011
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">
                              The Mystery Persists:
                            </strong>{" "}
                            Satoshi is believed to possess approximately 1
                            million bitcoin, yet these coins have never been
                            moved. Their decision to remain anonymous and step
                            away from the project was intentional - ensuring
                            Bitcoin would be truly decentralized, owned by no
                            one and everyone simultaneously.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Bitcoin whitepaper simplified */}
          <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                  <span className="text-primary">Bitcoin</span> Whitepaper
                  Simplified
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Understanding the revolutionary document that launched a
                  financial revolution
                </p>
              </div>

              <div className="space-y-8">
                <Card className="bg-card border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Scroll className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">
                          The Manifesto
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground">
                        The Bitcoin whitepaper is a concise 9-page document that
                        introduced a groundbreaking solution to a long-standing
                        problem in computer science: how to create digital money
                        that can&apos;t be copied or spent twice without relying
                        on a trusted third party like a bank.
                      </p>
                      <p className="text-lg text-muted-foreground">
                        At its core, the whitepaper proposed a{" "}
                        <span className="font-semibold text-foreground">
                          peer-to-peer electronic cash system
                        </span>{" "}
                        where transactions are verified by network nodes through
                        cryptography and recorded in a public distributed ledger
                        called a blockchain. This eliminated the need for
                        financial intermediaries while solving the
                        &quot;double-spending problem.&quot;
                      </p>
                      <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                          <Lightbulb className="h-5 w-5 text-primary" />
                          Key Problems Solved
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              The Double-Spending Problem
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Digital files can be easily copied. Before
                              Bitcoin, preventing someone from spending the same
                              digital money twice required a trusted authority
                              to maintain records. Bitcoin&apos;s blockchain
                              solves this through a distributed consensus
                              mechanism.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              Trust Without Intermediaries
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Traditional online payments require trusting
                              financial institutions to process and verify
                              transactions. Bitcoin&apos;s cryptographic proof
                              system replaces trust with mathematics, allowing
                              any two parties to transact directly.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              Censorship Resistance
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              No single entity can block transactions or seize
                              funds. The network&apos;s decentralized nature
                              means no government or corporation has control
                              over Bitcoin.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center pt-4">
                        <Button
                          variant="outline"
                          asChild
                          className="border-primary/20 hover:bg-primary/10 hover:text-primary"
                        >
                          <a
                            href="/documents/bitcoin.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FileText className="mr-2 h-5 w-5" />
                            Read the Original Whitepaper
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* The Origins of Bitcoin and The Genesis Block */}
          <section className="py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                  The Origins of <span className="text-primary">Bitcoin</span> &
                  Genesis Block
                </h2>
              </div>

              <div className="space-y-8">
                <Card className="bg-card border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Blocks className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">
                          Pre-History & Inception
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground">
                        Bitcoin didn&apos;t emerge in a vacuum - it was the
                        culmination of decades of research in cryptography,
                        distributed systems, and digital currency. Satoshi built
                        upon the work of pioneers like David Chaum (digital
                        cash), Adam Back (Hashcash), and Wei Dai (b-money),
                        synthesizing their ideas into a working system.
                      </p>
                      <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                        <h3 className="text-xl font-bold mb-4 text-foreground">
                          Philosophical Foundations
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Bitcoin emerged from the{" "}
                          <span className="font-semibold text-foreground">
                            cypherpunk movement
                          </span>{" "}
                          - a community of activists advocating for privacy and
                          individual freedom through cryptography. The 2008
                          financial crisis provided the perfect backdrop,
                          exposing the fragility of centralized banking systems
                          and the need for an alternative.
                        </p>
                      </div>
                      <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                          <Blocks className="h-5 w-5 text-primary" />
                          The Genesis Block
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          On January 3, 2009, Satoshi mined the first block of
                          the Bitcoin blockchain. Embedded in this Genesis Block
                          was a message that would become legendary:
                        </p>
                        <div className="bg-background/80 p-4 rounded border border-border">
                          <p className="font-mono text-sm text-foreground italic">
                            &quot;The Times 03/Jan/2009 Chancellor on brink of
                            second bailout for banks&quot;
                          </p>
                        </div>
                        <p className="text-muted-foreground mt-4">
                          This message referenced a headline from The Times
                          newspaper about the UK government bailout of banks
                          during the financial crisis. It served as both a
                          timestamp proving when Bitcoin began and a
                          philosophical statement about why it was created - as
                          an alternative to the traditional financial system
                          prone to bailouts and inflation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Core Concepts in the Bitcoin Whitepaper */}
          <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                  Core <span className="text-primary">Concepts</span>
                </h2>
              </div>

              <div className="space-y-8">
                {/* Blockchain */}
                <Card className="bg-card border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Network className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-foreground">
                          The Blockchain
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          The{" "}
                          <Link
                            href="/glossary/blockchain"
                            className="text-primary hover:underline"
                          >
                            blockchain
                          </Link>{" "}
                          is a chain of blocks, each containing a batch of
                          transactions. Every block references the previous one
                          through a cryptographic hash, creating an immutable
                          historical record. Changing any past transaction would
                          require recalculating all subsequent blocks -
                          computationally infeasible.
                        </p>
                        <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                          <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">
                              Key Innovation:
                            </strong>{" "}
                            The blockchain serves as a distributed timestamp
                            server, proving the order of transactions without
                            requiring a central authority.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Proof-of-Work */}
                <Card className="bg-card border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Shield className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-foreground">
                          Proof-of-Work Consensus
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          <Link
                            href="/glossary/mining"
                            className="text-primary hover:underline"
                          >
                            Mining
                          </Link>{" "}
                          uses computational work to achieve consensus. Miners
                          compete to solve complex mathematical puzzles, and the
                          winner gets to add the next block. This process makes
                          attacks expensive - an attacker would need to control
                          more computing power than the entire honest network
                          combined.
                        </p>
                        <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                          <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">
                              Security Principle:
                            </strong>{" "}
                            The longest chain represents the majority decision.
                            As more blocks are added, transactions become
                            exponentially harder to reverse.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Digital Signatures */}
                <Card className="bg-card border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Lock className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-foreground">
                          Digital Signatures & Privacy
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Bitcoin uses public-key{" "}
                          <Link
                            href="/glossary/cryptography"
                            className="text-primary hover:underline"
                          >
                            cryptography
                          </Link>{" "}
                          where each user has a public key (their Bitcoin
                          address) and a private key (kept secret). Transactions
                          are signed with the private key, proving ownership
                          without revealing it. While all transactions are
                          public, users can maintain privacy by using new
                          addresses for each transaction.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Incentive System */}
                <Card className="bg-card border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Coins className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-foreground">
                          The Incentive System
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Miners are rewarded with newly created bitcoin (the
                          block reward) plus transaction fees. This incentivizes
                          them to follow the rules and support the network. The
                          block reward halves approximately every four years,
                          eventually resulting in a fixed supply of 21 million
                          bitcoin. This predictable monetary policy contrasts
                          sharply with traditional currencies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* The Influence of the Bitcoin Whitepaper */}
          <section className="py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                  The Influence of <span className="text-primary">Bitcoin</span>
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <Card className="bg-card border-none shadow-xl hover:shadow-2xl">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <Globe className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">
                            Global Impact
                          </h3>
                        </div>
                        <p className="text-lg text-muted-foreground">
                          The Bitcoin whitepaper&apos;s impact extends far
                          beyond cryptocurrency. It inspired an entire industry
                          and demonstrated that decentralized systems could
                          solve real-world problems without traditional
                          institutional frameworks.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                            <h3 className="text-xl font-bold mb-3 text-foreground">
                              Financial Innovation
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Bitcoin challenged traditional banking by
                              demonstrating that money could exist and function
                              without central banks. It inspired thousands of
                              alternative cryptocurrencies and blockchain
                              projects, each exploring different aspects of
                              decentralization.
                            </p>
                          </div>
                          <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                            <h3 className="text-xl font-bold mb-3 text-foreground">
                              Academic Research
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              The whitepaper sparked extensive academic research
                              in distributed systems, cryptography, game theory,
                              and economics. Universities worldwide now offer
                              courses on blockchain technology and
                              cryptocurrencies.
                            </p>
                          </div>
                          <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                            <h3 className="text-xl font-bold mb-3 text-foreground">
                              Technological Impact
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Beyond finance, Bitcoin&apos;s blockchain concept
                              inspired applications in supply chain management,
                              digital identity, voting systems, and more. The
                              idea of trustless, decentralized record-keeping
                              has broad implications.
                            </p>
                          </div>
                          <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                            <h3 className="text-xl font-bold mb-3 text-foreground">
                              Global Adoption
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              From individuals seeking financial sovereignty to
                              institutions incorporating Bitcoin into their
                              strategies, the whitepaper&apos;s vision continues
                              to gain traction worldwide, particularly in
                              regions with unstable currencies.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative order-first lg:order-last">
                  <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                    <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
                    <Image
                      src="/images/history/network.png"
                      alt="Global Bitcoin Network"
                      fill
                      className="object-contain relative z-10 drop-shadow-2xl rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Exploring the Bitcoin Network and Its Incentives */}
          <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                  Network & <span className="text-primary">Incentives</span>
                </h2>
              </div>

              <div className="space-y-8">
                <Card className="bg-card border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Zap className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">
                          Economic Design
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground">
                        Bitcoin&apos;s genius lies not just in its technical
                        innovation, but in its economic design. The network
                        creates a self-sustaining ecosystem where participants
                        are incentivized to act honestly and maintain the
                        system.
                      </p>
                      <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                        <h3 className="text-xl font-bold mb-4 text-foreground">
                          Game Theory in Action
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Bitcoin&apos;s design assumes that participants act in
                          their self-interest. Miners invest significant
                          resources in hardware and electricity. Their best
                          strategy is to follow the protocol rules because:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Honest mining earns consistent rewards</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>
                              Attacking the network requires massive investment
                              with uncertain returns
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>
                              Successfully attacking would destroy the value of
                              their rewards
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                          <h3 className="text-xl font-bold mb-3 text-foreground">
                            Network Effects
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            As more miners join, the network becomes more
                            secure. As more users adopt Bitcoin, it becomes more
                            valuable. As it becomes more valuable, more
                            developers contribute to its improvement. This
                            creates a virtuous cycle of growth and security.
                          </p>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                          <h3 className="text-xl font-bold mb-3 text-foreground">
                            Difficulty Adjustment
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Bitcoin automatically adjusts{" "}
                            <Link
                              href="/glossary/mining"
                              className="text-primary hover:underline"
                            >
                              mining
                            </Link>{" "}
                            difficulty every 2,016 blocks (approximately two
                            weeks) to maintain a consistent 10-minute block
                            time. This self-regulating mechanism ensures stable
                            issuance regardless of total computing power.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Major Market Cycles */}
          <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                  Major Market <span className="text-primary">Cycles</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Bitcoin has experienced four distinct 4-year cycles, often correlated with the halving events.
                </p>
              </div>

               <div className="grid lg:grid-cols-2 gap-12">
                 <Card className="bg-card border-none shadow-xl hover:shadow-2xl transition-all">
                    <CardContent className="p-8">
                       <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 mt-1">
                             <TrendingUp className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                             <h3 className="text-xl font-bold mb-2 text-foreground">2011: The First Bubble</h3>
                             <p className="text-muted-foreground">
                               Bitcoin reached parity with the US Dollar for the first time ($1), eventually surging to $31 before crashing down to $2. This cycle proved Bitcoin could survive a bubble burst.
                             </p>
                          </div>
                       </div>
                    </CardContent>
                 </Card>
                 <Card className="bg-card border-none shadow-xl hover:shadow-2xl transition-all">
                    <CardContent className="p-8">
                       <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 mt-1">
                             <TrendingUp className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                             <h3 className="text-xl font-bold mb-2 text-foreground">2013: Dual Peaks</h3>
                             <p className="text-muted-foreground">
                               Marked by the first major exchange (Mt. Gox) and adoption. Price hit $260 in April and $1,100 in December. This cycle put Bitcoin on the map for early tech adopters.
                             </p>
                          </div>
                       </div>
                    </CardContent>
                 </Card>
                 <Card className="bg-card border-none shadow-xl hover:shadow-2xl transition-all">
                    <CardContent className="p-8">
                       <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 mt-1">
                             <TrendingUp className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                             <h3 className="text-xl font-bold mb-2 text-foreground">2017: Retail Mania</h3>
                             <p className="text-muted-foreground">
                               Driven by retail awareness and the ICO boom. Bitcoin reached nearly $20,000. SegWit was activated, and the block size war concluded.
                             </p>
                          </div>
                       </div>
                    </CardContent>
                 </Card>
                 <Card className="bg-card border-none shadow-xl hover:shadow-2xl transition-all">
                    <CardContent className="p-8">
                       <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 mt-1">
                             <TrendingUp className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                             <h3 className="text-xl font-bold mb-2 text-foreground">2021: Institutional Era</h3>
                             <p className="text-muted-foreground">
                               Public companies (Tesla, MicroStrategy) and nation-states (El Salvador) adopted Bitcoin. Price reached $69,000 driven by macro inflation concerns.
                             </p>
                          </div>
                       </div>
                    </CardContent>
                 </Card>
               </div>
            </div>
          </section>

          {/* Technological Innovations */}
          <section className="py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
             <BackgroundBeams intensity="subtle" />
             <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
               <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                   Technological <span className="text-primary">Innovations</span>
                 </h2>
                 <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Key upgrades that have evolved the protocol while maintaining backward compatibility.
                 </p>
               </div>

               <div className="space-y-6">
                 <Card className="bg-card border-none shadow-xl">
                   <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                      <div className="p-4 rounded-full bg-primary/10 shrink-0">
                         <Cpu className="h-8 w-8 text-primary" />
                      </div>
                      <div className="space-y-2 text-center md:text-left">
                         <h3 className="text-xl font-bold text-foreground">Segregated Witness (SegWit) - 2017</h3>
                         <p className="text-muted-foreground">
                            Fixed transaction malleability and increased block capacity, paving the way for Layer 2 solutions like the Lightning Network.
                         </p>
                      </div>
                   </CardContent>
                 </Card>
                 <Card className="bg-card border-none shadow-xl">
                   <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                      <div className="p-4 rounded-full bg-primary/10 shrink-0">
                         <Zap className="h-8 w-8 text-primary" />
                      </div>
                      <div className="space-y-2 text-center md:text-left">
                         <h3 className="text-xl font-bold text-foreground">The Lightning Network - 2018</h3>
                         <p className="text-muted-foreground">
                            A Layer 2 scaling solution enabling instant, near-zero fee payments, making Bitcoin viable for daily microtransactions.
                         </p>
                      </div>
                   </CardContent>
                 </Card>
                 <Card className="bg-card border-none shadow-xl">
                   <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                      <div className="p-4 rounded-full bg-primary/10 shrink-0">
                         <Lock className="h-8 w-8 text-primary" />
                      </div>
                      <div className="space-y-2 text-center md:text-left">
                         <h3 className="text-xl font-bold text-foreground">Taproot Upgrade - 2021</h3>
                         <p className="text-muted-foreground">
                            Improved privacy and efficiency for complex transactions (smart contracts) using Schnorr signatures, enhancing Bitcoin's programmability.
                         </p>
                      </div>
                   </CardContent>
                 </Card>
               </div>
             </div>
          </section>

          {/* The Lasting Legacy of the Bitcoin Whitepaper */}
          <section className="py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                  The Lasting <span className="text-primary">Legacy</span>
                </h2>
              </div>

              <div className="space-y-8">
                <Card className="bg-card border-none shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <TrendingUp className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">
                          Impact on Society
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground">
                        More than fifteen years after its publication, the
                        Bitcoin whitepaper remains one of the most influential
                        technical documents of the 21st century. Its legacy
                        extends far beyond the creation of a digital currency.
                      </p>
                      <div className="space-y-6">
                        <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                          <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                            <Globe className="h-5 w-5 text-primary" />A New
                            Paradigm
                          </h3>
                          <p className="text-muted-foreground">
                            Bitcoin proved that decentralized consensus was
                            possible at scale. It showed that trust could be
                            replaced with cryptographic proof, and that global
                            coordination could emerge without central planning.
                            This paradigm shift influences how we think about
                            governance, ownership, and value transfer.
                          </p>
                        </div>
                        <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                          <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                            <Shield className="h-5 w-5 text-primary" />
                            Financial Sovereignty
                          </h3>
                          <p className="text-muted-foreground">
                            For the first time in history, individuals could
                            truly own and control their money without permission
                            from any institution. Bitcoin provides financial
                            access to the unbanked, protection against
                            inflation, and censorship-resistant transactions. In
                            countries with unstable currencies or authoritarian
                            regimes, Bitcoin offers hope for economic freedom.
                          </p>
                        </div>
                        <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                          <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                            <Network className="h-5 w-5 text-primary" />
                            Open Source Innovation
                          </h3>
                          <p className="text-muted-foreground">
                            Bitcoin&apos;s open-source nature allowed thousands
                            of developers to study, improve, and build upon its
                            foundation. This collaborative approach to monetary
                            technology contrasts sharply with the closed systems
                            of traditional finance. The whitepaper inspired
                            innovations like the Lightning Network for faster
                            transactions, Schnorr signatures for better privacy,
                            and Taproot for enhanced smart contract
                            capabilities.
                          </p>
                        </div>
                        <div className="bg-secondary/30 p-6 rounded-lg border border-border">
                          <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Educational Impact
                          </h3>
                          <p className="text-muted-foreground">
                            The whitepaper serves as an educational resource,
                            introducing countless people to concepts like
                            cryptographic hashing, digital signatures, and
                            distributed consensus. Its clarity and conciseness
                            make complex ideas accessible, inspiring new
                            generations to explore computer science,
                            cryptography, and economics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* The Future of Bitcoin */}
          <section className="py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
             <BackgroundBeams intensity="subtle" />
             <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
               <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
                   The Future of <span className="text-primary">Bitcoin</span>
                 </h2>
               </div>

               <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div className="relative order-last lg:order-first">
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                       <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
                       <Image
                          src="/images/history/future.png"
                          alt="The Future of Bitcoin"
                          fill
                          className="object-contain relative z-10 drop-shadow-2xl rounded-2xl"
                       />
                    </div>
                 </div>
                 <div className="space-y-6">
                    <Card className="bg-card border-none shadow-xl">
                       <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                             <div className="p-2 rounded-lg bg-primary/10">
                                <Landmark className="h-6 w-6 text-primary" />
                             </div>
                             <h3 className="text-xl font-bold text-foreground">Global Reserve Asset</h3>
                          </div>
                          <p className="text-muted-foreground">
                             Bitcoin is increasingly viewed as "digital gold." As central banks navigate inflation, Bitcoin's absolute scarcity (21 million) positions it as a neutral reserve asset for the digital age.
                          </p>
                       </CardContent>
                    </Card>
                    <Card className="bg-card border-none shadow-xl">
                       <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                             <div className="p-2 rounded-lg bg-primary/10">
                                <Zap className="h-6 w-6 text-primary" />
                             </div>
                             <h3 className="text-xl font-bold text-foreground">Scaling & Payments</h3>
                          </div>
                          <p className="text-muted-foreground">
                             Layers like Lightning and Fedimint will likely handle billions of daily transactions, allowing Bitcoin to function as a global medium of exchange without sacrificing the security of the main chain.
                          </p>
                       </CardContent>
                    </Card>
                    <Card className="bg-card border-none shadow-xl">
                       <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                             <div className="p-2 rounded-lg bg-primary/10">
                                <Rocket className="h-6 w-6 text-primary" />
                             </div>
                             <h3 className="text-xl font-bold text-foreground">Programmable Money</h3>
                          </div>
                          <p className="text-muted-foreground">
                             With innovations like BitVM and sidechains, Bitcoin will support more complex smart contracts and decentralized finance (DeFi) applications while staying true to its conservative base layer.
                          </p>
                       </CardContent>
                    </Card>
                 </div>
               </div>
             </div>
          </section>

          {/* Call to Action */}
          <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
            <BackgroundBeams intensity="subtle" />
            <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
              <Card className="bg-card border-none shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center space-y-6">
                    <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
                      Continue Your Bitcoin Journey
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Explore more educational content and powerful tools to
                      understand and interact with Bitcoin
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Button
                        size="lg"
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Link href="/learn">
                          <BookOpen className="mr-2 h-5 w-5" />
                          Learning Hub
                        </Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        asChild
                        className="border-primary/20 hover:bg-primary/10 hover:text-primary"
                      >
                        <Link href="/analyzer">
                          <Shield className="mr-2 h-5 w-5" />
                          Wallet Analyzer
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer
          onPrivacyClick={openPrivacyModal}
          onTermsClick={openTermsModal}
        />
        <PrivacyPolicyModal
          isOpen={activeModal === "privacy"}
          onOpenChange={closeModal}
        />
        <TermsOfServiceModal
          isOpen={activeModal === "terms"}
          onOpenChange={closeModal}
          onPrivacyClick={openPrivacyModal}
        />
      </div>
    </>
  );
}
