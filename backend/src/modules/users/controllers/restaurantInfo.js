const restaurant = require("../services/restaurantInfo");

exports.restaurants = async (req, res) => {
    try {
        const restaurantData = await restaurant.restaurants();
        console.log("restaurant fetched successfully in the controller");
        res.status(200).json({
            message: "Restaurant fetched successfully",
            data: restaurantData
        });
    } catch (error) {
        console.error("error in fetching restaurant from RESTAURANT controller");
    }
}
exports.restaurantsInfo = async (req, res) => {
    try {
        const { restaurant_id } = req.params;
        const restaurantData = await restaurant.restaurants(restaurant_id);
        console.log("restaurant info fetched successfully in the controller");
        res.status(200).json({
            message: "Restaurant fetched successfully",
            data: restaurantData
        });
    } catch (error) {
        console.error("error in fetching restaurant from RESTAURANTINFO controller");
    }
}