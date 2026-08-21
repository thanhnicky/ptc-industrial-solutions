export const CONTACT = {
  companyVi: "Công ty Cổ phần Tủ bảng điện PTC",
  brand: "PTC SWITCHBOARD",
  slogan: "Chất lượng thật – Tiến độ thật",
  hotline: "0836 97 77 99",
  hotlineRaw: "0836977799",
  sales: ["0945 678 604", "0979 999 016", "0906 912 707"],
  email: "info@ptcswitchboard.vn",
  zalo: "https://zalo.me/0836977799",
  headOffice:
    "3C Nguyễn Văn Quỳ, Khu phố 1, Tổ 11, Phường Phú Thuận, TP. Hồ Chí Minh",
  factory: "Số 15, Đường 15, Khu phố 4, Phường Linh Xuân, TP. Hồ Chí Minh",
  offices: ["Văn phòng Hà Nội", "Văn phòng Đà Nẵng", "Nhà máy & VP kỹ thuật TP.HCM"],
  mapEmbed:
    "https://www.google.com/maps?q=15%20%C4%90%C6%B0%E1%BB%9Dng%2015%20Linh%20Xu%C3%A2n%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%20H%E1%BB%93%20Ch%C3%AD%20Minh&output=embed",
};

export const NAV = [
  { to: "/", label: "Trang chủ" },
  { to: "/tu-dien-cong-nghiep", label: "Tủ điện công nghiệp" },
  { to: "/thang-mang-cap", label: "Thang máng cáp" },
  { to: "/du-an", label: "Dự án" },
  { to: "/nang-luc-san-xuat", label: "Năng lực sản xuất" },
  { to: "/tieu-chuan-chat-luong", label: "Tiêu chuẩn & chất lượng" },
  { to: "/lien-he", label: "Liên hệ" },
] as const;

/** Trust strip ngay dưới hero. */
export const TRUST_STRIP = [
  "Nhà máy 2.700 m² tại TP.HCM",
  "Thiết kế – sản xuất – thử nghiệm",
  "IEC 61439-1 & 2 · ISO 9001:2015",
  "Báo giá kỹ thuật trong 24h làm việc",
  "Trọn gói tủ điện và thang máng cáp từ một nhà cung cấp",
];

/** Khối số liệu năng lực. */
export const STATS = [
  { value: "2.700", unit: "m²", label: "Nhà máy tại Linh Xuân, TP.HCM" },
  { value: "10+", unit: "năm", label: "Nền tảng kinh nghiệm của đội ngũ kỹ sư" },
  { value: "50", unit: "nhân sự", label: "Kỹ sư thiết kế, QC và công nhân lành nghề" },
  { value: "63", unit: "tỉnh thành", label: "Phạm vi giao hàng và hỗ trợ hiện trường" },
];

export const PRODUCT_LINES = [
  {
    to: "/tu-dien-cong-nghiep" as const,
    index: "01",
    kicker: "Tủ bảng điện hạ thế",
    title: "Tủ điện công nghiệp",
    desc: "Đóng tủ theo single-line diagram của dự án: vỏ cơ khí sản xuất tại xưởng PTC, thanh cái đồng tính toán theo dòng định mức và Icw, thiết bị đóng cắt theo đúng chủng loại được duyệt. Mọi tủ đều qua routine test theo IEC 61439-2 và bàn giao kèm hồ sơ để nghiệm thu một lần.",
    items: [
      "Tủ MSB / MDB phân phối tổng đến 6300A",
      "Tủ DB tầng, tủ tụ bù, tủ ATS – chuyển nguồn",
      "Tủ MCC điều khiển động cơ, tủ VSD biến tần",
      "Tủ điện solar: DC combiner, AC, tủ hòa lưới",
    ],
  },
  {
    to: "/thang-mang-cap" as const,
    index: "02",
    kicker: "Hệ dẫn cáp",
    title: "Thang máng cáp",
    desc: "Cán – đột – chấn trên dây chuyền cơ khí PTC theo kích thước đặt riêng của tuyến cáp, xử lý bề mặt theo môi trường lắp đặt và giao kèm đủ phụ kiện. Đi cùng phần tủ điện nên khớp tuyến, khớp BOQ và khớp tiến độ – giảm rủi ro giao diện giữa hai gói thầu.",
    items: [
      "Thang cáp, máng cáp, khay cáp, trunking",
      "Mạ kẽm nhúng nóng / mạ điện phân / inox",
      "Sơn tĩnh điện theo mã màu của dự án",
      "Phụ kiện đồng bộ: co, tê, giảm, nắp, ty treo",
    ],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Gửi bản vẽ, BOQ hoặc yêu cầu kỹ thuật",
    desc: "Qua Zalo hoặc email. Chỉ cần single-line diagram, bảng khối lượng hoặc mô tả sơ bộ – kỹ sư PTC sẽ hỏi lại phần còn thiếu.",
  },
  {
    step: "02",
    title: "Bóc tách và đề xuất cấu hình",
    desc: "Kiểm tra dòng định mức, Icw, IP, chủng loại thiết bị đóng cắt và tuyến cáp; đề xuất phương án tối ưu chi phí mà vẫn đúng tiêu chuẩn.",
  },
  {
    step: "03",
    title: "Báo giá kỹ thuật và tiến độ",
    desc: "Báo giá trong 24h làm việc kèm bản vẽ bố trí, danh mục vật tư và mốc giao hàng theo từng block thi công.",
  },
  {
    step: "04",
    title: "Sản xuất – nghiệm thu – bàn giao",
    desc: "Routine test tại xưởng, mời chủ đầu tư kiểm tra trước khi xuất hàng, bàn giao kèm hồ sơ kỹ thuật và biên bản nghiệm thu.",
  },
];

export const STANDARDS = [
  { code: "IEC 61439-1 & 2", desc: "Tiêu chuẩn thiết kế và thử nghiệm tủ đóng cắt hạ thế." },
  { code: "TCVN 7994-1:2009", desc: "Tương đương IEC 60439-1, áp dụng cho tủ bảng điện." },
  { code: "ISO 9001:2015", desc: "Hệ thống quản lý chất lượng áp dụng toàn nhà máy." },
  { code: "QCVN 16:2023/BXD", desc: "Quy chuẩn kỹ thuật quốc gia về sản phẩm xây dựng." },
  { code: "Routine test", desc: "Thử nghiệm thường xuyên từng tủ trước khi xuất xưởng." },
  { code: "Hồ sơ nghiệm thu", desc: "Bản vẽ hoàn công, CO/CQ, biên bản thử nghiệm đầy đủ." },
];

export type ProjectTag = "tu-dien" | "thang-mang-cap" | "solar";

export type Project = {
  name: string;
  desc: string;
  image: "solar" | "plant" | "warehouse" | "showroom" | "switchboard" | "cabletray";
  tags: ProjectTag[];
  scope?: string;
  client?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Nhà máy phân bón Ong Biển",
    desc: "Cung cấp tủ phân phối tổng, tủ điều khiển động cơ, hệ thang máng cáp toàn nhà máy và tủ điện cho hệ điện mặt trời mái nhà 960 kWp.",
    image: "plant",
    tags: ["tu-dien", "thang-mang-cap", "solar"],
    scope: "Tủ MSB, tủ MCC, thang máng cáp toàn nhà máy, tủ điện ĐMTMN 960 kWp",
    client: "Chủ đầu tư nhà máy sản xuất",
  },
  {
    name: "ĐMTMN KCN Phú Mỹ 1 – 1.460 kWp",
    desc: "Tủ DC, tủ AC, tủ hòa lưới và hệ máng cáp mạ kẽm nhúng nóng cho dự án điện mặt trời mái nhà 1.460 kWp trong khu công nghiệp.",
    image: "solar",
    tags: ["tu-dien", "solar", "thang-mang-cap"],
    scope: "Tủ DC / AC / hòa lưới, máng cáp mạ kẽm nhúng nóng",
    client: "EPC điện mặt trời",
  },
  {
    name: "Kho vận DPL",
    desc: "Tủ MSB, tủ DB tầng và hệ khay cáp – máng cáp cho khu kho vận, đáp ứng tiến độ lắp đặt cuốn chiếu theo từng block.",
    image: "warehouse",
    tags: ["tu-dien", "thang-mang-cap"],
    scope: "Tủ MSB, tủ DB tầng, khay cáp và máng cáp",
    client: "Tổng thầu M&E – dự án kho vận",
  },
  {
    name: "Nhà máy Hải Đức",
    desc: "Thiết kế – sản xuất tủ phân phối chính, tủ tụ bù và tủ điều khiển cho dây chuyền sản xuất, thử nghiệm routine test tại xưởng PTC.",
    image: "switchboard",
    tags: ["tu-dien"],
    scope: "Tủ phân phối chính, tủ tụ bù, tủ điều khiển dây chuyền",
    client: "Chủ đầu tư nhà máy",
  },
  {
    name: "Xưởng gạch Tuynel",
    desc: "Tủ điều khiển động cơ, tủ VSD cho hệ băng tải – quạt lò và hệ thang cáp chịu môi trường nhiệt độ cao.",
    image: "cabletray",
    tags: ["tu-dien", "thang-mang-cap"],
    scope: "Tủ MCC, tủ VSD, thang cáp môi trường nhiệt độ cao",
    client: "Chủ đầu tư sản xuất vật liệu xây dựng",
  },
  {
    name: "Lexus – showroom & xưởng dịch vụ",
    desc: "Tủ phân phối tổng, tủ DB khu vực và hệ máng cáp sơn tĩnh điện cho showroom và xưởng dịch vụ, yêu cầu cao về thẩm mỹ lắp đặt.",
    image: "showroom",
    tags: ["tu-dien", "thang-mang-cap"],
    scope: "Tủ tổng, tủ DB khu vực, máng cáp sơn tĩnh điện",
    client: "Tổng thầu xây dựng thương mại",
  },
  {
    name: "Nhà máy LEGO – VSIP 3",
    desc: "Cung cấp giải pháp tủ bảng điện cho dự án nhà máy quy mô lớn tại VSIP 3, do đội ngũ kỹ sư nòng cốt của PTC thực hiện.",
    image: "switchboard",
    tags: ["tu-dien"],
    scope: "Tủ bảng điện hạ thế cho nhà máy FDI quy mô lớn",
    client: "Đội ngũ kỹ sư nòng cốt PTC / Powertech",
  },
  {
    name: "LG Electronics – hệ thống 17 MWp",
    desc: "Tủ điện hạ thế cho hệ thống điện mặt trời 17 MWp, tiêu chuẩn nghiệm thu của chủ đầu tư nước ngoài.",
    image: "solar",
    tags: ["tu-dien", "solar"],
    scope: "Tủ điện hạ thế cho hệ ĐMT 17 MWp",
    client: "Chủ đầu tư FDI",
  },
  {
    name: "Nhà máy KCN Sóng Thần – mở rộng dây chuyền",
    desc: "Tủ MSB 4000A, tủ SDB và hệ thang cáp trục chính phục vụ mở rộng dây chuyền, bàn giao theo tiến độ cuốn chiếu.",
    image: "plant",
    tags: ["tu-dien", "thang-mang-cap"],
    scope: "Tủ MSB 4000A, tủ SDB, thang cáp trục chính",
    client: "Chủ đầu tư mở rộng nhà máy",
  },
];

export const PROJECT_FILTERS = [
  { value: "all", label: "Tất cả" },
  { value: "tu-dien", label: "Tủ điện" },
  { value: "thang-mang-cap", label: "Thang máng cáp" },
  { value: "solar", label: "Solar" },
] as const;

export const AUDIENCES = [
  {
    title: "Tổng thầu cơ điện (M&E)",
    pain: "Bóc tách BOQ – tiến độ – hồ sơ nghiệm thu",
    desc: "Kỹ sư PTC bóc tách bản vẽ và BOQ cùng đội kỹ thuật của bạn, làm rõ điểm thiếu trước khi báo giá, phát hành shop drawing để duyệt và giao cuốn chiếu theo từng block. Biên bản thử nghiệm, CO/CQ và bản vẽ hoàn công chuẩn bị sẵn để nghiệm thu không phải làm lại.",
  },
  {
    title: "Chủ đầu tư nhà máy & KCN",
    pain: "Chất lượng ổn định – một đầu mối chịu trách nhiệm",
    desc: "Tủ điện và thang máng cáp từ cùng một nhà máy: một hợp đồng, một đầu mối bảo hành, quy cách và chất lượng giống nhau giữa các đợt giao hàng. Hồ sơ vật tư được lưu để tra cứu khi vận hành, sửa chữa hay mở rộng dây chuyền về sau.",
  },
  {
    title: "EPC điện mặt trời",
    pain: "Lắp ngoài trời – phản hồi kỹ thuật nhanh",
    desc: "Tủ DC combiner, tủ AC và tủ hòa lưới đúng thông số inverter, cấp bảo vệ và yêu cầu đấu nối của đơn vị điện lực; máng cáp mạ kẽm nhúng nóng chịu nắng gió trên mái nhà xưởng. Phản hồi kỹ thuật trong ngày và giao hàng bám theo lịch lắp đặt trên mái.",
  },
];

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
