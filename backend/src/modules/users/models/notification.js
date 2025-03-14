const db = require("../../../config/database");

/**
 * Stores the FCM token for a user
 */
exports.storeFcmToken = async (userId, fcmToken) => {
  return db.query("UPDATE users SET fcm_token = $1 WHERE id = $2", [fcmToken, userId]);
};

/**
 * Retrieves the FCM token of a user
 */
exports.getFcmToken = async (userId) => {
  const { rows } = await db.query("SELECT fcm_token FROM users WHERE id = $1", [userId]);
  return rows.length ? rows[0].fcm_token : null;
};

/**
 * Saves a notification in the database
 */
exports.saveNotification = async (userId, title, body) => {
  return db.query(
    `INSERT INTO notifications (user_id, title, body, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *`,
    [userId, title, body]
  );
};

/**
 * Fetches all notifications for a user
 */
exports.getNotifications = async (userId) => {
  const { rows } = await db.query("SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC", [userId]);
  return rows;
};
