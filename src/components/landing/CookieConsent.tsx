
// src/components/landing/CookieConsent.tsx
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '../ui/card';
import { CookieCustomizationModal } from './CookieCustomizationModal';
import { hasConsent, setConsentPreferences, type ConsentPreferences } from '@/lib/consent';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState(false);

  useEffect(() => {
    // Show the banner only if the user has not made a consent choice yet.
    // Read happens client-side from localStorage (no origin request).
    if (!hasConsent()) {
      setIsVisible(true);
    }
  }, []);

  const setConsent = (consent: ConsentPreferences) => {
    setConsentPreferences(consent);
    setIsVisible(false);
    setIsCustomizeModalOpen(false);
    // Reload to apply analytics script changes
    window.location.reload();
  };

  const handleAccept = () => {
    setConsent({
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
    });
  };

  const handleReject = () => {
     setConsent({
      necessary: true,
      functional: false,
      analytics: false,
      performance: false,
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {!isCustomizeModalOpen && (
        <div className="cookie-banner-container md:left-4 md:right-auto md:max-w-md animate-in slide-in-from-bottom-4 duration-300">
            <Card className="max-w-md p-6 bg-background/80 backdrop-blur-sm border-border/50 shadow-glow">
                <h3 className="text-lg font-bold mb-2">We value your privacy</h3>
                <p className="text-sm text-muted-foreground mb-4 font-normal">
                    We use cookies to enhance your browsing experience, and analyze our traffic. By clicking
                    "Accept All", you consent to our use of cookies.{' '}
                    <a href="https://www.bitsleuth.ai/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline text-primary">
                    Cookie Policy
                    </a>
                </p>
                <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => setIsCustomizeModalOpen(true)}>Customize</Button>
                    <Button variant="outline" size="sm" onClick={handleReject}>Reject All</Button>
                    <Button size="sm" onClick={handleAccept}>Accept All</Button>
                </div>
          </Card>
        </div>
      )}
      <CookieCustomizationModal 
        isOpen={isCustomizeModalOpen}
        onOpenChange={setIsCustomizeModalOpen}
        onSave={setConsent}
        onRejectAll={handleReject}
        onAcceptAll={handleAccept}
      />
    </>
  );
}
