import { Metadata } from 'next';

export const analyzerMetadata: Metadata = {
  title: 'Bitcoin Wallet Analyzer | AI-Powered Blockchain Analysis | BitSleuth',
  description: 'Professional Bitcoin wallet analysis tool with AI-powered insights, transaction visualization, and OPSEC risk detection. Analyze any BTC address for security vulnerabilities and fund flows.',
  keywords: 'bitcoin wallet analyzer, blockchain analysis tool, bitcoin transaction analysis, OPSEC analysis, wallet security, cryptocurrency forensics, bitcoin investigation, blockchain forensics',
  openGraph: {
    title: 'Bitcoin Wallet Analyzer | AI-Powered Blockchain Analysis',
    description: 'Professional Bitcoin wallet analysis tool with AI-powered insights, transaction visualization, and OPSEC risk detection.',
    url: 'https://www.bitsleuth.ai/analyzer',
    siteName: 'BitSleuth',
    images: [
      {
        url: 'https://www.bitsleuth.ai/images/analyzer-og.png',
        width: 1200,
        height: 630,
        alt: 'BitSleuth Bitcoin Wallet Analyzer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Wallet Analyzer | AI-Powered Blockchain Analysis',
    description: 'Professional Bitcoin wallet analysis tool with AI-powered insights, transaction visualization, and OPSEC risk detection.',
    images: ['https://www.bitsleuth.ai/images/analyzer-twitter.png'],
  },
  alternates: {
    canonical: 'https://www.bitsleuth.ai/analyzer',
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

export const analyzerStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BitSleuth Bitcoin Wallet Analyzer",
  "description": "AI-powered Bitcoin wallet analysis tool for blockchain forensics, transaction visualization, and OPSEC risk detection",
  "url": "https://www.bitsleuth.ai/analyzer",
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
  "keywords": "bitcoin wallet analyzer, blockchain analysis, OPSEC, transaction analysis, cryptocurrency forensics",
  "featureList": [
    "AI-powered wallet analysis",
    "Transaction flow visualization", 
    "OPSEC risk detection",
    "Address clustering",
    "Fund flow tracing",
    "Security vulnerability assessment"
  ],
  "screenshot": "https://www.bitsleuth.ai/images/analyzer-screenshot.png"
};
