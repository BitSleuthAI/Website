
// src/app/glossary/bitcoin/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Network, Coins, GitBranch } from 'lucide-react';
import Link from 'next/link';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function BitcoinGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  const relatedTerms = [
    { slug: 'blockchain', title: 'Blockchain', description: 'Distributed ledger technology' },
    { slug: 'btc', title: 'BTC', description: 'Bitcoin ticker symbol' },
    { slug: 'mining', title: 'Mining', description: 'Proof-of-work consensus' },
    { slug: 'p2p', title: 'P2P', description: 'Peer-to-peer network' },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="bitcoin" relatedTerms={relatedTerms}>
        <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is <span className="text-primary">Bitcoin</span>?
            </h1>
        <p itemProp="description" className="text-lg text-muted-foreground font-normal">
          Bitcoin is a groundbreaking decentralized digital currency that enables peer-to-peer transactions across the internet without the need for a central authority like a bank or government. It is both a currency and a technology protocol.
        </p>

        <Card className="my-6 bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
          <CardContent className="p-4 grid md:grid-cols-2 gap-4">
            <div>
                <h3 className="text-xl font-bold flex items-center mb-2">
                    <Network className="mr-2 h-6 w-6 text-primary" />
                    Bitcoin (Capital 'B')
                </h3>
                <p className="text-muted-foreground font-normal">Refers to the entire network, the technology, and the concept. It's the protocol that runs the global, decentralized ledger known as the <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link>.</p>
            </div>
             <div>
                <h3 className="text-xl font-bold flex items-center mb-2">
                    <Coins className="mr-2 h-6 w-6 text-primary" />
                    bitcoin (Lowercase 'b')
                </h3>
                <p className="text-muted-foreground font-normal">Refers to the unit of currency itself (with the ticker <Link href="/glossary/btc" className="text-primary hover:underline">BTC</Link>) that is sent and received across the Bitcoin network.</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
          How Does It Work?
        </h2>
         <div className="mt-8 grid gap-8">
            <div>
                <h3 className="text-xl font-bold flex items-center">
                    <GitBranch className="mr-2 h-6 w-6 text-primary" />
                    Decentralized & Peer-to-Peer
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Unlike traditional currencies, there is no central entity controlling Bitcoin. Instead, it is maintained by a distributed network of computers (nodes) around the world. Transactions are sent directly between users via <Link href="/glossary/p2p" className="text-primary hover:underline">peer-to-peer</Link> technology.
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
         Every transaction is recorded on a public ledger called the <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link>, which is secured through a process known as <Link href="/glossary/mining" className="text-primary hover:underline">mining</Link>. This creates a system that is transparent, censorship-resistant, and immutable.
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
