import React from 'react';

const games = [
  {
    id: 1,
    title: 'Elden Ring',
    // ใช้ลิงก์จาก Wikimedia เพื่อความเสถียรของรูปภาพ
    image_url: 'https://www.hobbyfanclub.com/web/images/rbv4paohmkegufo34vfp7920221481.jpg',
    description: 'เกม Action RPG โลกเปิดสุดกว้างใหญ่ เต็มไปด้วยบอสโหดและการสำรวจแบบอิสระ เหมาะสำหรับผู้เล่นที่ชอบความท้าทาย',
    price: 1790,
    genre: 'Action RPG',
    rating: 9.5
  },
  {
    id: 2,
    title: 'GTA V',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png',
    description: 'เกมแอคชัน Open World ที่มีภารกิจหลากหลายและเมืองให้สำรวจ รองรับโหมดออนไลน์ ทำให้สนุกแบบยาวๆ',
    price: 699,
    genre: 'Open World',
    rating: 9.0
  },
  {
    id: 3,
    title: 'Red Dead Redemption 2',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg',
    description: 'เกมคาวบอยเนื้อเรื่องเข้มข้น รายละเอียดสมจริงที่สุดระดับโลก เต็มไปด้วยระบบสำรวจและกิจกรรม',
    price: 1890,
    genre: 'Adventure',
    rating: 9.8
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
    description: 'เกม RPG โลกอนาคตไซเบอร์พังก์ เนื้อเรื่องจัดเต็ม หลังอัปเดต 2.0 เกมดีขึ้นมาก เล่นลื่นกว่าเดิม',
    price: 1590,
    genre: 'Action RPG',
    rating: 8.8
  },
  {
    id: 5,
    title: 'Fortnite',
    image_url: 'https://i.ytimg.com/vi/adGdyCdvKz4/maxresdefault.jpg',
    description: 'เกม Battle Royale เล่นฟรี เน้นความสร้างสรรค์ด้วยระบบสร้างสิ่งปลูกสร้าง มีอีเวนต์อัปเดตตลอด',
    price: 0,
    genre: 'Battle Royale',
    rating: 8.5
  },
  {
    id: 6,
    title: 'Valorant',
    image_url: 'https://mpics.mgronline.com/pics/Images/563000009079101.JPEG',
    description: 'เกมยิงเชิงกลยุทธ์ 5v5 ที่ต้องใช้ทั้งสกิลและความแม่นยำ เป็นเกม eSport ที่ฮิตทั่วโลก',
    price: 0,
    genre: 'FPS Tactical',
    rating: 8.9
  },
  {
    id: 7,
    title: 'Minecraft',
    image_url: 'https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png',
    description: 'เกม Sandbox สุดสร้างสรรค์ สร้างอะไรก็ได้ตามจินตนาการ โหมด Survival และ Creative สนุกได้ไม่รู้จบ',
    price: 899,
    genre: 'Sandbox',
    rating: 9.4
  },
  {
    id: 8,
    title: 'PUBG',
    image_url: 'https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-19vwb.jpg',
    description: 'ต้นตำรับ Battle Royale ภาพสมจริง เน้นกลยุทธ์และเอาตัวรอด แผนที่ใหญ่และระบบอาวุธหลากหลาย',
    price: 0,
    genre: 'Battle Royale',
    rating: 8.2
  },
  {
    id: 9,
    title: 'The Witcher 3',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
    description: 'หนึ่งในเกม RPG ที่ดีที่สุด เนื้อเรื่องดี เควสดี กราฟิกสวยและโลกเปิดให้สำรวจแบบกว้างใหญ่',
    price: 1190,
    genre: 'RPG',
    rating: 9.7
  },
  {
    id: 10,
    title: 'Apex Legends',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg',
    description: 'เกม Battle Royale ฮีโร่ที่เล่นเร็ว เคลื่อนไหวลื่นไหล สกิลช่วยสร้างกลยุทธ์ได้หลากหลาย',
    price: 0,
    genre: 'Hero Shooter',
    rating: 8.7
  },
  {
    id: 11,
    title: 'League of Legends',
    image_url: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-47eb328eac5ddd63ebd096ded7d0d5ab?resize=1&w=480&h=270&quality=medium',
    description: 'เกม MOBA ที่โด่งดังระดับโลก แข่งขันเข้มข้น ตัวละครหลากหลาย เล่นได้ทั้งมือใหม่และโปร',
    price: 0,
    genre: 'MOBA',
    rating: 8.6
  },
  {
    id: 12,
    title: 'Call of Duty: Warzone',
    image_url: 'https://image.api.playstation.com/vulcan/ap/rnd/202503/2819/346190abf755e3883d1353fbc8d8ccb7e1acf076f1138d6b.jpg',
    description: 'เกมยิง Battle Royale ที่รวดเร็วและเข้มข้น ระบบอาวุธและการต่อสู้ทำออกมาได้มันส์มาก',
    price: 0,
    genre: 'FPS',
    rating: 8.4
  }
];

export default function GamePage() {
  return (
    // ใช้ Tailwind Classes สำหรับ Dark Theme และการจัดวาง
    <div className="min-h-screen bg-neutral-900 text-gray-100 py-12 px-4 font-sans">
      
      {/* ส่วนหัวของหน้าเว็บ */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 drop-shadow-lg">
          Game Store
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          รวบรวม 12 เกมยอดฮิตที่คุณไม่ควรพลาด พร้อมดีลสุดพิเศษสำหรับเกมเมอร์ตัวจริง
        </p>
      </div>

      {/* ส่วนแสดงรายการเกมแบบ Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {games.map((game) => (
          // การ์ดเกมแต่ละใบ
          <div 
            key={game.id} 
            className="group relative bg-neutral-800 rounded-2xl overflow-hidden shadow-xl border border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:border-green-500 hover:-translate-y-2 cursor-pointer"
          >
            {/* ส่วนรูปภาพเกมและป้าย Badge */}
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src={game.image_url} 
                alt={game.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* ป้ายบอกแนวเกม (Genre) */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/20">
                {game.genre}
              </div>
              {/* ป้ายบอกคะแนน (Rating) */}
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-yellow-500/90 text-black px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                ★ {game.rating}
              </div>
            </div>

            {/* ส่วนเนื้อหา (ชื่อเกม, รายละเอียด, ราคา) */}
            <div className="p-5 flex flex-col h-[220px]">
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-green-400 transition-colors">
                  {game.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                  {game.description}
                </p>
              </div>
              
              {/* ส่วนราคาและปุ่มกด */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-700">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase font-bold">Price</span>
                  <span className={`text-lg font-bold ${game.price === 0 ? 'text-green-400' : 'text-white'}`}>
                    {game.price === 0 ? 'Free' : `฿${game.price.toLocaleString()}`}
                  </span>
                </div>
                <button className="px-4 py-2 bg-white text-black font-bold rounded-lg hover:bg-green-400 hover:text-black transition-colors shadow-md text-sm">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}