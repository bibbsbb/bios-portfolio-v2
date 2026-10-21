import { NextResponse, type NextRequest } from 'next/server';
import { EMAIL_PATTERN, clean, sendToBrandon } from '@/lib/email';

// Contact form: validates the message and emails it to Brandon.

const TYPES = ['Website', 'Product or app', 'IT and strategy', 'Something else'];

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 });
  }

  // Spam traps: a hidden field people never fill, and a form sent faster than a person could.
  const started = Number(body.started);
  if (clean(body.website, 200) || !Number.isFinite(started) || Date.now() - started < 2500) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const message = clean(body.message, 5000);
  const type = TYPES.includes(String(body.type)) ? String(body.type) : 'Not specified';
  if (!name || !EMAIL_PATTERN.test(email) || message.length < 10) {
    return NextResponse.json({ error: 'invalid' }, { status: 422 });
  }

  const result = await sendToBrandon({
    replyTo: email,
    subject: `New inquiry: ${type} · ${name}`,
    text: `${message}\n\n—\nName: ${name}\nEmail: ${email}\nProject type: ${type}\nSent from the contact form on brandonbibbins.io`,
  });
  if (result === 'not_configured') return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  if (result === 'failed') return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  return NextResponse.json({ ok: true });
}
