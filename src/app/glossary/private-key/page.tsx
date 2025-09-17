
// src/app/glossary/private-key/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, KeyRound, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import Link from 'next/link';

export default function PrivateKeyGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  return (
    <div className="flex flex-col min-h-dvh bg-background edge-to-edge-container">
      <Header />
      <main className="flex-1 py-12 md:py-20 lg:py-24 edge-to-edge-main">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
           <Button variant="ghost" asChild className="mb-8">
            <Link href="/glossary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Glossary
            </Link>
          </Button>
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4 text-gradient-title">
              What Is a Private Key?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              A private key is the secret, cryptographic key that proves your ownership of bitcoins and gives you the ability to spend them. It is the single most important piece of information you need to protect in your Bitcoin <Link href="/glossary/wallet" className="text-primary hover:underline">wallet</Link>.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold flex items-center mb-2">
                    <KeyRound className="mr-2 h-6 w-6 text-primary" />
                    Your Digital Signature
                </h3>
                <p className="text-muted-foreground mt-2 font-normal">
                    Think of a private key as the digital equivalent of a handwritten signature. It is used to authorize transactions, creating a unique digital signature that proves to the network that you have the right to send the funds.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Private Key vs. Passphrase
            </h2>
            <p className="text-muted-foreground font-normal">
              It is crucial to understand the difference between a raw private key and a recovery passphrase (also known as a seed phrase).
            </p>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        Private Key
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                        This is a long, complex string of numbers and letters that is difficult for humans to handle. Modern wallets generate and manage many private keys for you behind the scenes.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Link href="/glossary/passphrase" className="text-primary hover:underline">Passphrase</Link>
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                        This is a list of 12-24 words that acts as a master backup for your entire wallet. This single passphrase can be used to restore all of your private keys and access your funds if you lose your device.
                    </p>
                </div>
            </div>
            
            <div className="mt-8 p-4 bg-destructive/10 border-l-4 border-destructive rounded-r-md">
                 <div className="flex items-center">
                    <ShieldAlert className="h-6 w-6 mr-3 text-destructive" />
                    <h3 className="text-xl font-bold text-destructive-foreground">Protect Your Keys</h3>
                 </div>
                 <p className="text-destructive-foreground/80 mt-2 font-normal">
                    In practice, you should never handle your raw private keys directly. Your wallet software takes care of this for you. Your primary responsibility is to securely back up your <Link href="/glossary/passphrase" className="font-bold text-destructive-foreground hover:underline">passphrase</Link> and keep it secret. Anyone with access to it can access your bitcoin.
                </p>
            </div>

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
