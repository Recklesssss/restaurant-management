const express = require('express');
const verifyToken = require("../../../middleware/authMiddleware");
const authorizeRoles = require("../../../middleware/roleMiddleware");
const router = express.Router();

router.get("/customer", verifyToken, authorizeRoles("user","admin","owner","deliverer","manager"), (req, res) => { 
    res.status(200).json({
        message: "You are accessing the customer route",
    });
})

module.exports = router;
// customerRoutes