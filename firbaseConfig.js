import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA5a4BhIDPteHpUPVrw2j5PUm4cKC3OHlA",
    authDomain: "ecommercefirebase-760f0.firebaseapp.com",
    projectId: "ecommercefirebase-760f0",
    storageBucket: "ecommercefirebase-760f0.appspot.com",
    messagingSenderId: "806795371162",
    appId: "1:806795371162:web:fda7c64bf4319b14183523"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP)

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
