# Changelog

All notable changes to the BitSleuth Website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned Features
- Advanced analytics dashboard for website performance metrics
- A/B testing framework for content optimization
- Multi-language support and internationalization
- Advanced search functionality across glossary and content
- User feedback system for continuous improvement
- Newsletter integration for email capture
- Live chat support integration

---

## [2.1.1] - 2026-06-12

> **Note:** Starting with this release, the changelog version numbers align with git tags and GitHub releases (the previous `0.2.0` entry corresponds to the `v2.0.0` tag/release).

### 🎉 Highlights

#### 🌍 Open Source Release
- **Added LICENSE file** and resolved open source licensing inconsistencies across the repository
- Added `SECURITY.md` adapted for the Website repository
- Added GitHub issue and pull request templates
- README updated with badges, corrected Node version requirement, and BitSleuth branding image
- Product About sections now mention open source and link to the Analyzer and Wallet GitHub repositories (links moved from footer to product pages)

### ✨ Features Added

#### 📚 Content & Pages
- Added new glossary terms to the glossary page
- Added visual diagrams to glossary pages for key concepts
- Expanded Bitcoin history page with future outlook and innovations sections
- Added quick navigation cards on the Learn page for key topics (How It Works, History, Glossary) with new icons
- Added "About BitSleuth" card to the company information page
- Added Status link in footer pointing to the BitSleuth status page

#### 🎨 UI/UX Improvements
- Visual refresh of landing page sections with new card designs and simplified content presentation
- Enhanced button, card, and logo hover effects and shadows
- Added color to testimonial profile initials avatars
- Reduced vertical padding across landing, learn, and history page sections for tighter layouts
- Consistent header height across pages and balanced footer section heights
- Added `BackgroundBeams` to all sections site-wide for consistent visual flow
- Added motion-reduce accessibility classes and other accessibility improvements

### 🛡️ Security Enhancements

- **Hardened Content Security Policy**:
  - Nonce-based script loading with Edge Runtime compatible crypto API
  - Removed `unsafe-inline` from `style-src`
  - Added `object-src 'none'` and `base-uri 'self'` directives
- **Bitcoin address validation** utility with comprehensive test suite (`src/lib/bitcoin-validation.ts`)
- Hardened consent storage with HTTP-only cookies and server-side validation
- Added URL validation in the Header component
- Fixed unbounded growth in rate limiter slug tracking array
- Added explicit permissions to GitHub Actions workflows (resolved code scanning alert)

### 🐛 Bug Fixes

- Fixed dropdown menus and modals not responding to clicks (z-index stacking context, `onOpenChange` signature, missing `"use client"` directive)
- Fixed double scrollbars on modals and persistent horizontal scrollbar
- Fixed desktop page scrolling blocked by `contain: layout` on sections
- Fixed image layout shift on the Learn page and hero sections (stable image containers, `sizes` prop, `fetchPriority` and preload)
- Fixed build failure by switching to a local Inter font
- Fixed `BackgroundBeams` intercepting clicks (`pointer-events-none`)
- Fixed confusing arrow rotation behavior in dropdown buttons
- Removed `console.log` statements from the homepage
- Downgraded Tailwind CSS v4 back to stable v3 to resolve build issues

### ⚡ Performance

- Enabled CDN edge caching and removed per-pageview origin requests
- Optimized regex usage, extracted constants, and improved caching patterns in structured data utilities

### 🔧 Technical Improvements

#### 🚀 Dependency Updates
- **Next.js** → 16.2.x
- **React** → 19.2.4
- **lucide-react** → 1.x
- **react-day-picker** → 10.x
- **Vitest** → 4.1.x
- ~90 dependency bumps via Dependabot, including security patches (minimatch, brace-expansion, postcss, and others)

#### 🧪 Testing Infrastructure
- Added Playwright-based theme toggle tests with robust wait conditions
- Stabilized Vitest configuration (path aliases, e2e test exclusion patterns)
- Added Bitcoin address validation test suite

### 📚 Documentation Updates

- **NEW: `CLAUDE.md`** - comprehensive guide for AI coding assistants
- README revised for clarity, accurate versions, and developer onboarding
- Added `.env.example` file and removed deprecated Google Sheets environment variables
- Added dependency update plan and root folder cleanup documentation
- Enhanced Dependabot configuration (grouped updates, increased open PR limit)

---

## [0.2.0] - 2025-12-17

### 🎉 Major Updates

#### 📱 Wallet Download Page Launch
- **NEW: Wallet Download Page** (`/wallet/download`)
  - Smart mobile device detection with automatic App Store/Play Store redirection
  - Image preloading to prevent blank page on iOS after redirect
  - Download badges for both iOS and Android platforms
  - Return to home navigation with consistent UX
  - Replaced previous "Coming Soon" waitlist page
- **Removed**: `/wallet/coming-soon` page and waitlist functionality
- **Removed**: `/api/waitlist` endpoint (no longer needed)
- **Removed**: Google Sheets API integration for waitlist management

#### 📚 Glossary Expansion
- Expanded glossary from **17 to 44 comprehensive Bitcoin terms**
- Added new categories and technical Bitcoin concepts
- Improved term formatting and acronym handling (BTC, P2P, UTXO, BIP32, etc.)

#### 🔍 Answer Engine Optimization (AEO)
- **NEW: AI Training Content** (`/ai-training-content`)
  - Structured content for AI language models (ChatGPT, Gemini, Perplexity, Claude)
  - Platform overview, technical specs, and value propositions formatted for LLM comprehension
  - Enables accurate BitSleuth representation in AI-powered search results
- Enhanced SEO strategy with AEO principles
- Voice search and answer engine optimization guidelines

### ✨ Features Added

#### 🛡️ Security Enhancements
- **HTTP Security Headers** implemented in `next.config.ts`:
  - Strict-Transport-Security (HSTS) with preload
  - X-Frame-Options for clickjacking protection
  - X-Content-Type-Options to prevent MIME sniffing
  - Referrer-Policy for privacy controls
  - Permissions-Policy for feature restrictions
- **Rate Limiting** system:
  - Serverless-safe in-memory rate limiter with IP validation
  - Applied to all API endpoints (5 requests/minute per IP)
  - IPv4/IPv6 format validation to prevent header spoofing
  - Proper HTTP 429 responses with Retry-After headers
- **Input Sanitization**:
  - Logger abstraction to prevent production log leakage
  - Control character sanitization in error messages
  - Enhanced email validation with Zod schemas
  - Log injection attack prevention
- **Security Documentation**:
  - `docs/SECURITY_AUDIT.md` with comprehensive findings
  - `docs/SECURITY_IMPROVEMENTS.md` with implementation details
  - Security best practices checklist

#### 🎨 UI/UX Improvements
- Modernized browser detection (removed legacy Opera/MSStream checks)
- Enhanced mobile redirection with `window.open()` for better UX
- Improved header navigation with mapping-based link filtering
- Responsive design optimizations with safe-area-inset support
- Theme system improvements with smoother transitions

#### 🧪 Testing Infrastructure
- **NEW: Automated Testing** with Vitest
  - Test suite for rate limiter (6 comprehensive tests)
  - Test suite for structured data utilities (11 tests)
  - Command: `npm run test` and `npm run ci`
  - Full test coverage documentation in CONTRIBUTING.md

### 🔧 Technical Improvements

#### 🚀 Framework & Dependency Updates
- **Next.js** 15.5.2 → **16.0.10**
- **React** 18.3.1 → **19.2.0**
- **TypeScript** 5.x → **5.9.3**
- **Tailwind CSS** 3.4.1 → **3.4.18**
- **Node.js** requirement: 20+ (documented)

#### ⚡ Performance Optimizations
- Extracted regex patterns to named constants (eliminates repeated compilation)
- Implemented Map-based validation caching for slug validation
- Refactored string processing to reduce intermediate array allocations
- Optimized slug validation with single-pass character checking
- Lazy cleanup for rate limiters prevents memory leaks in serverless environments

#### 🏗️ Code Quality & Refactoring
- Unified sanitization logic with configurable `sanitizeForLogGeneral()`
- Extracted complex inline logic into reusable helper functions
- Module-scoped validation cache for better performance
- DRY character set definitions for slug validation
- Improved error messages with detailed invalid character reporting
- Template literals for better code readability
- Type safety improvements (removed unnecessary `any` casts)

### 📚 Documentation Updates

#### 📖 Comprehensive Documentation Overhaul
- **README.md** major update:
  - Accurate tech stack versions (Next.js 16, React 19, TypeScript 5.9)
  - Complete project structure tree (35 lines with file counts)
  - Expanded routes documentation (8 → 55 routes including all glossary terms)
  - Added Vitest testing section with commands
  - Fixed broken links and repository references
  - Added Answer Engine Optimization (AEO) section
  - Development and production URL documentation
- **CONTRIBUTING.md** enhancements:
  - Added automated testing guidelines
  - Updated quality checks workflow
  - Enhanced testing checklist
  - Test writing best practices
- **AGENTS.md** updates:
  - Fixed wallet route: `/wallet/coming-soon` → `/wallet/download`
  - Updated framework versions throughout
  - Removed Google Sheets API references
  - Updated environment variables documentation
- **PRD.md** (Product Requirements Document):
  - Framework version updates (Next.js 16, React 19, TypeScript 5.9, Tailwind 3.4.18)
  - Removed Google Sheets references from all sections
  - Updated technical specifications and architecture diagrams
- **GitHub Workflow Documentation**:
  - `.github/workflows/README.md` updated for new test structure
  - Copilot test workflow refactored (build, lint, typecheck, route testing)
  - Removed Google Sheets credential requirements
  - Port consistency fixed (3000 throughout)
- **NEW: Coding Standards Review**:
  - `docs/STRUCTURED_DATA_CODING_STANDARDS_REVIEW.md`
  - Comprehensive analysis of code quality and best practices

#### 🔍 SEO & Marketing Documentation
- Enhanced `.github/agents/marketing-agent.md`:
  - Added AEO (Answer Engine Optimization) strategies
  - Voice search optimization guidelines
  - AI crawler content structuring principles
  - Updated framework references
- Updated `.github/copilot-instructions.md` with latest tech stack

### 🐛 Bug Fixes

#### 🔧 Critical Fixes
- Fixed `formatSlugToTitle()` to correctly handle Bitcoin acronyms:
  - `p2p` → `P2P` (was incorrectly: `P2p`)
  - `btc` → `BTC` (was incorrectly: `Btc`)
  - `bip32` → `BIP32` (was incorrectly: `Bip32`)
  - `utxo` → `UTXO` (was incorrectly: `Utxo`)
- Fixed regex pattern in sanitization to properly preserve newlines and tabs when specified
- Fixed control character handling in `flattenWhitespace` logic
- Corrected empty string handling in slug validation (no longer reported as invalid)
- Fixed null coalescing on Map.get() after has() check

#### 🎨 UI/UX Bug Fixes
- Fixed iOS image loading issue on wallet download page
- Fixed blank page issue after App Store redirect on iOS
- Removed obsolete MSStream check for IE on Windows Phone
- Fixed user agent string handling for Opera browsers

### 🗑️ Removed

#### 🧹 Cleanup & Deprecation
- Removed Google Sheets API integration:
  - Removed `GOOGLE_SHEETS_ID_FEEDBACK` environment variable
  - Removed `GOOGLE_SHEETS_CLIENT_EMAIL` environment variable
  - Removed `GOOGLE_SHEETS_PRIVATE_KEY` environment variable
  - Removed Google Sheets API from backend integration documentation
- Removed legacy waitlist system:
  - Removed `/api/waitlist` route
  - Removed waitlist form components
  - Removed WaitlistForm landing component
- Removed `/wallet/coming-soon` page completely
- Removed outdated browser detection code
- Removed duplicate and conflicting documentation

### 🎯 Routes Updated

#### 📍 Route Changes
- **Added**: `/wallet/download` (production-ready download page)
- **Removed**: `/wallet/coming-soon` (replaced by download page)
- **Added**: `/ai-training-content` (AEO optimization)
- **Updated**: Sitemap priorities and change frequencies
  - `/wallet/download` set to weekly updates with increased priority
- **Expanded**: 44 glossary term routes (from original 17)

### 🔨 Configuration & Build Updates

#### ⚙️ Configuration Changes
- Updated `next.config.ts`:
  - Added comprehensive security headers
  - Updated for Next.js 16 compatibility
- Updated `tailwind.config.ts`:
  - Enhanced Bitcoin-inspired color palette
  - Improved dark mode support
- Updated `tsconfig.json`:
  - TypeScript 5.9.3 strict mode settings
- Updated Firebase hosting configs:
  - `apphosting.dev.yaml` (retained Google Sheets env vars for reference)
  - `apphosting.prd.yaml` (retained Google Sheets env vars for reference)
- GitHub Workflows:
  - Refactored `copilot-test.yml` workflow
  - Removed Google Sheets environment variables
  - Added route testing and health checks
  - Fixed port references (consistent at 3000)

### 📊 Statistics & Metrics

#### 📈 Codebase Growth
- **Total Routes**: 26 → 55+ unique routes
- **Glossary Terms**: 17 → 44 educational articles
- **Components**: 67 → 70+ React components
- **Test Files**: New automated test suite added
- **Documentation Files**: 10+ new/updated documentation files

### 🌐 Deployment & Infrastructure

#### 🚀 Deployment Updates
- Firebase App Hosting configuration maintained
- Production URL: [https://www.bitsleuth.ai](https://www.bitsleuth.ai)
- Development URL: [https://website-dev--bitsleuth.us-central1.hosted.app](https://website-dev--bitsleuth.us-central1.hosted.app)
- Automated deployment on push to main branch
- Environment variable support enhanced

### 👥 Developer Experience

#### 🛠️ DX Improvements
- Enhanced developer onboarding documentation
- Clear testing guidelines and commands
- Improved troubleshooting guides
- Better error messages with context
- Consistent code style enforcement
- Type-safe development with strict TypeScript
- Comprehensive contribution guidelines

### 📝 Notes for Developers

#### 🔍 Key Changes to Be Aware Of
1. **Wallet Route Changed**: Update any hardcoded references from `/wallet/coming-soon` to `/wallet/download`
2. **Google Sheets Removed**: All waitlist functionality has been removed; users download directly from app stores
3. **Framework Upgrades**: Test thoroughly after pulling; React 19 and Next.js 16 have breaking changes
4. **New Testing Commands**: Use `npm run test` for unit tests, `npm run ci` for full suite
5. **Security Headers**: Ensure CSP doesn't block required resources in development
6. **Rate Limiting**: Be aware of 5 req/min limit on API endpoints during testing

---

## [0.1.0] - 2024-11-06

### 🎉 Initial Release

The first release of the BitSleuth Website - a comprehensive Next.js 15 marketing and educational platform for Bitcoin analysis tools.

### ✨ Features Added

#### 🎯 Product Landing Pages
- **Analyzer Landing Page** (`/analyzer`)
  - Comprehensive feature showcase for Bitcoin wallet analyzer
  - Interactive hero section with address input
  - Features, How It Works, Demo Preview sections
  - Testimonials and pricing information
  - FAQ section with common questions
  - Structured data (JSON-LD) for SEO

- **Wallet Landing Page** (`/wallet`)
  - Dedicated page for BitSleuth Wallet product
  - Security-focused messaging and features
  - Built-for-Bitcoiners section highlighting key benefits
  - Seamless experience showcase
  - Call-to-action and waitlist sections
  - Product-specific FAQ

- **Homepage** (`/`)
  - Overview of BitSleuth platform
  - Hero section introducing the brand
  - About section with company information
  - Navigation to product pages

#### 📚 Educational Glossary
- **Glossary Index** (`/glossary`)
  - Interactive Bitcoin terminology guide
  - 17 comprehensive Bitcoin terms with detailed explanations
  
- **Individual Term Pages**:
  - Address - Bitcoin wallet addresses explained
  - Bit - Smallest unit of Bitcoin
  - Bitcoin - Core cryptocurrency overview
  - Block - Blockchain block structure
  - Blockchain - Distributed ledger technology
  - BTC - Bitcoin ticker symbol
  - Confirmation - Transaction confirmation process
  - Cryptography - Encryption and security basics
  - Double-spend - Double-spending problem and solutions
  - Hash Rate - Mining power measurement
  - Mining - Bitcoin mining process
  - P2P - Peer-to-peer network architecture
  - Passphrase - Seed phrase security
  - Private Key - Private key management
  - Signature - Digital signature verification
  - Transaction Privacy - Privacy best practices
  - Wallet - Bitcoin wallet types and usage

#### 🔍 SEO & Discoverability
- Custom robots.txt for search engine crawling
- Dynamic sitemap.ts with priority and change frequency
- Page-specific metadata and Open Graph tags
- Twitter Card integration for social sharing
- Structured data (JSON-LD) for rich snippets
- AI training content page for LLM optimization
- Comprehensive meta tags and descriptions

#### 🍪 Privacy & Compliance
- Cookie consent system with customizable preferences
- Google Analytics integration (consent-gated)
- Privacy Policy page with comprehensive coverage
- Terms of Service page
- Company Information page
- Cookie customization modal for user control

#### 🎨 UI/UX Components
- **Landing Page Components** (25 components):
  - Header with navigation and theme toggle
  - Footer with links and social media
  - Hero sections for different products
  - Features showcase sections
  - How It Works step-by-step guides
  - Demo preview sections
  - Testimonials carousel
  - Pricing comparison tables
  - FAQ accordions
  - Call-to-action sections
  - About sections
  - Waitlist signup forms

- **UI Components** (30+ shadcn/ui components):
  - Accordion, Alert Dialog, Alert
  - Avatar, Badge, Button
  - Calendar, Card, Carousel
  - Chart, Checkbox, Collapsible
  - Dialog, Dropdown Menu, Form
  - Input, Label, Menubar
  - Popover, Progress, Radio Group
  - Scroll Area, Select, Separator
  - Sheet, Sidebar, Skeleton
  - Slider, Switch, Table
  - Tabs, Textarea, Toast
  - Tooltip, and more

- **Theme System**:
  - Light/dark mode support
  - System preference detection
  - Smooth theme transitions
  - Custom Bitcoin-inspired color palette
  - Theme toggle component in header

#### 🛠️ Technical Infrastructure
- Next.js 15.5.2 with App Router
- React 18.3.1 and React DOM
- TypeScript 5.x for type safety
- Tailwind CSS 3.4.1 for styling
- shadcn/ui component library
- Radix UI primitives for accessibility
- Embla Carousel for image carousels
- Lucide React for icons
- Firebase 11.9.1 integration
- Google Sheets API for waitlist management
- Form handling with react-hook-form and Zod validation

#### 📦 API Endpoints
- `/api/waitlist` - Waitlist email collection endpoint
- Server actions for form submissions
- Integration with Google Sheets API

#### 🚀 Build & Development Tools
- Next.js with Turbopack for faster development
- TypeScript strict mode enabled
- ESLint for code quality
- PostCSS for CSS processing
- Custom dev server on port 3000
- Production build optimization

#### 📱 Responsive Design
- Mobile-first approach
- Optimized layouts for all screen sizes
- Touch-friendly interactions
- Responsive navigation and menus
- Adaptive image loading

#### 🔧 Configuration Files
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Custom Tailwind setup with Bitcoin theme
- `tsconfig.json` - TypeScript compiler options
- `components.json` - shadcn/ui configuration
- `apphosting.prd.yaml` - Firebase App Hosting config
- `.env.local` support for environment variables

### 📚 Documentation Added
- **README.md** - Comprehensive project documentation
  - Features overview and tech stack
  - Development workflow and setup
  - Project structure and routing
  - Configuration and deployment
  - Testing and troubleshooting guides
  
- **CONTRIBUTING.md** - Contribution guidelines
  - Development workflow
  - Branch strategy and naming conventions
  - Code style and standards
  - Documentation requirements
  - Pull request process
  
- **docs/PRD.md** - Product Requirements Document
  - Business objectives and success metrics
  - Target audience and personas
  - Feature specifications
  - Technical architecture
  - Risk management and timeline
  
- **docs/SEO_STRATEGY.md** - SEO optimization guide
  - Target keywords and optimization
  - Content marketing strategy
  - Link building and social media
  - AI training data strategy
  - Success metrics and monitoring
  
- **docs/todo.md** - Visual recommendations and improvements
  
- **AGENTS.md** - AI agent instructions
  
- **LICENSE** - Proprietary software license

### 🎯 Routes Implemented
- `/` - Homepage
- `/analyzer` - Analyzer product page
- `/wallet` - Wallet product page
- `/wallet/coming-soon` - Wallet beta announcement
- `/glossary` - Glossary index
- `/glossary/[term]` - Individual glossary terms (17 terms)
- `/privacy-policy` - Privacy policy
- `/terms-of-service` - Terms of service
- `/company-information` - Company details
- `/ai-training-content` - AI/LLM training data
- `/api/waitlist` - Waitlist signup API

### 🌐 Deployment
- Firebase App Hosting configuration
- Production URL: https://www.bitsleuth.ai
- Automated deployment on push
- Environment variable support

### 🔒 Security
- Content Security Policy implementation
- Secure API endpoints
- Input validation and sanitization
- HTTPS enforcement
- Privacy-compliant analytics

### 📊 Analytics & Tracking
- Google Analytics 4 integration
- Consent-gated tracking
- Custom event tracking
- Conversion measurement
- Privacy-compliant implementation

---

## Project Statistics

### Codebase Overview
- **Total Files**: 135+ files
- **TypeScript/React Files**: 105+ components and pages
- **Pages**: 26 unique routes
- **Components**: 67 React components
- **Glossary Terms**: 17 educational articles
- **UI Components**: 30+ reusable shadcn/ui components
- **Landing Components**: 25 product-specific sections

### Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.x
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3.4
- **Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Animations**: Tailwind Animate
- **Forms**: React Hook Form + Zod
- **Deployment**: Firebase App Hosting
- **Analytics**: Google Analytics 4

---

## Development Team Notes

### For New Developers

#### Getting Started
1. Clone the repository
2. Run `npm install` to install dependencies
3. Copy `.env.example` to `.env.local` and configure
4. Run `npm run dev` to start development server (port 3000)
5. Read README.md and CONTRIBUTING.md for guidelines

#### Key Areas to Understand
- **App Router Structure**: All routes in `src/app/`
- **Component Library**: Reusable components in `src/components/`
- **Landing Pages**: Product-specific sections in `src/components/landing/`
- **Theme System**: Light/dark mode in `theme-provider.tsx`
- **SEO**: Metadata and structured data in page files

#### Common Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Check code quality
npm run typecheck  # Verify TypeScript types
```

#### Architecture Decisions
- **Why Next.js 15**: App Router for better performance and SEO
- **Why Tailwind**: Utility-first approach for rapid development
- **Why shadcn/ui**: Accessible, customizable components
- **Why Firebase**: Reliable hosting with easy deployment
- **Why TypeScript**: Type safety and better developer experience

### Current Status
- ✅ Core website functionality complete
- ✅ All product pages implemented
- ✅ Educational glossary operational
- ✅ SEO optimization complete
- ✅ Privacy compliance implemented
- ✅ Responsive design verified
- ⏳ Advanced analytics dashboard (planned)
- ⏳ A/B testing framework (planned)
- ⏳ Multi-language support (planned)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:
- Development workflow
- Code standards
- Testing requirements
- Documentation
- Pull request process

---

**Built with ❤️ by the BitSleuth Team**
