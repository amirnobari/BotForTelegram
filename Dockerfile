# استفاده از تصویر رسمی Node.js به عنوان پایه
FROM node:18.14.0-alpine

# تعیین مسیر کاری درون کانتینر
WORKDIR /app

# کپی فایل‌های مورد نیاز به کانتینر
COPY package*.json ./

# نصب وابستگی‌ها
RUN npm install

# کپی سایر فایل‌ها
COPY . .

# تنظیمات MongoDB
ENV MONGO_HOST=mongodb
ENV MONGO_PORT=27017
ENV MONGO_DB=mydatabase

# پورتی که برنامه شما در آن اجرا می‌شود
EXPOSE 3000

# دستور اجرای برنامه
CMD ["node", "bot.js"]
