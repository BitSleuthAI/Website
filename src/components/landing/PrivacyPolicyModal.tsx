
// src/components/landing/PrivacyPolicyModal.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export function PrivacyPolicyModal({ isOpen, onOpenChange }: PrivacyPolicyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">Privacy Policy</DialogTitle>
          <DialogDescription className="font-medium">Effective Date: 24 July 2025</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-6">
          <div className="prose prose-invert max-w-none text-muted-foreground font-normal">
            <p>
              Welcome to BitSleuth. We are committed to protecting your privacy and ensuring that
              your personal data is handled with care, transparency, and in compliance with
              applicable data protection laws.
            </p>
            <p>
              This Privacy Policy applies to all services provided by BitSleuth, including our
              public website (<a href="https://www.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.bitsleuth.ai</a>), our analytics platform (<a href="https://app.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">app.bitsleuth.ai</a>), and
              our privacy-focused wallet app (<a href="https://wallet.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">wallet.bitsleuth.ai</a>).
            </p>
            <p>
              By using any of our websites or services, you agree to the terms of this Privacy
              Policy.
            </p>

            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">1. Who We Are</h3>
            <p>
              BitSleuth is a technology company focused on Bitcoin analytics and wallet services. We
              operate with a privacy-first mindset, especially within our wallet platform.
            </p>

            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">2. What Data We Collect</h3>
            <p>We collect limited data to support our services:</p>
            <p className="font-semibold">
              <strong>On <a href="https://www.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.bitsleuth.ai</a> and <a href="https://app.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">app.bitsleuth.ai</a>:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Usage data via Google Analytics (e.g. page visits, time spent, browser type, IP address).</li>
              <li>Contact form submissions, if you choose to get in touch.</li>
            </ul>
            <p className="font-semibold">
              <strong>On <a href="https://wallet.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">wallet.bitsleuth.ai</a>:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>
                We do not collect personal data or track users. The wallet is designed with privacy
                in mind and operates without user accounts, third-party integrations, or
                advertising.
              </li>
            </ul>

            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">3. How We Use Your Information</h3>
            <p>We only use your information for the following purposes:</p>
            <ul className="list-disc pl-6">
              <li>To understand how our website and analytics app are used.</li>
              <li>To respond to enquiries or support requests you send us.</li>
              <li>To improve our services based on anonymous usage trends.</li>
            </ul>
            <p>We do not:</p>
            <ul className="list-disc pl-6">
              <li>Use your data for marketing.</li>
              <li>Share or sell personal information to advertisers.</li>
              <li>Collect payment data or use third-party crypto exchange services.</li>
            </ul>

            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">4. Cookies</h3>
            <p>
              We use cookies solely for analytics purposes on <a href="https://www.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.bitsleuth.ai</a> and <a href="https://app.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">app.bitsleuth.ai</a>. These help us understand how users interact with our site so we can
              improve it.
            </p>
            <p>
              You can opt out of Google Analytics tracking by using Google’s opt-out browser add-on.
            </p>

            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">5. Data Storage and Retention</h3>
            <p>
              Google Analytics data is stored securely by Google and retained in accordance with
              their policies.
            </p>
            <p>
              Any messages or queries you send us may be stored for customer service purposes but
              are never used for marketing.
            </p>
            <p>We do not store or retain personal data from <a href="https://wallet.bitsleuth.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">wallet.bitsleuth.ai</a>.</p>

            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">6. Your Rights</h3>
            <p>
              Depending on your location, you may have rights under applicable data protection laws,
              such as:
            </p>
            <ul className="list-disc pl-6">
              <li>The right to access the personal data we hold about you.</li>
              <li>The right to request that we correct or delete your data.</li>
              <li>The right to object to certain types of processing.</li>
            </ul>
            <p>
              To make a request or ask questions, contact us at{' '}
              <a
                href="mailto:hello@bitsleuth.ai"
                className="text-primary hover:underline"
              >
                hello@bitsleuth.ai
              </a>
            </p>

            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">7. Data Security</h3>
            <p>
              We take appropriate technical and organisational measures to protect any personal data
              we do hold. However, no internet transmission is ever 100% secure, so we cannot
              guarantee absolute security.
            </p>

            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">8. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              our site, and the updated policy will be here.
            </p>
            <p>We encourage you to check this page periodically.</p>

            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">9. Contact Us</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy, please get in touch
              at:
              <br />
              <a href="mailto:hello@bitsleuth.ai" className="text-primary hover:underline">
                hello@bitsleuth.ai
              </a>
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
