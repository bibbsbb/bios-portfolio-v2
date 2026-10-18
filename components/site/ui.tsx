'use client';

import Image from 'next/image';
import { useSyncExternalStore, type ReactNode } from 'react';
import { motion } from 'framer-motion';

export const ease = [0.2, 0.7, 0.2, 1] as const;

function subscribeIntro(cb: () => void) {
  window.addEventListener('bb-intro-done', cb);
  return () => window.removeEventListener('bb-intro-done', cb);
}

// True once the intro overlay has gone (or was skipped before paint).
export function useIntroDone() {
  return useSyncExternalStore(
    subscribeIntro,
    () => document.documentElement.dataset.intro === 'done',
    () => false,
  );
}

// Fades and lifts its children in when scrolled into view.
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

// Headline lines that slide up from behind a mask, one after another.
export function MaskLines({
  lines,
  play = true,
  delay = 0,
  className,
  lineClassName,
}: {
  lines: ReactNode[];
  play?: boolean;
  delay?: number;
  className?: string;
  lineClassName?: string;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName ?? ''}`}
            initial={{ y: '110%' }}
            animate={play ? { y: 0 } : { y: '110%' }}
            transition={{ duration: 1, delay: delay + i * 0.1, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function BrowserFrame({
  src,
  alt,
  domain,
  priority,
  className,
}: {
  src: string;
  alt: string;
  domain: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_rgba(10,10,10,0.28)] ${className ?? ''}`}>
      <div className="flex h-9 items-center gap-2 border-b border-black/5 bg-[#f5f5f4] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
        <span className="mx-auto rounded-md bg-white px-4 py-0.5 font-mono text-[11px] text-black/45">{domain}</span>
        <span className="w-12" />
      </div>
      <Image src={src} alt={alt} width={1800} height={1250} priority={priority} className="h-auto w-full" sizes="(min-width: 1024px) 60vw, 100vw" />
    </div>
  );
}

export function PhoneFrame({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[2.2rem] border-[9px] border-ink bg-ink shadow-[0_30px_70px_rgba(10,10,10,0.35)] ${className ?? ''}`}>
      <Image src={src} alt={alt} width={585} height={1266} className="h-auto w-full" sizes="240px" />
    </div>
  );
}

// The <b> mark, drawn in code so it stays crisp at any size.
export function Mark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[0.12em] leading-none ${className ?? ''}`} aria-hidden="true">
      <svg viewBox="0 0 40 80" className="h-[0.9em] w-[0.45em]" fill="none">
        <path d="M34 6 L8 40 L34 74" stroke="currentColor" strokeWidth="9" strokeLinecap="square" />
      </svg>
      <span className="font-display font-medium">b</span>
      <svg viewBox="0 0 40 80" className="h-[0.9em] w-[0.45em]" fill="none">
        <path d="M6 6 L32 40 L6 74" stroke="currentColor" strokeWidth="9" strokeLinecap="square" />
      </svg>
    </span>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={`font-mono text-xs uppercase tracking-[0.2em] text-fog ${className ?? ''}`}>{children}</p>;
}
