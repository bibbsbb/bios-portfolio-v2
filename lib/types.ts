export type MenuItem = 'main' | 'experience' | 'skills' | 'achievements' | 'contact';
export type Theme = 'blue' | 'amber' | 'green' | 'white';
export type BootPhase = 'booting' | 'ready';
export type SoundType = 'boot' | 'click' | 'enter' | 'error';

export interface MenuItemConfig {
  id: MenuItem;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  years: string;
}

export interface Achievement {
  label: string;
  value: string;
}

export interface Education {
  degree: string;
  school: string;
  years: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  summary: string;
  experience: Experience[];
  achievements: Achievement[];
  skills: Record<string, string>;
  competencies: string[];
  education: Education[];
  certs: string[];
}

export interface TerminalEntry {
  cmd: string;
  output: string;
}

export interface PongScore {
  player: number;
  cpu: number;
}

export interface BallPosition {
  x: number;
  y: number;
}

export interface BallVelocity {
  x: number;
  y: number;
}

export interface ThemeColors {
  bg: string;
  text: string;
  highlight: string;
  accent: string;
}
