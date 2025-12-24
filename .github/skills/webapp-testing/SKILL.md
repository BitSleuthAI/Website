---
name: webapp-testing
description: Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs.
---

# Web Application Testing

This skill enables comprehensive testing and debugging of the BitSleuth website using Playwright automation.

## When to Use This Skill

Use this skill when you need to:
- Test frontend functionality in a real browser
- Verify UI behavior and interactions
- Debug web application issues
- Capture screenshots for documentation or debugging
- Inspect browser console logs
- Validate form submissions and user flows
- Check responsive design across viewports
- Test dark/light theme switching
- Verify cookie consent and analytics implementation
- Validate SEO metadata and structured data

## Prerequisites

- Node.js 18+ installed (20+ recommended)
- BitSleuth website running locally on port 9002
- Playwright will be installed automatically if not present

### Starting the Development Server
```bash
npm run dev
# Server runs on http://localhost:9002
```

## Core Capabilities

### 1. Browser Automation
- Navigate to URLs
- Click buttons and links
- Fill form fields
- Select dropdowns
- Handle dialogs and alerts
- Toggle theme (dark/light mode)
- Interact with cookie consent modal

### 2. Verification
- Assert element presence
- Verify text content
- Check element visibility
- Validate URLs and navigation
- Test responsive behavior
- Verify theme persistence
- Check SEO metadata

### 3. Debugging
- Capture screenshots
- View console logs
- Inspect network requests
- Debug failed tests
- Monitor analytics events

## BitSleuth-Specific Routes to Test

### Main Pages
- `/` - Homepage with overview
- `/analyzer` - Bitcoin wallet analyzer product page
- `/wallet` - Bitcoin wallet app product page
- `/wallet/download` - Wallet download page
- `/learn` - Learning resources
- `/history` - Company history
- `/privacy-policy` - Privacy policy
- `/terms-of-service` - Terms of service
- `/company-information` - Company information
- `/ai-training-content` - AI/LLM training content

### Glossary Routes
- `/glossary` - Bitcoin terminology index (44 terms)
- `/glossary/bitcoin` - Example term page
- `/glossary/wallet` - Example term page
- `/glossary/lightning-network` - Example term page

## Usage Examples

### Example 1: Basic Navigation Test
```javascript
// Navigate to homepage and verify title
await page.goto('http://localhost:9002');
const title = await page.title();
console.log('Page title:', title);

// Navigate to analyzer page
await page.goto('http://localhost:9002/analyzer');
await page.waitForSelector('h1');
```

### Example 2: Theme Toggle Test
```javascript
// Test dark/light theme switching
await page.goto('http://localhost:9002');

// Click theme toggle button
await page.click('[aria-label*="Toggle theme"]');

// Verify theme changed (check HTML class or data attribute)
const htmlClass = await page.getAttribute('html', 'class');
console.log('Theme class:', htmlClass);

// Capture screenshot in dark mode
await page.screenshot({ path: 'dark-theme.png', fullPage: true });
```

### Example 3: Cookie Consent Test
```javascript
// Test cookie consent banner
await page.goto('http://localhost:9002');

// Wait for cookie consent banner to appear
await page.waitForSelector('[role="dialog"]', { timeout: 3000 });

// Click accept cookies button
await page.click('button:has-text("Accept")');

// Verify banner is dismissed
const bannerVisible = await page.locator('[role="dialog"]').isVisible();
console.log('Banner still visible:', bannerVisible);
```

### Example 4: Glossary Navigation Test
```javascript
// Navigate to glossary and verify terms load
await page.goto('http://localhost:9002/glossary');
await page.waitForSelector('h1');

// Click on a glossary term
await page.click('a[href="/glossary/bitcoin"]');
await page.waitForURL('**/glossary/bitcoin');

// Verify term page loaded
const heading = await page.textContent('h1');
console.log('Term heading:', heading);
```

### Example 5: Responsive Design Test
```javascript
// Test mobile viewport
await page.setViewportSize({ width: 375, height: 667 });
await page.goto('http://localhost:9002');
await page.screenshot({ path: 'mobile-view.png' });

// Test tablet viewport
await page.setViewportSize({ width: 768, height: 1024 });
await page.screenshot({ path: 'tablet-view.png' });

// Test desktop viewport
await page.setViewportSize({ width: 1920, height: 1080 });
await page.screenshot({ path: 'desktop-view.png' });
```

### Example 6: Form Submission Test (Waitlist)
```javascript
// Navigate to a page with waitlist signup
await page.goto('http://localhost:9002/analyzer');

// Fill out waitlist form
await page.fill('input[type="email"]', 'test@example.com');
await page.click('button:has-text("Join")');

// Wait for success message or redirect
await page.waitForSelector('.success-message', { timeout: 5000 });
```

## Guidelines

1. **Always verify the app is running** - Check that http://localhost:9002 is accessible before running tests
2. **Use explicit waits** - Wait for elements or navigation to complete before interacting
3. **Capture screenshots on failure** - Take screenshots to help debug issues
4. **Clean up resources** - Always close the browser when done
5. **Handle timeouts gracefully** - Set reasonable timeouts for slow operations (page loads can take 2-3 seconds)
6. **Test incrementally** - Start with simple interactions before complex flows
7. **Use semantic selectors** - Prefer role-based selectors, text content, or data-testid attributes
8. **Test both themes** - Verify functionality in both dark and light modes
9. **Check responsive behavior** - Test on mobile (375px), tablet (768px), and desktop (1920px) viewports
10. **Verify cookie consent** - Ensure cookie banner displays and dismisses correctly

## Common Patterns

### Pattern: Wait for Page Load
```javascript
await page.goto('http://localhost:9002/analyzer');
await page.waitForLoadState('networkidle');
```

### Pattern: Check if Element Exists
```javascript
const exists = await page.locator('h1').count() > 0;
```

### Pattern: Get Console Logs
```javascript
page.on('console', msg => console.log('Browser log:', msg.text()));
await page.goto('http://localhost:9002');
```

### Pattern: Handle Errors with Screenshots
```javascript
try {
  await page.click('button:has-text("Join Waitlist")');
} catch (error) {
  await page.screenshot({ path: 'error-screenshot.png', fullPage: true });
  throw error;
}
```

### Pattern: Test Navigation
```javascript
// Click link and verify navigation
await page.click('a[href="/glossary"]');
await page.waitForURL('**/glossary');
const url = page.url();
console.log('Current URL:', url);
```

### Pattern: Verify Theme Attribute
```javascript
// Check current theme
const theme = await page.getAttribute('html', 'data-theme');
// or
const htmlClass = await page.getAttribute('html', 'class');
const isDark = htmlClass.includes('dark');
```

## BitSleuth-Specific Testing Checklist

When testing the BitSleuth website, verify:
- [ ] All main routes load correctly (`/`, `/analyzer`, `/wallet`, `/glossary`)
- [ ] Responsive design on mobile (375px), tablet (768px), and desktop (1920px)
- [ ] Dark/light theme toggle functions properly and persists
- [ ] Cookie consent banner displays and functions correctly
- [ ] Analytics tracking works (with proper consent gating)
- [ ] SEO metadata displays correctly (check page source)
- [ ] All glossary terms are accessible (44 terms total)
- [ ] Navigation between pages works smoothly
- [ ] Footer links work correctly
- [ ] Header navigation is functional
- [ ] Forms submit successfully (waitlist, contact)
- [ ] Images load correctly and are optimized
- [ ] No console errors in browser console
- [ ] Page titles are correct and unique

## Limitations

- Requires Node.js 18+ environment
- Cannot test native mobile apps (BitSleuth is web-only)
- May have issues with complex authentication flows (if implemented)
- Next.js App Router may require waiting for hydration to complete
- Some animations may need additional wait time
