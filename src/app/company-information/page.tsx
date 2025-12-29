// src/app/company-information/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2, FileText, Mail } from 'lucide-react';
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
      <main className="flex-1">
        {/* Hero Section */}
        <section className="edge-to-edge-section py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background z-0" />
          <BackgroundBeams className="opacity-30" />
          <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm font-medium text-primary">Official Details</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground pb-2">
                Company <span className="text-primary">Information</span>
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto mt-4">
                Transparency and trust are at the core of our operations
              </p>
            </div>

            <div className="space-y-8">
              {/* Legal Entity Card */}
              <div className="bg-card rounded-xl border-none shadow-xl hover:shadow-2xl transition-all p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  Legal Entity
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xl font-semibold text-foreground mb-1">
                      BitSleuth Ltd trading as BitSleuth
                    </p>
                    <p className="text-muted-foreground font-normal">
                      Registered in England and Wales
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Details Card */}
              <div className="bg-card rounded-xl border-none shadow-xl hover:shadow-2xl transition-all p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  Company Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <span className="text-primary font-semibold text-lg">Company Number:</span>
                    <span className="ml-2 text-foreground font-mono text-lg">16733578</span>
                  </div>
                  <div>
                    <span className="text-primary font-semibold text-lg">Registered Office:</span>
                    <div className="mt-2 text-muted-foreground font-normal leading-relaxed text-lg">
                      65 Harland Avenue<br />
                      Sidcup, England<br />
                      DA15 7NY
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="bg-card rounded-xl border-none shadow-xl hover:shadow-2xl transition-all p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  Contact Information
                </h2>
                <div className="space-y-4 text-lg">
                  <p className="text-muted-foreground font-normal">
                    For general inquiries, please contact us at{' '}
                    <a
                      href="mailto:hello@bitsleuth.ai"
                      className="text-primary hover:underline hover:text-primary/80 transition-colors"
                    >
                      hello@bitsleuth.ai
                    </a>
                  </p>
                  <p className="text-muted-foreground font-normal">
                    For support and technical assistance, please contact us at{' '}
                    <a
                      href="mailto:support@bitsleuth.ai"
                      className="text-primary hover:underline hover:text-primary/80 transition-colors"
                    >
                      support@bitsleuth.ai
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
