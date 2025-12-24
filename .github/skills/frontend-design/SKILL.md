---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with exceptional design quality for the BitSleuth marketing website. Use this skill when building web components, pages, or applications. Generates polished, trustworthy code that reflects Bitcoin analysis tools' precision and professionalism.
---

This skill guides creation of world-class, production-grade frontend interfaces for BitSleuth's marketing website. Build real working code with exceptional attention to aesthetic details, performance, and conversion optimization.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## BitSleuth Brand Identity

Before coding, understand BitSleuth's core brand attributes:
- **Mission**: Empower Bitcoin users with privacy-focused analysis tools and education
- **Audience**: Bitcoin analysts, investigators, compliance professionals, privacy-conscious users, and Bitcoin newcomers seeking education
- **Brand Pillars**: Trustworthy, professional, educational, privacy-first, technically precise
- **Visual Identity**: Bitcoin Orange (#FD8B3B / `hsl(27 96% 61%)`), sleek dark mode, polished light mode
- **Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui, Radix primitives

## Design Thinking

Before coding, understand the context and align with BitSleuth's professional aesthetic:
- **Purpose**: What problem does this interface solve? How does it serve Bitcoin analysts, investigators, or learners?
- **Tone**: Professional yet approachable. Trustworthy precision with warmth. Educational without condescension. Privacy-focused without paranoia.
- **Constraints**: Must work with Next.js 16 App Router, Tailwind CSS, shadcn/ui components, and Radix primitives. Mobile-first, accessible, performant.
- **Differentiation**: What makes this memorable and conversion-focused? How does it build trust and authority in Bitcoin analysis?

**CRITICAL**: BitSleuth demands **second-to-none frontend design**. Every pixel, interaction, and animation must reflect the precision expected from Bitcoin analysis tools. This is not generic marketing—this is professional-grade design that converts visitors into users.

Then implement working code that is:
- Production-grade, type-safe TypeScript with Next.js 16 App Router
- Visually polished with BitSleuth's brand identity
- Conversion-optimized for user acquisition
- Accessible (WCAG 2.1 AA minimum) with Radix primitives
- Performance-focused (Core Web Vitals optimized)
- Mobile-first and responsive across all devices

## Frontend Design Standards

### Typography
- **Primary Font**: Inter (already configured as `--font-inter`)
- **Hierarchy**: Clear distinction between headings, body, and UI text
- **Gradient Headings**: Use BitSleuth's heading gradient (`--heading-start`, `--heading-via`, `--heading-end`) for impactful headlines
- **Readability**: Optimal line-height (1.6 for body), letter-spacing, and contrast ratios
- **Code/Monospace**: Reserve for Bitcoin addresses, transaction IDs, and technical data

### Color & Theme
- **Bitcoin Orange**: Primary brand color `hsl(27 96% 61%)` for CTAs, highlights, and brand moments
- **Light Theme**: Clean, professional with subtle orange accents. Background `hsl(0 0% 100%)`, foreground `hsl(240 10% 3.9%)`
- **Dark Theme**: Premium, sleek with glowing orange accents. Background `hsl(240 10% 3.9%)`, foreground `hsl(0 0% 98%)`
- **CSS Variables**: Always use semantic tokens (`--primary`, `--background`, `--foreground`) for theme consistency
- **Accent Usage**: Use complementary colors sparingly—Bitcoin Orange should dominate as the brand anchor

### Motion & Interaction
- **Purposeful Animations**: Every animation should enhance UX, not distract. Beam animations (already configured) for hero sections.
- **Micro-interactions**: Subtle hover states, focus rings (using `--ring`), and transitions (200-300ms) for professional feel
- **Page Transitions**: Smooth, staggered reveals for landing page sections (use `animation-delay`)
- **Performance**: CSS-only animations preferred. Use `will-change` sparingly. Respect `prefers-reduced-motion`
- **Call-to-Action**: Animated buttons with glow effects (`shadow-glow`) to draw attention without being garish

### Layout & Composition
- **Mobile-First**: Design for 320px+ viewports first, enhance for tablet (768px) and desktop (1024px+)
- **Grid Systems**: Use Tailwind's grid/flex utilities. Container max-width `1400px` (2xl breakpoint)
- **Whitespace**: Generous spacing for clarity. Use Tailwind's spacing scale (p-4, p-8, p-16) consistently
- **Component Structure**: shadcn/ui components for UI primitives (buttons, cards, inputs). Radix for accessible interactions (dropdowns, dialogs, tooltips)
- **Visual Hierarchy**: Clear F-pattern or Z-pattern layouts that guide users to conversion points

### Components & Patterns
- **shadcn/ui**: Leverage existing 40+ components (Button, Card, Dialog, Form, etc.) for consistency
- **Radix Primitives**: Use for accessible dropdowns, tooltips, accordions, tabs
- **Custom Components**: Build in `/src/components/landing/` for marketing sections
- **Reusability**: DRY principles—create composable, reusable components with TypeScript props
- **Form Handling**: React Hook Form + Zod validation for robust form UX

### Backgrounds & Visual Details
- **Gradient Meshes**: Subtle orange-to-dark gradients for hero sections
- **Glass Effects**: Use backdrop-blur with subtle opacity for modern card overlays
- **Shadows**: Elevation with shadow-sm, shadow-md, shadow-lg. Glow effects (`shadow-glow`) for CTAs
- **Borders**: Consistent `border` color token. Rounded corners using `--radius` (0.75rem)
- **Icons**: Lucide icons (475+ available) for consistency. Use 20px-24px sizes for UI, 32px+ for features

### SEO & Performance
- **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3), landmarks (nav, main, footer)
- **Image Optimization**: Next.js Image component with proper alt text, lazy loading, modern formats (WebP/AVIF)
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1. Use `priority` for above-fold images
- **Metadata**: Always include proper meta tags, Open Graph, and Twitter Cards for sharing

## Quality Standards

**Second-to-none design means:**
- ✅ Zero TypeScript errors (`npm run typecheck` passes)
- ✅ Zero ESLint warnings (`npm run lint` passes)
- ✅ Mobile-first responsive design (320px to 2560px viewports)
- ✅ Accessible (keyboard navigation, screen readers, WCAG 2.1 AA)
- ✅ Performant (optimized images, minimal JS, efficient CSS)
- ✅ Conversion-focused (clear CTAs, trust signals, social proof)
- ✅ Brand-consistent (Bitcoin Orange, Inter font, CSS variables)
- ✅ Production-ready (no console logs, no placeholder content)

**NEVER:**
- ❌ Generic "startup" aesthetics (purple gradients, bland layouts)
- ❌ Accessibility violations (poor contrast, missing focus states, no keyboard support)
- ❌ Performance sins (unoptimized images, massive bundles, layout shifts)
- ❌ Brand inconsistencies (off-brand colors, wrong fonts, mismatched tone)
- ❌ Sloppy code (any/unknown types, inline styles instead of Tailwind, missing error handling)

Remember: BitSleuth is a professional Bitcoin analysis platform. Design must reflect the precision, trustworthiness, and expertise users expect from their analysis tools. Every component should inspire confidence and drive conversions.
