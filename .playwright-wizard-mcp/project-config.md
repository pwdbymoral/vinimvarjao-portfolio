# Project Stack

**Framework:** React 19 (Vite)  
**State:** React State / Context  
**API:** None (Static content for now)  
**Auth:** None  
**Database:** None  
**Build:** Vite 8 (Rolldown)  
**Deployment:** Docker (Multi-stage Nginx Alpine)  
**Monorepo:** No  
**Styling:** Vanilla CSS (Neo-Brutalism System)<br>
**Routing:** TanStack Router (file-based localized routes)<br>
**Internationalization:** i18next (`pt` and `en`)<br>
**Icons:** React Icons

## Testing Implications

- React 19: Standard rendering, no complex hydration issues for this static wireframe.
- Vite 8: Uses Rolldown, extremely fast dev server.
- TanStack Router: `/` and `/bio` redirect to localized routes; `/$lang/bio` is nested under `/$lang`.
- Biome: Strict linting and formatting configured (Tabs + Double Quotes).
- Husky: Git hooks configured for linting and build.
- UI Flavor: Neo-Brutalist (Expect high-contrast borders and bold typography).
- Bio surface: Mobile-first ForjaCorp visual system with WhatsApp as the primary conversion action.

## Route Map

| Route | Component purpose |
| --- | --- |
| `/` | Preferred-language portfolio redirect |
| `/$lang` | Full portfolio |
| `/bio` | Preferred-language bio redirect |
| `/$lang/bio` | Standalone contact hub |

## Cross-Platform Rules

- `npm run setup` configures local Git, installs locked dependencies, installs Chromium and Firefox, and validates a fresh clone.
- `.gitattributes` forces LF for text and excludes binary assets from normalization.
- `.editorconfig` standardizes UTF-8, LF, final newlines, and trailing whitespace.
- Windows clones use `core.filemode=false`; native Linux clones use `core.filemode=true`.
- Husky hooks remain executable in the Git index.
