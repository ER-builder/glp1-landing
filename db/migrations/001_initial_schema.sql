-- GLP-1 Landing Page — Neon Postgres Schema
-- Run this in Neon SQL Editor (console.neon.tech)

-- Waitlist signups (primary conversion metric)
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  variant TEXT NOT NULL CHECK (variant IN ('a', 'b')),
  source TEXT,
  medium TEXT,
  campaign TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Granular analytics events
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  variant TEXT NOT NULL CHECK (variant IN ('a', 'b')),
  event_type TEXT NOT NULL,
  event_data JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for querying events
CREATE INDEX IF NOT EXISTS idx_events_variant ON events (variant);
CREATE INDEX IF NOT EXISTS idx_events_type ON events (event_type);
CREATE INDEX IF NOT EXISTS idx_events_session ON events (session_id);
