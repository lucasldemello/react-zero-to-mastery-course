import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "miniblog-35b7e.firebaseapp.com",
  projectId: "miniblog-35b7e",
  storageBucket: "miniblog-35b7e.firebasestorage.app",
  messagingSenderId: "625221959157",
  appId: "1:625221959157:web:e04afac838123e85eff4bc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
