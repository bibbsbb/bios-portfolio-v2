import { NextResponse, type NextRequest } from 'next/server';
import { EMAIL_PATTERN, clean, sendToBrandon } from '@/lib/email';

// Tau Tau Chapter questionnaire: emails the answers to Brandon.
// Sits under /tautau, so the passcode gate in proxy.ts already guards it.

type Answer = { section: string; label: string; value: string };

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 });
  }

  // Spam traps: a hidden field people never fill, and a form sent faster than a person could.
  const started = Number(body.started);
  if (clean(body.company_site, 200) || !Number.isFinite(started) || Date.now() - started < 5000) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  if (!name || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'invalid' }, { status: 422 });
  }

  const answers: Answer[] = (Array.isArray(body.answers) ? body.answers : [])
    .slice(0, 80)
    .map((a: Record<string, unknown>) => ({
      section: clean(a?.section, 60),
      label: clean(a?.label, 160),
      value: clean(a?.value, 4000),
    }))
    .filter((a) => a.label && a.value);

  // Group answers under their section titles, in the order they came in.
  const lines: string[] = [];
  let section = '';
  for (const a of answers) {
    if (a.section !== section) {
      section = a.section;
      lines.push('', section.toUpperCase());
    }
    lines.push(`${a.label}\n${a.value}`, '');
  }

  const result = await sendToBrandon({
    replyTo: email,
    subject: `Tau Tau questionnaire · ${name}`,
    text: `Tau Tau Chapter project questionnaire\nFrom ${name} <${email}>\n${answers.length} questions answered\n${lines.join('\n')}\n—\nSent from brandonbibbins.io/tautau/intake`,
  });
  if (result === 'not_configured') return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  if (result === 'failed') return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  return NextResponse.json({ ok: true });
}
