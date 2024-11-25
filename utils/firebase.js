// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgNhlLkGMMn-Tcm5i0i_Y3MJYB08hLRug",
  authDomain: "luxuromart.firebaseapp.com",
  projectId: "luxuromart",
  storageBucket: "luxuromart.firebasestorage.app",
  messagingSenderId: "905187569108",
  appId: "1:905187569108:web:f327eaf2920b440f137a41",
  measurementId: "G-HGJPLRG0RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);