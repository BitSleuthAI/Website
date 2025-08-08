
import { type MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bitsleuth.ai';

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/analyzer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wallet`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const glossaryTerms = [
    'address',
    'bit',
    'bitcoin',
    'block',
    'blockchain',
    'btc',
    'confirmation',
    'cryptography',
    'double-spend',
    'hash-rate',
    'mining',
    'p2p',
    'passphrase',
    'private-key',
    'signature',
    'transaction-privacy',
    'wallet',
  ];

  const glossaryPages = glossaryTerms.map((term) => ({
    url: `${baseUrl}/glossary/${term}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...glossaryPages];
}
