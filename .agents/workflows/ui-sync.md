---
description: Synchronizes UI documentation, Page Objects (POM), and verifies E2E tests after visual or structural changes.
---

1. Scan the current application UI using the `chrome-devtools-mcp` and `analyze-app` tools from Playwright Wizard.
2. Compare the live state with `.playwright-wizard-mcp/pages.md` and `.playwright-wizard-mcp/selector-strategy.md`.
3. // turbo
   Update `tests/pages/PortfolioPage.ts` if any selectors (roles, labels, or test IDs) have changed.
4. Run `npm run test:e2e` to verify that all existing tests pass with the new UI state.
5. Update `VERIFICATION.md` with the latest analysis date and findings.
