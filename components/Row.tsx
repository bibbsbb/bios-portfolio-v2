interface RowProps {
  label: string;
  value: string;
  highlight?: boolean;
  link?: string;
  external?: boolean;
}

export function Row({ label, value, highlight = false, link, external }: RowProps) {
  return (
    <tr className="border-b border-[#333388]">
      <td className="py-1 text-[#aaaaaa] w-40">{label}</td>
      <td className={`py-1 ${highlight ? 'text-[#55ff55]' : 'text-[#ffffff]'}`}>
        {link ? (
          <a
            href={link}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="text-[#55ffff] hover:text-[#ffffff] underline cursor-pointer"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </td>
    </tr>
  );
}
