# Accessibility Audit Report ♿

**Original audit date**: 2026-04-24<br>
**Last reviewed**: 2026-07-24<br>
**Standard**: WCAG 2.1 AA  
**Status**: ✅ Portfolio audit and Bio regression tests passed

## 📊 Summary
We performed a comprehensive accessibility audit of the portfolio using `axe-core`, `Playwright`, and Lighthouse. The `/bio` contact hub is covered by focused Playwright and component regressions for its critical mobile, interaction, and contrast behavior.

| Category | Score | Status |
| :--- | :---: | :--- |
| **Axe-core Violations** | 0 | ✅ PASS |
| **Keyboard Navigation** | Logical | ✅ PASS |
| **Semantic Landmarks** | Complete | ✅ PASS |
| **Color Contrast** | ≥ 4.5:1 | ✅ PASS |
| **Accessible Names** | Valid | ✅ PASS |

## 🛠️ Fixes Implemented

### 1. Color Contrast Optimization
- **Issue**: Purple accent text (`#a855f7`) on `.btn-primary` and `.tag` failed contrast requirements in Dark mode against white text (3.95:1).
- **Fix**: Forced `color: #000000;` on `.btn-primary` and `.tag` classes. Black on `#a855f7` provides excellent contrast (7.4:1), passing the 4.5:1 requirement.
- **Location**: `src/index.css`

### 2. Semantic Structure (Landmarks)
- **Issue**: The footer navigation was using a generic `div` instead of a semantic landmark.
- **Fix**: Wrapped footer navigation in a `<nav>` element with `aria-label="Footer Navigation"`.
- **Location**: `src/components/Footer.tsx`

### 3. Accessible Names (Label in Name)
- **Issue**: Lighthouse reported `label-content-name-mismatch` because `aria-label`s on buttons completely replaced visible text (e.g. `aria-label="View Source: Project"` over text "View Source"). Screen reader dictation tools could fail to recognize them.
- **Fix**: Removed overriding `aria-label`s from all interactive elements with visible text. Replaced them with visually hidden text using a `.sr-only` span appended to the visible text (e.g. `View Source <span class="sr-only"> for CheckFacil (opens in a new tab)</span>`).
- **Location**: `src/components/Portfolio.tsx`, `src/components/Footer.tsx`, `src/index.css`

### 4. Icon Accessibility
- **Issue**: SVG icons needed clear roles and descriptions.
- **Fix**: Ensured all `svg` elements have either an `aria-label` or a `<title>` tag, with `role="img"`.
- **Location**: `src/components/Icons.tsx`

### 5. SEO / Best Practices
- **Issue**: Missing `robots.txt` caused a Lighthouse warning.
- **Fix**: Created a valid `robots.txt` in the `public` directory.
- **Location**: `public/robots.txt`

## 🧪 Automated Testing Suite
We integrated a permanent accessibility test suite in `tests/e2e/accessibility.spec.ts` that runs on every CI pipeline execution. It includes:
- **WCAG 2.1 AA** automated scans.
- **Keyboard Tab order** verification.
- **Landmark** presence checks.
- **Dark mode** contrast verification.

## 📱 Bio Contact Hub — 2026-07-24

The localized `/pt/bio` and `/en/bio` routes add the following accessibility safeguards:

- Semantic `main`, `section`, and `nav` regions with accessible names.
- Visible keyboard focus treatment for the primary WhatsApp CTA and secondary contact links.
- Accessible names for icon-only links; decorative visuals remain hidden from assistive technology where appropriate.
- A direct language link whose accessible name and visible text identify the destination language.
- Reduced-motion behavior that respects `prefers-reduced-motion`.
- A mobile viewport regression that prevents horizontal overflow.
- A WhatsApp hover-state regression that verifies the computed background (`rgb(255, 227, 164)`) and text (`rgb(37, 10, 43)`) colors.

The focused Bio checks live in `tests/e2e/bio.spec.ts`, with content and behavior coverage in `src/__tests__/BioPage.test.tsx`. The full automated Axe scan currently targets the portfolio homepage; the Bio suite should receive the same end-to-end Axe coverage if its structure becomes more complex.

## 💡 Suggestions for Future
- **Skip Links**: As the site grows, consider adding a "Skip to Content" link at the very top for keyboard users.
- **Bio Axe Coverage**: Add the localized Bio routes to the complete Axe scan as the page grows.
