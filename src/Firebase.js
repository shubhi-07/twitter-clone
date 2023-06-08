import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCz18bjmIjbbihBm_2QfU783jVsCMPAMwM",
  authDomain: "twitter-846fe.firebaseapp.com",
  projectId: "twitter-846fe",
  storageBucket: "twitter-846fe.appspot.com",
  messagingSenderId: "666554112265",
  appId: "1:666554112265:web:d697911fa3ea3ea1ac5bd8",
  measurementId: "G-QZ3CS5WT7V"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;
 /*add real time database with firebase 
 
 Major reason to firebase is less number of code than express.js*/




