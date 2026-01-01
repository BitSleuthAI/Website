import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const SCREENSHOTS_DIR = path.join(process.cwd(), 'tests', 'screenshots');

function ensureScreenshotsDirExists() {
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  }
}

test.describe('Theme Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Theme toggle switches to dark mode', async ({ page }) => {
    // Click theme toggle button
    const themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
    await themeButton.click();
    
    // Wait for "Dark" option to be visible and click it
    const darkOption = page.getByRole('menuitem', { name: /^dark$/i });
    await darkOption.waitFor({ state: 'visible' });
    await darkOption.click();
    
    // Verify dark theme is applied
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    await expect(html).toHaveClass(/dark/);
    
    // Take screenshot
    ensureScreenshotsDirExists();
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'theme-dark.png'), fullPage: true });
  });

  test('Theme toggle switches to light mode', async ({ page }) => {
    // First set to dark
    const themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
    await themeButton.click();
    
    const darkOption = page.getByRole('menuitem', { name: /^dark$/i });
    await darkOption.waitFor({ state: 'visible' });
    await darkOption.click();
    
    // Wait for dark theme to be applied before switching back
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    
    // Now switch to light
    await themeButton.click();
    
    const lightOption = page.getByRole('menuitem', { name: /^light$/i });
    await lightOption.waitFor({ state: 'visible' });
    await lightOption.click();
    
    // Verify light theme is applied
    await expect(html).toHaveAttribute('data-theme', 'light');
    await expect(html).not.toHaveClass(/dark/);
    
    // Take screenshot
    ensureScreenshotsDirExists();
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'theme-light.png'), fullPage: true });
  });

  test('Theme toggle switches to system mode', async ({ page }) => {
    const themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
    await themeButton.click();
    
    const systemOption = page.getByRole('menuitem', { name: /^system$/i });
    await systemOption.waitFor({ state: 'visible' });
    await systemOption.click();
    
    // Verify theme is applied (either light or dark based on system)
    const html = page.locator('html');
    const dataTheme = await html.getAttribute('data-theme');
    expect(dataTheme).toMatch(/^(light|dark)$/);
    
    // Take screenshot
    ensureScreenshotsDirExists();
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'theme-system.png'), fullPage: true });
  });

  test('Theme preference persists after page reload', async ({ page }) => {
    // Set to dark mode
    const themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
    await themeButton.click();
    
    const darkOption = page.getByRole('menuitem', { name: /^dark$/i });
    await darkOption.waitFor({ state: 'visible' });
    await darkOption.click();
    
    // Wait for dark theme to be applied before reload
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    
    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Verify dark theme persisted
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
      
      themeButton = page.getByRole('button', { name: /toggle theme/i }).first();
      await expect(themeButton).toBeVisible();
    }
    
    // Tap theme button
    await themeButton.tap();
    
    // Tap dark option
    const darkOption = page.getByRole('menuitem', { name: /^dark$/i });
    await darkOption.waitFor({ state: 'visible' });
    await darkOption.tap();
    
    // Verify dark theme is applied
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
    
    // Take screenshot
    ensureScreenshotsDirExists();
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'theme-toggle-mobile.png'), fullPage: true });
  });
});
