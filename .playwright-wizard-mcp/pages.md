# Application Pages

> **Analysis Method:** ✅ LIVE BROWSER TESTING with Chrome DevTools MCP

## Home Page (/) - Score: 98/100 ✅ POM created & verified

**Verification:** ✅ Visited, ✅ Snapshot taken, ✅ Selectors verified

**Interactive Elements (VERIFIED):**

| Element | Role / Text | Selector | Status |
|---------|-------------|----------|--------|
| Brand | Heading "VINÍCIUS VARJÃO" | `getByText(/VINÍCIUS VARJÃO/i)` | ✅ VERIFIED |
| Work Link | Link "Work" | `locator(".header").getByRole('link', { name: /Work/i })` | ✅ VERIFIED |
| About Link | Link "About" | `locator(".header").getByRole('link', { name: /About/i })` | ✅ VERIFIED |
| Contact Link | Link "Contact" | `locator(".header").getByRole('link', { name: /Contact/i })` | ✅ VERIFIED |
| Experience | Button "Experience" | `locator(".header").getByRole('button', { name: /Experience/i })` | ✅ VERIFIED |
| Education | Button "Education" | `locator(".header").getByRole('button', { name: /Education/i })` | ✅ VERIFIED |
| Selected Work | Link "Selected Work" | `getByRole('link', { name: /Selected Work/i })` | ✅ VERIFIED |
| Get in touch | Link "Get in touch" | `getByRole('link', { name: /Get in touch/i })` | ✅ VERIFIED |
| GitHub Profile | Link "GitHub Profile" | `getByRole('link', { name: /GitHub Profile/i })` | ✅ VERIFIED |
| LinkedIn Link | Link "LinkedIn" | `getByRole('link', { name: 'LinkedIn' })` | ✅ VERIFIED |
| Scroll to top | Button "Scroll to top" | `getByRole('button', { name: 'Scroll to top' })` | ✅ VERIFIED |
| Language Switch | Button "Change Language" | `getByRole('button', { name: /PT\|EN/i })` | ✅ VERIFIED |
| Theme Toggle | Button "Toggle Dark Mode" | `getByRole('button', { name: /Toggle Dark Mode/i })` | ✅ VERIFIED |


**Score Rationale:**
- Excellent use of semantic HTML5 landmarks (`banner`, `navigation`, `main`, `contentinfo`).
- Correct heading hierarchy (h1 -> h2 -> h3).
- Accessible names on all interactive elements.
- **Improved Narration:** Professional "Product Engineer" branding integrated.

**Flow Tested:**
- ✅ Navigation links confirmed to point to correct anchors.
- ✅ Hero actions confirmed.
- ✅ Project card links (GitHub & Live Demo) verified.

---

## Bio Contact Hub (`/pt/bio`, `/en/bio`) — VERIFIED

**Verification:** ✅ Chromium E2E, ✅ 390×844 mobile viewport, ✅ selectors verified

The localized bio page is a standalone contact surface. The portfolio header, footer, project grid, and employer details are intentionally absent.

| Element | Role / Text | Recommended Selector | Status |
| --- | --- | --- | --- |
| Portfolio home | Link “Página inicial” / “Portfolio home” | `getByRole('link', { name: 'Página inicial' })` | ✅ VERIFIED (ForjaCorp radial symbol) |
| Profile name | Heading “Vinícius Varjão” | `getByRole('heading', { level: 1, name: 'Vinícius Varjão' })` | ✅ VERIFIED |
| Primary CTA | Link “Falar sobre um projeto” | `getByRole('link', { name: /Falar sobre um projeto/i })` | ✅ VERIFIED (2 instances) |
| Services | Region “Serviços” | `getByRole('region', { name: 'Serviços' })` | ✅ VERIFIED |
| Language switch | Link “Ver página em inglês” | `getByRole('link', { name: 'Ver página em inglês' })` | ✅ VERIFIED |
| LinkedIn | Link “LinkedIn” | `getByRole('link', { name: 'LinkedIn' })` | ✅ VERIFIED |
| Instagram | Link “Instagram” | `getByRole('link', { name: 'Instagram' })` | ✅ VERIFIED |
| GitHub | Link “GitHub” | `getByRole('link', { name: 'GitHub' })` | ✅ VERIFIED |
| X/Twitter | Link “Twitter” | `getByRole('link', { name: 'Twitter' })` | ✅ VERIFIED |
| Email | Link “E-mail” | `getByRole('link', { name: 'E-mail' })` | ✅ VERIFIED |
| ForjaCorp signature | Image “ForjaCorp” | `getByAltText('ForjaCorp')` | ✅ VERIFIED |

**Critical assertions:**

- No horizontal overflow at 390px.
- WhatsApp URLs use `5579981370707`.
- The three services stay in the approved priority order.
- The WhatsApp hover state uses dark purple text on the light yellow background.
- The direct language action shows the alternate language by name.
