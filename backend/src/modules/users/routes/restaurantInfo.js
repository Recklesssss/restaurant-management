const express = require("express");
const router = express.Router();
const restaurant = require("../controllers/restaurantInfo");

router.get("/restaurant", restaurant.restaurants);
router.get("/restaurantInfo/:restaurant_id", restaurant.restaurantsInfo);

module.exports = router;
// restaurantInfoRoutes