import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyDNw_UuyIzk8df479lScySv9h_RaJQ-XKY",
    authDomain: "shopjs-db.firebaseapp.com",
    databaseURL: "https://shopjs-db.firebaseio.com",
    projectId: "shopjs-db",
    storageBucket: "shopjs-db.appspot.com",
    messagingSenderId: "256195160041",
    appId: "1:256195160041:web:2b12f69ed9cd35a709cd78",
    measurementId: "G-SRQQJNC2KR"
};

firebase.initializeApp(Config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef =firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection('users');

    const snapShot = await userRef.get();
    const collectionSnapshot = await collectionRef.get();
    console.log(collectionSnapshot);

    if (!snapShot.exists) {
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
            console.log('Error creating user: ', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc(obj.title);
        console.log(newDocRef);
    });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase;