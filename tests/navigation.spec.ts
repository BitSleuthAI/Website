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
    
    // Wait for dropdown to be visible
    await page.waitForTimeout(500);
    
    // Check that all 4 items are visible
    const walletAnalyzer = page.getByRole('link', { name: /wallet analyzer/i }).first();
    const privacyWallet = page.getByRole('link', { name: /privacy wallet/i }).first();
    const learningHub = page.getByRole('link', { name: /learning hub/i });
    const bitcoinHistory = page.getByRole('link', { name: /bitcoin history/i });
    
    await expect(walletAnalyzer).toBeVisible();
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
    
    // Wait for dropdown to be visible
    await page.waitForTimeout(500);
    
    // Check that both items are visible
    const walletAnalyzerLink = page.getByRole('link', { name: /wallet analyzer/i }).last();
    const privacyWalletLink = page.getByRole('link', { name: /privacy wallet/i }).last();
    
    await expect(walletAnalyzerLink).toBeVisible();
    await expect(privacyWalletLink).toBeVisible();
    
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
    // On mobile, products should be in the hamburger menu
    // But let's test if viewport is wide enough to show desktop nav
    const productsButton = page.getByRole('button', { name: /products/i });
    
    if (await productsButton.isVisible()) {
      // Desktop nav is visible, test the dropdown
      await productsButton.tap();
      await page.waitForTimeout(500);
      
      const walletAnalyzer = page.getByRole('link', { name: /wallet analyzer/i }).first();
      await expect(walletAnalyzer).toBeVisible();
      
      await page.screenshot({ path: 'tests/screenshots/products-dropdown-mobile.png', fullPage: false });
    } else {
      // Mobile menu - open the sheet first
      const menuButton = page.getByRole('button', { name: /toggle navigation menu/i });
      await menuButton.tap();
      await page.waitForTimeout(500);
      
      // Verify links are visible in mobile menu
      const walletAnalyzer = page.getByRole('link', { name: /wallet analyzer/i });
      await expect(walletAnalyzer).toBeVisible();
      
      await page.screenshot({ path: 'tests/screenshots/mobile-menu.png', fullPage: false });
    }
  });
});
