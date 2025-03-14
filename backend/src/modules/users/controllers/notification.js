const notificationService = require("../services/notificationService");

/**
 * Stores the FCM token for a user
 */
exports.registerFcmToken = async (req, res) => {
  try {
    const { userId, fcmToken } = req.body;
    await notificationService.saveFcmToken(userId, fcmToken);
    res.json({ success: true, message: "FCM token registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Sends a notification to a user
 */
exports.sendPushNotification = async (req, res) => {
  try {
    const { userId, title, body } = req.body;
    await notificationService.sendNotification(userId, title, body);
    res.json({ success: true, message: "Notification sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Retrieves user notifications
 */
exports.getUserNotifications = async (req, res) => {
  try {
    const { userId } = req.params;
    const notifications = await notificationService.getUserNotifications(userId);
    res.json({ success: true, notifications });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
