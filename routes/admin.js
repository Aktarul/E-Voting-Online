var express = require('express'),
    router = express.Router(),
    adminController = require('../controller/admin');

router.post('/', adminController.createAdmin);
router.get('/:id', adminController.getSingleAdmin);
router.post('/publish/:id', adminController.publishResult);

module.exports = router;