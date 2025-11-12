
// src/app/privacy-policy/page.tsx
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

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl font-bold mb-4 text-gradient-title">Privacy Policy</h1>
            <p className="text-sm font-medium">Effective Date: 15 September 2025</p>
            <p className="font-normal">
              Welcome to BitSleuth. We are committed to protecting your privacy and ensuring that
              your personal data is handled with care, transparency, and in compliance with
              applicable data protection laws.
            </p>
            <p className="font-normal">
              This Privacy Policy applies to all services provided by BitSleuth, including our
              public website (<a href="https://www.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.bitsleuth.ai</a>), our analytics platform (<a href="https://app.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">app.bitsleuth.ai</a>), and
              our privacy-focused wallet iOS and Android app.
            </p>
            <p className="font-normal">
              By using any of our websites, apps or services, you agree to the terms of this Privacy
              Policy.
            </p>

            <h3 className="text-xl font-bold text-gradient-title">1. Who We Are</h3>
            <p className="font-normal">
              BitSleuth is a technology company focused on Bitcoin analytics and wallet services. We
              operate with a privacy-first mindset, especially within our wallet platform.
            </p>

            <h3 className="text-xl font-bold text-gradient-title">2. What Data We Collect</h3>
            <p className="font-normal">We collect limited data to support our services:</p>
            <p className="font-semibold">
              <strong>On <a href="https://www.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.bitsleuth.ai</a> and <a href="https://app.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">app.bitsleuth.ai</a>:</strong>
            </p>
            <ul className="list-disc pl-6 font-normal">
              <li>Usage data via Google Analytics (e.g. page visits, time spent, browser type, IP address).</li>
              <li>Contact form submissions, if you choose to get in touch.</li>
            </ul>
            <p className="font-semibold">
              <strong>On Wallet App:</strong>
            </p>
            <ul className="list-disc pl-6 font-normal">
              <li>
                We do not collect personal data or track users. The wallet is designed with privacy
                in mind and operates without user accounts, or advertising. Wallet App has its own Terms of Service, and Privacy Policy built into the app within settings.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gradient-title">3. How We Use Your Information</h3>
            <p className="font-normal">We only use your information for the following purposes:</p>
            <ul className="list-disc pl-6 font-normal">
              <li>To understand how our website and analytics app are used.</li>
              <li>To respond to enquiries or support requests you send us.</li>
              <li>To improve our services based on anonymous usage trends.</li>
            </ul>
            <p className="font-normal">We do not:</p>
            <ul className="list-disc pl-6 font-normal">
              <li>Use your data for marketing.</li>
              <li>Share or sell personal information to advertisers.</li>
              <li>Collect payment data or use third-party crypto exchange services.</li>
            </ul>

            <h3 className="text-xl font-bold text-gradient-title">4. Cookies</h3>
            <p className="font-normal">
              We use cookies solely for analytics purposes on <a href="https://www.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.bitsleuth.ai</a> and <a href="https://app.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">app.bitsleuth.ai</a>. These help us understand how users interact with our site so we can
              improve it.
            </p>
            <p className="font-normal">
              You can opt out of Google Analytics tracking by using Google’s opt-out browser add-on.
            </p>

            <h3 className="text-xl font-bold text-gradient-title">5. Data Storage and Retention</h3>
            <p className="font-normal">
              Google Analytics data is stored securely by Google and retained in accordance with
              their policies.
            </p>
            <p className="font-normal">
              Any messages or queries you send us may be stored for customer service purposes but
              are never used for marketing.
            </p>
            <p className="font-normal">We do not store or retain personal data from Wallet App.</p>

            <h3 className="text-xl font-bold text-gradient-title">6. Your Rights</h3>
            <p className="font-normal">
              Depending on your location, you may have rights under applicable data protection laws,
              such as:
            </p>
            <ul className="list-disc pl-6 font-normal">
              <li>The right to access the personal data we hold about you.</li>
              <li>The right to request that we correct or delete your data.</li>
              <li>The right to object to certain types of processing.</li>
            </ul>
            <p className="font-normal">
              To make a request or ask questions, contact us at{' '}
              <a
                href="mailto:hello@bitsleuth.ai"
                className="text-primary hover:underline"
              >
                hello@bitsleuth.ai
              </a>
            </p>

            <h3 className="text-xl font-bold text-gradient-title">7. Data Security</h3>
            <p className="font-normal">
              We take appropriate technical and organisational measures to protect any personal data
              we do hold. However, no internet transmission is ever 100% secure, so we cannot
              guarantee absolute security.
            </p>

            <h3 className="text-xl font-bold text-gradient-title">8. Changes to This Policy</h3>
            <p className="font-normal">
              We may update this Privacy Policy from time to time. Any changes will be posted on
              our site, and the updated policy will be here.
            </p>
            <p className="font-normal">We encourage you to check this page periodically.</p>

            <h3 className="text-xl font-bold text-gradient-title">9. Contact Us</h3>
            <p className="font-normal">
              If you have any questions or concerns about this Privacy Policy, please get in touch
              at:
              <br />
              <a href="mailto:hello@bitsleuth.ai" className="text-primary hover:underline">
                hello@bitsleuth.ai
              </a>
            </p>
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
