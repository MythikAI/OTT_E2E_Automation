import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Should be able to back from Universe', async ({ page }) => {
  await page.locator('video').first().click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Universe Icon Universe' }).click();
});