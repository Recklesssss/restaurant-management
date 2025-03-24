const delivery = require("../controllers/trackorder");
const express = require("express");
const router = express.Router();

router.get("/getDeliveryProgress",delivery.getDeliveryProgress);
router.put("/updateDeliveryProgress",delivery.updateDeliveryProgress);

module.exports = router;