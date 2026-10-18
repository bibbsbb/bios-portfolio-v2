// Case studies shown on the homepage and at /work/[slug].
// Wording rules: describe Brandon's role only. Child Therapy Center LA: website development
// and digital strategy, without claiming sole authorship. Liquid I.V.: the public website is
// brand context only.

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
    slug: 'audreys-nest',
    name: 'Audrey’s Nest',
    index: '03',
    headline: 'A calm, warm home for new mothers.',
    summary: 'Website design and development for a maternal wellness practice in Los Angeles.',
    role: 'Website design & development',
    scope: ['Website design', 'Website development', 'Content management', 'Local search'],
    url: 'https://audreysnest.com',
    domain: 'audreysnest.com',
    stage: '#f3eee3',
    stageInk: '#4b5a3c',
    images: { desktop: '/work/audreys-nest/desktop.jpg', mobile: '/work/audreys-nest/mobile.jpg', full: '/work/audreys-nest/full.jpg' },
    overview: [
      'Audrey’s Nest offers postpartum doula support and maternal wellness care in Los Angeles: occupational therapy, fertility Reiki and infant massage for new mothers.',
      'I designed and built the website: a soft, welcoming experience that explains each service clearly and makes it easy to book a free consultation.',
    ],
    contribution: [
      { title: 'Website design', body: 'A warm, natural look with arched photography and gentle type that works beautifully on phones.' },
      { title: 'Website development', body: 'A fast site built with Next.js: service pages, resources and a clear path to booking.' },
      { title: 'Easy to update', body: 'A simple content editor, so the practice can change services and articles without code.' },
    ],
  },
  {
    slug: 'ctcla',
    name: 'Child Therapy Center LA',
    index: '04',
    headline: 'A website for a family practice.',
    summary: 'Website development and digital strategy for a therapy practice serving children, teens and families.',
    role: 'Website development & digital strategy',
    scope: ['Website development', 'Digital experience', 'Technology strategy', 'Client engagement'],
    url: 'https://childtherapycenterla.com',
    domain: 'childtherapycenterla.com',
    logo: '/work/ctcla/logo.png',
    stage: '#e3ebe6',
    stageInk: '#1f3a33',
    images: { desktop: '/work/ctcla/desktop.jpg', mobile: '/work/ctcla/mobile.jpg', full: '/work/ctcla/full.jpg' },
    overview: [
      'Child Therapy Center LA offers online and in-person therapy for children, teens and families across California.',
      'I develop the practice’s website and lead its digital side: how families find it, understand it and take the first step.',
    ],
    contribution: [
      { title: 'Website development', body: 'Building and improving the website, so families can find the practice, understand it and reach out.' },
      { title: 'Digital experience', body: 'Shaping how the practice shows up online, so families feel understood before the first call.' },
      { title: 'Technology strategy', body: 'Choosing and connecting the tools the practice runs on, with privacy and simplicity in mind.' },
    ],
  },
  {
    slug: 'liquid-iv',
    name: 'Liquid I.V.',
    index: '05',
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
