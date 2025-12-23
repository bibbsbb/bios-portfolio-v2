interface GamesPanelProps {
  onPlayPong: () => void;
  onPlaySnake: () => void;
  onPlayTetris: () => void;
  onPlayBreakout: () => void;
  onPlayMinesweeper: () => void;
  onPlayInvaders: () => void;
  onOpenTerminal: () => void;
  snakeHighScore: number;
}

export function GamesPanel({
  onPlayPong,
  onPlaySnake,
  onPlayTetris,
  onPlayBreakout,
  onPlayMinesweeper,
  onPlayInvaders,
  onOpenTerminal,
  snakeHighScore,
}: GamesPanelProps) {
  return (
    <div className="space-y-4">
      <div className="text-[#ffff55]">▸ Arcade - Classic 90s Games</div>
      <p className="text-sm opacity-80">
        Take a break with these nostalgic retro games. All built from scratch!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {/* Pong */}
        <div className="border border-[#aaaaaa] p-3">
          <div className="text-[#55ffff] text-lg mb-1">PONG</div>
          <div className="text-xs mb-2 opacity-80">Classic paddle game vs CPU</div>
          <button
            onClick={onPlayPong}
            className="w-full py-1 text-xs font-bold cursor-pointer hover:opacity-80"
            style={{ background: '#55ffff', color: '#000' }}
          >
            PLAY
          </button>
        </div>

        {/* Snake */}
        <div className="border border-[#aaaaaa] p-3">
          <div className="text-[#55ff55] text-lg mb-1">SNAKE</div>
          <div className="text-xs mb-1 opacity-80">20 levels of speed!</div>
          {snakeHighScore > 0 && (
            <div className="text-xs mb-1 text-[#ffff55]">Hi: {snakeHighScore}</div>
          )}
          <button
            onClick={onPlaySnake}
            className="w-full py-1 text-xs font-bold cursor-pointer hover:opacity-80"
            style={{ background: '#55ff55', color: '#000' }}
          >
            PLAY
          </button>
        </div>

        {/* Tetris */}
        <div className="border border-[#aaaaaa] p-3">
          <div className="text-[#ff00ff] text-lg mb-1">TETRIS</div>
          <div className="text-xs mb-2 opacity-80">Classic block puzzle</div>
          <button
            onClick={onPlayTetris}
            className="w-full py-1 text-xs font-bold cursor-pointer hover:opacity-80"
            style={{ background: '#ff00ff', color: '#000' }}
          >
            PLAY
          </button>
        </div>

        {/* Breakout */}
        <div className="border border-[#aaaaaa] p-3">
          <div className="text-[#ff8800] text-lg mb-1">BREAKOUT</div>
          <div className="text-xs mb-2 opacity-80">Brick breaker action</div>
          <button
            onClick={onPlayBreakout}
            className="w-full py-1 text-xs font-bold cursor-pointer hover:opacity-80"
            style={{ background: '#ff8800', color: '#000' }}
          >
            PLAY
          </button>
        </div>

        {/* Minesweeper */}
        <div className="border border-[#aaaaaa] p-3">
          <div className="text-[#aaaaaa] text-lg mb-1">MINESWEEPER</div>
          <div className="text-xs mb-2 opacity-80">Logic puzzle classic</div>
          <button
            onClick={onPlayMinesweeper}
            className="w-full py-1 text-xs font-bold cursor-pointer hover:opacity-80"
            style={{ background: '#aaaaaa', color: '#000' }}
          >
            PLAY
          </button>
        </div>

        {/* Space Invaders */}
        <div className="border border-[#aaaaaa] p-3">
          <div className="text-[#00ff00] text-lg mb-1">INVADERS</div>
          <div className="text-xs mb-2 opacity-80">Defend Earth!</div>
          <button
            onClick={onPlayInvaders}
            className="w-full py-1 text-xs font-bold cursor-pointer hover:opacity-80"
            style={{ background: '#00ff00', color: '#000' }}
          >
            PLAY
          </button>
        </div>
      </div>

      <div className="border-t border-[#aaaaaa] pt-4 mt-4">
        <div className="text-[#ffff55] mb-2">▸ Terminal Access</div>
        <p className="text-xs mb-2 opacity-80">
          Type game names in terminal: pong, snake, tetris, breakout, minesweeper, invaders
        </p>
        <button
          onClick={onOpenTerminal}
          className="px-4 py-1 text-xs font-bold cursor-pointer hover:opacity-80"
          style={{ background: '#aaaaaa', color: '#0000aa' }}
        >
          OPEN TERMINAL
        </button>
      </div>
    </div>
  );
}
