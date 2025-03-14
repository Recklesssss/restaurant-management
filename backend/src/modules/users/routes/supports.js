const support = require("../controllers/supports")
const express = require("express")
const router = express.Router()

router.post("/insert_support",support.insertSupport);
router.get("/get_support",support.getSupport);
router.delete("/delete_supports",support.deleteSupport);
router.put("/update_supports",support.updateSupport);

module.exports = router ; 