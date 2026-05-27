# AdidopShop - ASP.NET Core MVC & Tailwind CSS v4

Dự án Website bán hàng sử dụng .NET 9 và Tailwind CSS v4

## 🛠 1. Cài đặt phần mềm hệ thống

Nếu máy bạn chưa có Node.js hoặc Yarn, hãy thực hiện các bước sau trong **PowerShell (Admin)**:

### Cài đặt Node.js (Yêu cầu v20 trở lên)

Cách tốt nhất là dùng NVM để quản lý phiên bản:

```powershell
# 1. Cài đặt Node 20
nvm install 20
nvm use 20
# 2. Cài đặt Yarn
npm install --global yarn
# 3. Cấp quyền chạy Script cho Windows
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
# 4 . Khôi phục thư viện Backend (.NET)
dotnet restore
# 5 . Cài đặt thư viện Frontend (Tailwind CSS)
yarn install
# 6 . chạy chương trình đã cấu hình
yarn dev
```

2.  download MongoDB v8.3.2

- **How it looks:** [Download MongoDB v8.3.2 (MSI)](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-8.3.2-signed.msi)

# 📁 Lưu ý về cấu trúc

wwwroot/css/tailwind.css: File CSS gốc (Chứa @import "tailwindcss";).

wwwroot/css/site.css: File kết quả (Đã được Tailwind dịch ra, không sửa file này).

.gitignore: Đã cấu hình để không đẩy node_modules, bin, obj lên Git.

### About Me - Thông tin về mình:

Author: AwtichCoder

CV: https://cv-awtichcoder.web.app

“Live in a way that makes yourself proud, because in the end, the person who stays with you the longest is yourself.”
