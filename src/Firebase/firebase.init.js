// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzi0vgAJMj45pbTTScpTPxA1bT4YIAzA4",
  authDomain: "coffee-store-30849.firebaseapp.com",
  projectId: "coffee-store-30849",
  storageBucket: "coffee-store-30849.firebasestorage.app",
  messagingSenderId: "775559520380",
  appId: "1:775559520380:web:68eac795b71c4ec088a9f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);