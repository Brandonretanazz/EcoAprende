// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "Apikey",
  authDomain: "ecoaprende-7640a.firebaseapp.com",
  projectId: "ecoaprende-7640a",
  storageBucket: "ecoaprende-7640a.appspot.com",
  messagingSenderId: "884869259260",
  appId: "1:884869259260:web:23fd0f426683e42465dc79",
  measurementId: "G-98ZR659HL4"
};


const app = initializeApp(firebaseConfig);


<<<<<<< Updated upstream
export { auth };
=======
export const firestore = getFirestore(app);
export const auth = getAuth(app);
>>>>>>> Stashed changes
