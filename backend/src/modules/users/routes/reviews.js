const express = require("express");
const router = express.Router();
const review = require("../controllers/reviews");

router.get("/reviewsRestaurantItem", review.reviewsRestaurantItem);
router.get("/reviewsRestaurant", review.reviewsRestaurant);
router.post("/reviewing", review.reviewing);
router.put("/editReview", review.editReview);