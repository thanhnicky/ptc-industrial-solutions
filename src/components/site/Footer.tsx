import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site";
import { track } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="bg-steel text-steel-foreground">
      <div className="container-wide grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo-ptc.png"
              alt="PTC Switchboard"
              width={110}
              height={100}
              className="h-auto w-24 bg-white p-1.5 rounded object-contain"
            />
          </div>
          <p className="text-xs leading-relaxed text-steel-foreground/75">
            <strong>{CONTACT.legalName}</strong> (Thương hiệu: {CONTACT.brand}) – Nhà sản xuất tủ điện hạ thế và hệ thống thang máng cáp công nghiệp theo tiêu chuẩn IEC 61439-1/2 và ISO 9001:2015. Nhà máy hơn 2.700 m² tại Linh Xuân, TP.HCM.
          </p>
          <div className="space-y-1 text-xs text-steel-foreground/60">
            <p><strong>Tiêu chuẩn công bố:</strong> ISO 9001:2015 · IEC 61439-1/2 · TCVN 7994-1:2009 · QUATEST 3</p>
            <p><strong>SLA Hậu mãi:</strong> Phản hồi trong 2 giờ · Hiện trường 24–48 giờ</p>
          </div>
        </div>

        <div>
          <h2 className="eyebrow text-steel-foreground/50">Tủ điện & Thang máng cáp</h2>
          <ul className="mt-4 space-y-2 text-xs text-steel-foreground/75">
            <li>
              <Link to="/tu-dien-cong-nghiep" className="transition-colors hover:text-steel-foreground">
                Tủ điện tổng MSB đến 6300A
              </Link>
            </li>
            <li>
              <Link to="/tu-dien-cong-nghiep" className="transition-colors hover:text-steel-foreground">
                Tủ điều khiển động cơ MCC & VSD
              </Link>
            </li>
            <li>
              <Link to="/tu-dien-cong-nghiep" className="transition-colors hover:text-steel-foreground">
                Tủ hòa đồng bộ & tủ ATS
              </Link>
            </li>
            <li>
              <Link to="/tu-dien-cong-nghiep" className="transition-colors hover:text-steel-foreground">
                Tủ điện Solar DC/AC hòa lưới
              </Link>
            </li>
            <li>
              <Link to="/thang-mang-cap" className="transition-colors hover:text-steel-foreground">
                Máng cáp (Cable Trunking)
              </Link>
            </li>
            <li>
              <Link to="/thang-mang-cap" className="transition-colors hover:text-steel-foreground">
                Khay cáp đục lỗ (Cable Tray)
              </Link>
            </li>
            <li>
              <Link to="/thang-mang-cap" className="transition-colors hover:text-steel-foreground">
                Thang cáp mạ kẽm nhúng nóng
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-steel-foreground/50">Giải pháp & Dịch vụ</h2>
          <ul className="mt-4 space-y-2 text-xs text-steel-foreground/75">
            <li>
              <Link to={"/giai-phap/tu-dien-cho-nha-may" as never} className="transition-colors hover:text-steel-foreground">
                Giải pháp cho Nhà máy & KCN
              </Link>
            </li>
            <li>
              <Link to={"/giai-phap/tu-dien-cho-nha-thau-me" as never} className="transition-colors hover:text-steel-foreground">
                Giải pháp cho Tổng thầu M&E
              </Link>
            </li>
            <li>
              <Link to={"/giai-phap/tu-dien-cho-du-an-solar" as never} className="transition-colors hover:text-steel-foreground">
                Giải pháp cho Dự án Solar
              </Link>
            </li>
            <li>
              <Link to={"/quy-trinh-san-xuat-tu-dien" as never} className="transition-colors hover:text-steel-foreground">
                Quy trình sản xuất 7 bước
              </Link>
            </li>
            <li>
              <Link to={"/bao-hanh-ho-tro-ky-thuat" as never} className="transition-colors hover:text-steel-foreground">
                Chính sách bảo hành & Hỗ trợ hiện trường
              </Link>
            </li>
            <li>
              <Link to={"/gui-ban-ve-boq" as never} className="transition-colors hover:text-steel-foreground">
                Gửi bản vẽ & BOQ nhận báo giá
              </Link>
            </li>
            <li>
              <Link to={"/kien-thuc" as never} className="transition-colors hover:text-steel-foreground">
                Thư viện kiến thức kỹ thuật
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-steel-foreground/50">Thông tin liên hệ</h2>
          <ul className="mt-4 space-y-3 text-xs text-steel-foreground/75">
            <li>
              <span className="block text-steel-foreground/45">Nhà máy sản xuất (2.700 m²)</span>
              {CONTACT.factoryAddress}
            </li>
            <li>
              <span className="block text-steel-foreground/45">Trụ sở công ty</span>
              {CONTACT.headOffice}
            </li>
            <li>
              <span className="block text-steel-foreground/45">Hotline kỹ thuật</span>
              <a
                className="font-semibold text-steel-foreground hover:underline"
                href={`tel:${CONTACT.hotlineRaw}`}
                onClick={() => track("phone_click", { cta_location: "footer" })}
              >
                {CONTACT.hotline}
              </a>
            </li>
            <li>
              <span className="block text-steel-foreground/45">Email chính thức</span>
              <a
                className="hover:underline"
                href={`mailto:${CONTACT.email}`}
                onClick={() => track("email_click", { cta_location: "footer" })}
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 pt-3 border-t border-steel-foreground/15">
            <a
              href={CONTACT.zalo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("zalo_click", { cta_location: "footer" })}
              className="inline-flex h-9 items-center rounded border border-steel-foreground/25 px-3 text-xs font-semibold transition-colors hover:bg-steel-foreground/10"
            >
              Nhắn Zalo gửi bản vẽ kỹ thuật
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-steel-foreground/10">
        <div className="container-wide flex flex-wrap justify-between gap-2 py-5 text-xs text-steel-foreground/45">
          <span>© 2026 {CONTACT.legalName}. Tất cả các quyền được bảo lưu.</span>
          <span>Website chính thức: https://tudienptc.vn · Nhà máy sản xuất tại TP.HCM</span>
        </div>
      </div>
    </footer>
  );
}

