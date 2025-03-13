const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const PayoutModel = require('../models/payout');
const RestaurantModel = require('../models/restaurantStrip');

const PayoutService = {
    sendPayout: async (restaurant_id, amount) => {
        try {
            const stripe_account_id = await RestaurantModel.getRestaurantStripeAccount(restaurant_id);
            if (!stripe_account_id) throw new Error("Restaurant does not have a Stripe account");

            const payout = await stripe.payouts.create({
                amount: amount * 100,
                currency: 'usd',
                destination: stripe_account_id
            });

            return await PayoutModel.createPayout(restaurant_id, payout.id, amount, "pending");
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = PayoutService;
