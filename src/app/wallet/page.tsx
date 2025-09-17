// src/app/wallet/page.tsx
"use client";

import { useState } from 'react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { WalletHeroSection } from '@/components/landing/WalletHeroSection';
import { WalletFeaturesSection } from '@/components/landing/WalletFeaturesSection';
import { WalletSecuritySection } from '@/components/landing/WalletSecuritySection';
import { WalletBuiltForBitcoinersSection } from '@/components/landing/WalletBuiltForBitcoinersSection';
import { WalletSeamlessExperienceSection } from '@/components/landing/WalletSeamlessExperienceSection';
import { WalletWaitlistSection } from '@/components/landing/WalletWaitlistSection';
import { WalletCallToActionSection } from '@/components/landing/WalletCallToActionSection';
import { WalletHowItWorksSection } from '@/components/landing/WalletHowItWorksSection';
import { WalletFaqSection } from '@/components/landing/WalletFaqSection';
import { WalletAboutSection } from '@/components/landing/WalletAboutSection';

export default function WalletPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  return (
    <div className="flex flex-col min-h-dvh bg-background overflow-x-hidden edge-to-edge-container">
      <Header basePath="/wallet" />
      <main className="flex-1 edge-to-edge-main">
        <WalletHeroSection />
        <WalletFeaturesSection />
        <WalletSecuritySection />
        <WalletBuiltForBitcoinersSection />
        <WalletSeamlessExperienceSection />
        <WalletWaitlistSection />
        <WalletHowItWorksSection />
        <WalletFaqSection />
        <WalletCallToActionSection />
        <WalletAboutSection />
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
