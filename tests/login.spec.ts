import { test, expect } from '@playwright/test';

test.only('Should login with valid credentials', async ({ page }) => {
  await page.goto('https://d2c.mythik.app/login');
  await page.getByRole('button', { name: 'Login/Signup with Google' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('your_email');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('your_password');
  await page.getByRole('button', { name: 'Next' }).click();
  // Wait for redirect to onboarding page
  await page.waitForURL('https://d2c.mythik.app/onboarding', { timeout: 15000 });
  await expect(page).toHaveURL('https://d2c.mythik.app/onboarding');
});
