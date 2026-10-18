import Link from 'next/link';
import { Mark } from '@/components/site/ui';

export default function NotFound() {
  return (
    <main className="grain relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <Mark className="text-5xl text-paper" />
      <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-fog">404</p>
      <h1 className="mt-4 font-display text-5xl font-light tracking-[-0.04em] sm:text-7xl">Nothing here.</h1>
      <p className="mt-5 max-w-md text-mist">That page doesn’t exist, or it moved.</p>
      <div className="mt-10 flex gap-3">
        <Link href="/" className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink">
          Go home
        </Link>
        <a href="/terminal" className="rounded-full border border-white/15 px-6 py-3 text-sm text-paper">
          &gt;_ terminal
        </a>
      </div>
    </main>
  );
}
