import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { LeadForm } from "@/components/site/LeadForm";
import { ZaloButton } from "@/components/site/ZaloButton";
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
      { property: "og:image", content: "https://tudienptc.vn/nha-may-tu-dien-ptc.jpg" },
      { property: "og:url", content: "https://tudienptc.vn/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://tudienptc.vn/nha-may-tu-dien-ptc.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://tudienptc.vn/" }],
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
    <p className={`eyebrow ${light ? "text-steel-foreground/70" : "text-primary"}`}>{children}</p>
  );
}

function Index() {
  const [lead, ...rest] = PROJECTS.slice(0, 5);
  if (!lead) return null;

  return (
    <>
      {/* 2. HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="hairline-grid pointer-events-none absolute inset-0 opacity-45" aria-hidden="true" />
        <div className="container-wide relative grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20 xl:py-24">
          <div className="rise-in max-w-2xl">
            <Eyebrow>{CONTACT.brand} — {CONTACT.slogan}</Eyebrow>
            <h1 className="mt-5 text-[2.25rem] leading-[1.08] font-bold text-ink sm:text-5xl lg:text-[3.4rem] tracking-tight text-balance">
              PTC sản xuất tủ điện hạ thế và thang máng cáp
              <span className="block text-primary">cho nhà máy, KCN và dự án công nghiệp</span>
            </h1>
            <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-muted-foreground sm:text-[17.5px]">
              Thiết kế – sản xuất – thử nghiệm tại nhà máy 2.700 m² ở TP.HCM theo IEC 61439-1 &amp; 2
              và ISO 9001:2015. Một đầu mối chịu trách nhiệm cả phần tủ và phần dẫn cáp, phối hợp
              bản vẽ, hồ sơ và tiến độ cùng tổng thầu M&amp;E, chủ đầu tư và EPC solar. Gửi bản vẽ
              hoặc BOQ – nhận báo giá kỹ thuật nhanh chóng từ chuyên gia PTC.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <ZaloButton size="xl" label="Nhắn Zalo gửi bản vẽ" location="hero" className="w-full sm:w-auto" />
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
                <a href="#bao-gia">
                  Yêu cầu báo giá kỹ thuật <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>
            <a
              href={`tel:${CONTACT.hotlineRaw}`}
              className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-medium text-muted-foreground transition-colors hover:text-ink tech-value"
            >
              <Phone className="size-3.5 text-primary" aria-hidden="true" />
              <span>Gọi hotline kỹ thuật · {CONTACT.hotline}</span>
            </a>
          </div>

          <div className="rise-in relative">
            <div className="grid grid-cols-5 grid-rows-5 gap-3 rounded-lg overflow-hidden border border-border/70 lg:h-[30rem] shadow-2xs">
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
        <div className="border-t border-border bg-secondary/70">
          <ul className="container-wide grid divide-border sm:grid-cols-2 lg:grid-cols-5 lg:divide-x">
            {TRUST_STRIP.map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 border-b border-border py-4 text-[13.5px] font-medium text-ink sm:border-b-0 lg:justify-center lg:px-4 lg:text-center"
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
        <div className="container-wide grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24 items-center">
          <div>
            <Eyebrow>Năng lực nền tảng</Eyebrow>
            <h2 className="mt-4 max-w-md text-2xl font-bold leading-snug md:text-[2.15rem] tracking-tight">
              Hơn 10 năm đóng tủ bảng điện cho nhà máy và dự án FDI
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
              Cơ khí, sơn tĩnh điện, lắp ráp và thử nghiệm trên cùng một dây chuyền tại Linh Xuân,
              TP.HCM – đã phục vụ nhà máy sản xuất, khu công nghiệp và các dự án solar quy mô MWp.
            </p>
          </div>
          <dl className="grid grid-cols-2 rounded-lg border border-border overflow-hidden bg-card shadow-2xs">
            {STATS.map((s) => (
              <div key={s.label} className="border-b border-r border-border p-6 sm:p-7 md:p-8 last:border-b-0 even:border-r-0">
                <dt className="metric-value font-heading text-3xl font-bold text-ink sm:text-4xl md:text-[2.75rem] tracking-tight">
                  {s.value}
                  <span className="ml-1.5 text-base font-semibold text-primary md:text-lg">
                    {s.unit}
                  </span>
                </dt>
                <dd className="mt-2.5 text-[13.5px] leading-relaxed text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 4. SẢN PHẨM */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-wide py-16 lg:py-24">
          <Eyebrow>Sản phẩm</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-snug md:text-[2.15rem] tracking-tight">
            Hệ thiết bị điện đồng bộ cho dự án công nghiệp
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Tủ điện và thang máng cáp sản xuất trong cùng một nhà máy: thống nhất quy cách, đồng bộ
            hồ sơ kỹ thuật, kiểm soát chất lượng theo một quy trình và giao hàng bám tiến độ từng
            giai đoạn thi công – thuận lợi khi nghiệm thu.
          </p>

          <div className="mt-12 space-y-8">
            {PRODUCT_LINES.map((p, i) => (
              <article
                key={p.to}
                className="grid items-stretch gap-0 rounded-lg border border-border bg-card overflow-hidden shadow-2xs lg:grid-cols-2"
              >
                <img
                  src={i === 0 ? IMAGES.switchboard : IMAGES.cabletray}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className={`h-64 w-full object-cover lg:h-full ${i === 1 ? "lg:order-2" : ""}`}
                />
                <div className="flex flex-col justify-center p-7 sm:p-9 md:p-12">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm font-semibold text-primary">{p.index}</span>
                    <span className="eyebrow text-muted-foreground">{p.kicker}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-ink md:text-3xl tracking-tight">{p.title}</h3>
                  <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <ul className="mt-7 grid gap-px border-t border-border">
                    {p.items.map((it) => (
                      <li
                        key={it}
                        className="border-b border-border py-3 text-[14px] font-medium text-ink"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3.5">
                    <ZaloButton
                      size="lg"
                      label={i === 0 ? "Nhắn Zalo gửi bản vẽ" : "Gửi BOQ để PTC bóc tách"}
                      location={`product-${p.index}`}
                    />
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
              <h2 className="mt-4 max-w-sm text-2xl font-bold leading-snug md:text-[2.15rem] tracking-tight">
                Đáp ứng đúng yêu cầu của từng mô hình dự án
              </h2>
            </div>
            <div className="divide-y divide-border border-t border-border">
              {AUDIENCES.map((a) => (
                <div key={a.title} className="grid gap-3 py-7 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-ink">{a.title}</h3>
                    <p className="mt-1 text-[12px] font-semibold tracking-wider text-primary uppercase font-mono">
                      {a.pain}
                    </p>
                  </div>
                  <p className="text-[14.5px] leading-relaxed text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. NĂNG LỰC / WHY PTC */}
      <section className="border-b border-border bg-steel text-steel-foreground">
        <div className="container-wide grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24 items-center">
          <div>
            <Eyebrow light>Vì sao chọn PTC</Eyebrow>
            <h2 className="mt-4 max-w-xl text-2xl font-bold leading-snug text-steel-foreground md:text-[2.15rem] tracking-tight">
              Kiểm soát trọn chuỗi: vỏ cơ khí, sơn tĩnh điện, lắp ráp, thử nghiệm
            </h2>
            <div className="mt-9 divide-y divide-steel-foreground/15 border-t border-steel-foreground/15">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="py-5">
                  <h3 className="text-base font-semibold text-steel-foreground">{c.title}</h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-steel-foreground/75">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid content-start gap-3 rounded-lg overflow-hidden border border-steel-foreground/20 p-2 bg-black/20">
            <img
              src={IMAGES.qc}
              alt="Kỹ sư PTC thử nghiệm routine test cho tủ điện hạ thế"
              loading="lazy"
              width={1408}
              height={1008}
              className="aspect-[4/3] w-full rounded object-cover"
            />
            <div className="grid grid-cols-2 gap-2">
              <img
                src={IMAGES.busbar}
                alt="Chi tiết thanh cái đồng trong tủ điện"
                loading="lazy"
                width={1408}
                height={1008}
                className="aspect-square w-full rounded object-cover"
              />
              <img
                src={IMAGES.plant}
                alt="Tủ điện PTC lắp đặt tại nhà máy"
                loading="lazy"
                width={1200}
                height={800}
                className="aspect-square w-full rounded object-cover"
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
              <h2 className="mt-4 max-w-xl text-2xl font-bold leading-snug md:text-[2.15rem] tracking-tight">
                Từ bản vẽ và BOQ đến báo giá kỹ thuật trong 24h
              </h2>
            </div>
            <ZaloButton label="Nhắn Zalo gửi bản vẽ" size="lg" location="process" />
          </div>

          <ol className="mt-12 grid rounded-lg border border-border overflow-hidden bg-card shadow-2xs sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s) => (
              <li key={s.step} className="border-b border-r border-border p-7 sm:p-8 last:border-b-0 lg:last:border-r-0">
                <span className="font-mono text-sm font-semibold text-primary">{s.step}</span>
                <h3 className="mt-3 text-base font-bold text-ink leading-snug">{s.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. DỰ ÁN */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-wide py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Dự án tiêu biểu</Eyebrow>
              <h2 className="mt-4 max-w-xl text-2xl font-bold leading-snug md:text-[2.15rem] tracking-tight">
                Năng lực được kiểm chứng qua dự án thực tế
              </h2>
            </div>
            <div className="flex flex-wrap gap-3.5">
              <ZaloButton label="Gửi BOQ để PTC bóc tách" location="projects" />
              <Button asChild variant="outline">
                <Link to="/du-an">
                  Xem thêm dự án <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-2xs lg:col-span-2 lg:flex-row">
              <div className="overflow-hidden lg:w-[55%]">
                <img
                  src={IMAGES[lead.image]}
                  alt={lead.name}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] lg:h-full"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-7 sm:p-9">
                <p className="eyebrow text-primary">{lead.client}</p>
                <h3 className="mt-3 text-xl font-bold text-ink md:text-2xl">{lead.name}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                  {lead.desc}
                </p>
                <p className="mt-6 border-t border-border pt-4 text-[13.5px] text-ink">
                  <span className="text-muted-foreground font-medium">Hạng mục: </span>
                  {lead.scope}
                </p>
              </div>
            </article>

            <div className="grid gap-6">
              {rest.slice(0, 2).map((p) => (
                <article key={p.name} className="group flex overflow-hidden rounded-lg border border-border bg-card shadow-2xs">
                  <div className="w-32 shrink-0 overflow-hidden sm:w-40">
                    <img
                      src={IMAGES[p.image]}
                      alt={p.name}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="min-w-0 flex-1 p-5">
                    <p className="eyebrow text-primary">{p.client}</p>
                    <h3 className="mt-2 text-base font-bold text-ink leading-snug">{p.name}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{p.scope}</p>
                  </div>
                </article>
              ))}
            </div>

            {rest.slice(2, 4).map((p) => (
              <article
                key={p.name}
                className="group flex overflow-hidden rounded-lg border border-border bg-card shadow-2xs lg:col-span-1"
              >
                <div className="w-32 shrink-0 overflow-hidden sm:w-40">
                  <img
                    src={IMAGES[p.image]}
                    alt={p.name}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="min-w-0 flex-1 p-5">
                  <p className="eyebrow text-primary">{p.client}</p>
                  <h3 className="mt-2 text-base font-bold text-ink leading-snug">{p.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{p.scope}</p>
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
              <h2 className="mt-4 max-w-sm text-2xl font-bold leading-snug md:text-[2.15rem] tracking-tight">
                Mỗi tủ xuất xưởng đều có hồ sơ đi kèm
              </h2>
              <Button asChild variant="outline" className="mt-8">
                <Link to="/tieu-chuan-chat-luong">
                  Xem hệ thống kiểm soát chất lượng <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <ul className="grid rounded-lg border border-border overflow-hidden bg-card shadow-2xs sm:grid-cols-2 lg:grid-cols-3">
              {STANDARDS.map((s) => (
                <li key={s.code} className="border-b border-r border-border p-6 last:border-b-0">
                  <p className="font-mono text-[14px] font-semibold tracking-wide text-ink">
                    {s.code}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{s.desc}</p>
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
            <Eyebrow light>Tiếp nhận yêu cầu kỹ thuật</Eyebrow>
            <h2 className="mt-4 max-w-lg text-2xl font-bold leading-snug text-steel-foreground md:text-[2.25rem] tracking-tight">
              Gửi yêu cầu kỹ thuật. Nhận phương án và báo giá phù hợp.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-steel-foreground/75 md:text-base">
              Gửi bản vẽ, BOQ hoặc thông tin hạng mục. Đội ngũ PTC sẽ phản hồi để hỗ trợ cấu hình,
              bóc tách, báo giá và tiến độ phù hợp với dự án.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ZaloButton size="xl" label="Nhắn Zalo gửi bản vẽ" location="final-cta" />
              <a
                href={`tel:${CONTACT.hotlineRaw}`}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-steel-foreground/75 transition-colors hover:text-white tech-value"
              >
                <Phone className="size-3.5" aria-hidden="true" />
                <span>Gọi hotline kỹ thuật · {CONTACT.hotline}</span>
              </a>
            </div>
            <p className="mt-4 text-[13px] text-steel-foreground/55">
              Ưu tiên phản hồi nhanh khi Quý khách gửi kèm bản vẽ hoặc BOQ qua Zalo.
            </p>

            <dl className="mt-10 grid gap-5 border-t border-steel-foreground/15 pt-8 text-[14px] sm:grid-cols-2">
              <div>
                <dt className="text-steel-foreground/60 text-[12.5px] uppercase font-mono">Hotline kỹ thuật 24/7</dt>
                <dd className="mt-1 font-semibold text-white">
                  <a href={`tel:${CONTACT.hotlineRaw}`} className="hover:underline tech-value">
                    <Phone className="mr-1.5 inline size-3.5 text-primary" aria-hidden="true" />
                    {CONTACT.hotline}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-steel-foreground/60 text-[12.5px] uppercase font-mono">Email</dt>
                <dd className="mt-1 font-semibold text-white">{CONTACT.email}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-steel-foreground/60 text-[12.5px] uppercase font-mono">Nhà máy</dt>
                <dd className="mt-1 text-steel-foreground/85 leading-relaxed">{CONTACT.factory}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-background rounded-lg">
            <LeadForm sourcePage="trang-chu" />
          </div>
        </div>
      </section>
    </>
  );
}
