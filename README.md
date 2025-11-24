# FPT MFE Components Integration Guide

Tài liệu hướng dẫn tích hợp Header và Footer chung cho các website thuộc hệ sinh thái FPT.

## 1. Nhúng Script (CDN)

Thêm đoạn mã sau vào thẻ `<head>` của trang web. Lưu ý: File `vendor.js` chỉ cần load 1 lần duy nhất cho cả Header và Footer.

```html
<!-- Core Runtime (React 19 Shared) -->
<script src="https://fpt-mfe-components.pages.dev/libs/vendor.js" />

<!-- Components -->
<script src="https://fpt-mfe-components.pages.dev/latest/fpt-header.js" async />
<script src="https://fpt-mfe-components.pages.dev/latest/fpt-footer.js" async />
```

## 2. Sử dụng Component

Sử dụng như thẻ HTML thông thường tại vị trí mong muốn trong `<body>`.

### Header

Component tự động load cấu hình menu từ CDN.

```html
<fpt-header />
```

### Footer

Hỗ trợ 2 giao diện: Khách hàng cá nhân (`consumer`) và Doanh nghiệp (`enterprise`).

```html
<!-- Mặc định (Consumer) -->
<fpt-footer />

<!-- Hoặc chỉ định rõ variant -->
<fpt-footer variant="consumer" />
<fpt-footer variant="enterprise" />
```

## 3. Cấu hình nội dung

Menu và Banner được quản lý qua file JSON tĩnh, không cần deploy lại code khi thay đổi nội dung.

- Header Config: `configs/header.json`
- Footer Config: `configs/footer.json`
