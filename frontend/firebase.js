import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBCYFZNADt4q67FZNWldP0dSYdGYf_dnOA",
  authDomain: "notification-45f74.firebaseapp.com",
  projectId: "notification-45f74",
  storageBucket: "notification-45f74.appspot.com",
  messagingSenderId: "679335166898",
  appId: "1:679335166898:web:0eb7a423c80178fddcdaab"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestNotificationPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: "YOUR_VAPID_KEY_HERE",
    });
    if (token) {
      console.log("FCM Token:", token);
      // Send the token to the backend
      await fetch("/api/store-fcm-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};

// Listen for foreground messages
onMessage(messaging, (payload) => {
  console.log("Message received: ", payload);
  alert(payload.notification.body);
});
