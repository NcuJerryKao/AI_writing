// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyCPjTAMcejky-ZP-J4cMMutnWz3HTkwSU8",
    authDomain: "social-cool-cd332.firebaseapp.com",
    projectId: "social-cool-cd332",
    storageBucket: "social-cool-cd332.appspot.com",
    messagingSenderId: "575973393174",
    appId: "1:575973393174:web:494d97edc0b13d772c8637"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;