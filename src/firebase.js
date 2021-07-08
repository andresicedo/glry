import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCl8oS3xWfFxoPNXfLaVl0SCS0bHhdtG1E",
    authDomain: "glry-52b59.firebaseapp.com",
    projectId: "glry-52b59",
    storageBucket: "glry-52b59.appspot.com",
    messagingSenderId: "107265106138",
    appId: "1:107265106138:web:380e1f1fdf2465c25f85e3",
    measurementId: "G-21S8N4V6NE" 
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };