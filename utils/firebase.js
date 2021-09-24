import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCF9qEEkHlWs-uxQ-e_Qv50nhcbYlRvpUo",
    authDomain: "jabarcodingcamp-a763c.firebaseapp.com",
    projectId: "jabarcodingcamp-a763c",
    storageBucket: "jabarcodingcamp-a763c.appspot.com",
    messagingSenderId: "656204561070",
    appId: "1:656204561070:web:7b610b0bde9863f1df4b3f",
    measurementId: "G-N6GK7YDB75"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export const db = firebase.firestore()

db.settings({
    timestampsInSnapshots: true
})

export default firebase;