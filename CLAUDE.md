# GLP-1 Landing Page A/B Test

## Quick Start

```bash
npm install
cp .env.example .env.local  # Add Neon DATABASE_URL
npm run dev
```

## Architecture

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS v4
- **A/B Testing**: Edge Middleware with cookie-based 50/50 split
  - Variant A: "Atlas." — sage green accent, direct fitness tone
  - Variant B: "metOS" — teal accent, systems/tech tone
- **Neon** (serverless Postgres) for waitlist signups + analytics events
- **Zod** for API input validation
- **GitHub**: `ER-builder/glp1-landing`

## A/B Testing

- Visit `/` → randomly assigned to variant A or B (cookie persists 30 days)
- Debug: `/?variant=a` or `/?variant=b` to force a variant
- URL stays as `/` — visitor never sees `/a` or `/b`

## Database

- **Provider**: Neon (free tier, serverless Postgres)
- **Driver**: `@neondatabase/serverless` (HTTP-based, no connection pooling needed)
- **Env var**: `DATABASE_URL` (pooled connection string from Neon dashboard)
- **Schema**: `supabase/migrations/001_initial_schema.sql` (name is legacy — it's plain Postgres SQL, no Supabase dependency)
- **Tables**: `waitlist` (email signups), `events` (analytics)

## Analytics

Events tracked per variant:
- Page views, scroll depth (25/50/75/100%), CTA clicks, time on page, email submissions
- All queryable in Neon SQL Editor or any Postgres client

## FDA/FTC Compliance

- No fabricated stats or fake testimonials
- All product claims use structure/function language ("formulated to support", "designed to support")
- No drug-interaction claims (doesn't say the supplement modifies GLP-1 drug action)
- FDA disclaimer in footer on both variants
- Framed as pre-launch waitlist, not purchase

## Deploy

Push to `main` → Vercel auto-deploys → `stack.erapps.xyz`

## Gotchas

- Tailwind v4 uses CSS `@layer` — unlayered global CSS (like `* { padding: 0 }`) will override utility classes
- `@theme inline` in globals.css defines custom colors (abyss, navy, sage, teal, etc.)
- Fonts self-hosted via `next/font/google` (Outfit + JetBrains Mono)
- Migration SQL file path says "supabase" but project uses Neon — just the directory name
