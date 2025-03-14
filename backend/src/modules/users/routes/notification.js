const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notification");

router.post("/register-fcm", notificationController.registerFcmToken);
router.post("/send-notification", notificationController.sendPushNotification);
router.get("/notifications/:userId", notificationController.getUserNotifications);

module.exports = router;
