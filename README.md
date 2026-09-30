# Rice & Soul — Vercel fixed build

## Deploy đúng cách
1. Giải nén project.
2. Đẩy TOÀN BỘ các file/thư mục lên GitHub:
   - `index.html`
   - `api/message.js`
   - `package.json`
   - `server.js`
   - `vercel.json`
3. Vào Vercel → Add New Project → Import repository.
4. Framework Preset: Other.
5. Build Command: để trống.
6. Output Directory: để trống.
7. Deploy.

## Cấu trúc quan trọng
```text
rice-and-soul/
├── index.html
├── api/
│   └── message.js
├── package.json
├── server.js
└── vercel.json
```

Không đổi tên `index.html` và không chỉ upload riêng thư mục `public`.

## Nếu Vercel vẫn báo 404
Trong Vercel, mở Project → Deployments → deployment mới nhất → Building/Source,
kiểm tra rằng `index.html` nằm ở ROOT của repository, không nằm trong một thư mục con.
