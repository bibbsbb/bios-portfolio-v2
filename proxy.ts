import { NextResponse, type NextRequest } from 'next/server';
import { ACCESS_COOKIE, accessToken, safeEqual, unlockPage } from './lib/tautau-access';

// Gates /tautau (the pitch deck page and its assets) behind a passcode.
export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  if (pathname === '/tautau/unlock') return NextResponse.next();

  const passcode = process.env.TAUTAU_PASSCODE;
  const cookie = request.cookies.get(ACCESS_COOKIE)?.value;
  if (passcode && cookie && safeEqual(cookie, await accessToken(passcode))) {
    return NextResponse.next();
  }

  const headers = {
    'Cache-Control': 'no-store',
    'X-Robots-Tag': 'noindex, nofollow',
  };
  // Assets get a bare 401; the page itself shows the passcode screen.
  if (pathname.startsWith('/tautau/') && pathname !== '/tautau/' && pathname !== '/tautau/index.html') {
    return new NextResponse('Unauthorized', { status: 401, headers });
  }
  return new NextResponse(unlockPage(searchParams.has('wrong')), {
    status: 401,
    headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' },
  });
}

export const config = {
  matcher: ['/tautau', '/tautau/:path*'],
};
