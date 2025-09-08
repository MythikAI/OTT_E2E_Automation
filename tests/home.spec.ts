import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Should be able to load home Page', async ({ page }) => {
  await expect(page.getByText('Lord Shiva')).toBeVisible();
  await page.getByText('Lord Shiva').first().click();
});

test('Should be visible all Chracter', async ({ page }) => {
  await expect(page.getByText('Lord Shiva')).toBeVisible();
});