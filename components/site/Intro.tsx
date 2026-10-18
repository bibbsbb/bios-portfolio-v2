'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Opening animation: the <b> mark draws itself, the name rises, a counter runs to 100,
// then the screen lifts away. Plays once per browser session; click or any key skips it.
export function Intro() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Already played this session: CSS keeps the overlay hidden, nothing to run.
    if (document.documentElement.dataset.intro === 'done') return;
    const start = performance.now();
    const total = 1900;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / total);
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const done = window.setTimeout(() => finish(), 2500);
    const skip = () => finish();
    window.addEventListener('keydown', skip, { once: true });
    function finish() {
      cancelAnimationFrame(raf);
      window.clearTimeout(done);
      window.removeEventListener('keydown', skip);
      try { sessionStorage.setItem('bb-intro', '1'); } catch {}
      setShow(false);
    }
    const el = document.getElementById('intro');
    el?.addEventListener('click', skip, { once: true });
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(done);
      window.removeEventListener('keydown', skip);
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.documentElement.dataset.intro = 'done';
        window.dispatchEvent(new Event('bb-intro-done'));
      }}
    >
      {show && (
        <motion.div
          id="intro"
          key="intro"
          className="intro fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center bg-ink"
          initial={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="flex items-center gap-3 text-paper sm:gap-5">
            <svg viewBox="0 0 40 80" className="h-16 w-8 sm:h-24 sm:w-12" fill="none">
              <motion.path
                d="M34 6 L8 40 L34 74"
                stroke="currentColor"
                strokeWidth="9"
                strokeLinecap="square"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
              />
            </svg>
            <motion.span
              className="font-display text-[88px] font-medium leading-none tracking-tight sm:text-[132px]"
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            >
              b
            </motion.span>
            <svg viewBox="0 0 40 80" className="h-16 w-8 sm:h-24 sm:w-12" fill="none">
              <motion.path
                d="M6 6 L32 40 L6 74"
                stroke="currentColor"
                strokeWidth="9"
                strokeLinecap="square"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
              />
            </svg>
          </div>

          <div className="mt-8 overflow-hidden">
            <motion.p
              className="font-display text-2xl font-light tracking-tight text-paper sm:text-3xl"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.75, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            >
              brandon bibbins
            </motion.p>
          </div>

          <div className="absolute inset-x-6 bottom-8 flex items-end justify-between font-mono text-xs uppercase tracking-[0.2em] text-fog sm:inset-x-12 sm:bottom-12">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
              Design · Build · Run
            </motion.span>
            <span className="tabular-nums text-paper">{String(count).padStart(3, '0')}</span>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-paper"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.9, ease: [0.33, 1, 0.68, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
