'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ease } from './ui';

const TYPES = ['Website', 'Product or app', 'IT and strategy', 'Something else'];
const EMAIL = 'brandonbibbins@gmail.com';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [type, setType] = useState('Website');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const started = useRef(0);
  const form = useRef<HTMLFormElement>(null);

  // When the form appeared, for the too-fast-to-be-human spam check.
  useEffect(() => {
    started.current = Date.now();
  }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          website: data.get('website'),
          type,
          started: started.current,
        }),
      });
      if (res.ok) {
        setStatus('sent');
        form.current?.reset();
        return;
      }
      const j = await res.json().catch(() => ({}));
      setError(j.error === 'invalid' ? 'Please add your name, a valid email and a short message.' : '');
      setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  const field =
    'w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-base text-paper placeholder:text-fog outline-none transition-colors focus:border-white/40';

  return (
    <div className="relative rounded-[28px] border border-white/10 bg-ink-2 p-6 text-left sm:p-10">
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="sent"
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper text-2xl text-ink">✓</span>
            <h3 className="mt-6 font-display text-3xl font-light tracking-tight">Thanks, message sent.</h3>
            <p className="mt-3 max-w-sm text-mist">I’ll get back to you soon.</p>
            <button onClick={() => { setStatus('idle'); started.current = Date.now(); }} className="mt-8 text-sm text-mist underline-offset-4 hover:text-paper hover:underline">
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" ref={form} onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} noValidate={false}>
            <fieldset>
              <legend className="font-mono text-xs uppercase tracking-[0.2em] text-fog">What can I help with?</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {TYPES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={type === t}
                    onClick={() => setType(t)}
                    className={`rounded-full border px-4 py-2.5 text-sm transition-colors ${
                      type === t ? 'border-paper bg-paper text-ink' : 'border-white/15 text-mist hover:border-white/40 hover:text-paper'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Your name</span>
                <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
              </label>
              <label className="block">
                <span className="sr-only">Your email</span>
                <input name="email" type="email" required autoComplete="email" placeholder="Your email" className={field} />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="sr-only">Message</span>
              <textarea name="message" required minLength={10} rows={5} placeholder="Tell me a little about what you’re working on" className={`${field} resize-y`} />
            </label>
            {/* Hidden from people; bots tend to fill it. */}
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 opacity-0" />

            {status === 'error' && (
              <p role="alert" className="mt-4 text-sm text-[#f0a4a4]">
                {error || (
                  <>
                    That didn’t go through. Please email me at{' '}
                    <a href={`mailto:${EMAIL}`} className="underline underline-offset-4">{EMAIL}</a>.
                  </>
                )}
              </p>
            )}

            <div className="mt-6 flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-sm text-fog">
                Or email <a href={`mailto:${EMAIL}`} className="draw-line text-mist hover:text-paper">{EMAIL}</a>
              </p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
