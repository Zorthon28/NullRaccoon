// Importa los módulos necesarios de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCT4qh4P8c7iP8eygFws9O1q4Jgszc_ZMI",

  authDomain: "nullraccoon.firebaseapp.com",

  projectId: "nullraccoon",

  storageBucket: "nullraccoon.firebasestorage.app",

  messagingSenderId: "841133567736",

  appId: "1:841133567736:web:1ce6aa59ed30502b86950d",
};

// Inicializa la app
const app = initializeApp(firebaseConfig);

// Exporta los servicios de Firebase para usarlos en tu app
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, googleProvider, db, storage };
