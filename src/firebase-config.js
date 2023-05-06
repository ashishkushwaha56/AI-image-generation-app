// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoKv_I7hbWQZ_vPI8I8aoMmBniQqeOseU",
    authDomain: "ai-image-generation-app.firebaseapp.com",
    projectId: "ai-image-generation-app",
    storageBucket: "ai-image-generation-app.appspot.com",
    messagingSenderId: "589293464891",
    appId: "1:589293464891:web:cd51516a936a7f2e4b1b1e",
    measurementId: "G-W1S8QHVG8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);
const API_TOKEN = "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";

export {Auth,Provider,db,storage,API_TOKEN};