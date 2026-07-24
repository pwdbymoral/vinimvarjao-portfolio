# Test Plan

**Project:** Portfolio and Bio Contact Hub<br>
**E2E Files:** 9<br>
**Configured E2E Tests:** 74 (37 scenarios × Chromium and Firefox)<br>
**Component Tests:** 9<br>
**Progress:** 9/9 E2E files documented

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

### Journey 2: Qualified Contact (`/bio`) (P0)
**Pages:** Bio redirect → Localized contact hub → WhatsApp or secondary contact<br>
**Why Critical:** Primary conversion flow for social profile visitors.<br>
**File:** `tests/e2e/bio.spec.ts`<br>
**Tests:** 6

**Flow:**
1. User opens the localized bio hub on mobile.
2. User understands the software, paid media, and automation positioning.
3. User starts a qualified WhatsApp conversation or selects an approved secondary contact.
4. User can switch to the equivalent page in the alternate language.

---

## Implementation Status

- [x] **portfolio.spec.ts** - Core functionality & Redesign Verification ✅
- [x] **accessibility.spec.ts** - WCAG and semantic regression coverage ✅
- [x] **bio.spec.ts** - Mobile contact hub, URLs, overflow, and hover contrast ✅
- [x] **education.spec.ts** - Education section & navigation ✅
- [x] **experience.spec.ts** - Experience section & navigation ✅
- [x] **mobile-header.spec.ts** - Mobile layout integrity ✅
- [x] **content_fixes.spec.ts** - Content accuracy & Dark Mode ✅
- [x] **features.spec.ts** - Premium feature TDD verification ✅
- [x] **production-smoke.spec.ts** - Production bundle smoke coverage ✅

---

## Test Coverage Summary

| Feature Area         | Test Suite             | Tests | Priority | Status |
| -------------------- | ---------------------- | ----- | -------- | ------ |
| Core Portfolio UI    | portfolio.spec.ts      | 12    | P0       | ✅ Done |
| Bio Contact Hub      | bio.spec.ts            | 6     | P0       | ✅ Done |
| Accessibility        | accessibility.spec.ts  | 5     | P0       | ✅ Done |
| Education Section    | education.spec.ts      | 2     | P1       | ✅ Done |
| Experience Section   | experience.spec.ts     | 3     | P1       | ✅ Done |
| Mobile Layout        | mobile-header.spec.ts  | 2     | P1       | ✅ Done |
| Content & Dark Mode  | content_fixes.spec.ts  | 4     | P2       | ✅ Done |
| New Features (TDD)   | features.spec.ts       | 1     | P2       | ✅ Done |
| Production Smoke     | production-smoke.spec.ts | 2   | P0       | ✅ Done |
| **Total (per browser)**| **9 files**            | **37**| **-**    | **100%** |

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
- Static project data in `src/components/Portfolio.tsx`.
- Neo-Brutalist CSS Variables in `index.css`.

**Suite-Specific Considerations:**
- Verify high-contrast borders and shadows (Neo-Brutalism).
- Test across Desktop and Mobile (single-column grid).

---

## Suite: bio.spec.ts

**Priority:** P0 (Critical)<br>
**Why:** Verifies the mobile-first conversion surface used from social profiles.

**Test Cases:**

1. ✅ Localized bio route renders the profile, prioritized services, and two WhatsApp CTAs without horizontal overflow at 390px.
2. ✅ LinkedIn, Instagram, GitHub, X/Twitter, and email use the approved URLs.
3. ✅ WhatsApp hover keeps dark purple text on the light yellow background.
4. ✅ Portrait crop excludes the distracting background number.
5. ✅ Forja cursor renders as a single shape and changes color over links.
6. ✅ Services CTA scrolls smoothly while respecting reduced-motion preferences.

**Component Coverage:**

- `src/__tests__/BioPage.test.tsx` verifies the ForjaCorp home symbol, localized accessible labels, service ordering, contact allowlist, absence of portfolio links, ForjaCorp signature, and alternate-language labels.
- `src/__tests__/deployment.test.ts` prevents public asset directories from shadowing root SPA routes.
- `tests/production-smoke.spec.ts` verifies both the portfolio bundle and the `/bio/` trailing-slash entry point.

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
