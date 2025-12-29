# BitSleuth Website Design Consistency Guide

This document outlines the design standards and patterns used across the BitSleuth marketing website to ensure visual consistency, maintainability, and professional quality.

## Color System

### Semantic Color Tokens
All colors MUST use CSS variables defined in `src/app/globals.css`. Never use hardcoded color values.

**✅ Correct:**
```tsx
<Card className="bg-card border-none">
  <p className="text-muted-foreground">Description text</p>
</Card>
```

**❌ Incorrect:**
```tsx
<Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none">
  <p className="text-gray-400">Description text</p>
</Card>
```

### Color Token Reference

#### Background Colors
- `bg-background` - Main page background
- `bg-card` - Card backgrounds (replaces hardcoded grays)
- `bg-primary` - Primary brand color (Bitcoin Orange)
- `bg-secondary` - Secondary backgrounds
- `bg-muted` - Muted backgrounds

#### Text Colors
- `text-foreground` - Primary text color
- `text-muted-foreground` - Secondary/description text (replaces `text-gray-400`)
- `text-primary` - Bitcoin Orange accent text
- `text-card-foreground` - Text on cards

#### Bitcoin Orange Usage
- Primary brand color: `hsl(27 96% 61%)` / `#FD8B3B`
- Use for CTAs, highlights, brand moments, and accents
- Available as: `text-primary`, `bg-primary`, `border-primary`

## Typography

### Font System
- **Primary Font:** Inter (configured as `--font-inter`)
- **Body Text:** `font-normal` (400 weight)
- **Headings:** `font-bold` (700 weight) or `font-extrabold` (800 weight)
- **Line Height:** `leading-relaxed` (1.6) for body text

### Heading Hierarchy
```tsx
// Page title (H1)
<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
  
// Section title (H2)
<h2 className="text-3xl font-bold sm:text-4xl mb-4 text-foreground">
  
// Subsection title (H3)
<h3 className="text-2xl font-bold text-foreground mb-4">

// Card title
<h3 className="text-xl font-bold text-foreground">
```

### Gradient Headings
For impact, use Bitcoin Orange gradients:
```tsx
<span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
  Two Powerful Tools.
</span>
```

## Spacing & Layout

### Section Padding
Standardized section padding for all pages:
```tsx
// Standard section
<section className="py-16 md:py-20 lg:py-24">

// Alternate (used in some hero sections)
<section className="py-20 md:py-24 lg:py-32">
```

### Container Widths
```tsx
// Standard container
<div className="container max-w-7xl mx-auto px-4 md:px-6">

// Narrow content (prose, forms)
<div className="container max-w-4xl mx-auto px-4 md:px-6">

// Wide content (galleries, demos)
<div className="container max-w-6xl mx-auto px-4 md:px-6">
```

### Element Spacing
```tsx
// Vertical spacing in content blocks
<div className="space-y-6">  // 1.5rem gaps
<div className="space-y-8">  // 2rem gaps
<div className="space-y-12"> // 3rem gaps

// Grid gaps
<div className="grid gap-8">     // Standard grid
<div className="grid gap-6">     // Compact grid
<div className="grid gap-12">    // Spacious grid
```

## Component Patterns

### Cards
Standard card styling across the site:
```tsx
<Card className="bg-card border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
  <CardHeader className="p-6">
    <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
      <IconComponent className="h-8 w-8 text-primary" />
    </div>
  </CardHeader>
  <CardContent className="p-6">
    <CardTitle className="text-xl font-bold text-foreground">Title</CardTitle>
    <CardDescription className="font-normal text-muted-foreground">
      Description text
    </CardDescription>
  </CardContent>
</Card>
```

### Buttons
```tsx
// Primary CTA
<Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
  
// Secondary/Outline
<Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 hover:text-primary">
```

### Icon Sizing
- **Feature icons:** `h-6 w-6` or `h-8 w-8`
- **Hero section icons:** `h-12 w-12`
- **Small UI icons:** `h-4 w-4` or `h-5 w-5`

### Badges (ValueBadge)
```tsx
<ValueBadge icon={CheckCircle} text="No Registration" variant="primary" />
```

## Animations & Interactions

### Standard Transitions
```tsx
// Card hover effects
className="transition-all duration-300 hover:-translate-y-2"

// Image zoom effects
className="hover:scale-105 transition-transform duration-500"

// Fast color transitions
className="transition-colors"

// Smooth transforms
className="transition-transform"
```

### Hover States
- Cards: `-translate-y-2` with shadow increase
- Images: `scale-105` zoom
- Buttons: `bg-primary/90` for primary, `bg-primary/10` for outline
- Icons: Subtle rotation or translation

### Focus States
Always use the ring color for focus:
```tsx
className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
```

## Backgrounds

### Hero Section Pattern
```tsx
<section className="edge-to-edge-section relative overflow-hidden py-20 md:py-24 lg:py-32">
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background z-0" />
  
  {/* Background beams */}
  <BackgroundBeams intensity="subtle" className="opacity-30" />
  
  {/* Content */}
  <div className="container max-w-7xl mx-auto relative z-10">
    {/* ... */}
  </div>
</section>
```

### Alternating Sections
For visual hierarchy, alternate between:
- `bg-background` (transparent/default)
- Gradient overlays with `from-primary/10`

## Dark Mode

### Implementation
All semantic tokens automatically adapt to dark mode via the `.dark` class on `<html>`.

**Light Mode Colors:**
- Background: `hsl(0 0% 100%)` (white)
- Foreground: `hsl(240 10% 3.9%)` (near black)
- Card: `hsl(0 0% 100%)` (white)

**Dark Mode Colors:**
- Background: `hsl(240 10% 3.9%)` (dark gray)
- Foreground: `hsl(0 0% 98%)` (near white)
- Card: `hsl(240 10% 6%)` (slightly lighter than bg)

### Testing Dark Mode
Always verify:
1. Text contrast meets WCAG AA standards
2. Card backgrounds are distinct from page background
3. Shadows are visible (use `shadow-primary/10` for colored glow)
4. Images have appropriate overlays if needed

## Responsive Design

### Breakpoints (Tailwind defaults)
- `sm:` - 640px (mobile landscape)
- `md:` - 768px (tablet)
- `lg:` - 1024px (desktop)
- `xl:` - 1280px (large desktop)
- `2xl:` - 1536px (extra large)

### Mobile-First Patterns
```tsx
// Text sizing
className="text-4xl sm:text-5xl xl:text-6xl"

// Padding adjustments
className="py-16 md:py-20 lg:py-24"

// Grid layouts
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"

// Flex to row
className="flex flex-col sm:flex-row gap-4"
```

### Viewport Testing
Test all pages at these key widths:
- 320px (small mobile)
- 375px (iPhone)
- 768px (iPad portrait)
- 1024px (iPad landscape)
- 1400px (desktop)
- 1920px (large desktop)

## SEO & Accessibility

### Semantic HTML
```tsx
// Proper landmark structure
<header>
  <nav>
    
<main>
  <section>
    <h1> {/* Only one per page */}
    <h2> {/* Section headings */}
    
<footer>
```

### Image Optimization
```tsx
import Image from 'next/image'

<Image
  src="/images/hero.png"
  alt="Descriptive alternative text"
  width={600}
  height={400}
  priority // For above-fold images
  className="object-cover"
/>
```

### Link Accessibility
```tsx
// Internal links
<Link href="/analyzer" className="text-primary hover:underline">
  
// External links
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
```

## File Organization

### Component Structure
```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── analyzer/page.tsx     # Product pages
│   ├── wallet/page.tsx
│   ├── learn/page.tsx        # Educational content
│   └── glossary/             # Terminology
│       └── [term]/page.tsx
├── components/
│   ├── landing/              # Marketing sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   └── ...
│   ├── ui/                   # shadcn/ui components
│   └── glossary/             # Glossary-specific
└── lib/
    └── utils.ts              # Utility functions
```

## Quality Checklist

Before committing design changes, verify:

- [ ] ✅ Uses semantic color tokens (no hardcoded colors)
- [ ] ✅ Text contrast meets WCAG AA (4.5:1 for normal text)
- [ ] ✅ Consistent spacing (section padding, grid gaps)
- [ ] ✅ Standard transitions (duration-300 for interactions)
- [ ] ✅ Responsive on mobile (320px+), tablet (768px), desktop (1024px+)
- [ ] ✅ Dark mode tested and functional
- [ ] ✅ Semantic HTML structure (proper headings, landmarks)
- [ ] ✅ Images optimized with Next.js Image component
- [ ] ✅ Accessible (keyboard navigation, focus states, ARIA labels)
- [ ] ✅ TypeScript strict mode passes
- [ ] ✅ No console errors or warnings

## Common Mistakes to Avoid

### ❌ Hardcoded Colors
```tsx
// Bad
className="bg-gray-100 dark:bg-[#1a1a1a]"
className="text-gray-400"

// Good
className="bg-card"
className="text-muted-foreground"
```

### ❌ Inconsistent Spacing
```tsx
// Bad - mixing spacing scales
<section className="py-10 md:py-16 lg:py-28">

// Good - standard progression
<section className="py-16 md:py-20 lg:py-24">
```

### ❌ Accessibility Violations
```tsx
// Bad - missing alt text
<img src="/logo.png" />

// Good - descriptive alt
<Image src="/logo.png" alt="BitSleuth Bitcoin Analysis Logo" width={40} height={40} />
```

### ❌ Performance Issues
```tsx
// Bad - unoptimized image
<img src="/large-hero.png" className="w-full" />

// Good - Next.js Image with priority
<Image src="/large-hero.png" alt="Hero" fill priority className="object-cover" />
```

## References

- **Tailwind Config:** `tailwind.config.ts`
- **Global Styles:** `src/app/globals.css`
- **Color Variables:** CSS custom properties in `globals.css`
- **Frontend Design Skill:** `.github/skills/frontend-design/SKILL.md`
- **Component Library:** shadcn/ui documentation
- **Icons:** Lucide React (475+ icons available)

---

**Last Updated:** 2025-12-29  
**Maintained by:** BitSleuth Development Team
