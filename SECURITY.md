# Security Policy

## About BitSleuth Website

BitSleuth Website is a Next.js 16 marketing and educational website for Bitcoin wallet analysis tools. It does not handle private keys, wallet data, or financial transactions. This policy covers the website at [bitsleuth.ai](https://www.bitsleuth.ai) and its subdomains.

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability in the BitSleuth Website, please report it privately to help protect our users.

### How to Report

Send an email to **security@bitsleuth.ai** with the following information:

- **Description**: A clear description of the vulnerability
- **Impact**: The potential impact of the vulnerability
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Affected Area**: Which part of the site is affected (e.g., page route, form, API endpoint, CSP configuration)
- **Suggested Fix**: If you have suggestions for fixing the issue (optional)

### What to Expect

- **Acknowledgment**: We will acknowledge receipt of your report within 48 hours
- **Assessment**: We will assess the vulnerability and determine its severity
- **Updates**: You will receive updates on our progress at least every 7 days
- **Resolution**: We aim to resolve critical vulnerabilities within 30 days
- **Credit**: If you wish, we will publicly credit you for the discovery once the issue is resolved

## Security Architecture

### Security Headers

The website sets the following security headers via `next.config.ts`:

- `Content-Security-Policy` — restricts resource loading to `'self'` plus allowlisted Google Analytics and Google Tag Manager domains; `unsafe-inline` is permitted for scripts as required by Next.js server components
- `Strict-Transport-Security` — max-age=63072000 (2 years), includeSubDomains, preload
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: origin-when-cross-origin`
- `Permissions-Policy` — camera, microphone, geolocation, and interest-cohort are all blocked
- `X-DNS-Prefetch-Control: on`

### Rate Limiting

API endpoints are protected by rate limiting implemented in `src/lib/rate-limit.ts` to mitigate abuse.

### Input Validation

All form inputs are validated with Zod schemas before processing.

### Analytics Disclosure

The website uses Google Analytics 4 to collect anonymous usage metrics (page views, navigation events). No personally identifiable information (PII) is collected. Analytics collection is gated behind cookie consent.

## Scope

### In Scope

- **Cross-site scripting (XSS)**: Injection via user-supplied input, URL parameters, or rendered content
- **Content Security Policy bypass**: Loading unauthorized scripts or resources in violation of the CSP
- **Open redirect**: Redirecting users to arbitrary external URLs via site parameters
- **Form or API endpoint abuse**: Exploiting contact forms or server actions to send spam, exfiltrate data, or bypass rate limits
- **Rate limiting bypass**: Circumventing API rate limits to enable abuse at scale
- **Secrets in repository**: Hardcoded credentials or `.env` files committed to the codebase
- **Dependency vulnerabilities**: Security issues in direct dependencies with demonstrable impact

### Out of Scope

- Vulnerabilities in the BitSleuth Analyzer application (report those separately to the same email)
- Social engineering attacks against individual users
- Denial-of-service attacks against third-party services (Google Analytics, Firebase)
- Vulnerabilities in third-party services themselves
- Issues requiring physical access to a user's device
- Browser-level security issues not specific to this site
- UI/UX issues without a security impact

## Environment Variables

**Public client configuration (safe for browser):**
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4 measurement ID

No server-side secrets are used by this website. `.env` files are excluded from the repository.

## Open Source

The BitSleuth Website is open source and publicly auditable. We welcome security-focused code review from the community.
