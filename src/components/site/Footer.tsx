import { Link } from "@tanstack/react-router";
import { CONTACT, NAV } from "@/lib/site";
import { track } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="bg-steel text-steel-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xs bg-primary font-bold text-primary-foreground">
              PTC
            </span>
            <span className="text-sm font-bold tracking-[0.18em]">SWITCHBOARD</span>
          </div>
          <p className="mt-4 text-sm text-steel-foreground/75">
            {CONTACT.companyVi} – sản xuất tủ bảng điện hạ thế và hệ thang máng cáp cho nhà máy, khu
            công nghiệp và điện mặt trời.
          </p>
          <p className="mt-4 text-sm font-semibold">{CONTACT.slogan}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wider uppercase">Thông tin liên hệ</h2>
          <ul className="mt-4 space-y-3 text-sm text-steel-foreground/80">
            <li>Trụ sở: {CONTACT.headOffice}</li>
            <li>Nhà máy: {CONTACT.factory}</li>
            <li>
              Hotline 24/7:{" "}
              <a
                className="font-semibold text-steel-foreground hover:underline"
                href={`tel:${CONTACT.hotlineRaw}`}
                onClick={() => track("click_call", { location: "footer" })}
              >
                {CONTACT.hotline}
              </a>
            </li>
            <li>
              Zalo:{" "}
              <a
                className="font-semibold text-steel-foreground hover:underline"
                href={CONTACT.zalo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("click_zalo", { location: "footer" })}
              >
                {CONTACT.hotline}
              </a>
            </li>
            <li>
              Email:{" "}
              <a className="hover:underline" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wider uppercase">Liên kết nhanh</h2>
          <ul className="mt-4 space-y-2 text-sm text-steel-foreground/80">
            {NAV.filter((n) => n.to !== "/").map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-steel-foreground hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wider uppercase">Hồ sơ năng lực</h2>
          <p className="mt-4 text-sm text-steel-foreground/80">
            Hồ sơ năng lực, catalog tủ điện và catalog thang máng cáp (PDF) được gửi qua Zalo hoặc
            email theo yêu cầu.
          </p>
          <a
            href={CONTACT.zalo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("download_catalog", { location: "footer" })}
            className="mt-4 inline-flex h-10 items-center border border-steel-foreground/40 px-4 text-sm font-semibold hover:bg-steel-foreground/10"
          >
            Nhận hồ sơ năng lực
          </a>
        </div>
      </div>

      <div className="border-t border-steel-foreground/15">
        <div className="container-page py-5 text-xs text-steel-foreground/65">
          © 2026 Công ty Cổ phần Tủ điện PTC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
