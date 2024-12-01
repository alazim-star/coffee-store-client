// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9iOH6AjMevDiD15d2isGkURl4ZoIe3H8",
  authDomain: "coffee-store-59ba1.firebaseapp.com",
  projectId: "coffee-store-59ba1",
  storageBucket: "coffee-store-59ba1.firebasestorage.app",
  messagingSenderId: "195077524114",
  appId: "1:195077524114:web:23cc61b811c91c24f7f44b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);
