# OTT E2E Testing

This project uses Playwright for end-to-end (E2E) testing of the Mythik OTT application.

## System Requirements
- Node.js v16 or higher
- npm v7 or higher
- macOS, Linux, or Windows

## Setup
1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Install Playwright browsers:**
   ```sh
   npx playwright install
   ```

## Running Tests

### 1. Login and Save Auth State
Run the login setup test to save the authenticated session:
```sh
npm run test:login --USERNAME=your_email --PASSWORD=your_password
```
This will create/update `auth.json` for authenticated tests.

### 2. Run All E2E Tests
```sh
npm run test
npm run test:headless      # Run all tests in headless mode
npm run test:headed        # Run all tests with browser UI
npm run test:sequential    # Run tests one by one
npm run test:parallel      # Run tests in parallel
```
Or run a specific test file:
```sh
npx playwright test tests/login.spec.ts
```

## Test Reports
- After each run, HTML reports are saved in `playwright-report/<date-time>`.
- Open the latest report:
  ```sh
  npx playwright show-report
  ```

## Debugging
- Run tests in headed mode: `npx playwright test --headed`
- Use debug mode: `npx playwright test --debug`
- Add `await page.pause();` in your test to open Playwright Inspector.

## Notes
- Update credentials in `login.setup.ts` for your test user.
- All tests use the base URL set in `playwright.config.ts`.
- Authenticated tests use the session stored in `auth.json`.

---
For more info, see [Playwright Docs](https://playwright.dev/).
