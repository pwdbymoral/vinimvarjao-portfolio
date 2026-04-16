# Selector Strategy

> **Analysis Method:** ✅ LIVE BROWSER TESTING with Chrome DevTools MCP

## Per-Page Strategy

### Home Page (Score: 95%) - ✨ Use Semantic Selectors
Since the HTML quality is high, I recommend using Playwright's built-in locators for better resilience and accessibility testing.

| Element | Recommended Selector | Reason |
|---------|---------------------|--------|
| Header Nav | `page.getByRole('navigation')` | Semantic landmark exists |
| Hero Title | `page.getByRole('heading', { level: 1 })` | Clear hierarchy |
| Project Cards | `page.getByRole('heading', { level: 3 })` | Unique project titles |
| CTA Buttons | `page.getByRole('link', { name: 'View Projects' })` | Accessible name verified |

## Verification Summary
**Analysis Method:** Live browser testing ✅  
**Pages:** 1 visited, 1 snapshot, 12 selectors verified  
**Confidence:** HIGH - All findings based on actual testing  
**Evidence:** See VERIFICATION.md
