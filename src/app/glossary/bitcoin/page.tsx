
// src/app/glossary/bitcoin/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Network, Coins, GitBranch } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';

export default function BitcoinGlossaryPage() {
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
            <Link href="/glossary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Glossary
            </Link>
          </Button>
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">
              What Is Bitcoin?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              Bitcoin is a groundbreaking decentralized digital currency that enables peer-to-peer transactions across the internet without the need for a central authority like a bank or government. It is both a currency and a technology protocol.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4 grid md:grid-cols-2 gap-4">
                <div>
                    <h3 className="text-xl font-bold flex items-center mb-2">
                        <Network className="mr-2 h-6 w-6 text-primary" />
                        Bitcoin (Capital 'B')
                    </h3>
                    <p className="text-muted-foreground font-normal">Refers to the entire network, the technology, and the concept. It's the protocol that runs the global, decentralized ledger known as the blockchain.</p>
                </div>
                 <div>
                    <h3 className="text-xl font-bold flex items-center mb-2">
                        <Coins className="mr-2 h-6 w-6 text-primary" />
                        bitcoin (Lowercase 'b')
                    </h3>
                    <p className="text-muted-foreground font-normal">Refers to the unit of currency itself (with the ticker BTC) that is sent and received across the Bitcoin network.</p>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">
              How Does It Work?
            </h2>
             <div className="mt-8 grid gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <GitBranch className="mr-2 h-6 w-6 text-primary" />
                        Decentralized & Peer-to-Peer
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                        Unlike traditional currencies, there is no central entity controlling Bitcoin. Instead, it is maintained by a distributed network of computers (nodes) around the world. Transactions are sent directly between users.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Coins className="mr-2 h-6 w-6 text-primary" />
                        Limited Supply
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                        The Bitcoin protocol dictates that there will only ever be 21 million bitcoins created. This fixed supply makes it a deflationary asset, meaning its purchasing power can potentially increase over time if demand grows.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Every transaction is recorded on a public ledger called the blockchain, which is secured through a process known as mining. This creates a system that is transparent, censorship-resistant, and immutable.
            </p>
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
