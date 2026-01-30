'use client';

import { ResumeData } from '@/lib/types';
import { FriendlyNav } from './FriendlyNav';
import { FriendlyHero } from './FriendlyHero';
import { FriendlyExperience } from './FriendlyExperience';
import { FriendlySkills } from './FriendlySkills';
import { FriendlyAchievements } from './FriendlyAchievements';
import { FriendlyGames } from './FriendlyGames';
import { FriendlyContact } from './FriendlyContact';

interface GameHandlers {
  onPlayPong: () => void;
  onPlaySnake: () => void;
  onPlayTetris: () => void;
  onPlayBreakout: () => void;
  onPlayMinesweeper: () => void;
  onPlayInvaders: () => void;
}

interface FriendlyHomeProps {
  data: ResumeData;
  snakeHighScore: number;
  gameHandlers: GameHandlers;
  onSwitchToTerminal: () => void;
}

export function FriendlyHome({
  data,
  snakeHighScore,
  gameHandlers,
  onSwitchToTerminal,
}: FriendlyHomeProps) {
  return (
    <div className="friendly-mode min-h-screen friendly-scroll">
      <FriendlyNav />

      <main>
        <FriendlyHero data={data} onSwitchToTerminal={onSwitchToTerminal} />
        <FriendlyExperience data={data} />
        <FriendlySkills data={data} />
        <FriendlyAchievements data={data} />
        <FriendlyGames
          snakeHighScore={snakeHighScore}
          onPlayPong={gameHandlers.onPlayPong}
          onPlaySnake={gameHandlers.onPlaySnake}
          onPlayTetris={gameHandlers.onPlayTetris}
          onPlayBreakout={gameHandlers.onPlayBreakout}
          onPlayMinesweeper={gameHandlers.onPlayMinesweeper}
          onPlayInvaders={gameHandlers.onPlayInvaders}
        />
        <FriendlyContact data={data} />
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Brandon Bibbins. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${data.email}`}
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Email
            </a>
            <a
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <button
              onClick={onSwitchToTerminal}
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Terminal Mode
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
