import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { doc, getFirestore, getDoc, serverTimestamp, collection, setDoc, writeBatch } from '@firebase/firestore'
import '@firebase/firestore';


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
export const db = getFirestore(app);
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

// Programmatically add our shop data to our firebase db
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  // Create the collection with collectionKey value
  const collectionRef = collection(db, collectionKey);
  console.log(collectionRef);

  // continue from here
  const batch = writeBatch(db);
  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit()
}

// modify the collections snapshot gotten from our firebase collections
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return({
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    });
  })

  // reduce the transformedCollection array to an object with each title value as each property value
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

export const googleProvider = new GoogleAuthProvider();

// get currentUser on authStateChange
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}