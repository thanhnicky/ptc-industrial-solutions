import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Timer, Wrench } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { LeadSection } from "@/components/site/LeadSection";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { IMAGES } from "@/components/site/images";
import { AUDIENCES, CONTACT, PROJECTS } from "@/lib/site";
import { Button } from "@/components/ui/button";

const TITLE = "Tủ điện công nghiệp & thang máng cáp | PTC Switchboard";
const DESC =
  "PTC sản xuất tủ điện hạ thế và thang máng cáp theo IEC 61439, ISO 9001:2015. Nhà máy 2.700m² tại TP.HCM, báo giá trong 24h cho nhà máy, KCN và dự án solar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: CONTACT.companyVi,
          alternateName: CONTACT.brand,
          telephone: CONTACT.hotline,
          email: CONTACT.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: CONTACT.headOffice,
            addressCountry: "VN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const HIGHLIGHTS = [
  { icon: Factory, title: "Nhà máy 2.700 m²", desc: "Xưởng cơ khí – sơn tĩnh điện – lắp ráp – thử nghiệm khép kín tại Linh Xuân, TP.HCM." },
  { icon: ShieldCheck, title: "ISO 9001:2015", desc: "Sản xuất theo IEC 61439-1&2, TCVN 7994-1:2009, QCVN 16:2023/BXD." },
  { icon: Timer, title: "Tiến độ thật", desc: "Cam kết tiến độ theo từng block, bàn giao cuốn chiếu bám sát thi công M&E." },
  { icon: Wrench, title: "Một đầu mối", desc: "Tủ điện + thang máng cáp cùng một nhà sản xuất, đồng bộ hồ sơ nghiệm thu." },
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-steel">
        <img
          src={IMAGES.hero}
          alt="Nhà máy sản xuất tủ điện PTC"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />
        <div className="container-page py-20 md:py-28">
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-steel-foreground/70 uppercase">
            {CONTACT.brand} — {CONTACT.slogan}
          </p>
          <h1 className="max-w-4xl text-3xl font-bold text-steel-foreground md:text-5xl md:leading-[1.08]">
            Nhà sản xuất tủ điện công nghiệp & thang máng cáp cho nhà máy, KCN và dự án solar
          </h1>
          <p className="mt-6 max-w-2xl text-base text-steel-foreground/85 md:text-lg">
            Thiết kế – sản xuất – thử nghiệm tủ bảng điện hạ thế và hệ thang máng cáp trọn gói. Báo
            giá kỹ thuật trong 24h, đồng hành cùng tổng thầu M&E và chủ đầu tư trên toàn quốc.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ZaloButton size="xl" location="hero" />
            <CallButton size="xl" location="hero" variant="outlineLight" />
            <Button asChild size="xl" variant="secondary">
              <Link to="/lien-he">
                Yêu cầu báo giá <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="border border-border bg-card p-6">
              <h.icon className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-base font-bold text-ink">{h.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Sản phẩm chính"
          title="Hai dòng sản phẩm cốt lõi của PTC"
          desc="Từ tủ phân phối tổng công suất lớn đến hệ thang máng cáp mạ kẽm nhúng nóng – tất cả sản xuất tại nhà máy PTC."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              to: "/tu-dien-cong-nghiep" as const,
              img: IMAGES.switchboard,
              title: "Tủ điện công nghiệp",
              items: ["Tủ MSB / MDB phân phối tổng", "Tủ DB, tủ tụ bù, tủ ATS", "Tủ điều khiển động cơ MCC, tủ VSD", "Tủ điện solar: DC, AC, hòa lưới"],
            },
            {
              to: "/thang-mang-cap" as const,
              img: IMAGES.cabletray,
              title: "Thang máng cáp",
              items: ["Thang cáp, máng cáp, khay cáp", "Mạ kẽm nhúng nóng / điện phân", "Sơn tĩnh điện theo màu dự án", "Phụ kiện: co, tê, giảm, nắp đậy"],
            },
          ].map((p) => (
            <article key={p.to} className="flex flex-col border border-border bg-card">
              <img src={p.img} alt={p.title} loading="lazy" className="aspect-[3/2] w-full object-cover" />
              <div className="rule-top flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-ink">{p.title}</h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-6 self-start">
                  <Link to={p.to}>
                    Xem chi tiết <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Khách hàng mục tiêu" title="PTC phục vụ ai?" />
        <div className="grid gap-6 lg:grid-cols-3">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="rule-top bg-card pt-6">
              <h3 className="text-lg font-bold text-ink">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Dự án tiêu biểu"
          title="Đã triển khai cho nhà máy, KCN và hệ solar quy mô lớn"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 6).map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
        <Button asChild variant="outline" className="mt-8">
          <Link to="/du-an">
            Xem tất cả dự án <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </Section>

      <LeadSection sourcePage="trang-chu" />
    </>
  );
}
