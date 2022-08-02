import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZpV8MrYkS6aOE4z-p4Y4KkYI3GUMmDUw",
    authDomain: "disney-clone-3c224.firebaseapp.com",
    projectId: "disney-clone-3c224",
    storageBucket: "disney-clone-3c224.appspot.com",
    messagingSenderId: "643331329332",
    appId: "1:643331329332:web:dcead8cffa513a62e4a961",
    measurementId: "G-XT3FNPM0E1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;