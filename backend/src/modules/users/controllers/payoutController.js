const PayoutService = require('../services/payoutService');

const PayoutController = {
    sendPayout: async (req, res) => {
        const { restaurant_id, amount } = req.body;
        try {
            const payout = await PayoutService.sendPayout(restaurant_id, amount);
            res.status(200).json(payout);
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
};

module.exports = PayoutController;
