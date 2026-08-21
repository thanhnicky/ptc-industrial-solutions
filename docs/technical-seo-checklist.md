# CHECKLIST KIỂM TOÁN TECHNICAL SEO & CORE WEB VITALS
**Website:** https://tudienptc.vn — CÔNG TY CỔ PHẦN TỦ BẢNG ĐIỆN PTC  
**Mục tiêu:** Đạt điểm Core Web Vitals tối ưu (LCP < 2.5s, INP < 200ms, CLS < 0.1), cấu hình Indexing & Crawling sạch 100%.

---

## 1. CẤU HÌNH CÀO DỮ LIỆU & LẬP CHỈ MỤC (CRAWLING & INDEXATION)
- [x] **Canonical URLs:** 100% trang indexable có thẻ `<link rel="canonical" href="https://tudienptc.vn/..." />` tuyệt đối.
- [x] **Robots.txt:** Cấu hình tại `/public/robots.txt` cho phép bot Googlebot, Bingbot, PerplexityBot, GPTBot cào dữ liệu, trỏ đúng `Sitemap: https://tudienptc.vn/sitemap.xml`.
- [x] **Sitemap.xml:** Cấu hình tại `/public/sitemap.xml`, cập nhật đầy đủ 45+ URLs canonical thuộc tất cả các cluster.
- [x] **Noindex:** Không index các tham số lọc tìm kiếm nội bộ không có giá trị hoặc trang preview.
- [x] **Chuyển hướng HTTPS & Non-WWW:** Redirect 301 toàn bộ `http://` và `www.tudienptc.vn` về canonical duy nhất `https://tudienptc.vn`.

---

## 2. HIỆU NĂNG CORE WEB VITALS
- [x] **LCP (Largest Contentful Paint < 2.5s):**
  - Hero image tối ưu kích thước, định dạng WebP/JPG nén chuẩn, không dùng video nền nặng.
  - Preconnect Google Fonts (`fonts.googleapis.com` & `fonts.gstatic.com`).
  - `font-display: swap` trong tải font chữ.
- [x] **INP (Interaction to Next Paint < 200ms):**
  - Tối ưu kích thước bundle JavaScript của Vite.
  - Loại bỏ các script bên thứ 3 không cần thiết, không dùng Google Translate widget làm chậm main thread.
- [x] **CLS (Cumulative Layout Shift < 0.1):**
  - Quy định rõ ràng `width` & `height` cho ảnh logo và các ảnh minh họa sản phẩm.
  - Khung Sticky Bar Zalo/Phone không gây giật layout khi tải trang.

---

## 3. KHẢ NĂNG TRUY CẬP (ACCESSIBILITY & SEMANTICS)
- [x] **Cấu trúc Headings:** Mỗi trang có duy nhất 1 thẻ `<h1>`, các đề mục tiếp theo tuân thủ chặt chẽ `<h2>` -> `<h3>`.
- [x] **Thẻ Alt cho hình ảnh:** 100% hình ảnh có thuộc tính `alt` chứa ngữ cảnh kỹ thuật (VD: "Tủ điện tổng MSB", "Thang máng cáp mạ kẽm nhúng nóng"), không nhồi nhét từ khóa.
- [x] **Accessible Buttons:** Mọi nút bấm, link icon Zalo/Phone đều có `aria-label` rõ ràng.
- [x] **Độ tương phản màu sắc (Color Contrast):** Tuân thủ chuẩn WCAG AA cho văn bản trên nền sáng và nền tối.
- [x] **Responsive Mobile:** Kiểm tra hiển thị hoàn hảo trên các độ phân giải 375px (iPhone SE), 390px (iPhone 14/15), 768px (iPad) và Desktop 1280px+.
