// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6f3eb.firebaseapp.com",
  projectId: "mern-estate-6f3eb",
  storageBucket: "mern-estate-6f3eb.appspot.com",
  messagingSenderId: "799754595106",
  appId: "1:799754595106:web:5f96a298c15ba616e2937b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);