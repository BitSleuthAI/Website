// src/app/glossary/sidechain/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { GitBranch, Lock, Zap } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function SidechainGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'lightning-network', title: 'Lightning Network', description: 'Layer 2 scaling' },
    { slug: 'bitcoin', title: 'Bitcoin', description: 'Bitcoin concept' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="sidechain" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is a <span className="text-primary">Sidechain</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              A sidechain is a separate blockchain that runs in parallel to Bitcoin's main chain (mainchain), connected through a two-way peg that allows bitcoin to be transferred between chains. Sidechains enable new features and experimentation without affecting Bitcoin's core protocol.
            </p>

            <Card className="my-6 bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Lock className="mr-2 h-6 w-6 text-primary" />
                    Two-Way Peg
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Bitcoin can be moved to a sidechain by locking it on the mainchain and creating equivalent tokens on the sidechain. When moving back, the sidechain tokens are destroyed and the mainchain bitcoin is unlocked, maintaining a 1:1 correspondence.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Benefits & Use Cases
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Zap className="mr-2 h-6 w-6 text-primary" />
                        Innovation Without Risk
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Sidechains can experiment with new features like faster confirmations, enhanced privacy, or smart contracts without risking the security or stability of Bitcoin's main network.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <GitBranch className="mr-2 h-6 w-6 text-primary" />
                        Scalability Solutions
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      By processing transactions off the main chain, sidechains can help scale Bitcoin without increasing the burden on the primary <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link>. The <Link href="/glossary/lightning-network" className="text-primary hover:underline">Lightning Network</Link> is a similar Layer 2 solution.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             While sidechains offer exciting possibilities, they typically require their own security mechanisms separate from Bitcoin's proof-of-work. Understanding the trade-offs between sidechains and the main chain is important for evaluating their suitability for different use cases.
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
