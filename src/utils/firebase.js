// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { GoogleAuthProvider , getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "loginforlmsai.firebaseapp.com",
  projectId: "loginforlmsai",
  storageBucket: "loginforlmsai.firebasestorage.app",
  messagingSenderId: "170361867467",
  appId: "1:170361867467:web:88365f06ccf04968de5f4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// also add auth and provider

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export{auth , provider}