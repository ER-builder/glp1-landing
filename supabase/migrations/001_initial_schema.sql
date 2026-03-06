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

-- Index for querying events by variant and type
CREATE INDEX IF NOT EXISTS idx_events_variant ON events (variant);
CREATE INDEX IF NOT EXISTS idx_events_type ON events (event_type);
CREATE INDEX IF NOT EXISTS idx_events_session ON events (session_id);

-- RLS policies: allow inserts from anon, reads only via service role
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (the API routes use service role key, but these are fallback)
CREATE POLICY "Allow anonymous inserts on waitlist"
  ON waitlist FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on events"
  ON events FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role full access (implicit, but explicit for clarity)
CREATE POLICY "Service role full access on waitlist"
  ON waitlist FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access on events"
  ON events FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
