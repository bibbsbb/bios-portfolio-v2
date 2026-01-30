'use client';

import { useState } from 'react';
import { ResumeData } from '@/lib/types';

interface FriendlyExperienceProps {
  data: ResumeData;
}

export function FriendlyExperience({ data }: FriendlyExperienceProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A decade of building and scaling IT operations at high-growth companies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent transform md:-translate-x-1/2" />

          {data.experience.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full border-4 border-[#0a0a0a] ${
                  index === 0 ? 'bg-cyan-400' : 'bg-gray-600'
                } ${
                  index % 2 === 0
                    ? 'left-0 md:left-1/2 md:-translate-x-1/2'
                    : 'left-0 md:left-1/2 md:-translate-x-1/2'
                }`}
              />

              {/* Content card */}
              <div
                className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
              >
                <div
                  className={`glass-card p-6 cursor-pointer ${
                    expandedIndex === index ? 'border-cyan-400/30' : ''
                  }`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  {/* Years badge */}
                  <div className={`inline-block mb-3 ${index % 2 === 0 ? 'md:float-right md:ml-4' : ''}`}>
                    <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {exp.years}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 clear-both">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400 mb-3">{exp.company}</p>

                  {/* Expand indicator */}
                  <div className={`flex items-center gap-2 text-sm text-gray-500 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span>{expandedIndex === index ? 'Less' : 'More'}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>

                  {/* Expanded content */}
                  {expandedIndex === index && (
                    <div className={`mt-4 pt-4 border-t border-white/10 text-gray-400 text-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <p>
                        {index === 0 && 'Leading enterprise IT strategy, managing $500K+ budget, and driving AI-powered service delivery transformation.'}
                        {index === 1 && 'Scaled IT operations during rapid growth, implemented security frameworks, and achieved 73% phishing reduction.'}
                        {index === 2 && 'Built IT infrastructure from ground up, managed vendor relationships, and established ITIL practices.'}
                        {index === 3 && 'Managed endpoint deployment, identity solutions, and supported 200+ employees across multiple offices.'}
                        {index === 4 && 'First IT hire, built foundational systems, implemented backup solutions, and managed creative agency tech stack.'}
                        {index === 5 && 'Provided technical support and photography services, gaining early exposure to enterprise IT environments.'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Education & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {data.education.map((edu, index) => (
              <div key={index} className="glass-card p-6">
                <h4 className="font-bold text-white mb-1">{edu.degree}</h4>
                <p className="text-gray-400 text-sm">{edu.school}</p>
                <p className="text-cyan-400 text-xs mt-2">{edu.years}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {data.certs.map((cert, index) => (
              <span key={index} className="skill-badge">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
