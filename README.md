# QA Bootcamp – Week 2 Playwright Test Suite

This repository contains automated UI and API tests for the Toolshop application and REST API, developed during Week 2 of the QA Bootcamp.

## Prerequisites

- Node.js (LTS)
- Git
- VS Code (recommended)

## Setup and Run

Follow these three steps from your terminal:

**1. Install dependencies and Playwright Chromium**

```bash
npm install
npx playwright install chromium
```

**2. Configure environment variables**

Copy `.env.example` to `.env`.

PowerShell:

```powershell
Copy-Item .env.example .env
```

**3. Run the test suite**

```bash
npm test
```

This runs all Playwright tests in the `tests/` directory.

## Test Coverage

| Test file | Description |
|---|---|
| `invalidCredentialsLogin.spec.ts` | Verifies login with invalid credentials |
| `searchPliers.spec.ts` | Tests product search for Pliers |
| `title.spec.ts` | Checks the Toolshop page title |
| `searchProductPOM.spec.ts` | Tests product search using the Page Object Model |
| `cartApiResponse.spec.ts` | Tests cart creation and adding a product |
| `nonExistentCart.spec.ts` | Verifies the API returns 404 for a non-existent cart |
| `getProducts.spec.ts` | Verifies the products API response |

## Project Structure

- `tests/` – Playwright UI and API test files.
- `pages/` – Page Object Model classes and reusable page interactions.
- `features/` – Gherkin feature files.
- `scripts/` – Helper scripts.
- `playwright.config.ts` – Playwright test configuration.

## Available Commands

```bash
npm test
npm run check
npx playwright show-report
```

**Note:** Keep your `.env` file private. Do not commit it to Git. The `.env.example` file provides the configuration template for new users.