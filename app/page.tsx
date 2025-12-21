'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Theme, BootPhase, TerminalEntry, PongScore, BallPosition, BallVelocity } from '@/lib/types';
import { resumeData, menuItems, themeColors, bootMessages, fortunes } from '@/lib/data';
import { createBeep } from '@/lib/sounds';
import {
  MainPanel,
  ExperiencePanel,
  SkillsPanel,
  AchievementsPanel,
  ContactPanel,
} from '@/components';

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState<typeof menuItems[number]['id']>('main');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [focusArea, setFocusArea] = useState<'menu' | 'content'>('menu');
  const [contentIndex, setContentIndex] = useState(0);
  const [time, setTime] = useState('');
  const [theme, setTheme] = useState<Theme>('blue');
  const [bootPhase, setBootPhase] = useState<BootPhase>('booting');
  const [bootText, setBootText] = useState('');
  const [memoryCount, setMemoryCount] = useState(0);
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
  const terminalInputRef = useRef<HTMLInputElement>(null);
  const pongRef = useRef<HTMLDivElement>(null);

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
        } else if (msg.text.includes('OK') || msg.text.includes('Connected')) {
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
    }, 4500);

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
        setPlayerY(prev => Math.max(12, prev - 5));
      } else if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') {
        e.preventDefault();
        setPlayerY(prev => Math.min(88, prev + 5));
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

  // Unified keyboard navigation
  useEffect(() => {
    if (bootPhase === 'booting') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (pongActive) return;

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

[2020-2022] IT Director @ Princess Polly
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
  pong        - Play Pong!
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
  2020-2022: IT Director @ Princess Polly
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
        output = `pong.exe`;
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
    return (
      <div
        className="min-h-screen font-mono text-sm p-4 crt-screen crt-flicker"
        style={{ background: colors.bg, color: colors.text }}
      >
        <pre className="boot-text">{bootText}</pre>
        {memoryCount > 0 && memoryCount < 65536 && (
          <span>{memoryCount} KB</span>
        )}
        {showCursor && <span className="typing-cursor" style={{ background: colors.text }} />}
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
        className="text-center py-1 font-bold"
        style={{ background: colors.text, color: colors.bg }}
      >
        CMOS Setup Utility - Copyright (C) 2014-2025, Brandon Bibbins Inc.
      </div>

      <div className="flex mt-2 gap-2" style={{ height: 'calc(100vh - 120px)' }}>
        {/* Left Menu */}
        <div className="w-64 border-2 flex flex-col" style={{ borderColor: colors.text }}>
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
                }}
                onMouseEnter={() => {
                  setFocusArea('menu');
                  setSelectedIndex(index);
                  setSelectedMenu(item.id);
                }}
                className="px-2 py-1 cursor-pointer"
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
          </div>
        </div>

        {/* Help Panel */}
        <div className="w-48 border-2 flex flex-col" style={{ borderColor: colors.text }}>
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
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="mt-2 border-2" style={{ borderColor: colors.text }}>
        <div className="flex justify-between items-center px-2 py-1">
          <div className="flex gap-6">
            <span><span style={{ color: colors.highlight }}>↑↓</span>:Select</span>
            <span><span style={{ color: colors.highlight }}>Enter</span>:Select</span>
            <span><span style={{ color: colors.highlight }}>Esc</span>:Menu</span>
            <span><span style={{ color: colors.accent }}>~</span>:Terminal</span>
          </div>
          <div className="flex items-center gap-4">
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
            <span style={{ color: colors.highlight }}>Time:</span> {time}
          </div>
        </div>
        <div
          className="px-2 py-1 text-center"
          style={{ background: colors.text, color: colors.bg }}
        >
          ▲▼ Select Menu Item │ Email: brandonbibbins@gmail.com │ Phone: (310) 749-0728
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
            className="w-full max-w-2xl h-96 mx-4 p-4 font-mono text-sm overflow-hidden flex flex-col terminal-window"
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
            <div className="flex-1 overflow-y-auto text-[#33ff33]">
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
