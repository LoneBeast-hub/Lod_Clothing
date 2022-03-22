import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA8zOClzhdQlwVMkXsw_S0LUd4isF3ziJg",
  authDomain: "lod-clothing-db.firebaseapp.com",
  projectId: "lod-clothing-db",
  storageBucket: "lod-clothing-db.appspot.com",
  messagingSenderId: "306971258675",
  appId: "1:306971258675:web:0693d00e3e8d8c5f671846",
  measurementId: "G-1DBKT1WHNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return(
    signInWithPopup(auth, provider)
  );
}