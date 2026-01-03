# BitSleuth Website

> **Bitcoin Wallet Analysis & Privacy Tools**

BitSleuth is a comprehensive Next.js 16.1.1 website that serves as the primary marketing and educational learning hub for Bitcoin analysis tools. The platform includes product landing pages for a Bitcoin wallet analyzer and Bitcoin wallet app, as well as an extensive educational glossary, SEO optimization, and privacy-compliant analytics.

- **🌐 Production:** [https://www.bitsleuth.ai](https://www.bitsleuth.ai)
- **🧑‍💻 Development:** [https://website-dev--bitsleuth.us-central1.hosted.app](https://website-dev--bitsleuth.us-central1.hosted.app)

## ✨ Key Features

- **🎯 Multi-Product Landing Pages**: Dedicated pages for BitSleuth Analyzer (`/analyzer`) and BitSleuth Wallet (`/wallet`) with comprehensive feature showcases
- **📚 Educational Glossary**: Interactive Bitcoin terminology guide with 44 terms and detailed explanations
- **🔍 SEO Optimized**: Custom robots.txt, sitemap, and metadata for maximum search engine visibility
- **🍪 Privacy Compliant**: Cookie consent system with Google Analytics gating
- **🎨 Modern UI**: Tailwind CSS + shadcn/ui + Radix primitives with light/dark theme support
- **📱 Responsive Design**: Mobile-first approach with optimized user experience across all devices

---

## 🛠️ Tech Stack

- **Frameworks**: Next.js 16.1.1 (App Router), React 19.2.3, and TypeScript 5.9.3
- **Styling**: Tailwind CSS, shadcn/ui, Radix primitives
- **UX**: Embla Carousel, Lucide icons
- **SEO**: App Router metadata routes (`robots.ts`, `sitemap.ts`)
- **Development**: Model Context Protocol (MCP) server enabled for AI coding agents
- **Deployment**: Firebase App Hosting

---


## 🚀 Quick Start (TL;DR)

```bash
# 1. Clone and install
git clone https://github.com/BitSleuthAI/Website.git
cd Website
npm install

# 2. (Optional) Set up environment variables
cp .env.example .env.local
# Edit .env.local if you need Google Analytics

# 3. Start development server
npm run dev
# Visit http://localhost:9002

# 4. Verify everything works
npm run ci  # Runs lint + typecheck + test + build
```

**You're ready to develop!** All environment variables are optional for local development.

---

## 🚀 Development Workflow

### Prerequisites
- **Node.js**: 18+ (20+ recommended)
- **npm**: Latest version (11.7.0 configured via `packageManager`)
- **Git**: For version control

### Local Development

1. **Clone and Install:**
   ```bash
   git clone https://github.com/BitSleuthAI/Website.git
   cd Website
   npm install
   ```

2. **Environment Setup (Optional):**
   ```bash
   # Copy the example environment file
   cp .env.example .env.local
   
   # Edit .env.local and add your values (all optional for development):
   # - NEXT_PUBLIC_GA_MEASUREMENT_ID: Google Analytics tracking ID
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   # Server runs on http://localhost:9002
   ```

4. **Available Scripts:**
   ```bash
   npm run dev          # Development server with Turbopack (port 9002)
   npm run build        # Production build
   npm run start        # Production server
   npm run lint         # ESLint checking
   npm run typecheck    # TypeScript type checking
   npm run test         # Run Vitest tests
   npm run ci           # Full CI pipeline (lint + typecheck + test + build)
   ```

### Git Workflow
- **Base Branch**: Always create feature branches from `dev` (not `main`)
- **Branch Naming**: Use prefixes like `feature/`, `fix/`, `docs/`
- **Commit Messages**: Use conventional commits (`feat:`, `fix:`, `docs:`, etc.)
- See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed workflow guidelines

### Code Quality
- **TypeScript**: Strict type checking enabled (`strict: true` in tsconfig.json)
- **ESLint**: Next.js recommended configuration with flat config (eslint.config.mjs)
- **Prettier**: Code formatting (via ESLint)
- **No console.log**: Remove all console statements before committing
- **Type Safety**: Avoid using `any` type; use proper types or `unknown` with type guards

### IDE Setup (VSCode Recommended)

**Recommended Extensions** (will prompt on first open):
- `bradlc.vscode-tailwindcss` - Tailwind CSS IntelliSense
- `dbaeumer.vscode-eslint` - ESLint integration
- `esbenp.prettier-vscode` - Prettier code formatting

**Configuration Included**:
- `.vscode/settings.json` - Tailwind CSS IntelliSense and validation settings
- `.vscode/extensions.json` - Recommended extension list
- Tailwind CSS language server included as dev dependency for autocomplete

### Adding shadcn/ui Components

This project uses [shadcn/ui](https://ui.shadcn.com/) for UI components. To add new components:

```bash
# The project is already configured (see components.json)
# Add any shadcn/ui component:
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog

# Components will be added to src/components/ui/
# See available components: https://ui.shadcn.com/docs/components
```

---

## 📁 Project Structure

```
src/
├── app/                         # Next.js App Router
│   ├── page.tsx                # Homepage
│   ├── analyzer/               # Analyzer product page
│   ├── wallet/                 # Wallet product page
│   │   └── download/           # Wallet download page
│   ├── glossary/               # Educational glossary (44 terms)
│   │   ├── page.tsx           # Glossary index
│   │   └── [term]/            # Individual term pages
│   ├── learn/                  # Learning resources page
│   ├── history/                # Company history page
│   ├── ai-training-content/    # AI/LLM training content for AEO (Answer Engine Optimization)
│   ├── privacy-policy/         # Privacy policy page
│   ├── terms-of-service/       # Terms of service page
│   ├── company-information/    # Company information page
│   ├── layout.tsx              # Root layout
│   ├── robots.ts               # SEO robots.txt
│   ├── sitemap.ts              # SEO sitemap
│   ├── actions.ts              # Server actions
│   └── globals.css             # Global styles
├── components/
│   ├── landing/                # Landing page components (27 components)
│   ├── glossary/               # Glossary-specific components
│   ├── ui/                     # shadcn/ui components (40+ components)
│   ├── theme-provider.tsx      # Theme management
│   └── ThemeToggle.tsx         # Theme toggle component
├── hooks/                      # Custom React hooks
│   ├── use-mobile.tsx          # Mobile detection hook
│   └── use-toast.ts            # Toast notifications hook
├── lib/                        # Utility functions
│   ├── utils.ts                # General utilities
│   ├── glossary-metadata.ts    # Glossary metadata helpers
│   ├── structured-data.ts      # SEO structured data
│   └── rate-limit.ts           # Rate limiting utilities
└── public/                     # Static assets
    ├── images/                 # Image assets
    └── documents/              # Document assets
```

---

## 🎯 Available Routes

### Main Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage with overview |
| `/analyzer` | Bitcoin wallet analyzer product page |
| `/wallet` | Bitcoin wallet app product page |
| `/wallet/download` | Wallet download page |
| `/learn` | Learning resources and educational content |
| `/history` | Company history and background |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `/company-information` | Company information |
| `/ai-training-content` | AI/LLM training content for Answer Engine Optimization (AEO) |

### Glossary Routes
| Route | Description |
|-------|-------------|
| `/glossary` | Bitcoin terminology index with 44 terms |
| `/glossary/[term]` | Individual glossary term pages |

**Available glossary terms:**
- Basic Concepts: `address`, `bitcoin`, `btc`, `bit`, `wallet`, `private-key`, `signature`, `cryptography`
- Blockchain: `blockchain`, `block`, `mining`, `hash-rate`, `mempool`, `confirmation`, `utxo`
- Transactions: `transaction-privacy`, `psbt`, `rbf`, `cpfp`, `double-spend`, `dust-limit`, `fee-rate`, `coin-selection`
- Bitcoin Improvement Proposals: `bip32`, `bip39`, `bip44`
- Privacy & Security: `coinjoin`, `payjoin`, `silent-payments`, `passphrase`
- Script & Locking: `scriptpubkey-scriptsig`, `csv`, `cltv`, `htlc`, `miniscript`
- Advanced Features: `segwit`, `taproot`, `schnorr-signature`, `descriptor-wallet`
- Layer 2: `lightning-network`, `sidechain`, `splicing`
- Network: `p2p`, `merkle-tree`

---

## 🔧 Configuration

### Environment Variables

All environment variables are **optional** for local development. The site works fully without any configuration.

Create `.env.local` (gitignored) from the example file:
```bash
cp .env.example .env.local
```

**Available Variables:**

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 tracking ID (for production) | `G-XXXXXXXXXX` |

**Notes:**
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- All environment variables are optional; the site works fully without any configuration
- See `.env.example` for detailed documentation of each variable

### Next.js Configuration

Key settings in `next.config.ts`:
- **MCP Server**: Enabled for AI coding agents (`experimental.mcpServer: true`)
- **Security Headers**: CSP, HSTS, X-Frame-Options, etc. (see Security section below)
- **Image Optimization**: Unoptimized mode for Firebase hosting compatibility
- **Remote Patterns**: Configured for placeholder images

### Tailwind Configuration

Located in `tailwind.config.ts`:
- **Custom Colors**: Bitcoin-inspired theme (orange, slate, neutral palettes)
- **Dark Mode**: Class-based dark mode support (`class` strategy)
- **Responsive Breakpoints**: Standard Tailwind breakpoints (sm, md, lg, xl, 2xl)
- **Animations**: Custom animations via `tailwindcss-animate` plugin
- **CSS Variables**: Theme colors defined as CSS variables for dynamic theming

### shadcn/ui Configuration

Located in `components.json`:
- **Style**: Default style with Radix UI primitives
- **Base Color**: Neutral palette
- **RSC**: React Server Components enabled
- **Aliases**: Pre-configured path aliases (@/components, @/lib, etc.)
- **Icon Library**: Lucide React

### SEO Configuration

The project implements comprehensive SEO optimization:
- **Metadata API**: Custom metadata for each page via Next.js App Router
- **Open Graph**: Social media preview cards for all pages
- **Twitter Cards**: Optimized Twitter/X previews
- **Structured Data**: JSON-LD schemas for rich search results (see `src/lib/structured-data.ts`)
- **Sitemap**: Auto-generated at `/sitemap.xml` via `src/app/sitemap.ts`
- **Robots.txt**: Custom robots configuration via `src/app/robots.ts`
- **Canonical URL's**: Proper canonical tags that prevents duplicate content
- **Dynamic Metadata**: SEO metadata helpers in `src/lib/glossary-metadata.ts`

### Security Configuration

**HTTP Security Headers** (configured in `next.config.ts`):
- **Content-Security-Policy (CSP)**: Restricts resource loading to prevent XSS attacks
  - Allows Google Analytics scripts with strict CSP rules
  - Restricts inline scripts (except for necessary GA tracking)
- **Strict-Transport-Security (HSTS)**: Forces HTTPS with 2-year max-age and preload
- **X-Frame-Options**: Prevents clickjacking attacks (SAMEORIGIN)
- **X-Content-Type-Options**: Prevents MIME sniffing attacks
- **Referrer-Policy**: Controls referrer information leakage
- **Permissions-Policy**: Restricts browser features (camera, microphone, etc.)

**Rate Limiting** (implemented in `src/lib/rate-limit.ts`):
- In-memory rate limiter for serverless environments
- 5 requests per minute per IP address
- IPv4/IPv6 validation to prevent header spoofing
- Proper HTTP 429 responses with Retry-After headers
- Applied to all API endpoints and server actions

See [`docs/archive/SECURITY_AUDIT.md`](docs/archive/SECURITY_AUDIT.md) and [`docs/archive/SECURITY_IMPROVEMENTS.md`](docs/archive/SECURITY_IMPROVEMENTS.md) for detailed security documentation.

### Answer Engine Optimization (AEO)

The `/ai-training-content` route provides comprehensive, structured content specifically designed for AI language models and answer engines (ChatGPT, Gemini, Perplexity, Claude, etc.).

**Purpose:**
- Helps AI tools understand BitSleuth's products, features, and value propositions
- Enables accurate responses when users ask AI assistants about Bitcoin analysis tools or privacy wallets
- Provides structured data that LLMs can easily parse and reference
- Improves discoverability through AI-powered search and conversational interfaces

**Content Included:**
- Platform overview and product descriptions
- Search terms and keywords for AI comprehension
- Technical specifications and architecture details
- Value propositions for different user segments
- Competitive advantages and unique selling points
- SEO keyword strategy and question-based queries
- Educational content and use case studies

**Why This Matters:**
As AI-powered search becomes increasingly prevalent (SearchGPT, Perplexity, Gemini, Claude), optimizing content for LLM comprehension is crucial for visibility. This page ensures that when users ask AI tools questions like "What's the best Bitcoin wallet analyzer?" or "How do I trace Bitcoin transactions?", BitSleuth is accurately represented and recommended.

See [`docs/archive/SEO_STRATEGY.md`](docs/archive/SEO_STRATEGY.md) for the complete SEO and AEO strategy.

---

## 🧪 Testing

### Automated Testing
The project uses **Vitest** for unit and integration testing.

```bash
npm run test        # Run all tests
npm run typecheck   # TypeScript type checking
npm run lint        # ESLint code quality checks
npm run ci          # Full CI pipeline (lint + typecheck + test + build)
```

**Current Test Coverage:**
- `/src/lib/structured-data.test.ts` - SEO structured data generation
- `/src/lib/rate-limit.test.ts` - Rate limiting utilities

### Manual Testing Checklist
Before deploying, verify:
- [ ] All routes load correctly (homepage, analyzer, wallet, glossary, etc.)
- [ ] Responsive design on mobile/tablet/desktop viewports
- [ ] Dark/light theme toggle functions properly
- [ ] Cookie consent banner displays and functions correctly
- [ ] Analytics tracking works (with proper consent gating)
- [ ] SEO metadata displays correctly (check page source)
- [ ] All glossary terms are accessible and load properly
- [ ] Navigation between pages works smoothly

### Performance Testing
Use the following tools to ensure optimal performance:
- **Lighthouse**: Run audits for performance, accessibility, best practices, and SEO
- **Core Web Vitals**: Monitor LCP, FID, and CLS metrics
- **Image Optimization**: Verify all images are optimized and properly sized
- **Bundle Size Analysis**: Check JavaScript bundle sizes remain optimal

---

## 🚀 Deployment

### Firebase App Hosting (Production)

The site is deployed to Firebase App Hosting with automatic deployments on push.

**Live Environments:**
- **Production**: `https://www.bitsleuth.ai` (auto-deploys from `main` branch)
- **Development**: `https://website-dev--bitsleuth.us-central1.hosted.app` (auto-deploys from `dev` branch)

**Configuration Files:**
- `apphosting.prd.yaml` - Production environment configuration
- `apphosting.dev.yaml` - Development environment configuration

**Environment Variables in Firebase:**
Environment variables for production are managed as **Firebase App Hosting secrets**:
1. Go to Firebase Console → App Hosting → Your backend
2. Navigate to "Secrets" tab
3. Add secrets for:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (Google Analytics)

**Deployment Settings:**
- **Max Instances**: 1 (configured in apphosting.*.yaml)
- **Runtime**: Node.js 20+
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

### Manual Deployment

If you need to deploy manually:

```bash
# 1. Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# 2. Login to Firebase
firebase login

# 3. Build the project
npm run build

# 4. Deploy to Firebase App Hosting
# Note: Automatic deployments are configured via GitHub integration
# Manual deployment is typically not needed unless debugging

# For initial setup, connect your repo in Firebase Console:
# Firebase Console → App Hosting → Add backend → Connect GitHub repo
```

### Pre-Deployment Checklist

Before deploying to production:
- [ ] Run full CI pipeline: `npm run ci`
- [ ] Test production build locally: `npm run build && npm run start`
- [ ] Verify all environment variables are set in Firebase secrets
- [ ] Check that security headers are working (inspect network tab)
- [ ] Run Lighthouse audit for performance/SEO/accessibility
- [ ] Verify Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Test on mobile devices (responsive design)
- [ ] Verify dark/light theme toggle works
- [ ] Check that analytics tracking is working (with consent)
- [ ] Update [CHANGELOG.md](CHANGELOG.md) with new changes
- [ ] Test all routes load correctly
- [ ] Verify sitemap.xml and robots.txt are generating properly

### Deployment Verification

After deployment, verify:
```bash
# Check production site is live
curl -I https://www.bitsleuth.ai

# Verify security headers are present
curl -I https://www.bitsleuth.ai | grep -i "strict-transport-security\|x-frame-options\|content-security-policy"

# Check sitemap is accessible
curl https://www.bitsleuth.ai/sitemap.xml

# Verify robots.txt
curl https://www.bitsleuth.ai/robots.txt
```

### Environment Configuration

| Environment | URL | Branch | Auto-Deploy |
|-------------|-----|--------|-------------|
| Production | https://www.bitsleuth.ai | `main` | ✅ Yes |
| Development | https://website-dev--bitsleuth.us-central1.hosted.app | `dev` | ✅ Yes |
| Local | http://localhost:9002 | Any | N/A |

---

## 📊 Analytics & Monitoring

### Google Analytics

**Implementation:**
- Privacy-compliant Google Analytics 4 (GA4) integration
- Consent-gated tracking (user must accept cookies)
- Custom events for user interactions
- Conversion tracking for sign-ups and form submissions

**Setup:**
```bash
# Add GA4 Measurement ID to .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Cookie Consent:**
- Cookie banner displays on first visit
- User consent required before tracking
- Consent stored in localStorage
- Analytics scripts only load after consent

**Tracked Events:**
- Page views (automatic)
- Navigation clicks
- Form submissions
- CTA button clicks
- Glossary term views
- Download button clicks

### Performance Monitoring

**Core Web Vitals:**
Monitor these key metrics for SEO and UX:
- **LCP (Largest Contentful Paint)**: Target < 2.5s
- **FID (First Input Delay)**: Target < 100ms
- **CLS (Cumulative Layout Shift)**: Target < 0.1

**Tools for Monitoring:**
```bash
# Run Lighthouse audit
npx lighthouse https://www.bitsleuth.ai --view

# Check Core Web Vitals in Chrome DevTools
# 1. Open DevTools (F12)
# 2. Go to "Lighthouse" tab
# 3. Run audit for Performance, Accessibility, SEO

# Analyze bundle size
npm run build
# Check .next/build-manifest.json for bundle sizes
```

**Performance Best Practices:**
- Images are optimized and lazy-loaded
- JavaScript is code-split by route
- Server Components reduce client-side bundle
- Fonts are self-hosted for performance
- Critical CSS is inlined

### Error Monitoring

For production error tracking (if needed):
```bash
# Options to consider:
# - Sentry (https://sentry.io)
# - LogRocket (https://logrocket.com)
# - Datadog RUM (https://www.datadoghq.com)

# Add to .env.local:
# NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

### SEO Performance Tracking

**Tools to Monitor SEO:**
- Google Search Console for indexing and ranking
- Google Analytics for organic traffic
- Ahrefs/SEMrush for keyword rankings (if subscribed)
- Answer engines (SearchGPT, Perplexity) for AI search visibility

**Key SEO Metrics:**
- Organic search traffic
- Keyword rankings for Bitcoin terms
- Click-through rate (CTR) from search results
- Page indexing status
- Core Web Vitals scores

---

## 🤖 Model Context Protocol (MCP)

### What is MCP?

The project has **MCP server enabled** (`experimental.mcpServer: true` in `next.config.ts`). This allows AI coding agents (like GitHub Copilot, Cursor, or Claude) to better understand and work with the codebase.

**Benefits:**
- AI assistants can read project context and structure
- Better code suggestions based on your codebase
- Improved understanding of project conventions
- Context-aware refactoring suggestions

**Configuration:**
- Enabled in `next.config.ts`
- No additional setup required for development
- AI agents automatically use MCP when available

**Documentation:**
- See [`docs/archive/MCP_SERVER.md`](docs/archive/MCP_SERVER.md) for details
- See [AGENTS.md](AGENTS.md) for AI agent configuration

**Using with AI Assistants:**
- GitHub Copilot: Works automatically in VSCode
- Cursor: Detects MCP configuration automatically
- Claude/ChatGPT: Can read project context if MCP-enabled

---

## 🤝 Contributing

We welcome contributions to the BitSleuth Website! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on the following areas:

- 📚 **Documentation Organization**: All markdown documentation files must be stored in the `docs/` folder
- 🚀 Getting started with development
- 💻 Development workflow and branch strategy
- 📝 Code style and standards
- 🧪 Testing requirements
- 📄 Documentation best practices
- 🔍 Pull request process
- 🎯 Code review guidelines

### Quick Reference

**Branch Naming**: `feature/description`, `fix/description`, or `docs/description`

**Commit Messages**: Use conventional commits (`feat:`, `fix:`, `docs:`, etc.)

**Documentation Files**: All markdown documentation files (e.g., `.md` files) should be stored in the `docs/` folder for consistency and easy discovery

For complete guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 📚 Documentation

### Quick Reference
- 📖 **This README** - Start here for overview and setup
- 🤝 **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contributing guidelines and workflow
- 📋 **[CHANGELOG.md](CHANGELOG.md)** - Version history and release notes
- 🤖 **[AGENTS.md](AGENTS.md)** - AI agent and copilot configuration
- 📁 **[docs/](docs/)** - All documentation files (see below)

### Core Documentation (in `docs/` folder)

**Essential Reading:**
- **[`docs/PROJECT_SUMMARY.md`](docs/PROJECT_SUMMARY.md)** - **START HERE!** Comprehensive project overview, architecture, and current state
- **[`docs/PRD.md`](docs/PRD.md)** - Product Requirements Document with objectives, success metrics, and roadmap
- **[`docs/todo.md`](docs/todo.md)** - UI/UX improvement suggestions and visual enhancement ideas

**Archived Documentation** (in `docs/archive/`):
- **[`docs/archive/SEO_STRATEGY.md`](docs/archive/SEO_STRATEGY.md)** - Complete SEO and AEO optimization strategy
- **[`docs/archive/MCP_SERVER.md`](docs/archive/MCP_SERVER.md)** - Model Context Protocol server documentation
- **[`docs/archive/IMPLEMENTATION_HISTORY.md`](docs/archive/IMPLEMENTATION_HISTORY.md)** - Historical implementation details and decisions
- **[`docs/archive/SECURITY_AUDIT.md`](docs/archive/SECURITY_AUDIT.md)** - Security audit findings and recommendations
- **[`docs/archive/SECURITY_IMPROVEMENTS.md`](docs/archive/SECURITY_IMPROVEMENTS.md)** - Implemented security enhancements
- **[`docs/archive/TAILWIND_LANGUAGE_SERVER.md`](docs/archive/TAILWIND_LANGUAGE_SERVER.md)** - Tailwind CSS IntelliSense setup guide
- [`docs/archive/README.md`](docs/archive/README.md) - Complete list of archived documentation

**Documentation Organization:**
All markdown documentation files (`.md`) are stored in the `docs/` folder for consistency and easy discovery. When creating new documentation, place it in this directory.

### Framework Documentation
- [Next.js 16 Documentation](https://nextjs.org/docs) - App Router, Server Components, Metadata API
- [React 19 Documentation](https://react.dev/) - Hooks, Server Components, Streaming
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility classes and configuration
- [shadcn/ui Components](https://ui.shadcn.com/) - Component library and examples
- [Radix UI Primitives](https://www.radix-ui.com/) - Accessible component primitives
- [Lucide Icons](https://lucide.dev/) - Icon library reference

---

## 💡 Common Developer Tasks

### Adding a New Page

1. **Create the page file** in `src/app/`:
   ```bash
   # Example: Create a new "about" page
   mkdir -p src/app/about
   touch src/app/about/page.tsx
   ```

2. **Add page content** with metadata:
   ```tsx
   import { Metadata } from 'next';

   export const metadata: Metadata = {
     title: 'About Us | BitSleuth',
     description: 'Learn about BitSleuth and our mission',
   };

   export default function AboutPage() {
     return (
       <div className="container mx-auto px-4 py-8">
         <h1>About Us</h1>
       </div>
     );
   }
   ```

3. **Add route to navigation** (if needed) in `src/components/landing/Header.tsx`

4. **Update sitemap** - Routes are auto-discovered by Next.js, but verify in `src/app/sitemap.ts`

### Adding a New Glossary Term

1. **Create term folder** in `src/app/glossary/`:
   ```bash
   mkdir -p src/app/glossary/your-term-name
   touch src/app/glossary/your-term-name/page.tsx
   ```

2. **Use the glossary template** (copy from existing term like `src/app/glossary/bitcoin/page.tsx`)

3. **Add metadata** using the helper:
   ```tsx
   import { generateGlossaryMetadata } from '@/lib/glossary-metadata';

   export const metadata = generateGlossaryMetadata({
     term: 'Your Term',
     description: 'Brief description for SEO',
   });
   ```

4. **Update glossary index** in `src/app/glossary/page.tsx` if needed

### Adding a New UI Component

Using shadcn/ui (recommended):
```bash
# Add a pre-built component
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog

# Component will be added to src/components/ui/
# Import and use: import { Button } from '@/components/ui/button'
```

Creating a custom component:
```bash
# Landing page components go in src/components/landing/
touch src/components/landing/YourComponent.tsx

# Use TypeScript and proper types
# Follow existing component patterns
# Support dark mode with Tailwind's dark: prefix
```

### Running Specific Tests

```bash
# Run all tests
npm run test

# Run specific test file
npm run test src/lib/structured-data.test.ts

# Run tests in watch mode (for TDD)
npm run test -- --watch
```

### Checking Type Errors

```bash
# Full type check
npm run typecheck

# Type check specific file (using tsc)
npx tsc --noEmit src/app/page.tsx

# Type check and watch
npx tsc --noEmit --watch
```

### Debugging Production Issues

```bash
# Build and run production build locally
npm run build
npm run start

# The production server runs on port 9002 by default
# Visit http://localhost:9002

# Check for build errors
npm run build 2>&1 | tee build.log

# Analyze bundle size
npm run build -- --analyze  # (if configured)
```

### Adding Environment Variables

1. **Add to `.env.example`** with documentation
2. **Add to `.env.local`** for local development (gitignored)
3. **Add to Firebase App Hosting secrets** for production
4. **Update README.md** configuration section
5. **Prefix with `NEXT_PUBLIC_`** if needed in browser

---

## 🐛 Troubleshooting

### Common Issues

**Port 9002 already in use:**
```bash
# Find and kill process using port 9002
lsof -ti:9002 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

**Build errors after pulling latest changes:**
```bash
# Clear Next.js cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

**TypeScript errors:**
```bash
# Check for type errors
npm run typecheck

# Common fixes:
# 1. Restart TypeScript server in VSCode (Cmd/Ctrl + Shift + P → "Restart TS Server")
# 2. Clear .next folder: rm -rf .next
# 3. Check for missing type definitions: npm install --save-dev @types/node
```

**ESLint errors:**
```bash
# Run ESLint
npm run lint

# Auto-fix issues
npm run lint -- --fix

# Check specific file
npx eslint src/app/page.tsx
```

**Tailwind CSS not working:**
```bash
# 1. Check if Tailwind classes are being purged
# 2. Restart dev server (Turbopack sometimes needs restart)
# 3. Clear .next cache: rm -rf .next
# 4. Verify tailwind.config.ts has correct content paths
# 5. Check that globals.css is imported in app/layout.tsx
```

**Dark mode not switching:**
```bash
# 1. Check browser's localStorage for theme preference
# 2. Verify theme-provider is wrapping the app in app/layout.tsx
# 3. Check that components use dark: prefix for dark mode styles
# 4. Clear browser cache and localStorage
```

**Environment variables not working:**
```bash
# 1. Restart dev server after adding new variables
# 2. Verify .env.local exists and has correct format
# 3. Check variable names (NEXT_PUBLIC_ prefix for client-side)
# 4. Variables are loaded at build time, not runtime
```

**Deployment fails:**
```bash
# 1. Run CI pipeline locally first: npm run ci
# 2. Check Firebase App Hosting logs in Firebase Console
# 3. Verify all secrets are set in Firebase
# 4. Ensure build completes without errors: npm run build
# 5. Check that package.json has correct build script
```

**Images not loading:**
```bash
# 1. Check that images are in public/ folder
# 2. Verify image paths start with / (e.g., /images/logo.png)
# 3. Check next.config.ts images configuration
# 4. For external images, add domain to remotePatterns in next.config.ts
```

**Hydration errors:**
```bash
# Common causes:
# 1. Client/server HTML mismatch
# 2. Using browser-only APIs in Server Components
# 3. Improper use of useEffect/useState
# 
# Solutions:
# 1. Use 'use client' directive for client-only components
# 2. Wrap browser APIs in useEffect
# 3. Ensure consistent rendering between server and client
```

### Getting Help

Can't find a solution? Try these steps:

1. **Check documentation**: Review this README and files in `docs/` folder
2. **Search existing issues**: Look for similar problems in GitHub Issues
3. **Check CHANGELOG.md**: Recent changes might explain new behavior
4. **Run diagnostics**:
   ```bash
   # Full health check
   npm run ci
   
   # Check versions
   node --version  # Should be 20+
   npm --version   # Should be 11.7.0
   
   # Verify dependencies
   npm list --depth=0
   ```
5. **Create an issue**: If problem persists, create a GitHub issue with:
   - Error messages (full stack trace)
   - Steps to reproduce
   - Environment details (OS, Node version, npm version)
   - Screenshots if applicable

### Debug Mode

Enable verbose logging for troubleshooting:

```bash
# Next.js debug mode
DEBUG=* npm run dev

# Show full error traces
NODE_OPTIONS='--trace-warnings' npm run dev

# TypeScript verbose
npm run typecheck -- --verbose
```

---

## 🔐 Security

### Security Features

This project implements multiple layers of security:

**HTTP Security Headers** (see `next.config.ts`):
- Content-Security-Policy (CSP) to prevent XSS attacks
- Strict-Transport-Security (HSTS) to enforce HTTPS
- X-Frame-Options to prevent clickjacking
- X-Content-Type-Options to prevent MIME sniffing
- Referrer-Policy for privacy controls
- Permissions-Policy to restrict browser features

**Rate Limiting** (see `src/lib/rate-limit.ts`):
- In-memory rate limiter for API endpoints
- 5 requests per minute per IP address
- IPv4/IPv6 validation to prevent header spoofing

**Input Validation & Sanitization**:
- Zod schemas for form validation
- Email validation on all contact forms
- Control character sanitization in error messages
- Log injection attack prevention

**Development Best Practices**:
- No secrets committed to repository (.env.local is gitignored)
- TypeScript strict mode for type safety
- ESLint security rules enabled
- Dependency vulnerability scanning (npm audit)

### Security Checklist

Before committing code:
- [ ] No API keys or secrets in code
- [ ] User input is validated and sanitized
- [ ] No `console.log` statements with sensitive data
- [ ] External URLs are validated
- [ ] File uploads are validated (if applicable)
- [ ] SQL/NoSQL injection prevented (use prepared statements)
- [ ] XSS prevention (React escapes by default, but verify)
- [ ] CSRF tokens used for sensitive actions
- [ ] Rate limiting on API endpoints
- [ ] Authentication/authorization checks (if applicable)

### Reporting Security Issues

If you discover a security vulnerability:
1. **DO NOT** open a public GitHub issue
2. Email security concerns to: `security@bitsleuth.ai`
3. Include detailed reproduction steps
4. Allow 90 days for fix before public disclosure

### Security Documentation

For detailed security information:
- [`docs/archive/SECURITY_AUDIT.md`](docs/archive/SECURITY_AUDIT.md) - Security audit findings
- [`docs/archive/SECURITY_IMPROVEMENTS.md`](docs/archive/SECURITY_IMPROVEMENTS.md) - Implemented improvements

---

## ❓ FAQ

### General Questions

**Q: Do I need environment variables to run the project locally?**  
A: No! All environment variables are optional. The site runs fully without any configuration. Only add them if you need Google Analytics.

**Q: What port does the dev server use?**  
A: Port 9002 by default. You can change it with `npm run dev -- -p 3001`.

**Q: Which branch should I base my work on?**  
A: Always use `dev` as your base branch. Create feature branches from `dev`, not from `main`.

**Q: Can I use the site without Firebase?**  
A: Yes! Firebase is only for production hosting. The site works completely locally without Firebase.

### Development Questions

**Q: How do I add a new page?**  
A: Create a folder in `src/app/your-page/` with a `page.tsx` file. See [Common Developer Tasks](#-common-developer-tasks) section.

**Q: How do I add a new UI component?**  
A: Use `npx shadcn@latest add <component>` for pre-built components, or create custom ones in `src/components/landing/`. See [Adding shadcn/ui Components](#adding-shadcnui-components) section.

**Q: Why is TypeScript complaining about my code?**  
A: The project uses strict TypeScript mode. Run `npm run typecheck` to see all errors. Avoid using `any` type; use proper types instead.

**Q: How do I test my changes before deploying?**  
A: Run `npm run ci` to execute the full test suite (lint + typecheck + test + build). This is what runs in the CI pipeline.

**Q: Can I use Tailwind v4?**  
A: No, the project uses Tailwind v3.4.x. Do not upgrade to v4 without thorough testing and team approval.

### Styling Questions

**Q: How do I support dark mode in my components?**  
A: Use Tailwind's `dark:` prefix for dark mode styles. Example: `className="bg-white dark:bg-gray-900"`. The theme provider handles the switching.

**Q: Which color palette should I use?**  
A: Use the Bitcoin-inspired palette defined in `tailwind.config.ts`. Primary colors are orange shades, neutrals are slate/gray.

**Q: Can I add custom CSS?**  
A: Use Tailwind utility classes instead of custom CSS whenever possible. If you must add custom CSS, add it to `src/app/globals.css` with proper scoping.

### SEO Questions

**Q: How do I add SEO metadata to a new page?**  
A: Export a `metadata` object from your page component. Example:
```tsx
export const metadata: Metadata = {
  title: 'Page Title | BitSleuth',
  description: 'Page description for SEO',
};
```

**Q: Do I need to update the sitemap manually?**  
A: No, the sitemap is auto-generated from your routes. Just create the page file and it will be included.

**Q: How do I add structured data (JSON-LD)?**  
A: Use the helper functions in `src/lib/structured-data.ts`. See existing pages for examples.

### Deployment Questions

**Q: How do I deploy to production?**  
A: Production deploys automatically when you merge to `main`. No manual deployment needed.

**Q: How do I test the production build locally?**  
A: Run `npm run build` then `npm run start`. The production server runs on port 9002 by default.

**Q: Where do I set production environment variables?**  
A: In Firebase App Hosting secrets (Firebase Console → App Hosting → Secrets). Never commit secrets to the repository.

**Q: Why is my deployment failing?**  
A: Check that `npm run ci` passes locally. View deployment logs in Firebase Console → App Hosting → Rollouts.

### Contribution Questions

**Q: How do I contribute to the project?**  
A: Read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on workflow, code standards, and pull request process.

**Q: What commit message format should I use?**  
A: Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`. Example: `feat: add new glossary term for taproot`.

**Q: How do I know if my code follows the style guidelines?**  
A: Run `npm run lint` and `npm run typecheck`. Both must pass before submitting a PR.

**Q: Do I need to write tests for my changes?**  
A: If you're adding new utility functions or business logic, yes. UI components typically don't need tests unless they have complex logic. Follow existing test patterns in `src/lib/`.

### Still Have Questions?

- Check [`docs/PROJECT_SUMMARY.md`](docs/PROJECT_SUMMARY.md) for comprehensive project overview
- Review [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- Search [existing GitHub issues](https://github.com/BitSleuthAI/Website/issues)
- Create a new issue with your question

---

## 📄 License

**PROPRIETARY SOFTWARE** - Copyright (c) 2025 BitSleuth. All rights reserved.

This software is the proprietary and confidential information of BitSleuth. 
It is provided solely for use by BitSleuth and its authorized personnel. 
This software is not intended for public distribution or open source use.

For licensing inquiries, contact: legal@bitsleuth.ai

---

## 🙏 Acknowledgments

- **Next.js Team** for the excellent React framework
- **Firebase** for reliable hosting platform
- **shadcn/ui** for beautiful component library
- **Tailwind CSS** for utility-first styling
- **Bitcoin Community** for inspiration and education

---

**Built with ❤️ by the BitSleuth Team**
