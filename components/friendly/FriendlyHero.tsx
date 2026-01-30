'use client';

import { ResumeData } from '@/lib/types';

interface FriendlyHeroProps {
  data: ResumeData;
  onSwitchToTerminal: () => void;
}

export function FriendlyHero({ data, onSwitchToTerminal }: FriendlyHeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#0d1117]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Animated intro text */}
        <p className="text-cyan-400 text-sm md:text-base font-medium tracking-wider uppercase mb-4">
          IT Director & Technology Leader
        </p>

        {/* Name with gradient */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="gradient-text">{data.name}</span>
        </h1>

        {/* Summary */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          {data.summary.split('.')[0]}.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">12+</div>
            <div className="text-sm text-gray-500">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-sm text-gray-500">Employees Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">14+</div>
            <div className="text-sm text-gray-500">Global Locations</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${data.email}`}
            className="friendly-btn-primary"
          >
            Get in Touch
          </a>
          <button
            onClick={onSwitchToTerminal}
            className="friendly-btn-outline"
          >
            View Terminal Mode
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-600"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
