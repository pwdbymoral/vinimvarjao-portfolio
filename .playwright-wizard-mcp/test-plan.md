# Test Plan

**Project:** Portfolio Redesign (Neo-Brutalist)  
**Total Suites:** 6  
**Total Tests:** 48 (Multi-browser)  
**Progress:** 6/6 suites (100%)

> **Note:** This plan is synchronized with the 2026 Neo-Brutalist redesign and the transition to stacked interactive cards.

---

## Critical User Journeys (E2E)

### Journey 1: Project Discovery (P0)
**Pages:** Home → Project Grid → Project Links (GitHub/Live)  
**Why Critical:** Primary purpose of the portfolio.  
**File:** `tests/e2e/portfolio.spec.ts`  
**Tests:** 12+

**Flow:**
1. User lands on Hero section (Neo-Brutalist).
2. User clicks "Selected Work ↓".
3. User verifies project cards are displayed with correct tags and categories.
4. User clicks a project's "View Source" or "Live Demo" link.

---

## Implementation Status

- [x] **portfolio.spec.ts** - Core functionality & Redesign Verification ✅
- [x] **education.spec.ts** - Education section & navigation ✅
- [x] **experience.spec.ts** - Experience section & navigation ✅
- [x] **mobile-header.spec.ts** - Mobile layout integrity ✅
- [x] **content_fixes.spec.ts** - Content accuracy & Dark Mode ✅
- [x] **features.spec.ts** - Premium feature TDD verification ✅

---

## Test Coverage Summary

| Feature Area         | Test Suite             | Tests | Priority | Status |
| -------------------- | ---------------------- | ----- | -------- | ------ |
| Core Portfolio UI    | portfolio.spec.ts      | 12    | P0       | ✅ Done |
| Education Section    | education.spec.ts      | 2     | P1       | ✅ Done |
| Experience Section   | experience.spec.ts     | 3     | P1       | ✅ Done |
| Mobile Layout        | mobile-header.spec.ts  | 2     | P1       | ✅ Done |
| Content & Dark Mode  | content_fixes.spec.ts  | 4     | P2       | ✅ Done |
| New Features (TDD)   | features.spec.ts       | 1     | P2       | ✅ Done |
| **Total (per browser)**| **6 suites**           | **24**| **-**    | **100%** |

---

## Suite: portfolio.spec.ts

**Priority:** P0 (Critical)  
**Why:** Verification of the 2026 redesign and professional narrative.  
**Estimated time:** 1 hour

**Test Cases:**

1. ✅ Hero section title and "Product Engineer" narrative are visible.
2. ✅ "Available for new opportunities" status badge is functional.
3. ✅ Navigation links (Work, About, Contact) are functional in header.
4. ✅ "Selected Work ↓" button scrolls to the work section.
5. ✅ Project grid contains verified projects (Dindinho, CheckFacil, etc.).
6. ✅ Each project card displays a title, category, and description.
7. ✅ Project card tags are rendered correctly with Neo-Brutalist styling.
8. ✅ "The Approach" section visibility.
9. ✅ Footer displays copyright and social links.
10. ✅ Social links (GitHub, LinkedIn) point to correct professional profiles.

**Dependencies:**
- Static project data in `App.tsx`.
- Neo-Brutalist CSS Variables in `index.css`.

**Suite-Specific Considerations:**
- Verify high-contrast borders and shadows (Neo-Brutalism).
- Test across Desktop and Mobile (single-column grid).

---

## Universal Quality Gates

- ✅ Tests pass with parallel execution.
- ✅ Web-first assertions used.
- ✅ No `biome-ignore` in test code.
- ✅ Proper cleanup after each test.

---

## Next Steps

**Automation Health:**
- [x] Periodic CI/CD runs (Husky/Lint-staged verified)
- [x] Selectors verified against English consolidated UI
