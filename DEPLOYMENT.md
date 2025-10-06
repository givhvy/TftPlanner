# Deployment Guide - Vercel

## Hướng dẫn deploy TFT Academy lên Vercel

### Bước 1: Chuẩn bị Firebase Config

Trước khi deploy, bạn cần setup Firebase config như environment variable trên Vercel.

### Bước 2: Deploy lên Vercel

#### Option A: Deploy qua Vercel CLI (Nhanh nhất)

1. **Cài đặt Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login vào Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Deploy production:**
```bash
vercel --prod
```

#### Option B: Deploy qua Vercel Dashboard (Dễ nhất)

1. Vào https://vercel.com/
2. Đăng nhập (dùng GitHub account)
3. Nhấn **"Add New"** → **"Project"**
4. Import repository: `givhvy/TftPlanner`
5. Vercel sẽ tự động detect là static site
6. Nhấn **"Deploy"**

### Bước 3: Setup Firebase Config trên Vercel

Sau khi deploy xong, bạn cần add Firebase config:

#### Cách 1: Environment Variables (Khuyên dùng)

1. Vào Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Thêm các biến sau:

```
VITE_FIREBASE_API_KEY = AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN = thetft-d3f84.firebaseapp.com
VITE_FIREBASE_PROJECT_ID = thetft-d3f84
VITE_FIREBASE_STORAGE_BUCKET = thetft-d3f84.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID = 445546720573
VITE_FIREBASE_APP_ID = 1:445546720573:web:...
```

Sau đó update `js/firebase-config.js` để đọc từ env vars.

#### Cách 2: Commit firebase-config.js trực tiếp (Đơn giản hơn)

Vì Firebase API keys có thể public (được bảo vệ bởi Firestore Rules), bạn có thể:

1. Tạo branch riêng cho production:
```bash
git checkout -b production
git add js/firebase-config.js -f
git commit -m "Add Firebase config for production"
git push origin production
```

2. Trên Vercel, chọn deploy từ branch `production` thay vì `main`

### Bước 4: Cấu hình Domain (Optional)

1. Vercel sẽ tự động tạo domain: `tft-academy.vercel.app`
2. Nếu có custom domain, vào **Settings** → **Domains** để add

### Bước 5: Test

1. Truy cập URL Vercel cung cấp
2. Test các chức năng:
   - ✅ Load tierlist
   - ✅ Builder tạo team
   - ✅ Save build lên Firebase
   - ✅ Load saved builds

## Các file đã tạo cho Vercel:

- ✅ `vercel.json` - Cấu hình Vercel
- ✅ `.vercelignore` - Files không deploy

## Lưu ý quan trọng:

### Firebase Domain Authorization

Sau khi deploy, bạn cần add Vercel domain vào Firebase:

1. Vào [Firebase Console](https://console.firebase.google.com/project/thetft-d3f84/authentication/settings)
2. **Authentication** → **Settings** → **Authorized domains**
3. Thêm domain Vercel của bạn (ví dụ: `tft-academy.vercel.app`)

### CORS Issues

Nếu gặp CORS error khi call tactics.tools API:
- API sẽ hoạt động bình thường vì là client-side call
- Nếu vẫn lỗi, có thể cần proxy qua Vercel Serverless Functions

## Troubleshooting

### Firebase không khởi tạo được
- Kiểm tra Console logs
- Verify Firebase config đã được set đúng
- Check Firestore Rules đã enable chưa

### 404 errors
- Vercel tự động serve static files
- Kiểm tra file paths có đúng không

### Build errors
- Project này là pure HTML/CSS/JS, không cần build step
- Nếu có lỗi, check `vercel.json` config

## Auto Deploy

Vercel sẽ tự động deploy mỗi khi bạn push lên GitHub:
- Push to `main` → Deploy preview
- Push to `production` → Deploy production (nếu dùng cách 2)

---

**Ready to deploy?** Chọn Option A hoặc B và làm theo hướng dẫn!
