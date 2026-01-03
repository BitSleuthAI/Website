// src/app/layout.tsx
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import { Providers } from "@/components/Providers";

// Intentionally keep a hard-coded GA fallback ID for environments without env configuration.
// This supports analytics in demo/pre-prod contexts where the env var may be absent.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-RPS0XSGWJ5";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap", // Prevent layout shift during font load
  preload: true, // Preload the font
});

export const cspNonce = async () => {
  const nonceHeader = (await headers()).get("x-nonce");
  return nonceHeader ?? undefined;
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const nonce = await cspNonce();

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5, user-scalable=yes"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preload critical hero image for homepage */}
        <link rel="preload" as="image" href="/images/hero.png" fetchPriority="high" />
        
        <title>BitSleuth | AI-Powered Bitcoin Wallet Analysis & Privacy Wallet</title>
        <meta
          name="description"
          content="Professional Bitcoin wallet analysis with AI-powered insights, transaction visualization, and OPSEC risk detection. Plus a privacy-first non-custodial wallet for secure Bitcoin storage."
        />
        <meta
          name="keywords"
          content="bitcoin wallet analysis, blockchain analysis, bitcoin privacy, wallet security, OPSEC, bitcoin tools, cryptocurrency analysis, bitcoin wallet, non-custodial wallet, bitcoin transparency"
        />
        <meta name="author" content="BitSleuth" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="color-scheme" content="light dark" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bitsleuth.ai/" />
        <meta property="og:title" content="BitSleuth | AI-Powered Bitcoin Wallet Analysis & Privacy Wallet" />
        <meta
          property="og:description"
          content="Professional Bitcoin wallet analysis with AI-powered insights, transaction visualization, and OPSEC risk detection. Plus a privacy-first non-custodial wallet for secure Bitcoin storage."
        />
        <meta property="og:image" content="https://www.bitsleuth.ai/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="BitSleuth" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.bitsleuth.ai/" />
        <meta name="twitter:title" content="BitSleuth | AI-Powered Bitcoin Wallet Analysis & Privacy Wallet" />
        <meta
          name="twitter:description"
          content="Professional Bitcoin wallet analysis with AI-powered insights, transaction visualization, and OPSEC risk detection. Plus a privacy-first non-custodial wallet for secure Bitcoin storage."
        />
        <meta name="twitter:image" content="https://www.bitsleuth.ai/images/twitter-card.png" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://www.bitsleuth.ai/" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="apple-mobile-web-app-title" content="BitSleuth" />

        {/* Structured Data */}
        <script
          nonce={nonce ?? undefined}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "BitSleuth",
              description:
                "AI-powered Bitcoin wallet analysis and privacy-first wallet tools for blockchain transparency and security",
              url: "https://www.bitsleuth.ai",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "BitSleuth",
                url: "https://www.bitsleuth.ai",
              },
              keywords:
                "bitcoin, wallet analysis, blockchain analysis, privacy, security, OPSEC, cryptocurrency",
              featureList: [
                "AI-powered wallet analysis",
                "Transaction visualization",
                "OPSEC risk detection",
                "Privacy-first wallet",
                "Non-custodial storage",
                "Bitcoin transparency tools",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        <Providers gaMeasurementId={GA_MEASUREMENT_ID} nonce={nonce}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
