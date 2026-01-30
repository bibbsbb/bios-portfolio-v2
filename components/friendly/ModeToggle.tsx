'use client';

import { ViewMode } from '@/lib/types';

interface ModeToggleProps {
  mode: ViewMode;
  onToggle: () => void;
}

export function ModeToggle({ mode, onToggle }: ModeToggleProps) {
  const isTerminal = mode === 'terminal';

  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${isTerminal ? 'modern' : 'terminal'} view`}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1000,
        background: isTerminal ? 'rgba(0, 0, 0, 0.8)' : 'rgba(20, 20, 20, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: isTerminal ? '2px solid #33ff33' : '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        fontFamily: isTerminal ? "'VT323', monospace" : "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontSize: '14px',
        color: isTerminal ? '#33ff33' : '#ffffff',
        transition: 'all 0.2s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.borderColor = isTerminal ? '#55ff55' : 'rgba(255, 255, 255, 0.2)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.borderColor = isTerminal ? '#33ff33' : 'rgba(255, 255, 255, 0.1)';
      }}
    >
      {isTerminal ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
          <span>Modern View</span>
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
          <span>Terminal View</span>
        </>
      )}
    </button>
  );
}
