const express = require('express');
const PayoutController = require('../controllers/payoutController');
const router = express.Router();

router.post('/send-payout', PayoutController.sendPayout);

module.exports = router;
