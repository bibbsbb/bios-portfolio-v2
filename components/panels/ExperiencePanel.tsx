'use client';

import { useState, useEffect, useRef } from 'react';
import { ResumeData } from '@/lib/types';

interface ExperiencePanelProps {
  data: ResumeData;
  focusArea: 'menu' | 'content';
  setFocusArea: (area: 'menu' | 'content') => void;
  contentIndex: number;
  setContentIndex: (index: number) => void;
}

const experienceDetails = [
  {
    company: 'Liquid I.V. (Unilever)',
    role: 'IT Director, Employee Technology & Experience',
    years: '2022-Present',
    description: 'Lead IT Support & Operations across helpdesk, systems operations, and asset management for health & wellness brand.',
    bullets: [
      'Built high-performing team delivering 30% operational efficiency gains',
      'Transformed IT from reactive to proactive, data-driven experience management',
      'Built self-service IT Hub achieving 40-60% zero-touch resolutions',
      'Design AI-first workflows with Claude, GPT for provisioning & triage',
      'Serve on AI Governance Board, guiding responsible AI adoption',
      'Spearheaded 1Password rollout, reducing phishing susceptibility by 73%',
      'Authored 350+ pages of policies and playbooks',
      'Built employee experience metrics tracking reliability & performance',
    ],
    tools: ['Jamf Pro', 'Okta', '1Password', 'CrowdStrike', 'Claude Code', 'Jira Service Management'],
  },
  {
    company: 'Princess Polly (International E-Commerce)',
    role: 'IT Director, Employee Experience Lead',
    years: '2020-2022',
    description: 'Built and scaled IT organization from one-person to multi-person team during hypergrowth.',
    bullets: [
      'Led global IT transformation across 14+ retail locations',
      'Improved resolution times by 45% with scalable hybrid support',
      'Implemented Okta identity management with role-based provisioning',
      'Delivered day-one access through automated onboarding workflows',
      'Created standardized global helpdesk framework with self-service',
      'Collaborated with C-suite contributing to 50%+ e-commerce expansion',
    ],
    tools: ['Jamf Pro', 'Okta', 'Google Workspace', 'Zendesk', 'Hexnode'],
  },
  {
    company: 'Drinks.com (E-Commerce Startup)',
    role: 'IT Manager',
    years: '2017-2020',
    description: 'Established IT infrastructure foundation for rapidly scaling e-commerce startup.',
    bullets: [
      'Reduced new hire time-to-productivity by 50%',
      'Deployed Okta with SSO across 20+ SaaS applications',
      'Built asset management and ticketing systems from scratch',
      'Developed self-service knowledge base deflecting 30% of tickets',
    ],
    tools: ['Okta', 'Google Workspace', 'Slack', 'Jamf', 'AWS', 'Wrike'],
  },
  {
    company: 'Playtika (Mobile Gaming)',
    role: 'Senior IT Technician',
    years: '2016-2017',
    description: 'Managed enterprise helpdesk operations for 200+ employee gaming company.',
    bullets: [
      'Maintained 95%+ SLA compliance with high-volume tickets',
      'Supported rapid company scaling through standardized IT processes',
      'Administered Google Workspace and endpoint management tools',
    ],
    tools: ['Google Workspace', 'Jamf', 'Active Directory', 'Zendesk'],
  },
  {
    company: 'David & Goliath (Advertising Agency)',
    role: 'IT Support Technician',
    years: '2014-2016',
    description: 'Delivered IT support for award-winning creative agency.',
    bullets: [
      'Managed Mac-heavy environment with Adobe Creative Suite',
      'Maintained hybrid Windows/macOS for 100+ creative professionals',
      'Created training materials improving technology adoption',
    ],
    tools: ['macOS', 'Adobe Creative Suite', 'Windows Server', 'Dropbox'],
  },
];

export function ExperiencePanel({ data, focusArea, setFocusArea, contentIndex, setContentIndex }: ExperiencePanelProps) {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (focusArea !== 'content') return;

      if (selectedExp !== null) {
        if (e.key === 'Escape' || e.key === 'Backspace' || e.key === 'ArrowLeft') {
          e.preventDefault();
          setSelectedExp(null);
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          detailRef.current?.scrollBy({ top: 60, behavior: 'smooth' });
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          detailRef.current?.scrollBy({ top: -60, behavior: 'smooth' });
        }
        return;
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setContentIndex(contentIndex > 0 ? contentIndex - 1 : experienceDetails.length - 1);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setContentIndex(contentIndex < experienceDetails.length - 1 ? contentIndex + 1 : 0);
      } else if (e.key === 'Enter' || e.key === 'ArrowRight') {
        e.preventDefault();
        setSelectedExp(contentIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [experienceDetails.length, contentIndex, selectedExp, focusArea, setContentIndex]);

  if (selectedExp !== null) {
    const exp = experienceDetails[selectedExp];
    return (
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div
            onClick={() => setSelectedExp(null)}
            className="bg-[#aaaaaa] text-[#0000aa] px-3 py-1 cursor-pointer hover:bg-[#cccccc] inline-block"
          >
            ◄ Back to List (Esc)
          </div>
          <div className="text-[#888888] text-xs">Use ↑↓ to scroll</div>
        </div>

        <div
          ref={detailRef}
          className="border border-[#aaaaaa] p-4 overflow-y-auto"
          style={{ maxHeight: 'calc(100vh - 220px)' }}
        >
          <div className="bg-[#aaaaaa] text-[#0000aa] px-2 py-1 text-xl font-bold mb-1 inline-block">
            {exp.company}
          </div>
          <div className="text-[#55ffff] text-lg mt-2">{exp.role}</div>
          <div className="text-[#ffff55] mb-4">{exp.years}</div>

          <div className="text-[#aaaaaa] mb-4 leading-relaxed">{exp.description}</div>

          <div className="text-[#ffff55] mb-2">▸ Key Accomplishments</div>
          <div className="mb-4 space-y-1">
            {exp.bullets.map((b, j) => (
              <div key={j} className="flex items-start gap-2">
                <span className="text-[#55ffff]">•</span>
                <span className="text-[#aaaaaa]">{b}</span>
              </div>
            ))}
          </div>

          <div className="text-[#ffff55] mb-2">▸ Tools & Technologies</div>
          <div className="flex flex-wrap gap-2">
            {exp.tools.map((tool, j) => (
              <span
                key={j}
                className="bg-[#000088] border border-[#aaaaaa] px-2 py-1 text-[#55ffff]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const isHighlighted = (i: number) => contentIndex === i && focusArea === 'content';

  return (
    <div className="space-y-2">
      <div className="text-[#ffff55]">▸ Professional Experience Timeline</div>
      <div className="text-[#888888] text-xs mb-2">
        {focusArea === 'content' ? 'Use ↑↓ to navigate, Enter to select' : '← Arrow right or hover to navigate'}
      </div>
      {experienceDetails.map((exp, i) => (
        <div
          key={i}
          onClick={() => {
            setFocusArea('content');
            setContentIndex(i);
            setSelectedExp(i);
          }}
          onMouseEnter={() => {
            setFocusArea('content');
            setContentIndex(i);
          }}
          className={`border p-2 cursor-pointer transition-colors ${
            isHighlighted(i)
              ? 'bg-[#aaaaaa] text-[#0000aa] border-[#aaaaaa]'
              : 'border-[#555555]'
          }`}
        >
          <div className="flex justify-between items-center">
            <span className={isHighlighted(i) ? 'text-[#0000aa] font-bold' : 'text-[#55ffff]'}>
              {isHighlighted(i) ? '► ' : '  '}{exp.company}
            </span>
            <span className={isHighlighted(i) ? 'text-[#000088]' : 'text-[#ffff55]'}>
              {exp.years}
            </span>
          </div>
          <div className={isHighlighted(i) ? 'text-[#000066] ml-4' : 'text-[#aaaaaa] ml-4'}>{exp.role}</div>
          {isHighlighted(i) && (
            <div className="text-[#000088] text-xs mt-1 ml-4">Press Enter to view details →</div>
          )}
        </div>
      ))}
    </div>
  );
}
