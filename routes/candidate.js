var express = require('express'),
    router = express.Router(),
    candidateController = require('../controller/cadidate');

router.get('/search/:searchKey', candidateController.getSearchCandidate);
router.post('/', candidateController.createCadidate);
router.post('/:id', candidateController.updateCandidate2);
router.get('/', candidateController.getAllCandidate);
router.get('/:id', candidateController.getSingleCandidate);
router.delete('/:id', candidateController.deleteCandidate);
router.patch('/:id', candidateController.updateCandidate);
router.post('/VoteUpdate/:id', candidateController.updateVote);

module.exports = router;