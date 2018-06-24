var express = require('express'),
    router = express.Router(),
    authController = require('../controller/auth');

router.post('/loginregister', authController.userLogin);
router.post('/adminlogin', authController.adminLogin);

module.exports = router;