# پروژه Fullstack - Laravel (Backend) + Next.js (Frontend)

## توضیح پروژه
این پروژه یک برنامه ساده CRUD برای مدیریت پست‌ها است که بک‌اند آن با لاراول (Laravel) و فرانت‌اند آن با Next.js ساخته شده است.

## ساختار پروژه
- Backend (Laravel) در مسیر `backend/`
- Frontend (Next.js) در مسیر `frontend/`

## پیش‌نیازها
- PHP >= 8.0
- Composer
- Node.js و npm
- MySQL یا هر دیتابیس دلخواه

## نصب و راه‌اندازی

### Backend (Laravel)

1. وارد پوشه backend شوید:
    ```bash
    cd backend
    ```
2. نصب پکیج‌ها:
    ```bash
    composer install
    ```
3. فایل `.env` بسازید (از `.env.example` کپی بگیرید) و تنظیمات دیتابیس را انجام دهید.
4. اجرای مایگریشن و دیتابیس را با داده‌های اولیه بسازید:
    ```bash
    php artisan migrate:fresh --seed
    ```
5. سرور لاراول را اجرا کنید:
    ```bash
    php artisan serve
    ```
   سرور روی `http://localhost:8000` اجرا می‌شود.

### Frontend (Next.js)

1. وارد پوشه frontend شوید:
    ```bash
    cd frontend
    ```
2. نصب پکیج‌ها:
    ```bash
    npm install
    ```
3. اجرای اپلیکیشن فرانت‌اند:
    ```bash
    npm run dev
    ```
   برنامه روی `http://localhost:3000` اجرا می‌شود.

## نکات مهم
- API لاراول روی `http://localhost:8000/api/posts` پست‌ها را ارائه می‌کند.
- فرانت‌اند داده‌ها را از این API دریافت می‌کند.
- اگر بخواهید پورت‌ها را تغییر دهید، فایل‌های تنظیمات مربوطه را به‌روزر
