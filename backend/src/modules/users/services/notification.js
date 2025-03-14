const admin = require("firebase-admin");
const notificationModel = require("../models/notificationModel");

// Initialize Firebase Admin SDK
const serviceAccount = require("../../config/firebase-service-account.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

/**
 * Stores the FCM token for a user
 */
exports.saveFcmToken = async (userId, fcmToken) => {
  return notificationModel.storeFcmToken(userId, fcmToken);
};

/**
 * Sends a push notification
 */
exports.sendNotification = async (userId, title, body) => {
  try {
    const fcmToken = await notificationModel.getFcmToken(userId);
    if (!fcmToken) throw new Error("User FCM token not found");

    // Send notification to Firebase
    const message = {
      token: fcmToken,
      notification: { title, body },
    };
    await admin.messaging().send(message);

    // Save notification in the database
    return notificationModel.saveNotification(userId, title, body);
  } catch (error) {
    throw new Error(`Error sending notification: ${error.message}`);
  }
};

/**
 * Retrieves user notifications
 */
exports.getUserNotifications = async (userId) => {
  return notificationModel.getNotifications(userId);
};
