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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;