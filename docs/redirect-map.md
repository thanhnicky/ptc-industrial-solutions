# BẢN ĐỒ CHUYỂN HƯỚNG 301 (301 REDIRECT & MIGRATION MAP)
**Dự án:** https://tudienptc.vn  
**Mục tiêu:** Chuyển hướng toàn bộ traffic và link equity từ domain cũ/preview (Lovable) và các URL sai cấu trúc về URL chuẩn.

---

## 1. QUY TẮC CHUYỂN HƯỚNG MÔI TRƯỜNG HOSTING (CLOUDFLARE / NGINX / NETLIFY)

```nginx
# 1. Chuyển hướng HTTP sang HTTPS
server {
    listen 80;
    server_name tudienptc.vn www.tudienptc.vn;
    return 301 https://tudienptc.vn$request_uri;
}

# 2. Chuyển hướng www sang non-www (Canonical)
server {
    listen 443 ssl http2;
    server_name www.tudienptc.vn;
    return 301 https://tudienptc.vn$request_uri;
}
```

---

## 2. MA TRẬN CHUYỂN HƯỚNG TỪ TÊN MIỀN PREVIEW HOẶC URL CŨ

| URL Nguồn (Cũ / Preview) | URL Đích Canonical (301 Permanent) | Mục Đích |
| :--- | :--- | :--- |
| `https://ptc-industrial-solutions.lovable.app/*` | `https://tudienptc.vn/$1` | Chuyển toàn bộ traffic preview về domain chính thức |
| `https://tudienptc.vn/home` | `https://tudienptc.vn/` | Chuẩn hóa trang chủ |
| `https://tudienptc.vn/index.html` | `https://tudienptc.vn/` | Xóa đuôi file tĩnh |
| `https://tudienptc.vn/contact` | `https://tudienptc.vn/lien-he` | Chuẩn hóa slug tiếng Việt |
| `https://tudienptc.vn/products` | `https://tudienptc.vn/tu-dien-cong-nghiep` | Chuyển về hub tủ điện |
| `https://tudienptc.vn/projects` | `https://tudienptc.vn/du-an` | Chuẩn hóa slug tiếng Việt |
| `https://tudienptc.vn/about` | `https://tudienptc.vn/gioi-thieu-ptc` | Chuẩn hóa slug trang giới thiệu |
| `https://tudienptc.vn/quote` | `https://tudienptc.vn/gui-ban-ve-boq` | Chuyển về trang tiếp nhận bản vẽ |
