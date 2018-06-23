var express = require('express'),
    router = express.Router(),
    authController = require('../controller/auth');

router.post('/loginregister', authController.userLogin);

module.exports = router;