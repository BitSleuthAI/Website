import { test, expect } from '@playwright/test';

test.describe('Theme Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Theme toggle switches to dark mode', async ({ page }) => {
    // Click theme toggle button
    const themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
    await themeButton.click();
    await page.waitForTimeout(300);
    
    // Click "Dark" option
    const darkOption = page.getByRole('menuitem', { name: /^dark$/i });
    await darkOption.click();
    await page.waitForTimeout(500);
    
    // Verify dark theme is applied
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    await expect(html).toHaveClass(/dark/);
    
    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/theme-dark.png', fullPage: true });
  });

  test('Theme toggle switches to light mode', async ({ page }) => {
    // First set to dark
    const themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
    await themeButton.click();
    await page.waitForTimeout(300);
    
    const darkOption = page.getByRole('menuitem', { name: /^dark$/i });
    await darkOption.click();
    await page.waitForTimeout(500);
    
    // Now switch to light
    await themeButton.click();
    await page.waitForTimeout(300);
    
    const lightOption = page.getByRole('menuitem', { name: /^light$/i });
    await lightOption.click();
    await page.waitForTimeout(500);
    
    // Verify light theme is applied
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'light');
    await expect(html).not.toHaveClass(/dark/);
    
    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/theme-light.png', fullPage: true });
  });

  test('Theme toggle switches to system mode', async ({ page }) => {
    const themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
    await themeButton.click();
    await page.waitForTimeout(300);
    
    const systemOption = page.getByRole('menuitem', { name: /^system$/i });
    await systemOption.click();
    await page.waitForTimeout(500);
    
    // Verify theme is applied (either light or dark based on system)
    const html = page.locator('html');
    const dataTheme = await html.getAttribute('data-theme');
    expect(dataTheme).toMatch(/^(light|dark)$/);
    
    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/theme-system.png', fullPage: true });
  });

  test('Theme preference persists after page reload', async ({ page }) => {
    // Set to dark mode
    const themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
    await themeButton.click();
    await page.waitForTimeout(300);
    
    const darkOption = page.getByRole('menuitem', { name: /^dark$/i });
    await darkOption.click();
    await page.waitForTimeout(500);
    
    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    
    // Verify dark theme persisted
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    await expect(html).toHaveClass(/dark/);
  });
});

test.describe('Theme Toggle - Mobile', () => {
  test.use({ 
    viewport: { width: 375, height: 667 },
    hasTouch: true,
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Theme toggle works on mobile tap', async ({ page }) => {
    // Check if theme toggle is in desktop nav or mobile menu
    let themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
    
    if (!(await themeButton.isVisible())) {
      // Open mobile menu
      const menuButton = page.getByRole('button', { name: /toggle navigation menu/i });
      await menuButton.tap();
      await page.waitForTimeout(500);
      
      themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
    }
    
    // Tap theme button
    await themeButton.tap();
    await page.waitForTimeout(300);
    
    // Tap dark option
    const darkOption = page.getByRole('menuitem', { name: /^dark$/i });
    await darkOption.tap();
    await page.waitForTimeout(500);
    
    // Verify dark theme is applied
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    
    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/theme-toggle-mobile.png', fullPage: true });
  });
});
