const db  = require("../../../config/database");   

exports.restaurants = async()=>{
    try {
        const restaurants = await db.query(`SELECT * FROM restaurants`);
        console.log("successfully fetched restaurants in the database");
        return restaurants.rows;
    } catch (error) {
        throw new Error("error in fetching restaurants from database");
    }
}
exports.restaurantInfo = async(restaurant_id) => {
    try {
        const restaurantInfo =await db.query(`SELECT * FROM restaurants WHERE restaurant_id = $1`,[restaurant_id]);
        console.log("successfully fetched restaurant info from the database");
    } catch (error) {
        throw new Error("error in fetching restaurant info from database");
    }
}