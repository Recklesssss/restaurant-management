const express = require('express');
const router = express.Router();
const menu = require("../controllers/menu");

router.get("/menus",menu.menu);

module.exports = router;
// menuRoutes