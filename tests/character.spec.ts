import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Should be able to click on character', async ({ page }) => {
  await page.getByText('Lord Shiva').click();
  await page.getByRole('button', { name: 'Back' }).click();
});

test('Should be able to click on Krishna', async ({ page }) => {
  await page.locator('div').filter({ hasText: /^Krishna$/ }).click();
});