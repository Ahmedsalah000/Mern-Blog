// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-a2405.firebaseapp.com",
    projectId: "mern-blog-a2405",
    storageBucket: "mern-blog-a2405.appspot.com",
    messagingSenderId: "237363930954",
    appId: "1:237363930954:web:6699e7298115bb732ac3b3",
    measurementId: "G-G14X3MPZTL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);