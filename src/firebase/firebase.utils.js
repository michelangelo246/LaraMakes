import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBuNbVDUkMFaPU4G367ZmqjPePBOCoDjmk",
  authDomain: "laramakesbr.firebaseapp.com",
  databaseURL: "https://laramakesbr.firebaseio.com",
  projectId: "laramakesbr",
  storageBucket: "laramakesbr.appspot.com",
  messagingSenderId: "43967303608",
  appId: "1:43967303608:web:1cbd959e2b9c704477494d",
  measurementId: "G-XV5WM2B11F"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
