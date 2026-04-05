// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXhMAu4EVWbzZUuZXVSKuap_ilS4vTgsw",
    authDomain: "it4healthmbeiu23014.firebaseapp.com",
    projectId: "it4healthmbeiu23014",
    storageBucket: "it4healthmbeiu23014.firebasestorage.app",
    messagingSenderId: "1066099109265",
    appId: "1:1066099109265:web:4b9c5cb2160738809b7e30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;