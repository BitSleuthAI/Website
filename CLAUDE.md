# CLAUDE.md - AI Assistant Guide for BitSleuth Website

> **Quick Reference for AI Assistants** - This file provides essential context for AI coding agents working on the BitSleuth website codebase.

---

## Project Overview

**BitSleuth Website** is a Next.js 16 marketing and educational website for Bitcoin wallet analysis tools.

- **Production:** https://www.bitsleuth.ai
- **Development:** https://website-dev--bitsleuth.us-central1.hosted.app
- **Repository:** https://github.com/BitSleuthAI/Website

---

## Tech Stack Summary

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js (App Router) | 16.1.1 |
| Language | TypeScript | 5.9.3 |
| Runtime | React | 19.2.3 |
| Styling | Tailwind CSS | 4.3.x |
| Components | shadcn/ui + Radix UI | Latest |
| Icons | Lucide React | 0.562.0 |
| Testing | Vitest | 4.0.16 |
| Hosting | Firebase App Hosting | - |

---

## Essential Commands

```bash
npm run dev          # Start dev server (port 3000, Turbopack)
npm run build        # Production build (webpack)
npm run start        # Production server
npm run lint         # ESLint checks
npm run typecheck    # TypeScript checks
npm run test         # Run Vitest tests
npm run ci           # Full CI: lint + typecheck + test + build
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with providers
│   ├── globals.css        # Global styles + Tailwind
│   ├── robots.ts          # SEO robots.txt
│   ├── sitemap.ts         # Dynamic sitemap generation
│   ├── actions.ts         # Server actions
│   ├── analyzer/          # Analyzer product page
│   ├── wallet/            # Wallet product pages
│   │   └── download/      # Wallet download page
│   ├── glossary/          # 44 Bitcoin glossary terms
│   │   ├── page.tsx       # Glossary index
│   │   └── [term]/        # Individual term pages
│   ├── learn/             # Learning resources hub
│   ├── history/           # Bitcoin history page
│   ├── ai-training-content/  # AEO content for AI systems
│   ├── privacy-policy/
│   ├── terms-of-service/
│   └── company-information/
├── components/
│   ├── landing/           # 27 marketing/landing components
│   ├── glossary/          # Glossary-specific components
│   ├── ui/                # 40+ shadcn/ui components
│   ├── theme-provider.tsx # Theme context
│   └── ThemeToggle.tsx    # Dark/light toggle
├── hooks/
│   ├── use-mobile.tsx     # Mobile detection
│   └── use-toast.ts       # Toast notifications
└── lib/
    ├── utils.ts           # General utilities (cn function)
    ├── glossary-metadata.ts  # SEO metadata for glossary
    ├── structured-data.ts    # JSON-LD schema generators
    ├── rate-limit.ts         # API rate limiting
    ├── consent.ts            # Cookie consent utilities
    ├── bitcoin-validation.ts # Bitcoin address validation
    └── nonce.ts              # CSP nonce generation
```

---

## Key Conventions

### TypeScript
- **Strict mode enabled** - No `any` types allowed
- Use proper interfaces for component props
- Path alias: `@/*` maps to `./src/*`

### Component Patterns
- **Server Components by default** (Next.js 16)
- Add `"use client"` only when needed (hooks, event handlers, browser APIs)
- File naming: PascalCase for components (e.g., `HeroSection.tsx`)

### Styling
- Tailwind utility classes for all styling
- Dark mode: use `dark:` variant prefix
- Responsive: mobile-first with `sm:`, `md:`, `lg:`, `xl:` breakpoints
- Custom colors defined in `tailwind.config.ts` (Bitcoin-inspired palette)

### Import Order
```typescript
// 1. React/External libraries
import React from 'react';
import { Button } from '@/components/ui/button';

// 2. Internal components
import { Header } from '@/components/landing/Header';

// 3. Utilities and types
import { cn } from '@/lib/utils';
```

---

## Common Tasks

### Adding a New Page
1. Create folder: `src/app/page-name/`
2. Add `page.tsx` with metadata export:
```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | BitSleuth',
  description: 'Page description for SEO',
};

export default function PageName() {
  return <div>Content</div>;
}
```
3. Sitemap auto-updates (no manual changes needed)
4. Add navigation link in `src/components/landing/Header.tsx` if needed

### Adding a Glossary Term
1. Create folder: `src/app/glossary/term-name/`
2. Add `page.tsx` using `GlossaryPageWrapper` component
3. Add metadata to `src/lib/glossary-metadata.ts`
4. Sitemap detects new terms automatically

### Adding a shadcn/ui Component
```bash
npx shadcn@latest add button
# Component added to src/components/ui/
```

### SEO Metadata
- Every page exports `metadata` object
- Use `generateGlossaryMetadata()` for glossary pages
- Structured data via `src/lib/structured-data.ts`

---

## Critical Rules

### Do NOT:
- Use `console.log` in production code
- Use `any` type - use proper types or `unknown`
- Skip TypeScript type checking
- Commit secrets or API keys
- Create documentation files outside `docs/` folder
- Downgrade Tailwind to v3 (project is on stable v4; theme stays in `tailwind.config.ts` via the `@config` directive in `globals.css`)

### Always:
- Run `npm run typecheck` before committing
- Run `npm run lint` to check code style
- Test dark/light mode for UI changes
- Ensure responsive design works on mobile
- Add SEO metadata for new pages
- Use existing shadcn/ui components when possible

---

## Git Workflow

- **Base Branch:** `dev` (create feature branches from here)
- **Branch Naming:** `feature/`, `fix/`, `docs/` prefixes
- **Commit Style:** Conventional commits (`feat:`, `fix:`, `docs:`, etc.)

```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature
# Make changes
npm run ci  # Verify all checks pass
git commit -m "feat: add new feature"
git push origin feature/your-feature
```

---

## Environment Variables

All optional for local development:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID |

Create `.env.local` from `.env.example` for local overrides.

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `next.config.ts` | Next.js config, MCP server, security headers |
| `tailwind.config.ts` | Tailwind theme/config, loaded by `globals.css` via `@config` (v4) |
| `tsconfig.json` | TypeScript strict config |
| `components.json` | shadcn/ui configuration |
| `middleware.ts` | CSP nonce generation |
| `apphosting.prd.yaml` | Firebase production config |
| `apphosting.dev.yaml` | Firebase development config |

---

## Testing

### Automated Tests
```bash
npm run test                    # Run all Vitest tests
npm run test -- --watch        # Watch mode
```

Test files located in `src/lib/*.test.ts`:
- `structured-data.test.ts` - SEO schema generation
- `rate-limit.test.ts` - Rate limiting utilities
- `bitcoin-validation.test.ts` - Bitcoin address validation

### Manual Testing Checklist
- [ ] All routes load without errors
- [ ] Dark/light theme toggle works
- [ ] Cookie consent banner functions
- [ ] Responsive design on mobile/tablet/desktop
- [ ] TypeScript: `npm run typecheck`
- [ ] Linting: `npm run lint`
- [ ] Build succeeds: `npm run build`

---

## Security Features

- **Security Headers:** CSP, HSTS, X-Frame-Options (in `next.config.ts`)
- **Rate Limiting:** API endpoints protected (`src/lib/rate-limit.ts`)
- **Input Validation:** Zod schemas for all forms
- **GDPR Compliance:** Cookie consent system with gated analytics

---

## MCP Server Integration

The project has MCP (Model Context Protocol) enabled for AI coding agents:
- Config: `experimental.mcpServer: true` in `next.config.ts`
- Additional config: `.mcp.json` in project root

---

## Troubleshooting

### Port 3000 in use
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Build errors after pulling changes
```bash
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript errors
```bash
npm run typecheck
# Restart TS server in VSCode: Cmd/Ctrl + Shift + P → "Restart TS Server"
```

### Tailwind not working
```bash
rm -rf .next
npm run dev
# Verify globals.css imported in layout.tsx
```

---

## Documentation Location

All markdown documentation stored in `docs/` folder:
- `docs/PROJECT_SUMMARY.md` - Comprehensive project overview
- `docs/PRD.md` - Product requirements
- `docs/todo.md` - UI/UX improvement ideas
- `docs/archive/` - Historical documentation

Root-level docs:
- `README.md` - Setup and overview
- `CONTRIBUTING.md` - Contribution guidelines
- `AGENTS.md` - AI agent configuration
- `CHANGELOG.md` - Version history

---

## Quick Links

- [README.md](./README.md) - Full setup guide
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution workflow
- [docs/PROJECT_SUMMARY.md](./docs/PROJECT_SUMMARY.md) - Detailed project state
- [docs/PRD.md](./docs/PRD.md) - Product requirements

---

**Last Updated:** January 2026
**Next.js Version:** 16.1.1
**React Version:** 19.2.3
