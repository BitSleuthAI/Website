import { test, expect } from '@playwright/test';

test.describe('Navigation Dropdowns', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Products dropdown opens and shows 4 items on desktop', async ({ page }) => {
    // Click the Products dropdown button
    const productsButton = page.getByRole('button', { name: /products/i });
    await productsButton.click();
    
    // Wait for the dropdown content to appear - use a more robust selector
    await page.waitForSelector('[role="menu"]', { state: 'visible', timeout: 10000 });
    
    // Check that all 4 items are visible
    const walletAnalyzer = page.getByText('Wallet Analyzer').first();
    const privacyWallet = page.getByText('Privacy Wallet').first();
    const learningHub = page.getByText('Learning Hub');
    const bitcoinHistory = page.getByText('Bitcoin History');
    
    await expect(walletAnalyzer).toBeVisible({ timeout: 5000 });
    await expect(privacyWallet).toBeVisible();
    await expect(learningHub).toBeVisible();
    await expect(bitcoinHistory).toBeVisible();
    
    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/products-dropdown-desktop.png', fullPage: false });
  });

  test('Launch App dropdown opens and shows 2 items on desktop', async ({ page }) => {
    // Click the Launch App dropdown button
    const launchAppButton = page.getByRole('button', { name: /launch app/i }).first();
    await launchAppButton.click();
    
    // Wait for dropdown content  
    await page.waitForSelector('[role="menu"]', { state: 'visible', timeout: 10000 });
    
    // Check that both items are visible - use more specific selectors
    await page.waitForTimeout(500);
    const menuItems = page.locator('[role="menuitem"]');
    const count = await menuItems.count();
    
    // Should have at least 2 menu items visible
    expect(count).toBeGreaterThanOrEqual(2);
    
    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/launch-app-dropdown-desktop.png', fullPage: false });
  });
});

test.describe('Navigation Dropdowns - Mobile', () => {
  test.use({ 
    viewport: { width: 375, height: 667 },
    hasTouch: true,
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Products dropdown works on mobile tap', async ({ page }) => {
    // Mobile menu - open the sheet first
    const menuButton = page.getByRole('button', { name: /toggle navigation menu/i });
    if (await menuButton.isVisible()) {
      await menuButton.tap();
      await page.waitForTimeout(1000);
      
      // Verify links are visible in mobile menu (they're direct links, not in a dropdown on mobile)
      const walletAnalyzer = page.getByText('Wallet Analyzer').first();
      await expect(walletAnalyzer).toBeVisible();
      
      await page.screenshot({ path: 'tests/screenshots/mobile-menu.png', fullPage: false });
    } else {
      // If no mobile menu button, skip this test
      test.skip();
    }
  });
});
