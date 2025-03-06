const express = require("express");
const router = express.Router();
const order = require("../controllers/order");

router.post("/ordering", order.ordering);
router.post("/ordered_items", order.ordered_items);
router.get("/orders", order.orders);
router.put("/editOrder", order.editOrder);

module.exports = router;
// Compare this snippet from backend/src/modules/users/routes/order.js: