
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB7RxO-c0YsjOVbZeS-Lb-SwujuWSd_zkI",
    authDomain: "todo-app-cp-a0baf.firebaseapp.com",
    projectId: "todo-app-cp-a0baf",
    storageBucket: "todo-app-cp-a0baf.appspot.com",
    messagingSenderId: "423108170164",
    appId: "1:423108170164:web:688c0d1fe65e527c5a62e1",
    measurementId: "G-VDB53Q3TF3"
  });

  const db = firebaseApp.firestore();


  export default db;