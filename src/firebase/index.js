// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr4hEgV5nuYEkmCmHUYbAuQz1rCduPs_Y",
  authDomain: "pinkistore.firebaseapp.com",
  projectId: "pinkistore",
  storageBucket: "pinkistore.appspot.com",
  messagingSenderId: "672956595731",
  appId: "1:672956595731:web:8a1587377069d49f9bc9e6",
  measurementId: "G-WHYKFDPQ59",
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
