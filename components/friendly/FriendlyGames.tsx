'use client';

interface FriendlyGamesProps {
  snakeHighScore: number;
  onPlayPong: () => void;
  onPlaySnake: () => void;
  onPlayTetris: () => void;
  onPlayBreakout: () => void;
  onPlayMinesweeper: () => void;
  onPlayInvaders: () => void;
}

const games = [
  {
    id: 'pong',
    name: 'Pong',
    icon: '🏓',
    description: 'Classic paddle game',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'snake',
    name: 'Snake',
    icon: '🐍',
    description: 'Eat apples, grow longer',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'tetris',
    name: 'Tetris',
    icon: '🧱',
    description: 'Stack the blocks',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'breakout',
    name: 'Breakout',
    icon: '🧱',
    description: 'Break all the bricks',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    icon: '💣',
    description: 'Find the mines',
    color: 'from-gray-500 to-slate-500',
  },
  {
    id: 'invaders',
    name: 'Space Invaders',
    icon: '👾',
    description: 'Defend Earth',
    color: 'from-lime-500 to-green-500',
  },
];

export function FriendlyGames({
  snakeHighScore,
  onPlayPong,
  onPlaySnake,
  onPlayTetris,
  onPlayBreakout,
  onPlayMinesweeper,
  onPlayInvaders,
}: FriendlyGamesProps) {
  const handlers: Record<string, () => void> = {
    pong: onPlayPong,
    snake: onPlaySnake,
    tetris: onPlayTetris,
    breakout: onPlayBreakout,
    minesweeper: onPlayMinesweeper,
    invaders: onPlayInvaders,
  };

  return (
    <section id="games" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Arcade</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Take a break and enjoy some classic games. Your Snake high score: <span className="text-cyan-400 font-bold">{snakeHighScore}</span>
          </p>
        </div>

        {/* Games grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={handlers[game.id]}
              className="game-card text-left"
            >
              {/* Game icon with gradient background */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center mb-4`}
              >
                <span className="text-3xl">{game.icon}</span>
              </div>

              {/* Game info */}
              <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
              <p className="text-gray-400 text-sm">{game.description}</p>

              {/* Play button hint */}
              <div className="mt-4 flex items-center gap-2 text-cyan-400 text-sm">
                <span>Play</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Controls hint */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Use keyboard controls: Arrow keys or WASD to move, Space to start/shoot, Q or Escape to quit
          </p>
        </div>
      </div>
    </section>
  );
}
