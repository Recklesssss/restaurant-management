importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBCYFZNADt4q67FZNWldP0dSYdGYf_dnOA",
  authDomain: "notification-45f74.firebaseapp.com",
  projectId: "notification-45f74",
  storageBucket: "notification-45f74.appspot.com",
  messagingSenderId: "679335166898",
  appId: "1:679335166898:web:0eb7a423c80178fddcdaab"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/logo.png",
  });
});
