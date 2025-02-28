import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeRmhfKmprJGVTY8B8VQl-ZkVwMm7sCO4",
  authDomain: "linkedin-app-055.firebaseapp.com",
  projectId: "linkedin-app-055",
  storageBucket: "linkedin-app-055.firebasestorage.app",
  messagingSenderId: "759594032474",
  appId: "1:759594032474:web:0066b2f755126c181b2763",
  measurementId: "G-ENL9PMCRVZ",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
