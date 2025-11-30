# ใช้ Node.js เป็นฐาน
FROM node:18-alpine

# กำหนดโฟลเดอร์ทำงาน
WORKDIR /app

# ก๊อปปี้ไฟล์ package.json มาลง dependencies ก่อน (เพื่อให้ Docker cache ได้)
COPY package*.json ./
RUN npm install

# ก๊อปปี้โค้ดทั้งหมดตามมา
COPY . .

# เปิด Port 3001 (Port ของ Backend คุณ)
EXPOSE 3001

# คำสั่งรัน Server
CMD ["node", "index.js"]