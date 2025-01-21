// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8_lmZTbFOprjhDOGY3SWKgT0t4GqGg1E",
  authDomain: "reactmyproject-898e1.firebaseapp.com",
  projectId: "reactmyproject-898e1",
  storageBucket: "reactmyproject-898e1.firebasestorage.app",
  messagingSenderId: "100578468531",
  appId: "1:100578468531:web:5e0391f06f811eb01646c6",
  measurementId: "G-72RDJEL37N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db}