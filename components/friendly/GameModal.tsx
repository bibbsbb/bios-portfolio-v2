'use client';

import { ReactNode } from 'react';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function GameModal({ isOpen, onClose, title, children }: GameModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="game-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="game-modal-content">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyan-400/30">
          <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Game content */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
