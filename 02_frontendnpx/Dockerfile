# ใช้ Node.js เป็นฐาน
FROM node:18-alpine

# กำหนดโฟลเดอร์ทำงาน
WORKDIR /app

# รับค่า Argument ตอน Build (เพื่อเชื่อมต่อ API)
ARG API_HOST
ENV NEXT_PUBLIC_API_HOST=$API_HOST

# ก๊อปปี้ไฟล์ package.json มาลง dependencies
COPY package*.json ./
RUN npm install

# ก๊อปปี้โค้ดทั้งหมด
COPY . .

# สั่ง Build เว็บ (Next.js ต้อง Build ก่อน Run)
RUN npm run build

# เปิด Port 3000
EXPOSE 3000

# คำสั่งรันเว็บ
CMD ["npm", "start"]