# Content Security Policy (CSP) Implementation

This document explains the Content Security Policy implementation for the BitSleuth website.

## Overview

The website implements a strict Content Security Policy to prevent XSS attacks and other code injection vulnerabilities. The CSP is implemented using Next.js middleware with nonce-based script loading.

## CSP Directives

### Current Policy

The CSP is configured in `src/middleware.ts` with the following directives:

```
default-src 'self'
script-src 'self' 'nonce-{random}' 'strict-dynamic' https:
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
img-src 'self' data: https://placehold.co https:
connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https:
font-src 'self' data: https://fonts.gstatic.com
object-src 'none'
base-uri 'self'
frame-ancestors 'self'
form-action 'self'
upgrade-insecure-requests
```

### Directive Explanations

- **default-src 'self'**: Only allow resources from same origin by default
- **script-src**: 
  - `'self'`: Allow scripts from same origin
  - `'nonce-{random}'`: Allow inline scripts with matching nonce
  - `'strict-dynamic'`: Allow scripts loaded by nonce-approved scripts (required for Next.js client navigation)
  - `https:`: Allow HTTPS scripts (works with strict-dynamic)
- **style-src**: 
  - `'self'`: Allow styles from same origin
  - `'unsafe-inline'`: Required for Next.js styled-jsx and runtime styles (⚠️ security tradeoff)
  - `https://fonts.googleapis.com`: Allow Google Fonts CSS
- **img-src**: Allow images from same origin, data URIs, and HTTPS sources
- **connect-src**: Allow API calls to self and Google Analytics
- **font-src**: Allow fonts from same origin, data URIs, and Google Fonts
- **object-src 'none'**: Block plugins like Flash
- **base-uri 'self'**: Prevent base tag injection
- **frame-ancestors 'self'**: Prevent clickjacking (same as X-Frame-Options)
- **form-action 'self'**: Prevent form submissions to external sites
- **upgrade-insecure-requests**: Automatically upgrade HTTP to HTTPS

## Nonce Implementation

### How It Works

1. **Middleware generates nonce**: Each request gets a unique nonce in `src/middleware.ts`
2. **Nonce in headers**: Stored in custom `x-nonce` header
3. **Server components**: Can access nonce via `getNonce()` from `src/lib/nonce.ts`
4. **Script tags**: Should include `nonce={nonce}` attribute

### Using Nonces in Components

For server components:

```tsx
import { getNonce } from '@/lib/nonce';

export default async function MyComponent() {
  const nonce = await getNonce();
  
  return (
    <script nonce={nonce}>
      {`console.log('This script has a nonce');`}
    </script>
  );
}
```

For Next.js Script component in client components:

```tsx
import Script from 'next/script';

export default function MyComponent() {
  return (
    <Script id="my-script" strategy="afterInteractive">
      {`console.log('Next.js Script component handles CSP automatically');`}
    </Script>
  );
}
```

## Known Limitations

### unsafe-inline for Styles

Currently, `'unsafe-inline'` is allowed for styles due to:
- Next.js styled-jsx requirement
- Runtime CSS injection by React
- Tailwind CSS runtime utilities

**Future improvement**: Could be removed by:
1. Pre-compiling all styles
2. Using CSS-in-JS with nonce support
3. Moving to static CSS extraction

### strict-dynamic

The `'strict-dynamic'` directive is required for:
- Next.js client-side navigation
- React runtime script injection
- Dynamic component loading

This is considered acceptable as it only allows scripts loaded by trusted scripts.

## Testing CSP

### Browser DevTools

1. Open browser DevTools (F12)
2. Navigate to Console tab
3. Look for CSP violation warnings
4. Check Network tab for blocked requests

### CSP Violation Reporting

To enable CSP violation reporting, add to middleware:

```typescript
report-uri /api/csp-report
report-to csp-endpoint
```

Then create an API endpoint at `/api/csp-report` to log violations.

## Troubleshooting

### Scripts Not Loading

1. Check if script has proper nonce attribute
2. Verify middleware is running (check response headers)
3. Check browser console for CSP violations
4. Ensure script source is allowed in script-src

### Styles Not Applying

1. Verify Google Fonts is in style-src
2. Check if inline styles have hash or nonce
3. Consider if strict CSP is blocking runtime styles

### Third-Party Integrations

When adding third-party scripts:

1. Add domain to appropriate directive (script-src, connect-src, etc.)
2. Test in production-like environment
3. Use nonces for inline initialization scripts
4. Document the addition in this file

## Security Considerations

### Why These Choices?

- **No unsafe-eval**: Prevents eval() and Function() attacks
- **object-src 'none'**: Prevents Flash/plugin attacks
- **base-uri 'self'**: Prevents base tag injection attacks
- **form-action 'self'**: Prevents form hijacking
- **frame-ancestors 'self'**: Prevents clickjacking

### Attack Surface Reduction

The CSP prevents:
- ✅ XSS via inline scripts (blocked without nonce)
- ✅ XSS via external scripts (must be from allowed sources)
- ✅ Data exfiltration (connect-src limits)
- ✅ Clickjacking (frame-ancestors)
- ✅ Plugin-based attacks (object-src)
- ⚠️ CSS injection (unsafe-inline for styles)

## Maintenance

When updating CSP:

1. Test in staging environment first
2. Monitor browser console for violations
3. Update this documentation
4. Consider backward compatibility
5. Review with security team

## Resources

- [MDN CSP Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
