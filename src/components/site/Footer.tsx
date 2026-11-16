import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { CONTACT } from "@/lib/site";
import { track } from "@/lib/analytics";

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.78 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.308l-1.87-.998c1.024-1.62 2.666-2.426 4.586-2.426h.044c2.416.02 4.176.92 5.228 2.676.718 1.193 1.085 2.786 1.09 4.742l.006.26c.004.286.007.582.007.904 0 .523-.01 1.014-.028 1.476.976.55 1.72 1.332 2.147 2.265.786 1.72.705 4.522-2.284 6.364-1.648 1.015-3.612 1.527-5.833 1.534h-.023z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: "Facebook PTC",
    href: CONTACT.social.facebook,
    icon: Facebook,
  },
  {
    label: "LinkedIn PTC",
    href: CONTACT.social.linkedin,
    icon: Linkedin,
  },
  {
    label: "Instagram PTC",
    href: CONTACT.social.instagram,
    icon: Instagram,
  },
  {
    label: "Threads PTC",
    href: CONTACT.social.threads,
    icon: ThreadsIcon,
  },
  {
    label: "X (Twitter) PTC",
    href: CONTACT.social.x,
    icon: Twitter,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-steel text-steel-foreground">
      <div className="container-wide grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo-ptc.png"
              alt="PTC Switchboard"
              width={120}
              height={100}
              className="h-10 w-auto bg-white p-1.5 rounded object-contain"
            />
          </div>
          <p className="text-[14px] leading-relaxed text-steel-foreground/80">
            <strong>{CONTACT.legalName}</strong> (Thương hiệu: {CONTACT.brand}) – Nhà sản xuất tủ điện hạ thế và hệ thống thang máng cáp công nghiệp theo tiêu chuẩn IEC 61439-1/2 và ISO 9001:2015. Nhà máy ~ 3.000 m² tại Linh Xuân, TP.HCM.
          </p>
          <div className="space-y-1.5 text-sm text-steel-foreground/70">
            <p><strong>Mã số thuế:</strong> {CONTACT.taxCode}</p>
            <p><strong>Tiêu chuẩn:</strong> ISO 9001:2015 · IEC 61439-1/2 · QUATEST 3</p>
            <p><strong>Hậu mãi:</strong> Hỗ trợ kỹ thuật &amp; hiện trường</p>
          </div>
          <Link to={"/gioi-thieu-ptc" as never} className="inline-block text-[14px] font-medium text-steel-foreground/80 transition-colors hover:text-white">
            Giới thiệu PTC
          </Link>
        </div>

        <div>
          <h2 className="text-[13px] font-semibold tracking-wider text-steel-foreground/70 uppercase font-mono">Tủ điện &amp; Thang máng cáp</h2>
          <ul className="mt-4 space-y-2.5 text-[14px] text-steel-foreground/80">
            <li>
              <Link to="/tu-dien-cong-nghiep" className="transition-colors hover:text-white">
                Tủ điện tổng MSB đến 6300A
              </Link>
            </li>
            <li>
              <Link to="/tu-dien-cong-nghiep" className="transition-colors hover:text-white">
                Tủ điều khiển động cơ MCC &amp; VSD
              </Link>
            </li>
            <li>
              <Link to="/tu-dien-cong-nghiep" className="transition-colors hover:text-white">
                Tủ hòa đồng bộ &amp; tủ ATS
              </Link>
            </li>
            <li>
              <Link to="/tu-dien-cong-nghiep" className="transition-colors hover:text-white">
                Tủ điện Solar DC/AC hòa lưới
              </Link>
            </li>
            <li>
              <Link to="/thang-mang-cap" className="transition-colors hover:text-white">
                Máng cáp (Cable Trunking)
              </Link>
            </li>
            <li>
              <Link to="/thang-mang-cap" className="transition-colors hover:text-white">
                Khay cáp đục lỗ (Cable Tray)
              </Link>
            </li>
            <li>
              <Link to="/thang-mang-cap" className="transition-colors hover:text-white">
                Thang cáp mạ kẽm nhúng nóng
              </Link>
            </li>
            <li>
              <Link to={"/bao-gia-tu-dien-cong-nghiep" as never} className="transition-colors hover:text-white">
                Báo giá tủ điện
              </Link>
            </li>
            <li>
              <Link to={"/bao-gia-thang-mang-cap" as never} className="transition-colors hover:text-white">
                Báo giá thang máng cáp
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[13px] font-semibold tracking-wider text-steel-foreground/70 uppercase font-mono">Giải pháp &amp; Dịch vụ</h2>
          <ul className="mt-4 space-y-2.5 text-[14px] text-steel-foreground/80">
            <li>
              <Link to={"/giai-phap/tu-dien-cho-nha-may" as never} className="transition-colors hover:text-white">
                Giải pháp cho Nhà máy &amp; KCN
              </Link>
            </li>
            <li>
              <Link to={"/giai-phap/tu-dien-cho-nha-thau-me" as never} className="transition-colors hover:text-white">
                Giải pháp cho Tổng thầu M&amp;E
              </Link>
            </li>
            <li>
              <Link to={"/giai-phap/tu-dien-cho-du-an-solar" as never} className="transition-colors hover:text-white">
                Giải pháp cho Dự án Solar
              </Link>
            </li>
            <li>
              <Link to={"/giai-phap/tu-dien-cho-toa-nha" as never} className="transition-colors hover:text-white">
                Giải pháp tủ điện cho Toà nhà
              </Link>
            </li>
            <li>
              <Link to={"/giai-phap/thang-mang-cap-cho-nha-xuong" as never} className="transition-colors hover:text-white">
                Giải pháp thang máng cáp cho Nhà xưởng
              </Link>
            </li>
            <li>
              <Link to={"/giai-phap/gia-cong-theo-ban-ve-va-boq" as never} className="transition-colors hover:text-white">
                Gia công theo bản vẽ &amp; BOQ
              </Link>
            </li>
            <li>
              <Link to={"/giai-phap/phoi-hop-tien-do-giao-tu-theo-block" as never} className="transition-colors hover:text-white">
                Phối hợp tiến độ giao tủ
              </Link>
            </li>
            <li>
              <Link to={"/quy-trinh-san-xuat-tu-dien" as never} className="transition-colors hover:text-white">
                Quy trình sản xuất 7 bước
              </Link>
            </li>
            <li>
              <Link to={"/bao-hanh-ho-tro-ky-thuat" as never} className="transition-colors hover:text-white">
                Chính sách bảo hành &amp; Hỗ trợ hiện trường
              </Link>
            </li>
            <li>
              <Link to={"/gui-ban-ve-boq" as never} className="transition-colors hover:text-white">
                Gửi bản vẽ &amp; BOQ nhận báo giá
              </Link>
            </li>
            <li>
              <Link to={"/kien-thuc" as never} className="transition-colors hover:text-white">
                Thư viện kiến thức kỹ thuật
              </Link>
            </li>
            <li>
              <Link to={"/tai-catalogue" as never} className="transition-colors hover:text-white">
                Tải catalogue
              </Link>
            </li>
            <li>
              <Link to={"/yeu-cau-tu-van-ky-thuat" as never} className="transition-colors hover:text-white">
                Yêu cầu tư vấn kỹ thuật
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[13px] font-semibold tracking-wider text-steel-foreground/70 uppercase font-mono">Thông tin liên hệ</h2>
          <ul className="mt-4 space-y-3 text-[14px] text-steel-foreground/80">
            <li>
              <span className="block text-xs font-medium text-steel-foreground/60 uppercase">Nhà máy sản xuất (~ 3.000 m²)</span>
              {CONTACT.factoryAddress}
            </li>
            <li>
              <span className="block text-xs font-medium text-steel-foreground/60 uppercase">Trụ sở công ty</span>
              {CONTACT.headOffice}
            </li>
            <li>
              <span className="block text-xs font-medium text-steel-foreground/60 uppercase">Hotline CSKH</span>
              <a
                className="font-semibold text-white hover:underline tech-value"
                href={`tel:${CONTACT.hotlineRaw}`}
                onClick={() => track("phone_click", { cta_location: "footer" })}
              >
                {CONTACT.hotline}
              </a>
            </li>
            <li>
              <span className="block text-xs font-medium text-steel-foreground/60 uppercase">Email chính thức</span>
              <a
                className="hover:underline text-steel-foreground/90"
                href={`mailto:${CONTACT.email}`}
                onClick={() => track("email_click", { cta_location: "footer" })}
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 pt-4 border-t border-steel-foreground/15 space-y-4">
            <a
              href={CONTACT.zalo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("zalo_click", { cta_location: "footer" })}
              className="inline-flex min-h-[44px] items-center rounded-md border border-steel-foreground/30 px-4 text-sm font-semibold text-white transition-colors hover:bg-steel-foreground/15 hover:border-steel-foreground/60"
            >
              Nhắn Zalo gửi bản vẽ kỹ thuật
            </a>
            <div>
              <span className="block text-xs font-medium text-steel-foreground/60 uppercase mb-2">
                Kết nối với PTC
              </span>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    onClick={() => track("social_click", { social: label, cta_location: "footer" })}
                    className="inline-flex size-10 items-center justify-center rounded-md border border-steel-foreground/30 text-steel-foreground/80 transition-colors hover:bg-steel-foreground/15 hover:border-steel-foreground/60 hover:text-white"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-steel-foreground/10">
        <div className="container-wide flex flex-wrap justify-between gap-3 py-6 text-sm text-steel-foreground/60">
          <span>© 2026 {CONTACT.legalName}. Tất cả các quyền được bảo lưu.</span>
          <span>Website chính thức: https://www.tudienptc.vn · Nhà máy sản xuất tại TP.HCM</span>
        </div>
      </div>
    </footer>
  );
}

