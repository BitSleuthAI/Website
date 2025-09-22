// src/app/company-information/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function CompanyInformationPage() {
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
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-4xl font-bold mb-4 text-gradient-title">Company Information</h1>
            
            <div className="space-y-6">
              <div className="bg-muted/20 rounded-lg p-6 border border-border/50">
                <h2 className="text-2xl font-bold text-gradient-title mb-4">Legal Entity</h2>
                <p className="text-lg font-semibold text-foreground mb-2">
                  BitSleuth Ltd trading as BitSleuth
                </p>
                <p className="font-normal">
                  Registered in England and Wales
                </p>
              </div>

              <div className="bg-muted/20 rounded-lg p-6 border border-border/50">
                <h2 className="text-2xl font-bold text-gradient-title mb-4">Company Details</h2>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-foreground">Company Number:</span>
                    <span className="ml-2 font-mono">16733578</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Registered Office:</span>
                    <div className="mt-1 font-normal">
                      65 Harland Avenue<br />
                      Sidcup, England<br />
                      DA15 7NY
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/20 rounded-lg p-6 border border-border/50">
                <h2 className="text-2xl font-bold text-gradient-title mb-4">Contact Information</h2>
                <p className="font-normal">
                  For general inquiries, please contact us at{' '}
                  <a
                    href="mailto:hello@bitsleuth.ai"
                    className="text-primary hover:underline"
                  >
                    hello@bitsleuth.ai
                  </a>
                </p>
                <p className="font-normal mt-2">
                  For support and technical assistance, please contact us at{' '}
                  <a
                    href="mailto:support@bitsleuth.ai"
                    className="text-primary hover:underline"
                  >
                    support@bitsleuth.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
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
