// src/app/layout.tsx
"use client";

import { Inter } from "next/font/google";
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { CookieConsent } from '@/components/landing/CookieConsent';
import { ThemeProvider } from '@/components/theme-provider';
import { useEffect, useState }from 'react';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-RPS0XSGWJ5';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false)
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    setIsClient(true)
    const consent = localStorage.getItem('cookie_consent');
    if (consent) {
        try {
            const parsedConsent = JSON.parse(consent);
            if (parsedConsent.analytics) {
                setAnalyticsAllowed(true);
            }
        } catch (e) {
            console.error("Error parsing cookie consent:", e);
        }
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <head>
        <title>BitSleuth | AI-Powered Bitcoin Wallet Analysis</title>
        <meta name="description" content="Analyze Bitcoin wallets like a pro. BitSleuth offers AI-powered insights, transaction visualization, and OPSEC risk detection for any BTC address." />
        <meta name="color-scheme" content="light dark" />
        {analyticsAllowed && GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        <ThemeProvider defaultTheme="system">
          {children}
          <Toaster />
          {isClient && <CookieConsent />}
        </ThemeProvider>
      </body>
    </html>
  );
}
