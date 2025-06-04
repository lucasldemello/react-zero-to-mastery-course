import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBegH8qUt7Zy-7Lp89PcQPHV0v3Rr9XYB8",
  authDomain: "miniblog-35b7e.firebaseapp.com",
  projectId: "miniblog-35b7e",
  storageBucket: "miniblog-35b7e.firebasestorage.app",
  messagingSenderId: "625221959157",
  appId: "1:625221959157:web:e04afac838123e85eff4bc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
