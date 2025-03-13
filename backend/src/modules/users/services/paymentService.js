const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const TransactionModel = require('../models/transaction');

const PaymentService = {
    createPaymentIntent: async (user_id, order_id, amount, currency, payment_method_id) => {
        try {
            // Create Stripe PaymentIntent
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount * 100, // Convert to cents
                currency,
                payment_method: payment_method_id,
                confirmation_method: "manual",
                confirm: true
            });

            // Store transaction in DB
            const transaction = await TransactionModel.createTransaction(
                user_id, order_id, paymentIntent.id, amount, currency, 'pending', payment_method_id
            );

            return { success: true, paymentIntentId: paymentIntent.id, transaction };
        } catch (error) {
            throw new Error(error.message);
        }
    },

    confirmPayment: async (paymentIntentId) => {
        try {
            const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
            if (paymentIntent.status === "succeeded") {
                await TransactionModel.updateTransactionStatus(paymentIntentId, "succeeded");
            } else {
                await TransactionModel.updateTransactionStatus(paymentIntentId, "failed");
            }
            return paymentIntent;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = PaymentService;
