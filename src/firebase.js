import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI16kid8yYVUF7M5TZAwMDxpMrmxFQKKs",
  authDomain: "allinone-5743a.firebaseapp.com",
  projectId: "allinone-5743a",
  storageBucket: "allinone-5743a.appspot.com",
  messagingSenderId: "25716598966",
  appId: "1:25716598966:web:26d16b684aa1af6a7a5e17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
