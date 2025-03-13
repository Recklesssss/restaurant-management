const db = require("../../../config/database");

const RestaurantModel = {
    getRestaurantStripeAccount: async (restaurant_id) => {
        const query = `SELECT stripe_account_id FROM restaurants WHERE id = $1;`;
        const result = await db.query(query, [restaurant_id]);
        return result.rows[0]?.stripe_account_id;
    }
};

module.exports = RestaurantModel;
