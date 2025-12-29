// src/app/glossary/schnorr-signature/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Zap } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function SchnorrSignatureGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'taproot', title: 'Taproot', description: 'Privacy upgrade' },
    { slug: 'signature', title: 'Signature', description: 'Transaction authorization' },
    { slug: 'cryptography', title: 'Cryptography', description: 'Bitcoin security foundation' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="schnorr-signature" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Are Schnorr <span className="text-primary">Signatures</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              Schnorr signatures are a type of digital <Link href="/glossary/signature" className="text-primary hover:underline">signature</Link> scheme that Bitcoin adopted with the <Link href="/glossary/taproot" className="text-primary hover:underline">Taproot</Link> upgrade. They offer key advantages over the original ECDSA signatures: signature aggregation, batch verification, and improved privacy for complex scripts.
            </p>

            <Card className="my-6 bg-card border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Shield className="mr-2 h-6 w-6 text-primary" />
                    Mathematical Elegance
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Schnorr signatures have provable security properties and a simpler mathematical structure than ECDSA. Their linearity enables powerful features like key and signature aggregation that were difficult or impossible with Bitcoin's original signature scheme.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              Key Advantages
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Users className="mr-2 h-6 w-6 text-primary" />
                        Signature Aggregation
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Multiple signatures can be combined into a single signature, significantly reducing transaction size for multi-signature setups. A 3-of-3 multisig looks identical to a single-signature transaction on the <Link href="/glossary/blockchain" className="text-primary hover:underline">blockchain</Link>.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Zap className="mr-2 h-6 w-6 text-primary" />
                        Efficiency & Privacy
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Smaller signatures mean lower <Link href="/glossary/fee-rate" className="text-primary hover:underline">fees</Link>. Additionally, by making complex scripts indistinguishable from simple payments, Schnorr signatures greatly enhance privacy while improving efficiency.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             Schnorr signatures were enabled through <Link href="/glossary/taproot" className="text-primary hover:underline">Taproot</Link> in November 2021. They're fundamental to modern Bitcoin features like <Link href="/glossary/silent-payments" className="text-primary hover:underline">silent payments</Link> and advanced <Link href="/glossary/miniscript" className="text-primary hover:underline">Miniscript</Link> constructions, representing a significant improvement in Bitcoin's cryptographic toolkit.
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
