import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

// realiza uma consulta pelo usuário no BD
// se existir, retorna referencia ao documento, senão, cria um e retorna uma referencia ao documento
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth)
    return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch (err) {
      console.log("error creating user", err);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(document => {
    const { title, items } = document.data();

    return {
      routeName: encodeURI(title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")),
      id: document.id,
      title,
      items
    };
  });

  return transformedCollections.reduce((acumulator, collection) => {
    acumulator[collection.title.toLowerCase()] = collection;
    return acumulator;
  }, {});
};

export const getCurrentUser = () => {
  // queremos promessa, pois auth...() é assincrono e não queremos código bloqueante com await
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth)
    }, reject) // mesmo que: error => reject(error)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
