// Case studies shown on the homepage and at /work/[slug].
// Wording rules: describe Brandon's role only. Child Therapy Center LA: no sole-authorship
// or specific deliverables. Liquid I.V.: the public website is brand context only.

export type Project = {
  slug: string;
  name: string;
  index: string;
  headline: string;
  summary: string;
  role: string;
  scope: string[];
  url: string;
  domain: string;
  logo?: string;
  logoLight?: string;
  stage: string;
  stageInk: string;
  // A brand board replaces the browser and phone frames when a project has one.
  images: { desktop?: string; mobile?: string; full?: string; board?: string };
  overview: string[];
  contribution: { title: string; body: string }[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: 'daylogue',
    name: 'Daylogue',
    index: '01',
    headline: 'Founder-led, end to end.',
    summary: 'A digital journal I founded and built: brand, product design and full-stack development.',
    role: 'Founder',
    scope: ['Digital product', 'Brand experience', 'UX/UI design', 'Full-stack development'],
    url: 'https://daylogue.com',
    domain: 'daylogue.com',
    logo: '/work/daylogue/logo.png',
    logoLight: '/work/daylogue/logo-light.png',
    stage: '#efe6d8',
    stageInk: '#3b2a1f',
    images: { desktop: '/work/daylogue/desktop.jpg', mobile: '/work/daylogue/mobile.jpg', full: '/work/daylogue/full.jpg' },
    overview: [
      'Daylogue is a journal for writing your days in your own words, with an optional layer that helps you see the themes and patterns across your weeks.',
      'I founded it and lead the product from end to end: the brand, the experience, the interface and the code that runs it.',
    ],
    contribution: [
      { title: 'Brand experience', body: 'The voice and a warm, calm visual identity built for a private, personal product.' },
      { title: 'UX/UI design', body: 'The writing experience and the screens around it, designed for desktop and phone from the start.' },
      { title: 'Full-stack development', body: 'The product itself, from the data model to the interface, shipped and maintained in production.' },
    ],
  },
  {
    slug: 'therafocus',
    name: 'TheraFocus',
    index: '02',
    headline: 'Built for therapists. Designed for real life.',
    summary: 'A practice management platform for therapy practices. I design and build it, from the brand to the code.',
    role: 'Product design & full-stack development',
    scope: ['Brand & product design', 'UX/UI design', 'Full-stack development', 'Security by design'],
    url: 'https://therafocus.com',
    domain: 'therafocus.com',
    stage: '#f6efe4',
    stageInk: '#1f4a3d',
    images: { board: '/work/therafocus/board.jpg' },
    overview: [
      'TheraFocus is a practice management platform for therapy practices. It brings scheduling, notes, billing and a patient portal into one calm place, so clinicians can give their attention to care.',
      'I design and build it: the brand, the product experience and the full-stack application behind it.',
    ],
    contribution: [
      { title: 'Brand & product design', body: 'A warm, human identity and an interface designed to feel calm, not clinical, on desktop and phone.' },
      { title: 'Full-stack development', body: 'Scheduling, notes with AI assistance, billing and a patient portal, built as one application.' },
      { title: 'Security by design', body: 'Encryption, role-based access and audit logging, built to support HIPAA compliance.' },
    ],
    note: 'Brand board with sample data. No real patient information is shown.',
  },
  {
    slug: 'ctcla',
    name: 'Child Therapy Center LA',
    index: '03',
    headline: 'Digital strategy for a family practice.',
    summary: 'Digital experience and technology strategy for a therapy practice serving children, teens and families.',
    role: 'Digital experience & technology strategy',
    scope: ['Digital experience', 'Technology strategy', 'Website optimization', 'Client engagement'],
    url: 'https://childtherapycenterla.com',
    domain: 'childtherapycenterla.com',
    logo: '/work/ctcla/logo.png',
    stage: '#e3ebe6',
    stageInk: '#1f3a33',
    images: { desktop: '/work/ctcla/desktop.jpg', mobile: '/work/ctcla/mobile.jpg', full: '/work/ctcla/full.jpg' },
    overview: [
      'Child Therapy Center LA offers online and in-person therapy for children, teens and families across California.',
      'My work there focuses on the digital side of the practice: how families find it, understand it and take the first step.',
    ],
    contribution: [
      { title: 'Digital experience', body: 'Shaping how the practice shows up online, so families feel understood before the first call.' },
      { title: 'Technology strategy', body: 'Choosing and connecting the tools the practice runs on, with privacy and simplicity in mind.' },
      { title: 'Website optimization & engagement', body: 'Ongoing improvements to the website and to how the practice stays in touch with clients.' },
    ],
  },
  {
    slug: 'liquid-iv',
    name: 'Liquid I.V.',
    index: '04',
    headline: 'Technology at enterprise scale.',
    summary: 'IT leadership for a nationally recognized consumer brand, part of Unilever.',
    role: 'IT Director · 2022 to present',
    scope: ['IT leadership', 'Endpoint management', 'Identity & access', 'Security', 'AI-powered operations'],
    url: 'https://www.liquid-iv.com',
    domain: 'liquid-iv.com',
    logo: '/work/liquid-iv/logo.png',
    logoLight: '/work/liquid-iv/logo-light.png',
    stage: '#e6eef9',
    stageInk: '#0b2a5b',
    images: { desktop: '/work/liquid-iv/desktop.jpg', mobile: '/work/liquid-iv/mobile.jpg' },
    overview: [
      'Liquid I.V. is a nationally recognized consumer brand and part of Unilever. As IT Director, I lead the technology the company runs on.',
      'The work is about process and accountability at scale: secure access, reliable systems and support that gets out of people’s way.',
    ],
    contribution: [
      { title: 'Endpoint & identity', body: 'Devices, access and single sign-on managed so people are productive on day one and secure every day after.' },
      { title: 'Security that enables', body: 'Controls designed so security supports the work instead of slowing it down.' },
      { title: 'AI-powered operations', body: 'Using AI agent workflows to automate provisioning, triage and employee support.' },
    ],
    note: 'The Liquid I.V. website is shown for brand context. I lead IT; I didn’t design or build the public site.',
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
