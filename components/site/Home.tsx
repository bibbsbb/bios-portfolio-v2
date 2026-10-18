'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { projects, type Project } from '@/lib/work';
import { resumeData } from '@/lib/data';
import { BrowserFrame, Eyebrow, MaskLines, PhoneFrame, Reveal, ease, useIntroDone } from './ui';

/* ---------- Hero ---------- */

export function Hero() {
  const play = useIntroDone();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const markY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Soft spotlight that follows the pointer.
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const sx = useSpring(mx, { stiffness: 120, damping: 30 });
  const sy = useSpring(my, { stiffness: 120, damping: 30 });
  const spot = useTransform([sx, sy], ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(245,245,244,0.07), transparent 60%)`);
  const onMove = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section ref={ref} onMouseMove={onMove} className="grain relative flex min-h-[100svh] flex-col overflow-hidden">
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spot }} />
      <motion.div
        className="pointer-events-none absolute -right-[8vw] top-1/2 hidden -translate-y-1/2 text-[#161616] lg:block"
        style={{ y: markY }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={play ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.6, ease }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 220 160" className="w-[46vw] max-w-[760px]" fill="none">
          <path d="M60 14 L14 80 L60 146" stroke="currentColor" strokeWidth="14" />
          <path d="M160 14 L206 80 L160 146" stroke="currentColor" strokeWidth="14" />
          <text x="110" y="128" textAnchor="middle" fill="currentColor" style={{ font: '500 150px var(--font-display)' }}>
            b
          </text>
        </svg>
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-6 pb-14 pt-32 sm:px-10 sm:pb-20">
        <motion.div
          className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 sm:mb-14"
          initial={{ opacity: 0 }}
          animate={play ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Eyebrow>Brandon Bibbins · Los Angeles</Eyebrow>
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-mist">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Taking on select projects
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(3.2rem,9.4vw,10rem)] font-light leading-[0.92] tracking-[-0.045em] text-paper">
          <MaskLines
            play={play}
            delay={0.15}
            lines={[
              'I design, build',
              <>
                and <span className="text-fog">run</span> digital
              </>,
              'products.',
            ]}
          />
        </h1>

        <div className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            className="max-w-xl text-lg leading-relaxed text-mist sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={play ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.6, ease }}
          >
            From the first sketch to the code in production, and the systems that keep it running. Brand, UX/UI, full-stack
            development and 12+ years of IT leadership.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={play ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.75, ease }}
          >
            <Link href="/#work" className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-4 text-sm font-medium text-ink">
              See the work
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </Link>
            <Link href="/#contact" className="inline-flex items-center rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-paper transition-colors hover:border-white/40">
              Get in touch
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- Marquee ---------- */

const disciplines = ['Brand experience', 'UX/UI design', 'Full-stack development', 'Technology strategy', 'IT leadership', 'AI-powered operations'];

export function Marquee() {
  const row = [...disciplines, ...disciplines];
  return (
    <div className="overflow-hidden border-y border-white/5 py-6" aria-label={disciplines.join(', ')}>
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap" aria-hidden="true">
        {row.map((d, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-3xl font-light tracking-tight text-mist sm:text-5xl">
            {d}
            <span className="text-lg text-fog sm:text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Work ---------- */

function ProjectTile({ p }: { p: Project }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);
  const phoneY = useTransform(scrollYProgress, [0, 1], ['22%', '-14%']);

  return (
    <Reveal>
      <Link
        ref={ref}
        href={`/work/${p.slug}`}
        className="group relative grid overflow-hidden rounded-[28px] lg:grid-cols-[0.85fr_1.15fr]"
        style={{ background: p.stage, color: p.stageInk }}
      >
        <div className="relative z-10 flex flex-col justify-between gap-10 p-8 sm:p-12 lg:p-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">
              {p.index} · {p.role}
            </p>
            {p.logo ? (
              <Image src={p.logo} alt={`${p.name} logo`} width={400} height={100} className="mt-8 h-9 w-auto object-contain object-left sm:h-11" />
            ) : (
              <p className="mt-8 font-display text-3xl font-medium tracking-tight sm:text-4xl">{p.name}</p>
            )}
            <h3 className="mt-8 font-display text-4xl font-light leading-[1.02] tracking-[-0.03em] sm:text-6xl">{p.headline}</h3>
            <p className="mt-6 max-w-md text-base leading-relaxed opacity-75 sm:text-lg">{p.summary}</p>
          </div>
          <div>
            <ul className="flex flex-wrap gap-2">
              {p.scope.slice(0, 4).map((s) => (
                <li key={s} className="rounded-full border border-current/20 px-3 py-1.5 text-xs" style={{ borderColor: `${p.stageInk}33` }}>
                  {s}
                </li>
              ))}
            </ul>
            <span className="mt-8 inline-flex items-center gap-3 text-sm font-medium">
              View case study
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">→</span>
            </span>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden sm:min-h-[480px] lg:min-h-[620px]">
          {p.images.board ? (
            <motion.div style={{ y }} className="absolute inset-y-8 left-6 right-6 transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:inset-y-12 sm:left-10 sm:right-10">
              <Image src={p.images.board} alt={`${p.name} brand board`} fill className="rounded-2xl object-cover object-left-top shadow-[0_30px_80px_rgba(10,10,10,0.2)]" sizes="(min-width: 1024px) 55vw, 100vw" />
            </motion.div>
          ) : (
            <>
              <motion.div style={{ y }} className="absolute inset-y-10 left-8 right-[-18%] transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:left-12 lg:inset-y-16">
                {p.images.desktop && <BrowserFrame src={p.images.desktop} alt={`${p.name} homepage on desktop`} domain={p.domain} />}
              </motion.div>
              {p.images.mobile && (
                <motion.div style={{ y: phoneY }} className="absolute bottom-6 right-6 w-[26%] max-w-[210px] sm:right-10">
                  <PhoneFrame src={p.images.mobile} alt={`${p.name} homepage on a phone`} />
                </motion.div>
              )}
            </>
          )}
        </div>
      </Link>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1440px] scroll-mt-20 px-4 py-28 sm:px-10 sm:py-40">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6 px-2 sm:mb-20 sm:px-0">
        <div>
          <Eyebrow>Selected work</Eyebrow>
          <Reveal>
            <h2 className="mt-5 font-display text-5xl font-light leading-none tracking-[-0.04em] sm:text-7xl">
              Four highlight projects<span className="text-fog">, 2026.</span>
            </h2>
          </Reveal>
        </div>
        <p className="max-w-sm text-mist">Two products I’ve built, a practice I advise, and the enterprise IT I lead.</p>
      </div>
      <div className="flex flex-col gap-6 sm:gap-8">
        {projects.map((p) => (
          <ProjectTile key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}

/* ---------- Approach ---------- */

const steps = [
  { n: '01', t: 'Understand', d: 'Start with the people: their goals, their story and the way they actually work.' },
  { n: '02', t: 'Design', d: 'A clear, considered experience that feels like it belongs to them, on every screen.' },
  { n: '03', t: 'Build', d: 'Fast, accessible sites and apps on a modern stack the team can keep up themselves.' },
  { n: '04', t: 'Run', d: 'Security, support and systems that keep it working long after launch day.' },
];

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 border-t border-white/5 bg-ink-2">
      <div className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 sm:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Approach</Eyebrow>
            <Reveal>
              <h2 className="mt-5 font-display text-5xl font-light leading-[0.98] tracking-[-0.04em] sm:text-7xl">
                Understand first.
                <br />
                Then make it <span className="italic text-mist">beautiful.</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/5 sm:grid-cols-2">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="bg-ink-2">
                <div className="group flex h-full min-h-[260px] flex-col justify-between bg-ink-2 p-8 transition-colors duration-500 hover:bg-ink-3 sm:p-10">
                  <span className="font-mono text-sm text-fog">{s.n}</span>
                  <div>
                    <h3 className="font-display text-3xl font-light tracking-tight sm:text-4xl">{s.t}</h3>
                    <p className="mt-4 leading-relaxed text-mist">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */

const stats = [
  { v: '12+', l: 'Years in technology' },
  { v: '500+', l: 'Employees supported' },
  { v: '14+', l: 'Global locations' },
];

const capabilities = [
  { t: 'Design', items: ['Brand experience', 'UX/UI design', 'Web and mobile interfaces'] },
  { t: 'Build', items: ['Next.js and React', 'TypeScript', 'Tailwind CSS', 'Vercel'] },
  { t: 'Run', items: ['Jamf Pro and Okta', 'Google Workspace', 'Jira Service Management', 'CrowdStrike'] },
  { t: 'AI', items: ['Claude, GPT and Gemini', 'Agent workflows', 'AI governance'] },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1440px] scroll-mt-20 px-6 py-28 sm:px-10 sm:py-40">
      <Eyebrow>Experience</Eyebrow>
      <Reveal>
        <h2 className="mt-5 max-w-4xl font-display text-5xl font-light leading-[0.98] tracking-[-0.04em] sm:text-7xl">
          A builder’s eye, with the discipline of <span className="text-mist">enterprise IT.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/5 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.08} className="bg-ink">
            <div className="bg-ink p-8 sm:p-10">
              <p className="font-display text-6xl font-light tracking-[-0.04em] sm:text-7xl">{s.v}</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-fog">{s.l}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <ul className="border-t border-white/10">
          {resumeData.experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.04} y={16}>
              <li className="group relative grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 overflow-hidden border-b border-white/10 py-6 sm:grid-cols-[1.1fr_1fr_auto]">
                <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-white/[0.03] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="relative font-display text-2xl font-light tracking-tight sm:text-3xl">{e.company}</span>
                <span className="relative order-3 col-span-2 text-mist sm:order-none sm:col-span-1">{e.role}</span>
                <span className="relative font-mono text-sm tabular-nums text-fog">{e.years.replace('-', ' – ')}</span>
              </li>
            </Reveal>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 self-start">
          {capabilities.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-fog">{c.t}</p>
              <ul className="mt-4 space-y-2">
                {c.items.map((it) => (
                  <li key={it} className="text-paper">
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-paper text-ink">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-28 sm:px-10 sm:py-40 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          className="relative overflow-hidden rounded-[28px]"
          initial={{ clipPath: 'inset(12% 12% 12% 12% round 28px)' }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 28px)' }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1.4, ease }}
        >
          <motion.div initial={{ scale: 1.15 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, ease }}>
            <Image src="/about/brandon.jpg" alt="Brandon Bibbins, arms crossed, in a black sweater" width={1254} height={1254} className="h-auto w-full" sizes="(min-width: 1024px) 40vw, 100vw" />
          </motion.div>
        </motion.div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/50">About</p>
          <Reveal>
            <h2 className="mt-5 font-display text-5xl font-light leading-[0.98] tracking-[-0.04em] sm:text-7xl">Hi, I’m Brandon.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-black/70">
              <p>
                I’m a designer and developer in Los Angeles with more than twelve years in technology. I like the whole arc of a
                project: understanding what people need, designing something they’re proud of, building it properly and keeping it
                running.
              </p>
              <p>
                By day I lead IT for a national consumer brand. Alongside that, I founded Daylogue and partner with organizations on
                their websites and digital experience.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-12 grid max-w-xl gap-8 border-t border-black/10 pt-8 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.2em] text-black/50">Education</dt>
                <dd className="mt-3 text-black/80">
                  {resumeData.education[0].degree}
                  <br />
                  {resumeData.education[0].school}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.2em] text-black/50">Certifications</dt>
                <dd className="mt-3 text-black/80">{resumeData.certs.join(' · ')}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact + footer ---------- */

export function Contact() {
  return (
    <section id="contact" className="grain relative scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-28 sm:px-10 sm:pt-40">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="mt-6 font-display text-[clamp(3.4rem,10vw,11rem)] font-light leading-[0.9] tracking-[-0.05em]">
          <MaskLines play lines={['Let’s build', <span key="b" className="text-fog">something good.</span>]} />
        </h2>
        <Reveal delay={0.1}>
          <a
            href={`mailto:${resumeData.email}`}
            className="group mt-14 inline-flex items-center gap-4 font-display text-2xl font-light tracking-tight sm:text-4xl"
          >
            <span className="draw-line">{resumeData.email}</span>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-paper text-xl text-ink transition-transform duration-500 group-hover:rotate-[-45deg] sm:h-14 sm:w-14">
              →
            </span>
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-3">
            <a href={`https://${resumeData.linkedin}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm transition-colors hover:border-white/40">
              LinkedIn ↗
            </a>
            <a href="/Brandon_Bibbins_Resume.pdf" target="_blank" className="rounded-full border border-white/15 px-6 py-3 text-sm transition-colors hover:border-white/40">
              Résumé (PDF) ↗
            </a>
          </div>
        </Reveal>
      </div>
      <Footer />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 border-t border-white/5 px-6 py-8 font-mono text-xs text-fog sm:px-10">
      <span>© {new Date().getFullYear()} Brandon Bibbins · {resumeData.location}</span>
      <a href="/terminal" className="transition-colors hover:text-paper" title="Open the original BIOS-style site (or press `)">
        &gt;_ terminal
      </a>
    </footer>
  );
}
