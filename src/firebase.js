import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDUe74FxI3Tn-hKCTDHmbpflEHfOg9zXC0",
    authDomain: "todo-2024d.firebaseapp.com",
    projectId: "todo-2024d",
    storageBucket: "todo-2024d.appspot.com",
    messagingSenderId: "16251777216",
    appId: "1:16251777216:web:7c32909fbd9a7919167d25",
    measurementId: "G-0JWEGE5RDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

// Exporting the necessary Firebase modules
export { auth, onAuthStateChanged, provider, signInWithPopup, storage, signOut};
export default db;
