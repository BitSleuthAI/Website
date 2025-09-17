
// src/app/glossary/mining/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Cpu, Coins, GitBranch, Users, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';
import Link from 'next/link';

export default function MiningGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20 lg:py-24 relative overflow-hidden">
        <BackgroundBeams intensity="subtle" />
        <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
           <Button variant="ghost" asChild className="mb-8">
            <Link href="/glossary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Glossary
            </Link>
          </Button>
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4 text-gradient-title">
              What Is Mining?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
             Mining is the engine that powers the Bitcoin network. It's a competitive process where individuals and companies use powerful computers to solve complex mathematical puzzles. This essential work both secures the network and creates new bitcoins.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Cpu className="mr-2 h-6 w-6 text-primary" />
                    Proof-of-Work
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    This process is called "proof-of-work." By dedicating immense computational power (hash rate), miners prove they have expended real-world resources, making it prohibitively expensive to attack the network.
                </p>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <GitBranch className="mr-2 h-6 w-6 text-primary" />
                        Securing the Blockchain
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      The primary role of mining is to validate new transactions and add them to the <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link>. The winner of the computational race gets to create the next block, effectively finalizing a new batch of transactions for the entire world to see.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Coins className="mr-2 h-6 w-6 text-primary" />
                        Creating New Coins
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                     As a reward for their work, the successful miner receives newly created bitcoins (the "block reward") and any transaction fees from the block they created. This is how new bitcoins enter circulation.
                    </p>
                </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              A Global Competition
            </h2>
            <p className="text-muted-foreground font-normal">
             Mining is performed by a decentralized network of participants all over the world. This distribution of power is fundamental to Bitcoin's value proposition, ensuring no single entity can control the network or censor transactions.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Mining Approaches: Pooled vs. Solo
            </h2>
            <p className="text-muted-foreground font-normal">
              Because finding a block is incredibly difficult, miners can choose between two main strategies.
            </p>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Users className="mr-2 h-6 w-6 text-primary" />
                        Pooled Mining
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Most miners join a "pool" where they combine their hash rate with others. When the pool finds a block, the reward is shared proportionally among all participants based on their contribution. This provides smaller, but more frequent and predictable payouts.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <User className="mr-2 h-6 w-6 text-primary" />
                        Solo Mining
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                     A miner works alone. They receive the entire block reward if they find a block, but the chances of doing so are extremely low unless they have a massive amount of hash power. It's a high-risk, high-reward strategy.
                    </p>
                </div>
            </div>
          </article>
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
