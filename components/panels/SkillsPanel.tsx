import { ResumeData } from '@/lib/types';

interface SkillsPanelProps {
  data: ResumeData;
}

export function SkillsPanel({ data }: SkillsPanelProps) {
  return (
    <div className="space-y-4">
      <div className="text-[#ffff55]">▸ Technical Skills & Tools</div>
      <table className="w-full">
        <tbody>
          {Object.entries(data.skills).map(([category, tools], i) => (
            <tr key={i} className="border-b border-[#333388]">
              <td className="py-1 text-[#55ffff] w-32">{category}</td>
              <td className="py-1">{tools}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="border-t border-[#aaaaaa] pt-3 mt-4">
        <div className="text-[#ffff55] mb-2">▸ Leadership Capabilities</div>
        <div className="grid grid-cols-2 gap-1">
          {data.competencies.map((comp, i) => (
            <div key={i}>
              <span className="text-[#55ff55]">[✓]</span> {comp}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#aaaaaa] pt-3 mt-4">
        <div className="text-[#ffff55] mb-2">▸ Specializations</div>
        <div className="text-[#55ffff]">
          <p>• AI-Powered IT Operations</p>
          <p>• Zero-Touch Deployment & Automation</p>
          <p>• Security Awareness & Compliance</p>
          <p>• Employee Experience Optimization</p>
        </div>
      </div>
    </div>
  );
}
