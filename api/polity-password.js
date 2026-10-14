import { timingSafeEqual } from 'node:crypto';

export const POLITY_DEMO_URL = 'https://polity-demo.vercel.app/';

export function unlockPolityDemo(attempt, expected) {
  if (!expected) {
    return { ok: false, status: 500 };
  }

  const given = Buffer.from(String(attempt ?? ''));
  const want = Buffer.from(expected);
  const matches =
    given.length === want.length && timingSafeEqual(given, want);

  if (!matches) {
    return { ok: false, status: 401 };
  }

  return {
    ok: true,
    status: 200,
    url: process.env.POLITY_DEMO_URL || POLITY_DEMO_URL,
  };
}
