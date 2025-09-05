import { test, expect } from '@playwright/test';

test.describe('Silksong Release Countdown', () => {
  test('should display released state on homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check if released message is visible (either Chinese or English version)
    const releasedMessage = page.locator('text=🎮 游戏已发售！').or(page.locator('text=🎮 Game Released!'));
    await expect(releasedMessage).toBeVisible();
    
    // Check if released description is present
    const releasedDesc = page.locator('text=现已正式发售').or(page.locator('text=is now available'));
    await expect(releasedDesc).toBeVisible();
  });

  test('should show game information', async ({ page }) => {
    await page.goto('/');
    
    // Check if main Silksong title is present (hero title specifically)
    await expect(page.locator('.hero-title').filter({ hasText: /Silksong/ })).toBeVisible();
    
    // Check if Steam platform button in purchase section is visible
    const purchaseSection = page.locator('text=立即购买').or(page.locator('text=Available Now'));
    await expect(purchaseSection).toBeVisible();
    const steamButton = page.getByRole('button', { name: 'Steam' });
    await expect(steamButton).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if released state is visible on mobile
    const releasedMessage = page.locator('text=🎮 游戏已发售！').or(page.locator('text=🎮 Game Released!'));
    await expect(releasedMessage).toBeVisible();
    
    // Check Steam platform button on mobile
    const purchaseSection = page.locator('text=立即购买').or(page.locator('text=Available Now'));
    await expect(purchaseSection).toBeVisible();
    const platformButton = page.getByRole('button', { name: 'Steam' });
    await expect(platformButton).toBeVisible();
  });

  test('should show game released information', async ({ page }) => {
    await page.goto('/');
    
    // Verify the countdown component shows released state
    const releasedElement = page.locator('text=🎮 游戏已发售！').or(page.locator('text=🎮 Game Released!'));
    await expect(releasedElement).toBeVisible();
    
    // Check countdown glass-effect styling is present (visual confirmation)
    const countdownGlassElement = page.locator('.glass-effect').first();
    await expect(countdownGlassElement).toBeVisible();
  });
});