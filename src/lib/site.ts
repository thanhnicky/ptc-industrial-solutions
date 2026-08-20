export const CONTACT = {
  companyVi: "Công ty Cổ phần Tủ bảng điện PTC",
  brand: "PTC SWITCHBOARD",
  slogan: "Chất lượng thật – Tiến độ thật",
  hotline: "0909 363 937",
  hotlineRaw: "0909363937",
  sales: ["0945 678 604", "0979 999 016", "0906 912 707"],
  email: "info@ptcswitchboard.vn",
  zalo: "https://zalo.me/0909363937",
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

export type ProjectTag = "tu-dien" | "thang-mang-cap" | "solar";

export type Project = {
  name: string;
  desc: string;
  image: "solar" | "plant" | "warehouse" | "showroom" | "switchboard" | "cabletray";
  tags: ProjectTag[];
};

export const PROJECTS: Project[] = [
  {
    name: "Nhà máy phân bón Ong Biển",
    desc: "Cung cấp tủ phân phối tổng, tủ điều khiển động cơ, hệ thang máng cáp toàn nhà máy và tủ điện cho hệ điện mặt trời mái nhà 960 kWp.",
    image: "plant",
    tags: ["tu-dien", "thang-mang-cap", "solar"],
  },
  {
    name: "Điện mặt trời mái nhà KCN Phú Mỹ 1 – 1.460 kWp",
    desc: "Tủ DC, tủ AC, tủ hòa lưới và hệ máng cáp mạ kẽm nhúng nóng cho dự án ĐMTMN quy mô 1.460 kWp trong khu công nghiệp.",
    image: "solar",
    tags: ["tu-dien", "solar", "thang-mang-cap"],
  },
  {
    name: "Kho vận DPL",
    desc: "Tủ MSB, tủ DB tầng và hệ khay cáp – máng cáp cho khu kho vận, đáp ứng tiến độ lắp đặt cuốn chiếu theo từng block.",
    image: "warehouse",
    tags: ["tu-dien", "thang-mang-cap"],
  },
  {
    name: "Nhà máy Hải Đức",
    desc: "Thiết kế – sản xuất tủ phân phối chính, tủ tụ bù và tủ điều khiển cho dây chuyền sản xuất, thử nghiệm routine test tại xưởng PTC.",
    image: "switchboard",
    tags: ["tu-dien"],
  },
  {
    name: "Xưởng gạch Tuynel",
    desc: "Tủ điều khiển động cơ, tủ VSD cho hệ băng tải – quạt lò và hệ thang cáp chịu môi trường nhiệt độ cao.",
    image: "cabletray",
    tags: ["tu-dien", "thang-mang-cap"],
  },
  {
    name: "Lexus – showroom & xưởng dịch vụ",
    desc: "Tủ phân phối tổng, tủ DB khu vực và hệ máng cáp sơn tĩnh điện cho showroom và xưởng dịch vụ, yêu cầu cao về thẩm mỹ lắp đặt.",
    image: "showroom",
    tags: ["tu-dien", "thang-mang-cap"],
  },
  {
    name: "Nhà máy LEGO – VSIP 3 (đội ngũ PTC/Powertech)",
    desc: "Cung cấp giải pháp tủ bảng điện cho dự án nhà máy quy mô lớn tại VSIP 3, do đội ngũ kỹ sư nòng cốt của PTC thực hiện.",
    image: "switchboard",
    tags: ["tu-dien"],
  },
  {
    name: "LG Electronics – hệ thống 17 MWp",
    desc: "Tủ điện hạ thế cho hệ thống điện mặt trời 17 MWp, tiêu chuẩn nghiệm thu của chủ đầu tư nước ngoài.",
    image: "solar",
    tags: ["tu-dien", "solar"],
  },
  {
    name: "Nhà máy KCN Sóng Thần – mở rộng dây chuyền",
    desc: "Tủ MSB 4000A, tủ SDB và hệ thang cáp trục chính phục vụ mở rộng dây chuyền, bàn giao theo tiến độ cuốn chiếu.",
    image: "plant",
    tags: ["tu-dien", "thang-mang-cap"],
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
    desc: "Hỗ trợ tổng thầu M&E từ bóc tách kỹ thuật, thiết kế, sản xuất đến lắp đặt tủ điện & thang máng cáp cho dự án nhà máy, KCN, tòa nhà. Bám tiến độ thi công theo từng block.",
  },
  {
    title: "Chủ đầu tư nhà máy & KCN",
    desc: "Giải pháp tủ điện & thang máng cáp trọn gói cho nhà máy mới và dự án mở rộng: một đầu mối chịu trách nhiệm về chất lượng, hồ sơ nghiệm thu và tiến độ bàn giao.",
  },
  {
    title: "EPC solar",
    desc: "Tủ điện cho điện mặt trời mái nhà (tủ DC, tủ AC, tủ tổng, tủ hòa lưới) và hệ thang máng cáp mạ kẽm nhúng nóng cho hệ solar, đáp ứng yêu cầu kỹ thuật và tiến độ EPC.",
  },
];
