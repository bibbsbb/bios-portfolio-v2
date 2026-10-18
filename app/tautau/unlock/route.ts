import { NextResponse, type NextRequest } from 'next/server';
import { ACCESS_COOKIE, accessToken, safeEqual, safeNext } from '@/lib/tautau-access';

// Checks the passcode from the /tautau unlock form and sets the access cookie.
export async function POST(request: NextRequest) {
  const passcode = process.env.TAUTAU_PASSCODE;
  const form = await request.formData();
  const entered = String(form.get('passcode') ?? '').trim();
  const next = safeNext(form.get('next'));

  if (!passcode || !safeEqual(entered, passcode)) {
    return NextResponse.redirect(new URL(`${next}?wrong=1`, request.url), 303);
  }

  const response = NextResponse.redirect(new URL(next, request.url), 303);
  response.cookies.set(ACCESS_COOKIE, await accessToken(passcode), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/tautau',
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}
