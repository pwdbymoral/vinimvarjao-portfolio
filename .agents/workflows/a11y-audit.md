---
description: Performs a comprehensive accessibility audit using WCAG 2.1 AA standards and verifies keyboard navigation.
---

1. Execute the `add-accessibility` tool to integrate axe-core and basic A11y checks into the test suite.
2. // turbo
   Run a specialized Playwright script to verify focus management and keyboard navigation flow (Tab order).
3. Analyze the application using `lighthouse-audit` with the `accessibility` category enabled.
4. Document any violations in a new `A11Y_REPORT.md` and suggest specific fixes for aria-labels or roles.
