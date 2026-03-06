# GLP-1 Landing Page A/B Test

## Quick Start

```bash
npm install
cp .env.example .env.local  # Fill in Supabase credentials
npm run dev
```

## Architecture

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS v4
- **A/B Testing**: Edge Middleware with cookie-based 50/50 split
  - Variant A: "Atlas." — sage green accent, direct fitness tone
  - Variant B: "metOS" — teal accent, systems/tech tone
- **Supabase** for waitlist signups + analytics events
- **Zod** for API input validation

## A/B Testing

- Visit `/` → randomly assigned to variant A or B (cookie persists 30 days)
- Debug: `/?variant=a` or `/?variant=b` to force a variant
- URL stays as `/` — visitor never sees `/a` or `/b`

## Analytics

Events tracked per variant:
- Page views, scroll depth (25/50/75/100%), CTA clicks, time on page, email submissions
- All queryable in Supabase dashboard

## Supabase Setup

Run the migration in `supabase/migrations/001_initial_schema.sql` against your Supabase project.

## Deploy

Push to `main` → Vercel auto-deploys → `stack.erapps.xyz`
