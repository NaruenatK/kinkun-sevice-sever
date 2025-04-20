//ไฟล์นี้จะประกอบด้วยฟังก์ชันในการทำงานกับตารางในฐานข้อมูลผ่านทาง prisma
// ทำงานกับตาราง ได้แก่ Create เพิ่ม, Read อ่าน ตรวจสอบ ดึง ดู, Update แก้ไข, Delete ลบ
const multer = require('multer'); //for upload file
const path = require('path'); //for path of file



//ฟังชันอัปโหลดไฟล์-------------------
//1. create path for save file that user upload and change file name to be unique
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/user');
    },
    filename: (req, file, cb) => {
        cb(null, 'user_' + Math.floor
            (Math.random() * Date.now()) + path.extname(file.originalname));
    }
})
//2 create upload middleware 
exports.upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/; //allow file type
        const mimeType = fileTypes.test(file.mimetype); //check file type
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase()); //check file extension
        if (mimeType && extname) {
            return cb(null, true);
        }
        cb('Error: File upload only supports the following file types - ' + fileTypes);
    }
});
//--------------------------------------------
//ฟังก์ชันเพิ่ม user-------------------------------
exports.createUser = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({
            message: 'พบปัญหาในการทำงาน ${err.message}'
        });
    }
}
//----------------------------------------------

//ฟังก์ชัน log in เพื่อตรวจสอบ email and password-----
exports.checkLogin = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({
            message: 'พบปัญหาในการทำงาน ${err.message}'
        });
    }
}
//----------------------------------------------
//ฟังก์ชัน แก้ไขข้อมูล user---------------------------

exports.editUser = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({
            message: 'พบปัญหาในการทำงาน ${err.message}'
        });
    }
}
//----------------------------------------------