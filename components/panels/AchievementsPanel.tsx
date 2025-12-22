import { ResumeData } from '@/lib/types';

interface AchievementsPanelProps {
  data: ResumeData;
}

export function AchievementsPanel({ data }: AchievementsPanelProps) {
  return (
    <div className="space-y-4">
      <div className="text-[#ffff55]">▸ Key Performance Metrics</div>
      <table className="w-full">
        <tbody>
          {data.achievements.map((a, i) => (
            <tr key={i} className="border-b border-[#333388]">
              <td className="py-2 text-[#aaaaaa]">{a.label}</td>
              <td className="py-2 text-right">
                <span className="bg-[#005500] text-[#55ff55] px-2 py-1">
                  {a.value}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="border-t border-[#aaaaaa] pt-3 mt-4">
        <div className="text-[#ffff55] mb-2">▸ Leadership & Strategic Impact</div>
        <div className="space-y-2 text-sm">
          <p><span className="text-[#55ff55]">[✓]</span> Executive Leadership: Regular briefings to C-suite on technology strategy, risk, and investment priorities</p>
          <p><span className="text-[#55ff55]">[✓]</span> Team Development: Built and scaled IT organizations from ground up, mentoring future leaders</p>
          <p><span className="text-[#55ff55]">[✓]</span> AI Governance: Founding member of enterprise AI Governance Board, shaping responsible adoption policies</p>
          <p><span className="text-[#55ff55]">[✓]</span> Vendor Strategy: Managed 30+ vendor relationships, negotiating enterprise contracts and SLAs</p>
          <p><span className="text-[#55ff55]">[✓]</span> Compliance Leadership: Led SOC 2 Type II and PCI DSS compliance initiatives across organizations</p>
          <p><span className="text-[#55ff55]">[✓]</span> Cross-Functional Partnership: Aligned IT strategy with HR, Security, Finance, and Operations stakeholders</p>
          <p><span className="text-[#55ff55]">[✓]</span> Global Operations: Standardized IT delivery across US, Australia, and international markets</p>
          <p><span className="text-[#55ff55]">[✓]</span> Digital Transformation: Pioneered AI-first IT service delivery using Claude, GPT, and automation</p>
        </div>
      </div>

      <div className="border-t border-[#aaaaaa] pt-3 mt-4">
        <div className="text-[#ffff55] mb-2">▸ Executive Summary</div>
        <div className="bg-[#000055] border border-[#5555ff] p-3 text-sm">
          <p className="mb-2">Strategic IT leader with proven ability to scale technology operations</p>
          <p className="mb-2">through hypergrowth while driving measurable business outcomes.</p>
          <p className="mb-2">Expert in building high-performing teams, optimizing vendor investments,</p>
          <p>and transforming IT from cost center to strategic enabler.</p>
        </div>
      </div>
    </div>
  );
}
