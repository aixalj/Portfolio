import { unlockPolityDemo } from './polity-password.js';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ ok: false });
    return;
  }

  const body =
    typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;
  const result = unlockPolityDemo(
    body?.password,
    process.env.POLITY_DEMO_PASSWORD
  );

  if (!result.ok) {
    res.status(result.status).json({ ok: false });
    return;
  }

  res.status(200).json({ ok: true, url: result.url });
}
