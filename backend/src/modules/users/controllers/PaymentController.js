const PaymentService = require('../services/paymentService');

const PaymentController = {
    createPaymentIntent: async (req, res) => {
        const { user_id, order_id, amount, currency, payment_method_id } = req.body;
        try {
            const response = await PaymentService.createPaymentIntent(user_id, order_id, amount, currency, payment_method_id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    },

    confirmPayment: async (req, res) => {
        const { paymentIntentId } = req.body;
        try {
            const payment = await PaymentService.confirmPayment(paymentIntentId);
            res.status(200).json(payment);
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
};

module.exports = PaymentController;
