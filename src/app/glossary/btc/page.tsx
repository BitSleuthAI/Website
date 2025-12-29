
// src/app/glossary/btc/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Tag } from 'lucide-react';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { Card, CardContent } from '@/components/ui/card';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function BtcGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'bitcoin', title: 'Bitcoin', description: 'Bitcoin concept' },
    { slug: 'bit', title: 'Bit', description: 'Bitcoin sub-unit' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="btc" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is <span className="text-primary">BTC</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              BTC is the ticker symbol and most common abbreviation for bitcoin, the unit of currency used on the Bitcoin network. It is used on exchanges and in financial contexts to represent the price and amount of bitcoin.
            </p>
            <Card className="my-6 bg-card border-none shadow-xl hover:shadow-2xl">
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
