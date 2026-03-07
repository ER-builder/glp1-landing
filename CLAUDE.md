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
- FDA disclaimer in footer on both variants (no orphan asterisk)
- Framed as pre-launch waitlist, not purchase
- **Audit fixes (Mar 2026):** Removed drug-level claims ("Cortisol Control", "100% Science-Backed", "Biome Repair", "Rate Lock", imperative efficacy language). Replaced with compliant structure/function language. All stats, module titles, hero text, and how-it-works steps reviewed.
- **AI-dominant messaging (Mar 2026):** Product positioning shifted from static supplement stack to AI-driven personalization. Hero pills, stats, how-it-works steps, and waitlist cards now emphasize AI evaluation, AI-matched protocols, and AI adaptation.

## Deploy

Push to `main` → Vercel auto-deploys → `stack.erapps.xyz`

## Gotchas

- Tailwind v4 uses CSS `@layer` — unlayered global CSS (like `* { padding: 0 }`) will override utility classes
- `@theme inline` in globals.css defines custom colors (abyss, navy, sage, teal, etc.)
- Fonts self-hosted via `next/font/google` (Outfit + JetBrains Mono)
- Migration SQL file path says "supabase" but project uses Neon — just the directory name
- **Rate limiting (Mar 2026):** IP-based in-memory rate limiter at `src/lib/rate-limit.ts` (10 req/min per IP). Applied to `/api/waitlist` and `/api/events`. Resets on cold start (Vercel serverless) — acceptable for preventing abuse bursts
- **Security headers (Mar 2026):** Full suite in `next.config.ts` — HSTS, X-Frame-Options: DENY, nosniff, CSP (connect-src restricted to `*.neon.tech`), Permissions-Policy
- **Neon tagged template literals are parameterized:** `sql\`INSERT ... VALUES (\${val})\`` is safe from SQL injection — the driver auto-parameterizes. No need for manual escaping
- **WaitlistForm Tailwind fix (Mar 2026):** Dynamic `bg-${accentColor}/10` interpolation replaced with conditional full class strings — Tailwind v4 can't generate CSS for dynamic class fragments. Added `aria-label` to email input.
- **OG/Twitter meta (Mar 2026):** `metadataBase`, `openGraph.images`, and `twitter.card` added in `layout.tsx`. Placeholder `/og.png` — actual image TBD.
- **poweredByHeader (Mar 2026):** Disabled in `next.config.ts` — no need to advertise Next.js version.

## Analyzing Results

When you have enough traffic (200+ page views per variant), determine the winner:

```sql
-- Conversion rate per variant
SELECT
  e.variant,
  COUNT(*) FILTER (WHERE e.event_type = 'page_view') AS views,
  (SELECT COUNT(*) FROM waitlist w WHERE w.variant = e.variant) AS signups,
  ROUND(
    (SELECT COUNT(*) FROM waitlist w WHERE w.variant = e.variant)::numeric
    / NULLIF(COUNT(*) FILTER (WHERE e.event_type = 'page_view'), 0) * 100, 2
  ) AS conversion_pct
FROM events e
GROUP BY e.variant;
```

```sql
-- Scroll depth comparison (engagement quality)
SELECT variant, event_type, COUNT(*) AS count
FROM events
WHERE event_type LIKE 'scroll_%'
GROUP BY variant, event_type
ORDER BY variant, event_type;
```

```sql
-- Average time on page per variant
SELECT variant,
  ROUND(AVG((event_data->>'seconds')::numeric)) AS avg_seconds
FROM events
WHERE event_type = 'time_on_page'
GROUP BY variant;
```

Plug the views + signups into an online A/B significance calculator (e.g. abtestguide.com/calc/) — need 95% confidence before calling a winner.

## Roadmap

- [ ] **Call the A/B winner** — once statistically significant, drop the losing variant and go all-in on the winner's brand name
- [ ] **Buy domain** — grab the winner-specific domain (see domain list in original plan)
- [ ] **Add significance dashboard** — simple `/admin` page showing conversion rates + significance (or just use the SQL queries above)
- [ ] **UTM tracking validation** — run a test ad with UTM params, verify source/medium/campaign appear in waitlist table
- [ ] **Email confirmation flow** — double opt-in for waitlist (anti-spam, higher quality list)
- [ ] **Privacy policy + Terms pages** — currently placeholder links in footer, need real content before running paid ads
- [ ] **Mobile polish pass** — Lighthouse audit, test on real devices
- [ ] **Ad creative** — design Meta/Google ad creatives matching each variant's visual language
