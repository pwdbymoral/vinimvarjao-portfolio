# CLAUDE.md — Living Project Specification

> **Project Identity**: Premium Portfolio (TDD Enterprise Edition)  
> **Standard**: Akita Chronicles / Enterprise AI Integration

This file is the **Source of Truth** for all development workflows. It must be updated whenever project architectural decisions evolve.

---

## 🛠️ Commands

### Build & Dev
- **Dev Server**: `npm run dev` (Vite)
- **Production Build**: `npm run build` (TSC + Vite Build)
- **Preview Build**: `npm run preview`

### Test (TDD Core)
- **E2E Tests**: `npx playwright test`
- **Unit/Component Tests**: `npx vitest` (Run once: `npx vitest run`)
- **Combined Verification**: `npm run test:all` (Custom script)

### Lint & Format
- **Strict Check**: `npm run lint` (`biome check .`)
- **Auto Fix**: `npm run lint:fix` (`biome check --write .`)

---

## 🧪 TDD Execution Workflow (MANDATORY)

This project follows a strict **Test-Driven Development** cycle. **NO** implementation code is to be written without a preceding failing test.

1.  **RED PHASE**: Identify the feature/bug. Write a test case in `tests/e2e/` (Playwright) or `src/components/__tests__/` (Vitest) that describes the expected behavior. Run the test and confirm it **fails**.
2.  **GREEN PHASE**: Write the **minimal** amount of code required to make the test pass. Do not over-engineer.
3.  **REFACTOR PHASE**: Clean up the code, optimize performance, and ensure it adheres to the style guide. Run all tests again to ensure zero regressions.

---

## 💎 Technical Guidelines

### React & Components
- **Version**: React 19 (Latest features).
- **Styling**: Vanilla CSS with predefined CSS Variables in `src/index.css`. Use **Glassmorphism** for premium feel.
- **Complexity**: Priority $O(n)$ or $O(1)$. Analyze Big O before coding.
- **Batching**: Use batch operations for any side effect involving multiple items.

### Code Quality
- **Indentation**: Tabs (per `biome.json`).
- **Quotes**: Double quotes (`"`).
- **Anti-Patterns**: No `any`, no hardcoded secrets, no brittle selectors (use accessible roles).

---

## 🤖 AI Interaction & Living Spec
- **Context-Agnostic**: If you discover a new pattern that works well, update this `CLAUDE.md` immediately.
- **Implicit Research**: Always run `npm start` and `npx playwright test` to verify your environment status before and after key changes.
- **Communication**: Be concise, focused, and report failures immediately with root cause analysis.
