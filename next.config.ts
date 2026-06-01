import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    mcpServer: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    // Static Content-Security-Policy.
    //
    // This replaces the previous per-request nonce CSP (which lived in middleware.ts).
    // A per-request nonce forces every page into dynamic SSR and prevents any CDN edge
    // caching. A static policy lets pages be statically generated and cached at the edge.
    //
    // 'unsafe-inline' is required for script-src because Next.js App Router emits inline
    // hydration/RSC scripts (e.g. self.__next_f.push(...)) whose content is generated
    // per page/build and therefore cannot be covered by a fixed set of hashes. For a
    // static, public marketing site that renders no user-supplied HTML, this is an
    // accepted trade-off. Same-origin scripts are served from 'self'; Google Analytics
    // is allowlisted by host.
    const contentSecurityPolicy = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' https://fonts.googleapis.com",
      "img-src 'self' data: https://placehold.co",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "object-src 'none'",
      "base-uri 'self'",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join('; ');

    return [
      {
        // Apply security headers (including the static CSP) to all routes.
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: contentSecurityPolicy
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          }
        ],
      },
      {
        // Long-lived caching for static image assets in /public/images.
        // These are referenced by stable paths, so allow the CDN/browser to cache
        // them for 30 days (with a week of stale-while-revalidate).
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=604800'
          }
        ],
      },
      {
        // Long-lived caching for static documents in /public/documents.
        source: '/documents/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=604800'
          }
        ],
      },
    ];
  },
};

export default nextConfig;
