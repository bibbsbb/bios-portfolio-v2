// Sends mail to Brandon through Resend. Needs RESEND_API_KEY (added by the Resend
// integration on Vercel). Until brandonbibbins.io is verified in Resend, mail is sent
// from Resend's shared onboarding address, which only delivers to the Resend account's email.

const TO = process.env.CONTACT_TO ?? 'brandonbibbins@gmail.com';
const FROM = process.env.CONTACT_FROM ?? 'brandonbibbins.io <onboarding@resend.dev>';

export type SendResult = 'sent' | 'not_configured' | 'failed';

export async function sendToBrandon(mail: { subject: string; text: string; replyTo: string }): Promise<SendResult> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return 'not_configured';

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM, to: [TO], reply_to: mail.replyTo, subject: mail.subject, text: mail.text }),
  });
  if (!res.ok) {
    console.error('Resend error', res.status, await res.text().catch(() => ''));
    return 'failed';
  }
  return 'sent';
}

export function clean(v: unknown, max: number) {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
