import { ResumeData } from '@/lib/types';
import { Row } from '../Row';

interface ContactPanelProps {
  data: ResumeData;
}

export function ContactPanel({ data }: ContactPanelProps) {
  return (
    <div className="space-y-4">
      <div className="text-[#ffff55]">▸ Contact Information</div>
      <table className="w-full">
        <tbody>
          <Row label="Full Name" value={data.name} highlight />
          <Row label="Email Address" value={data.email} link={`mailto:${data.email}`} />
          <Row label="Phone Number" value={data.phone} link={`tel:${data.phone.replace(/[^0-9]/g, '')}`} />
          <Row label="LinkedIn" value={data.linkedin} link={`https://${data.linkedin}`} external />
          <Row label="Location" value={data.location} />
          <Row label="Current Role" value="IT Director @ Liquid I.V." highlight />
        </tbody>
      </table>

      <div className="border-t border-[#aaaaaa] pt-3 mt-4">
        <div className="text-[#ffff55] mb-2">▸ Location</div>
        <div className="bg-[#000055] border border-[#5555ff] p-3 text-center">
          <p className="text-[#55ffff] text-lg">Los Angeles, CA</p>
        </div>
      </div>

      <div className="border-t border-[#aaaaaa] pt-3 mt-4">
        <div className="text-[#ffff55] mb-2">▸ Preferred Contact Method</div>
        <div className="space-y-2">
          <p>
            <span className="text-[#55ffff]">[1]</span> Email:{' '}
            <a href={`mailto:${data.email}`} className="text-[#55ffff] hover:text-[#ffffff] underline cursor-pointer">
              {data.email}
            </a>
          </p>
          <p>
            <span className="text-[#55ffff]">[2]</span> Phone:{' '}
            <a href={`tel:${data.phone.replace(/[^0-9]/g, '')}`} className="text-[#55ffff] hover:text-[#ffffff] underline cursor-pointer">
              {data.phone}
            </a>
          </p>
          <p>
            <span className="text-[#55ffff]">[3]</span> LinkedIn:{' '}
            <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-[#55ffff] hover:text-[#ffffff] underline cursor-pointer">
              {data.linkedin}
            </a>
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <a
          href={`mailto:${data.email}`}
          className="bg-[#aaaaaa] text-[#0000aa] px-6 py-2 font-bold hover:bg-[#ffffff] cursor-pointer inline-block"
        >
          [ SEND EMAIL - CONNECT NOW ]
        </a>
        <a
          href="/Brandon_Bibbins_Resume.pdf"
          download
          className="bg-[#55ff55] text-[#000000] px-6 py-2 font-bold hover:bg-[#88ff88] cursor-pointer inline-block"
        >
          [ DOWNLOAD RESUME.PDF ]
        </a>
      </div>
    </div>
  );
}
