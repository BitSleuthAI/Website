// src/app/glossary/coinjoin/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Shuffle, Eye, Users } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function CoinJoinGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'payjoin', title: 'Payjoin', description: 'Collaborative transaction' },
    { slug: 'transaction-privacy', title: 'Transaction Privacy', description: 'Privacy techniques' },
    { slug: 'utxo', title: 'Utxo', description: 'Unspent transaction output' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="coinjoin" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is <span className="text-primary">CoinJoin</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              CoinJoin is a privacy-enhancing technique where multiple Bitcoin users combine their transactions into a single collaborative transaction. This breaks the common input ownership heuristic, making it difficult for observers to determine which inputs fund which outputs, thereby improving <Link href="/glossary/transaction-privacy" className="text-primary hover:underline">transaction privacy</Link>.
            </p>

            <Card className="my-6 bg-card border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Shuffle className="mr-2 h-6 w-6 text-primary" />
                    How It Works
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Multiple users contribute <Link href="/glossary/utxo" className="text-primary hover:underline">UTXOs</Link> as inputs to a shared transaction. The transaction creates equal-sized outputs for each participant, making it unclear which input corresponds to which output. No party can steal funds because each user must <Link href="/glossary/signature" className="text-primary hover:underline">sign</Link> only their own inputs.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Key Aspects
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Eye className="mr-2 h-6 w-6 text-primary" />
                        Privacy Enhancement
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      CoinJoin significantly improves privacy by obfuscating transaction trails on the <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link>. Chain analysis becomes exponentially more difficult as the number of participants increases.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Users className="mr-2 h-6 w-6 text-primary" />
                        Coordination Methods
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      CoinJoin can be coordinated through centralized coordinators, decentralized protocols, or peer-to-peer arrangements. <Link href="/glossary/payjoin" className="text-primary hover:underline">PayJoin</Link> is a simpler variant that works between just two parties.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Popular implementations include Wasabi Wallet and Samourai Whirlpool (though the latter faced legal challenges). CoinJoin transactions are completely valid Bitcoin transactions and don't require any protocol changes. However, they're larger and require higher <Link href="/glossary/fee-rate" className="text-primary hover:underline">fees</Link> due to multiple participants.
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
