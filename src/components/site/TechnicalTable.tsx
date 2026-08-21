interface TechnicalTableProps {
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
  className?: string;
}

export function TechnicalTable({ headers, rows, caption, className = "" }: TechnicalTableProps) {
  return (
    <div className={`overflow-x-auto rounded-lg border border-border bg-card shadow-xs ${className}`}>
      <table className="w-full text-left text-sm">
        {caption && <caption className="p-3 text-left text-xs text-muted-foreground">{caption}</caption>}
        <thead className="border-b border-border bg-muted/60 text-xs font-semibold uppercase text-ink">
          <tr>
            {headers.map((h, idx) => (
              <th key={idx} scope="col" className="px-4 py-3 sm:px-6">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border/60 text-muted-foreground">
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="transition-colors hover:bg-muted/30">
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  className={`px-4 py-3 sm:px-6 ${cIdx === 0 ? "font-medium text-ink" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
