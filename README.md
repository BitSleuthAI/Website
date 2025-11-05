# BitSleuth Website

> **Bitcoin Wallet Analysis & Privacy Tools**

BitSleuth is a comprehensive Next.js 15 website serving as the primary marketing and educational hub for Bitcoin analysis tools. The platform features product landing pages for a Bitcoin wallet analyzer and Bitcoin wallet app, an extensive educational glossary, SEO optimization, and privacy-compliant analytics.

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

- **Framework**: Next.js 15 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui, Radix primitives
- **UX**: Embla Carousel, Lucide icons
- **SEO**: App Router metadata routes (`robots.ts`, `sitemap.ts`)
- **Deployment**: Firebase App Hosting

---


## 🚀 Development Workflow

### Prerequisites
- **Node.js**: 18+ (20+ recommended)
- **npm**: Latest version

### Local Development

1. **Clone and Install:**
   ```bash
   git clone <repository-url>
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

### Development Guidelines
1. **Branch Naming**: `feature/description` or `fix/description`
2. **Commit Messages**: Use conventional commits
3. **Code Style**: Follow ESLint and Prettier configurations
4. **Testing**: Test all changes manually before submitting
5. **Documentation**: Update README if adding new features
6. **Documentation Files**: All markdown documentation files (e.g., `.md` files) should be stored in the `docs/` folder for consistency and easy discovery

### Pull Request Process
1. Create feature branch from `dev`
2. Make changes with proper testing
3. Update documentation if needed
4. Submit PR with clear description
5. Request review from team members

### Code Review Checklist
- [ ] Code follows project conventions
- [ ] No console.log statements in production code
- [ ] TypeScript types are properly defined
- [ ] Components are properly documented
- [ ] Performance impact is considered
- [ ] Accessibility standards are met

---

## 📚 Documentation

### File Organization
**All documentation files (markdown `.md` files) are stored in the `docs/` folder** to maintain consistency and make them easy to find. When creating new documentation, please place it in this directory.

### Additional Resources
- **PRD**: `docs/PRD.md` - Product Requirements Document
- **SEO Strategy**: `docs/SEO_STRATEGY.md` - SEO optimization guide
- **Visual Recommendations**: `docs/todo.md` - UI/UX improvement suggestions

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
