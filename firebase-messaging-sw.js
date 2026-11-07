importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Configuração oficial do Firebase do Teimoso F.C.C.
const firebaseConfig = {
  apiKey: "AIzaSyDlC5iCJ-Ru3Ve5OzrvlNWZCiwKo9ziXjQ",
  authDomain: "teimosoweb.firebaseapp.com",
  projectId: "teimosoweb",
  storageBucket: "teimosoweb.firebasestorage.app",
  messagingSenderId: "90879285758",
  appId: "1:90879285758:web:ef602bfe90c131e0f808af"
};

// Inicializa o Firebase no Background (Segundo Plano)
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Fica escutando as mensagens quando o aplicativo estiver FECHADO ou em outra aba
messaging.onBackgroundMessage((payload) => {
  console.log('Mensagem recebida em segundo plano: ', payload);
  
  const notificationTitle = payload.notification.title || 'Teimoso F.C.C.';
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'logo.png', // Certifique-se de que a logo.png está na mesma pasta do seu site
    badge: 'logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});