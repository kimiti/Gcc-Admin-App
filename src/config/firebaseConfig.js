import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDM7YfOQ2ZbjtgVvNRLB6s7avYg_DvK-9U",
    authDomain: "gcc-church.firebaseapp.com",
    projectId: "gcc-church",
    storageBucket: "gcc-church.appspot.com",
    messagingSenderId: "942788934999",
    appId: "1:942788934999:web:9aa95889b93c01985b5212"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
