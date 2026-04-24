---
description: Optimizes the testing infrastructure for speed, parallelization, and CI/CD reliability.
---

1. Review `playwright.config.ts` for optimal worker counts and retry logic.
2. // turbo
   Audit `tests/fixtures.ts` to ensure clean state management and avoid data leaks between parallel workers.
3. Verify that all E2E tests pass in the local environment with `npm run test:all`.
4. // turbo
   Configure or update GitHub Actions workflows to include artifact uploads (traces/videos) on failure.
