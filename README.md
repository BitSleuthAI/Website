# BitSleuth Website

> **Bitcoin Wallet Analysis & Privacy Tools**

BitSleuth is a comprehensive Next.js 16.0 website that serves as the primary marketing and educational hub for Bitcoin analysis tools. The platform includes product landing pages for a Bitcoin wallet analyzer and Bitcoin wallet app, as well as an extensive educational glossary, SEO optimization, and privacy-compliant analytics.

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

- **Framework**: Next.js 16.0.10 (App Router), React 19.2, TypeScript 5.9
- **Styling**: Tailwind CSS, shadcn/ui, Radix primitives
- **UX**: Embla Carousel, Lucide icons
- **SEO**: App Router metadata routes (`robots.ts`, `sitemap.ts`)
- **Development**: Model Context Protocol (MCP) server enabled for AI coding agents
- **Deployment**: Firebase App Hosting

---


## 🚀 Development Workflow

### Prerequisites
- **Node.js**: 18+ (20+ recommended)
- **npm**: Latest version

### Local Development

1. **Clone and Install:**
   ```bash
   git clone https://github.com/BitSleuthAI/Website.git
   cd Website
   npm install
   ```

2. **Environment Setup (Optional):**
   ```bash
   # Create .env.local if you need to configure environment variables
   # See Configuration section below for available variables
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

### Code Quality
- **TypeScript**: Strict type checking enabled
- **ESLint**: Next.js recommended configuration
- **Prettier**: Code formatting (via ESLint)
- **Husky**: Pre-commit hooks (if configured)

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
```bash
# Optional
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

### Tailwind Configuration
- Custom color palette with Bitcoin-inspired themes
- Dark/light mode support
- Responsive breakpoints
- Custom animations and transitions

### SEO Configuration
- Custom metadata for each page
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration

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

### Firebase App Hosting
1. Connect repository to Firebase App Hosting
2. Configure environment variables in Firebase console
3. Deploy automatically on push to configured branch

### Manual Deployment
```bash
npm run build
# Firebase CLI deployment commands
```

### Environment Configuration
- Production: `https://www.bitsleuth.ai`
- Staging: Configure in Firebase App Hosting dashboard
- Development: `http://localhost:9002`

---

## 📊 Analytics & Monitoring

### Google Analytics
- Privacy-compliant implementation
- Consent-gated tracking
- Custom events for user interactions
- Conversion tracking for sign-ups

### Performance Monitoring
- Core Web Vitals tracking
- Error monitoring (if configured)
- Uptime monitoring
- SEO performance tracking

---

## 🤝 Contributing

We welcome contributions to the BitSleuth Website! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:

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

### File Organization
**All documentation files (markdown `.md` files) are stored in the `docs/` folder** to maintain consistency and make them easy to find. When creating new documentation, please place it in this directory.

### Active Documentation
Current, relevant documentation for development:
- **Contributing Guidelines**: [`CONTRIBUTING.md`](CONTRIBUTING.md) - How to contribute to the project (located in root)
- **Product Requirements**: [`docs/PRD.md`](docs/PRD.md) - Product Requirements Document with objectives and roadmap
- **Implementation History**: [`docs/IMPLEMENTATION_HISTORY.md`](docs/IMPLEMENTATION_HISTORY.md) - Consolidated history of completed work and current state
- **SEO Strategy**: [`docs/SEO_STRATEGY.md`](docs/SEO_STRATEGY.md) - SEO optimization guide and ongoing strategy
- **MCP Server**: [`docs/MCP_SERVER.md`](docs/MCP_SERVER.md) - Model Context Protocol server configuration for AI agents
- **Security**: [`docs/SECURITY_AUDIT.md`](docs/SECURITY_AUDIT.md) and [`docs/SECURITY_IMPROVEMENTS.md`](docs/SECURITY_IMPROVEMENTS.md) - Security documentation
- **Visual Recommendations**: [`docs/todo.md`](docs/todo.md) - UI/UX improvement suggestions and future enhancements

### Historical Documentation
Completed implementations are documented in `docs/archive/` for reference:
- Glossary SEO updates and AI bot optimization
- Answer Engine Optimization (AEO) implementation
- Edge-to-edge viewport for mobile
- Component library updates (shadcn/ui, Radix UI)
- Tailwind CSS version management

See `docs/archive/README.md` for details on archived documentation.

### External Links
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

---

## 🐛 Troubleshooting

### Common Issues

**Port 9002 already in use:**
```bash
# Kill process using port 9002
lsof -ti:9002 | xargs kill -9
```

**Build errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**TypeScript errors:**
```bash
# Check types
npm run typecheck
```


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
