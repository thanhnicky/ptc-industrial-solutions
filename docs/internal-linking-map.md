# BẢN ĐỒ LIÊN KẾT NỘI BỘ (INTERNAL LINKING ARCHITECTURE)
**Website:** https://tudienptc.vn — CÔNG TY CỔ PHẦN TỦ BẢNG ĐIỆN PTC  
**Mục tiêu:** Phân bổ PageRank hợp lý, loại bỏ trang mồ côi (Orphan pages), dẫn dắt người dùng và AI Bots từ kiến thức -> sản phẩm -> trang chuyển đổi (BoFu).

---

## 1. NGUYÊN TẮC LIÊN KẾT NỘI BỘ (INTERNAL LINKING RULES)
1. **Không dùng Anchor Text chung chung:** Tuyệt đối tránh "xem thêm", "tại đây", "click here" đơn thuần. Anchor text phải chứa thực thể hoặc chủ đề ngữ cảnh (VD: "xem thông số kỹ thuật tủ điện tổng MSB", "tiêu chuẩn mạ kẽm nhúng nóng ASTM A123").
2. **Breadcrumbs 100% các trang sâu:** Mọi trang cấp 2, cấp 3 đều có Breadcrumb dẫn ngược về Hub và Trang chủ kèm Schema `BreadcrumbList`.
3. **Mỗi bài viết kiến thức trỏ về ít nhất 2 trang sản phẩm & 1 trang thương mại.**
4. **Mỗi trang sản phẩm liên kết chéo sang các sản phẩm cùng cụm và bài viết hướng dẫn tương ứng.**
5. **Footer & Header kết nối toàn bộ các trụ cột chính:** Header chứa điều hướng chính; Footer chứa liên kết sitemap danh mục và NAP.

---

## 2. MA TRẬN LIÊN KẾT GIỮA CÁC CLUSTERS

```
                   [TRANG CHỦ /]
                  /      |      \
        [HUB TỦ ĐIỆN]    |    [HUB THANG MÁNG CÁP]
        /      |     \   |    /      |      \
   [MSB] [MCC] [SOLAR]   |  [MÁNG] [KHAY] [THANG HDG]
       \       |      /  |    \      |      /
      [GIẢI PHÁP THEO NGÀNH (NHÀ MÁY / M&E / SOLAR)]
               |                 |
     [THƯ VIỆN KIẾN THỨC] <-----> [BÁO GIÁ / GỬI BOQ / ZALO]
```

---

## 3. CHI TIẾT INBOUND / OUTBOUND CHO TỪNG NHÓM TRANG

### A. Tủ điện tổng MSB (`/tu-dien-cong-nghiep/tu-dien-tong-msb`)
- **Inbound Links từ:**
  - Homepage (`/`) -> Hero & Danh mục sản phẩm
  - Hub Tủ điện (`/tu-dien-cong-nghiep`)
  - Giải pháp Nhà máy (`/giai-phap/tu-dien-cho-nha-may`)
  - Giải pháp M&E (`/giai-phap/tu-dien-cho-nha-thau-me`)
  - Bài viết: Cách chọn tủ MSB (`/kien-thuc/cach-chon-tu-dien-msb`)
  - Bài viết: Phân biệt MSB SDB DB (`/kien-thuc/phan-biet-msb-sdb-db`)
- **Outbound Links trỏ tới:**
  - Gửi bản vẽ & BOQ (`/gui-ban-ve-boq`)
  - Báo giá tủ điện công nghiệp (`/bao-gia-tu-dien-cong-nghiep`)
  - Tiêu chuẩn IEC 61439 (`/tieu-chuan-chat-luong`)
  - Tủ phân phối SDB (`/tu-dien-cong-nghiep/tu-phan-phoi-sdb`)

### B. Máng cáp mạ kẽm nhúng nóng (`/thang-mang-cap/mang-cap-ma-kem-nhung-nong`)
- **Inbound Links từ:**
  - Homepage (`/`)
  - Hub Thang máng cáp (`/thang-mang-cap`)
  - Giải pháp Solar (`/giai-phap/tu-dien-cho-du-an-solar`)
  - Giải pháp Nhà xưởng (`/giai-phap/thang-mang-cap-cho-nha-xuong`)
  - Bài viết: Mạ kẽm nhúng nóng vs Điện phân (`/kien-thuc/ma-kem-nhung-nong-va-ma-kem-dien-phan`)
- **Outbound Links trỏ tới:**
  - Báo giá thang máng cáp (`/bao-gia-thang-mang-cap`)
  - Gửi BOQ bóc tách (`/gui-ban-ve-boq`)
  - Thang cáp mạ kẽm nhúng nóng (`/thang-mang-cap/thang-cap-ma-kem-nhung-nong`)

### C. Bài viết kiến thức (`/kien-thuc/*`)
- **Inbound Links từ:**
  - Hub Kiến thức (`/kien-thuc`)
  - Footer
  - Các trang sản phẩm liên quan (Component `RelatedArticles`)
- **Outbound Links trỏ tới:**
  - Trang sản phẩm tương ứng với chủ đề
  - Trang Gửi bản vẽ / Báo giá / Zalo CTA
  - Trang Tiêu chuẩn & Kiểm soát chất lượng (`/tieu-chuan-chat-luong`)
