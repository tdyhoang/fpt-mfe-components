### **Tích hợp Components**

**1. Script Endpoints**

- **Header:** `http://localhost:5001/fpt-header.js`
- **Footer:** `http://localhost:5002/fpt-footer.js`

_Ghi chú: URL mẫu, thay thế bằng endpoint thực tế._

**Triển khai:** Load script tại cuối tag `<body>`.

```html
<script type="module" src="[URL_HEADER_SCRIPT]"></script>
<script type="module" src="[URL_FOOTER_SCRIPT]"></script>
```

**2. Sử dụng**

Các tag là Custom Elements (Web Components), được đăng ký global.

- **Header Component:** `<fpt-header></fpt-header>`
- **Footer Component:** `<fpt-footer></fpt-footer>`

**3. Ví dụ Tích hợp**

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>Integration Example</title>
  </head>
  <body>
    <fpt-header></fpt-header>
    <main><!-- App content --></main>
    <fpt-footer></fpt-footer>
    <script type="module" src=".../fpt-header.js"></script>
    <script type="module" src=".../fpt-footer.js"></script>
  </body>
</html>
```
