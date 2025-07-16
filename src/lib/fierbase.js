// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsPIPhyt4ni-iku8lcZILHrj0s2QHTtS8",
  authDomain: "umkm-7ce4c.firebaseapp.com",
  projectId: "umkm-7ce4c",
  storageBucket: "umkm-7ce4c.firebasestorage.app",
  messagingSenderId: "320605916097",
  appId: "1:320605916097:web:620f275af3096f3b697d40",
  measurementId: "G-BZQXMJC64R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);