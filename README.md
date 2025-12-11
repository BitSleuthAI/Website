# BitSleuth Website

> **Bitcoin Wallet Analysis & Privacy Tools**

BitSleuth is a comprehensive Next.js 16 website that serves as the primary marketing and educational hub for Bitcoin analysis tools. The platform includes product landing pages for a Bitcoin wallet analyzer and Bitcoin wallet app, as well as an extensive educational glossary, SEO optimization, and privacy-compliant analytics.

**🌐 Production:** [https://www.bitsleuth.ai](https://www.bitsleuth.ai)

## ✨ Key Features

- **🎯 Multi-Product Landing Pages**: Dedicated pages for BitSleuth Analyzer (`/analyzer`) and BitSleuth Wallet (`/wallet`) with comprehensive feature showcases
- **📚 Educational Glossary**: Interactive Bitcoin terminology guide with 15+ terms and detailed explanations
- **🔍 SEO Optimized**: Custom robots.txt, sitemap, and metadata for maximum search engine visibility
- **🍪 Privacy Compliant**: Cookie consent system with Google Analytics gating
- **🎨 Modern UI**: Tailwind CSS + shadcn/ui + Radix primitives with light/dark theme support
- **📱 Responsive Design**: Mobile-first approach with optimized user experience across all devices

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript 5
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
   git clone https://github.com/your-org/bitsleuth-website.git
   cd Website
   npm install
   ```

2. **Environment Setup:**
   ```bash
   cp .env.example .env.local
   # Add your environment variables
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   # Server runs on http://localhost:9002
   ```

4. **Available Scripts:**
   ```bash
   npm run dev          # Development server with Turbopack
   npm run build        # Production build
   npm run start        # Production server
   npm run lint         # ESLint checking
   npm run typecheck    # TypeScript type checking
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
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── analyzer/          # Analyzer product page
│   ├── wallet/            # Wallet product page
│   ├── glossary/          # Educational glossary
│   ├── api/waitlist/      # Waitlist signup API endpoint
│   ├── layout.tsx         # Root layout
│   ├── robots.ts          # SEO robots.txt
│   ├── sitemap.ts         # SEO sitemap
│   └── actions.ts         # Server actions
├── components/
│   ├── landing/           # Landing page components
│   ├── ui/                # shadcn/ui components
│   └── theme-provider.tsx # Theme management
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

---

## 🎯 Available Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with overview |
| `/analyzer` | Bitcoin wallet analyzer product page |
| `/wallet` | Bitcoin wallet app product page |
| `/glossary` | Bitcoin terminology index |
| `/glossary/[term]` | Individual glossary term pages |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `/company-information` | Company information |

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

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] All routes load correctly
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Dark/light theme toggle works
- [ ] Cookie consent banner functions
- [ ] Analytics tracking (with consent)
- [ ] SEO metadata displays correctly

### Performance Testing
- Lighthouse scores
- Core Web Vitals
- Image optimization
- Bundle size analysis

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

We welcome contributions to the BitSleuth Website! Please read our [CONTRIBUTING.md](docs/CONTRIBUTING.md) for detailed guidelines on:

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

For complete guidelines, see [CONTRIBUTING.md](docs/CONTRIBUTING.md).

---

## 📚 Documentation

### File Organization
**All documentation files (markdown `.md` files) are stored in the `docs/` folder** to maintain consistency and make them easy to find. When creating new documentation, please place it in this directory.

### Active Documentation
Current, relevant documentation for development:
- **PRD**: `docs/PRD.md` - Product Requirements Document
- **Implementation History**: `docs/IMPLEMENTATION_HISTORY.md` - Consolidated history of completed work and current state
- **SEO Strategy**: `docs/SEO_STRATEGY.md` - SEO optimization guide and ongoing strategy
- **MCP Server**: `docs/MCP_SERVER.md` - Model Context Protocol server configuration
- **Visual Recommendations**: `docs/todo.md` - UI/UX improvement suggestions

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
