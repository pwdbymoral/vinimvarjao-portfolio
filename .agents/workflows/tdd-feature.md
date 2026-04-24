---
description: Guides the implementation of a new feature following strict Test-Driven Development (TDD) principles.
---

1. Use `generate-test-plan` to define acceptance criteria and test scenarios for the new feature.
2. Create a new test file in `tests/e2e/` (e.g., `feature-name.spec.ts`) with failing test cases (RED phase).
3. // turbo
   Add necessary method placeholders and locators to the Page Object Models (POM).
4. Implement the minimal required code in the application (`src/`) to make the tests pass (GREEN phase).
5. Run the full test suite and refactor the code for performance and style (REFACTOR phase).
6. Verify the final implementation with the user.
