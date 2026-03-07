const WINDOW_MS = 60_000 // 1 minute
const MAX_REQUESTS = 10 // per IP per minute
const ipMap = new Map<string, number[]>()

let lastCleanup = Date.now()

function cleanup() {
  const now = Date.now()
  if (now - lastCleanup < 5 * 60_000) return
  lastCleanup = now
  const cutoff = now - WINDOW_MS
  for (const [ip, timestamps] of ipMap) {
    const filtered = timestamps.filter((t) => t > cutoff)
    if (filtered.length === 0) ipMap.delete(ip)
    else ipMap.set(ip, filtered)
  }
}

export function isRateLimited(ip: string): boolean {
  cleanup()
  const now = Date.now()
  const cutoff = now - WINDOW_MS
  const timestamps = (ipMap.get(ip) || []).filter((t) => t > cutoff)

  if (timestamps.length >= MAX_REQUESTS) {
    return true
  }

  timestamps.push(now)
  ipMap.set(ip, timestamps)
  return false
}
