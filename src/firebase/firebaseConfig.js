
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyC7mp1oaE0gGgJ6_ff39f14AUoLfvFVJdk",
  authDomain: "nobossapp-bbfab.firebaseapp.com",
  projectId: "nobossapp-bbfab",
  storageBucket: "nobossapp-bbfab.appspot.com",
  messagingSenderId: "988138806684",
  appId: "1:988138806684:web:da473f6eecf01875e7bc59",
  measurementId: "G-ZCSFSKG59R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProviderAuth = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app)


export { auth, db, storage, googleProviderAuth }; 