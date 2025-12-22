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
    description: 'Lead IT Support & Operations across helpdesk, systems operations, and asset management for rapidly growing health & wellness brand acquired by Unilever. Oversee end-to-end employee technology experience from onboarding through daily operations.',
    bullets: [
      'Built and lead high-performing IT team delivering 30% operational efficiency gains while improving employee satisfaction scores across all touchpoints',
      'Transformed IT from reactive ticket-based support to proactive, data-driven experience management with predictive issue resolution',
      'Architected and own roadmap for company self-service IT Hub, achieving 40-60% zero-touch resolutions and significantly reducing employee friction',
      'Pioneer AI-first workflows where LLM agents (Claude, GPT, Gemini) handle provisioning, triage, policy interpretation, and tier-1 troubleshooting',
      'Serve on AI Governance Board, developing frameworks for responsible AI adoption that enable productivity without compromising security',
      'Spearheaded enterprise-wide 1Password rollout and security awareness training program, reducing phishing susceptibility by 73%',
      'Authored 350+ pages of IT policies, runbooks, and playbooks with design-first mindset ensuring compliance feels intuitive',
      'Built comprehensive employee experience metrics tracking reliability, performance, and effort, using data to identify friction before escalation',
      'Partner cross-functionally with Security, Engineering, HR, and Workplace teams to ensure seamless platform deployments',
      'Regularly brief executives on experience trends, operational risk, and strategic technology investments',
      'Manage $500K+ annual IT budget including hardware, software licensing, and vendor contracts',
      'Lead vendor evaluation and negotiations for enterprise tools, achieving 20%+ cost savings on key renewals',
      'Implemented CrowdStrike EDR across all endpoints, achieving 99.9% deployment coverage and real-time threat visibility',
      'Designed zero-touch Mac deployment pipeline reducing new hire setup time from 4 hours to under 30 minutes',
    ],
    tools: ['Jamf Pro', 'Okta', '1Password', 'CrowdStrike', 'Claude Code', 'Jira Service Management', 'Google Workspace', 'Slack', 'Notion'],
  },
  {
    company: 'Princess Polly (International E-Commerce)',
    role: 'IT Director, Employee Experience Lead',
    years: '2020-2025',
    description: 'Built and scaled IT organization from one-person operation to multi-person global team during explosive hypergrowth. Established IT as strategic partner to business expansion across retail, e-commerce, and international operations.',
    bullets: [
      'Scaled IT department from solo operator to multi-person team, hiring and developing future leaders with deep empathy for employee needs',
      'Led global IT transformation across 14+ retail locations and distribution centers spanning US, Australia, and international markets',
      'Improved mean time to resolution by 45% through scalable hybrid workforce support models and automated workflows',
      'Implemented Okta identity management with role-based provisioning and SCIM, enabling seamless access management at scale',
      'Delivered day-one productivity for new hires through fully automated onboarding workflows and zero-touch device deployment',
      'Created standardized global helpdesk framework with self-service capabilities, reducing recurring tickets by 35%',
      'Collaborated directly with C-suite leadership to align technology strategy with business growth, contributing to 50%+ e-commerce expansion',
      'Unified global procurement and hardware lifecycle operations, maintaining accurate asset tracking across international operations',
      'Designed and implemented network infrastructure for new retail locations, ensuring PCI compliance and reliable POS operations',
      'Built IT knowledge base with 200+ articles enabling employee self-service and reducing support dependency',
      'Managed relationships with 30+ technology vendors, negotiating contracts and ensuring SLA compliance',
      'Led SOC 2 Type II compliance initiatives for IT controls, security policies, and access management',
      'Implemented Hexnode MDM for BYOD program, balancing security requirements with employee flexibility',
      'Established IT metrics and reporting dashboards providing visibility into team performance and operational health',
    ],
    tools: ['Jamf Pro', 'Okta', 'Google Workspace', 'Zendesk', 'Hexnode', 'Slack', 'Shopify', 'NetSuite'],
  },
  {
    company: 'Drinks.com (E-Commerce Startup)',
    role: 'IT Manager',
    years: '2017-2020',
    description: 'Established IT infrastructure foundation for rapidly scaling e-commerce startup. Built all IT systems and processes from the ground up to support hypergrowth and positioned IT as strategic business partner.',
    bullets: [
      'Reduced new hire time-to-productivity by 50% through streamlined onboarding workflows and pre-configured systems',
      'Deployed Okta identity management platform with SSO integrations across 20+ SaaS applications, eliminating password fatigue',
      'Built asset management and ticketing systems from scratch, creating full visibility into hardware lifecycle and procurement needs',
      'Developed self-service knowledge base that deflected 30% of incoming tickets and empowered employees to resolve common issues',
      'Managed all IT operations as sole IT team member, supporting 50+ employees across Engineering, Sales, Marketing, and Operations',
      'Implemented endpoint management and security policies for Mac and Windows fleet ensuring compliance and data protection',
      'Established IT budget tracking and vendor management processes, optimizing software licensing costs by 15%',
      'Designed and deployed conference room AV systems and collaboration tools improving meeting efficiency',
      'Created IT onboarding and offboarding checklists ensuring consistent employee experience and security compliance',
      'Partnered with HR to automate provisioning workflows, reducing manual IT tasks by 40%',
      'Managed AWS infrastructure and cloud resources supporting e-commerce platform operations',
      'Led security awareness initiatives including phishing simulations and best practices training',
    ],
    tools: ['Okta', 'Google Workspace', 'Slack', 'Jamf', 'AWS', 'Wrike', 'Zendesk'],
  },
  {
    company: 'Playtika (Mobile Gaming)',
    role: 'Senior IT Technician',
    years: '2016-2017',
    description: 'Managed enterprise helpdesk operations for 200+ employee mobile gaming company during rapid growth phase. Served as escalation point for complex technical issues and VIP support.',
    bullets: [
      'Maintained 95%+ SLA compliance while handling high-volume ticket queues across Engineering, Design, Marketing, and Executive teams',
      'Supported rapid company scaling through standardized IT processes and comprehensive documentation',
      'Administered Google Workspace and endpoint management tools ensuring consistent employee experience across departments',
      'Provided white-glove VIP support for executive team and high-priority escalations requiring immediate resolution',
      'Managed new hire onboarding including hardware provisioning, account setup, and orientation training',
      'Configured and maintained developer workstations with specialized software for mobile game development',
      'Supported audio/visual equipment for all-hands meetings, product demos, and company events',
      'Collaborated with Security team on access reviews, offboarding procedures, and compliance audits',
      'Maintained inventory tracking for 200+ devices including laptops, monitors, and peripherals',
      'Troubleshot network connectivity issues and coordinated with facilities on infrastructure needs',
    ],
    tools: ['Google Workspace', 'Jamf', 'Active Directory', 'Zendesk', 'Slack', 'JIRA'],
  },
  {
    company: 'David & Goliath (Advertising Agency)',
    role: 'IT Support Technician',
    years: '2014-2016',
    description: 'Delivered IT support for award-winning creative advertising agency with demanding technical requirements. Supported high-pressure creative workflows and client-facing presentations.',
    bullets: [
      'Managed Mac-heavy environment supporting Adobe Creative Suite, video editing, 3D rendering, and motion graphics workflows',
      'Maintained hybrid Windows/macOS infrastructure for 100+ creative professionals including designers, copywriters, and producers',
      'Created training materials and conducted workshops improving technology adoption and reducing repeat support requests',
      'Supported high-profile client presentations and live production events with zero downtime and immediate on-site response',
      'Configured specialized creative workstations with high-performance specs for video editing and rendering projects',
      'Managed file server infrastructure and backup systems ensuring creative assets were protected and accessible',
      'Coordinated with external vendors for print production, broadcast delivery, and media asset management',
      'Supported remote shoots and off-site productions with mobile technology kits and connectivity solutions',
      'Maintained studio equipment including cameras, lighting, and audio gear for in-house production capabilities',
      'Provided after-hours support for critical campaign deadlines and client deliverables',
      'Troubleshot Adobe Creative Cloud licensing and plugin compatibility issues across creative teams',
      'Assisted with office relocations and buildouts including network infrastructure and workstation setup',
    ],
    tools: ['macOS', 'Adobe Creative Suite', 'Windows Server', 'Dropbox', 'Final Cut Pro', 'After Effects', 'Cinema 4D'],
  },
];

export function ExperiencePanel({ data, focusArea, setFocusArea, contentIndex, setContentIndex }: ExperiencePanelProps) {
  // Start with Liquid I.V. (index 0) expanded
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const detailRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (focusArea !== 'content') return;

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const newIndex = expandedIndex > 0 ? expandedIndex - 1 : experienceDetails.length - 1;
        setExpandedIndex(newIndex);
        setContentIndex(newIndex);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const newIndex = expandedIndex < experienceDetails.length - 1 ? expandedIndex + 1 : 0;
        setExpandedIndex(newIndex);
        setContentIndex(newIndex);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        setIsLocked(true);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setIsLocked(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedIndex, focusArea, setContentIndex]);

  const handleMouseEnter = (index: number) => {
    if (!isLocked) {
      setExpandedIndex(index);
      setContentIndex(index);
      setFocusArea('content');
    }
  };

  const handleClick = (index: number) => {
    setExpandedIndex(index);
    setContentIndex(index);
    setFocusArea('content');
    setIsLocked(true);
  };

  const exp = experienceDetails[expandedIndex];

  return (
    <div className="flex flex-col md:flex-row gap-3 h-full">
      {/* Left: Job list */}
      <div className="md:w-1/3 space-y-1">
        <div className="text-[#ffff55] text-sm mb-2">▸ Experience</div>
        {experienceDetails.map((item, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            className={`border p-2 cursor-pointer transition-all text-sm ${
              expandedIndex === i
                ? 'bg-[#aaaaaa] text-[#0000aa] border-[#aaaaaa]'
                : 'border-[#555555] hover:border-[#888888]'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className={expandedIndex === i ? 'text-[#0000aa] font-bold' : 'text-[#55ffff]'}>
                {expandedIndex === i ? '► ' : '  '}{item.company.split(' (')[0]}
              </span>
            </div>
            <div className={`text-xs ${expandedIndex === i ? 'text-[#000088]' : 'text-[#ffff55]'}`}>
              {item.years}
            </div>
          </div>
        ))}
        <div className="text-[#888888] text-xs mt-2">
          {isLocked ? '🔒 Locked (Esc to unlock)' : 'Hover to preview, click to lock'}
        </div>
      </div>

      {/* Right: Expanded details */}
      <div className="md:w-2/3 border border-[#aaaaaa] p-3 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <div ref={detailRef}>
          <div className="bg-[#aaaaaa] text-[#0000aa] px-2 py-1 text-lg font-bold mb-1 inline-block">
            {exp.company}
          </div>
          <div className="text-[#55ffff] mt-2">{exp.role}</div>
          <div className="text-[#ffff55] text-sm mb-3">{exp.years}</div>

          <div className="text-[#aaaaaa] mb-3 text-sm leading-relaxed">{exp.description}</div>

          <div className="text-[#ffff55] text-sm mb-2">▸ Key Accomplishments</div>
          <div className="mb-3 space-y-1">
            {exp.bullets.map((b, j) => (
              <div key={j} className="flex items-start gap-2 text-sm">
                <span className="text-[#55ffff]">•</span>
                <span className="text-[#aaaaaa]">{b}</span>
              </div>
            ))}
          </div>

          <div className="text-[#ffff55] text-sm mb-2">▸ Tools & Technologies</div>
          <div className="flex flex-wrap gap-2">
            {exp.tools.map((tool, j) => (
              <span
                key={j}
                className="bg-[#000088] border border-[#aaaaaa] px-2 py-1 text-[#55ffff] text-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
