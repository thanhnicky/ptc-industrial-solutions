import { CheckCircle2 } from "lucide-react";

interface QuickSummaryProps {
  title?: string;
  bullets: string[];
  className?: string;
}

export function QuickSummary({
  title = "Tóm tắt nhanh (Dành cho Kỹ sư & Nhà thầu)",
  bullets,
  className = "",
}: QuickSummaryProps) {
  if (!bullets || bullets.length === 0) return null;

  return (
    <div
      className={`rounded-lg border border-primary/25 bg-primary/[0.03] p-5 sm:p-6 shadow-2xs ${className}`}
      data-aio-entity="quick-summary"
    >
      <h3 className="flex items-center gap-2 text-[13px] font-semibold tracking-wider text-ink uppercase font-mono">
        <span className="size-2 rounded-none bg-primary" aria-hidden="true" />
        {title}
      </h3>
      <ul className="mt-3.5 space-y-2.5 text-[14.5px] leading-relaxed text-foreground/90">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
