const customize = require("../controllers/customization")
const express = require("express")
const router = express.Router()

router.put("/update_phone",customize.updatePhone);
router.put("/update_name",customize.updateName);
router.put("/update_profile",customize.updateProfile)
router.put("update_address",customize.updateAddress);

module.exports = router ;