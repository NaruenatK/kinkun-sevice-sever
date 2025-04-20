//ไฟล์ที่ใช้ในการกำหนดเส้นทางในการเรียกใช้ API เป็นการกำหนด End Point ของ API
const express = require('express');
const router = express.Router();
const kinkunController = require('../controllers/kinkun.controller');

// post เพิ่ม
router.post('/', kinkunController.upload, kinkunController.createKinkun);


router.get('/:kinkunId', kinkunController.upload, kinkunController.editKinkun);

//put แก้ไข
router.put('/:kinkunId', kinkunController.delelteKinkun);

//ลบ
router.delete('/:kinkunId', kinkunController.delelteKinkun);

// get ตรวจสอบ ดึง ดู 
router.get('/:kinkunall/:userId', kinkunController.showAllKinkun);
router.get('/kinkunonly/:kinkunId', kinkunController.getOnlyKinkun);

//**** 
module.exports = router;