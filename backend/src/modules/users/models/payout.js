const db = require("../../../config/database");

const PayoutModel = {
    createPayout: async (restaurant_id, stripe_payout_id, amount, status) => {
        const query = `
            INSERT INTO restaurant_payouts (restaurant_id, stripe_payout_id, amount, status)
            VALUES ($1, $2, $3, $4) RETURNING *;
        `;
        const values = [restaurant_id, stripe_payout_id, amount, status];
        const result = await db.query(query, values);
        return result.rows[0];
    }
};

module.exports = PayoutModel;
