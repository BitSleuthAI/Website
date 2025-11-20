# Documentation Archive

This folder contains historical documentation for completed implementations and tasks. These documents are kept for reference purposes but represent work that has already been completed and integrated into the codebase.

## Why Archive These Documents?

While these documents contain valuable information about past implementations, keeping them in the main `docs/` folder alongside active documentation can be confusing for new developers. By archiving them:

1. **Clarity**: New developers see only current, actionable documentation
2. **History**: We preserve the implementation context and decisions
3. **Reference**: Details are available when needed for maintenance or understanding
4. **Organization**: Clean documentation structure

## Archived Documents

### SEO & Search Optimization

#### `GLOSSARY_SEO_UPDATES.md`
**Completed:** November 2024  
**What it documents:** Dynamic sitemap generation and AI bot optimization for glossary pages

**Current Status:**
- ✅ Dynamic sitemap reads filesystem automatically
- ✅ AI bots (GPTBot, PerplexityBot, etc.) have explicit crawl permissions
- ✅ All 44 glossary terms automatically included

**Maintenance:** No action needed. New glossary terms auto-include in sitemap.

---

#### `AEO_COMPLETION_SUMMARY.md`
**Completed:** November 2024  
**What it documents:** Summary of Answer Engine Optimization (AEO) implementation for all 44 glossary pages

**Current Status:**
- ✅ 100% complete (44/44 pages)
- ✅ All pages use GlossaryPageWrapper component
- ✅ Structured data (JSON-LD) on all pages
- ✅ Optimized for AI search engines (ChatGPT, Claude, Perplexity)

**Maintenance:** Use `GlossaryPageWrapper` for new glossary terms.

---

#### `AEO_IMPLEMENTATION_GUIDE.md`
**Completed:** November 2024  
**What it documents:** Step-by-step guide for implementing AEO on glossary pages

**Current Status:**
- ✅ Infrastructure complete (glossary-metadata.ts, structured-data.ts, GlossaryPageWrapper.tsx)
- ✅ Pattern established and applied to all 44 pages
- ✅ Template available in existing pages (bitcoin, wallet, bip39)

**Maintenance:** Reference existing pages when adding new terms.

---

#### `AEO_RESULTS_SUMMARY.md`
**Completed:** November 2024  
**What it documents:** Technical details and expected outcomes of AEO implementation

**Current Status:**
- ✅ All structured data schemas implemented
- ✅ SEO metadata and Open Graph tags on all pages
- ✅ Internal linking and knowledge graph construction complete
- ✅ Learning hub positioning established

**Maintenance:** Monitor search engine performance and AI referrals.

---

### Design & UI Updates

#### `EDGE_TO_EDGE_IMPLEMENTATION.md`
**Completed:** November 2025  
**What it documents:** Edge-to-edge viewport implementation for modern mobile experience

**Current Status:**
- ✅ Viewport meta tag with `viewport-fit=cover` (line 51 in layout.tsx)
- ✅ CSS safe area utility classes in globals.css
- ✅ All components (Header, Footer, Toast, Sheet, Cookie Banner) respect safe areas
- ✅ Works on iOS 11.2+, Android Chrome 69+

**Maintenance:** Apply safe area patterns to new fixed/overlay components.

---

#### `SHADCN_UPDATE.md`
**Completed:** January 2025  
**What it documents:** shadcn/ui and Radix UI component updates to latest versions

**Current Status:**
- ✅ All Radix UI packages at latest stable versions
- ✅ shadcn CLI v3.5.0
- ✅ tailwind-merge v3.4.0
- ✅ All updates non-breaking (minor/patch versions)

**Maintenance:** Check for updates quarterly with `npm update`.

---

#### `TAILWIND_V3_DOWNGRADE.md`
**Completed:** January 2025  
**What it documents:** Decision to use Tailwind v3 instead of v4, and the migration that fixed styling issues

**Current Status:**
- ✅ Tailwind CSS v3.4.18 (stable, production-ready)
- ✅ PostCSS configured for v3
- ✅ All styling working correctly
- ✅ Compatible with shadcn/ui and ecosystem

**Future Migration:** Wait for shadcn/ui v4 support before upgrading. See document for migration guide.

**Maintenance:** Stay on v3 until ecosystem is ready for v4.

---

## For Current Implementation Details

See the consolidated **`../IMPLEMENTATION_HISTORY.md`** document, which provides:
- Summary of all completed work
- Current state of each implementation
- Maintenance guidelines
- Where to find code in the repository

## For Active Documentation

Return to the main `docs/` folder for:
- `PRD.md` - Product Requirements Document
- `SEO_STRATEGY.md` - Ongoing SEO strategy
- `MCP_SERVER.md` - Development tool configuration
- `IMPLEMENTATION_HISTORY.md` - Consolidated implementation summary
- `todo.md` - Future improvement ideas

---

**Archive Created:** November 20, 2025  
**Purpose:** Preserve implementation history while maintaining clean active documentation
