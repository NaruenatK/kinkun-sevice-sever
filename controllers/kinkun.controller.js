const multer = require('multer'); //for upload file
const path = require('path'); //for path of file



//ฟังชันอัปโหลดไฟล์-------------------
//1. create path for save file that user upload and change file name to be unique
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/kinkun');
    },
    filename: (req, file, cb) => {
        cb(null, 'kinkun_' + Math.floor
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
//----------------------------------------------
//ฟังก์ชัั่นเพิ่มข้อมูลการกินในตาราง kinkun_tb---------------------------
exports.createKinkun = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({
            message: 'พบปัญหาในการทำงาน ${err.message}'
        });
    }
}
//----------------------------------------------
//ฟังก์ชัั่นแก้ไขข้อมูลการกินในตาราง kinkun_tb---------------------------

exports.editKinkun = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({
            message: 'พบปัญหาในการทำงาน ${err.message}'
        });
    }
}
//----------------------------------------------
//ฟังก์ชัั่นลบข้อมูลการกินในตาราง kinkun_tb---------------------------
exports.delelteKinkun = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({
            message: 'พบปัญหาในการทำงาน ${err.message}'
        });
    }
}
//----------------------------------------------
//ฟังก์ชัั่นดึงข้อมูลการกินทั้งหมด---------------------------

exports.showAllKinkun = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({
            message: 'พบปัญหาในการทำงาน ${err.message}'
        });
    }
}
//----------------------------------------------

//ฟังก์ชัั่นดึงข้อมูลการกินหนึ่งจากตาราง---------------------------
exports.showOnlyKinkun = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({
            message: 'พบปัญหาในการทำงาน ${err.message}'
        });
    }
}
//----------------------------------------------