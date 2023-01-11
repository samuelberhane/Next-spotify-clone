import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: "spotify-clone-9a337.firebaseapp.com",
  projectId: "spotify-clone-9a337",
  storageBucket: "spotify-clone-9a337.appspot.com",
  messagingSenderId: "1069174523475",
  appId: "1:1069174523475:web:38c6b560f817700a51a8a6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth();
export const db = getFirestore();

export default app;
