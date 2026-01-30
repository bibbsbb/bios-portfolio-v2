'use client';

import { ResumeData } from '@/lib/types';

interface FriendlyAchievementsProps {
  data: ResumeData;
}

export function FriendlyAchievements({ data }: FriendlyAchievementsProps) {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Impact & Results</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Measurable outcomes from leading IT transformations at scale.
          </p>
        </div>

        {/* Stats grid */}
        <div className="stats-grid">
          {data.achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center group"
            >
              {/* Large value */}
              <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
                {achievement.value}
              </div>
              {/* Label */}
              <div className="text-gray-400 text-sm">
                {achievement.label}
              </div>
              {/* Subtle accent line on hover */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-transparent mt-4 transition-all duration-300 mx-auto" />
            </div>
          ))}
        </div>

        {/* Highlight callout */}
        <div className="mt-16 glass-card p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-white font-light italic mb-4">
              &ldquo;Currently pioneering AI agent workflows using Claude, GPT, and Gemini to automate provisioning, triage, and employee support.&rdquo;
            </blockquote>
            <p className="text-cyan-400 text-sm font-medium">
              Leading the future of AI-powered IT operations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
