const restaurant = require("../models/restaurantInfo");

exports.restaurants =async()=>{
    try {
        const restaurant=await restaurant.restaurants();
        console.log("restaurant fetched successfully in the service");
        return restaurant;
    } catch (error) {
        console.error("error in fetching restaurant from RESTAURANTINFO service");
    }
}
exports.restaurantInfo = async(restaurant_id) => {
    try {
        const restaurantInfo = await restaurant.restaurantInfo(restaurant_id);
        console.log("restaurant info fetched successfully in the service");
        return restaurantInfo;
    } catch (error) {
        console.error("error in fetching restaurant info from RESTAURANTINFO service");
    }
}