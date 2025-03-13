const transaction = require('../models/transaction');

const TransactionService = {
    getTransaction: async (user_id) => {
        try {
            return await transaction.getTransaction(user_id);
        } catch (error) {
            throw new Error(error.message);
        }
    },
};
module.exports = TransactionService;