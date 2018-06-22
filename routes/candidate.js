var express = require('express'),
    router = express.Router(),
    candidateController = require('../controller/cadidate');

router.post('/', candidateController.createCadidate);
router.post('/:id', candidateController.updateCandidate2);
router.get('/', candidateController.getAllCandidate);
router.get('/:id', candidateController.getSingleCandidate);
router.delete('/:id', candidateController.deleteCandidate);
router.patch('/:id', candidateController.updateCandidate);

module.exports = router;