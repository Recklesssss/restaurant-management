const db = require("../../../config/database");

exports.menu = async (restaurant_id) => {
    try {
        const menu = await db.query(`SELECT * FROM menus where restaurant_id = $1 `,[restaurant_id]);
        console.log('sucessfully fetched menu');
        return menu.rows;
    } catch (error) {
        console.error("error in fetching menu from database");
    }
}