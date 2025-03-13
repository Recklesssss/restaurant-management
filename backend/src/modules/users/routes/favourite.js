const favourite = require("../controllers/favourite");
const express = require("express")
const router = express.Router();

router.get("/favouriteRestaurant", favourite.favouriteRestaurant)
router.get("favouriteMenu", favourite.favouriteMenu)

module.exports = router;