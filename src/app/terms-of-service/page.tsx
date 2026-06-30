
// src/app/terms-of-service/page.tsx
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

export default function TermsOfServicePage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  const handlePrivacyLinkInTerms = () => {
    setActiveModal('privacy');
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <section className="bg-background py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-background/50 to-background z-0" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        <BackgroundBeams className="opacity-30" />
        <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-4xl font-bold mb-4 text-primary">Terms of Service</h1>
            <p className="text-sm font-medium">Last updated: 15 September 2025</p>

            <p className="font-normal">
              Welcome to BitSleuth. These Terms of Service ("Terms") govern your use of our websites,
              services and applications, including:
            </p>
            <ul className="list-disc pl-6 font-normal">
              <li><a href="https://www.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.bitsleuth.ai</a> – Our public website</li>
              <li><a href="https://app.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">app.bitsleuth.ai</a> – Our Bitcoin analytical platform</li>
              <li>Wallet App – Our Bitcoin wallet focused on privacy</li>
            </ul>
            <p className="font-normal">
              By accessing or using any of these services (collectively referred to as the
              "Services"), you agree to be bound by these Terms. Please read them carefully. If you
              do not agree to these Terms, you should not use the Services. Wallet App has additional Terms within the app.
            </p>

            <h3 className="text-xl font-bold text-primary">1. Who We Are</h3>
            <p className="font-normal">
              BitSleuth is a company dedicated to delivering tools for Bitcoin users  -  including a
              privacy-focused Bitcoin wallet and a Bitcoin analytics platform. While we may help
              users better understand their Bitcoin activity, we are not a cryptocurrency exchange
              and we do not process fiat transactions. We are not affiliated with any third-party
              exchange platforms.
            </p>

            <h3 className="text-xl font-bold text-primary">2. Eligibility</h3>
            <p className="font-normal">
              To use the Services, you must be at least 18 years old or the age of legal majority
              in your jurisdiction. By using our Services, you confirm that you meet these
              requirements.
            </p>

            <h3 className="text-xl font-bold text-primary">3. Acceptable Use</h3>
            <p className="font-normal">
              You agree to use our Services only for lawful purposes and in a manner that does not
              infringe the rights of others or restrict their use and enjoyment of the Services.
            </p>
            <p className="font-normal">You must not:</p>
            <ul className="list-disc pl-6 font-normal">
              <li>
                Use the Services for any illegal activity, including money laundering or terrorist
                financing.
              </li>
              <li>
                Attempt to gain unauthorised access to any part of our Services or interfere with
                their proper operation.
              </li>
              <li>Use any automated tools (such as bots or scrapers) without our prior consent.</li>
            </ul>

            <h3 className="text-xl font-bold text-primary">4. Our Wallet & Analytics Tools</h3>
            <p className="font-normal">We provide two core applications:</p>
            <p className="font-semibold">
              <strong>Bitcoin Wallet App</strong>
              <br />A non-custodial, privacy-focused wallet. You are solely responsible for your
              passphrase, backups, and access. We cannot recover lost access or reverse
              transactions.
            </p>
            <p className="font-semibold">
              <strong>Bitcoin Analytics (<a href="https://app.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">app.bitsleuth.ai</a>)</strong>
              <br />A tool to help you visualise and analyse your Bitcoin transactions. This tool is
              offered as a guide only and should not be considered financial or tax advice.
            </p>
            <p className="font-normal">
              We do not offer financial, investment, or legal advice. Any insights or analysis
              provided are informational and based on publicly available blockchain data.
            </p>

            <h3 className="text-xl font-bold text-primary">5. Privacy</h3>
            <p className="font-normal">
              We respect your privacy. No advertising or tracking beyond essential analytics is
              used.
            </p>
            <p className="font-normal">
              Google Analytics may be used on <a href="https://www.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.bitsleuth.ai</a> and <a href="https://app.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">app.bitsleuth.ai</a> to understand
              aggregate visitor behaviour and improve our services.
            </p>
            <p className="font-normal">
              Wallet App is designed with privacy in mind and does not track users or use
              analytics.
            </p>
            <p className="font-normal">
              For more detail, please read our{' '}
              <button onClick={openPrivacyModal} className="text-primary hover:underline underline-offset-4 font-medium p-0 m-0 bg-transparent border-none cursor-pointer">
                Privacy Policy
              </button>
              .
            </p>

            <h3 className="text-xl font-bold text-primary">6. No Custody or Exchange Services</h3>
            <p className="font-normal">
              BitSleuth is not a custodian of any digital assets and does not hold, manage, or
              exchange cryptocurrency or fiat funds on your behalf. All private keys are generated
              and stored on your device, and you retain full control and responsibility for your
              funds.
            </p>
            <p className="font-normal">
              We do not integrate services such as Changelly or MoonPay and do not process
              crypto-to-fiat or fiat-to-crypto transactions.
            </p>

            <h3 className="text-xl font-bold text-primary">7. Intellectual Property</h3>
            <p className="font-normal">
              All content and materials within the Services  -  including text, graphics, branding,
              and software  -  are the property of BitSleuth or its licensors and are protected by
              applicable intellectual property laws. You may not reproduce, copy, or exploit any
              part of the Services without prior written permission.
            </p>

            <h3 className="text-xl font-bold text-primary">8. Disclaimers</h3>
            <p className="font-normal">
              Our Services are provided "as is" and "as available" without any warranties of any
              kind, either express or implied. We do not guarantee:
            </p>
            <ul className="list-disc pl-6 font-normal">
              <li>
                That the Services will always be available or free from bugs.
              </li>
              <li>
                That any particular analysis, feature, or insight will be accurate or useful in all
                cases.
              </li>
            </ul>
            <p className="font-normal">You use the Services at your own risk.</p>

            <h3 className="text-xl font-bold text-primary">9. Limitation of Liability</h3>
            <p className="font-normal">
              To the maximum extent permitted by law, BitSleuth will not be liable for:
            </p>
            <ul className="list-disc pl-6 font-normal">
              <li>Any loss of funds, data, or access due to user error (e.g., lost passphrase).</li>
              <li>
                Any indirect, incidental, or consequential damages arising from your use of the
                Services.
              </li>
              <li>
                Any loss resulting from reliance on information or analysis provided via our
                Services.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-primary">10. Changes to These Terms</h3>
            <p className="font-normal">
              We may update these Terms from time to time. Changes will be effective when posted on{' '}
              <a href="https://www.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.bitsleuth.ai</a>. Your continued use of the Services after changes are posted
              indicates your acceptance of the revised Terms.
            </p>

            <h3 className="text-xl font-bold text-primary">11. Contact</h3>
            <p className="font-normal">
              If you have any questions about these Terms, please contact us through the support email <a href="mailto:support@bitsleuth.ai" className="text-primary hover:underline">support@bitsleuth.ai</a> or through feedback on <a href="https://app.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">app.bitsleuth.ai</a>.
            </p>
          </div>
        </div>
      </section>
      <Footer onPrivacyClick={openPrivacyModal} onTermsClick={openTermsModal} />
      <PrivacyPolicyModal isOpen={activeModal === 'privacy'} onOpenChange={closeModal} />
      <TermsOfServiceModal
        isOpen={activeModal === 'terms'}
        onOpenChange={closeModal}
        onPrivacyClick={handlePrivacyLinkInTerms}
      />
    </div>
  );
}
