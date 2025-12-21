import { ResumeData } from '@/lib/types';
import { Row } from '../Row';

interface MainPanelProps {
  data: ResumeData;
}

export function MainPanel({ data }: MainPanelProps) {
  return (
    <div className="space-y-4">
      <table className="w-full">
        <tbody>
          <Row label="Candidate Name" value={data.name} highlight />
          <Row label="Current Position" value={data.title} />
          <Row label="Years Experience" value="12+ Years" highlight />
          <Row label="Current Employer" value="Liquid I.V. (Unilever)" />
          <Row label="Location" value={data.location} />
          <Row label="Education" value={`${data.education[0].degree} - ${data.education[0].school}`} />
        </tbody>
      </table>

      <div className="border-t border-[#aaaaaa] pt-3 mt-3">
        <div className="text-[#ffff55] mb-2">▸ Professional Summary</div>
        <div className="text-[#aaaaaa] leading-relaxed text-sm">
          {data.summary}
        </div>
      </div>

      <div className="border-t border-[#aaaaaa] pt-3 mt-3">
        <div className="text-[#ffff55] mb-2">▸ Core Competencies</div>
        <div className="grid grid-cols-2 gap-1">
          {data.competencies.map((comp, i) => (
            <div key={i} className="text-[#55ffff]">• {comp}</div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#aaaaaa] pt-3 mt-3">
        <div className="text-[#ffff55] mb-2">▸ Certifications</div>
        {data.certs.map((cert, i) => (
          <div key={i} className="text-[#55ffff]">  [{i + 1}] {cert}</div>
        ))}
      </div>
    </div>
  );
}
