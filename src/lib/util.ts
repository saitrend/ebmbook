// Helper to strip spaces, underscores, dashes, and lowercase the string
export const normalizeText = (str: string) =>
  str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

const ipStore = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 3;

export function checkRateLimit(ip: string) {
  const now = Date.now();
  const record = ipStore.get(ip);

  if (!record) {
    ipStore.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return { allowed: true };
  }

  if (now > record.resetAt) {
    ipStore.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.ceil((record.resetAt - now) / 1000),
    };
  }

  record.count += 1;
  ipStore.set(ip, record);

  return { allowed: true };
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

type FirestoreLikeTimestamp = { _seconds: number; _nanoseconds?: number };

export function isFirestoreTimestamp(
  value: unknown,
): value is FirestoreLikeTimestamp {
  return (
    typeof value === "object" &&
    value !== null &&
    "_seconds" in value &&
    typeof (value as FirestoreLikeTimestamp)._seconds === "number"
  );
}

// startDatetime/endDatetime are typed as `string | null` in UserPlan, but the
// backend actually returns Firestore Timestamp objects ({_seconds, _nanoseconds})
// once a real value is set. Handle both shapes defensively.
export function formatDate(value: unknown): string | null {
  if (value === null || value === undefined) return null;

  let date: Date | null = null;

  if (isFirestoreTimestamp(value)) {
    date = new Date(value._seconds * 1000);
  } else if (typeof value === "string" || typeof value === "number") {
    date = new Date(value);
  }

  if (!date || Number.isNaN(date.getTime())) return null;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}
