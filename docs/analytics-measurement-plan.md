# KẾ HOẠCH ĐO LƯỜNG CHUYỂN ĐỔI (ANALYTICS & CONVERSION MEASUREMENT PLAN)
**Dự án:** https://tudienptc.vn — CÔNG TY CỔ PHẦN TỦ BẢNG ĐIỆN PTC  
**Công cụ:** Google Tag Manager (GTM), Google Analytics 4 (GA4), Google Ads Enhanced Conversions

---

## 1. CẤU HÌNH BIẾN MÔI TRƯỜNG (ENVIRONMENT VARIABLES)
Thêm vào file `.env` khi triển khai production:
```bash
# GA4 & GTM (Không hardcode mã vào source code)
VITE_GA4_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX

# URL Zalo Official Account chính thức của PTC
VITE_ZALO_URL=https://zalo.me/0836977799
```

---

## 2. DANH MỤC SỰ KIỆN DATALAYER (DATALAYER EVENTS SPECIFICATION)

| Tên Sự Kiện (`event`) | Hành Động Kích Hoạt (Trigger) | Tham Số Đi Kèm (Parameters) | Đánh Dấu Conversion (GA4) |
| :--- | :--- | :--- | :--- |
| `zalo_click` | Nhấp vào bất kỳ nút Zalo nào trên website | `cta_location`, `page_path`, `lead_type: 'zalo'`, `source_context` | **KEY CONVERSION (Primary)** |
| `lead_form_start` | Người dùng focus vào ô nhập liệu đầu tiên của Form | `source_context`, `page_path` | Micro Conversion |
| `lead_form_submit` | Người dùng nhấn nút gửi form | `source_context`, `product_category`, `page_path` | Micro Conversion |
| `lead_form_success` | Form gửi thành công vào CSDL | `source_context`, `product_category`, `page_path`, `lead_type: 'form_consultation'` | **KEY CONVERSION (Primary)** |
| `phone_click` | Nhấp vào số Hotline `0836 97 77 99` | `cta_location`, `page_path`, `lead_type: 'phone'` | Secondary Conversion |
| `email_click` | Nhấp vào liên kết `mailto:hi@tudienptc.vn` | `cta_location`, `page_path`, `lead_type: 'email'` | Secondary Conversion |
| `catalog_download` | Nhấp tải Catalogue hoặc nhận hồ sơ năng lực | `cta_location`, `page_path` | Micro Conversion |
| `view_product` | Xem chi tiết 1 trang sản phẩm tủ điện / thang máng cáp | `product_name`, `product_category`, `page_path` | Engagement |
| `scroll_depth` | Cuộn trang đạt mốc 50%, 75%, 90% | `scroll_percent`, `page_type`, `page_path` | Engagement |
| `time_engaged` | Thời gian tương tác chủ động trên trang vượt quá 60 giây | `time_seconds: 60`, `page_type`, `page_path` | Engagement |

---

## 3. HƯỚNG DẪN CẤU HÌNH TRONG GOOGLE TAG MANAGER (GTM)
1. **Tạo Trigger Custom Event:**
   - Event Name: `zalo_click`, `lead_form_success`, `phone_click`.
2. **Tạo GA4 Event Tag:**
   - Configuration Tag: Chọn mã GA4 Measurement ID (`{{GA4_ID}}`).
   - Event Name: `{{Event}}`.
   - Event Parameters: Truyền các biến Data Layer `cta_location`, `page_path`, `product_category`, `lead_type`.
3. **Google Ads Conversion Tag:**
   - Kích hoạt Tag chuyển đổi Google Ads khi nhận sự kiện `zalo_click` và `lead_form_success`.
   - Bật tính năng Enhanced Conversions (chuyển đổi nâng cao) sử dụng email/số điện thoại đã băm (hashed) từ Lead Form.

---

## 4. HƯỚNG DẪN KIỂM TRA DEBUG (GA4 DEBUGVIEW)
1. Cài đặt tiện ích mở rộng **Google Analytics Debugger** trên trình duyệt Chrome.
2. Mở website `https://tudienptc.vn`, bật Debugger ON.
3. Truy cập **Google Analytics 4 > Admin > DebugView**.
4. Thực hiện các thao tác:
   - Nhấn nút "Nhắn Zalo gửi bản vẽ" -> Kiểm tra event `zalo_click` xuất hiện kèm param `cta_location: 'hero'`.
   - Điền và gửi Form tiếp nhận -> Kiểm tra event `lead_form_start`, `lead_form_submit`, `lead_form_success` xuất hiện tuần tự.
   - Cuộn xuống cuối trang -> Kiểm tra event `scroll_depth` với param `scroll_percent: 50, 75, 90`.
