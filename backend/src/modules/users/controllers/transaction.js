const transaction = require('../services/transaction');

const TransactionController = {
    getTransaction: async (req, res) => {
        const { user_id } = req.params;
        try {
            const response = await transaction.getTransaction(user_id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    },
}