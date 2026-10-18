import type { Metadata } from 'next';
import './globals.css';

// The original BIOS-style portfolio, kept as an easter egg at /terminal.
export const metadata: Metadata = {
  title: 'Brandon Bibbins | Terminal',
};

export default function TerminalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
