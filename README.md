[![Design](https://img.shields.io/badge/Design-Neo--Brutalism-yellow)](#)
[![Accessibility](https://img.shields.io/badge/A11y-WCAG%20AA-success)](#)

> **"Product-driven engineering defined by technical authority, extreme quality (TDD), and accessible UX strategy."**

Welcome to my professional portfolio and contact hub. The project combines a high-impact **Neo-Brutalist** portfolio with a mobile-first `/bio` experience for qualified business conversations, optimized for **SEO**, **Accessibility**, and strict TDD.

---

## 🚀 Tech Stack & Infrastructure

This portfolio is built using a futuristic 2026 tech stack, ensuring maximum performance, type safety, and developer experience.

- **Core**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 8](https://vitejs.dev/) (Lightning fast development and builds)
- **Routing**: [TanStack Router](https://tanstack.com/router) with localized portfolio and bio routes
- **Internationalization**: [i18next](https://www.i18next.com/) for Portuguese and English
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) for recognizable contact actions
- **Quality Control**: [Biome](https://biomejs.dev/) (Unified linting, formatting, and optimization)
- **Testing Suite**: 
    - **E2E**: [Playwright](https://playwright.dev/) (Cross-browser automation)
    - **Unit/Component**: [Vitest](https://vitest.dev/)
- **Workflows**: [Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/lint-staged/lint-staged) (Enforcing atomic commits and code quality)

- **Automation Memory**: Managed via `.playwright-wizard-mcp/` to ensure persistent UI knowledge for AI and automation.

---

## 🧭 Application Surfaces

| Route | Purpose |
| --- | --- |
| `/` | Redirects to the localized portfolio |
| `/:lang` | Full professional portfolio (`pt` or `en`) |
| `/bio` | Redirects to the localized contact hub |
| `/:lang/bio` | Mobile-first contact hub (`pt` or `en`) |

### Bio Contact Hub

The `/bio` surface is designed for Instagram and other social profiles where a fast, qualified contact path matters more than a complete project showcase.

- Positions Vinícius as a **Growth Engineer** across software, paid media, automation, and integrations.
- Prioritizes WhatsApp as the primary call to action.
- Exposes approved secondary contacts: LinkedIn, Instagram, GitHub, X/Twitter, and email.
- Uses the ForjaCorp visual identity without presenting ForjaCorp as an operating company.
- Keeps project showcase links and current-employer details out of this focused conversion flow.
- Uses a direct alternate-language action: `English` on Portuguese pages and `Português` on English pages.

---

## 🛠 Engineering Philosophy (TDD First)

This project strictly adheres to the **Red-Green-Refactor** cycle. Every feature or UI tweak is first defined by a failing test, then implemented with minimal code, and finally refactored for excellence.

### Project identity guidelines:
- **Zero biome-ignore**: No shortcuts are taken. All code must pass the strict linting rules.
- **Atomic Commits**: Every change is tracked with semantic and atomic git commits.
- **Enterprise Standards**: Follows the `CLAUDE.md` living specification pattern for AI-agent collaboration.

---

## 🏃 Getting Started

### Prerequisites
- Node.js (Latest LTS)
- npm or yarn

### Installation
```bash
git clone https://github.com/pwdbymoral/vinimvarjao-portfolio.git
cd vinimvarjao-portfolio
npm install
```

### Running Locally
```bash
npm run dev
```

Useful local routes:

```text
http://localhost:5173/pt
http://localhost:5173/en
http://localhost:5173/pt/bio
http://localhost:5173/en/bio
```

### Testing Everything
```bash
# Run all tests (Unit + E2E)
npm run test:all

# Run E2E specifically
npm run test:e2e

# Run Vitest Watch
npm run test:watch

# Run Production Smoke Test (Verifies build artifact)
npm run test:prod
```

> Text files are normalized as UTF-8 with LF through `.editorconfig` and `.gitattributes` for consistent development across Windows and Linux.

---

## 🐳 Docker & Deployment

This portfolio is optimized for **Coolify** (or any VPS) using a multi-stage Docker build.

### Building & Running Locally
```bash
# Build the production image
docker build -t portfolio .

# Run the container
docker run -p 8080:80 portfolio
```

### Deployment Strategy
- **Infrastructure**: [Dockerfile](Dockerfile) + [nginx.conf](nginx.conf)
- **Engine**: Nginx Alpine (Ultra-lightweight)
- **Routing**: SPA support enabled (fallback to index.html)
- **CI/CD**: Always run `npm run test:prod` before deployment to ensure the build artifact is functional.

---

## 🎨 Professional Identity

- **Expertise**: Software Development, Paid Media, Automation, and Integrations.
- **Positioning**: Growth Engineering that connects technology, acquisition, and business operations.
- **GitHub**: [@pwdbymoral](https://github.com/pwdbymoral)

---

Built with ❤️ by **Vinícius Varjão** in 2026.
