'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Theme, BootPhase, TerminalEntry, PongScore, BallPosition, BallVelocity, BootMessage, SnakeSegment, SnakeDirection, TetrominoType, TetrisBlock, Brick, BreakoutBall, MineCell, Invader, Bullet } from '@/lib/types';
import { resumeData, menuItems, themeColors, bootMessages, fortunes } from '@/lib/data';
import { createBeep } from '@/lib/sounds';
import {
  MainPanel,
  ExperiencePanel,
  SkillsPanel,
  AchievementsPanel,
  ContactPanel,
  GamesPanel,
} from '@/components';

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState<typeof menuItems[number]['id']>('main');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [focusArea, setFocusArea] = useState<'menu' | 'content'>('menu');
  const [contentIndex, setContentIndex] = useState(0);
  const [time, setTime] = useState('');
  const [theme, setTheme] = useState<Theme>('green');
  const [bootPhase, setBootPhase] = useState<BootPhase>('booting');
  const [bootText, setBootText] = useState('');
  const [memoryCount, setMemoryCount] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<TerminalEntry[]>([]);
  const [terminalInput, setTerminalInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [pongActive, setPongActive] = useState(false);
  const [pongStarted, setPongStarted] = useState(false);
  const [pongWinner, setPongWinner] = useState<string | null>(null);
  const [pongScore, setPongScore] = useState<PongScore>({ player: 0, cpu: 0 });
  const [playerY, setPlayerY] = useState(50);
  const [cpuY, setCpuY] = useState(50);
  const [ballPos, setBallPos] = useState<BallPosition>({ x: 50, y: 50 });
  const [ballVel, setBallVel] = useState<BallVelocity>({ x: 0, y: 0 });
  // Snake game state
  const [snakeActive, setSnakeActive] = useState(false);
  const [snakeStarted, setSnakeStarted] = useState(false);
  const [snakeGameOver, setSnakeGameOver] = useState(false);
  const [snakeLevel, setSnakeLevel] = useState(1);
  const [snakeScore, setSnakeScore] = useState(0);
  const [snakeHighScore, setSnakeHighScore] = useState(0);
  const [snake, setSnake] = useState<SnakeSegment[]>([{ x: 10, y: 10 }]);
  const [snakeDirection, setSnakeDirection] = useState<SnakeDirection>('RIGHT');
  const [food, setFood] = useState<SnakeSegment>({ x: 15, y: 10 });
  const [snakePaused, setSnakePaused] = useState(false);
  const snakeDirectionRef = useRef<SnakeDirection>('RIGHT');

  // Tetris game state
  const [tetrisActive, setTetrisActive] = useState(false);
  const [gameSource, setGameSource] = useState<'arcade' | 'terminal' | null>(null);
  const [tetrisStarted, setTetrisStarted] = useState(false);
  const [tetrisGameOver, setTetrisGameOver] = useState(false);
  const [tetrisScore, setTetrisScore] = useState(0);
  const [tetrisLevel, setTetrisLevel] = useState(1);
  const [tetrisLines, setTetrisLines] = useState(0);
  const [tetrisBoard, setTetrisBoard] = useState<(TetrominoType | null)[][]>(() =>
    Array(20).fill(null).map(() => Array(10).fill(null))
  );
  const [tetrisPiece, setTetrisPiece] = useState<TetrisBlock[]>([]);
  const [tetrisPieceType, setTetrisPieceType] = useState<TetrominoType>('I');
  const [tetrisNextPiece, setTetrisNextPiece] = useState<TetrominoType>('O');
  const [tetrisPaused, setTetrisPaused] = useState(false);

  // Breakout game state
  const [breakoutActive, setBreakoutActive] = useState(false);
  const [breakoutStarted, setBreakoutStarted] = useState(false);
  const [breakoutGameOver, setBreakoutGameOver] = useState(false);
  const [breakoutWon, setBreakoutWon] = useState(false);
  const [breakoutScore, setBreakoutScore] = useState(0);
  const [breakoutLives, setBreakoutLives] = useState(3);
  const [breakoutPaddleX, setBreakoutPaddleX] = useState(50);
  const [breakoutBall, setBreakoutBall] = useState<BreakoutBall>({ x: 50, y: 80, vx: 0, vy: 0 });
  const [breakoutBricks, setBreakoutBricks] = useState<Brick[]>([]);

  // Minesweeper game state
  const [minesweeperActive, setMinesweeperActive] = useState(false);
  const [minesweeperGameOver, setMinesweeperGameOver] = useState(false);
  const [minesweeperWon, setMinesweeperWon] = useState(false);
  const [minesweeperBoard, setMinesweeperBoard] = useState<MineCell[][]>([]);
  const [minesweeperMines, setMinesweeperMines] = useState(10);
  const [minesweeperFlags, setMinesweeperFlags] = useState(0);
  const [minesweeperTime, setMinesweeperTime] = useState(0);
  const [minesweeperStarted, setMinesweeperStarted] = useState(false);

  // Space Invaders game state
  const [invadersActive, setInvadersActive] = useState(false);
  const [invadersStarted, setInvadersStarted] = useState(false);
  const [invadersGameOver, setInvadersGameOver] = useState(false);
  const [invadersWon, setInvadersWon] = useState(false);
  const [invadersScore, setInvadersScore] = useState(0);
  const [invadersLives, setInvadersLives] = useState(3);
  const [invadersPlayerX, setInvadersPlayerX] = useState(50);
  const [invaders, setInvaders] = useState<Invader[]>([]);
  const [invadersBullets, setInvadersBullets] = useState<Bullet[]>([]);
  const [invadersDirection, setInvadersDirection] = useState(1);

  const terminalInputRef = useRef<HTMLInputElement>(null);
  const pongRef = useRef<HTMLDivElement>(null);
  const breakoutKeysRef = useRef<{ left: boolean; right: boolean }>({ left: false, right: false });

  // Wrapper for sound that checks enabled state
  const playBeep = (type: 'boot' | 'click' | 'enter' | 'error') => createBeep(type, soundEnabled);

  // Load sound preference from localStorage
  useEffect(() => {
    const savedSound = localStorage.getItem('bios-sound');
    if (savedSound !== null) {
      setSoundEnabled(savedSound === 'true');
    }
  }, []);

  const toggleSound = () => {
    const newValue = !soundEnabled;
    setSoundEnabled(newValue);
    localStorage.setItem('bios-sound', String(newValue));
    if (newValue) createBeep('click', true);
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('bios-theme') as Theme | null;
    if (savedTheme && ['blue', 'amber', 'green', 'white'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  // Load snake high score from localStorage
  useEffect(() => {
    const savedHighScore = localStorage.getItem('bios-snake-highscore');
    if (savedHighScore) {
      setSnakeHighScore(parseInt(savedHighScore, 10));
    }
  }, []);

  // Save theme to localStorage when it changes
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('bios-theme', newTheme);
    playBeep('click');
  };

  // Boot sequence effect
  useEffect(() => {
    if (bootPhase !== 'booting') return;

    let currentText = '';
    let messageIndex = 0;

    const processNextMessage = () => {
      if (messageIndex >= bootMessages.length) return;

      const msg = bootMessages[messageIndex];

      setTimeout(() => {
        if (msg.counter) {
          let count = 0;
          playBeep('click');
          const counterInterval = setInterval(() => {
            count += 8192;
            setMemoryCount(count);
            if (count >= 65536) {
              clearInterval(counterInterval);
              currentText += msg.text + '65536 KB OK\n';
              setBootText(currentText);
              playBeep('enter');
              messageIndex++;
              processNextMessage();
            }
          }, 50);
        } else if (msg.progressBar) {
          setShowProgressBar(true);
          setProgressBar(0);
          let progress = 0;
          const progressInterval = setInterval(() => {
            progress += 5;
            setProgressBar(progress);
            if (progress >= 100) {
              clearInterval(progressInterval);
              setShowProgressBar(false);
              currentText += '[####################] 100% Complete\n';
              setBootText(currentText);
              playBeep('enter');
              messageIndex++;
              processNextMessage();
            }
          }, 30);
        } else if (msg.text.includes('OK') || msg.text.includes('Connected') || msg.text.includes('Active]')) {
          currentText += msg.text + '\n';
          setBootText(currentText);
          playBeep('click');
          messageIndex++;
          processNextMessage();
        } else if (msg.text.includes('operational')) {
          currentText += msg.text + '\n';
          setBootText(currentText);
          playBeep('enter');
          messageIndex++;
          processNextMessage();
        } else {
          currentText += msg.text + '\n';
          setBootText(currentText);
          messageIndex++;
          processNextMessage();
        }
      }, msg.delay);
    };

    processNextMessage();

    const handleSkip = () => {
      setBootPhase('ready');
      playBeep('boot');
    };
    window.addEventListener('keydown', handleSkip);
    window.addEventListener('click', handleSkip);

    const autoAdvance = setTimeout(() => {
      setBootPhase('ready');
      playBeep('boot');
    }, 4000);

    return () => {
      window.removeEventListener('keydown', handleSkip);
      window.removeEventListener('click', handleSkip);
      clearTimeout(autoAdvance);
    };
  }, [bootPhase]);

  // Clock update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Pong game loop
  useEffect(() => {
    if (!pongActive || !pongStarted || pongWinner) return;

    const gameLoop = setInterval(() => {
      setBallPos(prev => {
        if (ballVel.x === 0 && ballVel.y === 0) return prev;

        let newX = prev.x + ballVel.x;
        let newY = prev.y + ballVel.y;
        let newVelX = ballVel.x;
        let newVelY = ballVel.y;

        if (newY <= 5 || newY >= 95) {
          newVelY = -ballVel.y;
          newY = newY <= 5 ? 5 : 95;
          playBeep('click');
        }

        if (newX <= 8 && newX > 5 && prev.x > 8) {
          if (newY >= playerY - 12 && newY <= playerY + 12) {
            newVelX = Math.abs(ballVel.x) * 1.05;
            newX = 8;
            playBeep('enter');
          }
        }

        if (newX >= 92 && newX < 95 && prev.x < 92) {
          if (newY >= cpuY - 12 && newY <= cpuY + 12) {
            newVelX = -Math.abs(ballVel.x) * 1.05;
            newX = 92;
            playBeep('enter');
          }
        }

        if (newX <= 0) {
          const newCpuScore = pongScore.cpu + 1;
          setPongScore(s => ({ ...s, cpu: newCpuScore }));
          playBeep('error');
          if (newCpuScore >= 5) {
            setPongWinner('CPU');
            setBallVel({ x: 0, y: 0 });
            return { x: 50, y: 50 };
          }
          setBallVel({ x: 2, y: (Math.random() - 0.5) * 2 });
          return { x: 50, y: 50 };
        }
        if (newX >= 100) {
          const newPlayerScore = pongScore.player + 1;
          setPongScore(s => ({ ...s, player: newPlayerScore }));
          playBeep('boot');
          if (newPlayerScore >= 5) {
            setPongWinner('You');
            setBallVel({ x: 0, y: 0 });
            return { x: 50, y: 50 };
          }
          setBallVel({ x: -2, y: (Math.random() - 0.5) * 2 });
          return { x: 50, y: 50 };
        }

        setBallVel({ x: newVelX, y: newVelY });
        return { x: newX, y: newY };
      });

      setCpuY(prev => {
        const diff = ballPos.y - prev;
        return prev + diff * 0.08;
      });
    }, 30);

    return () => clearInterval(gameLoop);
  }, [pongActive, pongStarted, pongWinner, ballVel, playerY, cpuY, ballPos.y, pongScore, playBeep]);

  // Pong keyboard controls
  useEffect(() => {
    if (!pongActive) return;

    const handlePongKeys = (e: KeyboardEvent) => {
      if ((e.key === ' ' || e.key === 'Enter') && !pongStarted && !pongWinner) {
        e.preventDefault();
        setPongStarted(true);
        setBallVel({ x: 2, y: (Math.random() - 0.5) * 2 });
        return;
      }

      if ((e.key === ' ' || e.key === 'Enter') && pongWinner) {
        e.preventDefault();
        setPongWinner(null);
        setPongStarted(false);
        setPongScore({ player: 0, cpu: 0 });
        setPlayerY(50);
        setCpuY(50);
        setBallPos({ x: 50, y: 50 });
        setBallVel({ x: 0, y: 0 });
        return;
      }

      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') {
        e.preventDefault();
        setPlayerY(prev => Math.max(12, prev - 10));
      } else if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') {
        e.preventDefault();
        setPlayerY(prev => Math.min(88, prev + 10));
      } else if (e.key === 'q' || e.key === 'Q' || e.key === 'Escape') {
        e.preventDefault();
        setPongActive(false);
        setPongStarted(false);
        setPongWinner(null);
        setPongScore({ player: 0, cpu: 0 });
        setPlayerY(50);
        setCpuY(50);
        setBallPos({ x: 50, y: 50 });
        setBallVel({ x: 0, y: 0 });
      }
    };

    window.addEventListener('keydown', handlePongKeys);
    return () => window.removeEventListener('keydown', handlePongKeys);
  }, [pongActive, pongStarted, pongWinner]);

  // Snake game constants
  const GRID_WIDTH = 40;
  const GRID_HEIGHT = 20;
  const POINTS_PER_FOOD = 10;
  const FOODS_PER_LEVEL = 5;

  // Calculate snake speed based on level (faster = harder)
  const getSnakeSpeed = (level: number) => {
    // Level 1: 150ms, Level 20: 50ms
    return Math.max(50, 150 - (level - 1) * 5);
  };

  // Generate random food position
  const generateFood = (currentSnake: SnakeSegment[]): SnakeSegment => {
    let newFood: SnakeSegment;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_WIDTH),
        y: Math.floor(Math.random() * GRID_HEIGHT),
      };
    } while (currentSnake.some(seg => seg.x === newFood.x && seg.y === newFood.y));
    return newFood;
  };

  // Reset snake game
  const resetSnakeGame = (startLevel: number = 1) => {
    const initialSnake = [{ x: 10, y: 10 }];
    setSnake(initialSnake);
    setSnakeDirection('RIGHT');
    snakeDirectionRef.current = 'RIGHT';
    setFood(generateFood(initialSnake));
    setSnakeScore(0);
    setSnakeLevel(startLevel);
    setSnakeGameOver(false);
    setSnakeStarted(false);
    setSnakePaused(false);
  };

  // Snake game loop
  useEffect(() => {
    if (!snakeActive || !snakeStarted || snakeGameOver || snakePaused) return;

    const gameLoop = setInterval(() => {
      setSnake(prevSnake => {
        const head = prevSnake[0];
        const direction = snakeDirectionRef.current;
        let newHead: SnakeSegment;

        switch (direction) {
          case 'UP':
            newHead = { x: head.x, y: head.y - 1 };
            break;
          case 'DOWN':
            newHead = { x: head.x, y: head.y + 1 };
            break;
          case 'LEFT':
            newHead = { x: head.x - 1, y: head.y };
            break;
          case 'RIGHT':
            newHead = { x: head.x + 1, y: head.y };
            break;
        }

        // Check wall collision
        if (newHead.x < 0 || newHead.x >= GRID_WIDTH || newHead.y < 0 || newHead.y >= GRID_HEIGHT) {
          setSnakeGameOver(true);
          playBeep('error');
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some(seg => seg.x === newHead.x && seg.y === newHead.y)) {
          setSnakeGameOver(true);
          playBeep('error');
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          playBeep('enter');
          const newScore = snakeScore + POINTS_PER_FOOD * snakeLevel;
          setSnakeScore(newScore);

          // Update high score
          if (newScore > snakeHighScore) {
            setSnakeHighScore(newScore);
            localStorage.setItem('bios-snake-highscore', String(newScore));
          }

          // Check for level up
          const foodsEaten = Math.floor(newScore / (POINTS_PER_FOOD * snakeLevel));
          if (foodsEaten > 0 && foodsEaten % FOODS_PER_LEVEL === 0 && snakeLevel < 20) {
            setSnakeLevel(prev => Math.min(20, prev + 1));
            playBeep('boot');
          }

          setFood(generateFood(newSnake));
          return newSnake; // Don't remove tail (snake grows)
        }

        // Remove tail (snake moves)
        newSnake.pop();
        return newSnake;
      });
    }, getSnakeSpeed(snakeLevel));

    return () => clearInterval(gameLoop);
  }, [snakeActive, snakeStarted, snakeGameOver, snakePaused, snakeLevel, food, snakeScore, snakeHighScore]);

  // Snake keyboard controls
  useEffect(() => {
    if (!snakeActive) return;

    const handleSnakeKeys = (e: KeyboardEvent) => {
      // Start game
      if ((e.key === ' ' || e.key === 'Enter') && !snakeStarted && !snakeGameOver) {
        e.preventDefault();
        setSnakeStarted(true);
        return;
      }

      // Restart after game over
      if ((e.key === ' ' || e.key === 'Enter') && snakeGameOver) {
        e.preventDefault();
        resetSnakeGame();
        setSnakeStarted(true);
        return;
      }

      // Pause/unpause
      if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setSnakePaused(prev => !prev);
        return;
      }

      // Quit game
      if (e.key === 'q' || e.key === 'Q' || e.key === 'Escape') {
        e.preventDefault();
        setSnakeActive(false);
        resetSnakeGame();
        return;
      }

      // Direction controls
      if (!snakeStarted || snakeGameOver || snakePaused) return;

      const currentDir = snakeDirectionRef.current;

      if ((e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') && currentDir !== 'DOWN') {
        e.preventDefault();
        snakeDirectionRef.current = 'UP';
        setSnakeDirection('UP');
      } else if ((e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') && currentDir !== 'UP') {
        e.preventDefault();
        snakeDirectionRef.current = 'DOWN';
        setSnakeDirection('DOWN');
      } else if ((e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') && currentDir !== 'RIGHT') {
        e.preventDefault();
        snakeDirectionRef.current = 'LEFT';
        setSnakeDirection('LEFT');
      } else if ((e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') && currentDir !== 'LEFT') {
        e.preventDefault();
        snakeDirectionRef.current = 'RIGHT';
        setSnakeDirection('RIGHT');
      }
    };

    window.addEventListener('keydown', handleSnakeKeys);
    return () => window.removeEventListener('keydown', handleSnakeKeys);
  }, [snakeActive, snakeStarted, snakeGameOver, snakePaused]);

  // Tetris constants and helpers
  const TETRIS_COLS = 10;
  const TETRIS_ROWS = 20;
  const TETROMINOS: Record<TetrominoType, number[][]> = {
    I: [[1,1,1,1]],
    O: [[1,1],[1,1]],
    T: [[0,1,0],[1,1,1]],
    S: [[0,1,1],[1,1,0]],
    Z: [[1,1,0],[0,1,1]],
    J: [[1,0,0],[1,1,1]],
    L: [[0,0,1],[1,1,1]],
  };
  const TETRIS_COLORS: Record<TetrominoType, string> = {
    I: '#00ffff', O: '#ffff00', T: '#ff00ff',
    S: '#00ff00', Z: '#ff0000', J: '#0000ff', L: '#ff8800',
  };

  const getRandomTetromino = (): TetrominoType => {
    const types: TetrominoType[] = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];
    return types[Math.floor(Math.random() * types.length)];
  };

  const createPiece = (type: TetrominoType): TetrisBlock[] => {
    const shape = TETROMINOS[type];
    const blocks: TetrisBlock[] = [];
    const startX = Math.floor((TETRIS_COLS - shape[0].length) / 2);
    shape.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell) blocks.push({ x: startX + x, y, type });
      });
    });
    return blocks;
  };

  const resetTetris = () => {
    const firstPiece = getRandomTetromino();
    setTetrisBoard(Array(TETRIS_ROWS).fill(null).map(() => Array(TETRIS_COLS).fill(null)));
    setTetrisPiece(createPiece(firstPiece));
    setTetrisPieceType(firstPiece);
    setTetrisNextPiece(getRandomTetromino());
    setTetrisScore(0);
    setTetrisLevel(1);
    setTetrisLines(0);
    setTetrisGameOver(false);
    setTetrisStarted(false);
    setTetrisPaused(false);
  };

  const canMoveTetris = (piece: TetrisBlock[], dx: number, dy: number, board: (TetrominoType | null)[][]): boolean => {
    return piece.every(block => {
      const newX = block.x + dx;
      const newY = block.y + dy;
      return newX >= 0 && newX < TETRIS_COLS && newY < TETRIS_ROWS &&
        (newY < 0 || !board[newY][newX]);
    });
  };

  const rotateTetrisPiece = (piece: TetrisBlock[], type: TetrominoType): TetrisBlock[] => {
    if (type === 'O') return piece;
    const minX = Math.min(...piece.map(b => b.x));
    const minY = Math.min(...piece.map(b => b.y));
    const normalized = piece.map(b => ({ x: b.x - minX, y: b.y - minY, type: b.type }));
    const maxDim = Math.max(...normalized.map(b => Math.max(b.x, b.y))) + 1;
    return normalized.map(b => ({
      x: minX + (maxDim - 1 - b.y),
      y: minY + b.x,
      type: b.type,
    }));
  };

  // Tetris game loop
  useEffect(() => {
    if (!tetrisActive || !tetrisStarted || tetrisGameOver || tetrisPaused) return;
    const speed = Math.max(100, 500 - (tetrisLevel - 1) * 40);
    const gameLoop = setInterval(() => {
      setTetrisBoard(currentBoard => {
        // Get current piece
        const piece = tetrisPiece;
        if (piece.length === 0) return currentBoard;

        // Check if piece can move down
        const canMoveDown = piece.every(b => {
          const newY = b.y + 1;
          return newY < TETRIS_ROWS && (newY < 0 || currentBoard[newY][b.x] === null);
        });

        if (canMoveDown) {
          // Move piece down
          setTetrisPiece(p => p.map(b => ({ ...b, y: b.y + 1 })));
          return currentBoard;
        }

        // Lock piece into board
        const newBoard = currentBoard.map(row => [...row]);
        piece.forEach(b => { if (b.y >= 0 && b.y < TETRIS_ROWS) newBoard[b.y][b.x] = b.type; });

        // Check for game over
        if (piece.some(b => b.y < 0)) {
          setTetrisGameOver(true);
          playBeep('error');
          return currentBoard;
        }

        // Clear completed lines
        let linesCleared = 0;
        for (let y = TETRIS_ROWS - 1; y >= 0; y--) {
          if (newBoard[y].every(cell => cell !== null)) {
            newBoard.splice(y, 1);
            newBoard.unshift(Array(TETRIS_COLS).fill(null));
            linesCleared++;
            y++; // Check same row again since rows shifted
          }
        }

        if (linesCleared > 0) {
          const points = [0, 100, 300, 500, 800][linesCleared] * tetrisLevel;
          setTetrisScore(s => s + points);
          setTetrisLines(l => {
            const newLines = l + linesCleared;
            if (Math.floor(newLines / 10) > Math.floor(l / 10)) {
              setTetrisLevel(lv => lv + 1);
              playBeep('boot');
            }
            return newLines;
          });
          playBeep('enter');
        }

        // Spawn next piece
        const next = tetrisNextPiece;
        setTetrisPieceType(next);
        setTetrisNextPiece(getRandomTetromino());
        setTetrisPiece(createPiece(next));

        return newBoard;
      });
    }, speed);
    return () => clearInterval(gameLoop);
  }, [tetrisActive, tetrisStarted, tetrisGameOver, tetrisPaused, tetrisLevel, tetrisPiece, tetrisNextPiece]);

  // Tetris keyboard controls
  useEffect(() => {
    if (!tetrisActive) return;
    const handleTetrisKeys = (e: KeyboardEvent) => {
      if ((e.key === ' ' || e.key === 'Enter') && !tetrisStarted && !tetrisGameOver) {
        e.preventDefault();
        setTetrisStarted(true);
        return;
      }
      if ((e.key === ' ' || e.key === 'Enter') && tetrisGameOver) {
        e.preventDefault();
        resetTetris();
        setTetrisStarted(true);
        return;
      }
      if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setTetrisPaused(p => !p);
        return;
      }
      if (e.key === 'q' || e.key === 'Q' || e.key === 'Escape') {
        e.preventDefault();
        setTetrisActive(false);
        setGameSource(null);
        resetTetris();
        return;
      }
      if (!tetrisStarted || tetrisGameOver || tetrisPaused) return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        setTetrisPiece(p => canMoveTetris(p, -1, 0, tetrisBoard) ? p.map(b => ({ ...b, x: b.x - 1 })) : p);
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        setTetrisPiece(p => canMoveTetris(p, 1, 0, tetrisBoard) ? p.map(b => ({ ...b, x: b.x + 1 })) : p);
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        setTetrisPiece(p => canMoveTetris(p, 0, 1, tetrisBoard) ? p.map(b => ({ ...b, y: b.y + 1 })) : p);
      } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        e.preventDefault();
        setTetrisPiece(p => {
          const rotated = rotateTetrisPiece(p, tetrisPieceType);
          return canMoveTetris(rotated, 0, 0, tetrisBoard) ? rotated : p;
        });
      }
    };
    window.addEventListener('keydown', handleTetrisKeys);
    return () => window.removeEventListener('keydown', handleTetrisKeys);
  }, [tetrisActive, tetrisStarted, tetrisGameOver, tetrisPaused, tetrisBoard, tetrisPieceType]);

  // Breakout helpers
  const initBreakoutBricks = (): Brick[] => {
    const bricks: Brick[] = [];
    const colors = ['#ff0000', '#ff8800', '#ffff00', '#00ff00', '#00ffff'];
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 8; col++) {
        bricks.push({ x: 5 + col * 11.25, y: 5 + row * 5, hits: 1, color: colors[row] });
      }
    }
    return bricks;
  };

  const resetBreakout = () => {
    setBreakoutBricks(initBreakoutBricks());
    setBreakoutPaddleX(50);
    setBreakoutBall({ x: 50, y: 80, vx: 0, vy: 0 });
    setBreakoutScore(0);
    setBreakoutLives(3);
    setBreakoutGameOver(false);
    setBreakoutWon(false);
    setBreakoutStarted(false);
  };

  // Store refs for real-time access in game loop
  const breakoutBallRef = useRef(breakoutBall);
  const breakoutPaddleRef = useRef(breakoutPaddleX);
  const breakoutBricksRef = useRef(breakoutBricks);
  useEffect(() => { breakoutBallRef.current = breakoutBall; }, [breakoutBall]);
  useEffect(() => { breakoutPaddleRef.current = breakoutPaddleX; }, [breakoutPaddleX]);
  useEffect(() => { breakoutBricksRef.current = breakoutBricks; }, [breakoutBricks]);

  // Breakout game loop
  useEffect(() => {
    if (!breakoutActive || !breakoutStarted || breakoutGameOver || breakoutWon) return;
    const gameLoop = setInterval(() => {
      // Smooth paddle movement based on held keys
      if (breakoutKeysRef.current.left) {
        setBreakoutPaddleX(p => {
          const newP = Math.max(10, p - 3);
          breakoutPaddleRef.current = newP;
          return newP;
        });
      }
      if (breakoutKeysRef.current.right) {
        setBreakoutPaddleX(p => {
          const newP = Math.min(90, p + 3);
          breakoutPaddleRef.current = newP;
          return newP;
        });
      }

      // Get current values from refs
      const ball = breakoutBallRef.current;
      if (ball.vx === 0 && ball.vy === 0) return;

      let { x, y, vx, vy } = ball;
      x += vx; y += vy;

      // Wall collisions
      if (x <= 2 || x >= 98) { vx = -vx; x = x <= 2 ? 2 : 98; playBeep('click'); }
      if (y <= 2) { vy = -vy; y = 2; playBeep('click'); }

      // Paddle collision
      const paddleX = breakoutPaddleRef.current;
      if (y >= 83 && y <= 90 && x >= paddleX - 12 && x <= paddleX + 12 && vy > 0) {
        vy = -Math.abs(vy);
        vx = (x - paddleX) * 0.15;
        y = 83;
        playBeep('enter');
      }

      // Ball lost
      if (y >= 100) {
        setBreakoutLives(l => {
          const newLives = l - 1;
          if (newLives <= 0) {
            setBreakoutGameOver(true);
          }
          playBeep('error');
          return newLives;
        });
        setBreakoutBall({ x: 50, y: 80, vx: 0, vy: 0 });
        return;
      }

      // Brick collisions
      const bricks = breakoutBricksRef.current;
      const ballRadius = 2;
      for (let i = 0; i < bricks.length; i++) {
        const b = bricks[i];
        if (x + ballRadius >= b.x && x - ballRadius <= b.x + 10 &&
            y + ballRadius >= b.y && y - ballRadius <= b.y + 5) {
          // Hit a brick
          const newBricks = bricks.filter((_, idx) => idx !== i);
          setBreakoutBricks(newBricks);
          breakoutBricksRef.current = newBricks;
          setBreakoutScore(s => s + 10);

          // Determine bounce direction
          const overlapLeft = (x + ballRadius) - b.x;
          const overlapRight = (b.x + 10) - (x - ballRadius);
          const overlapTop = (y + ballRadius) - b.y;
          const overlapBottom = (b.y + 5) - (y - ballRadius);
          const minOverlapX = Math.min(overlapLeft, overlapRight);
          const minOverlapY = Math.min(overlapTop, overlapBottom);
          if (minOverlapX < minOverlapY) {
            vx = -vx;
          } else {
            vy = -vy;
          }
          playBeep('click');

          if (newBricks.length === 0) {
            setBreakoutWon(true);
            playBeep('boot');
          }
          break;
        }
      }

      const newBall = { x, y, vx, vy };
      setBreakoutBall(newBall);
      breakoutBallRef.current = newBall;
    }, 16); // ~60fps for smoother animation
    return () => clearInterval(gameLoop);
  }, [breakoutActive, breakoutStarted, breakoutGameOver, breakoutWon]);

  // Breakout keyboard controls - track key states for smooth movement
  useEffect(() => {
    if (!breakoutActive) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === ' ' || e.key === 'Enter') && !breakoutStarted && !breakoutGameOver && !breakoutWon) {
        e.preventDefault();
        setBreakoutStarted(true);
        setBreakoutBall({ x: 50, y: 80, vx: 2.5, vy: -2.5 });
        return;
      }
      if ((e.key === ' ' || e.key === 'Enter') && breakoutBall.vx === 0 && breakoutStarted && !breakoutGameOver) {
        e.preventDefault();
        setBreakoutBall(prev => ({ ...prev, vx: 2.5, vy: -2.5 }));
        return;
      }
      if ((e.key === ' ' || e.key === 'Enter') && (breakoutGameOver || breakoutWon)) {
        e.preventDefault();
        resetBreakout();
        setBreakoutStarted(true);
        setBreakoutBall({ x: 50, y: 80, vx: 2.5, vy: -2.5 });
        return;
      }
      if (e.key === 'q' || e.key === 'Q' || e.key === 'Escape') {
        e.preventDefault();
        setBreakoutActive(false);
        resetBreakout();
        return;
      }
      // Track held keys for smooth movement
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        breakoutKeysRef.current.left = true;
      }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        breakoutKeysRef.current.right = true;
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        breakoutKeysRef.current.left = false;
      }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        breakoutKeysRef.current.right = false;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      breakoutKeysRef.current = { left: false, right: false };
    };
  }, [breakoutActive, breakoutStarted, breakoutGameOver, breakoutWon, breakoutBall]);

  // Minesweeper helpers
  const MINE_SIZE = 9;
  const initMinesweeper = (): MineCell[][] => {
    const board: MineCell[][] = Array(MINE_SIZE).fill(null).map(() =>
      Array(MINE_SIZE).fill(null).map(() => ({
        isMine: false, isRevealed: false, isFlagged: false, neighborMines: 0,
      }))
    );
    // Place mines
    let placed = 0;
    while (placed < minesweeperMines) {
      const x = Math.floor(Math.random() * MINE_SIZE);
      const y = Math.floor(Math.random() * MINE_SIZE);
      if (!board[y][x].isMine) {
        board[y][x].isMine = true;
        placed++;
      }
    }
    // Calculate neighbors
    for (let y = 0; y < MINE_SIZE; y++) {
      for (let x = 0; x < MINE_SIZE; x++) {
        if (!board[y][x].isMine) {
          let count = 0;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              const ny = y + dy, nx = x + dx;
              if (ny >= 0 && ny < MINE_SIZE && nx >= 0 && nx < MINE_SIZE && board[ny][nx].isMine) count++;
            }
          }
          board[y][x].neighborMines = count;
        }
      }
    }
    return board;
  };

  const resetMinesweeper = () => {
    setMinesweeperBoard(initMinesweeper());
    setMinesweeperGameOver(false);
    setMinesweeperWon(false);
    setMinesweeperFlags(0);
    setMinesweeperTime(0);
    setMinesweeperStarted(false);
  };

  const revealCell = (x: number, y: number) => {
    setMinesweeperBoard(prev => {
      const board = prev.map(row => row.map(cell => ({ ...cell })));
      const cell = board[y][x];
      if (cell.isRevealed || cell.isFlagged) return prev;
      cell.isRevealed = true;
      if (cell.isMine) {
        setMinesweeperGameOver(true);
        playBeep('error');
        // Reveal all mines
        board.forEach(row => row.forEach(c => { if (c.isMine) c.isRevealed = true; }));
        return board;
      }
      // Flood fill for empty cells
      if (cell.neighborMines === 0) {
        const stack = [[x, y]];
        while (stack.length) {
          const [cx, cy] = stack.pop()!;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              const nx = cx + dx, ny = cy + dy;
              if (nx >= 0 && nx < MINE_SIZE && ny >= 0 && ny < MINE_SIZE) {
                const neighbor = board[ny][nx];
                if (!neighbor.isRevealed && !neighbor.isMine && !neighbor.isFlagged) {
                  neighbor.isRevealed = true;
                  if (neighbor.neighborMines === 0) stack.push([nx, ny]);
                }
              }
            }
          }
        }
      }
      // Check win
      const unrevealed = board.flat().filter(c => !c.isRevealed && !c.isMine).length;
      if (unrevealed === 0) {
        setMinesweeperWon(true);
        playBeep('boot');
      } else {
        playBeep('click');
      }
      return board;
    });
  };

  const toggleFlag = (x: number, y: number) => {
    setMinesweeperBoard(prev => {
      const board = prev.map(row => row.map(cell => ({ ...cell })));
      const cell = board[y][x];
      if (cell.isRevealed) return prev;
      cell.isFlagged = !cell.isFlagged;
      setMinesweeperFlags(f => cell.isFlagged ? f + 1 : f - 1);
      playBeep('click');
      return board;
    });
  };

  // Minesweeper timer
  useEffect(() => {
    if (!minesweeperActive || !minesweeperStarted || minesweeperGameOver || minesweeperWon) return;
    const timer = setInterval(() => setMinesweeperTime(t => t + 1), 1000);
    return () => clearInterval(timer);
  }, [minesweeperActive, minesweeperStarted, minesweeperGameOver, minesweeperWon]);

  // Minesweeper keyboard controls
  useEffect(() => {
    if (!minesweeperActive) return;
    const handleMineKeys = (e: KeyboardEvent) => {
      if (e.key === 'q' || e.key === 'Q' || e.key === 'Escape') {
        e.preventDefault();
        setMinesweeperActive(false);
        resetMinesweeper();
      }
      if ((e.key === ' ' || e.key === 'Enter') && (minesweeperGameOver || minesweeperWon)) {
        e.preventDefault();
        resetMinesweeper();
      }
    };
    window.addEventListener('keydown', handleMineKeys);
    return () => window.removeEventListener('keydown', handleMineKeys);
  }, [minesweeperActive, minesweeperGameOver, minesweeperWon]);

  // Space Invaders helpers
  const initInvaders = (): Invader[] => {
    const invs: Invader[] = [];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 8; col++) {
        invs.push({ x: 10 + col * 10, y: 5 + row * 8, alive: true, type: row });
      }
    }
    return invs;
  };

  const resetInvaders = () => {
    setInvaders(initInvaders());
    setInvadersPlayerX(50);
    setInvadersBullets([]);
    setInvadersScore(0);
    setInvadersLives(3);
    setInvadersDirection(1);
    setInvadersGameOver(false);
    setInvadersWon(false);
    setInvadersStarted(false);
  };

  // Space Invaders game loop
  useEffect(() => {
    if (!invadersActive || !invadersStarted || invadersGameOver || invadersWon) return;
    const gameLoop = setInterval(() => {
      // Move invaders
      setInvaders(prev => {
        const alive = prev.filter(i => i.alive);
        if (alive.length === 0) {
          setInvadersWon(true);
          playBeep('boot');
          return prev;
        }
        const minX = Math.min(...alive.map(i => i.x));
        const maxX = Math.max(...alive.map(i => i.x));
        let newDir = invadersDirection;
        let moveDown = false;
        if (maxX >= 90 && invadersDirection > 0) { newDir = -1; moveDown = true; }
        if (minX <= 10 && invadersDirection < 0) { newDir = 1; moveDown = true; }
        if (newDir !== invadersDirection) setInvadersDirection(newDir);
        return prev.map(inv => ({
          ...inv,
          x: inv.x + newDir * 0.5,
          y: moveDown ? inv.y + 3 : inv.y,
        }));
      });
      // Move bullets
      setInvadersBullets(prev => {
        return prev.map(b => ({ ...b, y: b.isPlayer ? b.y - 3 : b.y + 2 }))
          .filter(b => b.y > 0 && b.y < 100);
      });
      // Check bullet collisions
      setInvadersBullets(bullets => {
        const remaining = [...bullets];
        setInvaders(invs => {
          return invs.map(inv => {
            if (!inv.alive) return inv;
            const hitIdx = remaining.findIndex(b =>
              b.isPlayer && Math.abs(b.x - inv.x) < 5 && Math.abs(b.y - inv.y) < 4
            );
            if (hitIdx >= 0) {
              remaining.splice(hitIdx, 1);
              setInvadersScore(s => s + 10);
              playBeep('click');
              return { ...inv, alive: false };
            }
            return inv;
          });
        });
        // Check player hit
        const playerHit = remaining.findIndex(b =>
          !b.isPlayer && Math.abs(b.x - invadersPlayerX) < 5 && b.y >= 90
        );
        if (playerHit >= 0) {
          remaining.splice(playerHit, 1);
          setInvadersLives(l => {
            if (l <= 1) {
              setInvadersGameOver(true);
              playBeep('error');
            } else {
              playBeep('error');
            }
            return l - 1;
          });
        }
        return remaining;
      });
      // Invaders shoot randomly
      if (Math.random() < 0.02) {
        setInvaders(invs => {
          const alive = invs.filter(i => i.alive);
          if (alive.length > 0) {
            const shooter = alive[Math.floor(Math.random() * alive.length)];
            setInvadersBullets(b => [...b, { x: shooter.x, y: shooter.y + 4, isPlayer: false }]);
          }
          return invs;
        });
      }
      // Check if invaders reached bottom
      setInvaders(invs => {
        if (invs.some(i => i.alive && i.y >= 85)) {
          setInvadersGameOver(true);
          playBeep('error');
        }
        return invs;
      });
    }, 50);
    return () => clearInterval(gameLoop);
  }, [invadersActive, invadersStarted, invadersGameOver, invadersWon, invadersDirection, invadersPlayerX]);

  // Space Invaders keyboard controls
  useEffect(() => {
    if (!invadersActive) return;
    const handleInvaderKeys = (e: KeyboardEvent) => {
      if ((e.key === ' ' || e.key === 'Enter') && !invadersStarted && !invadersGameOver && !invadersWon) {
        e.preventDefault();
        setInvadersStarted(true);
        return;
      }
      if ((e.key === ' ' || e.key === 'Enter') && (invadersGameOver || invadersWon)) {
        e.preventDefault();
        resetInvaders();
        setInvadersStarted(true);
        return;
      }
      if (e.key === 'q' || e.key === 'Q' || e.key === 'Escape') {
        e.preventDefault();
        setInvadersActive(false);
        resetInvaders();
        return;
      }
      if (!invadersStarted || invadersGameOver || invadersWon) return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        setInvadersPlayerX(p => Math.max(5, p - 5));
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        setInvadersPlayerX(p => Math.min(95, p + 5));
      } else if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        e.preventDefault();
        setInvadersBullets(b => {
          if (b.filter(x => x.isPlayer).length < 3) {
            playBeep('click');
            return [...b, { x: invadersPlayerX, y: 90, isPlayer: true }];
          }
          return b;
        });
      }
    };
    window.addEventListener('keydown', handleInvaderKeys);
    return () => window.removeEventListener('keydown', handleInvaderKeys);
  }, [invadersActive, invadersStarted, invadersGameOver, invadersWon, invadersPlayerX]);

  // Unified keyboard navigation
  useEffect(() => {
    if (bootPhase === 'booting') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (pongActive || snakeActive || tetrisActive || breakoutActive || minesweeperActive || invadersActive) return;

      if ((e.key === '`' || e.key === '~') && !terminalOpen) {
        e.preventDefault();
        setTerminalOpen(true);
        playBeep('enter');
        setTimeout(() => terminalInputRef.current?.focus(), 50);
        return;
      }

      if (e.key === 'Escape' && terminalOpen) {
        e.preventDefault();
        setTerminalOpen(false);
        playBeep('click');
        return;
      }

      if (terminalOpen) return;

      if (focusArea === 'menu') {
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          const newIndex = selectedIndex > 0 ? selectedIndex - 1 : menuItems.length - 1;
          setSelectedIndex(newIndex);
          setSelectedMenu(menuItems[newIndex].id);
          playBeep('click');
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          const newIndex = selectedIndex < menuItems.length - 1 ? selectedIndex + 1 : 0;
          setSelectedIndex(newIndex);
          setSelectedMenu(menuItems[newIndex].id);
          playBeep('click');
        } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
          if (selectedMenu === 'experience') {
            e.preventDefault();
            setFocusArea('content');
            setContentIndex(0);
            playBeep('enter');
          }
        }
      } else if (focusArea === 'content') {
        if (e.key === 'ArrowLeft' || e.key === 'Escape') {
          e.preventDefault();
          setFocusArea('menu');
          playBeep('click');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, selectedMenu, focusArea, bootPhase, terminalOpen, pongActive]);

  // Terminal command processor
  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const parts = cmd.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');
    let output = '';

    if (command === 'echo') {
      output = args || '';
      setTerminalHistory(prev => [...prev, { cmd, output }]);
      setCommandHistory(prev => [cmd, ...prev]);
      setTerminalInput('');
      setHistoryIndex(-1);
      return;
    }

    if (command === 'cat') {
      const file = args.toLowerCase();
      switch (file) {
        case 'resume.txt':
          output = `┌─────────────────────────────────────┐
│         BRANDON BIBBINS             │
│      IT Director | 12+ Years        │
├─────────────────────────────────────┤
│ ✓ AI-Powered IT Operations          │
│ ✓ Team Building & Leadership        │
│ ✓ Jamf Pro, Okta, CrowdStrike       │
│ ✓ SOC 2 Compliance                  │
│ ✓ 73% Phishing Reduction            │
├─────────────────────────────────────┤
│ Email: brandonbibbins@gmail.com     │
│ Phone: (310) 749-0728               │
└─────────────────────────────────────┘`;
          break;
        case 'skills.dat':
          output = `# skills.dat - Technical Proficiencies
ENDPOINT_MGMT=["Jamf Pro", "Intune", "Hexnode", "Kandji", "JumpCloud", "Apple Business Manager"]
IDENTITY=["Okta", "OneLogin", "Azure AD/Entra ID", "1Password", "SSO/SAML", "SCIM", "MFA"]
PRODUCTIVITY=["Google Workspace", "Microsoft 365", "Slack", "Notion", "Confluence", "Zoom"]
SECURITY=["CrowdStrike", "Mimecast", "Proofpoint", "KnowBe4", "SOC 2", "NIST"]
ITSM=["Jira Service Management", "ServiceNow", "Zendesk", "Freshservice", "ITIL"]
AI_TOOLS=["Claude Code", "OpenAI GPT-4", "Codex", "Gemini", "Workflow Automation"]
INFRASTRUCTURE=["AWS", "Azure", "Windows Server", "Cisco Meraki", "Palo Alto", "Fortinet", "Ubiquiti"]
# EOF`;
          break;
        case 'experience.log':
          output = `[2022-present] IT Director @ Liquid I.V. (Unilever)
  → Built team delivering 30% efficiency gains
  → 73% phishing reduction via 1Password rollout
  → AI Governance Board member

[2020-2025] IT Director @ Princess Polly
  → Scaled IT from 1 to multi-person team
  → 14+ global retail locations supported
  → 45% resolution time improvement

[2017-2020] IT Manager @ Drinks.com
  → 50% faster new hire onboarding
  → 20+ SaaS apps with Okta SSO

[2016-2017] Senior IT Tech @ Playtika
[2014-2016] IT Support @ David & Goliath`;
          break;
        case 'contact.cfg':
          output = `[contact]
name = Brandon Bibbins
email = brandonbibbins@gmail.com
phone = (310) 749-0728
linkedin = linkedin.com/in/brandonbibbins
location = Los Angeles, CA
status = Open to opportunities
relocate = Yes`;
          break;
        case 'certs.bin':
          output = `CERT_DATA [DECODED]:
├── CISSP.............. [IN PROGRESS]
├── Jamf Certified..... [ACTIVE]
├── Okta Administrator. [ACTIVE]
└── Google Workspace... [ACTIVE]

EDUCATION:
├── B.S. Information Technology
│   └── Colorado State University (2012-2014)
└── B.S. Computer Science
    └── The Masters College (2010-2012)`;
          break;
        default:
          output = `cat: ${args}: No such file or directory`;
          playBeep('error');
      }
      setTerminalHistory(prev => [...prev, { cmd, output }]);
      setCommandHistory(prev => [cmd, ...prev]);
      setTerminalInput('');
      setHistoryIndex(-1);
      return;
    }

    switch (trimmed) {
      case 'help':
        output = `Available commands:
  help        - Show this help message
  whoami      - Display user info
  skills      - List technical skills
  contact     - Show contact info
  experience  - List work experience
  neofetch    - Display system info
  ls          - List files
  cat <file>  - View file contents
  pwd         - Print working directory
  date        - Show current date/time
  uptime      - Show system uptime
  echo <text> - Print text
  history     - Show command history
  fortune     - IT wisdom

  === ARCADE GAMES ===
  pong        - Classic paddle game
  snake       - Snake with 20 levels
  tetris      - Block stacking puzzle
  breakout    - Brick breaker
  minesweeper - Find the mines
  invaders    - Space Invaders

  clear       - Clear terminal
  exit        - Close terminal
  reboot      - Restart system
  sudo hire brandon - ???`;
        break;
      case 'whoami':
        output = 'Brandon Bibbins - IT Director @ Liquid I.V. (Unilever)\n12+ years of IT leadership experience';
        break;
      case 'skills':
        output = `Technical Skills:
  Endpoint Mgmt: Jamf Pro, Intune, Hexnode, Kandji, JumpCloud
  Identity/Access: Okta, OneLogin, Azure AD/Entra ID, 1Password
  Productivity: Google Workspace, Microsoft 365, Slack, Notion
  Security: CrowdStrike, Mimecast, Proofpoint, KnowBe4
  ITSM: Jira Service Management, ServiceNow, Zendesk
  AI/Automation: Claude Code, OpenAI GPT-4, Codex, Gemini
  Infrastructure: AWS, Azure, Cisco Meraki, Palo Alto, Fortinet`;
        break;
      case 'contact':
        output = `Contact Information:
  Email: brandonbibbins@gmail.com
  Phone: (310) 749-0728
  LinkedIn: linkedin.com/in/brandonbibbins
  Location: Los Angeles, CA`;
        break;
      case 'experience':
        output = `Work Experience:
  2022-Present: IT Director @ Liquid I.V. (Unilever)
  2020-2025: IT Director @ Princess Polly
  2017-2020: IT Manager @ Drinks.com
  2016-2017: Senior IT Tech @ Playtika
  2014-2016: IT Support @ David & Goliath`;
        break;
      case 'neofetch':
        output = `
       ____  ____
      / __ )/ __ )    guest@bibbins
     / __  / __  |    --------------
    / /_/ / /_/ /     OS: BibbinsTech BIOS v2.0
   /_____/_____/      Host: Portfolio System
                      Kernel: React 19.0
   ┌──────────────┐   Uptime: 12+ years
   │  IT DIRECTOR │   Shell: Terminal v1.0
   │   ┌──────┐   │   Theme: ${theme}
   │   │ ▓▓▓▓ │   │   CPU: Brandon Core i7
   │   │ ▓▓▓▓ │   │   Memory: 65536 KB
   │   └──────┘   │
   └──────────────┘   Contact: brandonbibbins@gmail.com`;
        break;
      case 'ls':
        output = `resume.txt    skills.dat    experience.log
contact.cfg   certs.bin     games/`;
        break;
      case 'ls games':
      case 'ls games/':
        output = `pong.exe      snake.exe     tetris.exe
breakout.exe  minesweeper.exe  invaders.exe`;
        break;
      case 'pwd':
        output = '/home/brandon';
        break;
      case 'date':
        output = new Date().toString();
        break;
      case 'uptime':
        output = `System uptime: 12+ years
  Started: 2014 @ David & Goliath
  Current: IT Director @ Liquid I.V.
  Status: Actively seeking new opportunities`;
        break;
      case 'history':
        output = commandHistory.length > 0
          ? commandHistory.slice(0, 10).map((c, i) => `  ${commandHistory.length - i}  ${c}`).reverse().join('\n')
          : 'No commands in history';
        break;
      case 'fortune':
        output = fortunes[Math.floor(Math.random() * fortunes.length)];
        break;
      case 'pong':
      case './games/pong.exe':
      case 'games/pong.exe':
        setPongScore({ player: 0, cpu: 0 });
        setPlayerY(50);
        setCpuY(50);
        setBallPos({ x: 50, y: 50 });
        setBallVel({ x: 0, y: 0 });
        setPongStarted(false);
        setPongWinner(null);
        setPongActive(true);
        setTerminalHistory(prev => [...prev, { cmd, output: 'Starting Pong... Press SPACE to begin!' }]);
        setCommandHistory(prev => [cmd, ...prev]);
        setTerminalInput('');
        return;
      case 'snake':
      case './games/snake.exe':
      case 'games/snake.exe':
        resetSnakeGame();
        setSnakeActive(true);
        setTerminalHistory(prev => [...prev, { cmd, output: 'Starting Snake... Press SPACE to begin!\nControls: WASD or Arrow Keys | P: Pause | Q: Quit' }]);
        setCommandHistory(prev => [cmd, ...prev]);
        setTerminalInput('');
        return;
      case 'tetris':
      case './games/tetris.exe':
      case 'games/tetris.exe':
        resetTetris();
        setTetrisActive(true);
        setGameSource('terminal');
        setTerminalHistory(prev => [...prev, { cmd, output: 'Starting Tetris... Press SPACE to begin!\nControls: A/D or ←/→: Move | W or ↑: Rotate | S or ↓: Drop | P: Pause | Q: Quit' }]);
        setCommandHistory(prev => [cmd, ...prev]);
        setTerminalInput('');
        return;
      case 'breakout':
      case './games/breakout.exe':
      case 'games/breakout.exe':
        resetBreakout();
        setBreakoutActive(true);
        setTerminalHistory(prev => [...prev, { cmd, output: 'Starting Breakout... Press SPACE to begin!\nControls: A/D or ←/→: Move Paddle | Q: Quit' }]);
        setCommandHistory(prev => [cmd, ...prev]);
        setTerminalInput('');
        return;
      case 'minesweeper':
      case './games/minesweeper.exe':
      case 'games/minesweeper.exe':
        resetMinesweeper();
        setMinesweeperActive(true);
        setTerminalHistory(prev => [...prev, { cmd, output: 'Starting Minesweeper...\nClick to reveal | Right-click to flag | Q: Quit' }]);
        setCommandHistory(prev => [cmd, ...prev]);
        setTerminalInput('');
        return;
      case 'invaders':
      case 'spaceinvaders':
      case './games/invaders.exe':
      case 'games/invaders.exe':
        resetInvaders();
        setInvadersActive(true);
        setTerminalHistory(prev => [...prev, { cmd, output: 'Starting Space Invaders... Press SPACE to begin!\nControls: A/D or ←/→: Move | W/↑/SPACE: Shoot | Q: Quit' }]);
        setCommandHistory(prev => [cmd, ...prev]);
        setTerminalInput('');
        return;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      case 'exit':
        setTerminalOpen(false);
        setTerminalInput('');
        playBeep('click');
        return;
      case 'reboot':
        setTerminalOpen(false);
        setTerminalInput('');
        setTerminalHistory([]);
        setBootPhase('booting');
        setBootText('');
        setMemoryCount(0);
        setProgressBar(0);
        setShowProgressBar(false);
        return;
      case 'sudo hire brandon':
        output = `
  ╔════════════════════════════════════════╗
  ║  ACCESS GRANTED                        ║
  ║                                        ║
  ║  Excellent choice! Brandon would be    ║
  ║  a great addition to your team.        ║
  ║                                        ║
  ║  Initiating hiring sequence...         ║
  ║  Contact: brandonbibbins@gmail.com     ║
  ╚════════════════════════════════════════╝`;
        playBeep('boot');
        break;
      default:
        if (trimmed) {
          output = `Command not found: ${cmd}\nType 'help' for available commands.`;
          playBeep('error');
        }
    }

    if (trimmed && trimmed !== 'clear') {
      setTerminalHistory(prev => [...prev, { cmd, output }]);
      setCommandHistory(prev => [cmd, ...prev]);
    }
    setTerminalInput('');
    setHistoryIndex(-1);
  };

  // Terminal input handler
  const handleTerminalKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(terminalInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setTerminalInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setTerminalInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setTerminalInput('');
      }
    }
  };

  const colors = themeColors[theme];

  // Boot screen
  if (bootPhase === 'booting') {
    const handleSkipBoot = () => {
      setBootPhase('ready');
      playBeep('boot');
    };

    return (
      <div
        className="min-h-screen font-mono text-sm crt-screen crt-flicker relative"
        style={{ background: colors.bg, color: colors.text }}
      >
        {/* Boot text in top area */}
        <div className="p-4">
          <pre className="boot-text">{bootText}</pre>
          {memoryCount > 0 && memoryCount < 65536 && (
            <span>{memoryCount} KB</span>
          )}
          {!showProgressBar && showCursor && <span className="typing-cursor" style={{ background: colors.text }} />}
        </div>

        {/* Centered loading bar overlay */}
        {showProgressBar && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mb-2" style={{ color: colors.highlight }}>Initializing System...</div>
              <div
                className="border-2 relative overflow-hidden"
                style={{
                  borderColor: colors.text,
                  width: '300px',
                  height: '24px',
                  background: colors.bg
                }}
              >
                <div
                  className="h-full transition-all duration-75"
                  style={{
                    width: `${progressBar}%`,
                    background: colors.highlight,
                  }}
                />
              </div>
              <div className="mt-2" style={{ color: colors.text }}>{progressBar}%</div>
            </div>
          </div>
        )}

        {/* Skip button */}
        <button
          onClick={handleSkipBoot}
          className="absolute bottom-4 right-4 px-4 py-2 border-2 hover:opacity-80 transition-opacity cursor-pointer"
          style={{
            borderColor: colors.text,
            background: colors.bg,
            color: colors.highlight
          }}
        >
          [ SKIP ]
        </button>
      </div>
    );
  }

  // Main BIOS interface
  return (
    <div
      className="min-h-screen font-mono text-sm p-2 select-none crt-screen crt-flicker"
      style={{ background: colors.bg, color: colors.text }}
    >
      {/* Top Header Bar */}
      <div
        className="text-center py-1 font-bold text-xs sm:text-sm"
        style={{ background: colors.text, color: colors.bg }}
      >
        <span className="hidden sm:inline">CMOS Setup Utility - Copyright (C) 2014-2025, Brandon Bibbins Inc.</span>
        <span className="sm:hidden">BIOS Setup - Brandon Bibbins</span>
      </div>

      <div className="flex flex-col md:flex-row mt-2 gap-2" style={{ minHeight: 'calc(100vh - 140px)' }}>
        {/* Left Menu */}
        <div className="w-full md:w-64 border-2 flex flex-col" style={{ borderColor: colors.text }}>
          <div
            className="px-2 py-1 font-bold text-center"
            style={{ background: colors.text, color: colors.bg }}
          >
            ▼ Main Menu ▼
          </div>
          <div className="flex-1 p-1">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => {
                  setFocusArea('menu');
                  setSelectedIndex(index);
                  setSelectedMenu(item.id);
                  playBeep('click');
                }}
                onMouseEnter={() => {
                  setFocusArea('menu');
                  setSelectedIndex(index);
                  setSelectedMenu(item.id);
                }}
                className="px-2 py-2 md:py-1 cursor-pointer active:opacity-80 transition-opacity"
                style={
                  selectedIndex === index && focusArea === 'menu'
                    ? { background: colors.text, color: colors.bg }
                    : selectedIndex === index
                    ? { background: colors.bg, filter: 'brightness(1.5)' }
                    : {}
                }
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Panel */}
        <div className="flex-1 border-2 flex flex-col" style={{ borderColor: colors.text }}>
          <div
            className="px-2 py-1 font-bold"
            style={{ background: colors.text, color: colors.bg }}
          >
            {menuItems.find(m => m.id === selectedMenu)?.label}
          </div>
          <div className="flex-1 p-3 overflow-auto">
            {selectedMenu === 'main' && <MainPanel data={resumeData} />}
            {selectedMenu === 'experience' && (
              <ExperiencePanel
                data={resumeData}
                focusArea={focusArea}
                setFocusArea={setFocusArea}
                contentIndex={contentIndex}
                setContentIndex={setContentIndex}
              />
            )}
            {selectedMenu === 'skills' && <SkillsPanel data={resumeData} />}
            {selectedMenu === 'achievements' && <AchievementsPanel data={resumeData} />}
            {selectedMenu === 'contact' && <ContactPanel data={resumeData} />}
            {selectedMenu === 'games' && !pongActive && !snakeActive && !tetrisActive && !breakoutActive && !minesweeperActive && !invadersActive && (
              <GamesPanel
                snakeHighScore={snakeHighScore}
                onPlayPong={() => {
                  setPongScore({ player: 0, cpu: 0 });
                  setPlayerY(50);
                  setCpuY(50);
                  setBallPos({ x: 50, y: 50 });
                  setBallVel({ x: 0, y: 0 });
                  setPongStarted(false);
                  setPongWinner(null);
                  setPongActive(true);
                  playBeep('enter');
                }}
                onPlaySnake={() => {
                  resetSnakeGame();
                  setSnakeActive(true);
                  playBeep('enter');
                }}
                onPlayTetris={() => {
                  resetTetris();
                  setTetrisActive(true);
                  setGameSource('arcade');
                  playBeep('enter');
                }}
                onPlayBreakout={() => {
                  resetBreakout();
                  setBreakoutActive(true);
                  playBeep('enter');
                }}
                onPlayMinesweeper={() => {
                  resetMinesweeper();
                  setMinesweeperActive(true);
                  playBeep('enter');
                }}
                onPlayInvaders={() => {
                  resetInvaders();
                  setInvadersActive(true);
                  playBeep('enter');
                }}
                onOpenTerminal={() => {
                  setTerminalOpen(true);
                  playBeep('enter');
                  setTimeout(() => terminalInputRef.current?.focus(), 50);
                }}
              />
            )}
            {/* Games rendered in main content area */}
            {selectedMenu === 'games' && pongActive && (
              <div className="h-full flex flex-col">
                <div className="text-center mb-2">
                  <span className="text-[#ffff55] text-lg">PONG</span>
                  <span className="mx-4">You: {pongScore.player}</span>
                  <span>CPU: {pongScore.cpu}</span>
                  <button onClick={() => { setPongActive(false); }} className="ml-4 px-2 py-0.5 text-xs" style={{ background: '#ff5555', color: '#000' }}>QUIT</button>
                </div>
                <div className="flex-1 relative border-2 border-[#aaaaaa]" style={{ minHeight: '300px' }}>
                  <div className="absolute top-0 bottom-0 left-1/2 w-px" style={{ background: '#333', borderStyle: 'dashed' }} />
                  <div className="absolute w-3 bg-[#55ffff]" style={{ left: '2%', top: `${playerY - 10}%`, height: '20%' }} />
                  <div className="absolute w-3 bg-[#ff5555]" style={{ right: '2%', top: `${cpuY - 10}%`, height: '20%' }} />
                  <div className="absolute w-4 h-4 bg-[#ffff55] rounded-full" style={{ left: `${ballPos.x}%`, top: `${ballPos.y}%`, transform: 'translate(-50%, -50%)' }} />
                  {!pongStarted && !pongWinner && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <div className="text-center">
                        <div className="text-[#ffff55] text-2xl mb-2">PONG</div>
                        <div className="text-[#aaaaaa]">Press SPACE to Start</div>
                        <div className="text-[#888] text-xs mt-2">W/S or ↑/↓ to move</div>
                      </div>
                    </div>
                  )}
                  {pongWinner && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <div className="text-center">
                        <div className={`text-2xl mb-2 ${pongWinner === 'You' ? 'text-[#55ff55]' : 'text-[#ff5555]'}`}>
                          {pongWinner === 'You' ? 'YOU WIN!' : 'CPU WINS!'}
                        </div>
                        <div className="text-[#888]">Press SPACE to Play Again</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-center mt-2 text-xs opacity-70">First to 5 wins! | W/S or ↑/↓: Move | Q: Quit</div>
              </div>
            )}
            {selectedMenu === 'games' && snakeActive && (
              <div className="h-full flex flex-col">
                <div className="text-center mb-2">
                  <span className="text-[#55ff55] text-lg">SNAKE</span>
                  <span className="mx-3">Level: {snakeLevel}/20</span>
                  <span className="mx-3">Score: {snakeScore}</span>
                  <span className="text-[#888]">Hi: {snakeHighScore}</span>
                  <button onClick={() => { setSnakeActive(false); resetSnakeGame(); }} className="ml-4 px-2 py-0.5 text-xs" style={{ background: '#ff5555', color: '#000' }}>QUIT</button>
                </div>
                <div className="flex-1 relative border-2 border-[#aaaaaa] mx-auto" style={{ width: '100%', maxWidth: '800px', aspectRatio: '2' }}>
                  {snake.map((segment, index) => (
                    <div key={index} className="absolute" style={{ left: `${(segment.x / GRID_WIDTH) * 100}%`, top: `${(segment.y / GRID_HEIGHT) * 100}%`, width: `${100 / GRID_WIDTH}%`, height: `${100 / GRID_HEIGHT}%`, background: index === 0 ? '#55ff55' : '#33ff33', border: '1px solid #0a0a0a' }} />
                  ))}
                  <div className="absolute" style={{ left: `${(food.x / GRID_WIDTH) * 100}%`, top: `${(food.y / GRID_HEIGHT) * 100}%`, width: `${100 / GRID_WIDTH}%`, height: `${100 / GRID_HEIGHT}%`, background: '#ff5555', borderRadius: '50%' }} />
                  {!snakeStarted && !snakeGameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <div className="text-center">
                        <div className="text-[#55ff55] text-2xl mb-2">SNAKE</div>
                        <div className="text-[#aaaaaa]">Press SPACE to Start</div>
                        <div className="text-[#888] text-xs mt-2">WASD or Arrow Keys to move</div>
                      </div>
                    </div>
                  )}
                  {snakePaused && !snakeGameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <div className="text-[#ffff55] text-xl">PAUSED - Press P</div>
                    </div>
                  )}
                  {snakeGameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <div className="text-center">
                        <div className="text-[#ff5555] text-2xl mb-2">GAME OVER</div>
                        <div className="text-[#ffff55] mb-1">Score: {snakeScore}</div>
                        {snakeScore >= snakeHighScore && snakeScore > 0 && <div className="text-[#55ff55] mb-2">NEW HIGH SCORE!</div>}
                        <div className="text-[#aaaaaa]">Press SPACE to Play Again</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-center mt-2 text-xs opacity-70">Eat 5 apples to level up! | WASD/Arrows: Move | P: Pause | Q: Quit</div>
              </div>
            )}
            {selectedMenu === 'games' && tetrisActive && gameSource === 'arcade' && (
              <div className="h-full flex flex-col items-center">
                <div className="text-center mb-2">
                  <span className="text-[#ff00ff] text-lg">TETRIS</span>
                  <span className="mx-3">Level: {tetrisLevel}</span>
                  <span className="mx-3">Lines: {tetrisLines}</span>
                  <span className="text-[#ffff55]">Score: {tetrisScore}</span>
                  <button onClick={() => { setTetrisActive(false); setGameSource(null); resetTetris(); }} className="ml-4 px-2 py-0.5 text-xs" style={{ background: '#ff5555', color: '#000' }}>QUIT</button>
                </div>
                <div className="flex gap-4 flex-1">
                  <div className="relative border-2 border-[#aaaaaa]" style={{ width: '200px', height: '400px' }}>
                    {tetrisBoard.map((row, y) => row.map((cell, x) => cell && (
                      <div key={`${x}-${y}`} className="absolute" style={{ left: `${x * 10}%`, top: `${y * 5}%`, width: '10%', height: '5%', background: TETRIS_COLORS[cell], border: '1px solid #0a0a0a' }} />
                    )))}
                    {tetrisPiece.map((block, i) => (
                      <div key={i} className="absolute" style={{ left: `${block.x * 10}%`, top: `${block.y * 5}%`, width: '10%', height: '5%', background: TETRIS_COLORS[block.type], border: '1px solid #0a0a0a' }} />
                    ))}
                    {!tetrisStarted && !tetrisGameOver && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <div className="text-center">
                          <div className="text-[#ff00ff] text-2xl mb-2">TETRIS</div>
                          <div className="text-[#aaaaaa]">Press SPACE to Start</div>
                        </div>
                      </div>
                    )}
                    {tetrisPaused && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <div className="text-[#ffff55] text-xl">PAUSED</div>
                      </div>
                    )}
                    {tetrisGameOver && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <div className="text-center">
                          <div className="text-[#ff5555] text-2xl mb-2">GAME OVER</div>
                          <div className="text-[#ffff55] mb-2">Score: {tetrisScore}</div>
                          <div className="text-[#aaaaaa]">Press SPACE to Retry</div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-sm">
                    <div className="text-[#ffff55] mb-2">Next:</div>
                    <div className="border border-[#555] p-2 mb-4" style={{ width: '60px', height: '60px' }}>
                      {TETROMINOS[tetrisNextPiece].map((row, y) => (
                        <div key={y} className="flex">
                          {row.map((cell, x) => (
                            <div key={x} style={{ width: '12px', height: '12px', background: cell ? TETRIS_COLORS[tetrisNextPiece] : 'transparent' }} />
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="text-[#888] text-xs space-y-1">
                      <div>↑/W: Rotate</div>
                      <div>←→: Move</div>
                      <div>↓/S: Drop</div>
                      <div>P: Pause</div>
                      <div>Q: Quit</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedMenu === 'games' && breakoutActive && (
              <div className="h-full flex flex-col">
                <div className="text-center mb-2">
                  <span className="text-[#ff8800] text-lg">BREAKOUT</span>
                  <span className="mx-4">Score: {breakoutScore}</span>
                  <span className="text-[#ff5555]">Lives: {breakoutLives}</span>
                  <button onClick={() => { setBreakoutActive(false); resetBreakout(); }} className="ml-4 px-2 py-0.5 text-xs" style={{ background: '#ff5555', color: '#000' }}>QUIT</button>
                </div>
                <div className="flex-1 relative border-2 border-[#aaaaaa] mx-auto" style={{ width: '100%', maxWidth: '600px', aspectRatio: '1.5' }}>
                  {breakoutBricks.map((brick, i) => (
                    <div key={i} className="absolute" style={{ left: `${brick.x}%`, top: `${brick.y}%`, width: '10%', height: '4%', background: brick.color }} />
                  ))}
                  <div className="absolute" style={{ left: `${breakoutPaddleX - 8}%`, bottom: '3%', width: '16%', height: '2.5%', background: '#55ffff' }} />
                  <div className="absolute rounded-full" style={{ left: `${breakoutBall.x}%`, top: `${breakoutBall.y}%`, width: '12px', height: '12px', background: '#ffffff', transform: 'translate(-50%, -50%)' }} />
                  {!breakoutStarted && !breakoutGameOver && !breakoutWon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <div className="text-center">
                        <div className="text-[#ff8800] text-2xl mb-2">BREAKOUT</div>
                        <div className="text-[#aaaaaa]">Press SPACE to Start</div>
                      </div>
                    </div>
                  )}
                  {breakoutGameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <div className="text-center">
                        <div className="text-[#ff5555] text-2xl mb-2">GAME OVER</div>
                        <div className="text-[#ffff55] mb-2">Score: {breakoutScore}</div>
                        <div className="text-[#aaaaaa]">Press SPACE to Retry</div>
                      </div>
                    </div>
                  )}
                  {breakoutWon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <div className="text-center">
                        <div className="text-[#55ff55] text-2xl mb-2">YOU WIN!</div>
                        <div className="text-[#ffff55] mb-2">Score: {breakoutScore}</div>
                        <div className="text-[#aaaaaa]">Press SPACE to Play Again</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-center mt-2 text-xs opacity-70">←→ or A/D: Move Paddle | Q: Quit</div>
              </div>
            )}
            {selectedMenu === 'games' && minesweeperActive && (
              <div className="h-full flex flex-col items-center">
                <div className="text-center mb-2">
                  <span className="text-[#aaaaaa] text-lg">MINESWEEPER</span>
                  <span className="mx-3">Mines: {minesweeperMines}</span>
                  <span className="mx-3">Flags: {minesweeperFlags}</span>
                  <span className="text-[#ffff55]">Time: {minesweeperTime}s</span>
                  <button onClick={() => { setMinesweeperActive(false); resetMinesweeper(); }} className="ml-4 px-2 py-0.5 text-xs" style={{ background: '#ff5555', color: '#000' }}>QUIT</button>
                </div>
                <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${MINE_SIZE}, 1fr)` }}>
                  {minesweeperBoard.map((row, y) => row.map((cell, x) => (
                    <button
                      key={`${x}-${y}`}
                      onClick={() => { if (!minesweeperStarted) setMinesweeperStarted(true); if (!minesweeperGameOver && !minesweeperWon) revealCell(x, y); }}
                      onContextMenu={(e) => { e.preventDefault(); if (!minesweeperGameOver && !minesweeperWon) toggleFlag(x, y); }}
                      className="flex items-center justify-center font-bold"
                      style={{ width: '32px', height: '32px', background: cell.isRevealed ? (cell.isMine ? '#ff0000' : '#333') : '#666', color: cell.neighborMines === 1 ? '#0000ff' : cell.neighborMines === 2 ? '#008000' : cell.neighborMines >= 3 ? '#ff0000' : '#fff', fontSize: '14px' }}
                    >
                      {cell.isFlagged ? '🚩' : cell.isRevealed ? (cell.isMine ? '💣' : (cell.neighborMines || '')) : ''}
                    </button>
                  )))}
                </div>
                {(minesweeperGameOver || minesweeperWon) && (
                  <div className="mt-4 text-center">
                    <div className={`text-xl ${minesweeperWon ? 'text-[#55ff55]' : 'text-[#ff5555]'}`}>
                      {minesweeperWon ? 'YOU WIN!' : 'GAME OVER'}
                    </div>
                    <div className="text-[#888] mt-1">Press SPACE to play again</div>
                  </div>
                )}
                <div className="text-center mt-4 text-xs opacity-70">Click: Reveal | Right-click: Flag | Q: Quit</div>
              </div>
            )}
            {selectedMenu === 'games' && invadersActive && (
              <div className="h-full flex flex-col">
                <div className="text-center mb-2">
                  <span className="text-[#00ff00] text-lg">SPACE INVADERS</span>
                  <span className="mx-4">Score: {invadersScore}</span>
                  <span className="text-[#ff5555]">Lives: {invadersLives}</span>
                  <button onClick={() => { setInvadersActive(false); resetInvaders(); }} className="ml-4 px-2 py-0.5 text-xs" style={{ background: '#ff5555', color: '#000' }}>QUIT</button>
                </div>
                <div className="flex-1 relative border-2 border-[#aaaaaa] mx-auto" style={{ width: '100%', maxWidth: '600px', aspectRatio: '1.2' }}>
                  {invaders.filter(i => i.alive).map((inv, i) => (
                    <div key={i} className="absolute" style={{ left: `${inv.x}%`, top: `${inv.y}%`, fontSize: '20px', transform: 'translate(-50%, -50%)' }}>👾</div>
                  ))}
                  {invadersBullets.map((b, i) => (
                    <div key={i} className="absolute" style={{ left: `${b.x}%`, top: `${b.y}%`, width: '3px', height: '12px', background: b.isPlayer ? '#00ff00' : '#ff0000', transform: 'translateX(-50%)' }} />
                  ))}
                  <div className="absolute" style={{ left: `${invadersPlayerX}%`, bottom: '3%', fontSize: '24px', transform: 'translateX(-50%)' }}>🚀</div>
                  {!invadersStarted && !invadersGameOver && !invadersWon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <div className="text-center">
                        <div className="text-[#00ff00] text-2xl mb-2">SPACE INVADERS</div>
                        <div className="text-[#aaaaaa]">Press SPACE to Start</div>
                      </div>
                    </div>
                  )}
                  {invadersGameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <div className="text-center">
                        <div className="text-[#ff5555] text-2xl mb-2">GAME OVER</div>
                        <div className="text-[#ffff55] mb-2">Score: {invadersScore}</div>
                        <div className="text-[#aaaaaa]">Press SPACE to Retry</div>
                      </div>
                    </div>
                  )}
                  {invadersWon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <div className="text-center">
                        <div className="text-[#55ff55] text-2xl mb-2">EARTH SAVED!</div>
                        <div className="text-[#ffff55] mb-2">Score: {invadersScore}</div>
                        <div className="text-[#aaaaaa]">Press SPACE to Play Again</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-center mt-2 text-xs opacity-70">←→ or A/D: Move | ↑/W/SPACE: Shoot | Q: Quit</div>
              </div>
            )}
          </div>
        </div>

        {/* Help Panel - Hidden on mobile */}
        <div className="hidden lg:flex w-48 border-2 flex-col" style={{ borderColor: colors.text }}>
          <div
            className="px-2 py-1 font-bold text-center"
            style={{ background: colors.text, color: colors.bg }}
          >
            Item Help
          </div>
          <div className="flex-1 p-2 text-xs">
            <p style={{ color: colors.highlight }}>Navigation:</p>
            <p className="mt-1">↑↓ Select Item</p>
            <p>Enter: Select</p>
            <p>Esc: Back</p>
            <p className="mt-3" style={{ color: colors.highlight }}>Quick Info:</p>
            <p className="mt-1">Experience: 12+ yrs</p>
            <p>Current: IT Director</p>
            <p>Location: Los Angeles</p>
            <p className="mt-3" style={{ color: colors.accent }}>Currently @ Liquid I.V.</p>

            {/* Shortcuts Section */}
            <div
              className="mt-4 border-t pt-2 group cursor-pointer"
              style={{ borderColor: colors.text }}
            >
              <p style={{ color: colors.highlight }} className="flex items-center gap-1">
                ▸ Shortcuts <span className="text-[10px] opacity-60">(hover)</span>
              </p>
              <div className="hidden group-hover:block mt-2 space-y-1">
                <p><span style={{ color: colors.accent }}>~</span> Open Terminal</p>
                <p><span style={{ color: colors.accent }}>↑↓</span> Navigate Menu</p>
                <p><span style={{ color: colors.accent }}>→</span> Enter Section</p>
                <p><span style={{ color: colors.accent }}>←</span> Go Back</p>
                <p><span style={{ color: colors.accent }}>Esc</span> Close/Back</p>
                <p className="mt-2 opacity-70">Terminal Commands:</p>
                <p><span style={{ color: colors.accent }}>help</span> List commands</p>
                <p><span style={{ color: colors.accent }}>ls</span> List files</p>
                <p><span style={{ color: colors.accent }}>neofetch</span> System info</p>
                <p><span style={{ color: colors.accent }}>pong</span> Play game!</p>
                <p><span style={{ color: colors.accent }}>reboot</span> Restart</p>
              </div>
            </div>

            {/* Terminal Button */}
            <button
              onClick={() => {
                setTerminalOpen(true);
                playBeep('enter');
                setTimeout(() => terminalInputRef.current?.focus(), 50);
              }}
              className="mt-3 w-full py-1 text-center cursor-pointer hover:opacity-80"
              style={{ background: colors.accent, color: colors.bg }}
            >
              [ TERMINAL ]
            </button>

            {/* Resume Download Button */}
            <a
              href="/Brandon_Bibbins_Resume.pdf"
              download="Brandon_Bibbins_Resume.pdf"
              onClick={() => playBeep('enter')}
              className="mt-2 w-full py-1 text-center cursor-pointer hover:opacity-80 block"
              style={{ background: colors.accent, color: colors.bg }}
            >
              [ DOWNLOAD RESUME ]
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="mt-2 border-2" style={{ borderColor: colors.text }}>
        <div className="flex flex-wrap justify-between items-center px-2 py-1 gap-2">
          <div className="hidden md:flex gap-6">
            <span><span style={{ color: colors.highlight }}>↑↓</span>:Select</span>
            <span><span style={{ color: colors.highlight }}>Enter</span>:Select</span>
            <span><span style={{ color: colors.highlight }}>Esc</span>:Menu</span>
            <span><span style={{ color: colors.accent }}>~</span>:Terminal</span>
          </div>
          {/* Mobile: Terminal button */}
          <button
            onClick={() => {
              setTerminalOpen(true);
              playBeep('enter');
              setTimeout(() => terminalInputRef.current?.focus(), 50);
            }}
            className="md:hidden px-2 py-1 cursor-pointer"
            style={{ background: colors.accent, color: colors.bg }}
          >
            [ TERMINAL ]
          </button>
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={toggleSound}
              className="cursor-pointer hover:opacity-80"
              title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
              style={{ color: colors.text }}
            >
              {soundEnabled ? '🔊' : '🔇'}
            </button>
            <div className="theme-selector">
              {(['blue', 'amber', 'green', 'white'] as Theme[]).map((t) => (
                <button
                  key={t}
                  onClick={() => handleThemeChange(t)}
                  className={`theme-btn theme-btn-${t} ${theme === t ? 'active' : ''}`}
                  title={`${t.charAt(0).toUpperCase() + t.slice(1)} theme`}
                />
              ))}
            </div>
            <span className="hidden sm:inline"><span style={{ color: colors.highlight }}>Time:</span> {time}</span>
          </div>
        </div>
        <div
          className="px-2 py-1 text-center text-xs sm:text-sm"
          style={{ background: colors.text, color: colors.bg }}
        >
          <span className="hidden sm:inline">▲▼ Select Menu Item │ </span>Email: brandonbibbins@gmail.com<span className="hidden sm:inline"> │ Phone: (310) 749-0728</span>
        </div>
      </div>

      {/* Terminal Overlay */}
      {terminalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0, 0, 0, 0.9)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setTerminalOpen(false);
              playBeep('click');
            }
          }}
        >
          <div
            className="w-full max-w-2xl h-[80vh] md:h-96 mx-2 md:mx-4 p-3 md:p-4 font-mono text-xs md:text-sm overflow-hidden flex flex-col terminal-window"
            style={{
              background: '#0a0a0a',
              border: '2px solid #33ff33',
              boxShadow: '0 0 20px rgba(51, 255, 51, 0.3)',
            }}
          >
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-[#33ff33]">
              <span className="text-[#33ff33]">BibbinsTech Terminal v1.0</span>
              <button
                onClick={() => {
                  setTerminalOpen(false);
                  playBeep('click');
                }}
                className="text-[#ff5555] hover:text-[#ff8888] cursor-pointer"
              >
                [X] Close
              </button>
            </div>
            <div className="flex-1 overflow-y-auto text-[#33ff33]" style={{ overflowY: (pongActive || snakeActive || tetrisActive || breakoutActive || minesweeperActive || invadersActive) ? 'hidden' : 'auto' }}>
              {pongActive ? (
                <div ref={pongRef} className="h-full flex flex-col">
                  <div className="text-center mb-2">
                    <span className="text-[#ffff55]">PONG</span>
                    <span className="mx-4">You: {pongScore.player}</span>
                    <span>CPU: {pongScore.cpu}</span>
                    <span className="ml-4 text-[#888888] text-xs">(W/S or ↑/↓ to move, Q to quit)</span>
                  </div>
                  <div
                    className="flex-1 relative border border-[#33ff33]"
                    style={{ minHeight: '200px' }}
                  >
                    <div
                      className="absolute top-0 bottom-0 left-1/2 w-px"
                      style={{ background: '#333333', borderStyle: 'dashed' }}
                    />
                    <div
                      className="absolute w-2 bg-[#33ff33]"
                      style={{
                        left: '3%',
                        top: `${playerY - 12}%`,
                        height: '24%',
                      }}
                    />
                    <div
                      className="absolute w-2 bg-[#ff5555]"
                      style={{
                        right: '3%',
                        top: `${cpuY - 12}%`,
                        height: '24%',
                      }}
                    />
                    <div
                      className="absolute w-3 h-3 bg-[#ffff55] rounded-full"
                      style={{
                        left: `${ballPos.x}%`,
                        top: `${ballPos.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                    {!pongStarted && !pongWinner && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <div className="text-center">
                          <div className="text-[#ffff55] text-xl mb-2">PONG</div>
                          <div className="text-[#33ff33]">Press SPACE to Start</div>
                        </div>
                      </div>
                    )}
                    {pongWinner && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <div className="text-center">
                          <div className={`text-xl mb-2 ${pongWinner === 'You' ? 'text-[#33ff33]' : 'text-[#ff5555]'}`}>
                            {pongWinner === 'You' ? 'YOU WIN!' : 'CPU WINS!'}
                          </div>
                          <div className="text-[#888888]">Press SPACE to Play Again</div>
                          <div className="text-[#888888] text-xs mt-1">or Q to quit</div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-center mt-2 text-[#888888] text-xs">
                    First to 5 wins! Press Q or Esc to quit.
                  </div>
                </div>
              ) : snakeActive ? (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="text-center mb-1 text-xs md:text-sm">
                    <span className="text-[#ffff55]">SNAKE</span>
                    <span className="mx-2 md:mx-3">Lv:{snakeLevel}</span>
                    <span className="mx-2 md:mx-3">Score:{snakeScore}</span>
                    <span className="text-[#888888]">Hi:{snakeHighScore}</span>
                  </div>
                  <div
                    className="relative border border-[#33ff33]"
                    style={{
                      width: 'min(320px, 60vw)',
                      height: 'min(160px, 30vw)',
                      background: '#0a0a0a'
                    }}
                  >
                    {/* Grid */}
                    {snake.map((segment, index) => (
                      <div
                        key={index}
                        className="absolute"
                        style={{
                          left: `${(segment.x / GRID_WIDTH) * 100}%`,
                          top: `${(segment.y / GRID_HEIGHT) * 100}%`,
                          width: `${100 / GRID_WIDTH}%`,
                          height: `${100 / GRID_HEIGHT}%`,
                          background: index === 0 ? '#55ff55' : '#33ff33',
                          border: '1px solid #0a0a0a',
                        }}
                      />
                    ))}
                    {/* Food */}
                    <div
                      className="absolute"
                      style={{
                        left: `${(food.x / GRID_WIDTH) * 100}%`,
                        top: `${(food.y / GRID_HEIGHT) * 100}%`,
                        width: `${100 / GRID_WIDTH}%`,
                        height: `${100 / GRID_HEIGHT}%`,
                        background: '#ff5555',
                        borderRadius: '50%',
                      }}
                    />
                    {/* Start overlay */}
                    {!snakeStarted && !snakeGameOver && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <div className="text-center">
                          <div className="text-[#ffff55] text-xl mb-2">SNAKE</div>
                          <div className="text-[#33ff33] mb-1">Level {snakeLevel}</div>
                          <div className="text-[#888888] text-sm mb-2">Speed: {Math.round((1 - (getSnakeSpeed(snakeLevel) - 50) / 100) * 100)}%</div>
                          <div className="text-[#33ff33]">Press SPACE to Start</div>
                          <div className="text-[#888888] text-xs mt-2">WASD/Arrows: Move | P: Pause | Q: Quit</div>
                        </div>
                      </div>
                    )}
                    {/* Paused overlay */}
                    {snakePaused && !snakeGameOver && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <div className="text-center">
                          <div className="text-[#ffff55] text-xl mb-2">PAUSED</div>
                          <div className="text-[#33ff33]">Press P to Resume</div>
                        </div>
                      </div>
                    )}
                    {/* Game over overlay */}
                    {snakeGameOver && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <div className="text-center">
                          <div className="text-[#ff5555] text-xl mb-2">GAME OVER</div>
                          <div className="text-[#ffff55] mb-1">Score: {snakeScore}</div>
                          <div className="text-[#888888] mb-1">Level Reached: {snakeLevel}</div>
                          {snakeScore >= snakeHighScore && snakeScore > 0 && (
                            <div className="text-[#55ff55] mb-2">NEW HIGH SCORE!</div>
                          )}
                          <div className="text-[#33ff33]">Press SPACE to Play Again</div>
                          <div className="text-[#888888] text-xs mt-1">or Q to quit</div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Mobile Touch Controls */}
                  <div className="md:hidden mt-2 flex flex-col items-center gap-1">
                    {!snakeStarted && !snakeGameOver ? (
                      <button
                        onClick={() => setSnakeStarted(true)}
                        className="px-4 py-1 text-xs font-bold"
                        style={{ background: '#33ff33', color: '#0a0a0a' }}
                      >
                        START
                      </button>
                    ) : snakeGameOver ? (
                      <button
                        onClick={() => {
                          resetSnakeGame();
                          setSnakeStarted(true);
                        }}
                        className="px-4 py-1 text-xs font-bold"
                        style={{ background: '#33ff33', color: '#0a0a0a' }}
                      >
                        PLAY AGAIN
                      </button>
                    ) : (
                      <div className="grid grid-cols-3 gap-0.5" style={{ width: '120px' }}>
                        <div></div>
                        <button
                          onClick={() => {
                            if (snakeDirectionRef.current !== 'DOWN') {
                              snakeDirectionRef.current = 'UP';
                              setSnakeDirection('UP');
                            }
                          }}
                          className="p-2 text-sm font-bold active:opacity-70"
                          style={{ background: '#33ff33', color: '#0a0a0a' }}
                        >
                          ▲
                        </button>
                        <div></div>
                        <button
                          onClick={() => {
                            if (snakeDirectionRef.current !== 'RIGHT') {
                              snakeDirectionRef.current = 'LEFT';
                              setSnakeDirection('LEFT');
                            }
                          }}
                          className="p-2 text-sm font-bold active:opacity-70"
                          style={{ background: '#33ff33', color: '#0a0a0a' }}
                        >
                          ◀
                        </button>
                        <button
                          onClick={() => setSnakePaused(prev => !prev)}
                          className="p-2 text-xs font-bold active:opacity-70"
                          style={{ background: snakePaused ? '#ffff55' : '#555', color: snakePaused ? '#0a0a0a' : '#fff' }}
                        >
                          {snakePaused ? '▶' : '❚❚'}
                        </button>
                        <button
                          onClick={() => {
                            if (snakeDirectionRef.current !== 'LEFT') {
                              snakeDirectionRef.current = 'RIGHT';
                              setSnakeDirection('RIGHT');
                            }
                          }}
                          className="p-2 text-sm font-bold active:opacity-70"
                          style={{ background: '#33ff33', color: '#0a0a0a' }}
                        >
                          ▶
                        </button>
                        <div></div>
                        <button
                          onClick={() => {
                            if (snakeDirectionRef.current !== 'UP') {
                              snakeDirectionRef.current = 'DOWN';
                              setSnakeDirection('DOWN');
                            }
                          }}
                          className="p-2 text-sm font-bold active:opacity-70"
                          style={{ background: '#33ff33', color: '#0a0a0a' }}
                        >
                          ▼
                        </button>
                        <div></div>
                      </div>
                    )}
                    <button
                      onClick={() => {
                        setSnakeActive(false);
                        resetSnakeGame();
                      }}
                      className="px-3 py-0.5 text-xs"
                      style={{ background: '#ff5555', color: '#0a0a0a' }}
                    >
                      QUIT
                    </button>
                  </div>
                </div>
              ) : tetrisActive && gameSource === 'terminal' ? (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="text-center mb-1 text-xs">
                    <span className="text-[#ff00ff]">TETRIS</span>
                    <span className="mx-2">Lv:{tetrisLevel}</span>
                    <span className="mx-2">Lines:{tetrisLines}</span>
                    <span className="text-[#ffff55]">Score:{tetrisScore}</span>
                  </div>
                  <div className="flex gap-2">
                    <div
                      className="relative border border-[#33ff33]"
                      style={{ width: '150px', height: '300px', background: '#0a0a0a' }}
                    >
                      {tetrisBoard.map((row, y) =>
                        row.map((cell, x) =>
                          cell && (
                            <div
                              key={`${x}-${y}`}
                              className="absolute"
                              style={{
                                left: `${x * 10}%`,
                                top: `${y * 5}%`,
                                width: '10%',
                                height: '5%',
                                background: TETRIS_COLORS[cell],
                                border: '1px solid #0a0a0a',
                              }}
                            />
                          )
                        )
                      )}
                      {tetrisPiece.map((block, i) => (
                        <div
                          key={i}
                          className="absolute"
                          style={{
                            left: `${block.x * 10}%`,
                            top: `${block.y * 5}%`,
                            width: '10%',
                            height: '5%',
                            background: TETRIS_COLORS[block.type],
                            border: '1px solid #0a0a0a',
                          }}
                        />
                      ))}
                      {!tetrisStarted && !tetrisGameOver && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                          <div className="text-center">
                            <div className="text-[#ff00ff] text-lg mb-2">TETRIS</div>
                            <div className="text-[#33ff33] text-xs">Press SPACE</div>
                          </div>
                        </div>
                      )}
                      {tetrisPaused && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                          <div className="text-[#ffff55]">PAUSED</div>
                        </div>
                      )}
                      {tetrisGameOver && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                          <div className="text-center">
                            <div className="text-[#ff5555] text-lg mb-1">GAME OVER</div>
                            <div className="text-[#ffff55] text-xs mb-1">Score: {tetrisScore}</div>
                            <div className="text-[#33ff33] text-xs">SPACE to retry</div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-xs hidden md:block">
                      <div className="text-[#ffff55] mb-1">Next:</div>
                      <div className="border border-[#333] p-1 mb-2" style={{ width: '40px', height: '40px' }}>
                        {TETROMINOS[tetrisNextPiece].map((row, y) =>
                          row.map((cell, x) =>
                            cell ? (
                              <div
                                key={`${x}-${y}`}
                                style={{
                                  width: '8px',
                                  height: '8px',
                                  background: TETRIS_COLORS[tetrisNextPiece],
                                  display: 'inline-block',
                                }}
                              />
                            ) : (
                              <div key={`${x}-${y}`} style={{ width: '8px', height: '8px', display: 'inline-block' }} />
                            )
                          )
                        )}
                      </div>
                      <div className="text-[#888]">
                        <div>↑ Rotate</div>
                        <div>←→ Move</div>
                        <div>↓ Drop</div>
                        <div>P Pause</div>
                        <div>Q Quit</div>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => { setTetrisActive(false); setGameSource(null); resetTetris(); }} className="mt-2 px-3 py-0.5 text-xs md:hidden" style={{ background: '#ff5555', color: '#0a0a0a' }}>QUIT</button>
                </div>
              ) : breakoutActive ? (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="text-center mb-1 text-xs">
                    <span className="text-[#ff8800]">BREAKOUT</span>
                    <span className="mx-2">Score:{breakoutScore}</span>
                    <span className="text-[#ff5555]">Lives:{breakoutLives}</span>
                  </div>
                  <div
                    className="relative border border-[#33ff33]"
                    style={{ width: 'min(300px, 80vw)', height: 'min(200px, 50vw)', background: '#0a0a0a' }}
                  >
                    {breakoutBricks.map((brick, i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          left: `${brick.x}%`,
                          top: `${brick.y}%`,
                          width: '10%',
                          height: '4%',
                          background: brick.color,
                        }}
                      />
                    ))}
                    <div
                      className="absolute"
                      style={{
                        left: `${breakoutPaddleX - 10}%`,
                        bottom: '5%',
                        width: '20%',
                        height: '3%',
                        background: '#33ff33',
                      }}
                    />
                    <div
                      className="absolute rounded-full"
                      style={{
                        left: `${breakoutBall.x}%`,
                        top: `${breakoutBall.y}%`,
                        width: '8px',
                        height: '8px',
                        background: '#ffffff',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                    {!breakoutStarted && !breakoutGameOver && !breakoutWon && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <div className="text-center">
                          <div className="text-[#ff8800] text-lg mb-2">BREAKOUT</div>
                          <div className="text-[#33ff33] text-xs">Press SPACE</div>
                        </div>
                      </div>
                    )}
                    {breakoutGameOver && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <div className="text-center">
                          <div className="text-[#ff5555] text-lg mb-1">GAME OVER</div>
                          <div className="text-[#ffff55] text-xs mb-1">Score: {breakoutScore}</div>
                          <div className="text-[#33ff33] text-xs">SPACE to retry</div>
                        </div>
                      </div>
                    )}
                    {breakoutWon && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <div className="text-center">
                          <div className="text-[#55ff55] text-lg mb-1">YOU WIN!</div>
                          <div className="text-[#ffff55] text-xs mb-1">Score: {breakoutScore}</div>
                          <div className="text-[#33ff33] text-xs">SPACE to play again</div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-[#888] text-xs mt-1 hidden md:block">←→ Move Paddle | Q Quit</div>
                  <button onClick={() => { setBreakoutActive(false); resetBreakout(); }} className="mt-2 px-3 py-0.5 text-xs md:hidden" style={{ background: '#ff5555', color: '#0a0a0a' }}>QUIT</button>
                </div>
              ) : minesweeperActive ? (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="text-center mb-1 text-xs">
                    <span className="text-[#aaaaaa]">MINESWEEPER</span>
                    <span className="mx-2">Mines:{minesweeperMines}</span>
                    <span className="mx-2">Flags:{minesweeperFlags}</span>
                    <span className="text-[#ffff55]">Time:{minesweeperTime}s</span>
                  </div>
                  <div
                    className="grid gap-0.5"
                    style={{ gridTemplateColumns: `repeat(${MINE_SIZE}, 1fr)` }}
                  >
                    {minesweeperBoard.map((row, y) =>
                      row.map((cell, x) => (
                        <button
                          key={`${x}-${y}`}
                          onClick={() => {
                            if (!minesweeperStarted) setMinesweeperStarted(true);
                            if (!minesweeperGameOver && !minesweeperWon) revealCell(x, y);
                          }}
                          onContextMenu={(e) => {
                            e.preventDefault();
                            if (!minesweeperGameOver && !minesweeperWon) toggleFlag(x, y);
                          }}
                          className="flex items-center justify-center text-xs font-bold"
                          style={{
                            width: '24px',
                            height: '24px',
                            background: cell.isRevealed ? (cell.isMine ? '#ff0000' : '#333') : '#666',
                            color: cell.neighborMines === 1 ? '#0000ff' : cell.neighborMines === 2 ? '#008000' : cell.neighborMines >= 3 ? '#ff0000' : '#fff',
                          }}
                        >
                          {cell.isFlagged ? '🚩' : cell.isRevealed ? (cell.isMine ? '💣' : (cell.neighborMines || '')) : ''}
                        </button>
                      ))
                    )}
                  </div>
                  {(minesweeperGameOver || minesweeperWon) && (
                    <div className="mt-2 text-center">
                      <div className={minesweeperWon ? 'text-[#55ff55]' : 'text-[#ff5555]'}>
                        {minesweeperWon ? 'YOU WIN!' : 'GAME OVER'}
                      </div>
                      <div className="text-[#888] text-xs">SPACE to play again</div>
                    </div>
                  )}
                  <div className="text-[#888] text-xs mt-2">Click: Reveal | Right-click: Flag | Q: Quit</div>
                  <button onClick={() => { setMinesweeperActive(false); resetMinesweeper(); }} className="mt-2 px-3 py-0.5 text-xs" style={{ background: '#ff5555', color: '#0a0a0a' }}>QUIT</button>
                </div>
              ) : invadersActive ? (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="text-center mb-1 text-xs">
                    <span className="text-[#00ff00]">SPACE INVADERS</span>
                    <span className="mx-2">Score:{invadersScore}</span>
                    <span className="text-[#ff5555]">Lives:{invadersLives}</span>
                  </div>
                  <div
                    className="relative border border-[#33ff33]"
                    style={{ width: 'min(300px, 80vw)', height: 'min(250px, 60vw)', background: '#0a0a0a' }}
                  >
                    {invaders.filter(i => i.alive).map((inv, i) => (
                      <div
                        key={i}
                        className="absolute text-center"
                        style={{
                          left: `${inv.x}%`,
                          top: `${inv.y}%`,
                          fontSize: '12px',
                          transform: 'translate(-50%, -50%)',
                          color: inv.type === 0 ? '#ff0000' : inv.type === 1 ? '#ff8800' : inv.type === 2 ? '#ffff00' : '#00ff00',
                        }}
                      >
                        👾
                      </div>
                    ))}
                    {invadersBullets.map((b, i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          left: `${b.x}%`,
                          top: `${b.y}%`,
                          width: '2px',
                          height: '8px',
                          background: b.isPlayer ? '#00ff00' : '#ff0000',
                          transform: 'translateX(-50%)',
                        }}
                      />
                    ))}
                    <div
                      className="absolute"
                      style={{
                        left: `${invadersPlayerX}%`,
                        bottom: '5%',
                        fontSize: '16px',
                        transform: 'translateX(-50%)',
                      }}
                    >
                      🚀
                    </div>
                    {!invadersStarted && !invadersGameOver && !invadersWon && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <div className="text-center">
                          <div className="text-[#00ff00] text-lg mb-2">SPACE INVADERS</div>
                          <div className="text-[#33ff33] text-xs">Press SPACE</div>
                        </div>
                      </div>
                    )}
                    {invadersGameOver && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <div className="text-center">
                          <div className="text-[#ff5555] text-lg mb-1">GAME OVER</div>
                          <div className="text-[#ffff55] text-xs mb-1">Score: {invadersScore}</div>
                          <div className="text-[#33ff33] text-xs">SPACE to retry</div>
                        </div>
                      </div>
                    )}
                    {invadersWon && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <div className="text-center">
                          <div className="text-[#55ff55] text-lg mb-1">EARTH SAVED!</div>
                          <div className="text-[#ffff55] text-xs mb-1">Score: {invadersScore}</div>
                          <div className="text-[#33ff33] text-xs">SPACE to play again</div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-[#888] text-xs mt-1 hidden md:block">←→ Move | ↑/W/SPACE Shoot | Q Quit</div>
                  <button onClick={() => { setInvadersActive(false); resetInvaders(); }} className="mt-2 px-3 py-0.5 text-xs md:hidden" style={{ background: '#ff5555', color: '#0a0a0a' }}>QUIT</button>
                </div>
              ) : (
                <>
                  <div className="mb-2 text-[#888888]">Type &apos;help&apos; for available commands. Press Esc to close.</div>
                  {terminalHistory.map((entry, i) => (
                    <div key={i} className="mb-2">
                      <div>
                        <span className="text-[#55ff55]">guest@bibbins</span>
                        <span className="text-[#ffffff]">:</span>
                        <span className="text-[#5555ff]">~</span>
                        <span className="text-[#ffffff]">$ </span>
                        <span>{entry.cmd}</span>
                      </div>
                      <pre className="whitespace-pre-wrap text-[#aaaaaa] ml-0">{entry.output}</pre>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <span className="text-[#55ff55]">guest@bibbins</span>
                    <span className="text-[#ffffff]">:</span>
                    <span className="text-[#5555ff]">~</span>
                    <span className="text-[#ffffff]">$ </span>
                    <input
                      ref={terminalInputRef}
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyDown={handleTerminalKeyDown}
                      className="flex-1 bg-transparent border-none outline-none text-[#33ff33] font-mono"
                      autoFocus
                      spellCheck={false}
                      autoComplete="off"
                    />
                    <span className="terminal-cursor">▌</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
