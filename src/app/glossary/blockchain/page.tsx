
// src/app/glossary/blockchain/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Globe, ShieldCheck, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import Link from 'next/link';

export default function BlockchainGlossaryPage() {
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
            <h1 className="text-4xl font-bold mb-4 text-gradient-title">
              What Is a Blockchain?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
             The blockchain is a public ledger of every Bitcoin transaction ever made. It's essentially a digital record book, shared and validated by a global network of computers, ensuring that it remains secure and transparent.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <BookOpen className="mr-2 h-6 w-6 text-primary" />
                    A Digital Ledger
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                   Think of it as a giant, shared spreadsheet. Each new entry is a transaction, and the entire history is available for anyone to see. This transparency is a core feature of Bitcoin.
                </p>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <LinkIcon className="mr-2 h-6 w-6 text-primary" />
                        A Chain of Blocks
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Transactions are grouped into <Link href="/glossary/block" className="text-primary hover:underline">blocks</Link>, and each block is cryptographically linked to the one before it. This forms an unbroken, chronological chain, hence the name "blockchain."
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Globe className="mr-2 h-6 w-6 text-primary" />
                        Decentralized and Distributed
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                        No single person or company owns the blockchain. Instead, a copy is held by thousands of participants (nodes) worldwide. This decentralization makes it incredibly resilient and censorship-resistant.
                    </p>
                </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Immutable and Secure
            </h2>
            <p className="text-muted-foreground font-normal">
             Because each block is linked to the previous one, changing a past transaction is practically impossible. Any alteration would require immense computational power to redo all subsequent blocks, a feat that is considered unfeasible. This makes the blockchain an immutable and highly secure record of ownership.
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
