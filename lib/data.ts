import { ResumeData, MenuItemConfig, ThemeColors, Theme, BootMessage } from './types';

export const resumeData: ResumeData = {
  name: 'Brandon Bibbins',
  title: 'IT Director',
  email: 'brandonbibbins@gmail.com',
  phone: '(310) 749-0728',
  linkedin: 'linkedin.com/in/brandonbibbins',
  location: 'Los Angeles, CA',

  summary: 'IT Support & Operations leader with 12+ years transforming employee technology experiences at high-growth SaaS and technology companies. Proven track record building and scaling IT teams through hypergrowth, shifting operations from reactive support to proactive, AI-powered service delivery. Expert in designing frictionless systems where security enables productivity. Deep expertise in Jamf Pro, Okta, Google Workspace, and Jira Service Management. Currently pioneering AI agent workflows using Claude, GPT, and Gemini to automate provisioning, triage, and employee support.',

  experience: [
    { company: 'Liquid I.V. (Unilever)', role: 'IT Director', years: '2022-Present' },
    { company: 'Princess Polly', role: 'IT Manager', years: '2020-2025' },
    { company: 'Drinks.com', role: 'IT Manager', years: '2017-2020' },
    { company: 'Playtika', role: 'IT Administrator', years: '2016-2017' },
    { company: 'David & Goliath', role: 'IT Administrator', years: '2014-2016' },
  ],

  achievements: [
    { label: 'IT Budget Managed', value: '$500K+' },
    { label: 'Team Growth', value: '1 → 5+' },
    { label: 'Global Locations', value: '14+' },
    { label: 'Employees Supported', value: '500+' },
    { label: 'Operational Efficiency', value: '+30%' },
    { label: 'Security Risk Reduction', value: '73%' },
    { label: 'Vendor Cost Savings', value: '20%+' },
    { label: 'Resolution Time Improvement', value: '45%' },
  ],

  skills: {
    'Endpoint Mgmt': 'Jamf Pro, Intune, Hexnode, Kandji, JumpCloud, Apple Business Manager',
    'Identity/Access': 'Okta, OneLogin, Azure AD/Entra ID, 1Password, SSO/SAML, SCIM, MFA',
    'Productivity': 'Google Workspace, Microsoft 365, Slack, Notion, Confluence, Zoom',
    'Security': 'CrowdStrike, Mimecast, Proofpoint, KnowBe4, SOC 2, NIST, ISO 27001',
    'ITSM': 'Jira Service Management, ServiceNow, Zendesk, Freshservice, ITIL',
    'AI/Automation': 'Claude Code, OpenAI GPT-4, Codex, Gemini, Workflow Automation',
    'Project Mgmt': 'Wrike, Asana, Monday.com, Trello, Linear',
    'Infrastructure': 'AWS, Azure, Windows Server, Active Directory, Cisco Meraki, Palo Alto, Fortinet, Ubiquiti',
  },

  competencies: [
    'IT Strategy & Leadership',
    'Team Building & Management',
    'Vendor Management',
    'Budget Planning',
    'Security Awareness',
    'SOC 2 / GDPR Compliance',
    'AI Governance',
    'Cross-functional Leadership',
  ],

  education: [
    { degree: 'B.S. Information Technology', school: 'Colorado State University', years: '2012-2014' },
    { degree: 'B.S. Computer Science', school: 'The Masters College', years: '2010-2012' },
  ],

  certs: ['CISSP (In Progress)', 'Jamf Certified', 'Okta Administrator', 'Google Workspace Administrator'],
};

export const menuItems: MenuItemConfig[] = [
  { id: 'main', label: 'Profile Overview' },
  { id: 'experience', label: 'Professional History' },
  { id: 'skills', label: 'Technical Expertise' },
  { id: 'achievements', label: 'Performance Metrics' },
  { id: 'contact', label: 'Connect' },
  { id: 'games', label: 'Arcade' },
];

export const themeColors: Record<Theme, ThemeColors> = {
  blue: { bg: '#0000aa', text: '#aaaaaa', highlight: '#ffff55', accent: '#55ffff' },
  amber: { bg: '#1a1000', text: '#ffaa00', highlight: '#ffff00', accent: '#ffcc00' },
  green: { bg: '#001a00', text: '#33ff33', highlight: '#00ff00', accent: '#55ff55' },
  white: { bg: '#0a0a0a', text: '#ffffff', highlight: '#00ffff', accent: '#ffff00' },
};

export const bootMessages: BootMessage[] = [
  { text: 'BibbinsTech BIOS v2.0', delay: 0 },
  { text: 'Copyright (C) 2014-2025, Brandon Bibbins Inc.', delay: 50 },
  { text: '', delay: 30 },
  { text: 'CPU: Brandon Core i7-12700K @ 3.6GHz... OK', delay: 40 },
  { text: 'Memory Test: ', delay: 40, counter: true },
  { text: '', delay: 30 },
  { text: 'Detecting Primary IDE Master... Career Drive [500GB]', delay: 40 },
  { text: 'Detecting Secondary IDE... Skills Module [256GB]', delay: 30 },
  { text: 'Detecting Tertiary IDE... Projects Archive [128GB]', delay: 30 },
  { text: '', delay: 25 },
  { text: 'PCI Device Listing:', delay: 30 },
  { text: '  Bus 00 Device 01: Jamf Pro Controller v11.0', delay: 25 },
  { text: '  Bus 00 Device 02: Okta Identity Module v2024.1', delay: 25 },
  { text: '  Bus 00 Device 03: Google Workspace Adapter', delay: 25 },
  { text: '  Bus 00 Device 04: CrowdStrike Falcon Sensor', delay: 25 },
  { text: '  Bus 00 Device 05: Claude AI Coprocessor', delay: 25 },
  { text: '', delay: 25 },
  { text: 'USB Devices:', delay: 30 },
  { text: '  Port 1: Leadership Module [Active]', delay: 25 },
  { text: '  Port 2: Problem Solving Unit [Active]', delay: 25 },
  { text: '  Port 3: Communication Interface [Active]', delay: 25 },
  { text: '', delay: 25 },
  { text: 'Initializing Network... LinkedIn Connected', delay: 30 },
  { text: 'Initializing Portfolio... brandonbibbins.io', delay: 30 },
  { text: 'CMOS Checksum... OK', delay: 30 },
  { text: 'NVRAM Integrity... OK', delay: 30 },
  { text: '', delay: 25 },
  { text: 'Loading Experience Data...', delay: 40 },
  { text: '', delay: 50, progressBar: true },
  { text: '', delay: 50 },
  { text: 'All systems operational.', delay: 50 },
  { text: '', delay: 30 },
  { text: 'Press any key to continue or wait...', delay: 50, blink: true },
];

export const fortunes = [
  '"Have you tried turning it off and on again?" - IT Proverb',
  '"It works on my machine." - Every Developer Ever',
  '"The cloud is just someone else\'s computer." - Ancient Wisdom',
  '"sudo make me a sandwich" - XKCD',
  '"There are only 10 types of people: those who understand binary and those who don\'t."',
  '"To err is human, to really mess up requires root access."',
  '"A user interface is like a joke. If you have to explain it, it\'s not that good."',
  '"Software is like entropy: difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics."',
];
