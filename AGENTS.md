# AGENTS.md

## Project Overview

**BitSleuth Website** is a comprehensive Next.js 16 marketing website for www.bitsleuth.ai, serving as the primary hub for Bitcoin wallet analysis and privacy tools. The platform features multi-product landing pages, an educational glossary, SEO optimization, and privacy-compliant analytics.

**Primary Purpose:** Drive user acquisition and conversion for BitSleuth's Bitcoin wallet analyzer and wallet app through educational content and compelling product showcases.

**Production URL:** https://www.bitsleuth.ai

---

## Tech Stack

### Core Technologies
- **Framework:** Next.js 16.0.10 (App Router)
- **Language:** TypeScript 5.9.3 (strict mode enabled)
- **Runtime:** React 19.2.0
- **Node.js:** 18+ (20+ recommended)

### UI & Styling
- **CSS Framework:** Tailwind CSS 3.4.18
- **Component Library:** shadcn/ui with Radix UI primitives
- **Icons:** Lucide React 0.475.0
- **Carousel:** Embla Carousel 8.6.0
- **Animations:** tailwindcss-animate 1.0.7

### Backend & Integration
- **Hosting:** Firebase App Hosting
- **Analytics:** Google Analytics 4 (consent-gated)
- **Forms:** React Hook Form + Zod validation

### Development Tools
- **Package Manager:** npm 11.7.0
- **Linter:** ESLint (Next.js config)
- **Type Checking:** TypeScript compiler
- **Build Tool:** Next.js with Turbopack

---

## Project Structure

```
/home/runner/work/Website/Website/
├── .github/
│   └── copilot-instructions.md    # AI assistant guidelines
├── docs/
│   ├── PRD.md                     # Product requirements document
│   ├── SEO_STRATEGY.md            # SEO and visibility strategy
│   └── todo.md                    # Visual improvements tracking
├── public/                        # Static assets (images, fonts)
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout with providers
│   │   ├── globals.css           # Global styles
│   │   ├── analyzer/             # Analyzer product landing page
│   │   ├── wallet/               # Wallet product landing page
│   │   │   └── download/         # Wallet download page
│   │   ├── learn/                # Bitcoin education and learning hub
│   │   ├── history/              # Complete history of Bitcoin page
│   │   ├── glossary/             # Bitcoin terminology guide (44 terms)
│   │   ├── privacy-policy/       # Privacy policy page
│   │   ├── terms-of-service/     # Terms of service page
│   │   ├── company-information/  # Company info page
│   │   ├── api/waitlist/         # Waitlist signup API endpoint
│   │   ├── ai-training-content/  # AI system documentation
│   │   ├── robots.ts             # SEO robots.txt configuration
│   │   ├── sitemap.ts            # SEO sitemap generation
│   │   └── actions.ts            # Server actions
│   ├── components/
│   │   ├── landing/              # Marketing/landing page components
│   │   │   ├── Header.tsx        # Site header with navigation
│   │   │   ├── Footer.tsx        # Site footer
│   │   │   ├── HeroSection.tsx   # Hero sections
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   ├── CookieConsent.tsx # GDPR-compliant cookie banner
│   │   │   └── [29 total components]
│   │   ├── ui/                   # shadcn/ui component primitives
│   │   ├── ThemeToggle.tsx       # Dark/light mode switcher
│   │   └── theme-provider.tsx    # Theme context provider
│   ├── hooks/                    # Custom React hooks
│   └── lib/                      # Utility functions and helpers
├── apphosting.prd.yaml           # Firebase hosting configuration
├── components.json               # shadcn/ui configuration
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

---

## Key Features

### Product Landing Pages
- **Analyzer Page** (`/analyzer`): Bitcoin wallet analysis tool showcase
- **Wallet Page** (`/wallet`): Privacy-focused Bitcoin wallet app
- **Wallet Download** (`/wallet/download`): Wallet download page
- Interactive hero sections with address input
- Feature showcases, FAQs, testimonials, pricing

### Educational Content
- **Learn Hub** (`/learn`): Comprehensive Bitcoin education center covering fundamentals, getting started guides, and advanced topics
- **History Page** (`/history`): Complete timeline of Bitcoin's evolution from creation to global impact
- **Glossary** (`/glossary` and `/glossary/[term]`): 44 Bitcoin terminology entries with individual detail pages
- SEO-optimized educational content with structured data
- Internal linking and AI-friendly formatting

**Complete Glossary Terms (44 total):**
- **Basics:** address, bit, bitcoin, block, blockchain, btc, confirmation, cryptography, hash-rate, mining, private-key, signature, utxo, wallet
- **Standards & Protocols:** bip32, bip39, bip44, p2p, segwit, taproot
- **Transaction Features:** cltv, coin-selection, cpfp, csv, double-spend, dust-limit, fee-rate, psbt, rbf, scriptpubkey-scriptsig
- **Privacy & Security:** coinjoin, payjoin, silent-payments, transaction-privacy
- **Advanced Concepts:** descriptor-wallet, htlc, lightning-network, mempool, merkle-tree, miniscript, passphrase, schnorr-signature, sidechain, splicing

### AI Training & Documentation
- **AI Training Content** (`/ai-training-content`): Comprehensive platform documentation structured for AI system training and understanding
- Detailed product information, feature sets, and technical specifications
- Structured for optimal consumption by AI assistants and chatbots
- Helps AI systems provide accurate information about BitSleuth products

### Privacy & Compliance
- GDPR-compliant cookie consent system
- Consent-gated Google Analytics
- Privacy policy and terms of service
- Transparent data handling

### SEO Optimization
- Custom metadata for each page
- Dynamic sitemap generation with automatic glossary term detection
- Robots.txt configuration
- Open Graph and Twitter Card support
- JSON-LD structured data for articles, breadcrumbs, and FAQs
- AI-friendly content structure for SearchGPT, Perplexity, and other AI crawlers

### User Experience
- Light/dark theme support with system preference detection
- Fully responsive mobile-first design
- Smooth animations and transitions
- Accessible UI with Radix primitives

---

## Development Workflow

### Initial Setup
```bash
# Clone repository (already in /home/runner/work/Website/Website)
cd /home/runner/work/Website/Website

# Install dependencies
npm install

# Set up environment variables (optional)
cp .env.example .env.local
# Add: NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

### Development Server
```bash
# Start development server on port 9002
npm run dev
# Access at http://localhost:9002
```

### Available Commands
```bash
npm run dev          # Start dev server with Turbopack on port 9002
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint checks
npm run typecheck    # Run TypeScript type checking
```

### Code Quality Workflow
1. Make changes to TypeScript/React files
2. Run `npm run typecheck` to verify types
3. Run `npm run lint` to check code style
4. Test manually in browser on port 9002
5. Build with `npm run build` before committing

---

## Code Conventions & Patterns

### Component Organization
- **Landing components:** `src/components/landing/` - Marketing sections
- **UI primitives:** `src/components/ui/` - shadcn/ui base components
- **Page components:** `src/app/[route]/page.tsx` - Route pages
- Use TypeScript for all components (`.tsx` extension)

### Styling Patterns
- Tailwind utility classes for styling
- Custom color palette (Bitcoin-inspired: orange, amber, slate)
- Dark mode: Use `dark:` variants
- Responsive: Mobile-first with `sm:`, `md:`, `lg:`, `xl:` breakpoints

### TypeScript Standards
- Strict type checking enabled
- Define interfaces for component props
- Use type inference where possible
- No `any` types in production code

### File Naming
- **Components:** PascalCase (e.g., `HeroSection.tsx`)
- **Utilities:** camelCase (e.g., `utils.ts`)
- **Routes:** kebab-case folders (e.g., `privacy-policy/`)

### Import Organization
```typescript
// 1. External dependencies
import React from 'react'
import { Button } from '@/components/ui/button'

// 2. Internal components
import { Header } from '@/components/landing/Header'

// 3. Utilities and types
import { cn } from '@/lib/utils'
```

### Best Practices
- ✅ Use server components by default (Next.js 16)
- ✅ Add `"use client"` only when needed (hooks, events)
- ✅ No `console.log` in production code
- ✅ Accessibility: proper ARIA labels, keyboard navigation
- ✅ SEO: metadata for all pages
- ✅ Performance: optimize images, lazy load when appropriate

---

## Environment Variables

### Required Variables
```bash
# .env.local (optional for local development)
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id
```

### Production Variables (Firebase App Hosting)
Set in Firebase console via `apphosting.prd.yaml`:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics tracking

---

## Available Routes

| Route | Description | Key Features |
|-------|-------------|--------------|
| `/` | Homepage | Overview, hero, features |
| `/analyzer` | Analyzer product page | Features, demo, pricing, FAQ |
| `/wallet` | Wallet product page | Security, features, waitlist |
| `/wallet/download` | Wallet download page | Download information and links |
| `/learn` | Bitcoin education hub | Fundamentals, getting started, advanced topics |
| `/history` | Bitcoin history page | Complete timeline from 2008 to present |
| `/glossary` | Glossary index | 44 Bitcoin terminology entries |
| `/glossary/[term]` | Term detail pages | Individual term explanations with examples |
| `/privacy-policy` | Privacy policy | GDPR compliance info |
| `/terms-of-service` | Terms of service | Legal terms |
| `/company-information` | Company info | About BitSleuth |
| `/ai-training-content` | AI training documentation | Platform info for AI systems |
| `/api/waitlist` | Waitlist API endpoint | Email collection |

---

## Testing & Quality Assurance

### Manual Testing Checklist
Since there are no automated tests, manual testing is required:

**Functionality:**
- [ ] All routes load without errors
- [ ] Forms submit correctly (waitlist signup)
- [ ] Cookie consent banner appears and functions
- [ ] Theme toggle switches between light/dark modes
- [ ] External links open correctly
- [ ] Analytics tracking fires (with consent)

**Responsive Design:**
- [ ] Test on mobile (320px-768px)
- [ ] Test on tablet (768px-1024px)
- [ ] Test on desktop (1024px+)
- [ ] Check all breakpoints for layout issues

**Cross-browser:**
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS/iOS)

**Performance:**
- [ ] Lighthouse score 90+ (all metrics)
- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] Images optimized and loading quickly

**SEO:**
- [ ] Meta tags present on all pages
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Open Graph tags for social sharing

### Type Checking
```bash
# Must pass before committing
npm run typecheck
```

### Linting
```bash
# Check code style
npm run lint
```

### Build Validation
```bash
# Ensure production build succeeds
npm run build
```

---

## Deployment

### Automated Deployment
The site deploys automatically via Firebase App Hosting:
1. Push to configured branch (typically `main` or `dev`)
2. Firebase detects changes
3. Builds and deploys automatically
4. Available at https://www.bitsleuth.ai

### Manual Deployment
```bash
# Build locally
npm run build

# Deploy via Firebase CLI (if configured)
firebase deploy --only hosting
```

### Environment Configuration
- **Development:** `http://localhost:9002`
- **Production:** `https://www.bitsleuth.ai`
- **Staging:** Configured in Firebase dashboard

### Deployment Checklist
- [ ] All TypeScript checks pass
- [ ] Build completes without errors
- [ ] Environment variables configured in Firebase
- [ ] Test on staging before production push

---

## Common Tasks

### Adding a New Page
1. Create folder in `src/app/new-page/`
2. Add `page.tsx` with default export
3. Add metadata export for SEO
4. Update sitemap in `src/app/sitemap.ts`
5. Add navigation link in `Header.tsx` (if needed)

### Adding a New Component
1. Create file in `src/components/landing/NewComponent.tsx`
2. Define TypeScript interface for props
3. Use Tailwind for styling
4. Export component for use in pages

### Adding a Glossary Term
1. Create folder: `src/app/glossary/new-term/`
2. Add `page.tsx` with term content and structured data
3. Use `GlossaryPageWrapper` component for consistency
4. Sitemap automatically detects new terms (no manual update needed)
5. Update glossary index page to include the new term in the list

### Adding an Educational Page
1. Create folder: `src/app/page-name/`
2. Add `page.tsx` with educational content
3. Add `metadata.ts` (if needed) for SEO optimization
4. Include JSON-LD structured data for Article schema
5. Add to sitemap in `src/app/sitemap.ts`
6. Add navigation link in `Header.tsx` (if needed)

### Adding a shadcn/ui Component
```bash
# Use shadcn CLI to add component
npx shadcn-ui@latest add button
# Component added to src/components/ui/
```

### Updating Styles
1. Edit `tailwind.config.ts` for theme changes
2. Edit `src/app/globals.css` for global styles
3. Use Tailwind utilities in components

---

## Troubleshooting

### Port 9002 Already in Use
```bash
# Kill process using port 9002
lsof -ti:9002 | xargs kill -9

# Then restart dev server
npm run dev
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

### TypeScript Errors
```bash
# Check types in detail
npm run typecheck

# Look for any/unknown types
# Fix type definitions
# Re-run typecheck
```

### Module Not Found Errors
```bash
# Ensure all dependencies installed
npm install

# Check import paths use @ alias
# Example: import { Button } from '@/components/ui/button'
```

### Styling Not Applying
- Check Tailwind class names are correct
- Verify `globals.css` is imported in `layout.tsx`
- Clear browser cache and hard reload
- Check for CSS specificity conflicts

### Analytics Not Tracking
- Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- Check cookie consent was accepted
- Open browser dev tools → Network → look for GA requests
- Verify in Google Analytics Real-Time view

---

## Analytics & Monitoring

### Google Analytics
- Privacy-compliant implementation with consent gating
- Tracks page views, events, conversions
- Custom events for user interactions
- Configured in `src/app/layout.tsx`

### Key Metrics to Monitor
- **User Acquisition:** Monthly visitors, conversion rate
- **Engagement:** Session duration, pages per session, bounce rate
- **Performance:** Core Web Vitals, page load times
- **SEO:** Organic traffic, keyword rankings

### Performance Monitoring
```bash
# Run Lighthouse in Chrome DevTools
# Target scores:
# - Performance: 90+
# - Accessibility: 90+
# - Best Practices: 90+
# - SEO: 90+
```

---

## Integration Points

### BitSleuth App Integration
- Analyzer redirects to: `https://app.bitsleuth.ai/address/{address}`
- Seamless handoff from marketing site to analysis tool

### Firebase App Hosting
- Automated deployment pipeline
- Environment variable management
- CDN and edge caching

---

## Target Audience & Personas

### Primary Users
- **Bitcoin Analysts:** Blockchain investigators and compliance professionals
- **Bitcoin Enthusiasts:** Advanced users seeking privacy insights
- **New Users:** Bitcoin newcomers needing educational resources
- **Marketing Teams:** Internal teams optimizing content

### User Journeys
1. **Discovery:** Find site via search or social media
2. **Education:** Explore glossary and features
3. **Trial:** Use free wallet analysis demo
4. **Conversion:** Sign up for waitlist or paid plan

---

## Business Context

### Product Offerings
- **BitSleuth Analyzer:** Bitcoin wallet analysis and privacy risk detection
- **BitSleuth Wallet:** Privacy-first, non-custodial Bitcoin wallet

### Business Model
- Freemium SaaS with free basic features
- Pro tier: $9/month for unlimited analysis
- Enterprise: Custom pricing for organizations

### Competitive Advantages
- User-friendly interface for non-technical users
- Educational focus with comprehensive glossary
- Privacy-first approach
- Transparent data handling

---

## Additional Resources

### Documentation

**File Organization:** All markdown documentation files (`.md`) are stored in the `docs/` folder for consistency and easy discovery. When creating new documentation, place it in this directory.

**Available Documentation:**
- **README.md:** Quick start and overview
- **docs/PRD.md:** Detailed product requirements
- **docs/SEO_STRATEGY.md:** SEO strategy and keywords
- **docs/todo.md:** Visual improvement suggestions
- **.github/copilot-instructions.md:** AI assistant guidelines

### External Resources
- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)

---

## Contributing Guidelines

### Branch Strategy
- Base branch: `dev`
- Feature branches: `feature/description`
- Bug fixes: `fix/description`

### Commit Messages
Use conventional commits:
- `feat: add new glossary term`
- `fix: resolve mobile navigation issue`
- `docs: update AGENTS.md`
- `style: improve button spacing`

### Pull Request Process
1. Create feature branch from `dev`
2. Make changes with proper testing
3. Run typecheck and lint
4. Update documentation if needed (all markdown documentation files should be placed in the `docs/` folder)
5. Submit PR with clear description
6. Request review from team

### Code Review Checklist
- [ ] Code follows TypeScript and React best practices
- [ ] No console.log statements
- [ ] Types properly defined
- [ ] Components documented with props interface
- [ ] Performance impact considered
- [ ] Accessibility standards met (WCAG 2.1 AA)
- [ ] Mobile responsive
- [ ] Cross-browser compatible

---

## Contact & Support

- **Website:** https://www.bitsleuth.ai
- **Email:** legal@bitsleuth.ai
- **License:** Proprietary (Copyright © 2025 BitSleuth)

---

**Last Updated:** November 21, 2025  
**Document Version:** 1.1  
**Built with ❤️ by the BitSleuth Team**

