// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEqmkVDytFy9IKz-RDUS7l8K8H_CBTeCM",
  authDomain: "coffee-store-2-2f660.firebaseapp.com",
  projectId: "coffee-store-2-2f660",
  storageBucket: "coffee-store-2-2f660.firebasestorage.app",
  messagingSenderId: "376531394856",
  appId: "1:376531394856:web:5e70ae60e82d34942ef01d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);