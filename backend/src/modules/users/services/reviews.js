const reviews = require("../models/reviews");

exports.reviewsRestaurantItem = async (restaurant_id,item_id) => {
    try {
        const reviews = await reviews.reviewsRestaurantItem(restaurant_id,item_id);
        console.log(`successfully retrievd comments from database from model`)
        return reviews
    } catch (error) {
        console.error("error from the database and service",error)
    }
}
exports.reviewsRestaurant = async (restaurant_id) => {
    try {
        const resReviews = await reviews.reviewsRestaurant(restaurant_id);
        console.log('sucessfully retrieved form the database on model')
        return resReviews
    } catch (error) {
        console.error("error from service",error)
    }
}
exports.reviewing = async (restaurant_id,item_id,rating,comment,response) => {
    try {
        const reviewing = await reviews.reviewing(restaurant_id,item_id,rating,comment,response);
        console.log('successfully added review to the database from the service')
    } catch (error) {
        console.error("error from service",error)
    }
};
exports.editReview = async (restaurant_id,item_id,rating,comment) => {
    try {
        const editReview = await reviews.editReview(restaurant_id,item_id,rating,comment);
        console.log("Successfully updated review in the database (service)");
    } catch (error) {
        console.error("Error updating review in the (service):", error);
    }
}