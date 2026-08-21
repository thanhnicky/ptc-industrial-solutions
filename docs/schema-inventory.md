# DANH MỤC SCHEMA DỮ LIỆU CẤU TRÚC (SCHEMA STRUCTURED DATA INVENTORY)
**Website:** https://tudienptc.vn — CÔNG TY CỔ PHẦN TỦ BẢNG ĐIỆN PTC  
**Chuẩn:** Schema.org JSON-LD (Kiểm duyệt qua Google Rich Results Test & Schema Validator)

---

## 1. NGUYÊN TẮC QUẢN TRỊ SCHEMA
1. **100% Dữ liệu thực:** Không đánh giá sao giả (Fake Review/AggregateRating), không tạo giá bán giả (Fake Offer/Price).
2. **FAQPage Schema:** Chỉ xuất hiện trên các trang có FAQ thực sự hiển thị cho người dùng.
3. **TechArticle / Article:** Gắn kèm tên tác giả ("Ban Kỹ thuật PTC"), người kiểm duyệt ("Kỹ sư Trưởng PTC"), ngày xuất bản và ngày cập nhật mới nhất.
4. **Organization & LocalBusiness:** Đồng nhất NAP (Name, Address, Phone, Website, Email) trên toàn bộ site.

---

## 2. BẢNG PHÂN BỔ SCHEMA THEO TỪNG URL

| URL / Loại Trang | Schema Types Áp Dụng | Các Trường Dữ Liệu Cốt Lõi |
| :--- | :--- | :--- |
| **Trang chủ (`/`)** | `Organization`, `LocalBusiness` (Manufacturer), `WebSite`, `FAQPage` | legalName, alternateName, url, logo, contactPoint, address (KP13 Linh Xuân), geo, standards, sameAs |
| **Giới thiệu (`/gioi-thieu-ptc`)** | `AboutPage`, `Organization`, `LocalBusiness` | name, description, foundingDate, hasCredential (ISO 9001, IEC 61439), address |
| **Quy trình sản xuất (`/quy-trinh-san-xuat-tu-dien`)** | `HowTo` / `TechArticle`, `FAQPage`, `BreadcrumbList` | step (7 bước sản xuất), name, text, image, acceptedAnswer |
| **Tiêu chuẩn & QC (`/tieu-chuan-chat-luong`)** | `WebPage`, `BreadcrumbList`, `FAQPage` | hasCredential (ISO 9001:2015, IEC 61439-1/2, TCVN 7994, QUATEST 3) |
| **Bảo hành (`/bao-hanh-ho-tro-ky-thuat`)** | `ContactPage`, `FAQPage`, `BreadcrumbList` | serviceType (SLA 2h / 24-48h hiện trường), contactPoint |
| **Dự án (`/du-an`)** | `CollectionPage`, `BreadcrumbList` | itemListElement (các dự án tiêu biểu với ghi chú kinh nghiệm đội ngũ) |
| **Liên hệ (`/lien-he`)** | `ContactPage`, `LocalBusiness`, `BreadcrumbList` | telephone (+84836977799), email (hi@tudienptc.vn), address, geo, openingHours |
| **Hub Tủ điện (`/tu-dien-cong-nghiep`)** | `CollectionPage`, `BreadcrumbList`, `FAQPage` | hasPart (danh mục 12 sản phẩm tủ điện hạ thế) |
| **Hub Thang máng cáp (`/thang-mang-cap`)** | `CollectionPage`, `BreadcrumbList`, `FAQPage` | hasPart (danh mục 8 sản phẩm thang máng cáp) |
| **Chi tiết Tủ điện (`/tu-dien-cong-nghiep/$slug`)** | `Product`, `BreadcrumbList`, `FAQPage` | name, description, category, brand, manufacturer, mainEntity (FAQ) |
| **Chi tiết Thang máng cáp (`/thang-mang-cap/$slug`)** | `Product`, `BreadcrumbList`, `FAQPage` | name, description, category, brand, manufacturer, mainEntity (FAQ) |
| **Giải pháp (`/giai-phap/$slug`)** | `Service`, `BreadcrumbList`, `FAQPage` | serviceType, provider, areaServed, description |
| **Commercial Pages (`/gui-ban-ve-boq`, `/bao-gia-*`)** | `WebPage`, `BreadcrumbList` | name, description, potentialAction (CommunicateAction) |
| **Hub Kiến thức (`/kien-thuc`)** | `CollectionPage`, `BreadcrumbList` | hasPart (danh sách bài viết kỹ thuật) |
| **Bài viết kiến thức (`/kien-thuc/$slug`)** | `TechArticle`, `BreadcrumbList`, `FAQPage` | headline, description, author, reviewedBy, datePublished, dateModified, inLanguage |

---

## 3. FILE COMPONENT CODE LIÊN QUAN TRONG SOURCE:
- `@/components/seo/JsonLd.tsx`: Định nghĩa toàn bộ schema generator components.
