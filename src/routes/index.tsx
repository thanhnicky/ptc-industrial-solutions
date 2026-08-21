import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { LeadForm } from "@/components/site/LeadForm";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { IMAGES } from "@/components/site/images";
import {
  AUDIENCES,
  CAPABILITIES,
  CONTACT,
  PROCESS,
  PRODUCT_LINES,
  PROJECTS,
  STANDARDS,
  STATS,
  TRUST_STRIP,
} from "@/lib/site";
import { Button } from "@/components/ui/button";

const TITLE = "Tủ điện công nghiệp & thang máng cáp | PTC Switchboard";
const DESC =
  "PTC sản xuất tủ điện hạ thế (MSB, MDB, DB, ATS, MCC, VSD) và thang máng cáp theo IEC 61439, ISO 9001:2015. Nhà máy 2.700 m² tại TP.HCM, báo giá kỹ thuật trong 24h.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://ptc-industrial-solutions.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://ptc-industrial-solutions.lovable.app/" }],
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

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow ${light ? "text-steel-foreground/50" : "text-primary"}`}>{children}</p>
  );
}

function Index() {
  const [lead, ...rest] = PROJECTS.slice(0, 5);
  if (!lead) return null;

  return (
    <>
      {/* 2. HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="hairline-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="container-wide relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
          <div className="rise-in max-w-2xl">
            <Eyebrow>{CONTACT.brand} — {CONTACT.slogan}</Eyebrow>
            <h1 className="mt-6 text-[2rem] leading-[1.08] font-semibold text-ink sm:text-5xl lg:text-[3.4rem]">
              Tủ điện hạ thế &amp; thang máng cáp
              <span className="block text-primary">đạt chuẩn IEC, giao đúng tiến độ</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-[17px]">
              Thiết kế – sản xuất – thử nghiệm trọn gói tại nhà máy PTC. Một đầu mối cho tổng thầu
              M&amp;E, EPC solar và chủ đầu tư. Báo giá kỹ thuật trong 24h làm việc.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ZaloButton size="xl" label="Nhắn Zalo gửi bản vẽ" location="hero" />
              <CallButton size="xl" location="hero" />
              <Link
                to="/nang-luc-san-xuat"
                className="group inline-flex items-center gap-1.5 px-1 text-sm font-semibold text-ink"
              >
                Năng lực nhà máy
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="rise-in relative">
            <div className="grid grid-cols-5 grid-rows-5 gap-3 lg:h-[30rem]">
              <img
                src={IMAGES.hero}
                alt="Nhà máy sản xuất tủ điện PTC tại TP.HCM"
                width={1400}
                height={1000}
                className="col-span-5 row-span-3 h-full w-full object-cover"
              />
              <img
                src={IMAGES.busbar}
                alt="Thanh cái đồng và đấu nối trong tủ điện hạ thế PTC"
                loading="lazy"
                width={1408}
                height={1008}
                className="col-span-3 row-span-2 h-full w-full object-cover"
              />
              <img
                src={IMAGES.tray}
                alt="Hệ thang máng cáp mạ kẽm nhúng nóng"
                loading="lazy"
                width={1408}
                height={1008}
                className="col-span-2 row-span-2 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* trust strip */}
        <div className="border-t border-border bg-secondary/60">
          <ul className="container-wide grid divide-border sm:grid-cols-2 lg:grid-cols-5 lg:divide-x">
            {TRUST_STRIP.map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 border-b border-border py-4 text-[13px] font-medium text-ink sm:border-b-0 lg:justify-center lg:px-4 lg:text-center"
              >
                <span className="h-3 w-px shrink-0 bg-primary" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. SOCIAL PROOF / SỐ LIỆU */}
      <section className="border-b border-border">
        <div className="container-wide grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div>
            <Eyebrow>Năng lực nền tảng</Eyebrow>
            <h2 className="mt-5 max-w-md text-2xl leading-snug md:text-[2rem]">
              Hơn 10 năm làm tủ bảng điện cho nhà máy và dự án FDI
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Nhà máy khép kín tại Linh Xuân, TP.HCM: cơ khí, sơn tĩnh điện, lắp ráp và thử nghiệm
              trên cùng một dây chuyền – đã phục vụ các dự án nhà máy, KCN và solar quy mô MWp.
            </p>
          </div>
          <dl className="grid grid-cols-2 border-t border-l border-border">
            {STATS.map((s) => (
              <div key={s.label} className="border-r border-b border-border p-6 md:p-8">
                <dt className="font-display text-3xl font-semibold text-ink md:text-[2.75rem]">
                  {s.value}
                  <span className="ml-1.5 text-base font-medium text-primary md:text-lg">
                    {s.unit}
                  </span>
                </dt>
                <dd className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 4. SẢN PHẨM */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container-wide py-16 lg:py-24">
          <Eyebrow>Sản phẩm</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-2xl leading-snug md:text-[2rem]">
            Hai dòng sản phẩm. Một nhà máy. Một đầu mối chịu trách nhiệm.
          </h2>

          <div className="mt-12 space-y-px">
            {PRODUCT_LINES.map((p, i) => (
              <article
                key={p.to}
                className="grid items-stretch gap-0 border border-border bg-card lg:grid-cols-2"
              >
                <img
                  src={i === 0 ? IMAGES.switchboard : IMAGES.cabletray}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className={`h-64 w-full object-cover lg:h-full ${i === 1 ? "lg:order-2" : ""}`}
                />
                <div className="flex flex-col justify-center p-7 md:p-12">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm font-semibold text-primary">{p.index}</span>
                    <span className="eyebrow text-muted-foreground">{p.kicker}</span>
                  </div>
                  <h3 className="mt-4 text-2xl md:text-3xl">{p.title}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <ul className="mt-7 grid gap-px border-t border-border">
                    {p.items.map((it) => (
                      <li
                        key={it}
                        className="border-b border-border py-3 text-[13.5px] font-medium text-ink"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button asChild variant="outline" size="lg">
                      <Link to={p.to}>
                        Xem thông số kỹ thuật <ArrowUpRight aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KHÁCH HÀNG MỤC TIÊU */}
      <section className="border-b border-border">
        <div className="container-wide py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>Khách hàng</Eyebrow>
              <h2 className="mt-5 max-w-sm text-2xl leading-snug md:text-[2rem]">
                Đúng ngôn ngữ kỹ thuật của từng dự án
              </h2>
            </div>
            <div className="divide-y divide-border border-t border-border">
              {AUDIENCES.map((a) => (
                <div key={a.title} className="grid gap-3 py-8 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-8">
                  <div>
                    <h3 className="text-lg">{a.title}</h3>
                    <p className="mt-1.5 text-[12px] font-medium tracking-wide text-primary uppercase">
                      {a.pain}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. NĂNG LỰC / WHY PTC */}
      <section className="border-b border-border bg-steel text-steel-foreground">
        <div className="container-wide grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <Eyebrow light>Vì sao chọn PTC</Eyebrow>
            <h2 className="mt-5 max-w-xl text-2xl leading-snug text-steel-foreground md:text-[2rem]">
              Kiểm soát trọn chuỗi: vỏ cơ khí, sơn tĩnh điện, lắp ráp, thử nghiệm
            </h2>
            <div className="mt-10 divide-y divide-steel-foreground/12 border-t border-steel-foreground/12">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="py-6">
                  <h3 className="text-base text-steel-foreground">{c.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-steel-foreground/60">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid content-start gap-3">
            <img
              src={IMAGES.qc}
              alt="Kỹ sư PTC thử nghiệm routine test cho tủ điện hạ thế"
              loading="lazy"
              width={1408}
              height={1008}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="grid grid-cols-2 gap-3">
              <img
                src={IMAGES.busbar}
                alt="Chi tiết thanh cái đồng trong tủ điện"
                loading="lazy"
                width={1408}
                height={1008}
                className="aspect-square w-full object-cover"
              />
              <img
                src={IMAGES.plant}
                alt="Tủ điện PTC lắp đặt tại nhà máy"
                loading="lazy"
                width={1200}
                height={800}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. QUY TRÌNH */}
      <section className="border-b border-border">
        <div className="container-wide py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Quy trình làm việc</Eyebrow>
              <h2 className="mt-5 max-w-xl text-2xl leading-snug md:text-[2rem]">
                Từ bản vẽ đến báo giá kỹ thuật: 24h làm việc
              </h2>
            </div>
            <ZaloButton label="Nhắn Zalo gửi bản vẽ" size="lg" location="process" />
          </div>

          <ol className="mt-12 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s) => (
              <li key={s.step} className="border-r border-b border-border p-7 md:p-8">
                <span className="font-display text-sm font-semibold text-primary">{s.step}</span>
                <h3 className="mt-4 text-base leading-snug">{s.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. DỰ ÁN */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container-wide py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Dự án tiêu biểu</Eyebrow>
              <h2 className="mt-5 max-w-xl text-2xl leading-snug md:text-[2rem]">
                Nhà máy, khu công nghiệp và hệ solar quy mô MWp
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/du-an">
                Xem hồ sơ năng lực dự án <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="group flex flex-col overflow-hidden border border-border bg-card lg:col-span-2 lg:flex-row">
              <div className="overflow-hidden lg:w-[55%]">
                <img
                  src={IMAGES[lead.image]}
                  alt={lead.name}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:h-full"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-7 md:p-9">
                <p className="eyebrow text-primary">{lead.client}</p>
                <h3 className="mt-4 text-xl md:text-2xl">{lead.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {lead.desc}
                </p>
                <p className="mt-6 border-t border-border pt-4 text-[13px] text-ink">
                  <span className="text-muted-foreground">Hạng mục: </span>
                  {lead.scope}
                </p>
              </div>
            </article>

            <div className="grid gap-6">
              {rest.slice(0, 2).map((p) => (
                <article key={p.name} className="group flex overflow-hidden border border-border bg-card">
                  <div className="w-32 shrink-0 overflow-hidden sm:w-40">
                    <img
                      src={IMAGES[p.image]}
                      alt={p.name}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="min-w-0 flex-1 p-5">
                    <p className="eyebrow text-primary">{p.client}</p>
                    <h3 className="mt-2.5 text-base leading-snug">{p.name}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.scope}</p>
                  </div>
                </article>
              ))}
            </div>

            {rest.slice(2, 4).map((p) => (
              <article
                key={p.name}
                className="group flex overflow-hidden border border-border bg-card lg:col-span-1"
              >
                <div className="w-32 shrink-0 overflow-hidden sm:w-40">
                  <img
                    src={IMAGES[p.image]}
                    alt={p.name}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="min-w-0 flex-1 p-5">
                  <p className="eyebrow text-primary">{p.client}</p>
                  <h3 className="mt-2.5 text-base leading-snug">{p.name}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.scope}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TIÊU CHUẨN */}
      <section className="border-b border-border">
        <div className="container-wide py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>Tiêu chuẩn &amp; chất lượng</Eyebrow>
              <h2 className="mt-5 max-w-sm text-2xl leading-snug md:text-[2rem]">
                Mỗi tủ xuất xưởng đều có hồ sơ đi kèm
              </h2>
              <Button asChild variant="outline" className="mt-8">
                <Link to="/tieu-chuan-chat-luong">
                  Xem hệ thống kiểm soát chất lượng <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <ul className="grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
              {STANDARDS.map((s) => (
                <li key={s.code} className="border-r border-b border-border p-6">
                  <p className="font-display text-sm font-semibold tracking-wide text-ink">
                    {s.code}
                  </p>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA + FORM */}
      <section id="bao-gia" className="bg-steel text-steel-foreground">
        <div className="container-wide grid gap-12 py-16 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow light>Liên hệ</Eyebrow>
            <h2 className="mt-5 max-w-lg text-2xl leading-snug text-steel-foreground md:text-[2.25rem]">
              Gửi hồ sơ kỹ thuật – nhận báo giá trong 24h
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-steel-foreground/65 md:text-base">
              Single-line diagram, BOQ hay mô tả sơ bộ đều đủ để bắt đầu. Kỹ sư PTC bóc tách cấu
              hình, xác nhận tiêu chuẩn và chốt tiến độ giao hàng cho dự án của bạn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ZaloButton size="xl" label="Nhắn Zalo gửi bản vẽ" location="final-cta" />
              <CallButton size="xl" location="final-cta" variant="outlineLight" />
            </div>
            <p className="mt-5 text-xs text-steel-foreground/45">
              Ưu tiên phản hồi nhanh cho nhà máy, khu công nghiệp, tổng thầu M&E và EPC solar.
            </p>
            <dl className="mt-10 grid gap-5 border-t border-steel-foreground/12 pt-8 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-steel-foreground/45">Hotline kỹ thuật 24/7</dt>
                <dd className="mt-1 font-semibold">
                  <a href={`tel:${CONTACT.hotlineRaw}`} className="hover:underline">
                    <Phone className="mr-1.5 inline size-3.5" aria-hidden="true" />
                    {CONTACT.hotline}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-steel-foreground/45">Email</dt>
                <dd className="mt-1 font-semibold">{CONTACT.email}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-steel-foreground/45">Nhà máy</dt>
                <dd className="mt-1 text-steel-foreground/80">{CONTACT.factory}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-background">
            <LeadForm sourcePage="trang-chu" />
          </div>
        </div>
      </section>
    </>
  );
}
