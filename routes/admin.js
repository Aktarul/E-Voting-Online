var express = require('express'),
    router = express.Router(),
    adminController = require('../controller/admin');

router.post('/', adminController.createAdmin);

module.exports = router;