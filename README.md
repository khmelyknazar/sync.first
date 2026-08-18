# Sync Industry — Monorepo

Етап 1 реалізації: структура проєкту, конфігурація, design tokens, theme, fonts, animation architecture. Сторінок ще немає навмисно.

## Структура

```
axioma/
  apps/
    marketing/          Next.js 15 App Router — публічний сайт (єдиний реальний продукт зараз, Product Architecture v2)
  packages/
    design-system/       Design tokens (3-layer: primitive → semantic → component), motion architecture, cn()
    core-sdk/             Типізований клієнт до internal API — зарезервовано, порожній до першого реального endpoint
    utils/                Domain-agnostic хелпери — порожній до першої повторюваної потреби
    config/                Спільні tsconfig/eslint/prettier — єдине джерело правди для всього monorepo
```

Нові apps (`crm`, згодом `erp`) додаються поруч з `marketing` за тим самим шаблоном, коли стають реальним продуктом (Product Architecture v2, §4 Latent modules) — жодних попередньо створених порожніх `apps/*` під них.

## Чому такі рішення

- **pnpm workspaces + Turborepo** — інструмент, створений і використовуваний командою Vercel; кешування задач (`build`/`lint`/`typecheck`) між apps/packages критичне навіть при команді до 10 людей, бо design-system змінюється часто і зачіпає всі apps одночасно.
- **`src/` в apps/marketing, не root-level app/** — чітке розділення app-router файлів (маршрутизація) від логіки/компонентів; полегшує майбутній перехід на монорепо з кількома apps без плутанини "де що лежить".
- **Feature-based `src/features/`, а не тільки `components/`** — узгоджено з Component Philosophy (Design System §11): Product Blocks групуються за доменом, а не звалюються в один плаский `components/`.
- **`@axioma/*` workspace-пакети замість копіювання конфігів** — design tokens, tsconfig, eslint визначені один раз; зміна токена в `packages/design-system` автоматично поширюється на кожен app через `transpilePackages`, без build-кроку між ними.
- **Tailwind v4 CSS-first (`@theme inline`)** — токени лишаються у звичайному CSS (single source of truth, легко читати дизайнеру й розробнику одночасно), а не в JS `tailwind.config.ts`, який дублював би те, що вже описано в `tokens.css`.
- **shadcn/ui з compatibility-bridge** — CLI генерує компоненти проти стандартних імен змінних (`--primary`, `--ring` тощо); замість ручного редагування кожного згенерованого компонента, ці імена одноразово заалайсені на семантичні токени Sync Industry в `tokens.css`.
- **ESLint flat config + `typescript-eslint` strict** — сучасний стандарт (ESLint 9), `strictTypeChecked` — свідомо суворіше дефолтного, бо "рівень Vercel/Stripe" означає компілятор, що ловить помилки до code review, а не після.
- **Один шрифт (Inter) для Display+Body, окремий mono (JetBrains Mono)** — пряме продовження Typography-рішення з Design System §3.1: послідовність шрифту сигналізує інженерну строгість, а не "модність".
- **`next-themes` на `data-theme`, не `class`** — той самий атрибут, яким вже керує `tokens.css` (`[data-theme="dark"]`), без дублювання логіки перемикання теми в двох місцях.
- **`motion` (не Framer Motion напряму)** — офіційний спадкоємець бібліотеки, вже зафіксований як залежність у Технологіях (Стадія 0); варіанти анімації централізовані в `packages/design-system/lib/motion.ts`, а не розкидані по компонентах — єдина можливість гарантувати "no bounce/overshoot" правило (Design System §8) на рівні всього кодового бути, а не по пам'яті кожного розробника.

## Naming conventions

- Файли компонентів — `PascalCase.tsx`, хуки — `useCamelCase.ts`, утиліти — `camelCase.ts`.
- Aliases: `@/*` → `src/*` в кожному app; `@axioma/*` → workspace-пакети.
- Component naming в самому UI-шарі (Primitives/Patterns/Product Blocks) — за конвенцією Design System §12, застосовується з моменту першого реального компонента (Етап 2 реалізації).

## Етап 2 (Build Phase, Stage 1) — додано

- **`robots.ts` / `sitemap.ts`** — Next.js metadata-route conventions замість статичних файлів у `public/`; `sitemap.ts` навмисно містить лише `/`, бо реальних сторінок ще немає (буде розширюватись разом із Marketing Website Specification §1).
- **`icon.tsx` / `apple-icon.tsx`** — favicon згенерований кодом (next/og `ImageResponse`) з тим самим `--ultramarine-500`, що і решта системи, а не статичний PNG, який може розійтись із токеном після наступної зміни палітри.
- **`src/lib/seo.ts` (`createPageMetadata`)** — App Router не має runtime "SEO provider"-компонента (метадані — build/request-time API, не частина дерева рендеру); ця функція — функціональний еквівалент: єдине місце, де кожна майбутня сторінка отримує canonical URL, OG/Twitter payload і robots-директиви консистентно.
- **`MotionProvider`** — `LazyMotion(domAnimation)` для розміру бандла + `MotionConfig reducedMotion="user"` як глобальна страховка для reduced-motion, поверх ручного `useReducedMotionVariants` для компонентів із кастомними варіантами.
- **`Container`** — єдина точка, де Grid-правила Design System §7 перетворюються на код (`size: default|narrow|full`), а не hardcoded max-width у кожній секції.
- **`PageWrapper`** — `<main id="main-content">` (ціль `SkipLink`) + page-transition анімація з Design System §8.3; підключається на рівні layout route-групи (наприклад майбутній `(marketing)/layout.tsx`), не в кожній сторінці окремо.
- **`SkipLink`** — WCAG 2.1 AA (2.4.1 Bypass Blocks), перший фокусований елемент документа.

Очікую підтвердження.

# sync.first
