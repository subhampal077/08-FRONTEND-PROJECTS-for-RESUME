import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiZWhlx167YztefN2Ld_BW4__xAkEaFww",
  authDomain: "messenger-app055.firebaseapp.com",
  projectId: "messenger-app055",
  storageBucket: "messenger-app055.appspot.com",
  messagingSenderId: "988138186118",
  appId: "1:988138186118:web:dc653d2377e222f1a9b807",
  measurementId: "G-1670ENP6WP",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app); // Firestore

export default db;
