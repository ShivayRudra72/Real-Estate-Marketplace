// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyAjhyrBJmhTc8rfVu-BS0TuryhFiqM7MdE",
  authDomain: "estate-66e24.firebaseapp.com",
  projectId: "estate-66e24",
  storageBucket: "estate-66e24.firebasestorage.app",
  messagingSenderId: "446971155986",
  appId: "1:446971155986:web:937b3eae776a64598aeacb",
  measurementId: "G-K37GW9WQNK"
};

// const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);