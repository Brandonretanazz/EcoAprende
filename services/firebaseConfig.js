// services/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbOiuflFpJCILw69wKeJM9Ob4S1J6kdAY",
  authDomain: "ecoaprende1.firebaseapp.com",
  projectId: "ecoaprende1",
  storageBucket: "ecoaprende1.appspot.com",
  messagingSenderId: "17966241377",
  appId: "1:17966241377:web:1ca167dc21e537d91ffc20"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// Inicializa y exporta Auth
const auth = getAuth(app);

export { auth, firestore};
