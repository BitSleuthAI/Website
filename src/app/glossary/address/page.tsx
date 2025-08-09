
// src/app/glossary/address/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, KeyRound, Globe, Bitcoin, CheckCircle, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';

const addressFormats = [
  {
    icon: <Bitcoin className="h-6 w-6 text-primary" />,
    title: 'Taproot (P2TR)',
    prefix: 'Starts with "bc1p"...',
    description: 'The newest and most advanced address format, offering enhanced privacy, security, and lower transaction fees. It is ideal for complex transactions.',
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: 'Native SegWit (P2WPKH)',
    prefix: 'Starts with "bc1q"...',
    description: 'A popular and efficient format that offers lower fees than Legacy addresses. Widely supported by modern wallets and services.',
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Legacy (P2PKH)',
    prefix: 'Starts with "1"...',
    description: 'The original Bitcoin address format. It has the highest transaction fees and is less efficient, but is compatible with all wallets and services.',
  },
];


export default function AddressGlossaryPage() {
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
            <h1 className="text-4xl font-bold mb-4 text-gradient-title">
              What Is a Bitcoin Address?
            </h1>
            <p className="text-lg text-muted-foreground font-normal">
              A Bitcoin address is like a virtual mailbox for your cryptocurrency. It is a unique
              identifier that you provide to others when you want to receive funds. Addresses are
              a fundamental part of how Bitcoin works, acting as endpoints for transactions on the
              blockchain.
            </p>

            <Card className="my-6 bg-secondary/30">
              <CardContent className="p-4">
                <p className="font-semibold mb-2">Example of a Native SegWit Address (P2WPKH format):</p>
                <code className="text-lg font-mono bg-background/50 p-2 rounded-md block break-all">
                  bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                </code>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <KeyRound className="mr-2 h-6 w-6 text-primary" />
                        Public vs. Private Keys
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                        Your Bitcoin address is derived from your public key, which is derived from your private key. You can safely share your address to receive funds, but you must <strong className="text-foreground font-semibold">never</strong> share your private key, as it grants full access to your Bitcoin.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <Globe className="mr-2 h-6 w-6 text-primary" />
                        Privacy and Security
                    </h3>
                    <p className="text-muted-foreground mt-2 font-normal">
                        For security and privacy, it is strongly recommended to use a new address for every transaction you receive. Reusing addresses allows others to easily link your transactions together, creating a clearer picture of your financial activity.
                    </p>
                </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-gradient-title">
              Common Address Formats
            </h2>
            <p className="text-muted-foreground font-normal">
              Bitcoin addresses come in several formats. While they all work, modern formats like Taproot and SegWit offer lower transaction fees and improved features. BitSleuth can analyze all standard address types.
            </p>
            <div className="mt-8 grid gap-6">
                {addressFormats.map((format) => (
                    <Card key={format.title} className="bg-card/50 shadow-glow">
                        <CardHeader className="flex flex-row items-start gap-4 p-4">
                            {format.icon}
                            <div className="flex-grow">
                                <CardTitle className="font-bold text-xl">{format.title}</CardTitle>
                                <CardDescription className="font-medium">{format.prefix}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 pl-14">
                           <p className="text-sm text-muted-foreground font-normal">{format.description}</p>
                        </CardContent>
                    </Card>
                ))}
                <Card className="bg-card/50 shadow-glow">
                    <CardHeader className="flex flex-row items-start gap-4 p-4">
                       <Shield className="h-6 w-6 text-primary" />
                       <div className="flex-grow">
                           <CardTitle className="font-bold text-xl">Nested SegWit &amp; Script (P2SH)</CardTitle>
                           <CardDescription className="font-medium">Starts with "3"...</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 pl-14">
                        <p className="text-sm text-muted-foreground font-normal">
                            These addresses (Pay-to-Script-Hash) are more complex. They can represent multi-signature wallets or act as a backward-compatible way to use SegWit features. They have higher fees than Native SegWit.
                        </p>
                    </CardContent>
                </Card>
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
