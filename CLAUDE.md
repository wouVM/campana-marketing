# Campana Marketing Site

## Quick Context

| What | Details |
|------|---------|
| **Stack** | Next.js 16, React 19, TypeScript 5 |
| **Styling** | Tailwind CSS 4 (CSS-first config in `globals.css`) |
| **i18n** | next-intl — locales: `en`, `pl` · prefix: always · routing in `src/i18n/routing.ts` |
| **Fonts** | Inter (body) + JetBrains Mono (code) via `next/font` |
| **Icons** | lucide-react |
| **Animations** | framer-motion |
| **Theme** | next-themes — dark mode default, light mode supported |

## Project Structure

```
src/
├── app/
│   ├── globals.css           # Tailwind theme (brand colors, typography scale)
│   ├── layout.tsx            # Root layout (html, fonts)
│   └── [locale]/
│       ├── layout.tsx        # Locale layout (Header, Footer, providers)
│       ├── page.tsx          # Homepage
│       └── {route}/page.tsx  # about, blog, contact, faq, pricing, etc.
├── components/               # Shared UI components
│   ├── header.tsx            # Nav with desktop/mobile + solutions dropdown
│   ├── footer.tsx
│   ├── section.tsx           # Reusable page section wrapper
│   ├── cta-block.tsx
│   ├── cookie-banner.tsx
│   ├── language-switcher.tsx
│   ├── theme-toggle.tsx
│   └── theme-provider.tsx
├── i18n/
│   ├── routing.ts            # Locale config + localized pathnames
│   ├── navigation.ts         # createNavigation() for Link, useRouter, etc.
│   └── request.ts            # Server-side i18n setup
├── messages/
│   ├── en.json               # English translations
│   └── pl.json               # Polish translations
└── middleware.ts              # next-intl locale routing middleware
```

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # ESLint
```

## Conventions

### Routing & i18n
- All pages live under `src/app/[locale]/`
- Use `Link` from `@/i18n/navigation` — never from `next/link` directly
- Add localized pathnames to `src/i18n/routing.ts` for every new route
- Add translations to **both** `en.json` and `pl.json` for every new string
- Use `useTranslations("namespace")` in client components, `getTranslations` in server components

### Components
- Mark client components with `"use client"` only when they use hooks/interactivity
- Use the `@/*` path alias (maps to `./src/*`)
- Icons: import from `lucide-react`

### Styling
- Tailwind utility classes — no CSS modules, no styled-components
- Brand colors defined as CSS custom properties in `globals.css` (use via `bg-brand`, `text-brand-light`, etc.)
- Dark mode is the default. Use `dark:` / `light:` variants for theme-aware styling.
- Typography scale uses `clamp()` for responsive sizing — use `text-hero`, `text-h2`, `text-h3`, `text-h4`, `text-body-lg`, `text-body-sm`
- Max widths: `max-w-content` (1280px), `max-w-content-wide` (1440px)
- Respect `prefers-reduced-motion` — already handled globally in `globals.css`

### Hard Rules
- Never hardcode user-facing strings — always use translation keys
- Never use `next/link` directly — use `@/i18n/navigation` Link
- Never skip `en.json` + `pl.json` when adding text
- Keep `"use client"` to the minimum boundary needed

## Code Intelligence (LSP)

TypeScript LSP is available. Prefer LSP over Grep for code navigation.

- **After edits**: check LSP diagnostics and fix type errors before proceeding
- **Use Grep only** for text/pattern searches (comments, strings, config values)
