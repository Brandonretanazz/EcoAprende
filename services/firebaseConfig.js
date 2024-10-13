// services/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB65yUQObU78heky9xlCyZ9UTDygO5yBiM",
  authDomain: "ecoaprende-d7127.firebaseapp.com",
  projectId: "ecoaprende-d7127",
  storageBucket: "ecoaprende-d7127.appspot.com",
  messagingSenderId: "15640618422",
  appId: "1:15640618422:web:39277260cb8ef0f0bd4d17",
  measurementId: "G-98ZR659HL4"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// Inicializa y exporta Auth
const auth = getAuth(app);

export { auth, firestore};
