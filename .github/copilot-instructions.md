# Copilot Instructions for BitSleuth Website

## Project Architecture
- **Framework:** Next.js 15 (App Router), React 18, TypeScript
- **UI:** Tailwind CSS, shadcn/ui, Radix primitives
- **Structure:**
  - `src/app/`: App Router pages, product landing, glossary, API endpoints, SEO files
  - `src/components/`: UI and landing page components, theme management
  - `src/hooks/`: Custom React hooks
  - `src/lib/`: Utility functions
  - `public/`: Static assets
  - `docs/`: Product, SEO, and UI documentation

## Key Patterns & Conventions
- **Component Organization:**
  - Use `src/components/landing/` for product/marketing sections
  - Use `src/components/ui/` for shadcn/ui-based primitives
  - Theme toggling via `theme-provider.tsx` and `ThemeToggle.tsx`
- **Routing:**
  - App Router structure; page files in `src/app/`
  - SEO handled via `robots.ts` and `sitemap.ts`
- **Glossary:**
  - Terms in `src/app/glossary/` as folders with individual pages
- **API:**
  - Minimal API endpoints (e.g., `src/app/api/waitlist/`)
- **Styling:**
  - Tailwind config in `tailwind.config.ts`, custom Bitcoin-inspired palette
  - Responsive and dark/light mode support

## Developer Workflow
- **Start Dev Server:** `npm run dev` (default port: 9002)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Typecheck:** `npm run typecheck`
- **Environment:** Use `.env.local` for secrets; see README for details
- **Manual Testing:**
  - Check all routes, theme toggle, cookie consent, analytics gating
- **Troubleshooting:**
  - Port 9002: `lsof -ti:9002 | xargs kill -9`
  - Clear cache: `rm -rf .next`

## Integration Points
- **Google Analytics:** Consent-gated, see `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- **Firebase Hosting:** Automated deploys, see README for manual steps

## Project-Specific Advice
- **Strict TypeScript:** All code must pass typecheck
- **SEO:** Metadata, robots, and sitemap are custom per page
- **Accessibility:** Use shadcn/ui and Radix for accessible primitives
- **No console.log in production**
- **Branching:** Use `dev` as base, follow `feature/` or `fix/` naming

## References
- See `README.md` for full workflow, routes, and troubleshooting
- See `docs/PRD.md` and `docs/SEO_STRATEGY.md` for requirements and SEO
- See `src/components/landing/` and `src/components/ui/` for UI patterns

## Documentation File Organization
- **All markdown documentation files (`.md`) must be stored in the `docs/` folder**
- This ensures consistency and makes documentation easy to find
- When creating new documentation, always place it in the `docs/` directory

---
For unclear conventions or missing details, ask for clarification or review the README and docs folder.