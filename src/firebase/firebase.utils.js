import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getFirestore, getDoc, serverTimestamp, setDoc } from '@firebase/firestore'
import '@firebase/firestore'


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
const db = getFirestore(app);

// References
// const userColRef = collection(db, 'users');

// create user profile
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  // Reference
  const userDocRef = doc(db, `users/${userAuth.uid}`);

  // get the signed in user
  const snapshot = await getDoc(userDocRef)

  // if the user does not exist, add them to the users collection
  if(!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = serverTimestamp();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalData})
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }
  
  return userDocRef;
} 
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return(
    signInWithPopup(auth, provider)
  );
}