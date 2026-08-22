import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site";
import { track } from "@/lib/analytics";

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
            <strong>{CONTACT.legalName}</strong> (Thương hiệu: {CONTACT.brand}) – Nhà sản xuất tủ điện hạ thế và hệ thống thang máng cáp công nghiệp theo tiêu chuẩn IEC 61439-1/2 và ISO 9001:2015. Nhà máy hơn 2.700 m² tại Linh Xuân, TP.HCM.
          </p>
          <div className="space-y-1.5 text-[13px] text-steel-foreground/70">
            <p><strong>Tiêu chuẩn:</strong> ISO 9001:2015 · IEC 61439-1/2 · QUATEST 3</p>
            <p><strong>SLA Hậu mãi:</strong> Phản hồi 2h · Hiện trường 24–48h</p>
          </div>
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
          </ul>
        </div>

        <div>
          <h2 className="text-[13px] font-semibold tracking-wider text-steel-foreground/70 uppercase font-mono">Thông tin liên hệ</h2>
          <ul className="mt-4 space-y-3 text-[14px] text-steel-foreground/80">
            <li>
              <span className="block text-[12px] font-medium text-steel-foreground/60 uppercase">Nhà máy sản xuất (2.700 m²)</span>
              {CONTACT.factoryAddress}
            </li>
            <li>
              <span className="block text-[12px] font-medium text-steel-foreground/60 uppercase">Trụ sở công ty</span>
              {CONTACT.headOffice}
            </li>
            <li>
              <span className="block text-[12px] font-medium text-steel-foreground/60 uppercase">Hotline CSKH</span>
              <a
                className="font-semibold text-white hover:underline tech-value"
                href={`tel:${CONTACT.hotlineRaw}`}
                onClick={() => track("phone_click", { cta_location: "footer" })}
              >
                {CONTACT.hotline}
              </a>
            </li>
            <li>
              <span className="block text-[12px] font-medium text-steel-foreground/60 uppercase">Email chính thức</span>
              <a
                className="hover:underline text-steel-foreground/90"
                href={`mailto:${CONTACT.email}`}
                onClick={() => track("email_click", { cta_location: "footer" })}
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 pt-4 border-t border-steel-foreground/15">
            <a
              href={CONTACT.zalo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("zalo_click", { cta_location: "footer" })}
              className="inline-flex min-h-[44px] items-center rounded-md border border-steel-foreground/30 px-4 text-[13px] font-semibold text-white transition-colors hover:bg-steel-foreground/15 hover:border-steel-foreground/60"
            >
              Nhắn Zalo gửi bản vẽ kỹ thuật
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-steel-foreground/10">
        <div className="container-wide flex flex-wrap justify-between gap-3 py-6 text-[13px] text-steel-foreground/60">
          <span>© 2026 {CONTACT.legalName}. Tất cả các quyền được bảo lưu.</span>
          <span>Website chính thức: https://tudienptc.vn · Nhà máy sản xuất tại TP.HCM</span>
        </div>
      </div>
    </footer>
  );
}

