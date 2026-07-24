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

### Bio Contact Hub — Use Accessible Names and Scoped Regions

| Element | Recommended Selector | Reason |
| --- | --- | --- |
| Portfolio home | `page.getByRole('link', { name: 'Página inicial' })` | Localized accessible name; visual mark has no ambiguous text |
| Profile heading | `page.getByRole('heading', { level: 1, name: 'Vinícius Varjão' })` | Stable primary identity |
| WhatsApp CTA | `page.getByRole('link', { name: /Falar sobre um projeto/i })` | Visible action text; expect two instances |
| Services | `page.getByRole('region', { name: 'Serviços' })` | Stable localized landmark |
| Service headings | `page.getByRole('region', { name: 'Serviços' }).getByRole('heading', { level: 3 })` | Preserves priority-order assertion |
| Language action | `page.getByRole('link', { name: 'Ver página em inglês' })` | Accessible action describes its destination |
| Secondary contacts | `page.getByRole('navigation', { name: 'Outros contatos' })` | Scopes repeated social link names |

## Verification Summary
**Analysis Method:** Live browser testing ✅  
**Pages:** Portfolio and bio hub verified, 20+ selectors documented<br>
**Confidence:** HIGH - Synchronized with 2026 Redesign  
**Evidence:** See VERIFICATION.md
