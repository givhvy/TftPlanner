# Firebase Setup Guide

## Hướng dẫn thiết lập Firebase cho TFT Academy

### Bước 1: Tạo Firebase Project

1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Nhấn "Add project" hoặc "Create a project"
3. Đặt tên cho project (ví dụ: "TFT Academy")
4. Tắt Google Analytics nếu không cần
5. Nhấn "Create project"

### Bước 2: Thêm Web App

1. Trong Firebase Console, chọn project vừa tạo
2. Nhấn vào biểu tượng Web `</>` để thêm Firebase vào web app
3. Đặt tên cho app (ví dụ: "TFT Academy Web")
4. Nhấn "Register app"
5. Copy đoạn code Firebase configuration

### Bước 3: Enable Firestore Database

1. Trong Firebase Console, vào **Build** → **Firestore Database**
2. Nhấn **Create database**
3. Chọn chế độ:
   - **Production mode** (khuyên dùng cho production)
   - **Test mode** (để test, sẽ tự động public trong 30 ngày)
4. Chọn location (chọn gần người dùng, ví dụ: `asia-southeast1`)
5. Nhấn **Enable**

### Bước 4: Cấu hình Firestore Rules

Trong **Firestore Database** → **Rules**, thay đổi rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Cho phép đọc công khai, chỉ cho phép ghi có xác thực
    match /tft_builds/{document=**} {
      allow read: if true;
      allow write: if true; // Tạm thời cho phép write, sau này nên thêm authentication
    }
  }
}
```

**Lưu ý bảo mật:** Rules trên cho phép mọi người write. Nên thêm Firebase Authentication sau để bảo mật hơn.

### Bước 5: Cập nhật Firebase Config

Mở file `js/firebase-config.js` và thay thế thông tin config:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",                    // Thay bằng API Key từ Firebase
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### Bước 6: Test

1. Mở website của bạn
2. Vào trang **Builder** và tạo một build mới
3. Nhấn **Save Build**
4. Kiểm tra trong Firebase Console → Firestore Database xem có data mới không
5. Vào trang **Saved Builds** để xem build đã lưu

## Các tính năng đã tích hợp

✅ **Lưu builds lên Firebase Firestore**
- Tự động lưu khi nhấn "Save Build"
- Có fallback về localStorage nếu Firebase lỗi

✅ **Load builds từ Firebase**
- Tự động load khi vào trang Saved Builds
- Hiển thị loading state
- Có fallback về localStorage nếu Firebase lỗi

✅ **Xóa builds**
- Xóa cả trên Firebase và localStorage
- Có confirm dialog trước khi xóa

✅ **Sync localStorage với Firebase**
- Tự động backup vào localStorage
- Có thể gọi `FirebaseService.syncLocalToFirebase()` để sync builds cũ

## Nâng cấp trong tương lai

### 1. Thêm Authentication
```javascript
// Enable Firebase Authentication
// Cho phép user đăng nhập và chỉ quản lý builds của mình
```

### 2. Thêm Firebase Storage
```javascript
// Lưu hình ảnh screenshots của builds
// Lưu export files (JSON, image)
```

### 3. Sharing & Community
```javascript
// Public builds có thể share
// Browse builds từ community
// Vote/like builds
```

## Troubleshooting

### Lỗi: Firebase is not defined
- Kiểm tra xem đã add Firebase SDK scripts vào HTML chưa
- Đảm bảo `firebase-config.js` load trước các file khác

### Lỗi: Permission denied
- Kiểm tra Firestore Rules
- Đảm bảo rules cho phép read/write cho collection `tft_builds`

### Builds không hiển thị
- Mở Console (F12) để xem error logs
- Kiểm tra Network tab xem có call Firebase không
- Kiểm tra localStorage có data backup không

## Chi phí Firebase

- **Free Tier (Spark Plan)**:
  - 1GB storage
  - 50K reads/day
  - 20K writes/day
  - **Đủ cho hầu hết hobby projects**

- **Paid Tier (Blaze Plan)**: Chỉ trả khi vượt quá free tier

## Liên hệ & Support

Nếu gặp vấn đề, check:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
