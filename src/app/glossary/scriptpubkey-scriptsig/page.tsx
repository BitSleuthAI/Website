// src/app/glossary/scriptpubkey-scriptsig/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Key, Code } from 'lucide-react';
import Link from 'next/link';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function ScriptPubKeyScriptSigGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'segwit', title: 'Segwit', description: 'Segregated Witness upgrade' },
    { slug: 'taproot', title: 'Taproot', description: 'Privacy upgrade' },
    { slug: 'miniscript', title: 'Miniscript', description: 'Structured Bitcoin scripts' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="scriptpubkey-scriptsig" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              What Are ScriptPubKey and <span className="text-primary">ScriptSig</span>?
            </h1>
            <p itemProp="description" className="text-lg text-muted-foreground font-normal">
              ScriptPubKey and ScriptSig are the two halves of Bitcoin's programmable transaction system. ScriptPubKey (locking script) defines the conditions required to spend a <Link href="/glossary/utxo" className="text-primary hover:underline">UTXO</Link>, while ScriptSig (unlocking script) provides the data needed to satisfy those conditions.
            </p>

            <Card className="my-6 bg-card border-none shadow-xl hover:shadow-2xl">
              <CardContent className="p-4">
                 <h3 className="text-xl font-bold flex items-center mb-2">
                    <Code className="mr-2 h-6 w-6 text-primary" />
                    Bitcoin Script Language
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Bitcoin uses a simple, stack-based scripting language to define spending conditions. This language is intentionally limited to ensure security while enabling flexible transaction types beyond simple payments.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
              How They Work Together
            </h2>

             <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Lock className="mr-2 h-6 w-6 text-primary" />
                        ScriptPubKey (Locking Script)
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Placed in transaction outputs, ScriptPubKey specifies the conditions for spending the bitcoin. Most commonly, it requires a valid <Link href="/glossary/signature" className="text-primary hover:underline">digital signature</Link> from the owner's <Link href="/glossary/private-key" className="text-primary hover:underline">private key</Link>.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Key className="mr-2 h-6 w-6 text-primary" />
                        ScriptSig (Unlocking Script)
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                      Placed in transaction inputs, ScriptSig provides the data (like signatures and public keys) that satisfies the ScriptPubKey conditions. When combined and executed, they determine if the transaction is valid.
                    </p>
                </div>
            </div>
            
            <p className="text-muted-foreground mt-8 font-normal">
             With <Link href="/glossary/segwit" className="text-primary hover:underline">SegWit</Link>, witness data replaced ScriptSig for signature data, improving transaction malleability and efficiency. Modern tools like <Link href="/glossary/miniscript" className="text-primary hover:underline">Miniscript</Link> make it easier to compose complex scripts safely.
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
