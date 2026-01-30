'use client';

import { ResumeData } from '@/lib/types';

interface FriendlySkillsProps {
  data: ResumeData;
}

const skillIcons: Record<string, string> = {
  'Endpoint Mgmt': '💻',
  'Identity/Access': '🔐',
  'Productivity': '📊',
  'Security': '🛡️',
  'ITSM': '🎫',
  'AI/Automation': '🤖',
  'Project Mgmt': '📋',
  'Infrastructure': '🌐',
};

export function FriendlySkills({ data }: FriendlySkillsProps) {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Comprehensive technology stack spanning enterprise IT operations, security, and AI automation.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(data.skills).map(([category, skillList]) => (
            <div key={category} className="glass-card p-6">
              {/* Icon and category */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skillIcons[category] || '⚡'}</span>
                <h3 className="font-bold text-white">{category}</h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {skillList.split(', ').map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core competencies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {data.competencies.map((competency, index) => (
              <span
                key={index}
                className="skill-badge text-base"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
