import { CONTACT } from "@/lib/site";
import { LeadForm } from "./LeadForm";
import { Section, SectionHeading } from "./Section";

export function LeadSection({
  title = "Yêu cầu báo giá & tư vấn dự án",
  intro = "Để lại thông tin dự án, chúng tôi sẽ liên hệ lại trong vòng 24h để hỗ trợ báo giá và tư vấn giải pháp tủ điện & thang máng cáp phù hợp.",
  defaultNeed = "khac",
  sourcePage,
}: {
  title?: string;
  intro?: string;
  defaultNeed?: string;
  sourcePage: string;
}) {
  return (
    <Section id="bao-gia" tone="muted">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Liên hệ nhanh" title={title} desc={intro} />
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-ink">Hotline kỹ thuật (24/7)</dt>
              <dd className="text-muted-foreground">{CONTACT.hotline}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Email</dt>
              <dd className="text-muted-foreground">{CONTACT.email}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Nhà máy</dt>
              <dd className="text-muted-foreground">{CONTACT.factory}</dd>
            </div>
          </dl>
        </div>
        <LeadForm defaultNeed={defaultNeed} sourcePage={sourcePage} />
      </div>
    </Section>
  );
}
