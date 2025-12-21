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
        <div className="text-[#ffff55] mb-2">▸ Notable Accomplishments</div>
        <div className="space-y-2 text-sm">
          <p><span className="text-[#55ff55]">[✓]</span> Built AI-powered provisioning using Claude & GPT</p>
          <p><span className="text-[#55ff55]">[✓]</span> Scaled IT from 1-person to full team</p>
          <p><span className="text-[#55ff55]">[✓]</span> Achieved SOC 2 compliance</p>
          <p><span className="text-[#55ff55]">[✓]</span> Member of AI Governance Board</p>
          <p><span className="text-[#55ff55]">[✓]</span> Deployed Jamf Pro for 500+ devices</p>
          <p><span className="text-[#55ff55]">[✓]</span> Implemented Okta SSO for 20+ apps</p>
        </div>
      </div>

      <div className="border-t border-[#aaaaaa] pt-3 mt-4">
        <div className="text-[#ffff55] mb-2">▸ Impact Summary</div>
        <div className="bg-[#000055] border border-[#5555ff] p-3">
          <p>Transformed IT operations at multiple high-growth companies,</p>
          <p>reducing friction and enabling business scale through</p>
          <p>automation, security, and AI-powered workflows.</p>
        </div>
      </div>
    </div>
  );
}
