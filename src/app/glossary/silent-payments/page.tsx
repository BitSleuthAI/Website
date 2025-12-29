// src/app/glossary/silent-payments/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function SilentPaymentsGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'address', title: 'Address', description: 'Bitcoin receiving address' },
    { slug: 'transaction-privacy', title: 'Transaction Privacy', description: 'Privacy techniques' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="silent-payments" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Are Silent <span className="text-primary">Payments</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              Silent Payments (BIP 352) is a protocol that allows users to publish a single, static <Link href="/glossary/address" className="text-primary hover:underline">address</Link> that can receive unlimited payments, with each payment going to a unique on-chain address. This dramatically improves <Link href="/glossary/transaction-privacy" className="text-primary hover:underline">privacy</Link> without requiring interactive communication.
            </p>

            <Card className="my-6 bg-card border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Eye className="mr-2 h-6 w-6 text-primary" />
                    Reusable Without Compromise
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Unlike traditional addresses which should never be reused, a silent payment address can be shared publicly (in a profile, on a website) without linking transactions together on the <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link>. Each sender generates a unique destination address using the recipient's static identifier.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Key Benefits
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-6 w-6 text-primary" />
                        Enhanced Privacy
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Silent payments eliminate address reuse privacy issues while requiring no sender-recipient interaction. Observers cannot link payments to the same recipient unless they control the recipient's keys.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Sparkles className="mr-2 h-6 w-6 text-primary" />
                        User-Friendly
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Recipients can share one identifier for all payments, simplifying donation buttons, public profiles, and recurring payments while maintaining strong privacy guarantees. No need to generate new addresses for each payment.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Silent payments work with <Link href="/glossary/taproot" className="text-primary hover:underline">Taproot</Link> and are designed to be <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link>-compatible with minimal changes. While still gaining adoption, they represent a significant advancement in making Bitcoin privacy more accessible and practical for everyday users.
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
