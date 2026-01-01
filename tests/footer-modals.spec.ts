import { test, expect } from '@playwright/test';

test.describe('Footer Modals', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Privacy Policy modal opens from footer', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Click Privacy Policy button
    const privacyButton = page.getByRole('button', { name: /privacy policy/i });
    await privacyButton.click();
    
    // Wait for modal to appear
    await page.waitForTimeout(500);
    
    // Check that modal is visible with expected content
    const modalTitle = page.getByRole('heading', { name: /privacy policy/i });
    await expect(modalTitle).toBeVisible();
    
    // Check for some expected content
    const modalContent = page.getByText(/effective date/i);
    await expect(modalContent).toBeVisible();
    
    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/privacy-modal-desktop.png', fullPage: true });
    
    // Close modal by clicking X button
    const closeButton = page.getByRole('button', { name: /close/i }).first();
    await closeButton.click();
    await page.waitForTimeout(300);
    
    // Verify modal is closed
    await expect(modalTitle).not.toBeVisible();
  });

  test('Terms of Service modal opens from footer', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Click Terms of Service button
    const termsButton = page.getByRole('button', { name: /terms of service/i });
    await termsButton.click();
    
    // Wait for modal to appear
    await page.waitForTimeout(500);
    
    // Check that modal is visible with expected content
    const modalTitle = page.getByRole('heading', { name: /terms of service/i });
    await expect(modalTitle).toBeVisible();
    
    // Check for some expected content
    const modalContent = page.getByText(/last updated/i);
    await expect(modalContent).toBeVisible();
    
    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/terms-modal-desktop.png', fullPage: true });
    
    // Close modal with Escape key
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    
    // Verify modal is closed
    await expect(modalTitle).not.toBeVisible();
  });

  test('Privacy Policy modal opens on mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-only test');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Tap Privacy Policy button
    const privacyButton = page.getByRole('button', { name: /privacy policy/i });
    await privacyButton.tap();
    
    // Wait for modal to appear
    await page.waitForTimeout(500);
    
    // Check that modal is visible
    const modalTitle = page.getByRole('heading', { name: /privacy policy/i });
    await expect(modalTitle).toBeVisible();
    
    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/privacy-modal-mobile.png', fullPage: true });
  });
});
