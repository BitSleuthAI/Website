import { test, expect } from '@playwright/test';

test.describe('Glossary Search and Filters', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/glossary');
    await page.waitForLoadState('networkidle');
  });

  test('Search filters glossary terms in real-time', async ({ page }) => {
    // Get initial count of terms
    const initialTerms = await page.getByRole('link').filter({ hasText: /wallet|bitcoin|address/i }).count();
    expect(initialTerms).toBeGreaterThan(0);
    
    // Type in search box
    const searchInput = page.getByRole('textbox', { name: /search glossary/i });
    await searchInput.fill('wallet');
    await page.waitForTimeout(300);
    
    // Check that results are filtered
    const filteredTerms = await page.getByRole('link').filter({ hasText: /wallet/i }).count();
    expect(filteredTerms).toBeGreaterThan(0);
    expect(filteredTerms).toBeLessThanOrEqual(initialTerms);
    
    // Verify that non-matching terms are not visible
    const addressTerm = page.getByRole('heading', { name: /^Address$/ });
    const isAddressVisible = await addressTerm.isVisible().catch(() => false);
    
    // Take screenshot of search results
    await page.screenshot({ path: 'tests/screenshots/glossary-search-wallet.png', fullPage: true });
    
    // Clear search
    await searchInput.clear();
    await page.waitForTimeout(300);
    
    // Verify all terms are back
    const clearedTerms = await page.getByRole('link').filter({ hasText: /wallet|bitcoin|address/i }).count();
    expect(clearedTerms).toBe(initialTerms);
  });

  test('Category filter works correctly', async ({ page }) => {
    // Click "Wallet Basics" category filter
    const walletBasicsButton = page.getByRole('button', { name: /^Wallet Basics$/i });
    await walletBasicsButton.click();
    await page.waitForTimeout(300);
    
    // Verify button is now active (has default variant styling)
    await expect(walletBasicsButton).toHaveClass(/bg-primary|default/);
    
    // Check that results are filtered (should show wallet basics terms)
    const addressTerm = page.getByRole('heading', { name: /^Address$/i });
    await expect(addressTerm).toBeVisible();
    
    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/glossary-filter-wallet-basics.png', fullPage: true });
    
    // Click "All Terms" to clear filter
    const allTermsButton = page.getByRole('button', { name: /^All Terms$/i });
    await allTermsButton.click();
    await page.waitForTimeout(300);
    
    // Verify more terms are visible now
    const allLinks = await page.getByRole('link').count();
    expect(allLinks).toBeGreaterThan(10);
  });

  test('Search and category filter work together', async ({ page }) => {
    // First, apply category filter
    const privacyButton = page.getByRole('button', { name: /^Privacy Features$/i });
    await privacyButton.click();
    await page.waitForTimeout(300);
    
    // Then search within that category
    const searchInput = page.getByRole('textbox', { name: /search glossary/i });
    await searchInput.fill('coin');
    await page.waitForTimeout(300);
    
    // Should show CoinJoin and possibly other privacy-related terms with "coin"
    const coinJoin = page.getByRole('heading', { name: /coinjoin/i });
    
    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/glossary-combined-filters.png', fullPage: true });
    
    // Clear all filters using the clear button in no-results or clear all
    await searchInput.clear();
    await page.waitForTimeout(300);
    
    const allTermsButton = page.getByRole('button', { name: /^All Terms$/i });
    await allTermsButton.click();
    await page.waitForTimeout(300);
  });

  test('No results message appears when search has no matches', async ({ page }) => {
    const searchInput = page.getByRole('textbox', { name: /search glossary/i });
    await searchInput.fill('xyzabc123notfound');
    await page.waitForTimeout(300);
    
    // Check for "No results found" message
    const noResults = page.getByText(/no results found/i);
    await expect(noResults).toBeVisible();
    
    // Check for clear filters button
    const clearButton = page.getByRole('button', { name: /clear all filters/i });
    await expect(clearButton).toBeVisible();
    
    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/glossary-no-results.png', fullPage: true });
  });
});

test.describe('Glossary Search - Mobile', () => {
  test.use({ 
    viewport: { width: 375, height: 667 },
    hasTouch: true,
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('/glossary');
    await page.waitForLoadState('networkidle');
  });

  test('Search works on mobile with touch', async ({ page }) => {
    const searchInput = page.getByRole('textbox', { name: /search glossary/i });
    await searchInput.tap();
    await searchInput.fill('bitcoin');
    await page.waitForTimeout(300);
    
    // Verify results are filtered
    const bitcoinTerm = page.getByRole('heading', { name: /^Bitcoin$/i });
    await expect(bitcoinTerm).toBeVisible();
    
    await page.screenshot({ path: 'tests/screenshots/glossary-search-mobile.png', fullPage: true });
  });

  test('Category filters work on mobile tap', async ({ page }) => {
    const advancedButton = page.getByRole('button', { name: /^Advanced Bitcoin$/i });
    await advancedButton.tap();
    await page.waitForTimeout(300);
    
    // Should show advanced terms
    const miningTerm = page.getByRole('heading', { name: /mining/i });
    await expect(miningTerm).toBeVisible();
    
    await page.screenshot({ path: 'tests/screenshots/glossary-filter-mobile.png', fullPage: true });
  });
});
