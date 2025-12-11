// src/app/history/metadata.ts
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bitcoin History | The Story of Bitcoin & Its Whitepaper | BitSleuth',
  description: 'Explore the complete history of Bitcoin from its creation in 2009 to its lasting legacy. Learn about Satoshi Nakamoto, the Bitcoin whitepaper, the Genesis Block, and the revolutionary concepts that changed finance forever.',
  keywords: [
    'bitcoin history',
    'when was bitcoin created',
    'who created bitcoin',
    'satoshi nakamoto',
    'bitcoin whitepaper',
    'bitcoin whitepaper simplified',
    'genesis block',
    'bitcoin origins',
    'history of bitcoin',
    'bitcoin creation',
    'bitcoin 2009',
    'bitcoin founder',
    'bitcoin invention',
    'peer-to-peer electronic cash',
    'bitcoin legacy',
    'bitcoin whitepaper explained',
    'bitcoin network history',
    'cryptocurrency history',
    'blockchain history',
    'bitcoin timeline'
  ],
  openGraph: {
    title: 'Bitcoin History | The Story of Bitcoin & Its Whitepaper',
    description: 'Discover the fascinating history of Bitcoin, from its mysterious creator Satoshi Nakamoto to the revolutionary whitepaper that changed finance. Learn about the Genesis Block and Bitcoin\'s lasting impact.',
    url: 'https://www.bitsleuth.ai/history',
    type: 'website',
    siteName: 'BitSleuth',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin History | The Story of Bitcoin & Its Whitepaper',
    description: 'Explore Bitcoin\'s creation, Satoshi Nakamoto\'s vision, and the whitepaper that revolutionized digital currency. Understand the Genesis Block and Bitcoin\'s lasting legacy.',
  },
  alternates: {
    canonical: 'https://www.bitsleuth.ai/history',
  },
};

export const historyStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.bitsleuth.ai/history",
      "url": "https://www.bitsleuth.ai/history",
      "name": "Bitcoin History | The Story of Bitcoin & Its Whitepaper",
      "description": "Complete history of Bitcoin from its creation in 2009, covering Satoshi Nakamoto, the whitepaper, Genesis Block, and Bitcoin's revolutionary impact on finance.",
      "isPartOf": {
        "@id": "https://www.bitsleuth.ai/#website"
      },
      "about": {
        "@type": "Thing",
        "name": "Bitcoin History",
        "sameAs": "https://en.wikipedia.org/wiki/History_of_bitcoin"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.bitsleuth.ai/images/og-image.png"
      },
      "datePublished": "2025-01-19",
      "dateModified": "2025-01-19",
    },
    {
      "@type": "Article",
      "headline": "The Complete History of Bitcoin: From Creation to Global Impact",
      "description": "An in-depth look at Bitcoin's history, including its creation by Satoshi Nakamoto, the revolutionary whitepaper, the Genesis Block, and its lasting influence on global finance.",
      "author": {
        "@type": "Organization",
        "name": "BitSleuth"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BitSleuth",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.bitsleuth.ai/images/logo-icon.jpg"
        }
      },
      "datePublished": "2025-01-19",
      "about": [
        {
          "@type": "Thing",
          "name": "Bitcoin",
          "sameAs": "https://en.wikipedia.org/wiki/Bitcoin"
        },
        {
          "@type": "Person",
          "name": "Satoshi Nakamoto",
          "sameAs": "https://en.wikipedia.org/wiki/Satoshi_Nakamoto"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When was Bitcoin created?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bitcoin was created on January 3, 2009, when Satoshi Nakamoto mined the Genesis Block (Block 0). The Bitcoin whitepaper was published earlier on October 31, 2008."
          }
        },
        {
          "@type": "Question",
          "name": "Who created Bitcoin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bitcoin was created by an individual or group using the pseudonym Satoshi Nakamoto. Despite numerous investigations, Satoshi's true identity remains unknown. They disappeared from the Bitcoin project in 2011."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Bitcoin whitepaper?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Bitcoin whitepaper, titled 'Bitcoin: A Peer-to-Peer Electronic Cash System,' was published by Satoshi Nakamoto on October 31, 2008. It outlined the technical framework for a decentralized digital currency using blockchain technology and proof-of-work consensus."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Genesis Block?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Genesis Block is the first block of the Bitcoin blockchain, mined by Satoshi Nakamoto on January 3, 2009. It contained a message referencing a Times newspaper headline about bank bailouts, symbolizing Bitcoin's purpose as an alternative to traditional finance."
          }
        }
      ]
    }
  ]
};
