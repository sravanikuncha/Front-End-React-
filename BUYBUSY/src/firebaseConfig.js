import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWuJJ2-4thXxsRJER1un-SrAlPwS8HG5w",
  authDomain: "buybusy-1-ba7c6.firebaseapp.com",
  projectId: "buybusy-1-ba7c6",
  storageBucket: "buybusy-1-ba7c6.firebasestorage.app",
  messagingSenderId: "71793337709",
  appId: "1:71793337709:web:d3fab9c8af404877d12664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const busybuydb = getFirestore(app);