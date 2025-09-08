import { test } from '@playwright/test';

// This test logs in and saves the authenticated session to auth.json
// Run this test once: npx playwright test login.setup.ts

test('login and save storage state', async ({ page }) => {
  await page.goto('https://d2c.mythik.app/login');
  await page.getByRole('button', { name: 'Login/Signup with Google' }).click();
  const username = process.env.USERNAME || '';
  const password = process.env.PASSWORD || '';
  if (!username || !password) {
    throw new Error('USERNAME and PASSWORD environment variables must be set.');
  }
  await page.getByRole('textbox', { name: 'Email or phone' }).fill(username);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill(password);
  await page.getByRole('button', { name: 'Next' }).click();
  // Wait for redirect to onboarding page
  await page.waitForURL('https://d2c.mythik.app/onboarding', { timeout: 15000 });
  // Save authenticated state
  await page.context().storageState({ path: 'auth.json' });
});
