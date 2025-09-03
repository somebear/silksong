import { test, expect } from '@playwright/test';

test.describe('Silksong Release Countdown', () => {
  test('should display countdown timer on homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check if countdown timer is visible
    await expect(page.locator('[data-testid="countdown-timer"]')).toBeVisible();
    
    // Check if the countdown displays time components
    await expect(page.locator('[data-testid="countdown-days"]')).toBeVisible();
    await expect(page.locator('[data-testid="countdown-hours"]')).toBeVisible();
    await expect(page.locator('[data-testid="countdown-minutes"]')).toBeVisible();
    await expect(page.locator('[data-testid="countdown-seconds"]')).toBeVisible();
  });

  test('should show game information', async ({ page }) => {
    await page.goto('/');
    
    // Check if Silksong branding is present
    await expect(page.locator('text=Silksong')).toBeVisible();
    await expect(page.locator('text=Hornet')).toBeVisible();
    
    // Check if CTA buttons are present (English version)
    await expect(page.locator('text=Pre-order Now')).toBeVisible();
    await expect(page.locator('text=Watch Trailer')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if countdown is still visible on mobile
    await expect(page.locator('[data-testid="countdown-timer"]')).toBeVisible();
    
    // Check if mobile navigation works
    await expect(page.locator('button[aria-label="菜单"]')).toBeVisible();
  });

  test('should update countdown every second', async ({ page }) => {
    await page.goto('/');
    
    // Get initial seconds value
    const initialSeconds = await page.locator('[data-testid="countdown-seconds"]').textContent();
    
    // Wait for 2 seconds
    await page.waitForTimeout(2000);
    
    // Get updated seconds value
    const updatedSeconds = await page.locator('[data-testid="countdown-seconds"]').textContent();
    
    // Verify that seconds have changed (countdown is working)
    expect(initialSeconds).not.toBe(updatedSeconds);
  });
});