DROP TABLE IF EXISTS games;

CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    rating DECIMAL(3,1) NOT NULL
);

INSERT INTO games (title, image_url, description, price, genre, rating) VALUES
('Elden Ring', 'https://i.imgur.com/zZzELDR.jpg',
 'เกม Action RPG โลกเปิดสุดกว้างใหญ่ เต็มไปด้วยบอสโหดและการสำรวจแบบอิสระ.\nเหมาะสำหรับผู้เล่นที่ชอบความท้าทายและเนื้อเรื่องลึกซึ้ง.',
 1790.00, 'Action RPG', 9.5),

('GTA V', 'https://i.imgur.com/GTAimg.jpg',
 'เกมแอคชัน Open World ที่มีภารกิจหลากหลายและเมืองให้สำรวจ.\nรองรับโหมดออนไลน์ ทำให้สนุกแบบยาวๆ ได้.',
 699.00, 'Action / Open World', 9.0),

('Red Dead Redemption 2', 'https://i.imgur.com/RDR2img.jpg',
 'เกมคาวบอยเนื้อเรื่องเข้มข้น รายละเอียดสมจริงที่สุดระดับโลก.\nเต็มไปด้วยระบบสำรวจและกิจกรรมให้ทำมากมาย.',
 1890.00, 'Action Adventure', 9.8),

('Cyberpunk 2077', 'https://i.imgur.com/CP2077.jpg',
 'เกม RPG โลกอนาคตไซเบอร์พังก์ เนื้อเรื่องจัดเต็ม.\nหลังอัปเดต 2.0 เกมดีขึ้นมาก เล่นลื่นกว่าเดิม.',
 1590.00, 'Action RPG', 8.8),

('Fortnite', 'https://i.imgur.com/FORTimg.jpg',
 'เกม Battle Royale เล่นฟรี เน้นความสร้างสรรค์ด้วยระบบสร้างสิ่งปลูกสร้าง.\nมีอีเวนต์และสกินใหม่อัปเดตตลอด.',
 0.00, 'Battle Royale', 8.5),

('Valorant', 'https://i.imgur.com/VALOimg.jpg',
 'เกมยิงเชิงกลยุทธ์ 5v5 ที่ต้องใช้ทั้งสกิลและความแม่นยำ.\nเป็นเกม eSport ที่ฮิตทั่วโลก.',
 0.00, 'FPS Tactical', 8.9),

('Minecraft', 'https://i.imgur.com/MINEimg.jpg',
 'เกม Sandbox สุดสร้างสรรค์ สร้างอะไรก็ได้ตามจินตนาการ.\nโหมด Survival และ Creative สนุกได้ไม่รู้จบ.',
 899.00, 'Sandbox / Survival', 9.4),

('PUBG Battlegrounds', 'https://i.imgur.com/PUBGimg.jpg',
 'เกม Battle Royale ภาพสมจริง เน้นกลยุทธ์และเอาตัวรอด.\nแผนที่ใหญ่และระบบอาวุธหลากหลาย.',
 0.00, 'Battle Royale', 8.2),

('The Witcher 3', 'https://i.imgur.com/WITCH3.jpg',
 'หนึ่งในเกม RPG ที่ดีที่สุด เนื้อเรื่องดี เควสดี.\nกราฟิกสวยและโลกเปิดให้สำรวจแบบกว้างใหญ่.',
 1190.00, 'RPG', 9.7),

('Apex Legends', 'https://i.imgur.com/APEXimg.jpg',
 'เกม Battle Royale ฮีโร่ที่เล่นเร็ว เคลื่อนไหวลื่นไหล.\nสกิลช่วยสร้างกลยุทธ์ได้หลากหลาย.',
 0.00, 'Battle Royale / Hero Shooter', 8.7),

('League of Legends', 'https://i.imgur.com/LOLimg.jpg',
 'เกม MOBA ที่โด่งดังระดับโลก แข่งขันเข้มข้น.\nตัวละครหลากหลาย เล่นได้ทั้งมือใหม่และโปร.',
 0.00, 'MOBA', 8.6),

('Call of Duty: Warzone', 'https://i.imgur.com/CODWZ.jpg',
 'เกมยิง Battle Royale ที่รวดเร็วและเข้มข้น.\nระบบอาวุธและการต่อสู้ทำออกมาได้มันส์มาก.',
 0.00, 'FPS / Battle Royale', 8.4);
