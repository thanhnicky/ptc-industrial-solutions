/**
 * BRAND & SITE CONFIGURATION — CÔNG TY CỔ PHẦN TỦ BẢNG ĐIỆN PTC
 * Domain chính thức: https://tudienptc.vn
 */

export const SITE_URL = "https://tudienptc.vn";

export const CONTACT = {
  legalName: "CÔNG TY CỔ PHẦN TỦ BẢNG ĐIỆN PTC",
  companyVi: "Công ty Cổ phần Tủ bảng điện PTC",
  brand: "PTC Switchboard",
  brandShort: "PTC",
  slogan: "Đúng tiêu chuẩn – Đúng tiến độ",
  canonicalDomain: SITE_URL,
  
  // Hotline CSKH (Hotline duy nhất được xác thực)
  hotline: "0836 97 77 99",
  hotlineRaw: "0836977799",
  hotlineDisplay: "0836 97 77 99",
  
  // Email chính thức
  email: "hi@tudienptc.vn",
  
  // Zalo config: Lấy từ env VITE_ZALO_URL hoặc fallback chính thức
  zalo: import.meta.env.VITE_ZALO_URL || "https://zalo.me/0836977799",

  // Địa chỉ nhà máy: Chuẩn hóa theo tài liệu xác minh doanh nghiệp
  // NOTE: Địa chỉ đã xác minh là Khu Phố 13, Phường Linh Xuân, TP.HCM
  factoryAddress: "Số 15, Đường 15, Khu Phố 13, Phường Linh Xuân, TP. Hồ Chí Minh",
  factory: "Số 15, Đường 15, Khu Phố 13, Phường Linh Xuân, TP. Hồ Chí Minh",
  headOffice: "3C Nguyễn Văn Quỳ, Khu phố 1, Tổ 11, Phường Phú Thuận, TP. Hồ Chí Minh",
  
  offices: [
    "Văn phòng TP. Hồ Chí Minh (Trụ sở: 3C Nguyễn Văn Quỳ, P. Phú Thuận)",
    "Nhà máy sản xuất 2.700 m² (Số 15, Đường 15, KP 13, P. Linh Xuân, TP.HCM)",
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
  "Nhà máy hơn 2.700 m² tại TP.HCM",
  "Thiết kế theo IEC 61439 & ISO 9001:2015",
  "Quy trình sản xuất 7 bước khép kín",
  "Đội ngũ kế thừa hơn 10 năm kinh nghiệm",
  "Một đầu mối cho tủ điện & thang máng cáp",
  "Báo giá kỹ thuật nhanh chóng từ chuyên gia PTC",
];

/** Số liệu năng lực xác thực */
export const STATS = [
  { value: "2.700+", unit: "m²", label: "Nhà máy sản xuất khép kín tại Linh Xuân, TP.HCM" },
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

/** Dự án tiêu biểu xác thực */
export const PROJECTS_AUTHENTIC = [
  {
    id: "ong-bien",
    name: "Nhà máy phân bón Ong Biển",
    client: "Chủ đầu tư nhà máy sản xuất",
    scope: "Trọn gói Tủ MSB, tủ điều khiển MCC, toàn bộ hệ thang máng cáp và tủ điện ĐMTMN 960 kWp",
    highlight: "Một đầu mối đồng bộ cả phần tủ và hệ thống dẫn cáp, bàn giao đúng mốc tiến độ thi công nhà máy.",
    tags: ["tu-dien", "thang-mang-cap", "solar"],
  },
  {
    id: "phu-my-1",
    name: "Điện mặt trời mái nhà KCN Phú Mỹ 1 – 1.460 kWp",
    client: "Tổng thầu EPC Solar",
    scope: "Tủ gom chuỗi DC Combiner, Tủ AC phân phối và tủ hòa lưới trung tâm, máng cáp mạ kẽm nhúng nóng",
    highlight: "Sản xuất và giao hàng cuốn chiếu theo từng phân khu mái để không làm gián đoạn tiến độ cẩu panel.",
    tags: ["tu-dien", "solar", "thang-mang-cap"],
  },
  {
    id: "dpl-warehouse",
    name: "Trung tâm Kho vận DPL",
    client: "Tổng thầu Cơ Điện M&E",
    scope: "Tủ phân phối tổng MSB, Tủ DB phân tầng và hệ thống khay cáp – máng cáp trục chính",
    highlight: "Khớp từng mốc giao hàng theo tiến độ lắp đặt cơ điện của tổng thầu.",
    tags: ["tu-dien", "thang-mang-cap"],
  },
  {
    id: "hai-duc",
    name: "Nhà máy Hải Đức",
    client: "Chủ đầu tư nhà máy công nghiệp",
    scope: "Tủ phân phối chính, tủ tụ bù công suất phản kháng và tủ điều khiển dây chuyền sản xuất",
    highlight: "Routine test 100% tại xưởng PTC trước khi xuất hàng, bàn giao trọn bộ hồ sơ nghiệm thu.",
    tags: ["tu-dien"],
  },
  {
    id: "lego-vsip3",
    name: "Dự án Nhà máy LEGO – VSIP 3",
    client: "Nhà thầu xây dựng / FDI",
    scope: "Cung cấp giải pháp tủ bảng điện hạ thế theo tiêu chuẩn quốc tế",
    highlight: "Thực hiện bởi đội ngũ kỹ sư nòng cốt tiền thân Powertech / PTC kế thừa kinh nghiệm dự án FDI tiêu chuẩn cao.",
    tags: ["tu-dien"],
    note: "Kinh nghiệm thực hiện của đội ngũ kỹ sư nòng cốt PTC / tiền thân Powertech.",
  },
  {
    id: "lg-electronics",
    name: "Dự án LG Electronics – Hệ thống 17 MWp",
    client: "Tổng thầu Năng lượng / Chủ đầu tư FDI",
    scope: "Tủ điện hạ thế & tủ đấu nối chuyên dụng cho hệ thống năng lượng 17 MWp",
    highlight: "Đáp ứng tiêu chuẩn nghiệm thu và kiểm định nghiêm ngặt từ chủ đầu tư nước ngoài.",
    tags: ["tu-dien", "solar"],
    note: "Kinh nghiệm thực hiện của đội ngũ kỹ sư nòng cốt PTC / tiền thân Powertech.",
  },
  {
    id: "lexus-saigon",
    name: "Showroom & Xưởng dịch vụ Lexus",
    client: "Tổng thầu xây dựng thương mại",
    scope: "Tủ phân phối tổng, tủ DB khu vực và hệ máng cáp sơn tĩnh điện đồng màu",
    highlight: "Độ thẩm mỹ hoàn thiện cơ khí cao, khớp kích thước kỹ thuật trần hạn chế.",
    tags: ["tu-dien", "thang-mang-cap"],
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
    desc: "Rà soát dòng định mức, Icw, cấp bảo vệ IP, Form tủ, chủng loại thiết bị đóng cắt và tuyến cáp; đề xuất phương án tối ưu chi phí mà vẫn đúng tiêu chuẩn.",
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
    name: "Nhà máy phân bón Ong Biển",
    desc: "Cung cấp trọn gói tủ phân phối tổng, tủ điều khiển động cơ, toàn bộ hệ thang máng cáp nhà máy và tủ điện cho hệ điện mặt trời mái nhà 960 kWp – một đầu mối cho cả phần tủ và phần dẫn cáp.",
    image: "plant",
    tags: ["tu-dien", "thang-mang-cap", "solar"],
    scope: "Tủ MSB, tủ MCC, thang máng cáp toàn nhà máy, tủ điện ĐMTMN 960 kWp",
    client: "Chủ đầu tư nhà máy sản xuất",
  },
  {
    name: "ĐMTMN KCN Phú Mỹ 1 – 1.460 kWp",
    desc: "Tủ DC combiner, tủ AC và tủ hòa lưới đúng cấu hình inverter, kèm máng cáp mạ kẽm nhúng nóng cho môi trường mái nhà xưởng. Giao theo từng phân khu để không chặn tiến độ lắp panel.",
    image: "solar",
    tags: ["tu-dien", "solar", "thang-mang-cap"],
    scope: "Tủ DC / AC / hòa lưới, máng cáp mạ kẽm nhúng nóng",
    client: "EPC điện mặt trời",
  },
  {
    name: "Kho vận DPL",
    desc: "Tủ MSB, tủ DB tầng và hệ khay – máng cáp cho khu kho vận, giao cuốn chiếu theo từng block để bám tiến độ lắp đặt của tổng thầu M&E.",
    image: "warehouse",
    tags: ["tu-dien", "thang-mang-cap"],
    scope: "Tủ MSB, tủ DB tầng, khay cáp và máng cáp",
    client: "Tổng thầu M&E – dự án kho vận",
  },
  {
    name: "Nhà máy Hải Đức",
    desc: "Thiết kế và sản xuất tủ phân phối chính, tủ tụ bù và tủ điều khiển dây chuyền; routine test tại xưởng PTC trước khi xuất hàng, bàn giao kèm hồ sơ nghiệm thu.",
    image: "switchboard",
    tags: ["tu-dien"],
    scope: "Tủ phân phối chính, tủ tụ bù, tủ điều khiển dây chuyền",
    client: "Chủ đầu tư nhà máy",
  },
  {
    name: "Dự án Nhà máy LEGO – VSIP 3",
    desc: "Cung cấp giải pháp tủ bảng điện hạ thế theo tiêu chuẩn quốc tế, do đội ngũ kỹ sư nòng cốt tiền thân Powertech / PTC thực hiện.",
    image: "switchboard",
    tags: ["tu-dien"],
    scope: "Tủ bảng điện hạ thế cho nhà máy FDI quy mô lớn",
    client: "Đội ngũ kỹ sư nòng cốt PTC / tiền thân Powertech",
    note: "Kinh nghiệm thực hiện của đội ngũ kỹ sư nòng cốt PTC / tiền thân Powertech.",
  },
  {
    name: "Dự án LG Electronics – Hệ thống 17 MWp",
    desc: "Tủ điện hạ thế cho hệ thống điện mặt trời 17 MWp, tiêu chuẩn nghiệm thu của chủ đầu tư nước ngoài.",
    image: "solar",
    tags: ["tu-dien", "solar"],
    scope: "Tủ điện hạ thế cho hệ ĐMT 17 MWp",
    client: "Chủ đầu tư FDI",
    note: "Kinh nghiệm thực hiện của đội ngũ kỹ sư nòng cốt PTC / tiền thân Powertech.",
  },
  {
    name: "Lexus – Showroom & Xưởng dịch vụ",
    desc: "Tủ phân phối tổng, tủ DB khu vực và hệ máng cáp sơn tĩnh điện cho showroom và xưởng dịch vụ, yêu cầu cao về thẩm mỹ lắp đặt.",
    image: "showroom",
    tags: ["tu-dien", "thang-mang-cap"],
    scope: "Tủ tổng, tủ DB khu vực, máng cáp sơn tĩnh điện",
    client: "Tổng thầu xây dựng thương mại",
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
    author: "Ban Kỹ thuật PTC",
    reviewer: "Kỹ sư Trưởng PTC",
    datePublished: "2025-01-10",
    dateModified: "2026-02-15",
    quickAnswer: "Tủ điện công nghiệp là cụm thiết bị chứa khí cụ đóng cắt, bảo vệ, đo lường và điều khiển nguồn điện trong môi trường công nghiệp, được thiết kế và thử nghiệm theo tiêu chuẩn IEC 61439-1/2 và TCVN 7994 để đảm bảo an toàn vận hành liên tục cho nhà máy và tòa nhà.",
    summary: [
      "Bao gồm 3 khối chính: Vỏ tủ cơ khí (tôn cán nguội/inox sơn tĩnh điện), Hệ thanh cái đồng (Busbar) và Thiết bị đóng cắt bảo vệ (ACB, MCCB, MCB, Contactor, Relay).",
      "Phân chia theo cấp: Tủ điện tổng MSB -> Tủ phân phối SDB -> Tủ phân phối nhánh DB -> Tủ điều khiển phụ tải MCC/VSD.",
      "Thiết kế bắt buộc tuân theo IEC 61439-1/2 về khả năng chịu ngắn mạch Icw, độ tăng nhiệt và cấp bảo vệ vỏ tủ IP.",
    ],
  },
  {
    slug: "cach-chon-tu-dien-msb",
    title: "Cách chọn tủ điện tổng MSB cho nhà máy: Dòng định mức, Icw và Form tủ",
    category: "Hướng dẫn lựa chọn",
    readTime: "7 phút",
    author: "Ban Kỹ thuật PTC",
    reviewer: "Kỹ sư Trưởng PTC",
    datePublished: "2025-01-15",
    dateModified: "2026-02-18",
    quickAnswer: "Để chọn tủ điện MSB đúng cho nhà máy, kỹ sư cần xác định: công suất trạm biến áp (kVA) để tính dòng định mức tổng (A), dòng cắt ngắn mạch trạm (kA) để tính dòng ngắn mạch chịu đựng Icw của thanh cái, và cấp cách ly Form (Form 1 đến 4b) phù hợp với mức độ an toàn liên tục của nhà máy.",
    summary: [
      "Dòng định mức tủ MSB: Tính toán theo công suất máy biến áp (VD: Trạm 1600kVA -> Chọn MSB dòng 2500A; Trạm 2500kVA -> Chọn MSB dòng 4000A).",
      "Dòng ngắn mạch Icw: Thanh cái đồng phải chịu được dòng ngắn mạch trong 1s hoặc 3s mà không bị biến dạng cơ học hoặc phá hủy nhiệt.",
      "Lựa chọn Form tủ: Form 2b hoặc Form 3b/4b là khuyến nghị tiêu chuẩn cho các nhà máy sản xuất liên tục để an toàn khi thao tác bảo trì ngăn lộ.",
    ],
  },
  {
    slug: "tieu-chuan-iec-61439-la-gi",
    title: "Tiêu chuẩn IEC 61439 trong sản xuất tủ điện hạ thế: Type Test & Routine Test",
    category: "Tiêu chuẩn & QC",
    readTime: "8 phút",
    author: "Ban Kỹ thuật PTC",
    reviewer: "Kỹ sư Trưởng PTC",
    datePublished: "2025-01-20",
    dateModified: "2026-02-20",
    quickAnswer: "IEC 61439 là tiêu chuẩn quốc tế áp dụng cho cụm đóng cắt và điều khiển hạ thế (thay thế chuẩn cũ IEC 60439). Tiêu chuẩn quy định nghiêm ngặt trách nhiệm của Nhà sản xuất thiết kế gốc (Original Manufacturer) qua Type Test và Nhà sản xuất lắp ráp tủ (Assembly Manufacturer như PTC) qua 100% Routine Test trước khi xuất xưởng.",
    summary: [
      "Phân biệt IEC 61439-1 (Quy tắc chung) và IEC 61439-2 (Tủ phân phối và điều khiển công nghiệp).",
      "Routine Test bắt buộc 100% từng tủ: Kiểm tra liên tục mạch bảo vệ, đo cách điện (Insulation resistance), thử nghiệm điện áp xoay chiều chịu áp (Dielectric test) và kiểm tra chức năng đóng cắt.",
      "Hồ sơ nghiệm thu: Tủ xuất xưởng tại PTC luôn đi kèm Biên bản Routine Test và phiếu xuất xưởng chuẩn ISO 9001:2015.",
    ],
  },
  {
    slug: "phan-biet-msb-sdb-db",
    title: "Phân biệt tủ điện MSB, SDB và DB trong hệ thống phân phối điện tòa nhà và nhà máy",
    category: "Kiến thức kỹ thuật",
    readTime: "5 phút",
    author: "Ban Kỹ thuật PTC",
    reviewer: "Kỹ sư Trưởng PTC",
    datePublished: "2025-02-01",
    dateModified: "2026-02-20",
    quickAnswer: "MSB (Main Switchboard) là tủ điện tổng nhận nguồn trực tiếp từ máy biến áp hoặc máy phát; SDB (Sub-Distribution Board) là tủ phân phối khu vực trung gian nhận nguồn từ MSB; DB (Distribution Board) là tủ phân phối tầng/nhánh cấp trực tiếp đến thiết bị tiêu thụ cuối như chiếu sáng, ổ cắm và máy móc.",
    summary: [
      "MSB: Dòng lớn (800A – 6300A), chứa ACB, tụ bù, ATS, thường đặt tại phòng trạm điện tầng hầm/nhà điện riêng.",
      "SDB: Dòng trung bình (250A – 2500A), chứa MCCB tổng và các nhánh phân phối, đặt tại phòng kỹ thuật phân xưởng hoặc tầng lửng.",
      "DB: Dòng nhỏ (32A – 630A), chứa MCCB/MCB, chống giật RCCB, đặt trực tiếp tại các khu vực làm việc, tầng văn phòng.",
    ],
  },
  {
    slug: "tu-mcc-la-gi",
    title: "Tủ MCC là gì? Các phương pháp khởi động động cơ trong tủ điều khiển MCC",
    category: "Tủ điều khiển",
    readTime: "6 phút",
    author: "Ban Kỹ thuật PTC",
    reviewer: "Kỹ sư Trưởng PTC",
    datePublished: "2025-02-05",
    dateModified: "2026-02-21",
    quickAnswer: "Tủ MCC (Motor Control Center) là tủ trung tâm chuyên dụng điều khiển, giám sát và bảo vệ các động cơ điện trong nhà máy. Tủ tích hợp các thiết bị đóng cắt, khởi động từ, rơ-le nhiệt, khởi động mềm (Soft Starter) hoặc biến tần (VSD) theo từng ngăn riêng biệt.",
    summary: [
      "Khởi động trực tiếp (DOL): Đơn giản, chi phí thấp, dùng cho motor công suất nhỏ (< 7.5kW).",
      "Khởi động Sao – Tam giác (Star-Delta): Giảm dòng khởi động xuống 1/3, dùng cho motor tải vừa (7.5kW – 45kW).",
      "Khởi động mềm (Soft Starter) & Biến tần (VSD): Điều khiển trơn tru, triệt tiêu sụt áp lưới và sốc cơ khí, dùng cho tải nặng, bơm quạt công suất lớn.",
    ],
  },
  {
    slug: "tu-hoa-dong-bo-la-gi",
    title: "Tủ hòa đồng bộ là gì? Nguyên lý và điều kiện hòa đồng bộ máy phát điện",
    category: "Hệ thống nguồn",
    readTime: "6 phút",
    author: "Ban Kỹ thuật PTC",
    reviewer: "Kỹ sư Trưởng PTC",
    datePublished: "2025-02-08",
    dateModified: "2026-02-21",
    quickAnswer: "Tủ hòa đồng bộ là hệ thống tủ điện tự động điều khiển việc ghép nối song song nhiều tổ máy phát điện với nhau (hoặc hòa máy phát với lưới điện) khi cần tăng công suất cấp nguồn dự phòng và tự động chia sẻ tải theo tỷ lệ công suất của từng máy.",
    summary: [
      "4 điều kiện bắt buộc để đóng hòa: Cùng điện áp, cùng tần số, cùng góc pha và cùng thứ tự pha.",
      "Bộ điều khiển hòa tự động (DeepSea, ComAp, Deif) liên tục đo lường và phát tín hiệu chỉnh ga/kích từ trước khi phát lệnh đóng máy cắt ACB.",
      "Lợi ích: Tiết kiệm nhiên liệu khi non tải (tự động ngắt bớt tổ máy), đảm bảo cấp điện liên tục 100% không gián đoạn.",
    ],
  },
  {
    slug: "tu-dien-ngoai-troi-ip55-ip65",
    title: "Tủ điện ngoài trời: Tiêu chuẩn cấp bảo vệ IP55, IP65 và giải pháp chống đọng sương",
    category: "Vỏ tủ cơ khí",
    readTime: "5 phút",
    author: "Ban Kỹ thuật PTC",
    reviewer: "Kỹ sư Trưởng PTC",
    datePublished: "2025-02-10",
    dateModified: "2026-02-21",
    quickAnswer: "Tủ điện ngoài trời đòi hỏi cấp bảo vệ tối thiểu IP55 (chống bụi hạn chế thâm nhập và chống vòi phun nước áp lực) hoặc IP65 (chống bụi hoàn toàn và chống tia nước mạnh). Thiết kế của PTC trang bị vỏ 2 lớp cánh, mái dốc thoát nước, gioăng đúc PU và điện trở sấy nhiệt tự động chống đọng sương ẩm bên trong.",
    summary: [
      "Ý nghĩa IP55 vs IP65: Chữ số đầu (5-6) là cấp chống bụi/vật rắn; Chữ số sau (5) là cấp chống nước.",
      "Vật liệu chế tạo: Tôn thép cán nguội sơn tĩnh điện ngoài trời dòng polyester chịu tia UV, hoặc Inox 304/316 cho môi trường biển.",
      "Phụ kiện quan trọng: Khe thông gió ziczac có lưới lọc bụi, điện trở sấy điều khiển bằng Hygrostat / Thermostat.",
    ],
  },
  {
    slug: "thang-mang-cap-la-gi",
    title: "Thang máng cáp là gì? Tổng quan hệ thống dẫn cáp cơ điện M&E công nghiệp",
    category: "Thang máng cáp",
    readTime: "6 phút",
    author: "Ban Kỹ thuật PTC",
    reviewer: "Kỹ sư Trưởng PTC",
    datePublished: "2025-02-12",
    dateModified: "2026-02-21",
    quickAnswer: "Thang máng cáp (Cable Management System) là kết cấu cơ khí dùng để đỡ, định hình và bảo vệ các tuyến dây cáp điện lực, cáp điều khiển và cáp viễn thông trong các tòa nhà, nhà máy công nghiệp và trạm điện.",
    summary: [
      "Bao gồm 3 dòng chính: Máng cáp (Trunking), Khay cáp (Tray) và Thang cáp (Ladder).",
      "Lợi ích so với luồn ống: Dễ dàng mở rộng, kiểm tra nhiệt độ cáp, tiết kiệm 40% thời gian thi công kéo cáp.",
      "Phụ kiện đồng bộ: Co, tê, giảm, nắp đậy, thanh treo gá đỡ giúp tuyến cáp đi linh hoạt theo kiến trúc công trình.",
    ],
  },
  {
    slug: "phan-biet-thang-cap-khay-cap-mang-cap",
    title: "So sánh thang cáp, khay cáp và máng cáp: Khi nào nên chọn loại nào?",
    category: "Hướng dẫn lựa chọn",
    readTime: "6 phút",
    author: "Ban Kỹ thuật PTC",
    reviewer: "Kỹ sư Trưởng PTC",
    datePublished: "2025-02-15",
    dateModified: "2026-02-21",
    quickAnswer: "Chọn Thang cáp (Ladder) cho tuyến cáp điện lực nặng cần thoát nhiệt tối đa; Chọn Khay cáp (Tray) cho tuyến cáp phân phối vừa tản nhiệt vừa cần cố định cáp; Chọn Máng cáp (Trunking) khi cần bảo vệ kín 100% chống bụi bẩn, côn trùng và yêu cầu thẩm mỹ cao.",
    summary: [
      "Thang cáp: Rỗng đáy, thanh bậc thang đỡ cáp, tải trọng lớn nhất, tản nhiệt tốt nhất, giá thành/kg tối ưu.",
      "Khay cáp: Đáy đục lỗ ô van thông gió, thích hợp cho cáp có đường kính trung bình và nhỏ.",
      "Máng cáp: Đáy kín liền khối, có nắp đậy, chống chuột cắn và chống nước nhỏ giọt từ trên trần.",
    ],
  },
  {
    slug: "ma-kem-nhung-nong-va-ma-kem-dien-phan",
    title: "Phân biệt mạ kẽm nhúng nóng và mạ kẽm điện phân cho thang máng cáp nhà xưởng",
    category: "Vật liệu & Xử lý bề mặt",
    readTime: "6 phút",
    author: "Ban Kỹ thuật PTC",
    reviewer: "Kỹ sư Trưởng PTC",
    datePublished: "2025-02-18",
    dateModified: "2026-02-21",
    quickAnswer: "Mạ kẽm nhúng nóng (Hot-dip Galvanizing) phủ lớp kẽm dày 65–85 µm bằng cách nhúng trực tiếp vào bể kẽm nóng chảy 450°C, cho độ bền ngoài trời và môi trường ăn mòn trên 20–30 năm; trong khi Mạ kẽm điện phân chỉ phủ lớp mạ mỏng 8–15 µm, chỉ thích hợp cho môi trường trong nhà khô ráo.",
    summary: [
      "Độ dày lớp mạ: Nhúng nóng (65-85 µm) so với Điện phân (8-15 µm).",
      "Tiêu chuẩn áp dụng: ASTM A123 / ISO 1461 cho mạ kẽm nhúng nóng; TCVN 5408.",
      "Ứng dụng: Máng mạ kẽm nhúng nóng là bắt buộc cho hệ điện mặt trời mái nhà xưởng, khu vực ven biển, trạm xử lý nước thải và nhà máy hóa chất.",
    ],
  },
  {
    slug: "ho-so-can-co-de-bao-gia-tu-dien",
    title: "Hồ sơ và thông số cần chuẩn bị để nhận báo giá kỹ thuật tủ điện công nghiệp nhanh nhất",
    category: "Quy trình B2B",
    readTime: "5 phút",
    author: "Ban Kỹ thuật PTC",
    reviewer: "Kỹ sư Trưởng PTC",
    datePublished: "2025-02-20",
    dateModified: "2026-02-21",
    quickAnswer: "Để nhận báo giá kỹ thuật chính xác và nhanh chóng từ PTC, quý khách hàng/nhà thầu chỉ cần gửi: Sơ đồ nguyên lý đơn tuyến (Single-line diagram), Bảng tiên lượng khối lượng (BOQ), Chỉ định hãng thiết bị đóng cắt yêu cầu (nếu có), Cấp Form tủ / cấp IP và mốc tiến độ giao hàng mong muốn.",
    summary: [
      "1. Sơ đồ đơn tuyến: Rõ dòng định mức máy cắt chính, dòng các nhánh ra, cấu hình tụ bù.",
      "2. Bảng BOQ vật tư: Số lượng tủ, quy cách thang máng cáp (rộng x cao x dày x lớp hoàn thiện).",
      "3. Nhãn hiệu khí cụ chỉ định: Schneider, ABB, Mitsubishi, LS, Socomec, Hyundai...",
      "4. Kỹ sư PTC sẽ chủ động liên hệ làm rõ các thông số còn thiếu trước khi gửi báo giá bóc tách chi tiết.",
    ],
  },
  {
    slug: "luu-y-nghiem-thu-tu-dien-ha-the",
    title: "Checklist 10 lưu ý quan trọng khi nghiệm thu lắp đặt tủ điện hạ thế tại công trường",
    category: "Nghiệm thu & Vận hành",
    readTime: "7 phút",
    author: "Ban Kỹ thuật PTC",
    reviewer: "Kỹ sư Trưởng PTC",
    datePublished: "2025-02-21",
    dateModified: "2026-02-21",
    quickAnswer: "Khi nghiệm thu tủ điện hạ thế tại công trường, cần kiểm tra: đối chiếu bản vẽ hoàn công, kiểm tra siết lực bu-lông thanh cái bằng cờ lê lực (torque wrench), đo điện trở cách điện pha-pha và pha-vỏ (>= 1MΩ), kiểm tra liên tục tiếp địa PE, thử nghiệm tác động trip của rơ-le và kiểm tra hệ thống khóa liên động interlock an toàn.",
    summary: [
      "Kiểm tra ngoại quan: Sơn không trầy xước, nhãn tên tủ, biển cảnh báo nguy hiểm điện giật đầy đủ.",
      "Kiểm tra cơ khí: Cánh tủ đóng mở êm, khóa tủ chắc chắn, gioăng cao su áp sát kín khít.",
      "Hồ sơ nghiệm thu bàn giao: Bản vẽ As-built, biên bản thử nghiệm Routine Test xưởng, chứng chỉ CO/CQ thiết bị.",
    ],
  },
];

