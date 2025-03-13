const db = require("../../../config/database");

const TransactionModel = {
    createTransaction: async (user_id, order_id, stripe_payment_intent_id, amount, currency, payment_status, payment_method_id) => {
        const query = `
            INSERT INTO transactions (user_id, order_id, stripe_payment_intent_id, amount, currency, payment_status, payment_method_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
        `;
        const values = [user_id, order_id, stripe_payment_intent_id, amount, currency, payment_status, payment_method_id];
        const result = await db.query(query, values);
        return result.rows[0];
    },

    updateTransactionStatus: async (stripe_payment_intent_id, status) => {
        const query = `UPDATE transactions SET payment_status = $1 WHERE stripe_payment_intent_id = $2 RETURNING *;`;
        const result = await db.query(query, [status, stripe_payment_intent_id]);
        return result.rows[0];
    },
    getTransaction: async (user_id) => {
        const query = `SELECT * FROM transactions WHERE user_id = $1;`;
        const result = await db.query(query, [user_id]);
        return result.rows;
},
};

module.exports = TransactionModel;
