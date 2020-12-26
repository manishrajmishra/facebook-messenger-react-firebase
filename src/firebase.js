import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC65ZKcR6yU90msOp7K9r9Ix23LDITbeHQ",
  authDomain: "fb-messenger-react-firebase.firebaseapp.com",
  databaseURL: "https://fb-messenger-react-firebase.firebaseio.com",
  projectId: "fb-messenger-react-firebase",
  storageBucket: "fb-messenger-react-firebase.appspot.com",
  messagingSenderId: "990408703584",
  appId: "1:990408703584:web:2e057c8980fdf0dff84d05",
  measurementId: "G-V07TCN5E31"

});

const db = firebaseApp.firestore();

export default db;
