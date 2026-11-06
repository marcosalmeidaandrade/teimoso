importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Configuração do seu Firebase (Exatamente igual ao do index.html)
firebase.initializeApp({
  apiKey: "AIzaSyDlC5iCJ-Ru3Ve5OzrvlNWZCiwKo9ziXjQ",
  authDomain: "teimosoweb.firebaseapp.com",
  projectId: "teimosoweb",
  storageBucket: "teimosoweb.firebasestorage.app",
  messagingSenderId: "90879285758",
  appId: "1:90879285758:web:ef602bfe90c131e0f808af"
});

const messaging = firebase.messaging();

// Fica escutando as mensagens quando o aplicativo estiver FECHADO ou em SEGUNDO PLANO
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png', // Opcional: Caminho para a logo do seu app
    badge: '/logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});