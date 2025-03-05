const review = require("../services/reviews");

exports.reviewsRestaurantItem = async(req,res)=>{
    try {
        const {restaurant_id,item_id} = req.body;
        const itemReview = review.reviewsRestaurantItem(restaurant_id,item_id)
        res.status(200).json({
            message : "sucessfully sent from controller",
            data : itemReview
        })
        console.log("successfully send data to routes")
    } catch (error) {
        console.error('error from controller',error)
    }
}
exports.reviewsRestaurant = async(req,res)=>{
    try {
        const {restaurant_id} = req.body;
        const resReviews = review.reviewsRestaurant(restaurant_id)
        res.status(200).json({
            message : "data sent",
            data : resReviews
        })
        console.log("successfully send data to routes")
    } catch (error) {
        console.error('error from controller',error)
    }
}
exports.reviewing = async(req,res)=>{
    try {
        const {restaurant_id,item_id,rating,comment,response} = req.body;
        const reviewing = review.reviewing(restaurant_id,item_id,rating,comment,response)
        console.log("successfully updated review to the database from the controller")
        res.status(200)
    } catch (error) {
        console.error("error adding reviews issue from controller",error)
    }
}
exports.editReview = async(req,res)=>{
    try {
        const {restaurant_id,item_id,rating,comment} = req.body;
        const editReview = review.editReview(restaurant_id,item_id,rating,comment)
        console.log("successfully updated review to the database from the controller")
        res.status(200)
    } catch (error) {
        console.error(" error updating from controller",error)
    }
}