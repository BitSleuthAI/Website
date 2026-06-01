"use client";

import Script from "next/script";
import { useEffect, useState, type ReactNode } from "react";

import { CookieConsent } from "@/components/landing/CookieConsent";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { hasAnalyticsConsent } from "@/lib/consent";

type ProvidersProps = {
  children: ReactNode;
  gaMeasurementId: string;
};

export function Providers({ children, gaMeasurementId }: ProvidersProps) {
  const [isClient, setIsClient] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Read consent client-side from localStorage (no origin request).
    setAnalyticsAllowed(hasAnalyticsConsent());
  }, []);

  return (
    <ThemeProvider defaultTheme="system">
      {children}
      <Toaster />
      {isClient && <CookieConsent />}
      {analyticsAllowed && gaMeasurementId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}');
            `}
          </Script>
        </>
      )}
    </ThemeProvider>
  );
}
