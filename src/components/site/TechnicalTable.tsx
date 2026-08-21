interface TechnicalTableProps {
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
  className?: string;
}

export function TechnicalTable({ headers, rows, caption, className = "" }: TechnicalTableProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-border bg-card shadow-2xs ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px] text-left text-[14px]">
          {caption && (
            <caption className="p-3.5 text-left text-[12.5px] font-medium text-muted-foreground border-b border-border/50 bg-muted/20">
              {caption}
            </caption>
          )}
          <thead className="border-b border-border bg-muted/70 text-[12px] font-semibold tracking-wider uppercase text-ink">
            <tr>
              {headers.map((h, idx) => (
                <th key={idx} scope="col" className="px-5 py-3.5 whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60 text-muted-foreground">
            {rows.map((row, rIdx) => (
              <tr key={rIdx} className="h-12 transition-colors hover:bg-muted/30">
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className={`px-5 py-3 ${
                      cIdx === 0
                        ? "font-medium text-ink"
                        : "tech-value font-mono text-[13.5px] text-foreground"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-border/50 bg-muted/20 px-4 py-2 text-[11.5px] text-muted-foreground sm:hidden">
        <span>← Vuốt ngang để xem đầy đủ thông số</span>
        <span className="font-mono">IEC / TCVN</span>
      </div>
    </div>
  );
}
