
// src/app/glossary/block/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Box, Link as LinkIcon, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import Link from 'next/link';

export default function BlockGlossaryPage() {
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
              What Is a Block?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              Think of a block as a page in a digital ledger. It's a permanent record that contains a batch of recent, confirmed Bitcoin transactions. New blocks are added to the end of the <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link> in chronological order.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Box className="mr-2 h-6 w-6 text-primary" />
                    What's Inside a Block?
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Each block securely bundles together thousands of transactions. It also includes a reference to the previous block, creating a secure, unbroken chain.
                </p>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Clock className="mr-2 h-6 w-6 text-primary" />
                        Block Time
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                        A new block is discovered and added to the blockchain approximately every 10 minutes. This consistent timing is a core feature of the Bitcoin protocol, ensuring a predictable rate of new bitcoin creation.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <LinkIcon className="mr-2 h-6 w-6 text-primary" />
                        Connecting the Chain
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                        This process of adding new blocks is known as <Link href="/glossary/mining" className="text-primary hover:underline">mining</Link>. Miners compete to solve a complex puzzle, and the winner gets to create the next block, earning a reward in the process.
                    </p>
                </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">
              Why Blocks Matter
            </h2>
            <p className="text-muted-foreground font-normal">
             Blocks are the fundamental building blocks of Bitcoin's security model. By batching transactions into blocks and linking them together with cryptography, the blockchain becomes incredibly difficult to alter, making Bitcoin transactions secure and irreversible.
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
