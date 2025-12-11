
// src/app/glossary/transaction-privacy/page.tsx
'use client';

import { useState } from 'react';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Fingerprint, ShieldCheck } from 'lucide-react';

import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function TransactionPrivacyGlossaryPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);
  const relatedTerms = [
    { slug: 'coinjoin', title: 'Coinjoin', description: 'Privacy-enhancing technique' },
    { slug: 'payjoin', title: 'Payjoin', description: 'Collaborative transaction' },
    { slug: 'address', title: 'Address', description: 'Bitcoin receiving address' },
    { slug: 'utxo', title: 'Utxo', description: 'Unspent transaction output' }
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <GlossaryPageWrapper termSlug="transaction-privacy" relatedTerms={relatedTerms}>
            <h1 itemProp="headline" className="text-4xl font-bold mb-4 text-foreground">
              Understanding Bitcoin <span className="text-primary">Anonymity</span>
            </h1>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold flex items-center text-foreground">
                <Fingerprint className="mr-3 h-7 w-7 text-primary" />
                On-Chain Privacy
              </h2>
              <p className="text-muted-foreground mt-4 font-normal">
                All Bitcoin transactions are public and permanently stored on the blockchain. This means anyone can view the flow of funds between addresses. Bitcoin is pseudonymous, not anonymous. Your real-world identity is not directly linked to your address, but patterns in your transactions can sometimes be analyzed to de-anonymize you.
              </p>
              <p className="text-muted-foreground mt-2 font-normal">
                Advanced techniques like CoinJoin can mix transactions to break these links, but this wallet does not currently support these features.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold flex items-center text-foreground">
                <ShieldCheck className="mr-3 h-7 w-7 text-primary" />
                IP Address Privacy
              </h2>
              <p className="text-muted-foreground mt-4 font-normal">
                When this wallet broadcasts a transaction to the network, our servers can see your device&apos;s IP address. To enhance your privacy, you can hide your IP address by using a trusted VPN service or by running your browser through the Tor network.
              </p>
              <p className="text-muted-foreground mt-2 font-normal">
                This application cannot enable a VPN or Tor for you. You must configure these tools yourself on your device before using the wallet for maximum privacy.
              </p>
            </div>
            
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
