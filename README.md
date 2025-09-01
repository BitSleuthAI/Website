## BitSleuth Website — AI‑Powered Bitcoin Wallet Analysis

BitSleuth is a Next.js 15 website featuring product landing pages for an AI‑powered Bitcoin wallet analyzer and a Bitcoin wallet app, an educational glossary, SEO pages, cookie consent with analytics gating, and an internal AI flow (Genkit + Gemini) to generate landing‑page copy variants.

Production domain: `https://www.bitsleuth.ai`

### Highlights
- **Landing pages**: `/analyzer` and `/wallet` with sections for features, how it works, pricing, FAQs, testimonials, and about.
- **Home**: `/` concise overview with hero and about.
- **Glossary**: `/glossary` with per‑term pages for key Bitcoin concepts.
- **SEO**: custom `robots.ts` and `sitemap.ts` wired to `https://www.bitsleuth.ai`.
- **Cookie consent + GA**: Analytics are loaded only after consent.
- **Theming/UI**: Tailwind CSS + shadcn/ui + Radix; light/dark with a theme provider.
- **AI flow**: Genkit + Google AI (Gemini 2.0 Flash) for generating landing‑page copy variants.

---

### Tech Stack
- **Framework**: Next.js 15 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui, Radix primitives
- **AI**: Genkit (`@genkit-ai/next`, `@genkit-ai/googleai`) using `googleai/gemini-2.0-flash`
- **UX**: Embla Carousel, Lucide icons
- **SEO**: App Router metadata routes (`robots.ts`, `sitemap.ts`)

---

### Project Structure
```
src/
  app/
    page.tsx                # Home
    analyzer/page.tsx       # Analyzer landing page
    wallet/page.tsx         # Wallet landing page
    glossary/...            # Glossary index and term pages
    privacy-policy/page.tsx # Policy page
    terms-of-service/page.tsx
    robots.ts               # SEO robots.txt
    sitemap.ts              # SEO sitemap
    layout.tsx              # Root layout (theme, consent, GA)
  ai/
    genkit.ts               # Genkit setup (Google AI plugin + model)
    flows/generate-landing-page-copy.ts
  components/landing/...    # Reusable landing UI sections
  components/ui/...         # shadcn/ui components
```

---

### Available Routes
- `/` — Home
- `/analyzer` — Product page for the AI wallet analyzer
- `/wallet` — Product page for the wallet app
- `/glossary` and `/glossary/[term]` — Bitcoin glossary
- `/privacy-policy` and `/terms-of-service` — Legal pages

---

### Getting Started

Prerequisites:
- Node.js 18+ (or 20+ recommended)

Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```

Type checking and linting:
```bash
npm run typecheck
npm run lint
```

Build and start (production):
```bash
npm run build
npm run start
```

---

### AI: Generate Landing‑Page Copy (Genkit)
The project uses Genkit with Google AI to generate copy variants.

Config lives in `src/ai/genkit.ts`, flow in `src/ai/flows/generate-landing-page-copy.ts`.

1) Set your Google AI API key for local development (choose one):
- `.env.local` for Next.js runtime
- `.env` for Genkit CLI runtime

```
GOOGLE_GENAI_API_KEY=your_api_key_here
```

2) Start the Genkit developer UI (optional):
```bash
npm run genkit:dev
```

3) Example server‑side usage:
```ts
// In a server action, route handler, or server component
import { generateLandingPageCopy } from '@/ai/flows/generate-landing-page-copy';

const res = await generateLandingPageCopy({
  productName: 'BitSleuth Analyzer',
  targetAudience: 'crypto analysts and investigators',
  valueProposition: 'AI‑powered wallet insights and OPSEC risk detection',
  numberOfVariants: 3,
  tone: 'professional',
});

console.log(res.copyVariants);
```

---

### Analytics and Privacy
- Google Analytics (G‑tag) is conditionally injected in `src/app/layout.tsx`.
- Analytics load only after the user consents via the cookie banner (`cookie_consent`).
- Update or externalize the GA Measurement ID as needed.

---

### Styling & Theming
- Tailwind configured in `tailwind.config.ts` with CSS variables and shadcn tokens.
- `ThemeProvider` enables system/light/dark.

---

### Scripts (from `package.json`)
- `dev` — Start Next.js dev server (Turbopack) on port 9002
- `build` — Next.js production build
- `start` — Start production server
- `lint` — Run Next.js lint
- `typecheck` — TypeScript no‑emit check
- `genkit:dev` — Launch Genkit dev UI with `src/ai/dev.ts`
- `genkit:watch` — Watch mode variant for Genkit

---

### Design Blueprint
See `docs/blueprint.md` for style guidelines (colors, typography, interactions) aligned with BitSleuth branding.

---

### Deployment
- Works well on Vercel (Next.js 15). Ensure environment variables are configured.
- `next.config.ts` disables build‑blocking type and ESLint errors; enable in CI as needed.
- Images are currently unoptimized (`images.unoptimized: true`). Adjust for production.

---

### License

**PROPRIETARY SOFTWARE** - Copyright (c) 2025 BitSleuth. All rights reserved.

This software is the proprietary and confidential information of BitSleuth. 
It is provided solely for use by BitSleuth and its authorized personnel. 
This software is not intended for public distribution or open source use.

For licensing inquiries, contact: legal@bitsleuth.ai

---

Built with ❤️ by BitSleuth.
