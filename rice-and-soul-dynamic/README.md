# Rice & Soul — Dynamic Web Prototype

## Chạy thử
Mở `index.html` bằng Chrome, Edge hoặc Firefox. Không cần cài server.

## Tính năng đã có
- Splash screen hiển thị ngẫu nhiên thông điệp mỗi lần tải.
- Danh mục và lưới sản phẩm được render từ dữ liệu JavaScript, có lọc.
- Giỏ hàng: thêm sản phẩm, đổi số lượng, tự tính tổng, lưu qua lần tải lại.
- Admin demo: thêm, sửa, xóa sản phẩm; xem các đơn đặt hàng.
- Checkout mô phỏng, lưu đơn hàng trên trình duyệt.
- Responsive desktop/tablet/mobile; menu di động; thông báo toast.

## Lưu ý quan trọng về “web động”
Đây là prototype động phía trình duyệt. Nội dung giao diện lấy từ dữ liệu, thao tác CRUD và trạng thái được lưu bằng `localStorage`. Dữ liệu chỉ tồn tại trên trình duyệt/thiết bị đang dùng, không đồng bộ cho nhiều khách hàng hoặc quản trị viên, và không phải cơ sở dữ liệu an toàn. Không triển khai bản admin này công khai để bán hàng thật.

## Lộ trình nâng cấp thành hệ thống thương mại điện tử
1. Frontend: tách HTML/CSS/JS hoặc chuyển sang React/Vue.
2. Backend: Node.js + Express (hoặc FastAPI) cung cấp API sản phẩm, đơn hàng, xác thực.
3. Database tập trung: PostgreSQL/MySQL.
4. Admin có đăng nhập, phân quyền, validation phía server và nhật ký hoạt động.
5. Checkout tích hợp quy trình vận chuyển, email/thông báo và cổng thanh toán khi nhóm sẵn sàng.
6. Bảo mật: HTTPS, rate limiting, kiểm tra dữ liệu server-side, secrets qua biến môi trường, sao lưu dữ liệu.

Google Fonts cần Internet; font hệ thống sẽ được dùng khi offline.
