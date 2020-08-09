import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD_KUn4hDD-0GhEJeLPwEjLbeeCHiuroWw",
    authDomain: "twitter-clone-83b2d.firebaseapp.com",
    databaseURL: "https://twitter-clone-83b2d.firebaseio.com",
    projectId: "twitter-clone-83b2d",
    storageBucket: "twitter-clone-83b2d.appspot.com",
    messagingSenderId: "326552020757",
    appId: "1:326552020757:web:eff71d10966baaf2e4eb1c",
    measurementId: "G-GZQ6FS8PEV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
