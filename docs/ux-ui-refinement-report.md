# BÁO CÁO TINH CHỈNH TYPOGRAPHY & RESPONSIVE UX — tudienptc.vn
**Senior UX/UI Director Audit & Implementation Summary**

---

## 1. Các vấn đề Typography & Responsive phát hiện trước khi tinh chỉnh

1. **Font Chữ:** Trước đây dùng `Archivo` kết hợp `Inter`, thiếu phong cách kỹ thuật thuần túy của ngành tủ bảng điện công nghiệp; chưa có font monospace chuyên dụng cho mã số, dòng định mức (A/kA/Form) và các tiêu chuẩn IEC.
2. **Typography Scale chưa đồng bộ:** Một số nơi dùng hard-code font size ngẫu nhiên (`text-3xl`, `text-base`), thiếu hệ thống fluid clamp tự thích ứng mượt mà giữa mobile (375px) và màn hình lớn (1440px).
3. **Hierarchy & Độ tương phản:** Chữ phụ ở chế độ dark background (`bg-steel`) có nơi bị mờ; label form hơi nhỏ (<12px) hoặc input trên mobile có nguy cơ kích hoạt auto-zoom của iOS Safari (dưới 16px).
4. **Touch Targets & Bố cục Mobile:** Một số nút bấm và ô chọn trên mobile chưa đạt chuẩn chiều cao tối ưu 48–52px; card bo góc và viền chưa đồng nhất theo chuẩn "Precision Industrial".

---

## 2. Các thay đổi đã thực hiện trực tiếp trên Source Code

### A. Hệ thống Font & Typography Tokens
- Chuyển đổi font heading sang **`IBM Plex Sans`** (400, 500, 600, 700) – tạo cảm giác chính xác, kỹ thuật cơ khí, sản xuất công nghiệp.
- Giữ vững **`Inter`** (400, 500, 600, 700) làm font body/UI chính cho khả năng đọc tối ưu.
- Bổ sung **`IBM Plex Mono`** (400, 500, 600) cho toàn bộ eyebrows, thông số kỹ thuật, cấp bảo vệ IP, dòng Icw, và mã số tiêu chuẩn.
- Tích hợp 10 cấp độ fluid clamp scale (`--text-overline` đến `--text-h1`) và hệ thống spacing 4px grid trong `src/styles.css`.

### B. Tinh chỉnh từng Component chuyên biệt
1. **Header & Navigation (`src/components/site/Header.tsx`):**
   - Chiều cao header 74px trên desktop, 64px trên mobile.
   - Menu desktop: font size 14px, active state thanh gạch chân 2px sắc nét.
   - Menu mobile: item touch target tối thiểu 48px, nút Zalo nổi bật.
2. **Hero Section (`src/routes/index.tsx` & `src/components/site/PageHero.tsx`):**
   - H1 chuẩn cân đối, line-height 1.08, max-width lead 58ch.
   - Primary CTA Zalo (cao 50px) + Secondary CTA báo giá xếp chồng thuận tiện trên mobile.
   - Overlay ảnh nền 50% sâu, tăng tối đa độ tương phản cho text.
3. **Form Tiếp Nhận Dự Án (`src/components/site/LeadForm.tsx`):**
   - Label kỹ thuật 13–14px font-semibold uppercase.
   - Toàn bộ Input và Textarea đặt font-size 16px (ngăn iOS auto-zoom) và chiều cao 48px (`h-12`).
   - Card container bo góc chuẩn 8px với viền thép tinh tế.
4. **Bảng Thông Số Kỹ Thuật (`src/components/site/TechnicalTable.tsx`):**
   - Dữ liệu số hiển thị với font mono tabular-nums, chiều cao hàng 48px thoáng mắt.
   - Bổ sung thanh chỉ báo vuốt ngang rõ ràng cho người dùng mobile.
5. **Footer (`src/components/site/Footer.tsx`):**
   - Tăng cỡ chữ và độ tương phản của toàn bộ liên kết, thông tin nhà máy và hotline.
   - Touch targets đạt chuẩn tiếp cận accessibility.
6. **Thanh Liên Hệ Cố Định Mobile (`src/components/site/StickyContact.tsx`):**
   - Bổ sung padding cho safe-area của iPhone/Android đời mới.

---

## 3. Checklist đã QA trên các Breakpoints

| Breakpoint | Chiều rộng | Kết quả QA |
| :--- | :--- | :--- |
| **iPhone SE / Small Mobile** | 375px | Không tràn ngang, text body 16px dễ đọc, nút bấm >= 48px |
| **iPhone 13/14/15/16** | 390px | Layout thông thoáng, hero CTA xếp dọc cân đối |
| **iPad / Tablet** | 768px | Lưới 2 cột hiển thị đều, menu chuyển đổi mượt |
| **Laptop nhỏ** | 1024px | Bắt đầu hiển thị full desktop navigation, spacing thoáng |
| **Desktop chuẩn** | 1280px | Typography clamp đạt kích thước tối ưu cho mắt đọc |
| **Màn hình lớn / Wide** | 1440px+ | Giới hạn max-width 88rem (1408px), không bị kéo dãn |

---

## 4. Gợi ý 5 bức ảnh chụp thật của Nhà máy / Dự án PTC cần bổ sung để tối đa uy tín

Để nâng tầm cảm xúc "Nhà máy thật – Năng lực thật" cho tổng thầu M&E và chủ đầu tư:

1. **Ảnh Dây chuyền Gia công Cơ khí Vỏ tủ CNC:** Góc chụp rộng thấy máy đột dập CNC, máy chấn Amada/Trumpf và công nhân thao tác với phôi thép tấm dập định hình.
2. **Ảnh Phòng Thử Nghiệm & Kiểm Định Routine Test:** Kỹ sư PTC mặc đồng phục bảo hộ đo kiểm điện áp đánh thủng, đo điện trở cách điện và dán tem QC PASS lên thanh cái/vỏ tủ.
3. **Ảnh Đấu Nối Thanh Cái Đồng (Busbar) Tủ MSB:** Cận cảnh các thanh cái đồng đỏ được bọc co nhiệt theo màu pha, uốn góc 90 độ chuẩn xác và siết ốc có đánh dấu sơn niêm phong mô-men xoắn.
4. **Ảnh Dây Chuyền Sản Xuất Thang Máng Cáp:** Công đoạn chấn gân tăng cứng, đột lỗ thoáng tản nhiệt và các bó thang cáp mạ kẽm nhúng nóng đạt độ dày lớp mạ chuẩn ISO 1461.
5. **Ảnh Nghiệm Thu Tủ Điện Tại Công Trường Dự Án:** Tủ điện MSB hoàn thiện của PTC được đưa vào phòng điện trạm biến áp của một nhà máy FDI lớn, có sự hiện diện của kỹ sư giám sát và ban quản lý dự án.
