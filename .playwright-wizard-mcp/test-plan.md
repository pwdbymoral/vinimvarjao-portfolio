# Test Plan

**Project:** Portfolio Wireframe  
**Total Suites:** 1  
**Total Tests:** ~10  
**Progress:** 1/1 suites (100%)

> **Note:** This plan is based on analysis from Step 1 (Analyze App)

---

## Critical User Journeys (E2E)

### Journey 1: Project Discovery (P0)
**Pages:** Home → Project Grid → Project Details (Wireframe)  
**Why Critical:** Primary purpose of the portfolio.  
**File:** `tests/e2e/portfolio.spec.ts`  
**Tests:** 5

**Flow:**
1. User lands on Hero section.
2. User clicks "View Projects".
3. User verifies project cards are displayed with correct data.
4. User clicks a project card.

---

## Implementation Status

- [x] **portfolio.spec.ts** - Core portfolio functionality (P0) ✅
  - Tests: 10
  - Dependencies: Dev server running, static project data
  - Estimated time: 1 hour

---

## Test Coverage Summary

| Feature Area   | Test Suite           | Tests | Priority | Status |
| -------------- | -------------------- | ----- | -------- | ------ |
| Portfolio UI   | portfolio.spec.ts    | 10    | P0       | ⏳ Todo |
| **Total**      | **1 suite**          | **10**| **1 P0** | **0%** |

---

## Suite: portfolio.spec.ts

**Priority:** P0 (Critical)  
**Why:** Verification of all visible portfolio sections and interactions.  
**Estimated time:** 1 hour

**Test Cases:**

1. ✅ Hero section title and description are visible.
2. ✅ "Available for new opportunities" badge is displayed.
3. ✅ Navigation links (Work, About, Contact) are functional and visible in header.
4. ✅ "View Projects" button scrolls/navigates to the work section.
5. ✅ Project grid contains at least 4 project cards.
6. ✅ Each project card displays a title, category, and description.
7. ✅ Project card tags are rendered correctly.
8. ✅ "The Approach" section is visible with correct text.
9. ✅ Footer displays copyright and social links.
10. ✅ Social links (Twitter, GitHub, LinkedIn) point to correct URLs.

**Dependencies:**
- Static project data in `App.tsx`.
- CSS variables for theme verification (optional).

**Suite-Specific Considerations:**
- Test across multiple viewport sizes (Desktop, Mobile).
- Verify glassmorphism effect (CSS property check if needed).

---

## Universal Quality Gates

- ✅ Tests pass with parallel execution.
- ✅ Web-first assertions used.
- ✅ Descriptive test names.
- ✅ Proper cleanup after each test.

---

## Next Steps

**Before proceeding to Step 3:**
- [x] Review this test plan
- [x] Verify all parts of the single-page app are covered

**Then run:** Prompt 3: Setup Infrastructure
