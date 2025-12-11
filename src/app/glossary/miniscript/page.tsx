// src/app/glossary/miniscript/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function MiniscriptGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'descriptor-wallet', title: 'Descriptor Wallet', description: 'Modern wallet standard' },
    { slug: 'taproot', title: 'Taproot', description: 'Privacy upgrade' },
    { slug: 'psbt', title: 'Psbt', description: 'Partially signed transaction' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="miniscript" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Is <span className="text-primary">Miniscript</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              Miniscript is a language for writing Bitcoin Scripts in a structured way that makes them easier to write, analyze, and verify. It acts as a higher-level abstraction over raw Bitcoin Script, enabling safer and more composable spending conditions while maintaining compatibility with the Bitcoin protocol.
            </p>

            <Card className="my-6 bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Code className="mr-2 h-6 w-6 text-primary" />
                    Human-Readable Scripts
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Miniscript translates complex spending conditions into readable expressions like "A AND (B OR (C AND older(1000)))", which can then be compiled into efficient Bitcoin Script. This makes it much easier to understand and verify what conditions must be met to spend funds.
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
                        Safer Smart Contracts
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Miniscript provides static analysis tools that can verify scripts are spendable, non-malleable, and efficient before deployment. This prevents costly errors in complex <Link href="/glossary/scriptpubkey-scriptsig" className="text-primary hover:underline">spending scripts</Link>.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Sparkles className="mr-2 h-6 w-6 text-primary" />
                        Composability
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Different spending policies can be combined and nested in a modular way. This enables sophisticated setups like timelocked backups, multi-path spending conditions, and flexible multi-signature schemes.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Miniscript integrates well with <Link href="/glossary/descriptor-wallet" className="text-primary hover:underline">descriptor wallets</Link>, <Link href="/glossary/psbt" className="text-primary hover:underline">PSBTs</Link>, and modern Bitcoin features like <Link href="/glossary/taproot" className="text-primary hover:underline">Taproot</Link>. It's becoming increasingly important for advanced Bitcoin applications and custody solutions.
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
