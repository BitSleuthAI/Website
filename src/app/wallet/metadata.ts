import { Metadata } from 'next';

export const walletMetadata: Metadata = {
  title: 'Bitcoin Privacy Wallet | Non-Custodial Secure Storage | BitSleuth',
  description: 'Privacy-first Bitcoin wallet with advanced security features. Non-custodial storage designed to minimize address reuse and maximize on-chain privacy for Bitcoin holders.',
  keywords: 'bitcoin privacy wallet, non-custodial wallet, bitcoin security, privacy-focused wallet, bitcoin storage, cryptocurrency wallet, bitcoin privacy tools, secure bitcoin wallet',
  openGraph: {
    title: 'Bitcoin Privacy Wallet | Non-Custodial Secure Storage',
    description: 'Privacy-first Bitcoin wallet with advanced security features. Non-custodial storage designed to minimize address reuse and maximize on-chain privacy.',
    url: 'https://www.bitsleuth.ai/wallet',
    siteName: 'BitSleuth',
    images: [
      {
        url: 'https://www.bitsleuth.ai/images/wallet-og.png',
        width: 1200,
        height: 630,
        alt: 'BitSleuth Bitcoin Privacy Wallet',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Privacy Wallet | Non-Custodial Secure Storage',
    description: 'Privacy-first Bitcoin wallet with advanced security features. Non-custodial storage designed to minimize address reuse and maximize on-chain privacy.',
    images: ['https://www.bitsleuth.ai/images/wallet-twitter.png'],
  },
  alternates: {
    canonical: 'https://www.bitsleuth.ai/wallet',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const walletStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BitSleuth Bitcoin Privacy Wallet",
  "description": "Privacy-first non-custodial Bitcoin wallet with advanced security features and privacy protection",
  "url": "https://www.bitsleuth.ai/wallet",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "creator": {
    "@type": "Organization",
    "name": "BitSleuth",
    "url": "https://www.bitsleuth.ai"
  },
  "keywords": "bitcoin privacy wallet, non-custodial wallet, bitcoin security, privacy protection",
  "featureList": [
    "Non-custodial storage",
    "Address reuse prevention",
    "Privacy-first design",
    "Advanced security features",
    "Bitcoin-only focus",
    "Open source"
  ],
  "screenshot": "https://www.bitsleuth.ai/images/wallet-screenshot.png"
};
