const db = require("../../../config/database");

const Favourite = {
    favouriteRestaurant:async (restaurant_id) => {
        try {
            const resaturant = await db.query(`
                SELECT restaurant_id, COUNT(*) AS order_count
                FROM orders
                WHERE user_id = $1
                GROUP BY restaurant_id
                ORDER BY order_count DESC
                LIMIT 5;`,[restaurant_id])
            return resaturant
        } catch (error) {
            throw new Error(error.message);
            
        }
    },
    favouriteMenu: async(user_id)=>{
        try {
            const menu  = await db.query(`
                SELECT menu_item_id, COUNT(*) AS order_count
                FROM order_items
                WHERE user_id = $1
                GROUP BY menu_item_id
                ORDER BY order_count DESC
                LIMIT 5;
                `)
            return menu
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
module.exports = Favourite;