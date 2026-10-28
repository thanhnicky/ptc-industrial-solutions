import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { QuickSummary } from "@/components/site/QuickSummary";
import { ZaloButton, CallButton } from "@/components/site/ZaloButton";
import { LeadSection } from "@/components/site/LeadSection";
import { IMAGES } from "@/components/site/images";
import { OrganizationSchema, FAQSchema, ServiceSchema } from "@/components/seo/JsonLd";
import { RelatedProducts } from "@/components/site/RelatedProducts";
import { RelatedArticles } from "@/components/site/RelatedArticles";

const SOLUTIONS_DATA: Record<
  string,
  {
    title: string;
    h1: string;
    desc: string;
    heroSubtitle: string;
    directAnswer: string;
    bullets: string[];
    painPoints: { pain: string; solution: string }[];
    recommendedProducts: string[];
    faqs: { question: string; answer: string }[];
    cover?: { src: string; og: string; alt: string; caption?: string };
  }
> = {
  "tu-dien-cho-nha-may": {
    title: "Giải pháp Tủ điện hạ thế & Thang máng cáp cho Nhà máy, KCN | PTC",
    h1: "Giải pháp tủ điện và thang máng cáp cho nhà máy sản xuất",
    desc: "Giải pháp trọn gói Tủ MSB, tủ điều khiển MCC, tủ tụ bù và thang máng cáp cho nhà máy công nghiệp. Giúp nhà máy vận hành liên tục, an toàn và kiểm soát chi phí đầu tư.",
    heroSubtitle: "Một đầu mối đồng bộ trọn gói từ trạm biến áp hạ thế đến tủ phân phối máy móc và tuyến thang cáp cho nhà máy.",
    directAnswer: "PTC Switchboard cung cấp giải pháp tủ bảng điện hạ thế và hệ thống dẫn cáp trọn gói cho các nhà máy tại các khu công nghiệp. Thiết kế Form 2b/3b/4b theo chuẩn IEC 61439-1/2 giúp an toàn vận hành, thanh cái đồng tính toán chịu dòng ngắn mạch cao, đồng bộ cùng hệ thang máng cáp mạ kẽm nhúng nóng chịu môi trường công nghiệp.",
    bullets: [
      "Hệ thống tủ điện hoàn chỉnh: MSB trạm điện, MCC động cơ, tủ tụ bù lọc sóng hài và tủ DB phân xưởng.",
      "Thiết kế khoang Form cách ly: Giúp kỹ sư bảo trì từng ngăn lộ an toàn mà không phải ngắt điện toàn bộ nhà máy.",
      "Đồng bộ thang máng cáp: Khớp nối 100% kích thước tủ và tuyến cáp, bàn giao cuốn chiếu theo từng block xưởng.",
      "Hồ sơ nghiệm thu chuẩn mực: Bản vẽ As-built, CO/CQ thiết bị, biên bản Routine Test xuất xưởng.",
    ],
    painPoints: [
      { pain: "Sự cố gián đoạn nguồn làm ngừng dây chuyền sản xuất", solution: "Tủ MSB thiết kế Icw chuẩn, thiết bị đóng cắt chính hãng có tính chọn lọc cao (Selectivity/Discrimination) chỉ ngắt nhánh bị sự cố." },
      { pain: "Bảo trì ngăn lộ phức tạp và nguy hiểm", solution: "Cấu hình Form 2b/3b/4b ngăn cách ly hoàn toàn giữa khoang thanh cái, khoang thiết bị và khoang cáp ra." },
      { pain: "Nhà cung cấp tủ và máng cáp đùn đẩy trách nhiệm", solution: "PTC là một đầu mối chịu trách nhiệm trọn gói cả phần tủ và hệ thống dẫn cáp, đồng bộ mốc bảo hành." },
    ],
    recommendedProducts: ["Tủ điện tổng MSB đến 6300A", "Tủ điều khiển động cơ MCC", "Tủ tụ bù công suất phản kháng", "Thang cáp mạ kẽm nhúng nóng"],
    faqs: [
      { question: "Nhà máy sản xuất liên tục nên chọn Form tủ nào?", answer: "Với các nhà máy sản xuất liên tục, PTC khuyến nghị cấu hình Form 2b hoặc Form 3b/4b để đảm bảo việc kiểm tra, thay thế thiết bị một ngăn lộ không làm gián đoạn các tải quan trọng khác." },
      { question: "PTC có hỗ trợ đo sóng hài và cấu hình tủ tụ bù không?", answer: "Có. Kỹ sư PTC sẽ phân tích tỷ lệ phụ tải phi tuyến (biến tần, UPS) để tư vấn cấu hình cuộn kháng lọc sóng hài (6%, 7%, 14%) phù hợp, bảo vệ an toàn cho tụ bù." },
    ],
  },
  "tu-dien-cho-nha-thau-me": {
    title: "Giải pháp Tủ điện & Thang máng cáp cho Tổng thầu Cơ Điện M&E | PTC",
    h1: "Giải pháp tủ điện và thang máng cáp cho nhà thầu M&E",
    desc: "Hỗ trợ nhà thầu M&E bóc tách BOQ, phát hành Shop drawing 2D/3D nhanh chóng, giao hàng cuốn chiếu đúng mốc tiến độ dự án.",
    heroSubtitle: "Hỗ trợ đội kỹ thuật của bạn từ khâu bóc tách sơ đồ đơn tuyến, shop drawing đến nghiệm thu bàn giao.",
    directAnswer: "PTC là đối tác sản xuất tin cậy của các tổng thầu cơ điện (M&E). Chúng tôi hỗ trợ bóc tách khối lượng từ sơ đồ nguyên lý, phối hợp làm rõ thông số kỹ thuật thiếu, phát hành bản vẽ bố trí Shop Drawing để trình duyệt và cam kết giao hàng cuốn chiếu theo từng giai đoạn thi công tại công trường.",
    bullets: [
      "Hỗ trợ kỹ thuật chuyên sâu: Bóc tách single-line, tối ưu chi phí thanh cái đồng và chọn hãng khí cụ theo spec mời thầu.",
      "Phát hành Shop Drawing nhanh: Bản vẽ Layout 2D/3D chi tiết kích thước tủ, hướng đi cáp vào/ra (Top/Bottom entry).",
      "Giao hàng cuốn chiếu: Khớp từng mốc lắp đặt thực tế của công trường, không chặn tiến độ kéo cáp.",
      "Đầy đủ hồ sơ nghiệm thu: CO/CQ, biên bản Routine Test, chứng chỉ xuất xưởng sẵn sàng phục vụ nghiệm thu với TVGS.",
    ],
    painPoints: [
      { pain: "Bản vẽ thiết kế cơ sở còn thiếu nhiều thông số", solution: "Kỹ sư PTC chủ động rà soát, đề xuất thông số dòng Iđm, Icw và sơ đồ nhị thứ để nhà thầu trình duyệt." },
      { pain: "Tiến độ gấp, trễ hạn giao tủ làm chậm kéo cáp", solution: "Nhà máy ~ 3.000 m² tại TP.HCM với máy CNC tốc độ cao cho phép gia công nhanh và giao từng đợt theo yêu cầu." },
      { pain: "Khó khăn trong khâu nghiệm thu vật tư đầu vào", solution: "Cung cấp hồ sơ chất lượng hoàn chỉnh, hỗ trợ TVGS chứng kiến FAT tại xưởng PTC." },
    ],
    recommendedProducts: ["Tủ điện tổng MSB", "Tủ phân phối SDB / DB", "Máng cáp sơn tĩnh điện", "Khay cáp mạ kẽm nhúng nóng"],
    faqs: [
      { question: "PTC có hỗ trợ phát hành Shop Drawing để trình duyệt không?", answer: "Có. Đội ngũ kỹ sư thiết kế PTC sẽ phát hành bản vẽ bố trí mặt ngoài, mặt trong, sơ đồ nguyên lý và hướng cáp vào/ra chi tiết để nhà thầu nộp TVGS và Chủ đầu tư phê duyệt." },
    ],
  },
  "tu-dien-cho-du-an-solar": {
    title: "Giải pháp Tủ điện Solar & Máng cáp ngoài trời cho EPC Điện mặt trời | PTC",
    h1: "Tủ điện Solar & Hệ máng cáp mạ kẽm nhúng nóng cho dự án Điện mặt trời",
    desc: "Cung cấp Tủ DC Combiner Box 1000V/1500V, Tủ AC phân phối, Tủ hòa lưới trạm biến áp và máng cáp mạ kẽm nhúng nóng chịu bức xạ UV.",
    heroSubtitle: "Thiết kế chuyên biệt theo thông số inverter chuỗi (String Inverter) hoặc inverter tập trung, khớp yêu cầu đấu nối điện lực.",
    directAnswer: "PTC cung cấp hệ thống tủ điện solar trọn gói: Tủ DC Combiner Box cấp bảo vệ IP65 chống sét lan truyền Type 1+2, Tủ AC phân phối và Tủ trạm hòa lưới hạ thế/trung thế; kết hợp máng cáp mạ kẽm nhúng nóng theo tiêu chuẩn ASTM A123 chịu được bức xạ nhiệt và môi trường ẩm mặn trên mái nhà xưởng.",
    bullets: [
      "Tủ DC Combiner Box IP65: Chống nước, chống bụi, tích hợp SPD chống sét DC 1000V/1500V và cầu chì DC chuyên dụng.",
      "Tủ AC & Tủ hòa lưới: Đo đếm đa năng, bảo vệ quá áp/kém áp/tần số (Relay bảo vệ hòa lưới), liên động máy cắt ACB/MCCB.",
      "Máng cáp mạ kẽm nhúng nóng: Chiều dày mạ 65–85 µm, chịu bức xạ UV và gió bão trên mái tôn.",
      "Kinh nghiệm thực tế: Kế thừa kinh nghiệm thực hiện hệ thống solar quy mô lớn (như LG 17 MWp, Phúc Ý – KCN Phú Mỹ 1 999 kWp, Solarlink – Ong Biển 1.250 kWp).",
    ],
    painPoints: [
      { pain: "Vỏ tủ ngoài trời bị đọng nước, rỉ sét sau 1-2 năm", solution: "Vỏ tủ IP65 2 lớp cánh, gioăng đúc PU liền khối, sơn polyester ngoài trời hoặc inox 304." },
      { pain: "Máng cáp trên mái bị gỉ sét do sương muối và nhiệt độ cao", solution: "Mạ kẽm nhúng nóng toàn phần theo chuẩn ASTM A123 đảm bảo tuổi thọ trên 20 năm ngoài trời." },
    ],
    recommendedProducts: ["Tủ điện Solar DC Combiner", "Tủ AC hòa lưới Solar", "Thang cáp mạ kẽm nhúng nóng", "Máng cáp mạ nhúng nóng"],
    faqs: [
      { question: "Tủ điện solar của PTC có đáp ứng tiêu chuẩn đấu nối của EVN không?", answer: "Có. Các tủ điện hòa lưới solar của PTC đều được cấu hình rơ-le bảo vệ điện áp/tần số và hệ thống đo đếm đúng theo quy định kỹ thuật đấu nối lưới điện phân phối của EVN." },
    ],
  },
  "tu-dien-cho-toa-nha": {
    title: "Giải pháp Tủ điện & Máng cáp cho Tòa nhà cao tầng & Bệnh viện | PTC",
    h1: "Hệ thống Tủ điện & Thang máng cáp trục Riser cho Tòa nhà cao tầng",
    desc: "Giải pháp Tủ MSB Form 3b/4b, tủ chuyển nguồn tự động ATS, tủ DB tầng và hệ thang cáp trục Riser tiết kiệm không gian cho tòa nhà và bệnh viện.",
    heroSubtitle: "Duy trì liên tục cấp điện, an toàn phòng cháy và thẩm mỹ cao cho hệ thống cơ điện tòa nhà.",
    directAnswer: "PTC cung cấp hệ thống tủ điện phân phối nhiều cấp (MSB - ATS - DB tầng) và thang cáp trục Riser chuyên biệt cho các tòa nhà văn phòng, chung cư cao cấp, trung tâm thương mại và bệnh viện. Tủ được thiết kế nhỏ gọn để vừa phòng kỹ thuật điện hạn chế.",
    bullets: [
      "Tủ chuyển nguồn tự động ATS: Chuyển đổi lưới – máy phát trong vòng vài giây, đảm bảo phụ tải ưu tiên không mất điện.",
      "Thang cáp trục Riser thẳng đứng: Kết cấu chịu tải trọng cáp treo lớn, bậc thang đột lỗ dễ dàng buộc gá cáp.",
      "Tủ DB tầng & Tủ chiếu sáng: Thẩm mỹ cao, mặt tủ sơn tĩnh điện RAL đồng màu kiến trúc, an toàn thao tác.",
    ],
    painPoints: [
      { pain: "Phòng kỹ thuật điện tòa nhà chật hẹp", solution: "Thiết kế Layout tủ module hóa, tận dụng chiều cao và tối ưu kích thước chiều sâu tủ." },
      { pain: "Yêu cầu an toàn phòng cháy cao", solution: "Sử dụng vật liệu chống cháy, phụ kiện làm kín chống cháy lan giữa các tầng (Fire stop)." },
    ],
    recommendedProducts: ["Tủ điện tổng MSB Form 3b", "Tủ ATS chuyển nguồn tự động", "Tủ DB tầng", "Thang cáp trục Riser"],
    faqs: [
      { question: "Thời gian chuyển mạch của tủ ATS PTC là bao lâu?", answer: "Thời gian chuyển đổi phụ thuộc vào loại khí cụ đóng cắt (ATS khối chuyên dụng hay liên động 2 ACB/MCCB điện khí), thông thường từ vài chục mili-giây đến vài giây theo yêu cầu cài đặt của công trình." },
    ],
  },
  "thang-mang-cap-cho-nha-xuong": {
    title: "Giải pháp Thang máng cáp chuyên dụng cho Nhà xưởng công nghiệp | PTC",
    h1: "Hệ thống Thang máng cáp chịu tải trọng cao cho Nhà xưởng",
    desc: "Sản xuất thang máng cáp, khay cáp mạ kẽm nhúng nóng và sơn tĩnh điện cho hệ thống dây chuyền máy móc và trục cáp nhà xưởng.",
    heroSubtitle: "Chịu tải trọng lớn, chống võng trên nhịp treo dài, đồng bộ trọn gói phụ kiện cho nhà xưởng sản xuất.",
    directAnswer: "PTC cung cấp giải pháp thang máng cáp công nghiệp đa dạng chủng loại (Máng cáp Trunking, Khay cáp Tray, Thang cáp Ladder) được gia công từ thép tấm cán nguội chất lượng cao, chấn gân tăng cứng thành máng giúp chịu tải trọng cáp điện lực nặng mà không bị võng trên nhịp đỡ 2m – 3m.",
    bullets: [
      "Đa dạng bề mặt: Sơn tĩnh điện trong nhà, Mạ kẽm nhúng nóng ngoài trời/khu ăn mòn, Inox 304 xưởng thực phẩm.",
      "Kết cấu tăng cứng: Chấn gờ Z hoặc C giúp thành máng chịu lực uốn vượt trội.",
      "Đầy đủ nắp đậy & phụ kiện: Bảo vệ cáp khỏi bụi bẩn, chuột bọ và va quẹt cơ học.",
    ],
    painPoints: [
      { pain: "Máng cáp bị võng khi đi nhiều tuyến cáp nặng", solution: "Tư vấn chọn độ dày thép (1.5mm - 2.0mm) và chấn gờ gia cường chịu lực theo tải trọng tính toán." },
      { pain: "Thiếu phụ kiện lúc thi công gây dừng tiến độ", solution: "Bóc tách đầy đủ co, tê, giảm, nắp đậy và đệm nối máng từ bản vẽ thiết kế ngay từ đầu." },
    ],
    recommendedProducts: ["Máng cáp (Cable Trunking)", "Khay cáp đục lỗ", "Thang cáp chịu tải", "Phụ kiện thang máng cáp"],
    faqs: [
      { question: "Khoảng cách giá treo thang máng cáp tiêu chuẩn là bao nhiêu?", answer: "Khoảng cách giá treo/quang treo tiêu chuẩn khuyến nghị là từ 1.5m đến 2.0m để đảm bảo độ võng nằm trong giới hạn an toàn kỹ thuật cho phép." },
    ],
  },
  "phoi-hop-tien-do-giao-tu-theo-block": {
    title: "Phối hợp tiến độ giao tủ điện theo block thi công cho Tổng thầu M&E | PTC",
    h1: "Phối hợp tiến độ giao tủ điện theo từng block thi công",
    desc: "Quy trình PTC phối hợp với tổng thầu M&E: lập lịch giao tủ điện và thang máng cáp theo block, tầng, giai đoạn thi công, cập nhật tiến độ sản xuất định kỳ để tránh lệch pha giữa công trường và nhà máy.",
    heroSubtitle: "Tủ về đúng lúc công trường cần, không về sớm chiếm mặt bằng, không về muộn làm chậm đóng điện.",
    directAnswer: "PTC lập lịch sản xuất và giao tủ điện theo đúng trình tự thi công của từng dự án: chia đợt giao theo block, tầng hoặc giai đoạn đóng điện, ưu tiên các tủ nằm trên đường găng (MSB, tủ cấp nguồn tạm, tủ cho khu cần đóng điện sớm). Thời gian sản xuất phụ thuộc quy mô, thiết bị và thời điểm duyệt Shop Drawing của từng dự án, nên PTC xác nhận lịch giao cụ thể sau khi có danh mục tủ và tiến độ tổng của tổng thầu.",
    bullets: [
      "Chia đợt giao theo block/tầng/giai đoạn: Danh mục tủ được nhóm theo trình tự công trường cần, không sản xuất dàn trải.",
      "Ưu tiên tủ trên đường găng: MSB, tủ cấp nguồn thi công, tủ cho khu vực đóng điện thử sớm được lên lịch trước.",
      "Đặt thiết bị dài ngày từ sớm: ACB, MCCB khung lớn, biến tần, thiết bị nhập khẩu được đặt hàng ngay khi chốt cấu hình.",
      "Cập nhật tiến độ sản xuất định kỳ: Tổng thầu nắm trạng thái từng tủ trong danh mục, phát hiện rủi ro chậm từ sớm.",
      "Đồng bộ tủ điện và thang máng cáp: Thang máng cáp có thể giao trước để công trường kéo cáp, tủ giao theo đợt đóng điện.",
    ],
    cover: {
      src: "/images/giai-phap/phoi-hop-tien-do-giao-tu-theo-block.svg",
      og: "/images/giai-phap/phoi-hop-tien-do-giao-tu-theo-block.png",
      alt: "Biểu đồ tiến độ giao tủ điện theo block A, B, C: duyệt Shop Drawing, sản xuất, Routine Test, giao tủ và mốc đóng điện; thang máng cáp giao trước",
      caption: "Lịch giao tủ theo block được lập ngược từ mốc đóng điện của từng khu vực.",
    },
    painPoints: [
      { pain: "Công trường đã kéo cáp xong nhưng tủ điện chưa về, không đấu nối và đóng điện được", solution: "Lịch giao tủ được lập ngược từ mốc đóng điện của từng block, tủ cho block cần đóng điện trước được sản xuất trước." },
      { pain: "Tủ về quá sớm, phòng điện chưa hoàn thiện, phải lưu kho ngoài công trường, dễ ẩm và va đập", solution: "Giao theo đợt khi mặt bằng sẵn sàng. Tủ hoàn thiện có thể lưu tại xưởng PTC cho tới đợt giao." },
      { pain: "Shop Drawing duyệt chậm hoặc thay đổi thiết kế giữa chừng làm vỡ tiến độ", solution: "Tách duyệt Shop Drawing theo đợt, chốt trước các tủ của block đầu. Thay đổi được đánh giá ảnh hưởng tới lịch giao trước khi triển khai." },
      { pain: "Không biết tủ đang ở công đoạn nào, chỉ biết khi đã trễ", solution: "PTC cập nhật trạng thái từng tủ (đặt thiết bị, gia công vỏ, lắp ráp, Routine Test, sẵn sàng giao) cho tổng thầu theo định kỳ." },
    ],
    recommendedProducts: ["Tủ điện tổng MSB", "Tủ phân phối DB / SDB", "Tủ điều khiển MCC", "Thang máng cáp mạ kẽm nhúng nóng"],
    faqs: [
      { question: "Thời gian sản xuất tủ điện của PTC là bao lâu?", answer: "Tùy dự án: phụ thuộc số lượng tủ, dòng định mức, cấu hình Form, thiết bị có sẵn hay phải nhập, và thời điểm duyệt Shop Drawing. PTC xác nhận lịch giao cụ thể cho từng đợt sau khi nhận danh mục tủ và tiến độ tổng của dự án." },
      { question: "PTC có giao tủ theo nhiều đợt cho một dự án không?", answer: "Có. PTC chia đợt giao theo block, tầng hoặc giai đoạn đóng điện theo yêu cầu của tổng thầu, thay vì giao toàn bộ một lần." },
      { question: "Tổng thầu cần cung cấp gì để PTC lập lịch giao tủ?", answer: "Danh mục tủ hoặc SLD/BOQ, tiến độ tổng của dự án với các mốc đóng điện từng block, và đầu mối kỹ thuật để duyệt Shop Drawing. Bạn có thể gửi qua trang Gửi bản vẽ/BOQ." },
    ],
  },
  "gia-cong-theo-ban-ve-va-boq": {
    title: "Gia công Tủ điện & Thang máng cáp theo Bản vẽ và BOQ yêu cầu | PTC",
    h1: "Dịch vụ Gia công Tủ điện & Thang máng cáp theo Bản vẽ & BOQ",
    desc: "Nhận gia công vỏ tủ điện, lắp ráp đấu nối tủ hoàn thiện và sản xuất thang máng cáp theo đúng quy cách thiết kế của từng dự án.",
    heroSubtitle: "Linh hoạt theo mọi yêu cầu bản vẽ đặc thù, kiểm soát chất lượng từ vật tư tôn thép đến kiểm tra xuất xưởng.",
    directAnswer: "PTC Switchboard nhận gia công trọn gói hoặc gia công theo công đoạn: từ gia công vỏ tủ điện cơ khí CNC theo bản vẽ CAD, lắp ráp thanh cái đồng, đấu nối thiết bị theo sơ đồ nguyên lý đến dập chấn thang máng cáp theo bảng BOQ kích thước phi tiêu chuẩn, đáp ứng chính xác mọi yêu cầu của khách hàng.",
    bullets: [
      "Máy móc hiện đại: Cắt laser CNC, đột CNC nhiều đầu, chấn thủy lực tự động kiểm soát góc chấn.",
      "Gia công theo yêu cầu phi tiêu chuẩn: Đáp ứng mọi kích thước vỏ tủ và máng cáp đặc thù theo không gian thực tế.",
      "Bảo hành & Nghiệm thu: Kiểm tra Routine test và bàn giao hồ sơ CO/CQ, biên bản thử nghiệm đầy đủ.",
    ],
    painPoints: [
      { pain: "Không tìm được nhà sản xuất chịu gia công kích thước lẻ phi tiêu chuẩn", solution: "Dây chuyền CNC linh hoạt của PTC dễ dàng lập trình cắt đột theo mọi bản vẽ CAD yêu cầu." },
      { pain: "Lo ngại chất lượng mối hàn và độ đồng đều sơn tĩnh điện", solution: "Hàn robot/TIG chuyên dụng và buồng sơn tĩnh điện công nghiệp sấy nhiệt kiểm soát tự động." },
    ],
    recommendedProducts: ["Gia công vỏ tủ điện CNC", "Sản xuất thang máng cáp theo BOQ", "Gia công thanh cái đồng Busbar", "Sàn thao tác cơ điện"],
    faqs: [
      { question: "PTC có nhận gia công chỉ riêng phần vỏ tủ điện không?", answer: "Có. PTC cung cấp linh hoạt từ vỏ tủ cơ khí sơn tĩnh điện theo bản vẽ cho đến tủ hoàn thiện lắp đặt thiết bị đóng cắt và thử nghiệm trọn gói." },
    ],
  },
};

export const Route = createFileRoute("/giai-phap/$slug")({
  loader: ({ params }: { params: { slug: string } }) => {
    const solution = SOLUTIONS_DATA[params.slug];
    if (!solution) {
      throw notFound();
    }
    return { slug: params.slug, solution };
  },
  head: ({ loaderData }: { loaderData?: { slug: string; solution: (typeof SOLUTIONS_DATA)[string] } }) => {
    const data = loaderData?.solution;
    if (!data) return {};

    return {
      meta: [
        { title: data.title },
        { name: "description", content: data.desc },
        { property: "og:title", content: data.title },
        { property: "og:description", content: data.desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `https://www.tudienptc.vn/giai-phap/${loaderData?.slug}` },
        ...(data.cover
          ? [
              { property: "og:image", content: `https://www.tudienptc.vn${data.cover.og}` },
              { property: "og:image:secure_url", content: `https://www.tudienptc.vn${data.cover.og}` },
              { property: "og:image:type", content: "image/png" },
              { property: "og:image:width", content: "1200" },
              { property: "og:image:height", content: "630" },
              { property: "og:image:alt", content: data.cover.alt },
              { name: "twitter:image", content: `https://www.tudienptc.vn${data.cover.og}` },
              { name: "twitter:image:alt", content: data.cover.alt },
            ]
          : []),
      ],
      links: [{ rel: "canonical", href: `https://www.tudienptc.vn/giai-phap/${loaderData?.slug}` }],
    };
  },
  component: Page,
});

function Page() {
  const { slug, solution } = Route.useLoaderData() as { slug: string; solution: (typeof SOLUTIONS_DATA)[string] };

  return (
    <>
      <OrganizationSchema />
      <ServiceSchema
        name={solution.h1}
        description={solution.heroSubtitle}
        url={`/giai-phap/${slug}`}
        serviceType="Thiết kế, sản xuất và lắp đặt tủ điện công nghiệp"
      />
      <FAQSchema items={solution.faqs} />

      <PageHero
        title={solution.h1}
        subtitle={solution.heroSubtitle}
        image={IMAGES.plant}
      >
        <ZaloButton size="lg" location={`hero-solution-${slug}`} label="Nhắn Zalo tư vấn giải pháp" />
        <CallButton size="lg" location={`hero-solution-${slug}`} variant="outlineLight" />
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl space-y-10">
          <Breadcrumbs
            items={[
              { name: "Giải pháp ứng dụng", item: "/giai-phap/tu-dien-cho-nha-may" },
              { name: solution.h1, item: `/giai-phap/${slug}` },
            ]}
          />

          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {solution.h1}
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              {solution.directAnswer}
            </p>
          </div>

          {solution.cover && (
            <figure className="not-prose overflow-hidden rounded-lg border border-border bg-card">
              <img
                src={solution.cover.src}
                alt={solution.cover.alt}
                width={1200}
                height={630}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
              {solution.cover.caption && (
                <figcaption className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
                  {solution.cover.caption}
                </figcaption>
              )}
            </figure>
          )}

          <QuickSummary
            title="Lợi ích cốt lõi của giải pháp"
            bullets={solution.bullets}
          />

          {/* Vấn đề & Giải pháp */}
          <div>
            <SectionHeading eyebrow="Bài toán thực tế" title="Giải quyết khó khăn cho dự án của bạn" />
            <div className="mt-6 space-y-4">
              {solution.painPoints.map((item, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-card p-5">
                  <h2 className="text-sm font-semibold text-primary">Vấn đề: {item.pain}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <strong>Giải pháp PTC:</strong> {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sản phẩm đề xuất */}
          <div>
            <SectionHeading eyebrow="Danh mục thiết bị" title="Các sản phẩm chủ lực trong giải pháp này" />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {solution.recommendedProducts.map((pName, idx) => (
                <div key={idx} className="flex items-center gap-2.5 rounded-lg border border-border bg-card p-4">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-xs font-semibold text-ink">{pName}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <SectionHeading eyebrow="Hỏi đáp chuyên sâu" title="Câu hỏi thường gặp về giải pháp" />
            <div className="mt-4 space-y-4">
              {solution.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <RelatedProducts currentSlug={slug} />
          <RelatedArticles />
        </div>
      </Section>

      <LeadSection
        title="Nhận tư vấn giải pháp kỹ thuật cho dự án của bạn"
        intro="Gửi bản vẽ hoặc yêu cầu kỹ thuật để kỹ sư PTC khảo sát và đưa ra phương án phù hợp."
        sourcePage={`solution-${slug}`}
      />
    </>
  );
}
