# ใช้ Node.js เวอร์ชั่น 18 แบบเล็ก (Alpine)
FROM node:18-alpine

# กำหนดโฟลเดอร์ทำงานใน Container
WORKDIR /app

# ก๊อปปี้ไฟล์ package.json ไปก่อนเพื่อลงโปรแกรม
COPY package*.json ./

# ติดตั้ง Dependencies
RUN npm install

# ก๊อปปี้โค้ดทั้งหมดตามไป
COPY . .

# สั่ง Build เว็บ (สำหรับ Production)
RUN npm run build

# เปิด Port 3000
EXPOSE 3000

# คำสั่งรันเมื่อเริ่ม Container
CMD ["npm", "start"]