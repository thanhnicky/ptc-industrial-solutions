/**
 * BRAND & SITE CONFIGURATION — CÔNG TY CỔ PHẦN TỦ BẢNG ĐIỆN PTC
 * Domain chính thức: https://tudienptc.vn
 */

export const SITE_URL = "https://tudienptc.vn";

export const CONTACT = {
  legalName: "CÔNG TY CỔ PHẦN TỦ BẢNG ĐIỆN PTC",
  companyVi: "Công ty Cổ phần Tủ bảng điện PTC",
  taxCode: "0319324471",
  mst: "0319324471",
  brand: "PTC Switchboard",
  brandShort: "PTC",
  slogan: "Đúng tiêu chuẩn – Đúng tiến độ",
  canonicalDomain: SITE_URL,
  
  // Hotline CSKH (Hotline duy nhất được xác thực)
  hotline: "0836 97 77 99",
  hotlineRaw: "0836977799",
  hotlineDisplay: "0836 97 77 99",
  
  // Email chính thức
  email: "tudienptc.vn@gmail.com",
  
  // Zalo config: Lấy từ env VITE_ZALO_URL hoặc fallback chính thức
  zalo: import.meta.env.VITE_ZALO_URL || "https://zalo.me/0836977799",

  // Địa chỉ nhà máy: Chuẩn hóa theo tài liệu xác minh doanh nghiệp
  factoryAddress: "Số 15, Đường 15, Phường Linh Xuân, TP. Hồ Chí Minh",
  factory: "Số 15, Đường 15, Phường Linh Xuân, TP. Hồ Chí Minh",
  headOffice: "3C Nguyễn Văn Quỳ, Khu phố 1, Tổ 11, Phường Phú Thuận, TP. Hồ Chí Minh",
  
  offices: [
    "Văn phòng TP. Hồ Chí Minh (Trụ sở: 3C Nguyễn Văn Quỳ, P. Phú Thuận)",
    "Nhà máy sản xuất ~ 3.000 m² (Số 15, Đường 15, P. Linh Xuân, TP.HCM)",
    "Hỗ trợ kỹ thuật & giao hàng toàn quốc (34 tỉnh thành)",
  ],
  
  mapEmbed:
    "https://www.google.com/maps?q=15%20%C4%90%C6%B0%E1%BB%9Dng%2015%20Linh%20Xu%C3%A2n%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%20H%E1%BB%93%20Ch%C3%AD%20Minh&output=embed",
  
  // SLA Hỗ trợ kỹ thuật & bảo hành
  sla: {
    responseHours: 2, // Phản hồi trong 2 giờ
    fieldDispatchHours: "24–48 giờ", // Xử lý hiện trường trong 24-48h theo khu vực
  },

  // Chứng nhận & tiêu chuẩn công bố
  standards: [
    "ISO 9001:2015 (Hệ thống quản lý chất lượng)",
    "IEC 61439-1 & IEC 61439-2 (Tiêu chuẩn thiết kế & thử nghiệm tủ hạ thế)",
    "TCVN 7994-1:2009 (Tương đương IEC 60439-1)",
    "QCVN 16:2023/BXD (Quy chuẩn kỹ thuật quốc gia vật liệu xây dựng)",
    "QUATEST 3 (Thử nghiệm và kiểm định độc lập theo hồ sơ năng lực)",
  ],
};

/** Điều hướng chính (Header) */
export const NAV = [
  { to: "/", label: "Trang chủ" },
  { to: "/tu-dien-cong-nghiep", label: "Tủ điện công nghiệp" },
  { to: "/thang-mang-cap", label: "Thang máng cáp" },
  { to: "/nang-luc-san-xuat", label: "Năng lực sản xuất" },
  { to: "/tieu-chuan-chat-luong", label: "Tiêu chuẩn & QC" },
  { to: "/du-an", label: "Dự án" },
  { to: "/kien-thuc", label: "Kiến thức kỹ thuật" },
  { to: "/lien-he", label: "Liên hệ" },
] as const;

/** Trust strip / Highlight năng lực */
export const TRUST_STRIP = [
  "Nhà máy ~ 3.000 m² tại TP.HCM",
  "Thiết kế theo IEC 61439 & ISO 9001:2015",
  "Quy trình sản xuất 7 bước khép kín",
  "Đội ngũ kế thừa hơn 10 năm kinh nghiệm",
  "Một đầu mối cho tủ điện & thang máng cáp",
  "Báo giá kỹ thuật nhanh chóng từ chuyên gia PTC",
];

/** Số liệu năng lực xác thực */
export const STATS = [
  { value: "~3.000", unit: "m²", label: "Nhà máy sản xuất khép kín tại Linh Xuân, TP.HCM" },
  { value: "10+", unit: "năm", label: "Kinh nghiệm tích lũy của đội ngũ kỹ sư tiền thân Powertech" },
  { value: "7", unit: "bước", label: "Quy trình thiết kế, gia công CNC, sơn tĩnh điện & routine test" },
  { value: "34", unit: "tỉnh thành", label: "Phạm vi giao hàng và hỗ trợ kỹ thuật hiện trường" },
];

/** Quy trình sản xuất 7 bước chuẩn của PTC */
export const PRODUCTION_STEPS_7 = [
  {
    step: "01",
    title: "Tiếp nhận & Thiết kế kỹ thuật",
    desc: "Bóc tách sơ đồ đơn tuyến (Single-line diagram), rà soát thông số dòng Iđm, Icw, cấp bảo vệ IP, Form tủ; phát hành bản vẽ bố trí (Layout 2D/3D) và sơ đồ mạch để tư vấn/chủ đầu tư phê duyệt.",
  },
  {
    step: "02",
    title: "Gia công cơ khí CNC",
    desc: "Cắt laser/plasma, đột CNC và chấn thủy lực trên tôn thép/inox tại xưởng cơ khí PTC, đảm bảo dung sai lắp ghép và độ cứng vững kết cấu vỏ tủ.",
  },
  {
    step: "03",
    title: "Xử lý bề mặt & Sơn tĩnh điện",
    desc: "Quy trình tẩy dầu, tẩy gỉ, định hình photphat hóa, rửa nước và sấy khô trước khi phun bột sơn tĩnh điện công nghiệp, tạo lớp phủ bám dính cao chống ăn mòn.",
  },
  {
    step: "04",
    title: "Lắp ráp cơ khí & Thanh cái đồng",
    desc: "Lắp khung vỏ, cánh tủ, tấm ngăn khoang Form (1/2b/3b/4b). Gia công uốn, đột và siết lực thanh cái đồng điện phân (Cu 99.9%) bọc co nhiệt theo màu pha.",
  },
  {
    step: "05",
    title: "Lắp đặt thiết bị & Đấu nối nhị thứ",
    desc: "Lắp đặt khí cụ đóng cắt chính hãng (ACB, MCCB, Contactor, Relay, Biến tần, PLC), đi dây điều khiển nhị thứ gá máng gọn gàng, bấm đầu cosse và đánh số dây theo bản vẽ.",
  },
  {
    step: "06",
    title: "Kiểm tra chất lượng (QC) & Routine Test",
    desc: "Thực hiện routine test 100% theo IEC 61439-2: đo điện trở cách điện (MΩ), thử nghiệm điện áp xoay chiều chịu đựng (Dielectric test), kiểm tra liên tục mạch bảo vệ PE, mô phỏng đóng cắt điều khiển.",
  },
  {
    step: "07",
    title: "Đóng gói, Bàn giao & Hồ sơ nghiệm thu",
    desc: "Bọc màng PE chống xước/hút ẩm, đóng kiện gỗ bảo vệ. Bàn giao kèm bộ hồ sơ hoàn công: bản vẽ hoàn công, CO/CQ vật tư thiết bị, biên bản Routine test xuất xưởng.",
  },
];

/** Danh mục Tủ điện công nghiệp chi tiết */
export const ELECTRICAL_PRODUCTS = [
  {
    slug: "tu-dien-tong-msb",
    name: "Tủ điện tổng MSB (Main Switchboard)",
    shortDesc: "Tủ phân phối chính cho trạm biến áp, tòa nhà, nhà máy với dòng định mức lên đến 6300A, thiết kế khoang Form 1 đến Form 4b.",
    rating: "Lên đến 6300A",
    standard: "IEC 61439-1/2, TCVN 7994",
    ip: "IP31 – IP54 (trong nhà)",
    form: "Form 1, 2b, 3b, 4b",
    useCases: ["Trạm biến áp hạ thế", "Nhà máy sản xuất", "Tòa nhà cao tầng", "Trung tâm dữ liệu"],
  },
  {
    slug: "tu-phan-phoi-sdb",
    name: "Tủ phân phối SDB (Sub-Distribution Board)",
    shortDesc: "Tủ phân phối trung gian tiếp nhận nguồn từ MSB cấp đến các tủ phân phối phụ DB hoặc tải phân khu công nghiệp, dòng đến 2500A.",
    rating: "Đến 2500A",
    standard: "IEC 61439-1/2",
    ip: "IP31 – IP54",
    form: "Form 1, 2b, 3b",
    useCases: ["Phân xưởng sản xuất", "Tầng tòa nhà", "Khu chế xuất", "Trung tâm thương mại"],
  },
  {
    slug: "tu-dien-db",
    name: "Tủ điện DB (Distribution Board)",
    shortDesc: "Tủ phân phối nhánh cấp nguồn trực tiếp cho các phụ tải chiếu sáng, ổ cắm, thiết bị văn phòng, máy móc phân xưởng.",
    rating: "Đến 630A",
    standard: "IEC 61439-1/2, TCVN 7994",
    ip: "IP31 – IP54",
    form: "Form 1, 2b",
    useCases: ["Chiếu sáng xưởng", "Ổ cắm tầng", "Khu văn phòng", "Dây chuyền phụ trợ"],
  },
  {
    slug: "tu-mcc",
    name: "Tủ điều khiển động cơ MCC (Motor Control Center)",
    shortDesc: "Tủ trung tâm điều khiển và bảo vệ hệ thống motor: khởi động trực tiếp DOL, sao/tam giác (Star-Delta), Soft Starter hoặc biến tần VSD.",
    rating: "Theo công suất động cơ (kW / HP)",
    standard: "IEC 61439-1/2, IEC 60947",
    ip: "IP42 – IP55",
    form: "Form 2b, 3b, 4b (ngăn kéo/cố định)",
    useCases: ["Hệ thống bơm cấp thoát nước", "Quạt thông gió HVAC", "Băng tải công nghiệp", "Máy nghiền, máy nén"],
  },
  {
    slug: "tu-bien-tan-vsd",
    name: "Tủ biến tần VSD (Variable Speed Drive)",
    shortDesc: "Tích hợp biến tần điều khiển tốc độ vô cấp cho motor, tối ưu tiêu thụ điện năng và giảm dòng khởi động, bảo vệ quá tải.",
    rating: "0.75kW – 500kW+",
    standard: "IEC 61439, IEC 61800",
    ip: "IP42 – IP54 (quạt tản nhiệt lọc bụi)",
    form: "Form 1, 2b",
    useCases: ["Bơm điều áp", "Quạt lò", "Hệ thống cấp liệu tự động", "Băng chuyền sản xuất"],
  },
  {
    slug: "tu-hoa-dong-bo",
    name: "Tủ hòa đồng bộ máy phát & lưới (Synchronization Panel)",
    shortDesc: "Tự động hòa đồng bộ nhiều tổ máy phát điện với nhau hoặc hòa máy phát với lưới điện quốc gia, phân chia tải tự động.",
    rating: "Theo công suất máy phát (kVA)",
    standard: "IEC 61439-1/2",
    ip: "IP31 – IP42",
    form: "Form 2b, 3b",
    useCases: ["Nguồn dự phòng nhà máy", "Bệnh viện", "Trung tâm dữ liệu", "Khách sạn cao cấp"],
  },
  {
    slug: "tu-dien-ngoai-troi",
    name: "Tủ điện ngoài trời IP55 / IP65",
    shortDesc: "Vỏ tủ 2 lớp cánh, mái che dốc nước, gioăng cao su EPDM đúc liền chống nước và bụi thâm nhập, sơn tĩnh điện ngoài trời hoặc inox 304.",
    rating: "Tùy biến theo tải",
    standard: "IEC 60529 (Cấp bảo vệ IP), IEC 61439",
    ip: "IP55, IP65",
    form: "Form 1, 2b",
    useCases: ["Chiếu sáng đô thị & đường phố", "Trạm bơm ngoài trời", "Hạ tầng KCN", "Cảng biển & môi trường ẩm"],
  },
  {
    slug: "tu-dien-solar",
    name: "Tủ điện Solar (DC Combiner, AC, Hòa lưới)",
    shortDesc: "Chuyên dụng cho hệ thống điện mặt trời áp mái nhà xưởng và farm: tủ gom chuỗi DC chống sét lan truyền 1000V/1500V, tủ AC và tủ trạm hòa lưới.",
    rating: "Đến 1500V DC / 800V AC",
    standard: "IEC 61439-1/2, IEC 62109",
    ip: "IP65 (DC box) / IP54 (AC)",
    form: "Form 1, 2b",
    useCases: ["ĐMTMN nhà xưởng KCN", "Solar farm", "Dự án năng lượng tái tạo", "Hệ thống hybrid / lưu trữ ESS"],
  },
  {
    slug: "tu-cap-nguon-cong-trinh",
    name: "Tủ cấp nguồn công trình & Tủ tạm thi công",
    shortDesc: "Tủ điện di động cấp nguồn thi công cho công trường, trang bị ELCB/RCCB chống dòng rò bảo vệ an toàn giật điện tuyệt đối cho công nhân.",
    rating: "32A – 400A",
    standard: "TCVN 7994, TCVN 5863",
    ip: "IP44 – IP55",
    form: "Form 1",
    useCases: ["Công trường xây dựng", "Nhà xưởng đang lắp máy", "Bảo dưỡng định kỳ", "Sự kiện tạm thời"],
  },
  {
    slug: "tram-kios",
    name: "Trạm biến áp Kios hợp bộ (Compact Substation)",
    shortDesc: "Trạm biến áp ngoài trời trọn bộ gồm 3 ngăn: Ngăn trung thế RMU, Ngăn máy biến áp, Ngăn hạ thế phân phối.",
    rating: "160kVA – 2500kVA (22kV/0.4kV)",
    standard: "IEC 62271-202, IEC 61439",
    ip: "IP43 – IP54",
    form: "Hợp bộ 3 ngăn độc lập",
    useCases: ["Khu đô thị", "Khu công nghiệp", "Nhà máy độc lập", "Công trình hạn chế diện tích"],
  },
  {
    slug: "tu-dieu-khien",
    name: "Tủ điện điều khiển & Tự động hóa PLC/SCADA",
    shortDesc: "Tủ tích hợp PLC, HMI, module I/O, relay trung gian phục vụ giám sát và điều khiển tự động toàn bộ dây chuyền sản xuất.",
    rating: "Điện áp điều khiển 24VDC / 220VAC",
    standard: "IEC 61131, IEC 61439",
    ip: "IP42 – IP54",
    form: "Form 1, 2b",
    useCases: ["Dây chuyền sản xuất", "Xử lý nước thải", "Hệ thống BMS tòa nhà", "Trạm trộn bê tông, silo"],
  },
  {
    slug: "tu-cong-to-composite",
    name: "Tủ công tơ & Vỏ tủ composite",
    shortDesc: "Hộp công tơ đo đếm điện năng vật liệu composite SMC/FRP chịu va đập, chống tia UV, cách điện an toàn và không bị ăn mòn.",
    rating: "Đo đếm 1 pha / 3 pha",
    standard: "TCVN 7994, Quy chuẩn EVN",
    ip: "IP54 – IP65",
    form: "Hộp composite đúc ép",
    useCases: ["Hạ tầng điện lực EVN", "Cụm công tơ KCN", "Chiếu sáng công cộng", "Khu dân cư"],
  },
];

/** Danh mục Thang máng cáp chi tiết */
export const CABLE_TRAY_PRODUCTS = [
  {
    slug: "mang-cap",
    name: "Máng cáp (Cable Trunking)",
    shortDesc: "Hệ thống máng kín đáy phẳng có nắp đậy, bảo vệ hoàn toàn dây dẫn và cáp điện khỏi bụi bẩn, chuột bọ và va đập cơ học.",
    width: "50mm – 800mm (gia công theo BOQ)",
    height: "50mm – 200mm",
    thickness: "0.8mm – 2.0mm",
    finish: "Sơn tĩnh điện RAL, Tôn mạ kẽm Z, Mạ kẽm nhúng nóng, Inox 304",
    useCases: ["Tòa nhà văn phòng", "Nhà xưởng dệt may / điện tử", "Khu vực tầng hầm", "Trục cáp tín hiệu & điều khiển"],
  },
  {
    slug: "khay-cap",
    name: "Khay cáp đục lỗ (Cable Tray)",
    shortDesc: "Khay cáp có đục lỗ thoát nhiệt dưới đáy giúp tản nhiệt tối ưu cho tuyến cáp động lực, dễ dàng cố định và rẽ nhánh dây cáp.",
    width: "100mm – 800mm",
    height: "50mm – 150mm",
    thickness: "1.0mm – 2.0mm",
    finish: "Mạ kẽm nhúng nóng, Sơn tĩnh điện, Tôn mạ kẽm",
    useCases: ["Nhà máy công nghiệp", "Trạm điện", "Tuyến cáp phân phối phụ", "Khu kỹ thuật cơ điện M&E"],
  },
  {
    slug: "thang-cap",
    name: "Thang cáp (Cable Ladder)",
    shortDesc: "Kết cấu thang thông thoáng chuyên dụng đỡ các tuyến cáp điện lực trục chính tiết diện lớn (XLPE/PVC), tản nhiệt tự nhiên tuyệt vời.",
    width: "100mm – 1200mm",
    height: "50mm – 150mm (bước bậc thang 250-300mm)",
    thickness: "1.2mm – 2.5mm",
    finish: "Mạ kẽm nhúng nóng theo ASTM A123, Sơn tĩnh điện ngoài trời/trong nhà",
    useCases: ["Trục riser tòa nhà", "Hệ thống cáp tổng nhà máy", "Mái xưởng solar", "Khu công nghiệp nặng"],
  },
  {
    slug: "san-thao-tac",
    name: "Sàn thao tác & Giá đỡ cơ điện M&E",
    shortDesc: "Gia công kết cấu thép sàn thao tác, khung giá đỡ máy móc, giàn treo thang máng cáp chịu tải trọng cao theo bản vẽ thiết kế.",
    width: "Theo thiết kế kiến trúc/kết cấu dự án",
    height: "Tùy biến",
    thickness: "Thép hình U, V, I, I-beam, grating mạ kẽm",
    finish: "Mạ kẽm nhúng nóng, Sơn epoxy chống ăn mòn",
    useCases: ["Sàn vận hành máy bơm", "Giàn đỡ máy biến áp", "Lối đi kiểm tra trên cao", "Hệ treo MEP phức hợp"],
  },
  {
    slug: "phu-kien-thang-mang-cap",
    name: "Phụ kiện thang máng cáp đồng bộ",
    shortDesc: "Hệ phụ kiện gia công chính xác: co ngang L, tê T, chạc thập X, co đứng trong/ngoài, giảm đều/lệch, nắp đậy, nối máng, ty treo, quang treo.",
    width: "Khớp 100% kích thước máng/khay/thang",
    height: "Khớp chiều cao thành máng",
    thickness: "Tương đương hoặc lớn hơn thân máng",
    finish: "Đồng bộ bề mặt với tuyến máng chính",
    useCases: ["Tất cả các khúc cua, chuyển hướng, rẽ nhánh, thay đổi tiết diện trên tuyến cáp"],
  },
  {
    slug: "mang-cap-ma-kem-nhung-nong",
    name: "Máng cáp mạ kẽm nhúng nóng (HDG Trunking)",
    shortDesc: "Máng cáp nhúng kẽm nóng toàn phần theo tiêu chuẩn ASTM A123, lớp mạ dày 65–85 µm chống ăn mòn vượt trội trong môi trường khắc nghiệt.",
    width: "100mm – 800mm",
    height: "50mm – 200mm",
    thickness: "1.5mm – 2.0mm (đảm bảo không cong vênh khi nhúng nóng)",
    finish: "Mạ kẽm nhúng nóng ASTM A123 / ISO 1461",
    useCases: ["Nhà máy hóa chất", "Khu vực ven biển", "Nhà xưởng phân bón", "Công trình ngoài trời"],
  },
  {
    slug: "khay-cap-ma-kem-nhung-nong",
    name: "Khay cáp mạ kẽm nhúng nóng (HDG Cable Tray)",
    shortDesc: "Khay cáp đục lỗ mạ kẽm nhúng nóng chống gỉ sét, thoát nhiệt tốt và chịu bức xạ UV ngoài trời.",
    width: "100mm – 800mm",
    height: "50mm – 150mm",
    thickness: "1.5mm – 2.0mm",
    finish: "Mạ kẽm nhúng nóng ASTM A123",
    useCases: ["Mái xưởng công nghiệp", "Dự án nhiệt điện / lọc hóa dầu", "Hạ tầng kỹ thuật ngoài trời"],
  },
  {
    slug: "thang-cap-ma-kem-nhung-nong",
    name: "Thang cáp mạ kẽm nhúng nóng (HDG Cable Ladder)",
    shortDesc: "Thang cáp mạ kẽm nhúng nóng chuyên dùng cho các tuyến cáp điện lực nặng ngoài trời, trên giàn pipe rack hoặc trục thẳng đứng.",
    width: "200mm – 1200mm",
    height: "75mm – 150mm",
    thickness: "1.5mm – 2.5mm",
    finish: "Mạ kẽm nhúng nóng ASTM A123 / ISO 1461",
    useCases: ["Hệ thống mái tôn solar 1MWp+", "Tuyến cáp trục chính trạm biến áp", "KCN gần biển", "Cầu cảng & kho bãi"],
  },
];

/** Dự án tiêu biểu xác thực — đối chiếu ptcswitchboard.vn */
export const PROJECTS_AUTHENTIC = [
  {
    id: "ong-bien",
    name: "Dự án Solarlink – Nhà máy phân bón Ong Biển (1.250 kWp)",
    client: "Công ty TNHH Solarlink",
    scope: "Hệ thống điện mặt trời áp mái 1.250 kWp — 2.499 tấm pin Longi 450Wp, 8 inverter Kehua 125kW. EPC: Powertech (tiền thân PTC).",
    highlight: "Hoàn thành 12/2020 tại Xã Tóc Tiên, Thị xã Phú Mỹ, Bà Rịa – Vũng Tàu. Doanh nghiệp đầu tư 100%, bán điện lên lưới quốc gia.",
    tags: ["solar"],
  },
  {
    id: "phu-my-1",
    name: "Dự án điện mặt trời Phúc Ý – KCN Phú Mỹ 1 (999 kWp)",
    client: "Công ty Cổ phần Điện mặt trời Sunword",
    scope: "Hệ thống điện mặt trời 999 kWp — 2.245 tấm pin Longi 445Wp, 8 inverter Huawei 100kW. EPC: Powertech (tiền thân PTC).",
    highlight: "Hoàn thành 10/2020 tại KCN Phú Mỹ 1, Thị xã Phú Mỹ, Bà Rịa – Vũng Tàu. Doanh nghiệp đầu tư 100%, bán điện lên lưới quốc gia.",
    tags: ["solar"],
  },
  {
    id: "gach-tuynel-2",
    name: "Dự án 1.460 kWp – Xưởng gạch Tuynel 2, Gia Lai",
    client: "Chủ đầu tư nhà máy gạch",
    scope: "Hệ thống điện mặt trời áp mái 1.460 kWp cho xưởng gạch Tuynel 2 tại Gia Lai.",
    highlight: "Quy mô lớn, đáp ứng nhu cầu điện năng cho dây chuyền sản xuất gạch tuynel.",
    tags: ["solar"],
  },
  {
    id: "dpl-warehouse",
    name: "Dự án 960 kWp – Kho DPL, Quận 2, TP.HCM",
    client: "Chủ đầu tư kho DPL",
    scope: "Hệ thống điện mặt trời áp mái 960 kWp cho kho DPL tại Quận 2, TP.HCM.",
    highlight: "Tận dụng mái kho để tạo nguồn điện ổn định phục vụ vận hành kho.",
    tags: ["solar"],
  },
  {
    id: "hai-duc",
    name: "Dự án 960 kWp – Kho Hải Đức, Quận 2, TP.HCM",
    client: "Chủ đầu tư kho Hải Đức",
    scope: "Hệ thống điện mặt trời áp mái 960 kWp cho kho Hải Đức tại Quận 2, TP.HCM.",
    highlight: "Hoàn thành đúng tiến độ, hệ thống vận hành ổn định sau bàn giao.",
    tags: ["solar"],
  },
  {
    id: "lexus-saigon",
    name: "Dự án Lexus 250.96 kWp tại TP.HCM",
    client: "Chủ đầu tư Lexus",
    scope: "Hệ thống điện mặt trời áp mái 250.96 kWp cho showroom/xưởng dịch vụ Lexus tại TP.HCM.",
    highlight: "Quy mô vừa, đáp ứng yêu cầu thẩm mỹ cao của showroom thương mại.",
    tags: ["solar"],
  },
  {
    id: "lego-vsip3",
    name: "Dự án Nhà máy LEGO – VSIP 3",
    client: "Nhà thầu xây dựng / FDI",
    scope: "Cung cấp giải pháp tủ bảng điện hạ thế theo tiêu chuẩn quốc tế.",
    highlight: "Thực hiện bởi đội ngũ kỹ sư nòng cốt tiền thân Powertech / PTC kế thừa kinh nghiệm dự án FDI tiêu chuẩn cao.",
    tags: ["tu-dien"],
    note: "Kinh nghiệm thực hiện của đội ngũ kỹ sư nòng cốt PTC / tiền thân Powertech — không phải dự án chính thức dưới tên PTC.",
  },
  {
    id: "lg-electronics",
    name: "Dự án LG Electronics – Hệ thống 17 MWp",
    client: "Tổng thầu Năng lượng / Chủ đầu tư FDI",
    scope: "Tủ điện hạ thế & tủ đấu nối chuyên dụng cho hệ thống năng lượng 17 MWp.",
    highlight: "Đáp ứng tiêu chuẩn nghiệm thu và kiểm định nghiêm ngặt từ chủ đầu tư nước ngoài.",
    tags: ["tu-dien", "solar"],
    note: "Kinh nghiệm thực hiện của đội ngũ kỹ sư nòng cốt PTC / tiền thân Powertech — không phải dự án chính thức dưới tên PTC.",
  },
];

/** Khối đối tượng khách hàng B2B */
export const AUDIENCES = [
  {
    title: "Tổng thầu cơ điện (M&E)",
    pain: "Bóc tách BOQ · shop drawing · tiến độ giao",
    desc: "Kỹ sư PTC bóc tách bản vẽ và BOQ cùng đội kỹ thuật của bạn, làm rõ điểm thiếu trước khi chốt giá, phát hành shop drawing để duyệt và cam kết mốc giao theo từng block thi công. Biên bản thử nghiệm, CO/CQ và bản vẽ hoàn công sẵn sàng ngay khi nghiệm thu.",
  },
  {
    title: "Chủ đầu tư nhà máy & KCN",
    pain: "Một đầu mối · chất lượng ổn định · hồ sơ đầy đủ",
    desc: "Tủ điện và thang máng cáp từ cùng một nhà máy: một hợp đồng, một đầu mối bảo hành, quy cách đồng nhất giữa các đợt giao. Hồ sơ vật tư được lưu trữ để tra cứu khi vận hành, thay thế hoặc mở rộng dây chuyền.",
  },
  {
    title: "EPC điện mặt trời",
    pain: "Đúng thông số inverter · phản hồi trong ngày",
    desc: "Tủ DC combiner, tủ AC và tủ hòa lưới đúng thông số inverter, cấp bảo vệ và yêu cầu đấu nối của điện lực; máng cáp mạ kẽm nhúng nóng chịu bức xạ và gió trên mái nhà xưởng. Phản hồi kỹ thuật trong ngày, giao hàng bám lịch lắp đặt trên mái.",
  },
];

/** Khối năng lực sản xuất */
export const CAPABILITIES = [
  {
    title: "Thiết kế – sản xuất – thử nghiệm khép kín",
    desc: "Từ bản vẽ nguyên lý đến tủ hoàn thiện đều thực hiện tại nhà máy PTC, không qua trung gian gia công ngoài.",
  },
  {
    title: "Xưởng cơ khí và sơn tĩnh điện riêng",
    desc: "Cắt – đột – chấn CNC, hàn, tẩy dầu mỡ, phun sơn tĩnh điện và sấy trong cùng một dây chuyền, kiểm soát dung sai vỏ tủ.",
  },
  {
    title: "Sản xuất theo IEC 61439, quản lý theo ISO 9001",
    desc: "Quy trình kiểm tra từng công đoạn, hồ sơ truy xuất vật tư và routine test cho mọi tủ trước khi xuất xưởng.",
  },
  {
    title: "Đồng bộ tủ điện và thang máng cáp",
    desc: "Một đầu mối cho cả hai hạng mục: khớp tuyến cáp, khớp tiến độ, giảm rủi ro chờ vật tư tại công trường.",
  },
  {
    title: "Hỗ trợ hồ sơ và hiện trường",
    desc: "Bản vẽ shop drawing, biên bản thử nghiệm, hướng dẫn lắp đặt và hỗ trợ kỹ thuật khi đấu nối, chạy thử.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Gửi bản vẽ, BOQ hoặc yêu cầu kỹ thuật",
    desc: "Qua Zalo hoặc form kỹ thuật. Chỉ cần sơ đồ đơn tuyến, bảng khối lượng hoặc mô tả sơ bộ – kỹ sư PTC sẽ làm rõ phần còn thiếu.",
  },
  {
    step: "02",
    title: "Bóc tách và chốt cấu hình",
    desc: "Rà soát dòng định mức, Icw, cấp bảo vệ IP, Form tủ, chủng loại thiết bị đóng cắt và tuyến cáp; đề xuất phương án phù hợp chi phí mà vẫn đúng tiêu chuẩn.",
  },
  {
    step: "03",
    title: "Báo giá kỹ thuật kèm tiến độ",
    desc: "Phản hồi báo giá kỹ thuật nhanh chóng từ chuyên gia PTC kèm bản vẽ bố trí sơ bộ, danh mục vật tư và mốc giao hàng theo từng giai đoạn thi công.",
  },
  {
    step: "04",
    title: "Sản xuất – thử nghiệm – bàn giao",
    desc: "Gia công CNC, sơn tĩnh điện, lắp ráp, Routine test 100% tại xưởng, bàn giao kèm đầy đủ hồ sơ kỹ thuật, CO/CQ và biên bản nghiệm thu.",
  },
];

export const PRODUCT_LINES = [
  {
    to: "/tu-dien-cong-nghiep" as const,
    index: "01",
    kicker: "Tủ bảng điện hạ thế",
    title: "Tủ điện công nghiệp",
    desc: "Đóng tủ theo single-line diagram đã duyệt: vỏ cơ khí gia công tại xưởng PTC, thanh cái đồng tính theo dòng định mức và Icw, thiết bị đóng cắt đúng chủng loại phê duyệt. Mỗi tủ đều qua routine test theo IEC 61439-2 và bàn giao kèm hồ sơ đủ cho nghiệm thu.",
    items: [
      "Tủ MSB / MDB đến 6300A",
      "Tủ DB tầng, tủ tụ bù, tủ ATS",
      "Tủ MCC – Motor Control Center",
      "Tủ VSD – Variable Speed Drive",
      "Tủ điện solar: DC combiner, AC, hòa lưới",
    ],
  },
  {
    to: "/thang-mang-cap" as const,
    index: "02",
    kicker: "Hệ dẫn cáp",
    title: "Thang máng cáp",
    desc: "Cán – đột – chấn trên dây chuyền cơ khí PTC theo bản vẽ và quy cách từng tuyến cáp, xử lý bề mặt theo môi trường lắp đặt, giao đủ phụ kiện đồng bộ. Đi cùng gói tủ điện nên khớp tuyến, khớp BOQ và khớp tiến độ, không phát sinh giao diện giữa hai nhà cung cấp.",
    items: [
      "Thang cáp, máng cáp, khay cáp, máng cáp kín",
      "Mạ kẽm nhúng nóng, mạ kẽm điện phân, inox",
      "Sơn tĩnh điện theo mã màu quy định dự án",
      "Phụ kiện đồng bộ: co, tê, giảm, nắp, ty treo",
      "Gia công theo bản vẽ và quy cách dự án",
    ],
  },
];

export const STANDARDS = [
  { code: "IEC 61439-1 & 2", desc: "Tiêu chuẩn thiết kế và thử nghiệm tủ đóng cắt hạ thế." },
  { code: "TCVN 7994-1:2009", desc: "Tương đương IEC 60439-1, áp dụng cho tủ bảng điện." },
  { code: "ISO 9001:2015", desc: "Hệ thống quản lý chất lượng áp dụng toàn nhà máy." },
  { code: "QCVN 16:2023/BXD", desc: "Quy chuẩn kỹ thuật quốc gia về sản phẩm xây dựng." },
  { code: "QUATEST 3", desc: "Thử nghiệm và kiểm định độc lập trong hồ sơ năng lực." },
  { code: "Routine test", desc: "Thử nghiệm thường xuyên 100% từng tủ trước khi xuất xưởng." },
];

export type ProjectTag = "tu-dien" | "thang-mang-cap" | "solar";

export type Project = {
  name: string;
  desc: string;
  image: "solar" | "plant" | "warehouse" | "showroom" | "switchboard" | "cabletray";
  tags: ProjectTag[];
  scope?: string;
  client?: string;
  note?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "ĐMTMN Phúc Ý – KCN Phú Mỹ 1 (999 kWp)",
    desc: "Hệ thống điện mặt trời áp mái 999 kWp do Powertech (tiền thân PTC) làm tổng thầu EPC cho Công ty CP Điện mặt trời Sunword. 2.245 tấm pin Longi 445Wp + 8 inverter Huawei 100kW, hoàn thành 10/2020.",
    image: "solar",
    tags: ["solar"],
    scope: "EPC hệ thống điện mặt trời áp mái 999 kWp — pin Longi 445Wp, inverter Huawei 100kW",
    client: "Công ty Cổ phần Điện mặt trời Sunword",
  },
  {
    name: "ĐMTMN Solarlink – Nhà máy phân bón Ong Biển (1.250 kWp)",
    desc: "Hệ thống điện mặt trời áp mái 1.250 kWp do Powertech (tiền thân PTC) làm tổng thầu EPC cho Công ty TNHH Solarlink. 2.499 tấm pin Longi 450Wp + 8 inverter Kehua 125kW, hoàn thành 12/2020 tại Tóc Tiên, Phú Mỹ, Bà Rịa – Vũng Tàu.",
    image: "plant",
    tags: ["solar"],
    scope: "EPC hệ thống điện mặt trời áp mái 1.250 kWp — pin Longi 450Wp, inverter Kehua 125kW",
    client: "Công ty TNHH Solarlink",
  },
  {
    name: "ĐMTMN Kho DPL – 960 kWp, Quận 2, TP.HCM",
    desc: "Hệ thống điện mặt trời 960 kWp cho kho DPL, Quận 2, TP.HCM. Tận dụng mái kho, cung cấp điện ổn định phục vụ vận hành kho.",
    image: "warehouse",
    tags: ["solar"],
    scope: "Hệ thống điện mặt trời áp mái 960 kWp",
    client: "Chủ đầu tư kho DPL",
  },
  {
    name: "ĐMTMN Kho Hải Đức – 960 kWp, Quận 2, TP.HCM",
    desc: "Hệ thống điện mặt trời áp mái 960 kWp cho kho Hải Đức tại Quận 2, TP.HCM. Hoàn thành đúng tiến độ, hệ thống vận hành ổn định sau bàn giao.",
    image: "warehouse",
    tags: ["solar"],
    scope: "Hệ thống điện mặt trời áp mái 960 kWp",
    client: "Chủ đầu tư kho Hải Đức",
  },
  {
    name: "ĐMTMN Xưởng gạch Tuynel 2 – 1.460 kWp, Gia Lai",
    desc: "Hệ thống điện mặt trời áp mái 1.460 kWp cho xưởng gạch Tuynel 2 tại Gia Lai. Quy mô lớn, đáp ứng nhu cầu điện năng cho dây chuyền sản xuất gạch tuynel.",
    image: "plant",
    tags: ["solar"],
    scope: "Hệ thống điện mặt trời áp mái 1.460 kWp",
    client: "Chủ đầu tư nhà máy gạch Tuynel 2",
  },
  {
    name: "ĐMTMN Lexus – 250.96 kWp, TP.HCM",
    desc: "Hệ thống điện mặt trời áp mái 250.96 kWp cho cơ sở Lexus tại TP.HCM. Quy mô vừa, đáp ứng yêu cầu thẩm mỹ và vận hành ổn định.",
    image: "showroom",
    tags: ["solar"],
    scope: "Hệ thống điện mặt trời áp mái 250.96 kWp",
    client: "Chủ đầu tư Lexus",
  },
  {
    name: "Dự án Nhà máy LEGO – VSIP 3",
    desc: "Cung cấp giải pháp tủ bảng điện hạ thế theo tiêu chuẩn quốc tế, do đội ngũ kỹ sư nòng cốt tiền thân Powertech / PTC thực hiện.",
    image: "switchboard",
    tags: ["tu-dien"],
    scope: "Tủ bảng điện hạ thế cho nhà máy FDI quy mô lớn",
    client: "Đội ngũ kỹ sư nòng cốt PTC / tiền thân Powertech",
    note: "Kinh nghiệm thực hiện của đội ngũ kỹ sư nòng cốt PTC / tiền thân Powertech — không phải dự án chính thức dưới tên PTC.",
  },
  {
    name: "Dự án LG Electronics – Hệ thống 17 MWp",
    desc: "Tủ điện hạ thế cho hệ thống điện mặt trời 17 MWp, tiêu chuẩn nghiệm thu của chủ đầu tư nước ngoài.",
    image: "solar",
    tags: ["tu-dien", "solar"],
    scope: "Tủ điện hạ thế cho hệ ĐMT 17 MWp",
    client: "Chủ đầu tư FDI",
    note: "Kinh nghiệm thực hiện của đội ngũ kỹ sư nòng cốt PTC / tiền thân Powertech — không phải dự án chính thức dưới tên PTC.",
  },
];

export const PROJECT_FILTERS = [
  { value: "all", label: "Tất cả" },
  { value: "tu-dien", label: "Tủ điện" },
  { value: "thang-mang-cap", label: "Thang máng cáp" },
  { value: "solar", label: "Solar" },
] as const;

/** Bài viết kiến thức kỹ thuật cốt lõi (Knowledge Hub) */
export const KNOWLEDGE_ARTICLES = [
  {
    slug: "tu-dien-cong-nghiep-la-gi",
    title: "Tủ điện công nghiệp là gì? Cấu tạo, phân loại và tiêu chuẩn thiết kế",
    category: "Kiến thức tổng quan",
    readTime: "6 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2025-01-10",
    dateModified: "2026-02-15",
    quickAnswer: "Tủ điện công nghiệp là cụm thiết bị chứa khí cụ đóng cắt, bảo vệ, đo lường và điều khiển nguồn điện trong môi trường công nghiệp, được thiết kế và thử nghiệm theo tiêu chuẩn IEC 61439-1/2 và TCVN 7994 để vận hành an toàn, liên tục cho nhà máy và tòa nhà.",
    summary: [
      "Bao gồm 3 khối chính: Vỏ tủ cơ khí (tôn cán nguội/inox sơn tĩnh điện), Hệ thanh cái đồng (Busbar) và Thiết bị đóng cắt bảo vệ (ACB, MCCB, MCB, Contactor, Relay).",
      "Phân chia theo cấp: Tủ điện tổng MSB -> Tủ phân phối SDB -> Tủ phân phối nhánh DB -> Tủ điều khiển phụ tải MCC/VSD.",
      "Thiết kế bắt buộc tuân theo IEC 61439-1/2 về khả năng chịu ngắn mạch Icw, độ tăng nhiệt và cấp bảo vệ vỏ tủ IP.",
    ],
    body: [
      {
        heading: "Tủ điện công nghiệp là gì? Định nghĩa theo góc nhìn kỹ sư thiết kế",
        paragraphs: [
          "Tủ điện công nghiệp (Industrial Switchboard / Low-Voltage Switchgear Assembly) là cụm thiết bị điện khép kín gồm vỏ cơ khí, thanh cái (busbar), thiết bị đóng cắt (ACB, MCCB, MCB), thiết bị bảo vệ (relay, fuse), thiết bị đo lường (ammeter, voltmeter, energy meter) và thiết bị điều khiển (contactor, biến tần, PLC). Cụm tủ được lắp ráp, đấu nối và thử nghiệm tại xưởng theo một quy trình thống nhất. Nhiệm vụ chính là phân phối và bảo vệ nguồn điện hạ thế (≤ 1000V AC) cho nhà máy, khu công nghiệp, tòa nhà và dự án điện mặt trời.",
          "Theo <strong>IEC 61439-1</strong> (Quy tắc chung) và <strong>IEC 61439-2</strong> (Tủ phân phối và điều khiển công nghiệp), tủ điện công nghiệp là một <strong>hệ thống điện hoàn chỉnh</strong>, không chỉ là vỏ chứa thiết bị. Nhà sản xuất tủ (Assembly Manufacturer) chịu trách nhiệm về tính năng điện, cơ khí, nhiệt và an toàn của cả cụm, không phải từng thiết bị lẻ bên trong.",
          "Điều này có nghĩa: Khi bạn mua tủ điện từ PTC, PTC chịu trách nhiệm về việc ACB cắt đúng dòng ngắn mạch, thanh cái đồng chịu được lực điện động khi sự cố, vỏ tủ không gây nguy hiểm cho người vận hành, và toàn bộ tủ đã qua thử nghiệm 100% trước khi xuất xưởng. Đây là điểm khác biệt cốt lõi so với việc tự mua linh kiện và lắp ráp tại công trường.",
        ],
      },
      {
        heading: "Cấu tạo chi tiết: 3 khối chính của một tủ điện hạ thế",
        paragraphs: [
          "Một tủ điện công nghiệp hoàn chỉnh gồm 3 khối chức năng, mỗi khối có yêu cầu kỹ thuật và quy trình kiểm soát riêng:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Vỏ tủ cơ khí (Enclosure):</strong> Thép tấm cán nguội CRC độ dày 1.2–2.0mm (tủ nhỏ) hoặc 2.0–3.0mm (tủ MSB lớn), qua xử lý bề mặt tẩy gỉ → phốt phát → sơn tĩnh điện RAL 7032/7035. Với môi trường ngoài trời hoặc hóa chất, dùng Inox 304/316 hoặc thép mạ kẽm nhúng nóng. Vỏ tủ quyết định cấp bảo vệ IP (Ingress Protection) và độ bền cơ học trong suốt vòng đời vận hành 15–25 năm.",
            "<strong>Hệ thanh cái đồng (Busbar System):</strong> Đồng điện phân Cu ≥ 99.9%, tiết diện tính toán theo dòng định mức In và dòng ngắn mạch chịu đựng Icw. Thanh cái được bọc co nhiệt phân pha màu (L1 vàng, L2 xanh, L3 đỏ, N xanh dương, PE xanh-vàng). Đây là \"động mạch chính\" của tủ — sai 1mm tiết diện có thể gây phát nhiệt, cháy thanh cái khi ngắn mạch.",
            "<strong>Khí cụ đóng cắt và bảo vệ (Switchgear & Protection):</strong> ACB (Air Circuit Breaker) cho dòng 630–6300A, MCCB (Moulded Case) cho 16–1600A, MCB cho nhánh nhỏ. Kèm theo: relay bảo vệ, contactor, biến dòng CT, biến áp VT, đồng hồ đo, biến tần VSD, PLC/HMI cho tủ điều khiển. Tất cả khí cụ chính hãng ABB, Schneider, Mitsubishi, LS, Socomec — có CO/CQ đầy đủ.",
          ],
        },
      },
      {
        heading: "Phân loại tủ điện công nghiệp theo vị trí trong hệ thống",
        paragraphs: [
          "Trong một hệ thống phân phối điện hạ thế điển hình của nhà máy hoặc tòa nhà, tủ điện được phân cấp theo hướng dòng điện chảy — từ trạm biến áp xuống đến phụ tải cuối:",
        ],
        table: {
          headers: ["Cấp tủ", "Vai trò", "Dòng định mức", "Thiết bị chính", "Vị trí lắp"],
          rows: [
            ["<strong>MSB</strong> (Main Switchboard)", "Tủ tổng — nhận nguồn từ MBA/máy phát", "800A – 6300A", "ACB, tụ bù, ATS, đo lường", "Phòng trạm điện / hầm"],
            ["<strong>SDB</strong> (Sub-Distribution)", "Phân phối khu vực trung gian", "250A – 2500A", "MCCB tổng + nhánh", "Phòng kỹ thuật phân xưởng"],
            ["<strong>DB</strong> (Distribution Board)", "Phân phối nhánh cuối", "32A – 630A", "MCB, RCCB, DB loại A/B/C/D", "Tầng / khu vực làm việc"],
            ["<strong>MCC</strong> (Motor Control Center)", "Điều khiển động cơ", "Theo kW motor", "Contactor, relay nhiệt, VSD", "Phòng điện phân xưởng"],
            ["<strong>ATS</strong> (Auto Transfer)", "Chuyển nguồn lưới – máy phát", "100A – 4000A", "ACB/MCCB + controller", "Phòng trạm điện"],
          ],
        },
        callout: {
          type: "info",
          title: "Lưu ý cho kỹ sư thiết kế",
          text: "Việc phân cấp sai (ví dụ: dùng DB thay SDB cho phân xưởng tải nặng) là nguyên nhân hàng đầu gây trip nhầm và cháy tủ. Nguyên tắc: mỗi cấp tủ phải có dòng cắt ngắn mạch Icu ≥ dòng ngắn mạch tính toán tại điểm lắp, và phối hợp chọn lọc (selectivity) giữa các cấp để sự cố nhánh không làm trip tủ tổng.",
        },
      },
      {
        heading: "Tiêu chuẩn áp dụng: IEC 61439 thay thế IEC 60439 — điều gì thay đổi?",
        paragraphs: [
          "Từ 2014, tiêu chuẩn <strong>IEC 61439</strong> chính thức thay thế IEC 60439 cũ, với thay đổi quan trọng nhất là <strong>phân định rõ trách nhiệm</strong> giữa Nhà sản xuất thiết kế gốc (Original Manufacturer — hãng khí cụ) và Nhà sản xuất lắp ráp tủ (Assembly Manufacturer — xưởng tủ như PTC).",
          "Theo IEC 61439-1, nhà lắp ráp tủ phải chứng minh tủ đạt yêu cầu thông qua 1 trong 2 đường: <strong>Type Test</strong> (thử nghiệm kiểu — thử 1 tủ đại diện trong phòng lab độc lập) hoặc <strong>Derived Verification</strong> (suy luận từ tủ đã Type Test + tính toán). Trong đó, <strong>Routine Test 100%</strong> là bắt buộc cho MỖI tủ xuất xưởng — không có ngoại lệ.",
          "Tại PTC, mọi tủ điện xuất xưởng đều trải qua Routine Test theo IEC 61439-2 Clause 11, bao gồm: kiểm tra liên tục mạch bảo vệ PE, đo điện trở cách điện (≥ 1 MΩ), thử nghiệm điện áp chịu đựng (Dielectric test 2500V/1 phút), kiểm tra chức năng đóng cắt, và kiểm tra khoảng cách điện khí (creepage & clearance). Biên bản thử nghiệm được bàn giao cùng hồ sơ nghiệm thu.",
        ],
      },
      {
        heading: "Quy trình sản xuất tủ điện tại xưởng: 7 bước khép kín",
        paragraphs: [
          "Khác với việc mua linh kiện và lắp ráp tại công trường, sản xuất tủ tại xưởng có quy trình 7 bước khép kín, cho phép kiểm soát chất lượng từng công đoạn:",
        ],
        list: {
          ordered: true,
          items: [
            "<strong>Tiếp nhận & Thiết kế kỹ thuật:</strong> Bóc tách sơ đồ đơn tuyến, tính toán dòng In/Icw, chọn tiết diện thanh cái, phát hành bản vẽ Layout 2D/3D và sơ đồ mạch để chủ đầu tư phê duyệt.",
            "<strong>Gia công cơ khí CNC:</strong> Cắt laser/plasma, đột CNC lỗ lắp thiết bị, chấn thủy lực tôn vỏ — đảm bảo dung sai ±0.2mm cho lắp ghép cánh tủ.",
            "<strong>Xử lý bề mặt & Sơn tĩnh điện:</strong> Tẩy dầu → tẩy gỉ → phốt phát → rửa nước → sấy → phun bột polyester → sấy 200°C/15 phút. Lớp sơn dày 60–80 µm, bám dính cao.",
            "<strong>Lắp ráp cơ khí & Thanh cái:</strong> Lắp khung vỏ, tấm ngăn Form, uốn và siết lực thanh cái đồng bằng cờ lê lực (torque wrench) theo moment nhà sản xuất quy định.",
            "<strong>Lắp thiết bị & Đấu nối nhị thứ:</strong> Lắp ACB/MCCB/contactor, đi dây điều khiển trong máng nhựa, bấm cosse, đánh số dây theo bản vẽ — mỗi dây có mã duy nhất.",
            "<strong>QC & Routine Test 100%:</strong> Đo cách điện, dielectric test, kiểm tra PE continuity, mô phỏng đóng cắt — ghi biên bản cho từng tủ.",
            "<strong>Đóng gói & Bàn giao:</strong> Bọc PE chống xước, đóng kiện gỗ, kèm hồ sơ: bản vẽ As-built, CO/CQ, biên bản Routine Test, phiếu xuất xưởng.",
          ],
        },
      },
      {
        heading: "5 sai lầm thường gặp khi đặt sản xuất tủ điện — và cách tránh",
        paragraphs: [
          "Trong hơn 10 năm thực hiện dự án nhà máy FDI và KCN, đội ngũ PTC ghi nhận 5 sai lầm lặp lại nhiều nhất từ phía chủ đầu tư và nhà thầu M&E:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Không tính dòng ngắn mạch Icw, chỉ quan tâm dòng định mức In:</strong> Hậu quả: thanh cái đồng bị biến dạng hoặc cháy khi sự cố ngắn mạch. <em>Giải pháp:</em> Yêu cầu nhà sản xuất tính toán Icw dựa trên công suất ngắn mạch của trạm biến áp và impedance cáp.",
            "<strong>Chọn Form tủ sai:</strong> Dùng Form 1 (không phân tách) cho nhà máy liên tục → nguy hiểm khi bảo trì. <em>Khuyến nghị:</em> Form 2b tối thiểu cho MSB, Form 3b/4b cho nhà máy FDI yêu cầu nghiêm ngặt.",
            "<strong>Không yêu cầu Routine Test:</strong> Nhiều dự án nhận tủ không có biên bản thử nghiệm → không nghiệm thu được, không bảo hiểm. <em>Bắt buộc:</em> Routine Test 100% theo IEC 61439-2, biên bản kèm hồ sơ.",
            "<strong>Chỉ định hãng khí cụ không tương thích:</strong> Ví dụ: yêu cầu ACB hãng A nhưng MCCB hãng B → vấn đề phối hợp selectivity, không có catalog kỹ thuật chéo. <em>Nên:</em> Đồng bộ 1-2 hãng chính, trừ trường hợp chủ đầu tư chỉ định rõ.",
            "<strong>Bỏ qua cấp bảo vệ IP:</strong> Đặt tủ IP31 ngoài hành lang ẩm → chập mạch do đọng sương. <em>Quy tắc:</em> IP31/IP42 cho phòng điện trong nhà khô, IP54 cho khu ẩm, IP55/IP65 cho ngoài trời.",
          ],
        },
      },
      {
        heading: "Khi nào nên đặt sản xuất tủ điện thay vì mua tủ sẵn?",
        paragraphs: [
          "Tủ điện công nghiệp <strong>gần như luôn phải đặt sản xuất theo bản vẽ</strong>, vì mỗi dự án có sơ đồ đơn tuyến, phụ tải và yêu cầu hãng thiết bị khác nhau. Tủ \"sẵn\" chỉ phù hợp cho DB nhỏ (≤ 100A) trong dân dụng hoặc văn phòng.",
          "Đối với nhà máy, KCN, tòa nhà cao tầng, dự án solar — đặt sản xuất là bắt buộc. Lý do: (1) dòng định mức và Icw phải tính theo trạm biến áp cụ thể, (2) cấu hình tụ bù và ATS phụ thuộc phụ tải thực, (3) yêu cầu hồ sơ nghiệm thu (CO/CQ, Routine Test, As-built) chỉ có khi sản xuất theo dự án.",
          "PTC nhận đặt sản xuất tủ điện từ bản vẽ hoặc BOQ — kỹ sư sẽ bóc tách, tính toán và gửi báo giá kỹ thuật trong 24h. Quy trình phản hồi nhanh giúp nhà thầu M&E và EPC solar không bị chậm tiến độ chờ báo giá.",
        ],
        callout: {
          type: "tip",
          title: "Gửi bản vẽ ngay — nhận báo giá trong 24h",
          text: "Quý kỹ sư / nhà thầu có thể gửi sơ đồ đơn tuyến hoặc BOQ qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư sẽ bóc tách, rà soát thông số thiếu, tính toán Icw và gửi báo giá kỹ thuật kèm tiến độ trong vòng 24 giờ làm việc.",
        },
      },
    ],
  },
  {
    slug: "cach-chon-tu-dien-msb",
    title: "Cách chọn tủ điện tổng MSB cho nhà máy: Dòng định mức, Icw và Form tủ",
    category: "Hướng dẫn lựa chọn",
    readTime: "7 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2025-01-15",
    dateModified: "2026-02-18",
    quickAnswer: "Để chọn tủ điện MSB đúng cho nhà máy, kỹ sư cần xác định: công suất trạm biến áp (kVA) để tính dòng định mức tổng (A), dòng cắt ngắn mạch trạm (kA) để tính dòng ngắn mạch chịu đựng Icw của thanh cái, và cấp cách ly Form (Form 1 đến 4b) phù hợp với mức độ an toàn liên tục của nhà máy.",
    summary: [
      "Dòng định mức tủ MSB: Tính toán theo công suất máy biến áp (VD: Trạm 1600kVA -> Chọn MSB dòng 2500A; Trạm 2500kVA -> Chọn MSB dòng 4000A).",
      "Dòng ngắn mạch Icw: Thanh cái đồng phải chịu được dòng ngắn mạch trong 1s hoặc 3s mà không bị biến dạng cơ học hoặc phá hủy nhiệt.",
      "Lựa chọn Form tủ: Form 2b hoặc Form 3b/4b là khuyến nghị tiêu chuẩn cho các nhà máy sản xuất liên tục để an toàn khi thao tác bảo trì ngăn lộ.",
    ],
    body: [
      {
        heading: "Vì sao chọn sai MSB là rủi ro lớn nhất trong hệ thống điện nhà máy",
        paragraphs: [
          "Tủ điện tổng MSB (Main Switchboard) là <strong>điểm duy nhất</strong> kết nối giữa trạm biến áp và toàn bộ hệ thống phụ tải nhà máy. Nếu MSB sai thông số — không đủ dòng định mức, không chịu được dòng ngắn mạch, hoặc Form tủ không đảm bảo an toàn bảo trì — hậu quả không chỉ là trip điện mà có thể là <strong>cháy thanh cái, hỏng thiết bị hàng tỷ đồng, và đình công nhà máy nhiều ngày</strong>.",
          "Khác với DB hay SDB có thể thay thế tương đối dễ, MSB là tủ \"trái tim\" — thay thế hoặc sửa chữa lớn đồng nghĩa với việc <strong>cắt điện toàn nhà máy</strong>. Vì vậy, đầu tư thời gian chọn đúng thông số MSB ngay từ giai đoạn thiết kế là việc quan trọng nhất mà kỹ sư M&E và chủ đầu tư cần làm.",
        ],
      },
      {
        heading: "Bước 1: Tính dòng định mức In của MSB theo công suất trạm biến áp",
        paragraphs: [
          "Dòng định mức tủ MSB được tính từ công suất máy biến áp (MBA) và điện áp phía hạ thế (0.4kV / 400V, 3 pha). Công thức cơ bản:",
          "<strong>In = S × 1000 / (√3 × U)</strong> — trong đó S là công suất MBA (kVA), U là điện áp hạ thế (V).",
          "Bảng tham khảo dòng định mức MSB theo công suất trạm biến áp phổ biến tại Việt Nam:",
        ],
        table: {
          headers: ["Công suất MBA", "Dòng định mức tính toán", "Dòng MSB nên chọn", "ACB tổng nên dùng"],
          rows: [
            ["630 kVA", "~909A", "1000A – 1250A", "ACB 1600A (có dư)"],
            ["1.000 kVA", "~1443A", "1600A – 2000A", "ACB 2000A hoặc 2500A"],
            ["1.600 kVA", "~2309A", "2500A – 3200A", "ACB 3200A hoặc 4000A"],
            ["2.000 kVA", "~2887A", "3200A – 4000A", "ACB 4000A"],
            ["2.500 kVA", "~3608A", "4000A – 5000A", "ACB 5000A hoặc 6300A"],
          ],
        },
        callout: {
          type: "info",
          title: "Tại sao chọn dòng MSB lớn hơn dòng tính toán?",
          text: "Dòng MSB luôn chọn cao hơn dòng tính toán 20–30% để: (1) có dư lượng khi mở rộng nhà máy, (2) giảm phát nhiệt thanh cái ở dòng vận hành liên tục, (3) ACB hoạt động ở vùng 60–80% In sẽ bền tiếp điểm hơn.",
        },
      },
      {
        heading: "Bước 2: Xác định dòng ngắn mạch chịu đựng Icw — thông số sống còn",
        paragraphs: [
          "Icw (Rated short-time withstand current) là dòng ngắn mạch mà thanh cái đồng của MSB phải chịu được trong thời gian quy định (thường 1 giây) mà không bị biến dạng cơ học, hàn dính hoặc phá hủy nhiệt. Đây là thông số <strong>nhiều kỹ sư bỏ qua nhất</strong> và cũng là nguyên nhân hàng đầu gây cháy tủ.",
          "Dòng ngắn mạch phía hạ thế của trạm biến áp phụ thuộc vào: công suất MBA (MBA càng lớn, dòng ngắn mạch càng cao), impedance ngắn mạch của MBA (thường 4–6%), và impedance cáp từ MBA đến tủ. Công thức rút gọn:",
          "<strong>Isc ≈ S / (√3 × U × Z%)</strong> — với Z% là tổng impedance % của MBA + cáp + lưới.",
        ],
        table: {
          headers: ["Công suất MBA", "Isc ước tính (Z=5%)", "Icw thanh cái nên chọn", "Icu ACB nên chọn"],
          rows: [
            ["630 kVA", "~18 kA", "25 kA / 1s", "≥ 36 kA"],
            ["1.000 kVA", "~28 kA", "35–42 kA / 1s", "≥ 50 kA"],
            ["1.600 kVA", "~46 kA", "50–65 kA / 1s", "≥ 65 kA"],
            ["2.000 kVA", "~58 kA", "65 kA / 1s", "≥ 65–85 kA"],
            ["2.500 kVA", "~72 kA", "80–100 kA / 1s", "≥ 100 kA"],
          ],
        },
        callout: {
          type: "warning",
          title: "Cảnh báo kỹ thuật",
          text: "Nếu Icw thanh cái < Isc thực tế, khi ngắn mạch xảy ra, thanh cái đồng sẽ bị uốn cong do lực điện động (electrodynamic force) và hàn dính vào khung tủ — gây cháy tủ và có thể lan cháy phòng trạm điện. Đây là sự cố không thể sửa chữa, phải thay toàn bộ tủ.",
        },
      },
      {
        heading: "Bước 3: Chọn cấp phân tách Form tủ theo yêu cầu an toàn bảo trì",
        paragraphs: [
          "Form tủ (Form of separation) quy định mức độ cách ly vật lý giữa thanh cái chính và các ngăn thiết bị, ảnh hưởng trực tiếp đến <strong>an toàn khi bảo trì tủ đang có điện</strong>. IEC 61439-1 định nghĩa 4 cấp Form chính:",
        ],
        table: {
          headers: ["Form", "Phân tách", "Ứng dụng", "Khuyến nghị"],
          rows: [
            ["Form 1", "Không phân tách", "DB nhỏ, tủ phụ trợ", "Chỉ dùng tải nhỏ, không bảo trì khi chạy"],
            ["Form 2b", "Thanh cái tách với đơn vị chức năng", "SDB, MSB nhà máy vừa", "Tối thiểu cho MSB nhà máy"],
            ["Form 3b", "Thanh cái + đơn vị chức năng tách nhau", "MSB nhà máy FDI, MCC", "Khuyến nghị cho nhà máy liên tục"],
            ["Form 4b", "Tách hoàn toàn từng ngăn + thanh cái tách", "Data center, bệnh viện, FDI nghiêm ngặt", "Tối ưu an toàn, chi phí cao nhất"],
          ],
        },
      },
      {
        heading: "Khuyến nghị chọn Form theo loại hình nhà máy",
        paragraphs: [
          "Đối với nhà máy sản xuất liên tục (FDI, chế biến, thực phẩm), PTC khuyến nghị <strong>Form 3b tối thiểu</strong> cho MSB — cho phép bảo trì một ngăn lộ mà không cần cắt điện toàn tủ. Form 4b dành cho data center, bệnh viện hoặc dự án FDI có yêu cầu đặc biệt về an toàn vận hành.",
        ],
      },
      {
        heading: "Bước 4: Lựa chọn thiết bị đóng cắt và hãng khí cụ",
        paragraphs: [
          "ACB tổng (Air Circuit Breaker) là thiết bị quan trọng nhất trong MSB. Các thông số cần chọn: In (dòng định mức), Icu (dòng cắt ngắn mạch tối đa), Ics (dòng cắt ngắn mạch dịch vụ), Icw (dòng chịu đựng ngắn hạn), và số cực (3P hoặc 4P).",
          "Tại thị trường Việt Nam, 4 hãng ACB phổ biến nhất cho MSB công nghiệp:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Schneider Electric</strong> (Masterpact MTZ): Mạnh về thông minh hóa (MicroLogic), ecosystem Modbus/IEC 61850, phổ biến trong dự án FDI châu Âu.",
            "<strong>ABB</strong> (Emax 2): Tích hợp đo lường năng lượng, phổ biến trong dự án châu Á và data center.",
            "<strong>Mitsubishi Electric</strong> (AE-SW): Bền cơ khí, phổ biến trong dự án Nhật Bản và Đài Loan.",
            "<strong>LS Electric</strong> (Metasol): Tỷ lệ giá/thông số tốt, phổ biến trong dự án KCN Việt Nam.",
          ],
        },
        callout: {
          type: "tip",
          title: "Đồng bộ hãng — giảm rủi ro phối hợp",
          text: "PTC khuyến nghị dùng đồng bộ 1 hãng chính cho ACB + MCCB + relay trong cùng MSB để đảm bảo phối hợp selectivity (chọn lọc) và có catalog kỹ thuật thống nhất. Khi chủ đầu tư yêu cầu mix hãng, PTC sẽ tính toán lại phối hợp và phát hành coordination curve để phê duyệt.",
        },
      },
      {
        heading: "Bước 5: Tụ bù công suất phản kháng và ATS — 2 hạng mục thường đi kèm MSB",
        paragraphs: [
          "MSB trong nhà máy thường tích hợp 2 hạng mục phụ trợ quan trọng:",
          "<strong>Tụ bù tự động (APFC — Automatic Power Factor Correction):</strong> Bù công suất phản kháng để duy trì cos φ ≥ 0.95, tránh bị EVN phạt phí无功. Tủ tụ 6–12 cấp, có/không cuộn kháng lọc sóng hài (detuned reactor) nếu nhà máy có tải phi tuyến (biến tần, lò trung tần). PTC thiết kế tủ tụ riêng hoặc tích hợp trong MSB tùy không gian.",
          "<strong>ATS (Auto Transfer Switch):</strong> Tự động chuyển nguồn giữa lưới điện và máy phát dự phòng. ATS có thể tích hợp trong MSB (dùng ACB 2 nguồn + controller DeepSea/ComAp) hoặc làm tủ riêng. Thời gian chuyển typically 3–30 giây (open transition) hoặc < 200ms (closed transition, cần hòa đồng bộ).",
        ],
      },
      {
        heading: "Checklist hồ sơ gửi nhà sản xuất để nhận báo giá MSB chính xác",
        paragraphs: [
          "Để nhận báo giá MSB chính xác và nhanh nhất, kỹ sư / nhà thầu cần gửi cho PTC các thông tin sau:",
        ],
        list: {
          ordered: true,
          items: [
            "Sơ đồ đơn tuyến (Single-line diagram) — rõ dòng ACB tổng, dòng các nhánh ra, vị trí tụ bù/ATS.",
            "Công suất trạm biến áp (kVA) và điện áp (22kV/0.4kV) — để PTC tính lại Icw nếu chưa có.",
            "Chỉ định hãng ACB/MCCB (nếu có) — hoặc để PTC đề xuất theo ngân sách.",
            "Cấp Form tủ yêu cầu (Form 2b/3b/4b) — hoặc để PTC khuyến nghị theo loại hình nhà máy.",
            "Cấp bảo vệ IP (IP31/IP42/IP54) — theo vị trí lắp đặt.",
            "Mốc tiến độ giao hàng — để PTC lên kế hoạch sản xuất cuốn chiếu nếu dự án gấp.",
            "Yêu cầu hồ sơ nghiệm thu — CO/CQ, Routine Test, As-built, shop drawing...",
          ],
        },
        callout: {
          type: "tip",
          title: "Gửi bản vẽ MSB qua Zalo — nhận báo giá 24h",
          text: "Ban Kỹ thuật PTC tiếp nhận bản vẽ đơn tuyến hoặc BOQ qua Zalo, bóc tách thông số, tính toán Icw và gửi báo giá kỹ thuật kèm tiến độ trong 24 giờ. Nếu thông số thiếu, kỹ sư PTC sẽ chủ động liên hệ làm rõ — không để khách hàng tự bổ sung.",
        },
      },
    ],
  },
  {
    slug: "tieu-chuan-iec-61439-la-gi",
    title: "Tiêu chuẩn IEC 61439 trong sản xuất tủ điện hạ thế: Type Test & Routine Test",
    category: "Tiêu chuẩn & QC",
    readTime: "8 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2025-01-20",
    dateModified: "2026-02-20",
    quickAnswer: "IEC 61439 là tiêu chuẩn quốc tế áp dụng cho cụm đóng cắt và điều khiển hạ thế (thay thế chuẩn cũ IEC 60439). Tiêu chuẩn quy định nghiêm ngặt trách nhiệm của Nhà sản xuất thiết kế gốc (Original Manufacturer) qua Type Test và Nhà sản xuất lắp ráp tủ (Assembly Manufacturer như PTC) qua 100% Routine Test trước khi xuất xưởng.",
    summary: [
      "Phân biệt IEC 61439-1 (Quy tắc chung) và IEC 61439-2 (Tủ phân phối và điều khiển công nghiệp).",
      "Routine Test bắt buộc 100% từng tủ: Kiểm tra liên tục mạch bảo vệ, đo cách điện (Insulation resistance), thử nghiệm điện áp xoay chiều chịu áp (Dielectric test) và kiểm tra chức năng đóng cắt.",
      "Hồ sơ nghiệm thu: Tủ xuất xưởng tại PTC luôn đi kèm Biên bản Routine Test và phiếu xuất xưởng chuẩn ISO 9001:2015.",
    ],
    body: [
      {
        heading: "IEC 61439 là gì? Bối cảnh ra đời và sự thay đổi từ IEC 60439",
        paragraphs: [
          "IEC 61439 là bộ tiêu chuẩn quốc tế của Ủy ban Điện kỹ thuật Quốc tế (IEC) quy định yêu cầu thiết kế, sản xuất, thử nghiệm và nghiệm thu <strong>cụm đóng cắt và điều khiển hạ thế</strong> (Low-voltage switchgear and controlgear assemblies) — hoạt động ở điện áp ≤ 1000V AC (50/60Hz) hoặc ≤ 1500V DC.",
          "Tiêu chuẩn này chính thức thay thế IEC 60439 từ năm 2014, sau hơn 10 năm nghiên cứu. Nguyên nhân thay đổi: IEC 60439 cũ có lỗ hổng lớn về <strong>phân định trách nhiệm</strong> — không rõ ai chịu trách nhiệm khi tủ lỗi: hãng thiết bị? nhà lắp ráp? nhà tư vấn? IEC 61439 giải quyết bằng cách định nghĩa rõ 2 vai trò:",
          "<strong>Original Manufacturer (OM)</strong> — hãng thiết kế thiết bị gốc (ABB, Schneider...) chịu trách nhiệm về Type Test và cung cấp thông số kỹ thuật cho lắp ráp. <strong>Assembly Manufacturer (AM)</strong> — xưởng sản xuất tủ (như PTC) chịu trách nhiệm về việc tủ lắp ráp đúng thông số OM, thực hiện Routine Test 100% và phát hành hồ sơ nghiệm thu.",
        ],
      },
      {
        heading: "Cấu trúc bộ tiêu chuẩn IEC 61439 — phần nào áp dụng cho dự án nào",
        paragraphs: [
          "Bộ IEC 61439 gồm nhiều phần, mỗi phần áp dụng cho một loại tủ cụ thể:",
        ],
        table: {
          headers: ["Phần", "Phạm vi áp dụng", "Loại tủ điển hình"],
          rows: [
            ["IEC 61439-1", "Quy tắc chung — áp dụng cho tất cả", "Cơ sở cho mọi phần khác"],
            ["IEC 61439-2", "Tủ phân phối và điều khiển công nghiệp", "MSB, SDB, MCC, ATS — PTC áp dụng phần này"],
            ["IEC 61439-3", "Tủ phân phối nhà ở / thương mại DB", "DB dân dụng, tủ công tơ"],
            ["IEC 61439-4", "Tủ lắp ngoài công trường (ASN)", "Tủ cấp nguồn thi công tạm"],
            ["IEC 61439-5", "Tủ phân phối công cộng lưới điện", "Tủ hạ thế trạm biến áp EVN"],
            ["IEC 61439-6", "Thanh cái dẫn điện dạng busway", "Busbar trunking system"],
          ],
        },
      },
      {
        heading: "Phần nào áp dụng cho dự án tại Việt Nam?",
        paragraphs: [
          "Đối với nhà máy, KCN, tòa nhà và dự án solar tại Việt Nam, <strong>IEC 61439-1 + IEC 61439-2</strong> là 2 phần áp dụng chính. Tương đương quốc gia: <strong>TCVN 7994-1:2009</strong> (tương đương IEC 60439-1 cũ, đang trong quá trình cập nhật theo IEC 61439).",
        ],
      },
      {
        heading: "Type Test vs Routine Test — 2 lớp thử nghiệm bắt buộc",
        paragraphs: [
          "IEC 61439 quy định 2 lớp thử nghiệm độc lập, mỗi lớp có mục đích và phạm vi khác nhau:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Type Test (Thử nghiệm kiểu):</strong> Thử nghiệm 1 tủ đại diện trong phòng lab độc lập (như QUATEST 3). Bao gồm 13 hạng mục thử nghiệm: chịu nhiệt, chịu ngắn mạch, bảo vệ IP, khoảng cách điện khí, độ bền cơ khí, rò rỉ dòng điện, cách điện, điện áp chịu đựng, tăng nhiệt, sợi dây nhị thứ, EMC... Type Test chỉ làm 1 lần cho 1 thiết kế tủ, do hãng thiết bị gốc (OM) thực hiện.",
            "<strong>Routine Test (Thử nghiệm xuất xưởng):</strong> Thử nghiệm 100% MỖI tủ trước khi xuất xưởng — không có ngoại lệ. Do nhà lắp ráp (AM/PTC) thực hiện tại xưởng. Bao gồm 4 hạng mục cốt lõi theo IEC 61439-2 Clause 11.",
          ],
        },
        callout: {
          type: "warning",
          title: "Rủi ro khi nhận tủ không có Routine Test",
          text: "Nhiều dự án nhỏ hoặc nhà thầu tự lắp ráp không thực hiện Routine Test. Hậu quả: (1) không phát hiện được lỗi đấu nối nhị thứ, (2) không phát hiện cách điện kém do va đập vận chuyển, (3) không nghiệm thu được theo IEC, (4) bảo hiểm từ chối bồi thường khi sự cố. <strong>Luôn yêu cầu biên bản Routine Test khi nhận tủ.</strong>",
        },
      },
      {
        heading: "4 hạng mục Routine Test 100% theo IEC 61439-2 Clause 11",
        paragraphs: [
          "Tại PTC, mỗi tủ điện xuất xưởng đều trải qua 4 hạng mục Routine Test, được ghi vào biên bản và bàn giao cùng hồ sơ nghiệm thu:",
        ],
        list: {
          ordered: true,
          items: [
            "<strong>Kiểm tra liên tục mạch bảo vệ PE (Protective earth continuity):</strong> Đo điện trở giữa terminal PE và mọi phần kim loại trần của vỏ tủ. Điện trở phải ≤ 0.1Ω — đảm bảo khi có dòng rò, bảo vệ sẽ trip trước khi người tiếp xúc bị giật.",
            "<strong>Đo điện trở cách điện (Insulation resistance test):</strong> Đo bằng megohmmeter 500V/1000V giữa pha-pha, pha-vỏ, pha-PE. Điện trở cách điện phải ≥ 1 MΩ — phát hiện ẩm, bẩn, hoặc cách điện bị thủng.",
            "<strong>Thử nghiệm điện áp xoay chiều chịu đựng (Dielectric test / Power frequency withstand):</strong> Áp điện áp thử nghiệm 2500V AC (cho tủ 400V) giữa tất cả pha và vỏ trong 1 giây. Không được đánh thủng cách điện — kiểm tra khoảng cách điện khí và chất lượng cách điện.",
            "<strong>Kiểm tra chức năng đóng cắt (Function test):</strong> Mô phỏng thao tác đóng/cắt ACB/MCCB, kiểm tra relay bảo vệ trip đúng thông số, kiểm tra tín hiệu báo, interlock cơ khí và điện. Đảm bảo tủ vận hành đúng bản vẽ nguyên lý.",
          ],
        },
      },
      {
        heading: "Hồ sơ nghiệm thu IEC 61439 — chủ đầu tư cần yêu cầu gì?",
        paragraphs: [
          "Khi nghiệm thu tủ điện theo IEC 61439, chủ đầu tư / tư vấn giám sát cần yêu cầu nhà sản xuất cung cấp bộ hồ sơ đầy đủ:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Biên bản Routine Test</strong> — ghi rõ 4 hạng mục, kết quả pass/fail, ngày thử, người thử, số serial tủ.",
            "<strong>Bản vẽ As-built</strong> — sơ đồ nguyên lý hoàn công, sơ đồ bố trí thiết bị (Layout), sơ đồ đấu nối nhị thứ — có chữ ký kỹ sư thiết kế và kiểm duyệt.",
            "<strong>CO/CQ thiết bị</strong> — Certificate of Origin / Certificate of Quality cho ACB, MCCB, relay, biến tần... từ hãng chính hãng.",
            "<strong>Phiếu xuất xưởng</strong> — theo hệ thống ISO 9001:2015, ghi số lot, ngày sản xuất, kiểm tra QC.",
            "<strong>Tài liệu vận hành</strong> — hướng dẫn vận hành, bảo trì, thông số cài đặt relay, lịch bảo trì định kỳ.",
          ],
        },
        callout: {
          type: "tip",
          title: "PTC bàn giao đầy đủ hồ sơ IEC 61439",
          text: "Mọi tủ điện xuất xưởng từ PTC đều đi kèm bộ hồ sơ nghiệm thu đầy đủ: Biên bản Routine Test, bản vẽ As-built, CO/CQ thiết bị chính hãng, phiếu xuất xưởng ISO 9001. Quý kỹ sư / tư vấn giám sát có thể yêu cầu xem mẫu hồ sơ trước khi đặt hàng qua Zalo Ban Kỹ thuật PTC.",
        },
      },
    ],
  },
  {
    slug: "phan-biet-msb-sdb-db",
    title: "Phân biệt tủ điện MSB, SDB và DB trong hệ thống phân phối điện tòa nhà và nhà máy",
    category: "Kiến thức kỹ thuật",
    readTime: "5 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2025-02-01",
    dateModified: "2026-02-20",
    quickAnswer: "MSB (Main Switchboard) là tủ điện tổng nhận nguồn trực tiếp từ máy biến áp hoặc máy phát; SDB (Sub-Distribution Board) là tủ phân phối khu vực trung gian nhận nguồn từ MSB; DB (Distribution Board) là tủ phân phối tầng/nhánh cấp trực tiếp đến thiết bị tiêu thụ cuối như chiếu sáng, ổ cắm và máy móc.",
    summary: [
      "MSB: Dòng lớn (800A – 6300A), chứa ACB, tụ bù, ATS, thường đặt tại phòng trạm điện tầng bầm/nhà điện riêng.",
      "SDB: Dòng trung bình (250A – 2500A), chứa MCCB tổng và các nhánh phân phối, đặt tại phòng kỹ thuật phân xưởng hoặc tầng lửng.",
      "DB: Dòng nhỏ (32A – 630A), chứa MCCB/MCB, chống giật RCCB, đặt trực tiếp tại các khu vực làm việc, tầng văn phòng.",
    ],
    body: [
      {
        heading: "Sơ đồ phân cấp hệ thống điện: MSB → SDB → DB → Tải cuối",
        paragraphs: [
          "Trong một hệ thống phân phối điện hạ thế điển hình, dòng điện đi từ trạm biến áp qua các cấp tủ trước khi đến thiết bị tiêu thụ cuối. Mỗi cấp tủ có vai trò, dòng định mức, thiết bị và vị trí lắp khác nhau. Hiểu đúng phân cấp này giúp kỹ sư thiết kế tránh 2 sai lầm phổ biến: (1) dùng tủ sai cấp cho tải thực tế, (2) phối hợp selectivity sai giữa các cấp.",
          "Sơ đồ phân cấp tiêu chuẩn cho nhà máy / tòa nhà:",
          "<strong>Trạm biến áp 22kV/0.4kV → MSB (tủ tổng) → SDB (tủ khu vực) → DB (tủ nhánh) → Phụ tải (chiếu sáng, ổ cắm, motor, HVAC)</strong>",
          "Mỗi mũi tên là 1 cấp giảm dòng và tăng số nhánh. Phối hợp selectivity (chọn lọc) giữa các cấp đảm bảo khi sự cố ở DB, chỉ DB trip — không lan lên SDB hay MSB.",
        ],
      },
      {
        heading: "Bảng so sánh đầy đủ: MSB vs SDB vs DB",
        table: {
          headers: ["Tiêu chí", "MSB", "SDB", "DB"],
          rows: [
            ["Vị trí trong hệ thống", "Tủ tổng — nhận nguồn từ MBA", "Trung gian — nhận từ MSB", "Nhánh cuối — nhận từ SDB"],
            ["Dòng định mức In", "800A – 6300A", "250A – 2500A", "32A – 630A"],
            ["Dòng ngắn mạch Icw", "25–100 kA / 1s", "15–42 kA / 1s", "6–18 kA / 1s"],
            ["Thiết bị chính", "ACB, tụ bù, ATS, đo lường", "MCCB tổng + MCCB nhánh", "MCB/MCCB + RCCB"],
            ["Cấp Form", "Form 2b / 3b / 4b", "Form 1 / 2b", "Form 1"],
            ["Cấp bảo vệ IP", "IP31 – IP42", "IP31 – IP54", "IP31 – IP65"],
            ["Vị trí lắp", "Phòng trạm điện / hầm", "Phòng kỹ thuật phân xưởng", "Tầng / khu vực làm việc"],
            ["Chi phí tương đối", "100–500 triệu+", "20–80 triệu", "3–15 triệu"],
            ["Tần suất thao tác", "Thấp (bảo trì định kỳ)", "Trung bình", "Cao (người dùng cuối)"],
          ],
        },
      },
      {
        heading: "MSB (Main Switchboard) — khi nào cần và thông số gì quan trọng",
        paragraphs: [
          "MSB là tủ duy nhất kết nối trực tiếp với trạm biến áp hoặc máy phát điện. Toàn bộ dòng điện của nhà máy đi qua MSB, nên đây là tủ <strong>quan trọng nhất và đắt nhất</strong> trong hệ thống.",
          "Thông số quan trọng nhất khi chọn MSB: <strong>Icw (dòng ngắn mạch chịu đựng)</strong> — phải ≥ dòng ngắn mạch tính toán tại đầu ra trạm biến áp. Nếu Icw không đủ, thanh cái đồng sẽ bị biến dạng hoặc cháy khi sự cố. Xem chi tiết cách tính Icw trong bài viết <a href=\"/kien-thuc/cach-chon-tu-dien-msb\" class=\"text-primary font-medium\">Cách chọn tủ điện tổng MSB</a>.",
          "MSB thường tích hợp: ACB tổng (3P/4P), các MCCB nhánh cấp cho SDB, tủ tụ bù APFC, ATS chuyển nguồn lưới-máy phát, hệ thống đo lường (ammeter, voltmeter, energy meter, power quality meter). Đối với nhà máy FDI, MSB thường yêu cầu Form 3b/4b và có hệ thống giám sát từ xa (Modbus/IEC 61850).",
        ],
      },
      {
        heading: "SDB (Sub-Distribution Board) — vai trò trung gian và lưu ý thiết kế",
        paragraphs: [
          "SDB là tủ phân phối khu vực, nhận nguồn từ MSB và phân phối đến các DB nhánh. SDB thường đặt tại phòng kỹ thuật của từng phân xưởng hoặc tầng lửng tòa nhà — gần phụ tải để giảm chiều dài cáp nhánh.",
          "Thông số quan trọng khi chọn SDB: <strong>dòng MCCB tổng</strong> (phối hợp selectivity với ACB cấp trên ở MSB) và <strong>số nhánh ra</strong> (mỗi nhánh cấp cho 1 DB hoặc 1 nhóm tải). SDB thường dùng Form 1 hoặc Form 2b — không cần Form 3b/4b như MSB vì dòng nhỏ hơn và thao tác bảo trì ít hơn.",
          "Sai lầm thường gặp: dùng SDB thay DB cho tải nhỏ nhiều nhánh → tủ quá lớn, lãng phí. Hoặc dùng DB thay SDB cho phân xưởng tải nặng → MCCB không đủ Icu, trip nhầm. Nguyên tắc: SDB cho khu vực có tổng tải > 250A, DB cho khu vực < 250A.",
        ],
      },
      {
        heading: "DB (Distribution Board) — tủ nhánh cuối và yêu cầu an toàn người dùng",
        paragraphs: [
          "DB là tủ phân phối cuối cùng, cấp nguồn trực tiếp đến thiết bị tiêu thụ: chiếu sáng, ổ cắm, máy văn phòng, thiết bị phụ trợ. DB có dòng nhỏ (32–630A) nhưng lại là tủ <strong>tiếp xúc nhiều nhất với người dùng cuối</strong> — nên yêu cầu an toàn chống giật là ưu tiên hàng đầu.",
          "DB bắt buộc trang bị <strong>RCCB/RCBO (bảo vệ dòng rò)</strong> cho các nhánh ổ cắm và thiết bị ngoài trời/vùng ẩm. Dòng rò cài đặt: 30mA cho ổ cắm (chống giật tim), 100–300mA cho chiếu sáng và động lực. DB cũng cần có <strong>nhãn cảnh báo</strong> và <strong>khóa cửa</strong> để ngăn người không chuyên thao tác.",
          "DB phân loại theo đặc tính curve (B/C/D): curve B cho tải điện trở (chiếu sáng, ổ cắm), curve C cho tải cảm kháng (motor nhỏ, quạt), curve D cho tải xung dòng cao (transformer, nguồn switching). Chọn sai curve → trip nhầm khi khởi động hoặc không trip khi sự cố.",
        ],
        callout: {
          type: "info",
          title: "Phối hợp selectivity giữa MSB – SDB – DB",
          text: "Để sự cố ở DB không làm trip SDB/MSB, cần phối hợp selectivity: (1) Icu thiết bị cấp dưới ≤ Icu cấp trên, (2) thời gian delay trip cấp trên > cấp dưới (0.2–0.4s), (3) dùng MCCB có curve điều chỉnh được cho SDB. PTC phát hành coordination curve (đường đặc tính) trong hồ sơ thiết kế để chủ đầu tư phê duyệt.",
        },
      },
      {
        heading: "Quy tắc thực tế: Khi nào dùng MSB, khi nào tách SDB riêng?",
        paragraphs: [
          "Trong nhà máy nhỏ (≤ 500kVA), có thể gộp MSB + SDB thành 1 tủ tổng để tiết kiệm chi phí và không gian. Nhưng khi nào bắt buộc tách SDB riêng?",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Diện tích nhà máy > 2.000 m²:</strong> Khoảng cách từ trạm điện đến phụ tải xa → cáp nhánh dài, sụt áp → cần SDB gần phụ tải.",
            "<strong>Có nhiều phân xưởng riêng biệt:</strong> Mỗi phân xưởng cần 1 SDB để cô lập bảo trì không ảnh hưởng xưởng khác.",
            "<strong>Tòa nhà cao tầng:</strong> Mỗi tầng hoặc mỗi 5-10 tầng cần 1 SDB đứng (riser) để giảm tiết diện cáp đứng.",
            "<strong>Nhu cầu mở rộng:</strong> SDB riêng cho phép thêm nhánh mới mà không can thiệp MSB — giảm rủi ro cắt điện toàn nhà máy.",
          ],
        },
        callout: {
          type: "tip",
          title: "Cần tư vấn phân cấp tủ điện cho dự án?",
          text: "Gửi sơ đồ đơn tuyến hoặc yêu cầu kỹ thuật qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư sẽ đề xuất cấu trúc phân cấp MSB-SDB-DB phù hợp cho dự án của bạn, kèm tính toán selectivity và ước lượng chi phí.",
        },
      },
    ],
  },
  {
    slug: "tu-mcc-la-gi",
    title: "Tủ MCC là gì? Các phương pháp khởi động động cơ trong tủ điều khiển MCC",
    category: "Tủ điều khiển",
    readTime: "6 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2025-02-05",
    dateModified: "2026-02-21",
    quickAnswer: "Tủ MCC (Motor Control Center) là tủ trung tâm chuyên dụng điều khiển, giám sát và bảo vệ các động cơ điện trong nhà máy. Tủ tích hợp các thiết bị đóng cắt, khởi động từ, rơ-le nhiệt, khởi động mềm (Soft Starter) hoặc biến tần (VSD) theo từng ngăn riêng biệt.",
    summary: [
      "Khởi động trực tiếp (DOL): Đơn giản, chi phí thấp, dùng cho motor công suất nhỏ (< 7.5kW).",
      "Khởi động Sao – Tam giác (Star-Delta): Giảm dòng khởi động xuống 1/3, dùng cho motor tải vừa (7.5kW – 45kW).",
      "Khởi động mềm (Soft Starter) & Biến tần (VSD): Điều khiển trơn tru, triệt tiêu sụt áp lưới và sốc cơ khí, dùng cho tải nặng, bơm quạt công suất lớn.",
    ],
    body: [
      {
        heading: "Tủ MCC là gì? Vai trò trong nhà máy tự động hóa",
        paragraphs: [
          "Tủ MCC (Motor Control Center) là tủ trung tâm điều khiển động cơ — nơi tập hợp tất cả các ngăn điều khiển cho từng động cơ trong phân xưởng. Mỗi ngăn (bucket) điều khiển 1 motor: đóng cắt, bảo vệ quá tải, bảo vệ ngắn mạch, và điều khiển khởi động/dừng.",
          "Trong nhà máy tự động hóa, MCC là <strong>trạm trung gian giữa tủ phân phối điện (SDB) và hàng chục động cơ</strong> (bơm, quạt, băng tải, máy nghiền...). Thay vì mỗi motor 1 tủ riêng, MCC gom tất cả vào 1 tủ lớn dạng ngăn kéo (draw-out) hoặc cố định (fixed) — tiết kiệm không gian, đồng bộ bảo trì, và dễ giám sát.",
        ],
      },
      {
        heading: "4 phương pháp khởi động động cơ — khi nào dùng phương pháp nào",
        paragraphs: [
          "Lựa chọn phương pháp khởi động phụ thuộc vào công suất motor, loại tải, và khả năng chịu sụt áp của lưới. Bảng so sánh:",
        ],
        table: {
          headers: ["Phương pháp", "Dòng khởi động", "Mô-men khởi động", "Công suất phù hợp", "Chi phí"],
          rows: [
            ["DOL (trực tiếp)", "6–8 × In", "1.5–2 × Tn", "< 7.5 kW", "Thấp nhất"],
            ["Star-Delta", "~2.5 × In (1/3 DOL)", "~0.5 × Tn", "7.5 – 45 kW", "Trung bình"],
            ["Soft Starter", "2–4 × In (tùy chỉnh)", "0.1–1 × Tn (tùy chỉnh)", "15 – 250 kW", "Cao"],
            ["VSD (Biến tần)", "1–1.5 × In", "0.1–1.5 × Tn (tùy chỉnh)", "0.75 – 500+ kW", "Cao nhất"],
          ],
        },
        callout: {
          type: "info",
          title: "Nguyên tắc chọn phương pháp khởi động",
          text: "DOL chỉ dùng cho motor nhỏ (< 7.5kW) và lưới đủ mạnh. Star-Delta cho tải vừa nhưng mô-men khởi động giảm 1/3 — không phù hợp tải cần mô-men cao (máy nghiền, băng tải nặng). Soft Starter cho tải cần giảm sốc cơ khí nhưng không cần điều tốc. VSD cho tải cần điều tốc vô cấp (bơm, quạt HVAC) — tiết kiệm 20–50% điện năng.",
        },
      },
      {
        heading: "Cấu tạo một ngăn MCC điển hình",
        list: {
          ordered: false,
          items: [
            "<strong>MCCB hoặc Fuse-switch disconnect:</strong> Bảo vệ ngắn mạch và cách ly motor khi bảo trì.",
            "<strong>Contactor:</strong> Đóng cắt chính, chọn theo dòng motor và AC3 category (đóng cắt motor cage).",
            "<strong>Thermal overload relay:</strong> Bảo vệ quá tải, cài đặt dòng = In motor. Có nút test và reset.",
            "<strong>Biến dòng CT (Current Transformer):</strong> Cấp dòng thứ cấp cho ammeter / relay điện tử / PLC.",
            "<strong>Nút bấm Start/Stop + đèn báo:</strong> Giao diện vận hành tại tủ, có nút Emergency Stop.",
            "<strong>Selector Auto/Manual:</strong> Chuyển chế độ điều khiển: Auto từ PLC/SCADA hoặc Manual tại tủ.",
            "<strong>Auxiliary contact:</strong> Tín hiệu trạng thái motor (running/trip) gửi lên PLC/SCADA.",
          ],
        },
      },
      {
        heading: "MCC dạng ngăn kéo (Draw-out) vs cố định (Fixed)",
        paragraphs: [
          "MCC có 2 dạng kết cấu chính, ảnh hưởng đến cách bảo trì và chi phí:",
          "<strong>Fixed type:</strong> Thiết bị lắp cố định trong ngăn. Bảo trì phải cắt điện toàn ngăn. Chi phí thấp hơn, phù hợp nhà máy vừa. <strong>Draw-out type:</strong> Mỗi ngăn là module kéo ra được — có thể rút module bảo trì mà không cắt điện tủ. Phù hợp nhà máy liên tục, FDI, nhà máy điện lực. Chi phí cao hơn 30–50%.",
          "PTC sản xuất cả 2 dạng, tùy yêu cầu dự án. Đối với nhà máy FDI hoặc nơi cần bảo trì không ngừng máy, PTC khuyến nghị draw-out type.",
        ],
        callout: {
          type: "tip",
          title: "Cần thiết kế MCC cho phân xưởng?",
          text: "Gửi danh sách motor (công suất, tải, số lượng) qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư sẽ đề xuất phương pháp khởi động, cấu hình ngăn, hãng thiết bị và gửi báo giá trong 24h.",
        },
      },
    ],
  },
  {
    slug: "tu-hoa-dong-bo-la-gi",
    title: "Tủ hòa đồng bộ là gì? Nguyên lý và điều kiện hòa đồng bộ máy phát điện",
    category: "Hệ thống nguồn",
    readTime: "6 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2025-02-08",
    dateModified: "2026-02-21",
    quickAnswer: "Tủ hòa đồng bộ là hệ thống tủ điện tự động điều khiển việc ghép nối song song nhiều tổ máy phát điện với nhau (hoặc hòa máy phát với lưới điện) khi cần tăng công suất cấp nguồn dự phòng và tự động chia sẻ tải theo tỷ lệ công suất của từng máy.",
    summary: [
      "4 điều kiện bắt buộc để đóng hòa: Cùng điện áp, cùng tần số, cùng góc pha và cùng thứ tự pha.",
      "Bộ điều khiển hòa tự động (DeepSea, ComAp, Deif) liên tục đo lường và phát tín hiệu chỉnh ga/kích từ trước khi phát lệnh đóng máy cắt ACB.",
      "Lợi ích: Tiết kiệm nhiên liệu khi non tải (tự động ngắt bớt tổ máy), giúp chuyển nguồn gần như liên tục, hạn chế mất điện cho tải quan trọng.",
    ],
    body: [
      {
        heading: "Tủ hòa đồng bộ là gì? Khi nào cần hệ thống hòa đồng bộ",
        paragraphs: [
          "Tủ hòa đồng bộ (Synchronization Panel) là tủ điều khiển tự động việc ghép nối song song 2 hoặc nhiều nguồn điện — thường là máy phát điện với máy phát điện, hoặc máy phát với lưới điện quốc gia. Khi các nguồn được hòa song song, chúng cùng cấp điện và <strong>chia sẻ tải theo tỷ lệ công suất</strong>, thay vì chuyển đổi một-đang-chạy / một-dự-phòng.",
          "Hệ thống hòa đồng bộ cần thiết trong các trường hợp:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Nhu cầu công suất dự phòng lớn:</strong> 1 máy phát không đủ — cần 2-3 máy chạy song song để cấp đủ tải khi mất lưới.",
            "<strong>Data center / bệnh viện:</strong> Yêu cầu cấp điện liên tục 100% — chuyển nguồn không gián đoạn (closed transition < 200ms).",
            "<strong>Nhà máy non tải nhiều ca:</strong> Hòa nhiều máy phát để tự động bật/tắt theo tải — tiết kiệm nhiên liệu 20–40%.",
            "<strong>Hòa máy phát với lưới (Grid parallel):</strong> Nhà máy có máy phát riêng, hòa với lưới để bán điện dư hoặc nhận hỗ trợ khi tải cao.",
          ],
        },
      },
      {
        heading: "4 điều kiện bắt buộc để hòa đồng bộ — nguyên lý vật lý",
        paragraphs: [
          "Để ghép nối 2 nguồn điện song song an toàn, 4 thông số phải khớp trước khi đóng máy cắt (ACB). Nếu không khớp, dòng xung kích (inrush) lớn có thể hỏng máy phát, cháy ACB, hoặc gây mất ổn định lưới:",
        ],
        table: {
          headers: ["Điều kiện", "Thông số yêu cầu", "Hậu quả nếu sai"],
          rows: [
            ["Cùng điện áp", "Sai số ≤ 3% Uđm", "Dòng xung kích lớn, bảo vệ trip"],
            ["Cùng tần số", "Sai số ≤ 0.2 Hz", "Dòng dao động, máy phát mất đồng bộ"],
            ["Cùng góc pha", "Sai số ≤ 10°", "Dòng xung kích cực lớn, cháy máy phát"],
            ["Cùng thứ tự pha", "L1-L2-L3 khớp", "Ngắn mạch pha-pha ngay khi đóng"],
          ],
        },
      },
      {
        heading: "Cách bộ điều khiển hòa tự động điều chỉnh thông số",
        paragraphs: [
          "Bộ điều khiển hòa (DeepSea DSE8612, ComAp InteliGen, DEIF ASC) liên tục đo 4 thông số này ở cả 2 nguồn, phát tín hiệu chỉnh ga (tăng/giảm tốc máy phát → chỉnh tần số) và chỉnh kích từ (tăng/giảm AVR → chỉnh điện áp) cho đến khi 4 điều kiện đạt — rồi phát lệnh đóng ACB. Toàn bộ quá trình này diễn ra trong 5–30 giây.",
        ],
      },
      {
        heading: "Open transition vs Closed transition — 2 chế độ chuyển nguồn",
        paragraphs: [
          "<strong>Open transition (Break-before-make):</strong> Ngắt nguồn 1 trước, rồi đóng nguồn 2. Có khoảng thời gian mất điện 3–30 giây. Phù hợp cho dự phòng thông thường — chấp nhận mất điện ngắn khi chuyển lưới → máy phát.",
          "<strong>Closed transition (Make-before-break):</strong> Hòa 2 nguồn song song trong thời gian ngắn (< 200ms), rồi ngắt nguồn cũ. Không mất điện. Phù hợp data center, bệnh viện, nhà máy không chấp nhận bất kỳ gián đoạn nào. Yêu cầu tủ hòa đồng bộ đầy đủ + máy phát có governor phản hồi nhanh.",
        ],
        callout: {
          type: "warning",
          title: "Lưu ý khi hòa máy phát với lưới điện quốc gia",
          text: "Hòa máy phát với lưới EVN yêu cầu: (1) thỏa thuận với EVN, (2) bảo vệ islanding (chống đảo điện), (3) relay bảo vệ đồng bộ (25, 27, 59, 81U/81O, 67), (4) bề mặt tiếp địa chung. Không tự ý hòa — nguy hiểm cho nhân viên EVN và có thể bị phạt. PTC thiết kế tủ hòa theo yêu cầu EVN và hỗ trợ thủ tục.",
        },
      },
      {
        heading: "Thương hiệu bộ điều khiển hòa phổ biến tại Việt Nam",
        list: {
          ordered: false,
          items: [
            "<strong>DeepSea Electronics (DSE):</strong> DSE8612 (đa máy), DSE868 (1 máy). Phổ biến nhất tại VN, dễ cài đặt, giá hợp lý.",
            "<strong>ComAp (InteliGen / InteliSys):</strong> Mạnh về ứng dụng đa máy phức tạp, tích hợp Modbus/SCADA. Phổ biến trong dự án FDI châu Âu.",
            "<strong>DEIF (ASC/AGC):</strong> Cao cấp, chính xác cao, phổ biến trong tàu biển và nhà máy điện.",
            "<strong>Datakom (NT):</strong> Phân khúc giá tốt, phổ biến trong dự án vừa và nhỏ.",
          ],
        },
        callout: {
          type: "tip",
          title: "Cần thiết kế tủ hòa đồng bộ?",
          text: "Gửi danh sách máy phát (công suất kVA, hãng, số lượng) và yêu cầu chế độ (open/closed transition) qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư sẽ đề xuất controller, ACB, sơ đồ điều khiển và gửi báo giá trong 24h.",
        },
      },
    ],
  },
  {
    slug: "tu-dien-ngoai-troi-ip55-ip65",
    title: "Tủ điện ngoài trời: Tiêu chuẩn cấp bảo vệ IP55, IP65 và giải pháp chống đọng sương",
    category: "Vỏ tủ cơ khí",
    readTime: "5 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2025-02-10",
    dateModified: "2026-02-21",
    quickAnswer: "Tủ điện ngoài trời đòi hỏi cấp bảo vệ tối thiểu IP55 (chống bụi hạn chế thâm nhập và chống vòi phun nước áp lực) hoặc IP65 (chống bụi hoàn toàn và chống tia nước mạnh). Thiết kế của PTC trang bị vỏ 2 lớp cánh, mái dốc thoát nước, gioăng đúc PU và điện trở sấy nhiệt tự động chống đọng sương ẩm bên trong.",
    summary: [
      "Ý nghĩa IP55 vs IP65: Chữ số đầu (5-6) là cấp chống bụi/vật rắn; Chữ số sau (5) là cấp chống nước.",
      "Vật liệu chế tạo: Tôn thép cán nguội sơn tĩnh điện ngoài trời dòng polyester chịu tia UV, hoặc Inox 304/316 cho môi trường biển.",
      "Phụ kiện quan trọng: Khe thông gió ziczac có lưới lọc bụi, điện trở sấy điều khiển bằng Hygrostat / Thermostat.",
    ],
    body: [
      {
        heading: "Tủ điện ngoài trời — thách thức kỹ thuật đặc biệt",
        paragraphs: [
          "Tủ điện ngoài trời phải chịu đồng thời 3 tác nhân khắc nghiệt: <strong>mưa/nắng/độ ẩm</strong>, <strong>bụi/khí corrosive</strong>, và <strong>biến thiên nhiệt đới</strong> (ngày 40°C, đêm 25°C → đọng sương). Nếu thiết kế sai, tủ bị rò rỉ nước, đọng sương bên trong, hoặc sơn bong tróc do UV — gây chập mạch, rỉ sét thiết bị, và hỏng tủ trong 2–3 năm thay vì 15–20 năm.",
          "Khác với tủ trong nhà (IP31/IP42 đủ), tủ ngoài trời yêu cầu tối thiểu <strong>IP55</strong> và thường <strong>IP65</strong> — cùng hệ thống chống đọng sương chủ động.",
        ],
      },
      {
        heading: "Giải mã cấp bảo vệ IP — IP55 vs IP65 vs IP66",
        paragraphs: [
          "Cấp bảo vệ IP (Ingress Protection) theo IEC 60529 gồm 2 chữ số: chữ số đầu = chống vật rắn (bụi), chữ số sau = chống nước.",
        ],
        table: {
          headers: ["Cấp IP", "Chống bụi", "Chống nước", "Ứng dụng"],
          rows: [
            ["IP31", "Vật rắn > 2.5mm", "Nước nhỏ giọt thẳng đứng", "Tủ trong nhà, phòng điện khô"],
            ["IP42", "Vật rắn > 1mm", "Nước nhỏ giọt nghiêng 15°", "Tủ trong nhà, khu vực có bụi nhẹ"],
            ["IP54", "Bụi hạn chế", "Vòi phun nước mọi hướng", "Tủ ngoài nhà có mái che"],
            ["IP55", "Bụi hạn chế", "Vòi phun nước áp lực", "Tủ ngoài trời tiêu chuẩn"],
            ["IP65", "Bụi hoàn toàn", "Tia nước mạnh mọi hướng", "Tủ ngoài trời, rửa được bằng vòi"],
            ["IP66", "Bụi hoàn toàn", "Sóng nước mạnh", "Tủ ngoài trời ven biển, cảng"],
          ],
        },
        callout: {
          type: "info",
          title: "Chọn IP theo môi trường",
          text: "IP55 đủ cho hầu hết tủ ngoài trời ở VN. IP65 cho khu vực cần rửa bằng vòi (nhà máy thực phẩm, hóa chất). IP66 cho ven biển hoặc cảng. IP54 chỉ dùng khi có mái che — không nên cho tủ ngoài trời hở.",
        },
      },
      {
        heading: "Giải pháp chống đọng sương — vấn đề ít ai nghĩ đến nhưng gây hỏng tủ",
        paragraphs: [
          "Ở Việt Nam (khí hậu nhiệt đới), ban ngày tủ nóng 40–50°C, ban đêm nhiệt độ giảm nhanh xuống 25°C. Khi nhiệt độ bên trong tủ giảm dưới điểm sương (dew point), hơi ẩm trong không khí <strong>ngưng tụ thành nước trên bề mặt thiết bị</strong> — gây rò rỉ cách điện, rỉ sét tiếp điểm, và chập mạch.",
          "PTC trang bị 3 lớp chống đọng sương cho tủ ngoài trời:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Điện trở sấy (Panel heater):</strong> Công suất 15–50W tùy kích thước tủ, điều khiển bằng Hygrostat (cảm biến độ ẩm) hoặc Thermostat (cảm biến nhiệt). Tự động bật khi độ ẩm > 65% hoặc nhiệt độ < 25°C — duy trì nhiệt độ tủ trên điểm sương.",
            "<strong>Khe thông gió ziczac:</strong> Thiết kế khe thoáng hình ziczac có lưới lọc — cho phép thoát ẩm nhưng nước mưa không thể vào. Đặt ở phần dưới tủ.",
            "<strong>Gioăng đúc PU/EPDM:</strong> Gioăng cao su đúc liền quanh cửa, chống nước và hơi ẩm thâm nhập qua khe cửa — vật liệu EPDM chịu UV > 15 năm không lão hóa.",
          ],
        },
      },
      {
        heading: "Vật liệu và lớp phủ bề mặt cho tủ ngoài trời",
        paragraphs: [
          "Lớp phủ bề mặt quyết định tuổi thọ tủ ngoài trời. 3 phương án phổ biến:",
          "<strong>Sơn tĩnh điện polyester (thép CRC):</strong> Phun bột polyester chịu UV, sấy 200°C. Chi phí thấp, tuổi thọ 7–10 năm ngoài trời. Phù hợp khu vực không khí không corrosive.",
          "<strong>Thép mạ kẽm nhúng nóng + sơn tĩnh điện:</strong> Lớp mạ kẽm 65–85 µm chống rỉ từ gốc, cộng sơn tĩnh điện polyester bên ngoài. Tuổi thọ 15–20 năm. Phổ biến cho nhà máy hóa chất, ven biển.",
          "<strong>Inox 304 / 316:</strong> Không cần sơn, chống rỉ hoàn toàn. Inox 316 cho môi trường biển (chứa Mo chống Cl). Chi phí cao nhất, tuổi thọ 25+ năm. Phù hợp nhà máy thực phẩm, dược, hóa chất.",
        ],
        callout: {
          type: "tip",
          title: "Cần tư vấn tủ ngoài trời cho môi trường đặc thù?",
          text: "Gửi yêu cầu kỹ thuật và mô tả môi trường lắp đặt (ven biển / hóa chất / thực phẩm / đô thị) qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư sẽ đề xuất cấp IP, vật liệu, lớp phủ và hệ thống chống đọng sương phù hợp.",
        },
      },
    ],
  },
  {
    slug: "thang-mang-cap-la-gi",
    title: "Thang máng cáp là gì? Tổng quan hệ thống dẫn cáp cơ điện M&E công nghiệp",
    category: "Thang máng cáp",
    readTime: "6 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2025-02-12",
    dateModified: "2026-02-21",
    quickAnswer: "Thang máng cáp (Cable Management System) là kết cấu cơ khí dùng để đỡ, định hình và bảo vệ các tuyến dây cáp điện lực, cáp điều khiển và cáp viễn thông trong các tòa nhà, nhà máy công nghiệp và trạm điện.",
    summary: [
      "Bao gồm 3 dòng chính: Máng cáp (Trunking), Khay cáp (Tray) và Thang cáp (Ladder).",
      "Lợi ích so với luồn ống: Dễ dàng mở rộng, kiểm tra nhiệt độ cáp, tiết kiệm 40% thời gian thi công kéo cáp.",
      "Phụ kiện đồng bộ: Co, tê, giảm, nắp đậy, thanh treo gá đỡ giúp tuyến cáp đi linh hoạt theo kiến trúc công trình.",
    ],
    body: [
      {
        heading: "Thang máng cáp là gì? Vai trò trong hệ thống M&E",
        paragraphs: [
          "Thang máng cáp (Cable Management System — CMS) là hệ thống kết cấu cơ khí dùng để đỡ, dẫn hướng và bảo vệ các tuyến dây cáp trong công trình. Thay vì luồn cáp qua ống (conduit) — tốn diện tích, khó mở rộng, khó kiểm tra — thang máng cáp cho phép <strong>kéo cáp trên bề mặt thoáng</strong>, dễ dàng thêm bớt cáp, kiểm tra nhiệt độ và bảo trì.",
          "Trong dự án M&E công nghiệp, thang máng cáp là hạng mục <strong>bắt buộc</strong> cho mọi tuyến cáp động lực, cáp điều khiển và cáp tín hiệu. Việc thiết kế đúng loại thang/khay/máng, đúng tải trọng, đúng lớp phủ bề mặt ảnh hưởng trực tiếp đến an toàn cháy nổ và tuổi thọ hệ thống điện.",
        ],
      },
      {
        heading: "3 loại chính: Thang cáp, Khay cáp, Máng cáp",
        table: {
          headers: ["Loại", "Đặc điểm", "Ưu điểm", "Ứng dụng"],
          rows: [
            ["Thang cáp (Ladder)", "Đáy rỗng, thanh bậc thép cách 250-300mm", "Tản nhiệt tốt nhất, tải trọng lớn, dễ kéo cáp lớn", "Tuyến cáp trục chính, cáp điện lực XLPE"],
            ["Khay cáp (Tray)", "Đáy đục lỗ ô van thoáng", "Vừa tản nhiệt vừa giữ cáp, dễ cố định", "Tuyến cáp phân phối, cáp trung bình"],
            ["Máng cáp (Trunking)", "Đáy kín + nắp đậy", "Bảo vệ kín 100%, chống bụi, thẩm mỹ", "Tòa nhà văn phòng, khu sạch, cáp tín hiệu"],
          ],
        },
        paragraphs: [
          "Xem chi tiết so sánh và hướng dẫn chọn loại trong bài viết <a href=\"/kien-thuc/phan-biet-thang-cap-khay-cap-mang-cap\" class=\"text-primary font-medium\">So sánh thang cáp, khay cáp và máng cáp</a>.",
        ],
      },
      {
        heading: "Lớp phủ bề mặt — quyết định tuổi thọ ngoài trời",
        paragraphs: [
          "Lớp phủ bề mặt là yếu tố quan trọng nhất quyết định tuổi thọ thang máng cáp, đặc biệt cho dự án ngoài trời hoặc môi trường corrosive:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Sơn tĩnh điện (Electrostatic powder coating):</strong> Phun bột polyester, sấy 200°C, dày 60–80 µm. Phù hợp trong nhà, tuổi thọ 7–10 năm. Chi phí thấp nhất.",
            "<strong>Mạ kẽm điện phân (Electro-galvanized / Pre-galvanized):</strong> Lớp mạ Zn 8–15 µm. Phù hợp trong nhà khô ráo, tuổi thọ 5–8 năm. Thường dùng cho tôn mạ kẽm Z275 nhập sẵn.",
            "<strong>Mạ kẽm nhúng nóng (Hot-dip Galvanizing — HDG):</strong> Nhúng toàn bộ vào bể kẽm nóng chảy 450°C, lớp mạ 65–85 µm. Tuổi thọ ngoài trời 20–30 năm. Bắt buộc cho solar ngoài trời, ven biển, hóa chất. Xem chi tiết: <a href=\"/kien-thuc/ma-kem-nhung-nong-va-ma-kem-dien-phan\" class=\"text-primary font-medium\">mạ kẽm nhúng nóng vs điện phân</a>.",
            "<strong>Inox 304 / 316:</strong> Không cần mạ, chống rỉ hoàn toàn. Inox 316 cho môi trường biển. Chi phí cao nhất, tuổi thọ 25+ năm.",
          ],
        },
      },
      {
        heading: "Phụ kiện thang máng cáp — không thể bỏ qua",
        paragraphs: [
          "Tuyến thang máng cáp ngoài đoạn thẳng còn cần hệ phụ kiện để đi qua khúc cua, rẽ nhánh và thay đổi tiết diện:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Co ngang (Elbow horizontal):</strong> Chuyển hướng ngang 30°/45°/60°/90°.",
            "<strong>Co đứng (Elbow vertical):</strong> Chuyển hướng lên/xuống, trong (inside) hoặc ngoài (outside).",
            "<strong>Tê (Tee):</strong> Rẽ nhánh T — 1 tuyến chính + 1 nhánh phụ.",
            "<strong>Chữ thập (Cross / X):</strong> Giao 2 tuyến cáp.",
            "<strong>Giảm (Reducer):</strong> Thay đổi bề rộng máng (giảm đều hoặc giảm lệch).",
            "<strong>Nắp đậy (Cover):</strong> Bảo vệ cáp khỏi bụi/va đập, dùng cho máng cáp.",
            "<strong>Ty treo + quang treo:</strong> Hệ gá đỡ tường/trần, khoảng cách 1.5–2m tùy tải trọng.",
          ],
        },
        callout: {
          type: "tip",
          title: "Gửi bản vẽ tuyến cáp — PTC bóc tách BOQ miễn phí",
          text: "Gửi bản vẽ kiến trúc hoặc tuyến cáp qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư sẽ bóc tách toàn bộ thang/khay/máng + phụ kiện, đề xuất loại và lớp phủ phù hợp, gửi báo giá trong 24h.",
        },
      },
    ],
  },
  {
    slug: "phan-biet-thang-cap-khay-cap-mang-cap",
    title: "So sánh thang cáp, khay cáp và máng cáp: Khi nào nên chọn loại nào?",
    category: "Hướng dẫn lựa chọn",
    readTime: "6 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2025-02-15",
    dateModified: "2026-02-21",
    quickAnswer: "Chọn Thang cáp (Ladder) cho tuyến cáp điện lực nặng cần thoát nhiệt tối đa; Chọn Khay cáp (Tray) cho tuyến cáp phân phối vừa tản nhiệt vừa cần cố định cáp; Chọn Máng cáp (Trunking) khi cần bảo vệ kín 100% chống bụi bẩn, côn trùng và yêu cầu thẩm mỹ cao.",
    summary: [
      "Thang cáp: Rỗng đáy, thanh bậc thang đỡ cáp, tải trọng lớn nhất, tản nhiệt tốt nhất, chi phí/kg hợp lý.",
      "Khay cáp: Đáy đục lỗ ô van thông gió, thích hợp cho cáp có đường kính trung bình và nhỏ.",
      "Máng cáp: Đáy kín liền khối, có nắp đậy, chống chuột cắn và chống nước nhỏ giọt từ trên trần.",
    ],
    body: [
      {
        heading: "Thang cáp, khay cáp, máng cáp — 3 loại dễ nhầm nhất trong M&E",
        paragraphs: [
          "Trong thi công cơ điện M&E, 3 loại thang/khay/máng cáp thường bị dùng nhầm — gây lãng phí chi phí hoặc không đáp ứng yêu cầu kỹ thuật. Bài viết này so sánh chi tiết để kỹ sư M&E và nhà thầu chọn đúng loại cho từng tuyến cáp.",
        ],
      },
      {
        heading: "Bảng so sánh đầy đủ: Thang vs Khay vs Máng",
        table: {
          headers: ["Tiêu chí", "Thang cáp (Ladder)", "Khay cáp (Tray)", "Máng cáp (Trunking)"],
          rows: [
            ["Cấu tạo đáy", "Rỗng — thanh bậc thép", "Đục lỗ ô van", "Kín phẳng"],
            ["Nắp đậy", "Không có", "Có tùy chọn", "Có (mặc định)"],
            ["Tản nhiệt", "Tốt nhất", "Tốt", "Kém (kín)"],
            ["Tải trọng tối đa", "Lớn nhất (cáp điện lực)", "Trung bình", "Nhỏ (cáp tín hiệu)"],
            ["Bề rộng tiêu chuẩn", "100–1200 mm", "100–800 mm", "50–800 mm"],
            ["Độ dày tôn", "1.2–2.5 mm", "1.0–2.0 mm", "0.8–2.0 mm"],
            ["Bảo vệ cáp", "Thấp (hở)", "Trung bình", "Cao nhất (kín)"],
            ["Thẩm mỹ", "Công nghiệp", "Trung bình", "Cao — có nắp"],
            ["Chi phí/m", "Cao", "Trung bình", "Cao (có nắp)"],
          ],
        },
      },
      {
        heading: "Khi nào chọn Thang cáp (Ladder)?",
        paragraphs: [
          "Thang cáp thường dùng cho <strong>tuyến cáp điện lực trục chính</strong> — cáp XLPE/PVC tiết diện lớn (95–400 mm²), cáp động lực nhà máy, cáp từ trạm biến áp đến MSB.",
          "Lý do: (1) tản nhiệt tốt nhất — cáp động lực sinh nhiệt lớn khi tải cao, cần thoát nhiệt để không giảm dòng tải; (2) tải trọng lớn — thang cáp chịu được hàng trăm kg cáp trên 1 nhịp; (3) dễ kéo cáp lớn qua thanh bậc, không bị đáy kín cản trở.",
          "Ứng dụng điển hình: trục riser tòa nhà, tuyến cáp trục nhà máy, mái xưởng solar (cáp DC từ panel đến combiner box).",
        ],
      },
      {
        heading: "Khi nào chọn Khay cáp (Tray)?",
        paragraphs: [
          "Khay cáp là <strong>lựa chọn trung gian</strong> — vừa tản nhiệt vừa giữ cáp tốt hơn thang. Phù hợp cho tuyến cáp phân phối nhánh, cáp điều khiển, cáp tín hiệu có đường kính trung bình.",
          "Khay cáp có đáy đục lỗ ô van — cho phép cố định cáp bằng cable tie, đồng thời thoát nhiệt. Tuy nhiên, tải trọng thấp hơn thang cáp và không nên dùng cho cáp điện lực lớn.",
          "Ứng dụng điển hình: tuyến cáp phân phối tầng, cáp điều khiển MCC, cáp tín hiệu PLC/SCADA.",
        ],
      },
      {
        heading: "Khi nào chọn Máng cáp (Trunking)?",
        paragraphs: [
          "Máng cáp là <strong>lựa chọn bảo vệ cao nhất</strong> — đáy kín + nắp đậy, bảo vệ cáp 100% khỏi bụi, nước nhỏ giọt, côn trùng, va đập. Phù hợp cho môi trường yêu cầu sạch hoặc thẩm mỹ cao.",
          "Tuy nhiên, máng cáp <strong>tản nhiệt kém</strong> — không nên dùng cho cáp động lực lớn (sẽ gây phát nhiệt). Dùng cho cáp tín hiệu, cáp điều khiển, cáp nhánh nhỏ.",
          "Ứng dụng điển hình: tòa nhà văn phòng (trần nổi, khu kỹ thuật), khu sạch (nhà máy điện tử, dược), cáp tín hiệu/data center.",
        ],
        callout: {
          type: "warning",
          title: "Sai lầm thường gặp",
          text: "Dùng máng cáp (trunking) cho cáp động lực lớn → cáp phát nhiệt không thoát được → giảm dòng tải, cháy cáp. Nguyên tắc: cáp động lực > 35 mm² → dùng thang cáp (ladder) hoặc khay cáp (tray) có lỗ thoáng. Máng cáp chỉ cho cáp ≤ 16 mm² hoặc cáp tín hiệu.",
        },
      },
      {
        heading: "Quy tắc chọn nhanh theo loại cáp",
        table: {
          headers: ["Loại cáp", "Tiết diện", "Loại nên chọn", "Lý do"],
          rows: [
            ["Cáp động lực trục", "95–400 mm²", "Thang cáp", "Tải trọng + tản nhiệt"],
            ["Cáp động lực nhánh", "16–95 mm²", "Khay cáp", "Vừa tải vừa thoáng"],
            ["Cáp điều khiển", "0.75–2.5 mm²", "Khay hoặc máng", "Tùy môi trường"],
            ["Cáp tín hiệu / data", "CAT6, cáp đồng", "Máng cáp", "Bảo vệ + chống nhiễu"],
            ["Cáp solar DC", "4–10 mm²", "Thang cáp HDG", "Ngoài trời + tải trọng"],
          ],
        },
        callout: {
          type: "tip",
          title: "Cần bóc tách thang máng cáp cho dự án?",
          text: "Gửi bản vẽ tuyến cáp hoặc BOQ qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư sẽ đề xuất loại thang/khay/máng, lớp phủ, phụ kiện và gửi báo giá trong 24h.",
        },
      },
    ],
  },
  {
    slug: "ma-kem-nhung-nong-va-ma-kem-dien-phan",
    title: "Phân biệt mạ kẽm nhúng nóng và mạ kẽm điện phân cho thang máng cáp nhà xưởng",
    category: "Vật liệu & Xử lý bề mặt",
    readTime: "6 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2025-02-18",
    dateModified: "2026-02-21",
    quickAnswer: "Mạ kẽm nhúng nóng (Hot-dip Galvanizing) phủ lớp kẽm dày 65–85 µm bằng cách nhúng trực tiếp vào bể kẽm nóng chảy 450°C, cho độ bền ngoài trời và môi trường ăn mòn trên 20–30 năm; trong khi Mạ kẽm điện phân chỉ phủ lớp mạ mỏng 8–15 µm, chỉ thích hợp cho môi trường trong nhà khô ráo.",
    summary: [
      "Độ dày lớp mạ: Nhúng nóng (65-85 µm) so với Điện phân (8-15 µm).",
      "Tiêu chuẩn áp dụng: ASTM A123 / ISO 1461 cho mạ kẽm nhúng nóng; TCVN 5408.",
      "Ứng dụng: Máng mạ kẽm nhúng nóng là bắt buộc cho hệ điện mặt trời mái nhà xưởng, khu vực ven biển, trạm xử lý nước thải và nhà máy hóa chất.",
    ],
    body: [
      {
        heading: "Mạ kẽm nhúng nóng vs mạ kẽm điện phân — 2 công nghệ, 2 tuổi thọ khác biệt",
        paragraphs: [
          "Trong sản xuất thang máng cáp, lớp phủ bề mặt quyết định <strong>tuổi thọ và chi phí bảo trì</strong> trong suốt vòng đời công trình. 2 công nghệ mạ kẽm phổ biến — nhúng nóng (Hot-dip Galvanizing) và điện phân (Electro-galvanizing) — có khác biệt lớn về độ dày, cơ chế bảo vệ và ứng dụng. Chọn sai = rỉ sét sau 2–3 năm, phải thay toàn bộ tuyến.",
        ],
      },
      {
        heading: "Bảng so sánh đầy đủ",
        table: {
          headers: ["Tiêu chí", "Mạ kẽm nhúng nóng (HDG)", "Mạ kẽm điện phân (EG)"],
          rows: [
            ["Quy trình", "Nhúng toàn bộ vào bể kẽm nóng chảy 450°C", "Điện phân Zn trong dung dịch muối"],
            ["Độ dày lớp mạ", "65–85 µm (có thể 100+ µm)", "8–15 µm"],
            ["Cơ chế bảo vệ", "Sacrificial + barrier (kẽm hy sinh + lớp màng)", "Chỉ barrier (lớp màng mỏng)"],
            ["Tuổi thọ ngoài trời", "20–30 năm", "3–5 năm"],
            ["Tuổi thọ trong nhà khô", "50+ năm", "10–15 năm"],
            ["Chịu va đập", "Tốt (liên kết kim loại với thép gốc)", "Kém (dễ bong tróc)"],
            ["Tiêu chuẩn", "ASTM A123 / ISO 1461", "TCVN 5408 / ASTM B633"],
            ["Chi phí", "Cao hơn 30–50%", "Thấp"],
            ["Vấn đề cong vênh", "Có (nhúng nóng gây biến dạng tôn mỏng)", "Không"],
          ],
        },
      },
      {
        heading: "Mạ kẽm nhúng nóng (HDG) — cơ chế bảo vệ và ưu điểm",
        paragraphs: [
          "Mạ kẽm nhúng nóng tạo liên kết <strong>metallurgical</strong> giữa kẽm và thép — không phải lớp sơn bám trên bề mặt mà là hợp kim Zn-Fe hình thành ở nhiệt độ 450°C. Lớp mạ dày 65–85 µm bảo vệ thép bằng 2 cơ chế:",
          "<strong>(1) Barrier protection:</strong> Lớp kẽm cách ly thép khỏi oxy và ẩm. <strong>(2) Sacrificial (cathodic) protection:</strong> Kẽm có thế điện cao hơn thép — khi bề mặt bị xước, kẽm sẽ \"hy sinh\" oxy hóa trước, bảo vệ thép gốc không rỉ. Đây là lý do HDG vẫn bảo vệ tốt ngay cả khi lớp mạ bị xước.",
          "Ưu điểm chính: tuổi thọ ngoài trời 20–30 năm không cần bảo trì, chịu va đập tốt, bảo vệ cathodic. Nhược điểm: chi phí cao hơn 30–50%, có thể gây cong vênh tôn mỏng (< 1.0mm) do nhiệt nhúng — cần chọn độ dày phù hợp (≥ 1.2mm cho HDG).",
        ],
      },
      {
        heading: "Mạ kẽm điện phân (EG) — khi nào đủ dùng?",
        paragraphs: [
          "Mạ kẽm điện phân phủ lớp Zn mỏng 8–15 µm bằng điện phân trong dung dịch muối kẽm. Lớp mạ mỏng, chỉ bảo vệ bằng cơ chế barrier — không có bảo vệ cathodic. Khi lớp mạ bị xước, thép gốc sẽ rỉ.",
          "Phù hợp cho: <strong>môi trường trong nhà khô ráo</strong>, thang máng cáp trong văn phòng, tòa nhà, khu vực không ẩm và không corrosive. Tuổi thọ 10–15 năm trong nhà khô, nhưng chỉ 3–5 năm ngoài trời.",
          "Thường dùng tôn mạ kẽm Z275 (Z = 275 g/m², tương đương ~20 µm) nhập sẵn — gia công thang máng từ tôn này, không cần mạ lại. Chi phí thấp, phù hợp dự án ngân sách vừa.",
        ],
        callout: {
          type: "warning",
          title: "Cảnh báo: Không dùng điện phân cho ngoài trời",
          text: "Nhiều dự án nhỏ dùng máng cáp điện phân cho ngoài trời để tiết kiệm chi phí → rỉ sét sau 2–3 năm, phải thay toàn bộ. Chi phí thay > chi phí chênh HDG ban đầu. <strong>Luôn dùng HDG cho ngoài trời, ven biển, hóa chất, solar.</strong>",
        },
      },
      {
        heading: "Khi nào bắt buộc dùng mạ kẽm nhúng nóng?",
        paragraphs: [
          "Dựa trên kinh nghiệm thực hiện dự án, PTC khuyến nghị <strong>bắt buộc dùng HDG</strong> trong các trường hợp:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Hệ điện mặt trời mái nhà xưởng (solar):</strong> Cáp DC trên mái tiếp xúc UV + mưa + gió. HDG là bắt buộc theo IEC 62548.",
            "<strong>Khu vực ven biển (≤ 5km từ biển):</strong> Muối biển Cl- gây ăn mòn cực mạnh. HDG hoặc Inox 316.",
            "<strong>Nhà máy hóa chất / phân bón:</strong> Khí corrosive (H₂S, NH₃, acid) — HDG + sơn epoxy.",
            "<strong>Trạm xử lý nước thải:</strong> Môi trường ẩm + H₂S — HDG.",
            "<strong>Ngoài trời nói chung:</strong> Trạm biến áp ngoài trời, hạ tầng KCN, chiếu sáng đô thị.",
            "<strong>Yêu cầu nghiệm thu FDI:</strong> Nhiều chủ đầu tư FDI (Nhật, Hàn, châu Âu) yêu cầu HDG trong spec.",
          ],
        },
      },
      {
        heading: "Quy trình mạ kẽm nhúng nóng tại PTC",
        list: {
          ordered: true,
          items: [
            "<strong>Gia công thang máng:</strong> Cắt, đột, chấn từ tôn thép ≥ 1.2mm — độ dày tối thiểu để không cong vênh khi nhúng.",
            "<strong>Làm sạch bề mặt:</strong> Tẩy dầu, tẩy gỉ bằng acid (pickling), rửa nước, flux (kẽm chloride) — chuẩn bị bề mặt sạch cho mạ bám.",
            "<strong>Nhúng kẽm nóng chảy:</strong> Nhúng toàn bộ vào bể kẽm 450°C trong 3–10 phút tùy độ dày. Kẽm phản ứng với thép tạo hợp kim Zn-Fe.",
            "<strong>Làm nguội & Kiểm tra:</strong> Làm nguội trong nước/hơi nước. Kiểm tra độ dày mạ bằng đồng hồ đo lớp mạ (≥ 65 µm). Kiểm tra bề mặt đều, không có vết thiếu mạ.",
            "<strong>Đóng gói:</strong> Bọc PE, đóng kiện — tránh va đập làm xước lớp mạ trong vận chuyển.",
          ],
        },
        callout: {
          type: "tip",
          title: "Cần thang máng cáp mạ kẽm nhúng nóng cho dự án?",
          text: "Gửi bản vẽ tuyến cáp hoặc BOQ qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư sẽ bóc tách, đề xuất độ dày tôn phù hợp cho HDG (≥ 1.2mm), tính toán tải trọng và gửi báo giá trong 24h.",
        },
      },
    ],
  },
  {
    slug: "ho-so-can-co-de-bao-gia-tu-dien",
    title: "Hồ sơ và thông số cần chuẩn bị để nhận báo giá kỹ thuật tủ điện công nghiệp nhanh nhất",
    category: "Quy trình B2B",
    readTime: "5 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2025-02-20",
    dateModified: "2026-02-21",
    quickAnswer: "Để nhận báo giá kỹ thuật chính xác và nhanh chóng từ PTC, quý khách hàng/nhà thầu chỉ cần gửi: Sơ đồ nguyên lý đơn tuyến (Single-line diagram), Bảng tiên lượng khối lượng (BOQ), Chỉ định hãng thiết bị đóng cắt yêu cầu (nếu có), Cấp Form tủ / cấp IP và mốc tiến độ giao hàng mong muốn.",
    summary: [
      "1. Sơ đồ đơn tuyến: Rõ dòng định mức máy cắt chính, dòng các nhánh ra, cấu hình tụ bù.",
      "2. Bảng BOQ vật tư: Số lượng tủ, quy cách thang máng cáp (rộng x cao x dày x lớp hoàn thiện).",
      "3. Nhãn hiệu khí cụ chỉ định: Schneider, ABB, Mitsubishi, LS, Socomec, Hyundai...",
      "4. Kỹ sư PTC sẽ chủ động liên hệ làm rõ các thông số còn thiếu trước khi gửi báo giá bóc tách chi tiết.",
    ],
    body: [
      {
        heading: "Vì sao gửi đúng hồ sơ quyết định chất lượng báo giá và tiến độ",
        paragraphs: [
          "Trong dự án tủ điện công nghiệp, <strong>60% thời gian chờ báo giá</strong> không nằm ở việc tính toán — mà ở việc trao đổi qua lại để làm rõ thông số thiếu. Khi kỹ sư M&E gửi đầy đủ hồ sơ ngay từ đầu, PTC có thể bóc tách và phát hành báo giá kỹ thuật trong <strong>24 giờ</strong>. Khi thiếu thông số, thời gian kéo dài 3–7 ngày và có thể dẫn đến báo giá sai — gây biến giá khi chốt hợp đồng.",
          "Bài viết này liệt kê đầy đủ hồ sơ và thông số cần gửi, theo kinh nghiệm thực hiện hàng trăm dự án của PTC — giúp nhà thầu M&E, EPC solar và chủ đầu tư rút ngắn thời gian nhận báo giá và tránh sai sót.",
        ],
      },
      {
        heading: "Danh mục hồ sơ cần gửi cho tủ điện công nghiệp",
        list: {
          ordered: true,
          items: [
            "<strong>Sơ đồ đơn tuyến (Single-line diagram):</strong> Đây là tài liệu quan trọng nhất. Cần thể hiện rõ: dòng định mức ACB tổng, dòng các MCCB nhánh, cấu hình tụ bù (kVAR + số cấp), vị trí ATS, số pha, điện áp hệ thống (400V/3 pha). Nếu chưa có sơ đồ, có thể gửi phụ tải tổng (kW) và PTC sẽ đề xuất sơ đồ.",
            "<strong>Bảng tiên lượng BOQ (Bill of Quantities):</strong> Số lượng tủ, kích thước tủ (W×H×D nếu có yêu cầu), quy cách thang máng cáp (rộng × cao × dày × lớp hoàn thiện × chiều dài).",
            "<strong>Chỉ định hãng thiết bị đóng cắt:</strong> ACB/MCCB hãng nào (Schneider, ABB, Mitsubishi, LS, Socomec...). Nếu không chỉ định, PTC sẽ đề xuất 2-3 phương án theo các phân khúc giá.",
            "<strong>Cấp Form tủ và cấp IP:</strong> Form 2b/3b/4b, IP31/IP42/IP54/IP65. Nếu không rõ, cho biết loại hình nhà máy và môi trường lắp — PTC khuyến nghị.",
            "<strong>Mốc tiến độ giao hàng:</strong> Ngày cần giao, có cần giao cuốn chiếu (theo từng block thi công) không. PTC sẽ lên kế hoạch sản xuất phù hợp.",
            "<strong>Yêu cầu hồ sơ nghiệm thu:</strong> CO/CQ, Routine Test, As-built, shop drawing... — PTC bàn giao đầy đủ theo chuẩn ISO 9001 và IEC 61439.",
          ],
        },
      },
      {
        heading: "Danh mục hồ sơ cần gửi cho thang máng cáp",
        paragraphs: [
          "Thang máng cáp đơn giản hơn tủ điện, nhưng vẫn cần thông số chính xác để gia công đúng và tránh hao hụt vật tư:",
        ],
        list: {
          ordered: true,
          items: [
            "<strong>Bản vẽ tuyến cáp (Cable routing layout):</strong> Thể hiện tuyến đi, các khúc cua ngang/đứng, nhánh rẽ, thay đổi tiết diện. Nếu chưa có, gửi bản vẽ kiến trúc + yêu cầu tuyến — PTC bóc tách.",
            "<strong>Bảng BOQ thang máng cáp:</strong> Loại (thang/khay/máng), bề rộng (mm), chiều cao thành (mm), độ dày tôn (mm), lớp hoàn thiện (sơn tĩnh điện / mạ kẽm nhúng nóng / mạ điện phân / inox), chiều dài (m).",
            "<strong>Phụ kiện:</strong> Co ngang, co đứng, tê, chữ thập, giảm, nắp đậy, ty treo, bulong — PTC bóc tách tự động theo tuyến nếu gửi bản vẽ.",
            "<strong>Môi trường lắp đặt:</strong> Trong nhà / ngoài trời / hóa chất / ven biển — quyết định lớp phủ bề mặt (xem bài <a href=\"/kien-thuc/ma-kem-nhung-nong-va-ma-kem-dien-phan\" class=\"text-primary font-medium\">mạ kẽm nhúng nóng vs điện phân</a>).",
            "<strong>Tải trọng cáp ước tính:</strong> Để PTC chọn độ dày tôn và khoảng cách ty treo phù hợp.",
          ],
        },
      },
      {
        heading: "Mẫu thông tin tối thiểu — gửi qua Zalo trong 5 phút",
        paragraphs: [
          "Nếu chưa có bản vẽ hoàn chỉnh, bạn có thể gửi thông tin tối thiểu sau qua Zalo, PTC sẽ đề xuất phương án và bổ sung thông số:",
        ],
        callout: {
          type: "tip",
          title: "Template tin nhắn Zalo — copy & gửi",
          text: "<strong>Cho tủ điện:</strong> \"PTC ơi, cần báo giá tủ điện: công suất trạm [kVA], dòng ACB tổng [A], số nhánh ra [số], hãng khí cụ [tùy chọn], Form [2b/3b], IP [42/54], giao hàng [ngày]. Gửi sơ đồ đính kèm.\"<br/><br/><strong>Cho thang máng cáp:</strong> \"PTC ơi, cần báo giá thang máng cáp: loại [thang/khay/máng], rộng [mm], cao [mm], dày [mm], lớp phủ [HDG/sơn], dài [m], môi trường [trong nhà/ngoài trời]. Gửi bản vẽ tuyến đính kèm.\"",
        },
      },
      {
        heading: "Quy trình PTC xử lý báo giá — 24 giờ làm việc",
        paragraphs: [
          "Sau khi nhận hồ sơ qua Zalo hoặc email, quy trình xử lý báo giá tại PTC:",
        ],
        list: {
          ordered: true,
          items: [
            "<strong>Tiếp nhận & Phân công (trong 2 giờ):</strong> Kỹ sư dự án tiếp nhận, phân công cho kỹ sư thiết kế phù hợp ngành (nhà máy / solar / tòa nhà).",
            "<strong>Bóc tách & Tính toán (4–8 giờ):</strong> Rà soát thông số, tính Icw nếu chưa có, bóc tách vật tư, tính toán thanh cái, đề xuất cấu hình phù hợp.",
            "<strong>Làm rõ thông số thiếu (nếu có):</strong> Kỹ sư PTC chủ động gọi/Zalo hỏi bổ sung — không để khách hàng tự tìm.",
            "<strong>Phát hành báo giá (trong 24h):</strong> Báo giá chi tiết theo tủ, kèm tiến độ sản xuất, phương án hãng thiết bị, và ghi rõ điều kiện kỹ thuật.",
            "<strong>Theo dõi & Hỗ trợ kỹ thuật:</strong> Sau khi gửi báo giá, PTC tiếp tục hỗ trợ giải thích, điều chỉnh, và phối hợp với tư vấn thiết kế nếu cần.",
          ],
        },
        callout: {
          type: "tip",
          title: "Gửi bản vẽ / BOQ ngay — nhận báo giá 24h",
          text: "Quý kỹ sư / nhà thầu có thể gửi sơ đồ đơn tuyến, BOQ hoặc yêu cầu kỹ thuật qua Zalo cho Ban Kỹ thuật PTC. Đội ngũ kỹ sư sẽ bóc tách, tính toán và gửi báo giá kỹ thuật kèm tiến độ trong 24 giờ làm việc.",
        },
      },
    ],
  },
  {
    slug: "luu-y-nghiem-thu-tu-dien-ha-the",
    title: "Checklist 10 lưu ý quan trọng khi nghiệm thu lắp đặt tủ điện hạ thế tại công trường",
    category: "Nghiệm thu & Vận hành",
    readTime: "7 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2025-02-21",
    dateModified: "2026-02-21",
    quickAnswer: "Khi nghiệm thu tủ điện hạ thế tại công trường, cần kiểm tra: đối chiếu bản vẽ hoàn công, kiểm tra siết lực bu-lông thanh cái bằng cờ lê lực (torque wrench), đo điện trở cách điện pha-pha và pha-vỏ (>= 1MΩ), kiểm tra liên tục tiếp địa PE, thử nghiệm tác động trip của rơ-le và kiểm tra hệ thống khóa liên động interlock an toàn.",
    summary: [
      "Kiểm tra ngoại quan: Sơn không trầy xước, nhãn tên tủ, biển cảnh báo nguy hiểm điện giật đầy đủ.",
      "Kiểm tra cơ khí: Cánh tủ đóng mở êm, khóa tủ chắc chắn, gioăng cao su áp sát kín khít.",
      "Hồ sơ nghiệm thu bàn giao: Bản vẽ As-built, biên bản thử nghiệm Routine Test xưởng, chứng chỉ CO/CQ thiết bị.",
    ],
    body: [
      {
        heading: "Nghiệm thu tủ điện — bước cuối cùng quyết định an toàn vận hành",
        paragraphs: [
          "Nghiệm thu tủ điện hạ thế tại công trường là <strong>bước kiểm soát chất lượng cuối cùng</strong> trước khi đưa tủ vào vận hành. Dù tủ đã qua Routine Test 100% tại xưởng, quá trình vận chuyển, bốc dỡ và lắp đặt tại công trường có thể gây sai lệch: bu-lông thanh cái lỏng, gioăng rách, sơn xước, dây nhị thứ bị kéo đứt — những lỗi này nếu không phát hiện khi nghiệm thu sẽ gây sự cố khi vận hành.",
          "Đối với tư vấn giám sát (TVGĐ) và nhà thầu M&E, checklist nghiệm thu dưới đây được biên soạn theo <strong>IEC 61439-2 Clause 11</strong> và kinh nghiệm thực tế hàng trăm dự án của PTC — áp dụng cho cả MSB, SDB, DB, MCC và tủ solar.",
        ],
      },
      {
        heading: "Checklist 10 hạng mục nghiệm thu tủ điện hạ thế",
        list: {
          ordered: true,
          items: [
            "<strong>Đối chiếu bản vẽ As-built với thực tế:</strong> Kiểm tra vị trí thiết bị, số nhánh, dòng định mức ACB/MCCB, cấu hình tụ bù — phải khớp 100% với bản vẽ hoàn công đã phê duyệt.",
            "<strong>Kiểm tra ngoại quan vỏ tủ:</strong> Sơn không trầy xước, không gỉ, không móp méo. Nhãn tên tủ, biển cảnh báo nguy hiểm điện giật, nhãn pha L1/L2/L3/N/PE đầy đủ và đúng màu.",
            "<strong>Kiểm tra cơ khí cánh tủ:</strong> Cánh tủ đóng mở êm, khóa tủ chắc chắn, gioăng cao su EPDM áp sát kín khít không có khe hở. Hinge không lỏng.",
            "<strong>Siết lực bu-lông thanh cái (Torque check):</strong> Dùng cờ lê lực (torque wrench) kiểm tra moment siết theo bảng nhà sản xuất (VD: M10 = 20–25 Nm, M12 = 35–40 Nm). Bu-lông lỏng là nguyên nhân #1 gây phát nhiệt và cháy thanh cái.",
            "<strong>Đo điện trở cách điện (Insulation resistance):</strong> Dùng megohmmeter 500V/1000V đo pha-pha, pha-PE, pha-vỏ. Điện trở phải ≥ 1 MΩ (khuyến nghị ≥ 10 MΩ cho tủ mới). Nếu thấp → kiểm tra ẩm, bẩn, hoặc cách điện bị thủng.",
            "<strong>Kiểm tra liên tục mạch bảo vệ PE:</strong> Đo điện trở giữa terminal PE và mọi phần kim loại trần của vỏ tủ. Điện trở phải ≤ 0.1Ω — đảm bảo dòng rò sẽ trip bảo vệ trước khi gây giật.",
            "<strong>Thử nghiệm tác động trip của relay:</strong> Bơm dòng thứ cấp vào CT, kiểm tra relay bảo vệ trip đúng thông số cài đặt (overcurrent, earth fault, thermal overload). Ghi biên bản cài đặt.",
            "<strong>Kiểm tra hệ thống interlock (khóa liên động):</strong> Thử cơ khí: không thể đóng ACB khi cửa tủ mở, không thể mở cửa khi ACB đang đóng. Interlock điện: ATS không chuyển khi cả 2 nguồn có điện nếu cài đặt manual.",
            "<strong>Kiểm tra đấu nối nhị thứ:</strong> Mở nắp máng nhị thứ, kiểm tra dây có đúng số mã theo bản vẽ, cosse bấm chặt, không có dây lỏng hoặc bị bỏ quên.",
            "<strong>Nhận hồ sơ nghiệm thu đầy đủ:</strong> Biên bản Routine Test xưởng, bản vẽ As-built, CO/CQ thiết bị, phiếu xuất xưởng ISO 9001, tài liệu vận hành và bảo trì.",
          ],
        },
      },
      {
        heading: "Công cụ cần có khi nghiệm thu tủ điện",
        table: {
          headers: ["Công cụ", "Mục đích", "Thông số kỹ thuật"],
          rows: [
            ["Cờ lê lực (Torque wrench)", "Siết/check moment bu-lông thanh cái", "10–100 Nm, độ chính xác ±4%"],
            ["Megohmmeter (Meger)", "Đo điện trở cách điện", "500V/1000V DC, dải 0–2000 MΩ"],
            ["Multimeter (VOM)", "Kiểm tra liên tục mạch, điện áp", "True RMS, dải 1000V AC/DC"],
            ["Current injection test set", "Bơm dòng thử relay bảo vệ", "0–100A hoặc 0–1000A tùy tủ"],
            ["Thermal imaging camera", "Kiểm tra phát nhiệt sau vận hành", "Dải -20°C đến 650°C"],
            ["Endoscope (nếu cần)", "Kiểm tra đấu nối trong khoang hẹp", "Camera 7mm, có đèn LED"],
          ],
        },
      },
      {
        heading: "Nghiệm thu sau vận hành — thermal imaging scan",
        paragraphs: [
          "Sau khi tủ vận hành tải ≥ 50% trong 24–48 giờ, cần thực hiện <strong>thermal imaging scan</strong> (chụp nhiệt) để phát hiện điểm phát nhiệt sớm — trước khi gây sự cố. Điểm cần chụp:",
          "Tiếp điểm ACB/MCCB, đầu thanh cái, bu-lông nối, terminal cáp, biến dòng CT. Nhiệt độ bình thường ≤ 60°C ở môi trường 35°C. Nếu điểm nào > 80°C hoặc chênh > 20°C so với pha khác → cần siết lại hoặc thay tiếp điểm.",
          "Đây là bước nghiệm thu thường bị bỏ qua nhưng cực kỳ quan trọng — phát hiện sai lệch siết lực do vận chuyển mà Routine Test xưởng không phát hiện được.",
        ],
        callout: {
          type: "warning",
          title: "Lưu ý an toàn khi nghiệm thu",
          text: "Nghiệm thu tủ điện có liên quan đến điện áp cao và dòng ngắn mạch. Chỉ thực hiện khi: (1) tủ đã cắt nguồn và có LOTO (Lockout/Tagout), (2) người thực hiện có chứng chỉ an toàn điện, (3) có PPE đầy đủ (găng cách điện 1000V, kính, thảm cách điện). Không nghiệm thu tủ đang có điện trừ khi có quy trình hot work cụ thể.",
        },
      },
      {
        heading: "Hồ sơ nghiệm thu cần nhận từ nhà sản xuất",
        paragraphs: [
          "Khi ký biên bản nghiệm thu, TVGĐ / chủ đầu tư cần đảm bảo nhận đủ bộ hồ sơ:",
        ],
        list: {
          ordered: false,
          items: [
            "Biên bản Routine Test xưởng (IEC 61439-2) — có chữ ký kỹ sư QC và ngày thử.",
            "Bản vẽ As-built — sơ đồ nguyên lý, layout, sơ đồ nhị thứ, có chữ ký thiết kế và kiểm duyệt.",
            "CO/CQ thiết bị chính hãng — ACB, MCCB, relay, biến tần, PLC...",
            "Phiếu xuất xưởng ISO 9001:2015 — số serial tủ, ngày sản xuất, kiểm tra QC.",
            "Tài liệu vận hành & bảo trì — hướng dẫn, thông số cài đặt relay, lịch bảo trì.",
            "Bảo hành — cam kết bảo hành 12–24 tháng, rõ điều kiện và phạm vi.",
          ],
        },
        callout: {
          type: "tip",
          title: "PTC hỗ trợ nghiệm thu tại công trường",
          text: "PTC cử kỹ sư đến hiện trường hỗ trợ nghiệm thu, thực hiện thermal imaging scan và bàn giao đầy đủ hồ sơ. Nếu phát hiện sai lệch do vận chuyển, PTC khắc phục tại chỗ trước khi ký biên bản. Liên hệ Ban Kỹ thuật PTC qua Zalo để sắp lịch nghiệm thu.",
        },
      },
    ],
  },
  {
    slug: "case-study-dien-mat-troi-phuc-y-kcn-phu-my-1",
    title: "Case Study: Dự án điện mặt trời Phúc Ý – KCN Phú Mỹ 1 (999 kWp)",
    category: "Case Study",
    readTime: "8 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2026-03-10",
    dateModified: "2026-03-10",
    quickAnswer: "Dự án điện mặt trời Phúc Ý tại KCN Phú Mỹ 1 (Bà Rịa – Vũng Tàu) công suất 999 kWp, do Công ty Cổ phần Điện mặt trời Sunword làm chủ đầu tư và Powertech (tiền thân PTC) làm tổng thầu EPC. Hoàn thành tháng 10/2020 với 2.245 tấm pin Longi 445Wp và 8 inverter Huawei 100kW, bán điện trực tiếp lên lưới quốc gia.",
    summary: [
      "Chủ đầu tư: Công ty Cổ phần Điện mặt trời Sunword. Tổng thầu EPC: Powertech (tiền thân PTC).",
      "Cấu hình: 2.245 tấm pin Longi 445Wp (Mono Half-cells) + 8 inverter Huawei 100kW 3 pha.",
      "Quy mô 999 kWp tại KCN Phú Mỹ 1, Bà Rịa – Vũng Tàu. Doanh nghiệp đầu tư 100%, bán điện lên lưới quốc gia.",
    ],
    body: [
      {
        heading: "Dự án điện mặt trời Phúc Ý 999 kWp tại KCN Phú Mỹ 1",
        paragraphs: [
          "Tháng 10/2020, <strong>Powertech</strong> (nay là PTC) hoàn thành dự án solar Phúc Ý 999 kWp tại KCN Phú Mỹ 1, Bà Rịa – Vũng Tàu. Chủ đầu tư là Công ty Cổ phần Điện mặt trời Sunword, Powertech làm tổng thầu EPC.",
          "Hệ thống 999 kWp cung cấp điện ổn định, giúp nhà máy giảm chi phí điện và hạ phát thải. Hình thức đầu tư: doanh nghiệp đầu tư 100%, bán điện trực tiếp lên lưới quốc gia.",
          "Đây là một trong những hệ thống áp mái quy mô lớn mà đội ngũ Powertech đã triển khai năm 2020, cho thấy kinh nghiệm thiết kế, thi công và vận hành tủ điện solar cho nhà máy công nghiệp.",
        ],
      },
      {
        heading: "Thông tin chi tiết dự án",
        table: {
          headers: ["Hạng mục", "Thông tin"],
          rows: [
            ["Tên dự án", "Điện mặt trời Phúc Ý – KCN Phú Mỹ 1"],
            ["Chủ đầu tư", "Công ty Cổ phần Điện mặt trời Sunword"],
            ["Tổng thầu EPC", "Công ty TNHH TM & KT Powertech (tiền thân PTC)"],
            ["Công suất lắp đặt", "999 kWp"],
            ["Hình thức đầu tư", "Doanh nghiệp đầu tư 100%, bán điện lên lưới quốc gia"],
            ["Địa điểm", "KCN Phú Mỹ 1, Thị xã Phú Mỹ, Tỉnh Bà Rịa – Vũng Tàu"],
            ["Thời gian hoàn thành", "Tháng 10/2020"],
          ],
        },
      },
      {
        heading: "Cấu hình thiết bị kỹ thuật",
        paragraphs: [
          "Hệ thống dùng thiết bị đạt tiêu chuẩn quốc tế để đạt hiệu suất chuyển đổi cao:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Tấm pin:</strong> 2.245 tấm pin Longi 445Wp Mono Half-cells cho hiệu suất cao trên 1 m², phù hợp mái nhà máy diện tích hạn chế.",
            "<strong>Inverter:</strong> 08 bộ inverter Huawei 100kW 3 pha, ổn định, hỗ trợ giám sát từ xa qua SmartLogger.",
            "<strong>Hệ thống tủ điện:</strong> tủ AC phân phối, tủ hòa lưới — thiết kế và sản xuất theo IEC 61439, phối hợp thông số inverter Huawei.",
            "<strong>Hệ thống cáp + máng cáp:</strong> tuyến cáp DC từ panel đến inverter, cáp AC từ inverter đến tủ hòa lưới, máng cáp ngoài trời chịu UV.",
          ],
        },
        callout: {
          type: "info",
          title: "Vì sao chọn Longi 445Wp + Huawei 100kW?",
          text: "Longi 445Wp Mono Half-cells cho hiệu suất cao trên 1 m², phù hợp mái nhà máy có diện tích hạn chế. Huawei 100kW 3 pha là dòng inverter công nghiệp ổn định, có SmartLogger theo dõi từ xa — phù hợp dự án bán điện lên lưới cần giám sát sản lượng liên tục.",
        },
      },
      {
        heading: "Quy trình thực hiện — từ thiết kế đến vận hành",
        paragraphs: [
          "Dự án Phúc Ý được thực hiện theo quy trình của đội ngũ Powertech, từ thiết kế kỹ thuật đến thi công tại hiện trường:",
        ],
        list: {
          ordered: true,
          items: [
            "<strong>Khảo sát & Thiết kế:</strong> Đo đạc mái nhà máy, tính toán công suất phù hợp với diện tích và hướng mái, thiết kế layout panel + tuyến cáp DC/AC.",
            "<strong>Cung cấp vật tư:</strong> Pin Longi 445Wp, inverter Huawei 100kW, tủ điện AC/ hòa lưới, máng cáp ngoài trời — tất cả có CO/CQ chính hãng.",
            "<strong>Thi công lắp đặt:</strong> Lắp khung giá panel trên mái, đi cáp DC trong máng cáp, lắp inverter và tủ AC — phối hợp với chủ đầu tư để không gián đoạn vận hành nhà máy.",
            "<strong>Đấu nối & Nghiệm thu:</strong> Test hệ thống, phối hợp với điện lực EVN đấu nối lên lưới, bàn giao hồ sơ hoàn công.",
            "<strong>Vận hành & Bảo trì:</strong> Giám sát sản lượng từ xa qua SmartLogger, bảo trì định kỳ kiểm tra panel + inverter + tủ điện.",
          ],
        },
      },
      {
        heading: "Kết quả vận hành sau bàn giao",
        paragraphs: [
          "Dự án Phúc Ý vận hành tốt. Hệ thống cung cấp điện ổn định cho KCN Phú Mỹ 1, giúp Sunword giảm chi phí điện năng.",
          "Đội ngũ kỹ thuật Powertech (nay là PTC) giám sát từ xa và kiểm tra định kỳ để hệ thống vận hành ổn định lâu dài. PTC không coi việc bàn giao là kết thúc trách nhiệm.",
        ],
        callout: {
          type: "tip",
          title: "Cần tư vấn dự án điện mặt trời áp mái cho nhà máy?",
          text: "Gửi thông số mái nhà máy (diện tích, hướng, loại tôn) và nhu cầu công suất qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư sẽ tính toán công suất phù hợp, đề xuất cấu hình pin + inverter + tủ điện, và gửi phương án kỹ thuật trong 24h. PTC kế thừa kinh nghiệm từ Powertech — đội ngũ đã thực hiện nhiều dự án solar quy mô MWp.",
        },
      },
    ],
  },
  {
    slug: "yeu-to-quyet-dinh-gia-tu-dien-cong-nghiep",
    title: "Yếu tố quyết định giá tủ điện công nghiệp: Bóc tách chi tiết từ vật tư đến nhân công",
    category: "Quy trình B2B",
    readTime: "9 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2026-03-12",
    dateModified: "2026-03-12",
    quickAnswer: "Giá tủ điện công nghiệp được quyết định bởi 5 nhóm yếu tố: (1) Vật tư thiết bị đóng cắt chiếm 50-65% giá trị, (2) Thanh cái đồng + vật liệu vỏ 15-20%, (3) Nhân công lắp ráp + đấu nối 10-15%, (4) Thử nghiệm & hồ sơ 5-8%, (5) Vận chuyển & bảo hành 5-10%. Hiểu đúng giúp chủ đầu tư so sánh báo giá công bằng.",
    summary: [
      "Vật tư thiết bị (ACB, MCCB, contactor, relay) chiếm 50-65% — hãng ABB/Schneider đắt hơn LS/Hyundai 20-40%.",
      "Thanh cái đồng + vỏ tủ: 15-20% — tiết diện đồng tính theo Icw, vỏ Inox đắt hơn sơn tĩnh điện 2-3 lần.",
      "Nhân công + thử nghiệm + hồ sơ: 15-23% — xưởng có ISO 9001 + Routine Test 100% đắt hơn xưởng tự lắp 10-15% nhưng giảm rủi ro sự cố.",
    ],
    body: [
      {
        heading: "Vì sao 2 báo giá tủ điện chênh nhau 30-50% — và báo giá nào đúng",
        paragraphs: [
          "Khi chủ đầu tư nhận 2-3 báo giá tủ điện cho cùng 1 sơ đồ đơn tuyến, thường thấy chênh lệch 30–50%. Nhiều người chọn báo giá thấp nhất — và đây là <strong>nguyên nhân #1 gây sự cố vận hành</strong>: tủ trip nhầm, cháy thanh cái, hoặc không nghiệm thu được. Bài viết này bóc tách 5 nhóm yếu tố quyết định giá, giúp bạn so sánh báo giá công bằng và tránh bẫy giá rẻ.",
        ],
      },
      {
        heading: "Nhóm 1: Vật tư thiết bị đóng cắt — 50-65% giá trị tủ",
        paragraphs: [
          "Đây là nhóm chiếm tỷ trọng lớn nhất và cũng là nơi chênh lệch giá nhiều nhất. Cùng 1 ACB 2500A, giá Schneider Masterpact MTZ có thể cao hơn LS Metasol 30–40% — nhưng khác nhau về tính năng (MicroLogic protection, Modbus communication), Icu (50kA vs 65kA), và ecosystem phụ trợ.",
          "Bảng tham khảo tỷ trọng vật tư trong tủ MSB 2500A điển hình:",
        ],
        table: {
          headers: ["Thiết bị", "Tỷ trọng giá", "Phân khúc giá", "Lưu ý"],
          rows: [
            ["ACB tổng (2500A)", "~25-30%", "Schneider/ABB > Mitsubishi > LS", "Chọn theo Icu + tính năng cần"],
            ["MCCB nhánh (400-1600A)", "~15-20%", "Tương tự ACB", "Số nhánh quyết định tổng giá"],
            ["Contactor + relay nhiệt", "~5-8%", "Schneider > ABB > LS > Hyundai", "Cho MCC, tủ điều khiển"],
            ["Tụ bù + controller APFC", "~5-10%", "EPCOS > Schneider > LS", "Tùy số cấp bù"],
            ["Biến dòng CT + đo lường", "~3-5%", "Schneider/ABB > generic", "Yêu cầu độ chính xác"],
            ["Biến tần VSD (nếu có)", "~10-30%", "ABB > Schneider > Yaskawa > LS", "Cho MCC có VSD"],
          ],
        },
        callout: {
          type: "info",
          title: "Cách so sánh công bằng",
          text: "Khi so sánh 2 báo giá, <strong>luôn đối chiếu hãng + model + Icu của từng thiết bị</strong> — không chỉ dòng định mức. ACB 2500A hãng A với Icu 50kA khác hoàn toàn hãng B với Icu 65kA. Yêu cầu nhà cung cấp ghi rõ model trong báo giá.",
        },
      },
      {
        heading: "Nhóm 2: Thanh cái đồng + vật liệu vỏ tủ — 15-20%",
        paragraphs: [
          "Thanh cái đồng (busbar) chiếm 8–12% giá tủ, quyết định bởi tiết diện đồng (tính theo In và Icw). Tiết diện sai → cháy thanh cái khi ngắn mạch. Đồng điện phân Cu ≥ 99.9% giá cao hơn đồng tái chế 15–20% — nhưng độ dẫn điện và cơ tính ổn định hơn.",
          "Vỏ tủ chiếm 5–8% giá, quyết định bởi vật liệu và lớp phủ:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Thép CRC sơn tĩnh điện:</strong> Chi phí thấp nhất, phù hợp trong nhà khô. Tuổi thọ 10–15 năm.",
            "<strong>Thép mạ kẽm nhúng nóng + sơn tĩnh điện:</strong> Phù hợp ngoài trời, nhà máy ẩm. Tuổi thọ 20+ năm. Cao hơn 30–50%.",
            "<strong>Inox 304:</strong> Chống rỉ hoàn toàn, phù hợp thực phẩm/dược/hóa chất. Cao hơn sơn tĩnh điện 2–2.5 lần.",
            "<strong>Inox 316:</strong> Môi trường biển, cao hơn Inox 304 thêm 30–40%.",
          ],
        },
      },
      {
        heading: "Nhóm 3: Nhân công lắp ráp + đấu nối — 10-15%",
        paragraphs: [
          "Nhân công là nơi <strong>xưởng có ISO 9001 + quy trình chuẩn</strong> khác biệt rõ nhất với xưởng tự lắp. Xưởng chuẩn có: kỹ sư thiết kế phát hành bản vẽ, thợ lắp ráp qua đào tạo, QC kiểm tra từng công đoạn, torque wrench siết thanh cái theo moment. Xưởng tự lắp thường bỏ qua torque wrench, không có QC, không có bản vẽ As-built.",
          "Chênh lệch giá nhân công: xưởng ISO đắt hơn xưởng tự lắp 10–15% — nhưng giảm rủi ro sự cố vận hành > 80%. Một lần cháy thanh cái do siết lỏng = thay toàn bộ tủ = 5–10 lần chênh giá nhân công.",
        ],
      },
      {
        heading: "Nhóm 4: Thử nghiệm & hồ sơ — 5-8%",
        paragraphs: [
          "Routine Test 100% theo IEC 61439-2 tốn 5–8% giá tủ — bao gồm megohmmeter, dielectric test set, current injection set, nhân sự QC. Nhiều xưởng bỏ qua để giảm giá — nhưng tủ không có Routine Test = <strong>không nghiệm thu được theo IEC</strong>, bảo hiểm từ chối bồi thường khi sự cố.",
          "Hồ sơ đầy đủ (As-built, CO/CQ, Routine Test, phiếu xuất xưởng ISO 9001) cũng tốn chi phí quản lý — nhưng là yêu cầu bắt buộc cho dự án FDI và nghiệm thu EVN.",
        ],
        callout: {
          type: "warning",
          title: "Bẫy báo giá rẻ: bỏ Routine Test",
          text: "Báo giá rẻ hơn 15-20% thường do bỏ Routine Test + hồ sơ. Hậu quả: (1) không nghiệm thu được, (2) bảo hiểm từ chối, (3) sự cố vận hành không được bồi thường. <strong>Luôn yêu cầu Routine Test 100% trong báo giá — nếu nhà cung cấp không có, đó là red flag.</strong>",
        },
      },
      {
        heading: "Nhóm 5: Vận chuyển + bảo hành — 5-10%",
        paragraphs: [
          "Vận chuyển tủ lớn (MSB 2000×2200×1000mm, nặng 800–1500kg) cần xe tải chuyên dụng + cẩu. Vận chuyển nội thành TP.HCM ~2–5 triệu/tủ, đi tỉnh 5–15 triệu/tủ tùy khoảng cách. Xưởng không có kinh nghiệm đóng gói có thể làm xước sơn hoặc lệch thanh cái khi vận chuyển.",
          "Bảo hành 12–24 tháng tốn 3–5% giá tủ (dự phòng chi phí khắc phục). Xưởng không có bảo hành = không chịu trách nhiệm sau khi giao — đây là red flag thứ 2 sau việc không có Routine Test.",
        ],
      },
      {
        heading: "Bảng tổng hợp: tỷ trọng giá tủ MSB 2500A điển hình",
        table: {
          headers: ["Nhóm", "Tỷ trọng", "Phương án thấp", "Phương án cao", "Chênh lệch"],
          rows: [
            ["Vật tư thiết bị", "55%", "LS + LS + LS", "Schneider + ABB + Schneider", "+35%"],
            ["Thanh cái + vỏ", "18%", "CRC sơn tĩnh điện", "Inox 304", "+80%"],
            ["Nhân công", "12%", "Xưởng tự lắp", "Xưởng ISO 9001", "+15%"],
            ["Thử nghiệm + hồ sơ", "7%", "Không Routine Test", "Routine Test 100% + hồ sơ", "+7%"],
            ["Vận chuyển + bảo hành", "8%", "Giao không bảo hành", "Giao + bảo hành 24 tháng", "+5%"],
            ["<strong>TỔNG</strong>", "100%", "<strong>Giá thấp</strong>", "<strong>Giá cao</strong>", "<strong>+30-50%</strong>"],
          ],
        },
      },
      {
        heading: "3 câu hỏi để so sánh báo giá công bằng",
        list: {
          ordered: true,
          items: [
            "<strong>Có cùng hãng + model thiết bị không?</strong> — Nếu báo giá rẻ hơn 20% nhưng đổi sang hãng rẻ hơn, đó không phải \"giá tốt\" mà là \"spec thấp hơn\".",
            "<strong>Có Routine Test 100% + hồ sơ đầy đủ không?</strong> — Nếu không, trừ 15-20% giá trị thực. Tủ không có routine test = không nghiệm thu được.",
            "<strong>Bảo hành bao lâu + phạm vi gì?</strong> — 12 tháng tối thiểu, 24 tháng cho FDI. Nếu không có bảo hành, trừ 5% giá trị.",
          ],
        },
        callout: {
          type: "tip",
          title: "Cần báo giá tủ điện chi tiết + minh bạch?",
          text: "Gửi sơ đồ đơn tuyến qua Zalo cho Ban Kỹ thuật PTC. Báo giá của PTC luôn ghi rõ: hãng + model thiết bị, tiết diện thanh cái, cấp IP/Form, Routine Test 100%, bảo hành 12-24 tháng — không có phụ phí ẩn. So sánh công bằng với bất kỳ báo giá nào khác.",
        },
      },
    ],
  },
  {
    slug: "ptc-vs-xuong-gia-cong-nho-5-rui-ro",
    title: "PTC vs xưởng gia công nhỏ: 5 rủi ro khi chọn nhà sản xuất tủ điện giá rẻ",
    category: "So sánh & Lựa chọn",
    readTime: "7 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
    quickAnswer: "Chọn xưởng gia công nhỏ để tiết kiệm 15-20% giá tủ điện có thể dẫn đến 5 rủi ro: (1) Không có Routine Test → không nghiệm thu, (2) Thanh cái tính sai Icw → cháy tủ, (3) Không có hồ sơ CO/CQ → bảo hiểm từ chối, (4) Không bảo hành → tự chịu chi phí sự cố, (5) Tiến độ không kiểm soát → trễ dự án. Tổng rủi ro > 5 lần tiền tiết kiệm.",
    summary: [
      "Rủi ro #1: Không có Routine Test 100% — tủ không nghiệm thu được theo IEC 61439.",
      "Rủi ro #2: Thanh cái tính sai Icw — cháy tủ khi ngắn mạch, phải thay toàn bộ.",
      "Rủi ro #3: Không có CO/CQ + As-built — bảo hiểm từ chối bồi thường, FDI không nghiệm thu.",
      "Rủi ro #4: Không bảo hành — tự chịu chi phí sự cố (5-10 lần tiền tiết kiệm).",
      "Rủi ro #5: Tiến độ không kiểm soát — trễ 1-2 tuần, ảnh hưởng toàn bộ tiến độ thi công.",
    ],
    body: [
      {
        heading: "Vì sao bài viết này cần đọc trước khi chọn nhà sản xuất tủ",
        paragraphs: [
          "Trong tư vấn cho chủ đầu tư và nhà thầu M&E, PTC gặp nhiều case \"chọn xưởng rẻ rồi hối hận\" — tủ trip nhầm, cháy thanh cái, không nghiệm thu được, hoặc trễ tiến độ 2-3 tuần. Bài viết này phân tích 5 rủi ro thực tế dựa trên case đã gặp, giúp bạn đưa ra quyết định dựa trên <strong>tổng chi phí sở hữu (TCO)</strong> chứ không chỉ giá ban đầu.",
        ],
      },
      {
        heading: "Rủi ro #1: Không có Routine Test 100% — không nghiệm thu được",
        paragraphs: [
          "Xưởng gia công nhỏ thường không đầu tư megohmmeter, dielectric test set, current injection set — chi phí thiết bị thử nghiệm 50–100 triệu. Hậu quả: tủ xuất xưởng không qua Routine Test, không có biên bản thử nghiệm theo IEC 61439-2.",
          "Khi nghiệm thu: TVGĐ yêu cầu biên bản Routine Test → không có → không nghiệm thu → chủ đầu tư không thanh toán. Khi sự cố: bảo hiểm yêu cầu biên bản → không có → từ chối bồi thường. <strong>Chi phí khắc phục: phải thuê lab độc lập test lại (10-30 triệu/tủ) hoặc thay tủ mới.</strong>",
        ],
        callout: {
          type: "warning",
          title: "Red flag #1",
          text: "Nếu nhà sản xuất không cung cấp được mẫu biên bản Routine Test trước khi đặt hàng — đừng chọn. PTC luôn gửi mẫu biên bản + quy trình thử nghiệm khi khách yêu cầu.",
        },
      },
      {
        heading: "Rủi ro #2: Thanh cái tính sai Icw — cháy tủ khi ngắn mạch",
        paragraphs: [
          "Tính Icw thanh cái cần: công suất trạm biến áp, impedance MBA, impedance cáp, dòng ngắn mạch tại điểm lắp. Xưởng nhỏ thường <strong>không có kỹ sư tính toán</strong> — chọn tiết diện đồng theo \"kinh nghiệm\" hoặc theo dòng định mức mà bỏ qua Icw.",
          "Hậu quả: khi ngắn mạch xảy ra, thanh cái không chịu được lực điện động → uốn cong, hàn dính vào khung, cháy tủ. <strong>Đây là sự cố không thể sửa — phải thay toàn bộ tủ</strong>, chi phí 100–500 triệu + đình công nhà máy 3–7 ngày.",
          "Case thực tế: 1 nhà máy ở Đồng Nai chọn xưởng nhỏ cho MSB 1600A, không tính Icw. Sau 8 tháng vận hành, ngắn mạch phụ tải → thanh cái uốn cong, cháy tủ. Phải thay tủ mới + đình công 5 ngày. Tổng thiệt hại ~800 triệu — gấp 4 lần chênh giá ban đầu.",
        ],
      },
      {
        heading: "Rủi ro #3: Không có CO/CQ + As-built — FDI không nghiệm thu",
        paragraphs: [
          "Dự án FDI (Nhật, Hàn, châu Âu) yêu cầu hồ sơ nghiệm thu đầy đủ: CO/CQ thiết bị chính hãng, bản vẽ As-built, biên bản Routine Test, phiếu xuất xưởng ISO 9001. Xưởng nhỏ thường không có:",
          "(1) CO/CQ vì mua thiết bị qua thương mại (không phải đại lý chính hãng), (2) Bản vẽ As-built vì không có kỹ sư thiết kế phát hành bản vẽ, (3) Phiếu xuất xưởng vì không có chứng nhận ISO 9001.",
          "Hậu quả: chủ đầu tư FDI <strong>từ chối nghiệm thu</strong>, yêu cầu thay tủ hoặc làm lại hồ sơ (tốn 1-3 tháng). Đối với dự án có funding từ nước ngoài, không có hồ sơ = không giải ngân.",
        ],
      },
      {
        heading: "Rủi ro #4: Không bảo hành — tự chịu chi phí sự cố",
        paragraphs: [
          "Xưởng nhỏ thường không có bảo hành hoặc chỉ bảo hành miệng (không có hợp đồng). Khi sự cố xảy ra, 3 kịch bản:",
          "(1) Xưởng không nhận trách nhiệm — cho rằng lỗi do lắp đặt hoặc vận hành. (2) Xưởng đã đóng cửa hoặc chuyển đổi — không liên lạc được. (3) Xưởng nhận sửa nhưng tính phí đầy đủ — chi phí sửa = 30–50% giá tủ mới.",
          "PTC bảo hành 12–24 tháng có hợp đồng, rõ phạm vi (lỗi sản xuất, lỗi vật tư) và SLA (phản hồi 2 giờ, đến hiện trường 24–48 giờ). Chi phí bảo hành đã bao gồm trong giá tủ — không phát sinh thêm.",
        ],
      },
      {
        heading: "Rủi ro #5: Tiến độ không kiểm soát — trễ 1-2 tuần",
        paragraphs: [
          "Xưởng nhỏ thường nhận nhiều việc nhưng không có hệ thống quản lý sản xuất — không có Gantt chart, không có production planning, không có QC checkpoint. Hậu quả: trễ tiến độ 1–2 tuần là phổ biến, có case trễ 4–6 tuần.",
          "Đối với dự án nhà máy hoặc KCN, trễ tủ điện = trễ toàn bộ tiến độ M&E = trễ commissioning = trễ go-live. Chi phí trễ 1 tuần (lương nhân sự, chi phí kho, mất doanh thu) thường 50–200 triệu — gấp nhiều lần chênh giá ban đầu.",
          "PTC có quy trình sản xuất 7 bước khép kín, phát hành tiến độ chi tiết khi chốt hợp đồng, và giao cuốn chiếu cho dự án gấp. Trong 10+ năm, tỷ lệ giao đúng tiến độ > 95%.",
        ],
      },
      {
        heading: "Bảng so sánh: PTC vs xưởng gia công nhỏ",
        table: {
          headers: ["Tiêu chí", "Xưởng nhỏ", "PTC (xưởng ISO)"],
          rows: [
            ["Giá tủ", "Thấp hơn 15-20%", "Cao hơn 15-20%"],
            ["Routine Test 100%", "Không có", "Có, theo IEC 61439-2"],
            ["Tính Icw thanh cái", "Theo kinh nghiệm", "Kỹ sư tính toán + bóc tách"],
            ["CO/CQ thiết bị", "Không đảm bảo", "Đại lý chính hãng ABB/Schneider/LS"],
            ["Bản vẽ As-built", "Không có", "Phát hành + ký duyệt"],
            ["ISO 9001", "Không", "Có"],
            ["Bảo hành", "Không hoặc miệng", "12-24 tháng có hợp đồng"],
            ["Tiến độ", "Trễ 1-4 tuần phổ biến", "Giao đúng > 95%"],
            ["<strong>TCO 5 năm</strong>", "<strong>Cao hơn 2-5 lần</strong>", "<strong>Tối ưu</strong>"],
          ],
        },
        callout: {
          type: "tip",
          title: "Cần so sánh báo giá PTC với xưởng khác?",
          text: "Gửi sơ đồ đơn tuyến qua Zalo cho Ban Kỹ thuật PTC. PTC sẽ gửi báo giá chi tiết + mẫu biên bản Routine Test + mẫu bảo hành — để bạn so sánh công bằng với bất kỳ báo giá nào khác. Quyết định dựa trên TCO, không chỉ giá ban đầu.",
        },
      },
    ],
  },
  {
    slug: "tu-dien-cong-nghiep-kcn-binh-duong-dong-nai",
    title: "Tủ điện công nghiệp tại KCN Bình Dương, Đồng Nai — Nhà máy PTC giao hàng 24h",
    category: "Khu vực",
    readTime: "6 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2026-03-22",
    dateModified: "2026-03-22",
    quickAnswer: "Nhà máy PTC tại TP.HCM cung cấp tủ điện công nghiệp và thang máng cáp cho các KCN tại Bình Dương (VSIP, Mỹ Phước, Đồng An) và Đồng Nai (Long Đức, Amata, KCN Long Bình) với thời gian giao hàng 24-48h cho tủ DB/SDB và 10-15 ngày cho MSB/MCC sản xuất theo bản vẽ, hỗ trợ kỹ thuật hiện trường trong 24h.",
    summary: [
      "Phạm vi phục vụ: VSIP 1/2/3, Mỹ Phước 1/2/3, Đồng An, Kizuna (Bình Dương) + Long Đức, Amata, Long Bình, Biên Hòa (Đồng Nai).",
      "Thời gian giao: 24-48h cho tủ DB/SDB có sẵn, 10-15 ngày cho MSB/MCC sản xuất theo bản vẽ.",
      "Hỗ trợ kỹ thuật hiện trường trong 24h tại Bình Dương/Đồng Nai — phản hồi Zalo trong 2 giờ.",
    ],
    body: [
      {
        heading: "Vì sao KCN Bình Dương và Đồng Nai là thị trường trọng điểm của PTC",
        paragraphs: [
          "Bình Dương và Đồng Nai là 2 tỉnh có <strong>mật độ KCN cao nhất miền Nam</strong> sau TP.HCM — với hàng nghìn nhà máy FDI (Nhật, Hàn, Đài Loan, châu Âu) và nhà máy nội địa. Nhu cầu tủ điện công nghiệp và thang máng cáp cho nhà máy mới + mở rộng + bảo trì định kỳ là liên tục.",
          "Nhà máy PTC tại Linh Xuân, TP.HCM cách Bình Dương 30–60 phút, cách Đồng Nai 45–90 phút — cho phép giao hàng nhanh và hỗ trợ kỹ thuật hiện trường trong ngày. Đây là lợi thế cạnh tranh so với xưởng ở miền Bắc hoặc miền Trung.",
        ],
      },
      {
        heading: "Danh sách KCN phục vụ — Bình Dương",
        table: {
          headers: ["KCN", "Huyện/Thành phố", "Loại hình", "Thời gian giao"],
          rows: [
            ["VSIP 1", "Thuận An", "FDI đa quốc gia", "24-48h DB, 10-15 ngày MSB"],
            ["VSIP 2", "Bến Cát", "FDI, KCN xanh", "24-48h DB, 10-15 ngày MSB"],
            ["VSIP 3", "Bàu Bàng", "FDI mới, LG/Schneider", "24-48h DB, 10-15 ngày MSB"],
            ["Mỹ Phước 1/2/3", "Bến Cát", "FDI + nội địa", "24-48h DB, 10-15 ngày MSB"],
            ["Đồng An 1/2", "Dĩ An", "FDI Đài Loan, Hàn", "24-48h DB, 10-15 ngày MSB"],
            ["Kizuna", "Bến Cát", "SME + FDI nhỏ", "24-48h DB, 10-15 ngày MSB"],
            ["Sóng Thần 1/2/3", "Dĩ An", "Hỗn hợp", "24-48h DB, 10-15 ngày MSB"],
            ["Mapletree", "Bến Cát", "Logistics + FDI", "24-48h DB, 10-15 ngày MSB"],
          ],
        },
      },
      {
        heading: "Danh sách KCN phục vụ — Đồng Nai",
        table: {
          headers: ["KCN", "Huyện/Thành phố", "Loại hình", "Thời gian giao"],
          rows: [
            ["Long Đức", "Trảng Bom", "FDI + nội địa", "24-48h DB, 10-15 ngày MSB"],
            ["Amata", "Biên Hòa", "FDI cao cấp", "24-48h DB, 10-15 ngày MSB"],
            ["Long Bình", "Biên Hòa", "FDI + nội địa", "24-48h DB, 10-15 ngày MSB"],
            ["Biên Hòa 1/2", "Biên Hòa", "Hỗn hợp", "24-48h DB, 10-15 ngày MSB"],
            ["Bàu Xéo", "Trảng Bom", "FDI + nội địa", "24-48h DB, 10-15 ngày MSB"],
            ["Long Khánh", "Long Khánh", "Nội địa + FDI", "24-48h DB, 10-15 ngày MSB"],
            ["Nhơn Trạch 1/2/3", "Nhơn Trạch", "FDI + nội địa", "24-48h DB, 10-15 ngày MSB"],
            ["Phúc Điền", "Cẩm Mỹ", "FDI mới", "24-48h DB, 10-15 ngày MSB"],
          ],
        },
      },
      {
        heading: "Sản phẩm PTC cung cấp cho nhà máy KCN",
        list: {
          ordered: false,
          items: [
            "<strong>Tủ điện tổng MSB</strong> — cho nhà máy mới, trạm biến áp riêng. Sản xuất theo sơ đồ đơn tuyến, IEC 61439.",
            "<strong>Tủ phân phối SDB/DB</strong> — cho phân xưởng, tầng văn phòng. Có sẵn hoặc sản xuất theo BOQ.",
            "<strong>Tủ MCC</strong> — cho phân xưởng có nhiều động cơ (bơm, quạt, băng tải). Tích hợp VSD/Soft Starter.",
            "<strong>Tủ ATS</strong> — cho nhà máy cần cấp điện liên tục (FDI, chế biến thực phẩm).",
            "<strong>Tủ solar DC/AC</strong> — cho nhà máy KCN lắp điện mặt trời mái nhà.",
            "<strong>Thang máng cáp HDG</strong> — cho tuyến cáp ngoài trời, mái xưởng solar.",
            "<strong>Tủ điện bảo trì thay thế</strong> — cho nhà máy đang vận hành cần thay tủ cũ.",
          ],
        },
      },
      {
        heading: "Quy trình đặt hàng cho nhà máy KCN — 24h nhận báo giá",
        list: {
          ordered: true,
          items: [
            "<strong>Gửi yêu cầu qua Zalo</strong> — sơ đồ đơn tuyến, BOQ, hoặc mô tả nhu cầu. Kỹ sư PTC phản hồi trong 2 giờ.",
            "<strong>Kỹ sư PTC đến hiện trường khảo sát</strong> — cho dự án lớn (MSB > 1600A, KCN mới). Miễn phí trong Bình Dương/Đồng Nai.",
            "<strong>Nhận báo giá kỹ thuật trong 24h</strong> — chi tiết theo tủ, kèm tiến độ và hãng thiết bị.",
            "<strong>Phát hành bản vẽ Shop drawing</strong> — sau khi chốt, kỹ sư phát hành bản vẽ để phê duyệt trước khi sản xuất.",
            "<strong>Sản xuất + Routine Test</strong> — 10-15 ngày cho MSB/MCC, 3-7 ngày cho DB/SDB.",
            "<strong>Giao hàng + hỗ trợ lắp đặt</strong> — giao trong 24-48h, kỹ sư hỗ trợ đấu nối nếu cần.",
          ],
        },
        callout: {
          type: "tip",
          title: "Nhà máy tại KCN Bình Dương / Đồng Nai cần tủ điện?",
          text: "Gửi yêu cầu qua Zalo cho Ban Kỹ thuật PTC — phản hồi trong 2 giờ, báo giá trong 24h, giao hàng 24-48h cho tủ có sẵn. Hỗ trợ kỹ thuật hiện trường trong 24h tại Bình Dương và Đồng Nai.",
        },
      },
    ],
  },
  {
    slug: "cach-tinh-dong-ngan-mach-icw-tu-msb",
    title: "Cách tính dòng ngắn mạch Icw cho tủ MSB: Công thức + Bảng tra + Ví dụ",
    category: "Tính toán kỹ thuật",
    readTime: "10 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2026-03-28",
    dateModified: "2026-03-28",
    quickAnswer: "Dòng ngắn mạch Icw của tủ MSB được tính theo công thức Isc = S / (√3 × U × Z%), trong đó S là công suất máy biến áp (kVA), U là điện áp hạ thế (400V), Z% là tổng impedance % của máy biến áp + cáp + lưới. Bài viết cung cấp công thức, bảng tra sẵn cho trạm 630-2500kVA, và 3 ví dụ tính toán thực tế cho nhà máy.",
    summary: [
      "Công thức cơ bản: Isc = S × 1000 / (√3 × U × Z%) — với S tính bằng VA, U tính bằng V, Z% là tổng impedance.",
      "Bảng tra sẵn: trạm 630kVA → Isc ~18kA, 1600kVA → ~46kA, 2500kVA → ~72kA (Z=5%).",
      "Icw thanh cái MSB phải ≥ Isc × 1.1 (hệ số an toàn) — chọn theo dải chuẩn 25/35/50/65/80/100 kA.",
    ],
    body: [
      {
        heading: "Icw là gì? Vì sao tính sai Icw = cháy tủ",
        paragraphs: [
          "Icw (Rated short-time withstand current) là dòng ngắn mạch mà thanh cái đồng của tủ MSB phải chịu được trong thời gian quy định (thường 1 giây) mà không bị biến dạng cơ học hoặc phá hủy nhiệt. Đây là <strong>thông số quan trọng nhất</strong> khi chọn MSB — quan trọng hơn cả dòng định mức In.",
          "Khi ngắn mạch xảy ra (ví dụ: cáp pha-pha chạm nhau), dòng điện có thể đạt 20–100 lần dòng định mức trong vài mili-giây. Thanh cái phải chịu được <strong>lực điện động</strong> (electrodynamic force) và <strong>nhiệt lượng</strong> trong thời gian này. Nếu Icw < Isc thực tế → thanh cái uốn cong, hàn dính vào khung, cháy tủ. Đây là sự cố không thể sửa — phải thay toàn bộ tủ.",
        ],
      },
      {
        heading: "Công thức tính dòng ngắn mạch Isc",
        paragraphs: [
          "Dòng ngắn mạch đối xứng 3 pha tại đầu ra máy biến áp được tính theo công thức:",
          "<strong>Isc = S / (√3 × U × Z%)</strong>",
          "Trong đó:",
          "<strong>S</strong> = công suất định mức máy biến áp (VA — lưu ý đổi kVA sang VA bằng cách × 1000)",
          "<strong>U</strong> = điện áp hạ thế pha-pha (V — thường 400V)",
          "<strong>Z%</strong> = tổng impedance % của nguồn (MBA + cáp + lưới)",
          "<strong>√3</strong> = 1.732 (hệ số 3 pha)",
          "Đối với tính toán nhanh, Z% thường lấy = impedance ngắn mạch của MBA (thường 4–6%, tra catalog) + impedance cáp (nhỏ, thường bỏ qua cho tính nhanh).",
        ],
      },
      {
        heading: "Bảng tra Isc theo công suất trạm biến áp phổ biến",
        paragraphs: [
          "Bảng dưới tính với U = 400V, Z% = 5% (giả định impedance MBA = 5%, bỏ qua cáp). Đây là <strong>ước tính nhanh</strong> — tính chính xác cần thêm impedance cáp từ MBA đến tủ:",
        ],
        table: {
          headers: ["Công suất MBA", "Isc tính (Z=5%)", "Isc tính (Z=6%)", "Icw nên chọn", "ACB Icu nên chọn"],
          rows: [
            ["400 kVA", "~11.5 kA", "~9.6 kA", "25 kA / 1s", "≥ 25 kA"],
            ["630 kVA", "~18.2 kA", "~15.1 kA", "25 kA / 1s", "≥ 36 kA"],
            ["800 kVA", "~23.1 kA", "~19.2 kA", "35 kA / 1s", "≥ 36 kA"],
            ["1.000 kVA", "~28.9 kA", "~24.1 kA", "35-42 kA / 1s", "≥ 50 kA"],
            ["1.250 kVA", "~36.1 kA", "~30.1 kA", "42-50 kA / 1s", "≥ 50 kA"],
            ["1.600 kVA", "~46.2 kA", "~38.5 kA", "50-65 kA / 1s", "≥ 65 kA"],
            ["2.000 kVA", "~57.7 kA", "~48.1 kA", "65 kA / 1s", "≥ 65-85 kA"],
            ["2.500 kVA", "~72.2 kA", "~60.1 kA", "80-100 kA / 1s", "≥ 100 kA"],
          ],
        },
        callout: {
          type: "info",
          title: "Hệ số an toàn",
          text: "Icw thanh cái nên chọn ≥ Isc × 1.1 (10% dư an toàn) để bù cho sai số tính toán và biến thiên lưới. Chọn theo dải chuẩn của nhà sản xuất: 25, 35, 42, 50, 65, 80, 100 kA. Không nên chọn Icw = Isc chính xác — không có dư an toàn.",
        },
      },
      {
        heading: "Ví dụ 1: Tính Icw cho nhà máy trạm 1600kVA",
        paragraphs: [
          "<strong>Đề bài:</strong> Nhà máy có trạm biến áp 1600 kVA, 22kV/0.4kV, impedance ngắn mạch 6%. Cáp từ MBA đến MSB dài 5m, cáp XLPE 4×1×500mm². Tính Icw cho MSB.",
          "<strong>Bước 1: Tính Isc MBA</strong>",
          "Isc_MBA = 1.600.000 / (1.732 × 400 × 0.06) = 1.600.000 / 41.57 = ~38.5 kA",
          "<strong>Bước 2: Tính giảm dòng do cáp</strong>",
          "Impedance cáp XLPE 500mm² Cu ≈ 0.046 mΩ/m × 5m = 0.23 mΩ. Giảm Isc ~2-3% — có thể bỏ qua cho tính nhanh.",
          "<strong>Bước 3: Chọn Icw</strong>",
          "Isc thực tế ≈ 38 kA. Chọn Icw × 1.1 = 42 kA. Chọn theo dải chuẩn: <strong>Icw = 50 kA / 1s</strong> (có dư an toàn).",
          "<strong>ACB tổng:</strong> Chọn Icu ≥ 65 kA (dải chuẩn Schneider/ABB/LS).",
        ],
      },
      {
        heading: "Ví dụ 2: Tính Icw cho nhà máy 2 máy biến áp song song",
        paragraphs: [
          "<strong>Đề bài:</strong> Nhà máy lớn có 2 trạm 2000 kVA chạy song song (N-1 redundancy). Tính Icw cho MSB tổng.",
          "<strong>Lưu ý quan trọng:</strong> Khi 2 MBA song song, dòng ngắn mạch <strong>gấp đôi</strong> (Isc tổng = Isc_MBA1 + Isc_MBA2) vì 2 nguồn cùng cấp dòng sự cố.",
          "Isc_MBA1 = Isc_MBA2 = 2.000.000 / (1.732 × 400 × 0.05) = ~57.7 kA",
          "Isc tổng = 57.7 × 2 = ~115 kA",
          "<strong>Chọn Icw:</strong> Cần Icw ≥ 115 × 1.1 = 127 kA. Đây là dải rất cao — cần thiết kế đặc biệt: thanh cái đồng lớn hơn, busbar trunking, hoặc tách thành 2 MSB riêng (mỗi MSB nhận 1 MBA). PTC khuyến nghị <strong>tách 2 MSB</strong> + ATS chuyển đổi — giảm Icw xuống 65 kA cho mỗi MSB, dễ sản xuất và bảo trì.",
        ],
        callout: {
          type: "warning",
          title: "Cảnh báo: 2 MBA song song",
          text: "Khi 2 MBA chạy song song, Icw thanh cái MSB tổng có thể vượt 100 kA — rất khó và đắt để sản xuất tủ chịu được. Giải pháp thực tế: tách 2 MSB riêng + ATS, hoặc dùng busbar trunking rated 100+ kA. Liên hệ PTC để được tư vấn cấu hình phù hợp.",
        },
      },
      {
        heading: "Ví dụ 3: Tính Icw cho tủ SDB cách MSB 50m",
        paragraphs: [
          "<strong>Đề bài:</strong> Tủ SDB đặt cách MSB 50m, cáp XLPE 4×1×240mm² Cu. MSB có Isc = 50 kA. Tính Icw cho SDB.",
          "<strong>Điểm khác biệt:</strong> Khoảng cách cáp dài làm giảm dòng ngắn mạch — impedance cáp giảm Isc tại SDB.",
          "Impedance cáp XLPE 240mm² Cu ≈ 0.098 mΩ/m × 50m = 4.9 mΩ",
          "Isc_SDB ≈ Isc_MSB × (Z_MSB / (Z_MSB + Z_cable)) — tính gần đúng:",
          "Isc_SDB ≈ 50 × (5 / (5 + 4.9)) ≈ 25 kA",
          "<strong>Chọn Icw SDB:</strong> 25 × 1.1 = 27.5 kA → chọn <strong>Icw = 35 kA / 1s</strong> (dải chuẩn).",
          "Đây là lý do SDB có thể chọn Icw thấp hơn MSB — khoảng cách cáp giảm dòng ngắn mạch. Nhưng <strong>phải tính chính xác</strong> cho từng SDB, không giả định.",
        ],
      },
      {
        heading: "Bảng chọn tiết diện thanh cái đồng theo Icw",
        paragraphs: [
          "Sau khi có Icw, chọn tiết diện thanh cái đồng. Bảng dưới là tham khảo cho thanh cái Cu 99.9%, 1 giây, nhiệt độ tối đa 250°C:",
        ],
        table: {
          headers: ["Icw / 1s", "Tiết diện đồng tối thiểu (mm²)", "Kích thước thanh cái tiêu chuẩn"],
          rows: [
            ["25 kA", "1 × 200", "30×6 mm hoặc 40×5 mm"],
            ["35 kA", "1 × 300", "40×8 mm hoặc 50×6 mm"],
            ["42 kA", "1 × 400", "50×8 mm hoặc 60×7 mm"],
            ["50 kA", "1 × 500", "60×8 mm hoặc 80×6 mm"],
            ["65 kA", "1 × 630 hoặc 2 × 400", "80×8 mm hoặc 2×50×8 mm"],
            ["80 kA", "2 × 500", "2×60×8 mm hoặc 2×80×6 mm"],
            ["100 kA", "2 × 630 hoặc 3 × 500", "2×80×8 mm hoặc 3×60×8 mm"],
          ],
        },
        callout: {
          type: "tip",
          title: "Cần tính Icw + chọn thanh cái cho dự án?",
          text: "Gửi công suất trạm biến áp, sơ đồ đơn tuyến, và chiều dài cáp qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư sẽ tính Isc, chọn Icw, tính tiết diện thanh cái và gửi báo giá kỹ thuật trong 24h — không tính toán thêm cho khách hàng.",
        },
      },
    ],
  },
  {
    slug: "roi-tu-mcc-dung-vsd-cho-bom-quat",
    title: "ROI của tủ MCC dùng biến tần VSD: Tính tiết kiệm điện cho bơm và quạt công nghiệp",
    category: "Tính toán kỹ thuật",
    readTime: "9 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2026-04-02",
    dateModified: "2026-04-02",
    quickAnswer: "Tủ MCC dùng biến tần VSD cho bơm/quạt công nghiệp có thể tiết kiệm 20-50% điện năng so với dùng van tiết lưu hoặc damper, với ROI thường 8-18 tháng. Bài viết cung cấp công thức tính tiết kiệm theo luật affinity (P ∝ N³), bảng tính ROI cho bơm 30kW và 75kW, và 3 ví dụ tính toán điển hình cho nhà máy công nghiệp.",
    summary: [
      "Luật affinity: Công suất bơm/quạt tỷ lệ với lập phương tốc độ (P ∝ N³) — giảm tốc 20% = giảm công suất 49%.",
      "VSD vs van tiết lưu: VSD tiết kiệm 20-50% điện tùy tải, van tiết lưu chỉ giảm dòng nhưng motor vẫn chạy 100% tốc độ.",
      "ROI điển hình: 8-18 tháng cho bơm/quạt > 15kW chạy liên tục; nhanh hơn nếu điện giá cao (FDI, KCN).",
    ],
    body: [
      {
        heading: "Vì sao VSD là khoản đầu tư có ROI nhanh nhất trong tủ MCC",
        paragraphs: [
          "Trong nhà máy công nghiệp, <strong>bơm và quạt</strong> chiếm 60–70% tổng tiêu thụ điện. Phần lớn các tải này chạy ở tốc độ cố định (50Hz) và điều chỉnh lưu lượng bằng <strong>van tiết lưu (bơm) hoặc damper (quạt)</strong> — tức là motor vẫn chạy 100% công suất, chỉ giảm lưu lượng bằng cách tạo sức cản. Đây là lãng phí điện khổng lồ.",
          "Biến tần VSD (Variable Speed Drive) cho phép điều chỉnh tốc độ motor theo nhu cầu thực tế — giảm tốc khi cần ít lưu lượng. Nhờ <strong>luật affinity</strong> (công suất tỷ lệ với lập phương tốc độ), giảm tốc 20% = giảm công suất 49% — tiết kiệm điện khổng lồ. ROI thường 8–18 tháng, một trong những khoản đầu tư nhanh nhất trong M&E.",
        ],
      },
      {
        heading: "Luật affinity — cơ sở tính tiết kiệm VSD",
        paragraphs: [
          "Đối với bơm ly tâm và quạt ly tâm, 3 đại lượng tỷ lệ theo tốc độ motor (N):",
          "<strong>Lưu lượng Q ∝ N</strong> (tuyến tính)",
          "<strong>Áp suất H ∝ N²</strong> (bình phương)",
          "<strong>Công suất P ∝ N³</strong> (lập phương)",
          "Đây là <strong>luật affinity</strong> — cơ sở tính tiết kiệm VSD. Khi giảm tốc độ motor từ 100% xuống 80%, công suất giảm từ 100% xuống 80³ = 51.2% — tiết kiệm 48.8%.",
          "Bảng tham khảo tiết kiệm theo tốc độ:",
        ],
        table: {
          headers: ["Tốc độ motor", "Lưu lượng", "Công suất tiêu thụ", "Tiết kiệm so với 100%"],
          rows: [
            ["100% (50 Hz)", "100%", "100%", "0%"],
            ["90% (45 Hz)", "90%", "72.9%", "27.1%"],
            ["80% (40 Hz)", "80%", "51.2%", "48.8%"],
            ["70% (35 Hz)", "70%", "34.3%", "65.7%"],
            ["60% (30 Hz)", "60%", "21.6%", "78.4%"],
            ["50% (25 Hz)", "50%", "12.5%", "87.5%"],
          ],
        },
        callout: {
          type: "info",
          title: "Lưu ý: VSD vs van tiết lưu",
          text: "Van tiết lưu/damper giảm lưu lượng nhưng motor vẫn chạy 100% tốc độ → công suất giảm rất ít (5-15% tùy đặc tính van). VSD giảm tốc độ motor trực tiếp → tiết kiệm theo luật N³. <strong>VSD luôn tiết kiệm hơn van tiết lưu 20-50%</strong> ở cùng lưu lượng cần.",
        },
      },
      {
        heading: "Công thức tính tiết kiệm điện VSD",
        paragraphs: [
          "Tiết kiệm điện năm = P_motor × T_chạy × (1 - (N_thực/N_100)³) × Giá_điện",
          "Trong đó:",
          "<strong>P_motor</strong> = công suất motor (kW)",
          "<strong>T_chạy</strong> = số giờ chạy/năm (thường 6000-8000h cho nhà máy 3 ca)",
          "<strong>N_thực/N_100</strong> = tỷ lệ tốc độ thực tế / tốc độ định mức",
          "<strong>Giá_điện</strong> = giá điện trung bình (VN: ~2.500-3.500 VND/kWh tùy bậc)",
        ],
      },
      {
        heading: "Ví dụ 1: Bơm cấp nước 30kW chạy 70% tốc độ",
        paragraphs: [
          "<strong>Đề bài:</strong> Bơm cấp nước 30kW, chạy 24/7 (8.000h/năm), tốc độ thực tế trung bình 70% (35Hz). Giá điện 3.000 VND/kWh.",
          "<strong>Tính tiết kiệm:</strong>",
          "Tiết kiệm = 30 × 8000 × (1 - 0.7³) × 3000 = 30 × 8000 × (1 - 0.343) × 3000",
          "Tiết kiệm = 30 × 8000 × 0.657 × 3000 = <strong>473 triệu VND/năm</strong>",
          "<strong>Chi phí VSD 30kW:</strong> ~25-35 triệu (ABB ACS580, Schneider ATV630).",
          "<strong>ROI = 30 / 473 × 12 = ~0.76 tháng</strong> — cực nhanh (do bơm chạy 70% liên tục).",
        ],
      },
      {
        heading: "Ví dụ 2: Quạt HVAC 75kW chạy 80% tốc độ",
        paragraphs: [
          "<strong>Đề bài:</strong> Quạt HVAC tòa nhà 75kW, chạy 16h/ngày (5.800h/năm), tốc độ trung bình 80% (40Hz). Giá điện 3.000 VND/kWh.",
          "<strong>Tính tiết kiệm:</strong>",
          "Tiết kiệm = 75 × 5800 × (1 - 0.8³) × 3000 = 75 × 5800 × 0.488 × 3000",
          "Tiết kiệm = <strong>636 triệu VND/năm</strong>",
          "<strong>Chi phí VSD 75kW:</strong> ~60-90 triệu (ABB ACS880, Schneider ATV930).",
          "<strong>ROI = 75 / 636 × 12 = ~1.4 tháng</strong> — vẫn cực nhanh.",
        ],
        callout: {
          type: "info",
          title: "Tại sao ROI nhanh như vậy?",
          text: "VSD có ROI nhanh vì (1) bơm/quạt công nghiệp chạy liên tục 6000-8000h/năm, (2) luật N³ cho phép tiết kiệm lớn ngay cả khi giảm tốc ít, (3) giá điện VN đang tăng. Đối với bơm/quạt > 15kW chạy liên tục, VSD gần như LUÔN có ROI < 24 tháng.",
        },
      },
      {
        heading: "Ví dụ 3: Bơm xử lý nước thải 55kW chạy 60% tốc độ",
        paragraphs: [
          "<strong>Đề bài:</strong> Bơm xử lý nước thải 55kW, chạy 24/7 (8.000h/năm), tốc độ trung bình 60% (30Hz) vì lưu lượng nước thải biến thiên. Giá điện 3.200 VND/kWh (bậc sản xuất).",
          "<strong>Tính tiết kiệm:</strong>",
          "Tiết kiệm = 55 × 8000 × (1 - 0.6³) × 3200 = 55 × 8000 × 0.784 × 3200",
          "Tiết kiệm = <strong>1.101 tỷ VND/năm</strong>",
          "<strong>Chi phí VSD 55kW:</strong> ~45-65 triệu.",
          "<strong>ROI = 55 / 1101 × 12 = ~0.6 tháng</strong> — bơm chạy 60% liên tục cho tiết kiệm cực lớn.",
        ],
      },
      {
        heading: "Bảng tổng hợp ROI theo công suất và tốc độ",
        table: {
          headers: ["Motor", "Tốc độ TB", "Tiết kiệm/năm", "Chi phí VSD", "ROI (tháng)"],
          rows: [
            ["15 kW", "70%", "~237 triệu", "~15-20 triệu", "~0.9"],
            ["30 kW", "70%", "~473 triệu", "~25-35 triệu", "~0.8"],
            ["55 kW", "60%", "~1.101 tỷ", "~45-65 triệu", "~0.6"],
            ["75 kW", "80%", "~636 triệu", "~60-90 triệu", "~1.4"],
            ["110 kW", "75%", "~1.28 tỷ", "~90-130 triệu", "~1.1"],
            ["160 kW", "70%", "~2.53 tỷ", "~150-220 triệu", "~0.9"],
          ],
        },
        paragraphs: [
          "<em>Lưu ý: Bảng tính giả định 8.000h/năm, giá điện 3.000 VND/kWh. ROI thực tế phụ thuộc tải thực, số giờ chạy, và giá điện cụ thể.</em>",
        ],
      },
      {
        heading: "3 lưu ý khi lắp VSD trong tủ MCC",
        list: {
          ordered: false,
          items: [
            "<strong>Tản nhiệt tủ:</strong> VSD tỏa nhiệt 2-5% công suất — tủ MCC có VSD cần quạt tản nhiệt + lọc bụi, hoặc đặt VSD riêng tủ có IP54.",
            "<strong>Sóng hài (Harmonic):</strong> VSD tạo sóng hài trên lưới — cần cuộn kháng input (AC reactor) hoặc active filter nếu nhiều VSD. PTC luôn thêm cuộn kháng cho VSD > 22kW.",
            "<strong>Cáp motor:</strong> VSD cần cáp motor đặc biệt (shielded cable) để giảm EMI — cáp thường gây nhiễu thiết bị điện tử xung quanh. Khoảng cách VSD-motor ≤ 50m khuyến nghị.",
          ],
        },
        callout: {
          type: "tip",
          title: "Cần tủ MCC tích hợp VSD cho bơm/quạt?",
          text: "Gửi danh sách motor (công suất, tải, số giờ chạy) qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư sẽ tính ROI, đề xuất VSD phù hợp (ABB/Schneider/Yaskawa), thiết kế tủ MCC có tản nhiệt + cuộn kháng, và gửi báo giá trong 24h.",
        },
      },
    ],
  },
  {
    slug: "bao-gia-tu-dien-cong-nghiep-theo-boq",
    title: "Báo giá tủ điện công nghiệp theo BOQ: Quy trình, thời gian và hồ sơ cần có",
    category: "Báo giá & RFQ",
    readTime: "7 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    quickAnswer: "Báo giá tủ điện công nghiệp theo BOQ gồm 5 bước: (1) nhận bản vẽ SLD + BOQ, (2) rà soát thông số thiếu, (3) bóc tách vật tư, (4) tính toán thanh cái + vỏ tủ, (5) gửi báo giá kèm tiến độ. Thời gian 24-72h tùy quy mô. Cần có: SLD, thông số phụ tải, Icw, cấp IP, Form tủ, yêu cầu hãng thiết bị.",
    summary: [
      "Quy trình 5 bước: nhận hồ sơ → rà soát → bóc tách → tính toán → gửi báo giá, thời gian 24-72h.",
      "Hồ sơ cần có: SLD, phụ tải, Icw, cấp IP, Form tủ, hãng thiết bị chỉ định, mốc giao hàng.",
      "Yếu tố quyết định giá: vật tư đóng cắt 50-65%, thanh cái + vỏ 15-20%, nhân công + test 15-23%.",
    ],
    body: [
      {
        heading: "Quy trình báo giá tủ điện theo BOQ tại PTC",
        paragraphs: [
          "Khi chủ đầu tư hoặc nhà thầu M&E gửi bản vẽ sơ đồ đơn tuyến (SLD) kèm BOQ, PTC thực hiện báo giá theo quy trình 5 bước:",
        ],
        list: {
          ordered: true,
          items: [
            "<strong>Nhận hồ sơ (0-2h):</strong> Tiếp nhận SLD, BOQ, yêu cầu kỹ thuật qua Zalo hoặc email. Kỹ sư xác nhận đủ/thiếu thông tin.",
            "<strong>Rà soát thông số (2-8h):</strong> Kiểm tra dòng định mức, Icw, cấp IP, Form tủ, hãng thiết bị chỉ định. Nếu thiếu, PTC đề xuất giá trị mặc định hoặc hỏi lại.",
            "<strong>Bóc tách vật tư (4-24h):</strong> Bóc tách từng ngăn lộ: ACB, MCCB, contactor, relay, thanh cái đồng, vỏ tủ, phụ kiện. Tính khối lượng vật tư chính xác theo SLD.",
            "<strong>Tính toán thanh cái + vỏ (8-48h):</strong> Tính tiết diện thanh cái theo Icw, chọn vật liệu vỏ (sơn tĩnh điện/Inox), xác định kích thước tủ theo số ngăn + Form.",
            "<strong>Gửi báo giá (24-72h):</strong> Phát hành báo giá chi tiết kèm: bảng bóc tách vật tư, tiến độ sản xuất, hồ sơ kỹ thuật (CO/CQ, Routine Test).",
          ],
        },
      },
      {
        heading: "Hồ sơ cần có để báo giá nhanh và chính xác",
        table: {
          headers: ["Hồ sơ", "Bắt buộc", "Ghi chú"],
          rows: [
            ["Sơ đồ đơn tuyến (SLD)", "Có", "PDF hoặc DWG, thể hiện cấu trúc tủ"],
            ["Danh sách phụ tải (Load Schedule)", "Có", "Dòng định mức từng lộ, công suất motor"],
            ["Dòng ngắn mạch Icw", "Có", "Nếu chưa có, PTC tính theo SCA trạm biến áp"],
            ["Cấp bảo vệ IP", "Có", "IP31/IP41/IP54/IP65 tùy môi trường"],
            ["Form tủ (IEC 61439-3)", "Có", "Form 1/2b/3b/4a/4b"],
            ["Hãng thiết bị chỉ định", "Không", "Nếu không chỉ định, PTC đề xuất 2-3 phương án"],
            ["Mốc giao hàng", "Có", "Để PTC lên kế hoạch sản xuất"],
          ],
        },
        callout: {
          type: "warning",
          title: "Thiếu Icw hoặc Form tủ là nguyên nhân #1 báo giá sai",
          text: "Nhiều nhà thầu gửi SLD nhưng không ghi Icw và Form. PTC phải dùng giá trị mặc định (Icw = 50kA, Form 2b) → báo giá có thể lệch 15-30% so với thực tế. Luôn ghi rõ Icw và Form trong BOQ.",
        },
      },
      {
        heading: "Thời gian báo giá theo quy mô tủ",
        table: {
          headers: ["Quy mô", "Số tủ", "Thời gian báo giá"],
          rows: [
            ["Tủ đơn (MSB hoặc MCC nhỏ)", "1-3 tủ", "24h"],
            ["Hệ tủ MSB + MCC + DB", "4-10 tủ", "48h"],
            ["Dự án nhà máy lớn", "10+ tủ", "72h"],
            ["Tủ solar DC/AC + hòa lưới", "5-20 tủ", "48h"],
          ],
        },
      },
      {
        heading: "Yếu tố quyết định giá tủ điện",
        paragraphs: [
          "Giá tủ điện công nghiệp được cấu thành từ 5 nhóm chi phí. Hiểu rõ giúp bạn so sánh báo giá công bằng giữa các nhà cung cấp:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Vật tư thiết bị đóng cắt (50-65%):</strong> ACB, MCCB, contactor, relay — hãng ABB/Schneider đắt hơn LS/Hyundai 20-40%.",
            "<strong>Thanh cái đồng + vỏ tủ (15-20%):</strong> Tiết diện đồng tính theo Icw, vỏ Inox đắt hơn sơn tĩnh điện 2-3 lần.",
            "<strong>Nhân công lắp ráp + đấu nối (10-15%):</strong> Xưởng có ISO 9001 + Routine Test 100% cao hơn xưởng tự lắp.",
            "<strong>Thử nghiệm + hồ sơ (5-8%):</strong> Routine Test, biên bản test, CO/CQ.",
            "<strong>Vận chuyển + bảo hành (5-10%):</strong> Tùy khoảng cách và điều kiện bảo hành.",
          ],
        },
        callout: {
          type: "tip",
          title: "Gửi BOQ ngay để nhận báo giá trong 24-72h",
          text: "Gửi SLD + BOQ qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư rà soát thông số, bóc tách vật tư và gửi báo giá chi tiết kèm tiến độ sản xuất. Nếu thiếu Icw hoặc Form, PTC sẽ đề xuất giá trị phù hợp theo điều kiện thực tế.",
        },
      },
    ],
  },
  {
    slug: "nha-san-xuat-tu-dien-cong-nghiep-tphcm",
    title: "Nhà sản xuất tủ điện công nghiệp tại TP.HCM: Tiêu chí chọn đúng nhà cung cấp",
    category: "Nhà sản xuất & RFQ",
    readTime: "8 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    quickAnswer: "Nhà sản xuất tủ điện công nghiệp tại TP.HCM cần đáp ứng 6 tiêu chí: (1) xưởng có ISO 9001, (2) thiết kế theo IEC 61439, (3) Routine Test 100% tủ xuất xưởng, (4) CO/CQ thiết bị chính hãng, (5) khả năng bóc tách BOQ + shop drawing, (6) giao hàng cuốn chiếu đúng tiến độ. PTC Switchboard đáp ứng đầy đủ 6 tiêu chí tại xưởng Linh Xuân, TP.HCM.",
    summary: [
      "6 tiêu chí chọn nhà sản xuất: ISO 9001, IEC 61439, Routine Test, CO/CQ, bóc tách BOQ, giao cuốn chiếu.",
      "Xưởng PTC tại Linh Xuân, TP.HCM — sản xuất tủ MSB, MCC, ATS, solar theo IEC 61439.",
      "Lợi thế TP.HCM: gần KCN Bình Dương, Đồng Nai, Long Thành — giao hàng nhanh, hỗ trợ hiện trường kịp.",
    ],
    body: [
      {
        heading: "Vì sao chọn nhà sản xuất tại TP.HCM",
        paragraphs: [
          "TP.HCM là trung tâm công nghiệp phía Nam, tiếp giáp các KCN lớn tại Bình Dương, Đồng Nai, Long Thành. Chọn nhà sản xuất tủ điện tại TP.HCM giúp rút ngắn thời gian giao hàng và hỗ trợ kỹ thuật hiện trường nhanh — đặc biệt quan trọng khi dự án gấp.",
          "Tuy nhiên, không phải xưởng nào cũng đạt tiêu chuẩn sản xuất tủ điện công nghiệp. Nhiều xưởng gia công nhỏ chỉ lắp ráp theo yêu cầu, không có quy trình thử nghiệm, không phát hành hồ sơ nghiệm thu. Dưới đây là 6 tiêu chí cốt lõi để chọn đúng nhà sản xuất.",
        ],
      },
      {
        heading: "6 tiêu chí chọn nhà sản xuất tủ điện công nghiệp",
        list: {
          ordered: true,
          items: [
            "<strong>ISO 9001:</strong> Xưởng có chứng nhận hệ thống quản lý chất lượng ISO 9001. Đảm bảo quy trình sản xuất lặp lại được, không phụ thuộc tay nghề 1 người.",
            "<strong>Thiết kế theo IEC 61439:</strong> Tủ được thiết kế Form, tính thanh cái, chọn thiết bị theo IEC 61439-1/2. Không chỉ lắp thiết bị vào vỏ.",
            "<strong>Routine Test 100%:</strong> Mỗi tủ xuất xưởng qua dielectric test, kiểm tra PE continuity, kiểm tra polarity. Có biên bản test đi kèm.",
            "<strong>CO/CQ thiết bị chính hãng:</strong> ACB, MCCB, contactor có CO/CQ từ nhà sản xuất (Schneider, ABB, LS, Mitsubishi). Không dùng hàng không rõ nguồn gốc.",
            "<strong>Bóc tách BOQ + Shop drawing:</strong> Kỹ sư bóc tách sơ đồ đơn tuyến, phát hành shop drawing 2D/3D cho chủ đầu tư duyệt trước khi sản xuất.",
            "<strong>Giao hàng cuốn chiếu:</strong> Lên kế hoạch sản xuất theo mốc thi công của công trường, giao từng đợt để không chặn tiến độ lắp đặt.",
          ],
        },
      },
      {
        heading: "PTC Switchboard — nhà sản xuất tủ điện tại TP.HCM",
        paragraphs: [
          "PTC Switchboard là nhà sản xuất tủ điện hạ thế và hệ thống thang máng cáp công nghiệp, xưởng tại Linh Xuân, TP.HCM. PTC sản xuất theo IEC 61439, có ISO 9001, Routine Test 100% tủ xuất xưởng.",
          "Các dòng tủ PTC sản xuất:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Tủ MSB</strong> (tủ phân phối tổng): ACB 1600A-6300A, Form 2b/3b/4b, Icw 25-100kA.",
            "<strong>Tủ MCC</strong> (tủ điều khiển động cơ): MCCB + contactor + biến tần VSD, có tản nhiệt riêng.",
            "<strong>Tủ ATS</strong> (chuyển nguồn tự động): DeepSea/ComAp/Deif, chuyển lưới-máy phát.",
            "<strong>Tủ solar DC/AC</strong>: tủ DC combiner IP65, tủ AC phân phối, tủ hòa lưới theo thông số inverter.",
            "<strong>Tủ ngoài trời IP55/IP65</strong>: vỏ Inox 304, chịu môi trường ngoài trời.",
          ],
        },
      },
      {
        heading: "Lợi thế địa lý TP.HCM cho dự án KCN",
        paragraphs: [
          "Xưởng PTC tại Linh Xuân, TP.HCM cách các KCN lớn:",
        ],
        table: {
          headers: ["Khu công nghiệp", "Khoảng cách", "Thời gian di chuyển"],
          rows: [
            ["KCN Sóng Thần, Bình Dương", "~15 km", "~30 phút"],
            ["KCN Đồng An, Bình Dương", "~20 km", "~40 phút"],
            ["KCN Long Bình, Đồng Nai", "~30 km", "~50 phút"],
            ["KCN Long Thành, Đồng Nai", "~45 km", "~1 giờ"],
            ["KCN Phú Mỹ, Bà Rịa", "~80 km", "~1.5 giờ"],
          ],
        },
        callout: {
          type: "info",
          title: "Gần công trường = hỗ trợ nhanh",
          text: "Khi có sự cố hoặc cần thay đổi kỹ thuật tại hiện trường, nhà sản xuất gần có mặt trong 2-4h. Xưởng xa cần 1-2 ngày. Với dự án gấp, đây là yếu tố quyết định.",
        },
      },
      {
        heading: "So sánh nhà sản xuất TP.HCM vs xưởng gia công nhỏ",
        table: {
          headers: ["Tiêu chí", "Nhà sản xuất TP.HCM (PTC)", "Xưởng gia công nhỏ"],
          rows: [
            ["ISO 9001", "Có", "Thường không"],
            ["IEC 61439", "Thiết kế theo chuẩn", "Lắp theo yêu cầu, không tính Icw"],
            ["Routine Test", "100% tủ, có biên bản", "Không hoặc test mẫu"],
            ["CO/CQ thiết bị", "Đầy đủ chính hãng", "Không rõ nguồn gốc"],
            ["Shop drawing", "Phát hành trước sản xuất", "Không"],
            ["Hồ sơ nghiệm thu", "As-built + Routine Test + CO/CQ", "Thiếu"],
            ["Bảo hành", "12-24 tháng, có SLA", "Không rõ ràng"],
          ],
        },
        callout: {
          type: "tip",
          title: "Cần tìm nhà sản xuất tủ điện tại TP.HCM?",
          text: "Gửi SLD hoặc yêu cầu kỹ thuật qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư bóc tách BOQ, phát hành shop drawing và gửi báo giá trong 24-48h. Xưởng tại Linh Xuân, TP.HCM — hỗ trợ hiện trường trong 2-4h cho các KCN lân cận.",
        },
      },
    ],
  },
  {
    slug: "tu-dien-cho-du-an-epc-solar",
    title: "Tủ điện cho dự án EPC điện mặt trời: Yêu cầu kỹ thuật và quy cách tủ DC/AC",
    category: "EPC & Solar",
    readTime: "8 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    quickAnswer: "Tủ điện cho dự án EPC solar gồm 3 loại: tủ DC combiner (IP65, SPD Type 2, fuse per string), tủ AC phân phối (MCCB + đo lường), tủ hòa lưới (ACB + relay bảo vệ 27/59/81 + anti-islanding). Yêu cầu: đúng thông số inverter, cấp bảo vệ ngoài trời, hồ sơ đấu nối EVN. PTC kế thừa kinh nghiệm từ Powertech — đã thực hiện nhiều dự án solar quy mô MWp.",
    summary: [
      "3 loại tủ: DC combiner IP65, AC phân phối, tủ hòa lưới với relay bảo vệ + anti-islanding.",
      "Yêu cầu EPC: đúng thông số inverter, SPD Type 2, fuse per string, hồ sơ đấu nối EVN.",
      "PTC kế thừa kinh nghiệm Powertech — đã thực hiện Phúc Ý 999 kWp, Solarlink 1.250 kWp.",
    ],
    body: [
      {
        heading: "Tủ điện trong hệ thống solar rooftop — 3 loại chính",
        paragraphs: [
          "Hệ thống điện mặt trời áp mái cần 3 loại tủ điện, mỗi loại có yêu cầu kỹ thuật riêng:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Tủ DC combiner:</strong> Gom chuỗi panel (string) trước khi đưa vào inverter. Nằm ngoài trời trên mái → IP65 bắt buộc. Có SPD DC Type 2 chống sét lan truyền, fuse DC per string cô lập sự cố.",
            "<strong>Tủ AC phân phối:</strong> Nhận đầu ra AC từ inverter, phân phối đến tủ hòa lưới. MCCB + đo lường sản lượng. Thường đặt trong phòng kỹ thuật hoặc ngoài trời IP54.",
            "<strong>Tủ hòa lưới:</strong> Điểm đấu nối lên lưới EVN. ACB + relay bảo vệ điện áp/tần số (27/59/81) + anti-islanding. Phải đúng quy định kỹ thuật đấu nối lưới điện phân phối của EVN.",
          ],
        },
      },
      {
        heading: "Yêu cầu kỹ thuật tủ DC combiner cho solar rooftop",
        paragraphs: [
          "Tủ DC combiner là điểm có tỷ lệ sự cố cao nhất trong solar rooftop. Các yêu cầu cốt lõi:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Cấp IP:</strong> IP65 ngoài trời (không dùng IP54 — không đủ chống mưa gió mùa).",
            "<strong>SPD DC Type 2:</strong> Chống sét lan truyền trên tuyến cáp DC. Không có SPD → cháy tủ khi sét.",
            "<strong>Fuse DC per string:</strong> Cô lập sự cố 1 string không ảnh hưởng các string khác.",
            "<strong>Vỏ Inox 304:</strong> Chống UV > 25 năm. Sơn tĩnh điện bị rỉ sau 2-3 năm ngoài trời.",
            "<strong>Điện trở sấy:</strong> Chống đọng sương bên trong tủ khi nhiệt độ thay đổi.",
            "<strong>Điện áp DC:</strong> 1000V hoặc 1500V tùy inverter. Cách điện đúng cấp.",
          ],
        },
        callout: {
          type: "warning",
          title: "Sai lầm phổ biến: dùng tủ IP54 cho solar rooftop",
          text: "Nhiều nhà thầu dùng tủ IP54 để tiết kiệm chi phí → nước vào tủ mùa mưa → chập DC → cháy tủ. Chi phí thay tủ + dừng hệ thống > chênh IP65 ban đầu. Luôn dùng IP65 cho tủ DC ngoài trời.",
        },
      },
      {
        heading: "Yêu cầu tủ hòa lưới — đấu nối EVN",
        paragraphs: [
          "Tủ hòa lưới là điểm giao tiếp với lưới quốc gia, phải đáp ứng quy định kỹ thuật đấu nối lưới điện phân phối của EVN:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Relay bảo vệ 27/59/81:</strong> Kém áp (27), quá áp (59), tần số (81) — ngắt hòa lưới khi lưới bất thường.",
            "<strong>Anti-islanding:</strong> Ngắt hòa lưới khi lưới EVN mất điện, tránh nuôi ngược lưới.",
            "<strong>ACB:</strong> Máy cắt chính, dòng định mức theo công suất inverter tổng.",
            "<strong>Đo lường:</strong> Đồng hồ đo sản lượng điện bán lên lưới (kWh meter).",
            "<strong>Liên động:</strong> ACB hòa lưới liên động với ACB máy phát (nếu có) để không đóng song song.",
          ],
        },
      },
      {
        heading: "Kinh nghiệm thực tế từ dự án Powertech / PTC",
        paragraphs: [
          "Đội ngũ kỹ thuật PTC kế thừa kinh nghiệm từ Powertech — đã thực hiện nhiều dự án EPC solar quy mô MWp:",
        ],
        table: {
          headers: ["Dự án", "Công suất", "Pin", "Inverter", "Năm"],
          rows: [
            ["Phúc Ý – KCN Phú Mỹ 1", "999 kWp", "2.245 tấm Longi 445Wp", "8 × Huawei 100kW", "10/2020"],
            ["Solarlink – Ong Biển", "1.250 kWp", "2.499 tấm Longi 450Wp", "8 × Kehua 125kW", "12/2020"],
            ["Kho DPL – Quận 2", "960 kWp", "—", "—", "—"],
            ["Kho Hải Đức – Quận 2", "960 kWp", "—", "—", "—"],
            ["Xưởng gạch Tuynel 2 – Gia Lai", "1.460 kWp", "—", "—", "—"],
          ],
        },
        callout: {
          type: "info",
          title: "Thông tin dự án",
          text: "Thông tin dự án trên được đối chiếu từ ptcswitchboard.vn — nguồn chính thức của Powertech / PTC. PTC kế thừa đội ngũ kỹ thuật từ Powertech, tiếp tục cung cấp tủ điện solar cho dự án EPC mới.",
        },
      },
      {
        heading: "Quy trình cung cấp tủ điện cho EPC solar",
        list: {
          ordered: true,
          items: [
            "<strong>Nhận thông số inverter + sơ đồ string:</strong> EPC gửi model inverter, số string, công suất từng string, yêu cầu đấu nối EVN.",
            "<strong>Thiết kế tủ DC/AC:</strong> PTC thiết kế tủ DC combiner (số string/input, SPD, fuse), tủ AC, tủ hòa lưới theo thông số inverter.",
            "<strong>Báo giá + tiến độ:</strong> Gửi báo giá chi tiết kèm tiến độ sản xuất. EPC duyệt → PTC sản xuất.",
            "<strong>Sản xuất + Routine Test:</strong> Sản xuất tủ, Routine Test 100% (dielectric, PE continuity, polarity).",
            "<strong>Giao hàng + hồ sơ:</strong> Giao tủ kèm CO/CQ, biên bản Routine Test, bản vẽ As-built. Hỗ trợ đấu nối hiện trường.",
          ],
        },
        callout: {
          type: "tip",
          title: "EPC solar cần tủ DC/AC + tủ hòa lưới?",
          text: "Gửi thông số inverter (model, công suất, số string), sơ đồ string, và yêu cầu đấu nối EVN qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư sẽ thiết kế tủ DC/AC, tính toán bảo vệ, và gửi báo giá trong 24h. PTC kế thừa kinh nghiệm Powertech — đã thực hiện nhiều dự án solar MWp.",
        },
      },
    ],
  },
  {
    slug: "tu-dien-nha-may-fdi-tieu-chuan",
    title: "Tủ điện cho nhà máy FDI: Tiêu chuẩn nghiệm thu và yêu cầu kỹ thuật",
    category: "FDI & Tiêu chuẩn",
    readTime: "8 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    quickAnswer: "Tủ điện cho nhà máy FDI (FDI factory) yêu cầu cao hơn nhà máy nội: (1) thiết bị chỉ định hãng quốc tế (Schneider, ABB, Siemens), (2) Form 3b/4b cho an toàn bảo trì, (3) Routine Test + Type Test theo IEC 61439, (4) hồ sơ đầy đủ tiếng Anh (CO/CQ, test report, As-built), (5) bảo hành 24 tháng. PTC có kinh nghiệm sản xuất tủ cho dự án FDI từ đội ngũ tiền thân Powertech.",
    summary: [
      "5 yêu cầu tủ điện FDI: hãng quốc tế, Form 3b/4b, Routine + Type Test, hồ sơ tiếng Anh, bảo hành 24 tháng.",
      "Khác biệt FDI vs nội: chỉ định hãng, yêu cầu Type Test, shop drawing 3D, nghiệm thu đa giai đoạn.",
      "PTC có kinh nghiệm từ đội ngũ Powertech — đã thực hiện dự án LEGO VSIP 3, LG Electronics 17 MWp.",
    ],
    body: [
      {
        heading: "Nhà máy FDI khác nhà máy nội ở đâu — về tủ điện",
        paragraphs: [
          "Nhà máy FDI (đầu tư nước ngoài) thường có yêu cầu kỹ thuật khắt khe hơn nhà máy nội, vì chủ đầu tư áp dụng tiêu chuẩn công ty toàn cầu. Các yêu cầu khác biệt chính:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>Chỉ định hãng thiết bị:</strong> FDI thường yêu cầu Schneider, ABB, Siemens — không chấp nhận LS, Hyundai. Lý do: tiêu chuẩn toàn cầu, dễ thay thế quốc tế.",
            "<strong>Form tủ cao:</strong> Form 3b hoặc 4b (cách ly hoàn toàn giữa thanh cái, thiết bị, cáp ra) để bảo trì an toàn. Nhà máy nội thường dùng Form 2b.",
            "<strong>Type Test + Routine Test:</strong> FDI yêu cầu Type Test (thử nghiệm kiểu theo IEC 61439-1) ngoài Routine Test. Type Test do phòng thí nghiệm độc lập (KEMA, ASTA, QUATEST 3) thực hiện.",
            "<strong>Hồ sơ tiếng Anh:</strong> CO/CQ, test report, As-built drawing, operation manual — tất cả bằng tiếng Anh.",
            "<strong>Shop drawing 3D:</strong> Chủ đầu tư FDI thường yêu cầu shop drawing 3D (layout tủ, vị trí thiết bị, tuyến cáp) để duyệt trước khi sản xuất.",
          ],
        },
      },
      {
        heading: "5 tiêu chuẩn nghiệm thu tủ điện FDI",
        list: {
          ordered: true,
          items: [
            "<strong>IEC 61439-1/2:</strong> Tủ đạt yêu cầu thiết kế, tính toán thanh cái, chọn thiết bị theo IEC. Có Type Test report.",
            "<strong>Form 3b/4b:</strong> Cách ly hoàn toàn giữa khoang thanh cái, khoang thiết bị, khoang cáp ra. Kỹ sư bảo trì từng ngăn lộ an toàn.",
            "<strong>Routine Test 100%:</strong> Dielectric test, PE continuity, polarity, kiểm tra thao tác cơ khí. Có biên bản test cho từng tủ.",
            "<strong>CO/CQ chính hãng:</strong> Thiết bị đóng cắt (ACB, MCCB, contactor) có CO/CQ từ nhà sản xuất. Không dùng hàng tương đương không rõ nguồn gốc.",
            "<strong>Bảo hành 24 tháng:</strong> FDI thường yêu cầu bảo hành 24 tháng (vs 12 tháng nhà máy nội), có SLA phản hồi + sửa chữa.",
          ],
        },
      },
      {
        heading: "Kinh nghiệm FDI của đội ngũ PTC / Powertech",
        paragraphs: [
          "Đội ngũ kỹ thuật PTC kế thừa kinh nghiệm từ Powertech — đã thực hiện các dự án FDI tiêu chuẩn cao:",
        ],
        table: {
          headers: ["Dự án", "Loại", "Ghi chú"],
          rows: [
            ["LEGO – VSIP 3", "Tủ bảng điện hạ thế", "Nhà máy FDI, tiêu chuẩn quốc tế"],
            ["LG Electronics – 17 MWp", "Tủ điện hạ thế solar", "Chủ đầu tư FDI, nghiệm thu khắt khe"],
          ],
        },
        callout: {
          type: "info",
          title: "Ghi chú về dự án FDI",
          text: "LEGO VSIP 3 và LG Electronics 17 MWp là kinh nghiệm thực hiện của đội ngũ kỹ sư nòng cốt PTC / tiền thân Powertech — không phải dự án chính thức dưới tên PTC. Thông tin được ghi rõ để đảm bảo minh bạch.",
        },
      },
      {
        heading: "Quy trình sản xuất tủ điện cho dự án FDI",
        list: {
          ordered: true,
          items: [
            "<strong>Nhận spec:</strong> Chủ đầu tư FDI gửi specification (thường bằng tiếng Anh) — hãng thiết bị, Form, Icw, IP, yêu cầu test.",
            "<strong>Bóc tách + Shop drawing 3D:</strong> PTC bóc tách BOQ, phát hành shop drawing 3D (layout, vị trí thiết bị, tuyến cáp) để chủ đầu tư duyệt.",
            "<strong>Sản xuất theo spec:</strong> Sản xuất tủ đúng hãng chỉ định, đúng Form, đúng Icw. Mỗi tủ đánh số serial riêng.",
            "<strong>Routine Test + Type Test:</strong> Routine Test 100% tại xưởng. Type Test report từ phòng thí nghiệm độc lập (nếu yêu cầu).",
            "<strong>Hồ sơ tiếng Anh:</strong> Phát hành CO/CQ, test report, As-built drawing, operation manual bằng tiếng Anh.",
            "<strong>Nghiệm thu đa giai đoạn:</strong> FAT (Factory Acceptance Test) tại xưởng trước khi giao, SAT (Site Acceptance Test) tại công trường sau lắp đặt.",
          ],
        },
        callout: {
          type: "tip",
          title: "Cần tủ điện cho nhà máy FDI?",
          text: "Gửi specification (tiếng Anh hoặc tiếng Việt) qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư sẽ bóc tách, phát hành shop drawing 3D, và gửi báo giá theo đúng spec FDI. PTC có kinh nghiệm sản xuất tủ theo tiêu chuẩn quốc tế từ đội ngũ Powertech.",
        },
      },
    ],
  },
  {
    slug: "bao-gia-tu-msb-theo-dong-ngan-mach",
    title: "Báo giá tủ MSB: Cách tính chi phí theo Icw, Form và hãng thiết bị",
    category: "Báo giá & RFQ",
    readTime: "8 phút",
    author: "Mr X.Bach PTC",
    datePublished: "2026-09-10",
    dateModified: "2026-09-10",
    quickAnswer: "Giá tủ MSB phụ thuộc vào 3 yếu tố chính: (1) Icw (dòng ngắn mạch) — Icw 50kA rẻ hơn 100kA 30-50%, (2) Form tủ — Form 4b đắt hơn Form 2b 20-30%, (3) hãng thiết bị — Schneider/ABB đắt hơn LS/Hyundai 20-40%. Bài viết cung cấp bảng giá tham khảo theo Icw + Form + hãng, và quy trình báo giá MSB tại PTC.",
    summary: [
      "3 yếu tố quyết định giá MSB: Icw (50-100kA), Form (2b-4b), hãng thiết bị (Schneider vs LS).",
      "Icw 100kA đắt hơn 50kA 30-50% — thanh cái đồng dày hơn, vỏ tủ lớn hơn.",
      "Form 4b đắt hơn Form 2b 20-30% — thêm vách ngăn cách ly giữa các khoang.",
    ],
    body: [
      {
        heading: "3 yếu tố quyết định giá tủ MSB",
        paragraphs: [
          "Tủ MSB (Main Switchboard — tủ phân phối tổng) là tủ đầu vào nhận điện từ trạm biến áp, phân phối xuống các tủ DB/MCC. Giá tủ MSB biến động lớn tùy 3 yếu tố kỹ thuật:",
        ],
        list: {
          ordered: true,
          items: [
            "<strong>Icw (dòng ngắn mạch):</strong> Dòng ngắn mạch tại thanh cái tủ MSB. Icw 50kA → thanh cái đồng tiết diện vừa. Icw 100kA → thanh cái đồng dày gấp đôi, vỏ tủ lớn hơn, đắt hơn 30-50%.",
            "<strong>Form tủ (IEC 61439-3):</strong> Form 2b (cách ly thanh cái + thiết bị) rẻ nhất. Form 3b (cách ly thêm per lộ) đắt hơn 10-15%. Form 4b (cách lý hoàn toàn + per lộ + cáp ra riêng) đắt nhất, chênh 20-30% so Form 2b.",
            "<strong>Hãng thiết bị:</strong> ACB Schneider/ABB đắt hơn LS/Hyundai 20-40%. MCCB, contactor tương tự. Nếu chủ đầu tư không chỉ định hãng, PTC đề xuất 2-3 phương án để so sánh.",
          ],
        },
      },
      {
        heading: "Bảng giá tham khảo tủ MSB theo Icw + Form",
        paragraphs: [
          "Bảng dưới là mức giá tham khảo cho tủ MSB 1 tủ chính (1600A-2500A), không gồm vận chuyển. Giá thực tế phụ thuộc SLD, hãng chỉ định, số lộ ra:",
        ],
        table: {
          headers: ["Icw", "Form 2b", "Form 3b", "Form 4b"],
          rows: [
            ["25 kA", "45-65 triệu", "50-72 triệu", "55-80 triệu"],
            ["50 kA", "60-85 triệu", "66-93 triệu", "72-102 triệu"],
            ["65 kA", "75-105 triệu", "82-115 triệu", "90-128 triệu"],
            ["100 kA", "95-135 triệu", "105-148 triệu", "115-165 triệu"],
          ],
        },
        callout: {
          type: "info",
          title: "Giá trên là tham khảo",
          text: "Giá thực tế phụ thuộc: số lộ ra, hãng ACB chỉ định, có tủ tụ bù kèm, có đo lường, có relay bảo vệ, vật liệu vỏ (sơn tĩnh điện vs Inox). Liên hệ PTC để nhận báo giá chính xác theo SLD.",
        },
      },
      {
        heading: "Cách tính Icw cho tủ MSB",
        paragraphs: [
          "Icw (dòng ngắn mạch định mức) là dòng ngắn mạch tối đa mà thanh cái tủ MSB chịu được trong 1 giây mà không hư hỏng. Icw tính từ:",
        ],
        list: {
          ordered: false,
          items: [
            "<strong>SCA (Short-Circuit Current) tại trạm biến áp:</strong> Phụ thuộc công suất MBA + impedance. MBA 1000kVA → SCA ~25kA. MBA 2000kVA → SCA ~40kA. 2 MBA song song → SCA có thể vượt 80kA.",
            "<strong>Chọn Icw ≥ SCA × 1.1:</strong> Hệ số an toàn 10%. Ví dụ SCA = 45kA → chọn Icw = 50kA.",
            "<strong>Dải Icw chuẩn:</strong> 25 / 35 / 50 / 65 / 80 / 100 kA. Chọn dải cao hơn gần nhất.",
          ],
        },
        callout: {
          type: "warning",
          title: "Chọn Icw thấp hơn SCA = cháy tủ",
          text: "Nếu Icw < SCA thực tế, khi ngắn mạch xảy ra, thanh cái đồng bị lực điện động lớn → cong vênh → chạm vỏ → cháy tủ. Luôn chọn Icw ≥ SCA × 1.1. PTC tính SCA miễn phí nếu bạn gửi thông số trạm biến áp.",
        },
      },
      {
        heading: "So sánh giá theo hãng thiết bị",
        table: {
          headers: ["Hãng ACB", "Giá tương đối", "Ghi chú"],
          rows: [
            ["Schneider Electric", "100% (chuẩn)", "Phổ biến nhất cho FDI, CO/CQ đầy đủ"],
            ["ABB", "95-105%", "Tương đương Schneider, phổ biến châu Âu"],
            ["Mitsubishi Electric", "90-100%", "Phổ biến cho nhà máy Nhật"],
            ["LS Electric", "70-80%", "Giá tốt, phổ biến nhà máy nội"],
            ["Hyundai Electric", "70-80%", "Tương đương LS, phổ biến Hàn Quốc"],
          ],
        },
        callout: {
          type: "info",
          title: "Không chỉ định hãng? PTC đề xuất 2-3 phương án",
          text: "Nếu chủ đầu tư không chỉ định hãng, PTC gửi 2-3 phương án: (1) Schneider/ABB cho FDI, (2) LS/Hyundai cho nhà máy nội, (3) mix (ACB Schneider + MCCB LS) để cân bằng giá và chất lượng.",
        },
      },
      {
        heading: "Quy trình báo giá tủ MSB tại PTC",
        list: {
          ordered: true,
          items: [
            "<strong>Nhận SLD + thông số:</strong> SLD tủ MSB, dòng định mức, Icw (hoặc thông số trạm biến áp để PTC tính), số lộ ra, hãng chỉ định, Form yêu cầu.",
            "<strong>Tính Icw + chọn thanh cái:</strong> PTC tính SCA nếu chưa có Icw, chọn tiết diện thanh cái đồng theo Icw.",
            "<strong>Bóc tách vật tư:</strong> ACB chính, MCCB per lộ, ammeter/voltmeter, relay, thanh cái, vỏ tủ.",
            "<strong>Gửi báo giá (24-48h):</strong> Báo giá chi tiết kèm: bảng bóc tách, tiến độ sản xuất, hồ sơ kỹ thuật.",
          ],
        },
        callout: {
          type: "tip",
          title: "Cần báo giá tủ MSB?",
          text: "Gửi SLD tủ MSB + thông số (dòng định mức, Icw hoặc thông số trạm biến áp, số lộ, hãng chỉ định) qua Zalo cho Ban Kỹ thuật PTC. Kỹ sư tính Icw, bóc tách vật tư và gửi báo giá chi tiết trong 24-48h.",
        },
      },
    ],
  },
];

