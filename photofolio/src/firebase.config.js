// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgZ75oSzPUiem_VYDWyGMw5it4CYflCuM",
  authDomain: "photofolio-181e3.firebaseapp.com",
  projectId: "photofolio-181e3",
  storageBucket: "photofolio-181e3.firebasestorage.app",
  messagingSenderId: "624371980960",
  appId: "1:624371980960:web:50eaa235b0b6fe1ff347c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}