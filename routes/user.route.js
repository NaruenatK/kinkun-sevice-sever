//ไฟล์ที่ใช้ในการกำหนดเส้นทางในการเรียกใช้ API เป็นการกำหนด End Point ของ API
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// post เพิ่ม
router.post('/', userController.upload, userController.createUser);

// get ตรวจสอบ ดึง ดู 
router.get('/:userEmail/:UserPassword', userController.checkLogin);

//put แก้ไข
router.put('/:userId', userController.upload, userController.editUser);

//**** 
module.exports = router;