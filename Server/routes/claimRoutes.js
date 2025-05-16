const express = require('express');
const router = express.Router();
const claimController = require('../controllers/claimController');

router.post('/claims', claimController.createClaim);
router.get('/claims', claimController.getAllClaims);
router.patch('/claims/:id/status', claimController.updateClaimStatus);

module.exports = router;