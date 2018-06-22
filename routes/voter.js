var express = require('express'),
    router = express.Router(),
    voterController = require('../controller/voter');

router.post('/', voterController.createVoter);
router.post('/:id', voterController.updateVoter2);
router.get('/', voterController.getAllVoter);
router.get('/:id', voterController.getSingleVoter);
router.patch('/:id', voterController.updateVoter);
router.delete('/:id', voterController.deleteVoter);

module.exports = router;