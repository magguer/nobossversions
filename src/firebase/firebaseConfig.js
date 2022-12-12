
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBh6eFYSd4Ij7uKSrj0IxYDH5xHpm2ruiM",
    authDomain: "rvf-noboss.firebaseapp.com",
    projectId: "rvf-noboss",
    storageBucket: "rvf-noboss.appspot.com",
    messagingSenderId: "124624705170",
    appId: "1:124624705170:web:c4e54784e731195f88f84b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 