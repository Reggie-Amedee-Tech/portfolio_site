# Portfolio site

Next.js App Router portfolio under `portfolio_site/`.

## Getting started

```bash
cd portfolio_site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                                  | Purpose                |
| --------------------------------------- | ---------------------- |
| `npm run dev`                           | Dev server             |
| `npm run build`                         | Production build       |
| `npm run lint`                          | ESLint (warnings fail) |
| `npm run format:check` / `format:write` | Prettier               |
| `npm run typecheck`                     | `tsc --noEmit`         |
| `npm run storybook`                     | Component stories      |

## Contact form

Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `portfolio_site/.env.local` (see `.env.example` if present).

## Troubleshooting

After moving app directories (for example `app/` → `src/app/`), clear the Next build cache before trusting typecheck failures:

```bash
rm -rf .next
```

`tsconfig.json` includes `.next/types/**/*.ts`. Stale validator types from the old layout can report missing modules that no longer exist until the cache is cleared.

## Git hooks

Husky lives at the repo root. From `portfolio_site/`:

- **pre-commit** — `lint-staged` (eslint + prettier on changed files)
- **pre-push** — `typecheck` + `build`

Hooks are a convenience, not enforcement. CI runs the same quality gates on every PR.
