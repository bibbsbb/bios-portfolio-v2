'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/work';
import { BrowserFrame, Eyebrow, MaskLines, PhoneFrame, Reveal, ease } from './ui';
import { Footer } from './Home';

export function CaseStudy({ p, next }: { p: Project; next: Project }) {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-36 sm:px-10 sm:pb-24 sm:pt-44">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Link href="/#work" className="font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors hover:text-paper">
            ← All work
          </Link>
          <Eyebrow className="mt-10">
            {p.index} · {p.name}
          </Eyebrow>
        </motion.div>
        <h1 className="mt-6 max-w-5xl font-display text-[clamp(3rem,7.5vw,8rem)] font-light leading-[0.94] tracking-[-0.045em]">
          <MaskLines delay={0.1} lines={[p.headline]} />
        </h1>
        <motion.dl
          className="mt-14 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
        >
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.2em] text-fog">Role</dt>
            <dd className="mt-3 text-lg">{p.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.2em] text-fog">Focus</dt>
            <dd className="mt-3 text-lg text-mist">{p.scope.join(', ')}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.2em] text-fog">Website</dt>
            <dd className="mt-3 text-lg">
              <a href={p.url} target="_blank" rel="noreferrer" className="draw-line">
                {p.domain} ↗
              </a>
            </dd>
          </div>
        </motion.dl>
      </section>

      {/* Stage */}
      <section className="px-4 sm:px-10">
        <motion.div
          className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[28px] px-6 pb-0 pt-12 sm:px-16 sm:pt-20"
          style={{ background: p.stage }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease }}
        >
          {p.logo ? (
            <Image src={p.logo} alt={`${p.name} logo`} width={400} height={100} className="h-9 w-auto object-contain object-left sm:h-12" />
          ) : (
            <p className="font-display text-3xl font-medium tracking-tight sm:text-4xl" style={{ color: p.stageInk }}>{p.name}</p>
          )}
          {p.images.board ? (
            <div className="relative mt-10 pb-12 sm:mt-14 sm:pb-16">
              <Image src={p.images.board} alt={`${p.name} brand board`} width={1564} height={1050} priority className="h-auto w-full rounded-2xl shadow-[0_30px_80px_rgba(10,10,10,0.2)]" sizes="(min-width: 1440px) 1300px, 100vw" />
            </div>
          ) : (
            <div className="relative mt-10 sm:mt-14">
              {p.images.desktop && <BrowserFrame src={p.images.desktop} alt={`${p.name} homepage on desktop`} domain={p.domain} priority className="mr-[16%] translate-y-6" />}
              {p.images.mobile && (
                <motion.div
                  className="absolute bottom-0 right-0 w-[24%] max-w-[250px] translate-y-[8%]"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.1, delay: 0.9, ease }}
                >
                  <PhoneFrame src={p.images.mobile} alt={`${p.name} homepage on a phone`} />
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
        {p.note && <p className="mx-auto mt-5 max-w-[1440px] font-mono text-xs text-fog">{p.note}</p>}
      </section>

      {/* Overview */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-28 sm:px-10 sm:py-36 lg:grid-cols-[0.8fr_1.2fr]">
        <Eyebrow>Overview</Eyebrow>
        <div className="space-y-6">
          {p.overview.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="font-display text-2xl font-light leading-snug tracking-tight text-paper sm:text-4xl">{t}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contribution */}
      <section className="border-y border-white/5 bg-ink-2">
        <div className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 sm:py-36">
          <Eyebrow>What I do</Eyebrow>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/5 md:grid-cols-3">
            {p.contribution.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08} className="bg-ink-2">
                <div className="flex h-full min-h-[240px] flex-col justify-between gap-10 bg-ink-2 p-8 sm:p-10">
                  <span className="font-mono text-sm text-fog">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-3xl font-light tracking-tight">{c.title}</h3>
                    <p className="mt-4 leading-relaxed text-mist">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full page */}
      {p.images.full && (
        <section className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 sm:py-36">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>The full page</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-light tracking-[-0.03em] sm:text-5xl">Hover to scroll.</h2>
            </div>
            <p className="max-w-sm text-mist">Captured from the live site.</p>
          </div>
          <Reveal>
            <div className="scroll-shot relative overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.4)]" style={{ height: 560, ['--frame-h' as string]: '560px' }}>
              <Image src={p.images.full} alt={`Full ${p.name} homepage`} width={1440} height={6048} className="h-auto w-full" sizes="(min-width: 1440px) 1360px, 100vw" />
            </div>
          </Reveal>
        </section>
      )}

      {/* Next */}
      <section className="border-t border-white/5">
        <Link href={`/work/${next.slug}`} className="group mx-auto block max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
          <Eyebrow>Next project</Eyebrow>
          <p className="mt-6 flex items-center gap-6 font-display text-5xl font-light tracking-[-0.04em] sm:text-8xl">
            <span className="draw-line">{next.name}</span>
            <span className="transition-transform duration-500 group-hover:translate-x-3">→</span>
          </p>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
