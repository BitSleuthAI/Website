
// src/app/glossary/btc/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { Card, CardContent } from '@/components/ui/card';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function BtcGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  return (
    <div className="flex flex-col min-h-dvh bg-background edge-to-edge-container">
      <Header />
      <main className="flex-1 py-12 md:py-20 lg:py-24 relative overflow-hidden edge-to-edge-main">
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
              What Is BTC?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              BTC is the ticker symbol and most common abbreviation for bitcoin, the unit of currency used on the Bitcoin network. It is used on exchanges and in financial contexts to represent the price and amount of bitcoin.
            </p>
            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Tag className="mr-2 h-6 w-6 text-primary" />
                    Usage
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                   Just like USD stands for United States Dollar or JPY for Japanese Yen, BTC is the standardized way to refer to the cryptocurrency bitcoin.
                </p>
              </CardContent>
            </Card>
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
