# Agent Guide

## Stack
- Next.js 16 (App Router), React 19, TypeScript 5 (strict)
- Tailwind CSS 4, Motion, Base UI, shadcn (style `base-lyra`, RTL enabled, `@hugeicons`)
- Custom registries: `@ncdai` (chanhdai.com), `@soundcn` (soundcn.xyz)
- Package manager: Bun (`bun.lock` present). Use `bun` for scripts/install.
- Testing: Vitest + jsdom + Testing Library; `vitest.setup.ts` polyfills `matchMedia` and `PointerEvent`

## Commands (package.json)
```bash
bun install --frozen-lockfile
bun run dev        # next dev
bun run build      # next build
bun run start      # next start
bun run lint       # oxlint
bun run format     # prettier --write "**/*.{ts,tsx}" (with prettier-plugin-tailwindcss)
bun run typecheck  # tsc --noEmit
bun run test       # vitest run
bun run test:watch # vitest
bun run check      # npm run lint && npm run typecheck && npm run test (order: lint -> typecheck -> test)
```
Verify before PR/deploy: `bun run check && bun run build`.

## Lint/Config quirks
- Linting via oxlint (`.oxlintrc.json`). Plugins: `nextjs`, `typescript`, and (overrides) `react`, `import`, `jsx-a11y`. Correctness category off; many TS/React rules enforced. Ignores `.next/**`, `out/**`, `build/**`, `next-env.d.ts`.
- TS uses `moduleResolution: "bundler"`, `jsx: "react-jsx"`, strict, path alias `@/*` -> `./*`.
- Next config: redirects `/apple-touch-icon*.png` -> `/logo.png`; image config restricts to Cloudflare R2 `pub-17f1ae3c481641228230d1b2dcdc07ff.r2.dev/projects/**` with WebP, specific sizes/qualities, long cache TTL.

## Structure (repo-specific)
- `app/` App Router routes, metadata, `sitemap.ts`, `robots.ts`, API routes
- `components/{home,portfolio,project,showcase,ui}/` split by page/concern
- `constants/{home,portfolio,projects}/` content/data (edit here for copy/projects)
- `lib/seo.ts` central SEO (title/desc/canonical/OG)
- `hooks/`, `sounds/`, `public/` assets

## Notes
- jsdom setup stubs `matchMedia` and adds `PointerEvent` polyfill (motion/Base UI touch/pointer sensitive).
- If editing content: see README "Content editing" section (intro/about/stack/experience/projects/contact/SEO).
- Next.js 16 is non-standard vs older training data — check `node_modules/next/dist/docs/` if unsure.
