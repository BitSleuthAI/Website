import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = 'https://www.bitsleuth.ai/sitemap.xml';
  return {
    rules: [
        {
            userAgent: '*',
            allow: '/',
        }
    ],
    sitemap: sitemapUrl,
  };
}
