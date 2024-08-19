import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

const firebaseConfig = {
  apiKey: "Apikey",
  authDomain: "ecoaprende-7640a.firebaseapp.com",
  projectId: "ecoaprende-7640a",
  storageBucket: "ecoaprende-7640a.appspot.com",
  messagingSenderId: "884869259260",
  appId: "1:884869259260:web:23fd0f426683e42465dc79",
  measurementId: "G-98ZR659HL4"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Configura la persistencia de estado de autenticación con AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage) // Usa AsyncStorage para persistencia
});

export { auth };
