# BitSleuth Website - Project Summary

**Last Updated:** December 22, 2025  
**Status:** Production Ready ✅  
**Purpose:** Comprehensive overview of the BitSleuth website project

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Architecture & Structure](#architecture--structure)
4. [Key Features & Implementations](#key-features--implementations)
5. [SEO & Discoverability](#seo--discoverability)
6. [Security](#security)
7. [Development & Deployment](#development--deployment)
8. [Code Quality & Standards](#code-quality--standards)
9. [Maintenance Guidelines](#maintenance-guidelines)
10. [Future Roadmap](#future-roadmap)

---

## Project Overview

BitSleuth is a comprehensive Next.js 16 website serving as the primary marketing and educational hub for Bitcoin analysis tools. The platform provides product landing pages, an extensive educational glossary, and implements best practices for SEO, accessibility, and performance.

### Core Mission
- **Primary:** Drive user acquisition for BitSleuth's Bitcoin wallet analyzer
- **Secondary:** Educate users about Bitcoin concepts, privacy, and security
- **Tertiary:** Establish BitSleuth as a trusted authority in Bitcoin analysis

### Live Deployments
- **Production:** https://www.bitsleuth.ai
- **Development:** https://website-dev--bitsleuth.us-central1.hosted.app

### Key Metrics
- **44 Educational Glossary Terms** - Fully optimized for AI search engines
- **143 Source Files** - TypeScript/TSX codebase
- **40+ UI Components** - shadcn/ui component library
- **32 Routes** - Generated and optimized for production
- **100% SEO Coverage** - All pages indexed and optimized

---

## Technology Stack

### Core Framework
- **Next.js:** 16.0.10 (App Router)
- **React:** 19.2.0
- **TypeScript:** 5.9.3
- **Node.js:** 18+ (20+ recommended)

### Styling & UI
- **Tailwind CSS:** 3.4.18 (stable v3)
- **shadcn/ui:** Component library with 40+ components
- **Radix UI:** Accessible primitive components
- **Lucide Icons:** 475+ icon library
- **CSS Variables:** Dynamic theming support

### Development Tools
- **Turbopack:** Next.js development bundler
- **Vitest:** Unit testing framework
- **ESLint:** Code quality and linting
- **TypeScript Strict Mode:** Type safety enforcement
- **MCP Server:** AI coding agent integration
- **Tailwind CSS Language Server:** IDE IntelliSense and autocomplete for Tailwind classes

### Deployment & Hosting
- **Firebase App Hosting:** Production and staging environments
- **Google Analytics:** Privacy-compliant analytics
- **Google Sheets API:** Waitlist management

### Key Dependencies
```json
{
  "next": "16.0.10",
  "react": "19.2.0",
  "typescript": "5.9.3",
  "tailwindcss": "3.4.18",
  "zod": "3.24.2",
  "react-hook-form": "7.54.2"
}
```

---

## Architecture & Structure

### Directory Structure
```
/home/runner/work/Website/Website/
├── .github/               # GitHub workflows and CI/CD
│   ├── copilot-instructions.md
│   ├── agents/           # Custom AI agents
│   └── workflows/        # GitHub Actions
├── docs/                 # Documentation (centralized)
│   ├── PRD.md
│   ├── PROJECT_SUMMARY.md (this file)
│   ├── archive/          # Historical documentation
│   └── todo.md
├── public/               # Static assets
│   ├── images/
│   └── documents/
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── page.tsx     # Homepage
│   │   ├── layout.tsx   # Root layout
│   │   ├── globals.css  # Global styles
│   │   ├── robots.ts    # SEO robots.txt
│   │   ├── sitemap.ts   # Dynamic sitemap
│   │   ├── actions.ts   # Server actions
│   │   ├── analyzer/    # Analyzer product page
│   │   ├── wallet/      # Wallet product pages
│   │   ├── glossary/    # 44 educational terms
│   │   ├── learn/       # Learning resources
│   │   ├── history/     # Company history
│   │   ├── ai-training-content/  # AEO content
│   │   ├── privacy-policy/
│   │   ├── terms-of-service/
│   │   └── company-information/
│   ├── components/
│   │   ├── landing/     # 27 landing page components
│   │   ├── glossary/    # Glossary-specific components
│   │   ├── ui/          # 40+ shadcn/ui components
│   │   ├── theme-provider.tsx
│   │   └── ThemeToggle.tsx
│   ├── hooks/           # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   └── lib/             # Utility libraries
│       ├── utils.ts
│       ├── glossary-metadata.ts     # 29.5 KB metadata
│       ├── structured-data.ts       # 23 KB schema generators
│       ├── rate-limit.ts            # Security utilities
│       └── *.test.ts                # Test files
├── tailwind.config.ts   # Tailwind v3 configuration
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies
└── .mcp.json           # MCP server configuration
```

### Key Routes

#### Main Pages
| Route | Description | Status |
|-------|-------------|--------|
| `/` | Homepage with product overview | ✅ |
| `/analyzer` | Bitcoin wallet analyzer product page | ✅ |
| `/wallet` | Bitcoin wallet app product page | ✅ |
| `/wallet/download` | Wallet download page | ✅ |
| `/learn` | Learning resources hub | ✅ |
| `/history` | Company history | ✅ |
| `/privacy-policy` | Privacy policy | ✅ |
| `/terms-of-service` | Terms of service | ✅ |
| `/company-information` | Company details | ✅ |
| `/ai-training-content` | AI/LLM training content (AEO) | ✅ |

#### Glossary Routes (44 Terms)
- `/glossary` - Main glossary index
- `/glossary/[term]` - Individual term pages

**Term Categories:**
- **Wallet Basics:** address, wallet, private-key, signature, passphrase
- **Bitcoin Fundamentals:** bitcoin, btc, bit, blockchain, block, mining
- **Bitcoin Improvement Proposals:** bip32, bip39, bip44
- **Privacy & Security:** coinjoin, payjoin, silent-payments, transaction-privacy
- **Technical Concepts:** utxo, mempool, hash-rate, confirmation, fee-rate
- **Advanced Features:** segwit, taproot, schnorr-signature, descriptor-wallet
- **Layer 2:** lightning-network, sidechain, splicing
- **Scripting:** scriptpubkey-scriptsig, csv, cltv, htlc, miniscript
- **Network:** p2p, merkle-tree
- **Transactions:** psbt, rbf, cpfp, double-spend, dust-limit, coin-selection
- **Cryptography:** cryptography

---

## Key Features & Implementations

### 1. Answer Engine Optimization (AEO)
**Status:** ✅ 100% Complete (44/44 pages)  
**Date Completed:** November 2024

All 44 glossary pages are optimized for AI-powered search engines (ChatGPT, Claude, Gemini, Perplexity).

**Implementation:**
- **Structured Data (JSON-LD):** Every page includes:
  - `DefinedTerm` schema for glossary entries
  - `Article` schema for educational content
  - `BreadcrumbList` schema for navigation
  - `LearningResource` schema for learning hub positioning
- **SEO Metadata:** Dynamic title, description, keywords, Open Graph tags
- **Internal Linking:** Strategic connections between related concepts
- **Knowledge Graph:** Interconnected learning paths

**Core Infrastructure:**
- `src/lib/glossary-metadata.ts` (29.5 KB) - Comprehensive metadata for all terms
- `src/lib/structured-data.ts` (23 KB) - 6 schema generators
- `src/components/glossary/GlossaryPageWrapper.tsx` - Reusable wrapper component

**Expected Impact:**
- Better AI search visibility for "What is [term]?" queries
- Featured snippets in traditional search results
- Positioned as authoritative Bitcoin education resource

### 2. Dynamic Sitemap Generation
**Status:** ✅ Active  
**Date Implemented:** November 2024

Sitemap automatically includes all glossary terms by reading the filesystem, eliminating manual updates.

**Location:** `src/app/sitemap.ts`

**Features:**
- Automatic detection of all glossary directories
- No manual updates needed when adding terms
- Proper priorities and change frequencies
- Currently includes all 44 terms

### 3. AI Bot Optimization
**Status:** ✅ Active  
**Date Implemented:** November 2024

Explicit crawler permissions for major AI search engines.

**Location:** `src/app/robots.ts`

**Supported Bots:**
- GPTBot (OpenAI/ChatGPT)
- ChatGPT-User (OpenAI)
- PerplexityBot (Perplexity AI)
- Claude-Web (Anthropic)
- ClaudeBot (Anthropic)
- Google-Extended (Google AI)
- anthropic-ai (Anthropic)
- Bytespider (ByteDance)

### 4. Edge-to-Edge Viewport Implementation
**Status:** ✅ Complete  
**Date Implemented:** November 2025

Modern "native app" experience on supported mobile devices.

**Key Features:**
- `viewport-fit=cover` meta tag
- CSS safe area insets for notches and home indicators
- Component-level safe area support
- Graceful degradation on unsupported browsers

**Supported Components:**
- Header (status bar/notch awareness)
- Footer (home indicator awareness)
- Toast notifications
- Sheet/Mobile menu
- Cookie consent banner

**Browser Support:**
- iOS Safari/Chrome 11.2+
- Android Chrome 69+
- Graceful fallback on older browsers

### 5. Security Hardening
**Status:** ✅ Complete  
**Date Implemented:** December 2025

Comprehensive security measures implemented following industry best practices.

**Security Features:**

**a) Security Headers (next.config.ts):**
- Content-Security-Policy (CSP)
- Strict-Transport-Security (HSTS)
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- Permissions-Policy (camera, microphone, geolocation disabled)

**b) Rate Limiting (`src/lib/rate-limit.ts`):**
- In-memory rate limiter with configurable presets
- IP-based tracking with validation
- Proper HTTP 429 responses
- Applied to `/api/waitlist` endpoint (5 requests/minute)
- Lazy cleanup for serverless environments

**c) Input Validation:**
- Zod schema validation for all forms
- Email validation using Zod email schema
- Slug validation with strict character whitelist
- Protection against XSS, SQL injection, path traversal

**d) Security Audit Results:**
- ✅ npm audit: 0 vulnerabilities
- ✅ CodeQL analysis: 0 alerts
- ✅ No hardcoded secrets
- ✅ Environment-aware error logging

### 6. Tailwind CSS v3 Configuration
**Status:** ✅ Stable  
**Current Version:** 3.4.18

**Why v3 (Not v4):**
- v3 is production-ready and stable
- All shadcn/ui components designed for v3
- Existing `tailwind.config.ts` works perfectly
- Ecosystem compatibility

**Configuration:**
- TypeScript configuration file
- Custom Bitcoin-inspired color palette
- Dark/light mode support
- Custom animations and transitions
- Responsive breakpoints

**Future Migration:** Documented path to v4 when ecosystem is ready

### 7. Component Library Updates
**Status:** ✅ Up to Date  
**Last Updated:** January 2025

All Radix UI primitives updated to latest versions:
- 21 Radix packages updated (minor/patch versions)
- `tailwind-merge` 3.4.0
- `shadcn` CLI 3.5.0
- All updates non-breaking
- Zero code changes required

### 8. MCP Server Integration
**Status:** ✅ Active  
**Purpose:** Enhanced AI coding agent support

**Configuration Files:**
- `.mcp.json` - Server configuration
- `next.config.ts` - Experimental flag enabled

**MCP Servers:**
- `chrome-devtools-mcp@latest` - Chrome DevTools integration
- `next-devtools-mcp@latest` - Next.js development tools

**Requirements:**
- Node.js v20.19+
- npm or pnpm

---

## SEO & Discoverability

### SEO Strategy
**Status:** ✅ Fully Implemented

### Technical SEO
- ✅ Dynamic sitemap with automatic glossary inclusion
- ✅ Robots.txt optimization with AI bot permissions
- ✅ Mobile-first responsive design
- ✅ Page speed optimization
- ✅ Core Web Vitals compliance
- ✅ Structured data (JSON-LD) on all pages
- ✅ Canonical URLs to prevent duplicate content
- ✅ Open Graph and Twitter Card tags

### Content SEO
- ✅ 44 glossary terms with comprehensive definitions
- ✅ AI training content page for LLM comprehension
- ✅ Optimized metadata (title, description, keywords)
- ✅ Internal linking strategy
- ✅ Breadcrumb navigation
- ✅ Educational content positioning

### Target Keywords

**Primary Keywords:**
- bitcoin wallet analyzer
- blockchain analysis tool
- bitcoin privacy wallet
- cryptocurrency forensics
- bitcoin security tools

**Long-tail Keywords:**
- AI-powered bitcoin wallet analysis
- professional blockchain forensics software
- privacy-first bitcoin wallet
- bitcoin OPSEC risk detection
- non-custodial bitcoin storage

**Question-based Keywords:**
- What is [Bitcoin term]? (44 optimized terms)
- How to analyze bitcoin wallets
- Best bitcoin privacy wallet
- How to trace bitcoin transactions

### AI Search Engine Optimization

**Answer Engine Optimization (AEO):**
- Comprehensive structured data for AI comprehension
- Learning hub positioning
- Knowledge graph construction via internal links
- Target AI platforms: ChatGPT, Claude, Gemini, Perplexity

**Expected Visibility:**
- "What is...?" queries (e.g., "What is BIP39?")
- "How does...work?" queries
- "[Term] explained" queries
- "Define [term]" queries

---

## Security

### Security Posture
**Overall Rating:** 🟢 EXCELLENT  
**Last Audit:** December 16, 2025

### Security Measures

#### 1. Dependency Security
- ✅ npm audit: 0 vulnerabilities
- ✅ Regular dependency updates
- ✅ Override for vulnerable `tmp` package

#### 2. Code Security
- ✅ CodeQL analysis: 0 alerts
- ✅ No hardcoded secrets
- ✅ Environment variables for sensitive data
- ✅ No SQL injection vectors (serverless)
- ✅ No command injection (no exec/spawn)
- ✅ No eval() usage

#### 3. Input Validation
- ✅ Zod schema validation
- ✅ Strict slug validation with character whitelist
- ✅ Email validation (Zod email schema)
- ✅ Protection against XSS, path traversal, URL manipulation

#### 4. Rate Limiting
- ✅ In-memory rate limiter
- ✅ IP-based tracking with validation
- ✅ Applied to API endpoints
- ✅ Proper HTTP 429 responses

#### 5. Security Headers
- ✅ Content-Security-Policy
- ✅ Strict-Transport-Security
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ Referrer-Policy
- ✅ Permissions-Policy

#### 6. Privacy
- ✅ Cookie consent system
- ✅ Analytics gated by user consent
- ✅ GDPR-compliant
- ✅ Transparent privacy policy
- ✅ No personal data storage (beyond emails)

### Security Best Practices
- Defense in depth
- Least privilege principle
- Input validation on all user inputs
- Secure defaults
- Environment-aware error handling
- Type safety with TypeScript strict mode

---

## Development & Deployment

### Development Workflow

#### Prerequisites
- Node.js 18+ (20+ recommended)
- npm (latest version)

#### Local Development
```bash
# Clone and install
git clone https://github.com/BitSleuthAI/Website.git
cd Website
npm install

# Start development server (port 9002)
npm run dev

# Available scripts
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint checking
npm run typecheck    # TypeScript checking
npm run test         # Run Vitest tests
npm run ci           # Full CI pipeline
```

#### Development Server
- **Port:** 9002 (configured to avoid conflicts)
- **Hot Reload:** Enabled with Turbopack
- **URL:** http://localhost:9002

### Build & Deployment

#### Build Process
```bash
npm run build
# Generates production-optimized build
# Output: .next/ directory
# 32 routes generated and optimized
```

#### Deployment
- **Platform:** Firebase App Hosting
- **Environments:**
  - Production: Automatic deployment from main branch
  - Development: Automatic deployment from dev branch
- **Configuration:**
  - `apphosting.prd.yaml` - Production config
  - `apphosting.dev.yaml` - Development config

#### Environment Variables
```bash
# Optional
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id

# Google Sheets API (for waitlist)
GOOGLE_SHEETS_CREDENTIALS=<json_credentials>
GOOGLE_SHEETS_SPREADSHEET_ID=<spreadsheet_id>

# Node environment
NODE_ENV=production|development
```

### Testing

#### Automated Testing
- **Framework:** Vitest
- **Test Files:** `*.test.ts` in `src/lib/`
- **Coverage:** 
  - `structured-data.test.ts` - 11 tests (100% pass)
  - `rate-limit.test.ts` - 6 tests (100% pass)

#### Manual Testing Checklist
- [ ] All routes load correctly
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] Dark/light theme toggle
- [ ] Cookie consent functionality
- [ ] Analytics tracking (with consent)
- [ ] SEO metadata in page source
- [ ] Glossary terms accessible
- [ ] Navigation between pages

#### Performance Testing
- Lighthouse audits (performance, accessibility, best practices, SEO)
- Core Web Vitals monitoring
- Image optimization verification
- Bundle size analysis

---

## Code Quality & Standards

### TypeScript Standards
- **Strict Mode:** Enabled
- **Type Coverage:** 100%
- **No `any` Types:** Enforced
- **Configuration:** `tsconfig.json`

**Example Excellence:**
- `src/lib/structured-data.ts` - 99/100 quality score
- 9 interfaces, 16 functions, all properly typed
- Comprehensive JSDoc documentation

### ESLint Configuration
- **Config:** Next.js recommended + TypeScript
- **Rules:** Core Web Vitals, React best practices
- **Status:** All files pass with 0 errors

### Code Organization
- Clear directory structure
- Separation of concerns
- Single responsibility principle
- Reusable components and utilities
- Comprehensive documentation

### Testing Standards
- Unit tests for utilities
- Integration tests for critical flows
- Security tests for validation
- Edge case coverage
- 100% test pass rate

### Documentation Standards
- **All markdown files in `docs/` folder**
- JSDoc for all public functions
- Inline comments for complex logic
- Security considerations documented
- README for each major feature

### Performance Standards
- Caching strategies
- Precompiled regex patterns
- Efficient algorithms
- Minimal allocations
- Code splitting and lazy loading

---

## Maintenance Guidelines

### Adding Glossary Terms

**Process:**
1. Create new directory: `src/app/glossary/[term-name]/`
2. Add metadata to `src/lib/glossary-metadata.ts`
3. Create `page.tsx` using `GlossaryPageWrapper` component
4. Define 2-4 related terms
5. Add internal links within content
6. **Sitemap automatically updates** (no manual intervention)

**Template:**
```tsx
import { GlossaryPageWrapper } from '@/components/glossary/GlossaryPageWrapper';

export default function TermPage() {
  const relatedTerms = [
    { slug: 'related-1', title: 'Title 1', description: 'Description 1' },
    { slug: 'related-2', title: 'Title 2', description: 'Description 2' },
  ];

  return (
    <GlossaryPageWrapper termSlug="term-slug" relatedTerms={relatedTerms}>
      <h1 itemProp="headline">What Is Term?</h1>
      <p itemProp="description">Definition...</p>
      {/* Content with internal links */}
    </GlossaryPageWrapper>
  );
}
```

### Updating Dependencies

**Quarterly Maintenance:**
```bash
# Check for updates
npm outdated

# Update dependencies (respecting semver)
npm update

# Audit for vulnerabilities
npm audit

# Run full test suite
npm run ci
```

**Major Version Updates:**
1. Review changelog and breaking changes
2. Update in development environment first
3. Run full test suite
4. Test manually in browser
5. Deploy to staging
6. Monitor for issues
7. Deploy to production

### Security Maintenance

**Monthly:**
- Run `npm audit` and fix vulnerabilities
- Review security headers configuration
- Check rate limiting effectiveness
- Monitor API endpoint usage

**Quarterly:**
- Security audit review
- Dependency updates
- CodeQL analysis review
- Review access logs for anomalies

### Performance Monitoring

**Continuous:**
- Core Web Vitals tracking
- Error monitoring (if configured)
- Uptime monitoring
- SEO performance tracking

**Monthly:**
- Lighthouse audits
- Bundle size analysis
- Image optimization review
- Database query performance (if applicable)

### Documentation Maintenance

**When to Update:**
- New features added
- Architecture changes
- Process updates
- Security improvements
- Dependency updates

**Documentation Files:**
- `docs/PRD.md` - Product requirements
- `docs/PROJECT_SUMMARY.md` - This file (comprehensive overview)
- `docs/todo.md` - Future improvements
- Archive older docs to `docs/archive/`

---

## Future Roadmap

### Phase 1: Foundation (✅ Complete)
- ✅ Core website structure
- ✅ Landing pages for products
- ✅ Educational glossary (44 terms)
- ✅ SEO optimization
- ✅ Privacy compliance
- ✅ Security hardening
- ✅ Answer Engine Optimization

### Phase 2: Enhancement (Planned Q1 2026)
- [ ] Advanced analytics dashboard
- [ ] A/B testing framework
- [ ] Enhanced glossary with more interactive elements
- [ ] Performance optimization (Core Web Vitals)
- [ ] Advanced personalization features
- [ ] Newsletter integration
- [ ] Live chat support

### Phase 3: Scale (Planned Q2-Q3 2026)
- [ ] Multi-language support
- [ ] Advanced search functionality
- [ ] User feedback system
- [ ] Community features
- [ ] API development
- [ ] Enterprise features
- [ ] Mobile app integration

### Phase 4: Innovation (Planned 2027+)
- [ ] AI-powered insights
- [ ] Advanced visualization tools
- [ ] Blockchain integration expansion
- [ ] Partnership integrations
- [ ] Premium content platform

### Improvement Opportunities

**UI/UX Enhancements:**
- See `docs/todo.md` for detailed visual improvement suggestions
- Enhanced animations and transitions
- Improved mobile experience
- Advanced interactive elements

**Technical Improvements:**
- Content Security Policy refinement
- Redis-based rate limiting for horizontal scaling
- Automated security scanning in CI/CD
- Advanced monitoring and alerting

**SEO Improvements:**
- More structured data types (FAQ, HowTo)
- Enhanced internal linking
- Content expansion
- Link building strategy

---

## Key Takeaways

### What Makes This Project Excellent

1. **🔒 Security-First:** Comprehensive security measures with 0 vulnerabilities
2. **📈 SEO Excellence:** 100% coverage with AI search optimization
3. **♿ Accessibility:** WCAG 2.1 AA compliance via shadcn/ui and Radix
4. **⚡ Performance:** Optimized for Core Web Vitals
5. **🧪 Quality:** Strict TypeScript, comprehensive testing, ESLint compliance
6. **📝 Documentation:** Extensive, well-organized, up-to-date
7. **🎨 Modern UI:** Beautiful, responsive, with dark/light mode
8. **🤖 AI-Ready:** Optimized for AI search engines and coding agents

### Project Statistics

| Metric | Value |
|--------|-------|
| Source Files | 143 TypeScript/TSX files |
| UI Components | 40+ shadcn/ui components |
| Glossary Terms | 44 fully optimized terms |
| Test Coverage | 17 tests, 100% pass rate |
| Build Output | 32 optimized routes |
| Security Audit | 0 vulnerabilities |
| TypeScript Errors | 0 (strict mode) |
| ESLint Errors | 0 |

### Success Metrics

**Technical Excellence:**
- ✅ TypeScript strict mode compliance
- ✅ Zero security vulnerabilities
- ✅ 100% test pass rate
- ✅ Production-ready build

**SEO Performance:**
- ✅ 100% sitemap coverage
- ✅ All pages indexed and optimized
- ✅ AI search engine ready
- ✅ Featured snippet potential

**User Experience:**
- ✅ Mobile-first responsive design
- ✅ Edge-to-edge viewport on modern devices
- ✅ Dark/light mode support
- ✅ Privacy-compliant analytics

---

## Conclusion

The BitSleuth website represents a **production-ready, enterprise-grade Next.js application** that demonstrates excellence in:

- Modern web development practices
- Security and privacy compliance
- SEO and AI search optimization
- Code quality and maintainability
- User experience and accessibility

The codebase is well-documented, thoroughly tested, and follows industry best practices. The implementation of Answer Engine Optimization (AEO) positions BitSleuth as a leader in Bitcoin education, while the security hardening ensures user trust and data protection.

All major implementations documented in `docs/archive/` have been successfully completed and integrated into the production codebase, with this summary providing an accurate, up-to-date overview of the project's current state.

---

**For More Information:**
- Product Requirements: `docs/PRD.md`
- Future Improvements: `docs/todo.md`
- Historical Context: `docs/archive/README.md`
- Security Details: `docs/archive/SECURITY_AUDIT.md`
- Implementation History: `docs/archive/IMPLEMENTATION_HISTORY.md`

**Maintained by:** BitSleuth Development Team  
**Repository:** https://github.com/BitSleuthAI/Website  
**License:** Proprietary - Copyright © 2025 BitSleuth
