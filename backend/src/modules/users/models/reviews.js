const db = require("../../../config/database");

exports.reviewsRestaurantItem = async (restaurant_id,item_id) => {
    try {
        const reviews = await db.query(`SELECT *  FROM comments where restaurant_id = $1 AND item_id = $2`,[restaurant_id,item_id]);
        console.log(`successfully retrievd comments from database from model`)
        return reviews.rows[0]
    } catch (error) {
        console.error("error from the database and model",error)
    }
}
exports.reviewsRestaurant = async (restaurant_id) => {
    try {
        const resReviews = await db.query(`SELECT *  FROM comments where restaurant_id = $1 AND item_id = IS NULL`,[restaurant_id]);
        console.log('sucessfully retrieved form the database on model')
        return resReviews.rows[0]
    } catch (error) {
        console.error("error from the database and model",error)
    }
}
exports.reviewing = async (restaurant_id,item_id,rating,comment,response) => {
    try {
        const reviewing = await db.query(
            `INSERT INTO comments (restaurant_id,item_id, rating, comment, response) 
             VALUES ($1, $2, $3, $4,$5)`,
            [restaurant_id ,item_id || null, rating, comment, response]);
    } catch (error) {
        console.error("error from the database and model",error)
    }
}
exports.editReview = async (restaurant_id,item_id,rating,comment) => {
    try {
        const editReview = await db.query(`UPDATE comments SET rating =$1,comment = $2 WHERE restaurant_id = $3 AND item_id = $4`,[rating,comment,restaurant_id,item_id || null]);
        console.log("Successfully updated review in the database (model)");
    } catch (error) {
        console.error("Error updating review in the database (model):", error);
    }
}