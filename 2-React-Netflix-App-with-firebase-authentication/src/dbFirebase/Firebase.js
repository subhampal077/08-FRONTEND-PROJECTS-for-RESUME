import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcFLXiO0VTy4YJreYQ8kLXERRiICInFRo",
  authDomain: "netflix-app-055.firebaseapp.com",
  projectId: "netflix-app-055",
  storageBucket: "netflix-app-055.appspot.com",
  messagingSenderId: "424534069805",
  appId: "1:424534069805:web:040d8adaa00df5dd61dea4",
  measurementId: "G-1PGXLJKJFW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
