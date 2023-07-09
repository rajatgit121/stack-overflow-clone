// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAdmDWLCTGGuGbpToGa3YKlbEytA63XAc",
  authDomain: "stack-overflow-main.firebaseapp.com",
  projectId: "stack-overflow-main",
  storageBucket: "stack-overflow-main.appspot.com",
  messagingSenderId: "389567815050",
  appId: "1:389567815050:web:99212f215936f910e27c73",
  measurementId: "G-1XP22EKVMY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
