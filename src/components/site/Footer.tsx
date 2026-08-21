import { Link } from "@tanstack/react-router";
import { CONTACT, NAV } from "@/lib/site";
import { track } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="bg-steel text-steel-foreground">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_1fr] lg:gap-10">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center bg-primary font-display text-[13px] font-bold text-primary-foreground">
              PTC
            </span>
            <span className="font-display text-sm font-semibold tracking-[0.2em]">SWITCHBOARD</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-steel-foreground/65">
            {CONTACT.companyVi} sản xuất tủ điện hạ thế và hệ thang máng cáp cho nhà máy, khu công
            nghiệp, tổng thầu M&amp;E và dự án điện mặt trời. Thiết kế, gia công, sơn tĩnh điện, lắp
            ráp và thử nghiệm tại nhà máy 2.700 m² ở TP.HCM theo IEC 61439 và ISO 9001:2015.
          </p>
          <p className="mt-6 font-display text-sm font-semibold tracking-wide">{CONTACT.slogan}</p>

        </div>

        <div>
          <h2 className="eyebrow text-steel-foreground/50">Liên hệ</h2>
          <ul className="mt-5 space-y-3.5 text-sm text-steel-foreground/70">
            <li>
              <span className="block text-steel-foreground/45">Trụ sở</span>
              {CONTACT.headOffice}
            </li>
            <li>
              <span className="block text-steel-foreground/45">Nhà máy</span>
              {CONTACT.factory}
            </li>
            <li>
              <span className="block text-steel-foreground/45">Hotline kỹ thuật 24/7</span>
              <a
                className="font-semibold text-steel-foreground hover:underline"
                href={`tel:${CONTACT.hotlineRaw}`}
                onClick={() => track("click_call", { location: "footer" })}
              >
                {CONTACT.hotline}
              </a>
            </li>
            <li>
              <span className="block text-steel-foreground/45">Email</span>
              <a className="hover:underline" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-steel-foreground/50">Liên kết</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-steel-foreground/70">
            {NAV.filter((n) => n.to !== "/").map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-steel-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-steel-foreground/50">Hồ sơ năng lực</h2>
          <p className="mt-5 text-sm leading-relaxed text-steel-foreground/70">
            Hồ sơ năng lực, catalog tủ điện và catalog thang máng cáp (PDF) được gửi qua Zalo theo
            yêu cầu.
          </p>
          <a
            href={CONTACT.zalo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("download_catalog", { location: "footer" })}
            className="mt-5 inline-flex h-10 items-center border border-steel-foreground/25 px-4 text-sm font-semibold transition-colors hover:bg-steel-foreground/10"
          >
            Nhắn Zalo nhận hồ sơ năng lực
          </a>

        </div>
      </div>

      <div className="border-t border-steel-foreground/10">
        <div className="container-wide flex flex-wrap justify-between gap-2 py-5 text-xs text-steel-foreground/45">
          <span>© 2026 {CONTACT.companyVi}</span>
          <span>Tủ điện công nghiệp · Thang máng cáp · TP. Hồ Chí Minh</span>
        </div>
      </div>
    </footer>
  );
}
