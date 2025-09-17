
// src/app/glossary/p2p/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';
import Link from 'next/link';

export default function P2PGlossaryPage() {
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
              What Is P2P (Peer-to-Peer)?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              P2P stands for Peer-to-Peer, a type of network where participants interact directly with each other without needing a central intermediary or server. In the context of Bitcoin, it means users can transact directly with one another, anywhere in the world.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Users className="mr-2 h-6 w-6 text-primary" />
                    Direct Interaction
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    The Bitcoin network is a P2P system that allows for the direct transfer of value between individuals, cutting out traditional financial gatekeepers like banks.
                </p>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Users className="mr-2 h-6 w-6 text-primary" />
                        No Central Authority
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      In a P2P network, there is no single point of failure or control. The network is maintained by its participants, making it resilient and censorship-resistant.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Globe className="mr-2 h-6 w-6 text-primary" />
                        A Global Network
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                     The P2P nature of Bitcoin allows it to be a truly global and permissionless system. Anyone with an internet connection can participate, send, and receive transactions.
                    </p>
                </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              The Foundation of Decentralization
            </h2>
            <p className="text-muted-foreground font-normal">
             The peer-to-peer architecture is what makes Bitcoin a decentralized system. By distributing the ledger and transaction validation across a network of peers, Bitcoin achieves a high level of security and trust without relying on a central authority.
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
