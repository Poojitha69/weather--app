// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPfMxQsLSDlgW5UuEekEMh7wEhdLR7axs",
  authDomain: "weather-83940.firebaseapp.com",
  projectId: "weather-83940",
  storageBucket: "weather-83940.firebasestorage.app",
  messagingSenderId: "991676279661",
  appId: "1:991676279661:web:57976aa9665055d3790864",
  measurementId: "G-7J02Z9WG3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth service
const auth = getAuth(app);

// Create Google provider instance
const provider = new GoogleAuthProvider();

// Function to trigger Google Sign-In popup
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { auth };
