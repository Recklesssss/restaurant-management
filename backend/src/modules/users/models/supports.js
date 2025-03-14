const db = require("../../../config/database");

exports.insertSupport = async (user_id, restaurant_id, message) => {
    try {
        const insert = await db.query(`INSERT INTO customer_support (user_id, restaurant_id, issue_description) VALUES ($1, $2, $3) `, [user_id, restaurant_id, message]);
        console.log("successfully inserted support");
    } catch (error) {
        throw new Error("error from database",error.message);
    }
}
exports.getSupport = async (user_id,restaurant_id) => {
    try {
        const support = await db.query(`SELECT * FROM customer_support WHERE user_id = $1 AND restaurant_id = $2`, [user_id,restaurant_id]);
        return support.rows;
    } catch (error) {
        throw new Error("error from database",error.message);
    }
}
exports.updateSupport = async (ticket_id,message) => {
    try {
        const update = await db.query(`UPDATE customer_support SET issue_description = $1 WHERE ticket_id = $2`, [message, ticket_id]);
        console.log("successfully updated support");
    } catch (error) {
        throw new Error("error from database",error.message);
        
    }
}
exports.deleteSupport = async (ticket_id) => {
    try {
        const deleted = await db.query(`DELETE FROM customer_support WHERE ticket_id = $1`, [ticket_id]);
        console.log("successfully deleted support");
    } catch (error) {
        throw new Error("error from database",error.message);
    }
}