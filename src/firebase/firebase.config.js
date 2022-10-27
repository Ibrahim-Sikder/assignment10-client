// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr_iFDLEtXZbQFoAsZu09VY-jgiMlH70g",
  authDomain: "learning-english-313a4.firebaseapp.com",
  projectId: "learning-english-313a4",
  storageBucket: "learning-english-313a4.appspot.com",
  messagingSenderId: "9413429343",
  appId: "1:9413429343:web:4d9ab2b28d1e66cd02b3ea",
  measurementId: "G-XTTBYKK8G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;