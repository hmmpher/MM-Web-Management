// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmEuz6kGxNM0tRAnX5HJpEfmEXNtBNNjs",
  authDomain: "web-management-mm.firebaseapp.com",
  projectId: "web-management-mm",
  storageBucket: "web-management-mm.appspot.com",
  messagingSenderId: "453422480067",
  appId: "1:453422480067:web:a246d8f035a5948b9e0076",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Correctly get Firestore

export { db }; // Ensure db is correctly exported
