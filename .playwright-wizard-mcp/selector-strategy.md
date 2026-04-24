# Selector Strategy

> **Analysis Method:** ✅ LIVE BROWSER TESTING with Chrome DevTools MCP

## Per-Page Strategy

### Home Page (Score: 98%) - ✨ Use Semantic Selectors
The HTML follows high-quality semantic standards. Preference is given to Playwright's built-in locators (`getByRole`, `getByText`) to ensure accessibility is baked into the tests.

| Element | Recommended Selector | Reason |
|---------|---------------------|--------|
| Header Nav | `page.locator(".header").getByRole('navigation')` | Semantic landmark scoped to header |
| Profile Name | `page.getByText(/VINÍCIUS VARJÃO/i)` | Primary identifier in banner |
| Hero Headline | `page.getByRole('heading', { level: 1 })` | Single H1 verified |
| Project Cards | `page.locator(".card")` | Repeater pattern for works |
| Primary CTA | `page.getByRole('link', { name: /Selected Work/i })` | Accessible link name |
| Resume Cards | `page.locator(".experience-card"), page.locator(".education-card")` | Stacked card interactive components |
| Social Links | `page.getByRole('link', { name: /GitHub Profile/i })` | Precise accessible name |

## Verification Summary
**Analysis Method:** Live browser testing ✅  
**Pages:** 1 visited, 1 snapshot, 15+ selectors verified  
**Confidence:** HIGH - Synchronized with 2026 Redesign  
**Evidence:** See VERIFICATION.md
