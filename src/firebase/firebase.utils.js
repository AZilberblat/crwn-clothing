import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA3an9fiqE6GEwHNbDuqGu3VMDMaPGmSOk",
    authDomain: "crwn-db-a2d1f.firebaseapp.com",
    databaseURL: "https://crwn-db-a2d1f.firebaseio.com",
    projectId: "crwn-db-a2d1f",
    storageBucket: "crwn-db-a2d1f.appspot.com",
    messagingSenderId: "600903055184",
    appId: "1:600903055184:web:88a6dc5128a6ecd2c69e55",
    measurementId: "G-TX0HX6SC6K"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
   if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if(!snapShot.exists) {
       const { displayName, email } = userAuth;
       const createdAt = new Date();

       try {
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           })

       } catch (error) {
           console.log('error creating user', error.message);
       }
   }
   
   
  return userRef; 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;