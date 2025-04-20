const express = require("express");
const cors = require("cors");
require("dotenv").config();

//สร้าง "web server" ด้วย express
const app = express();

//กำหนดหมายเลขพอร์ตเพื่อรออรับการเข้าใช้งาน Web Server
const PORT = process.env.PORT;

//Middleware ใช้ในการจัดงานต่างๆ ของ Web Server
app.use(cors()); //ใช้ CORS เพื้อให้ศามารถเข้าถึง API ได้จากที่อื่นได้ เรียกใช้งานข้ามโดเมนได้
app.use(express.json());
// บอก Webserver ว่าจะใช้ URL ที่มี Prefix อะไรบ้างในการที่จะเรียกใช้งาน API ต่่างๆ
app.use('/user', require('./routes/user'));
app.use('/kinkun', require('./routes/kinkun'));

// บอก Web Server ในการใช้งานไฟล์ในโฟลเดอร์ Images
app.use('/images/user', express.static('images/user'));
app.use('/images/kinkun', express.static('images/kinkun'));

//คำสั่งเพื่อใช้ทดสอบการใช้งาน Web Server (หากไม่ใช้ สามารถลบ คอมเม้น หรือปล่อยไว้)
app.get('/', (req, res) => {
    res.json({ message: 'ยินดีต้อนรับสู่ Web Server ของเรา' })
});

//สร้างคำสั่งให้ Web Server รอรับการเข้าใช้งานที่พอร์ตยที่กำหนด
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});