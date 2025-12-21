# BIOS Portfolio

A retro BIOS-themed interactive portfolio built with Next.js 14, React 19, and TypeScript.

## Features

- **Authentic BIOS Aesthetic** - CRT effects, scanlines, and classic color themes
- **Keyboard Navigation** - Full arrow key navigation like a real BIOS
- **Interactive Terminal** - Easter egg terminal with commands (`neofetch`, `pong`, etc.)
- **Multiple Themes** - Blue, Amber, Green, and White CRT color schemes
- **Sound Effects** - Optional retro beeps and clicks
- **Responsive Design** - Works on desktop and tablet

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel

## Project Structure

```
├── app/                 # Next.js App Router
│   ├── page.tsx        # Main BIOS interface
│   ├── layout.tsx      # Root layout with metadata
│   └── globals.css     # Global styles & CRT effects
├── components/         # React components
│   ├── panels/         # Content panel components
│   └── Row.tsx         # Reusable table row
├── lib/                # Utilities & data
│   ├── types.ts        # TypeScript interfaces
│   ├── data.ts         # Resume data & config
│   └── sounds.ts       # Audio utilities
└── public/             # Static assets
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `↑↓` | Navigate menu |
| `Enter` | Select item |
| `Esc` | Go back |
| `~` | Open terminal |

## Terminal Commands

```
help, whoami, skills, neofetch, ls, cat <file>, pong, reboot
```

## License

Private - All rights reserved
