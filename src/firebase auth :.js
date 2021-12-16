// firebase auth :

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMaIZ02LzMyveMfFZIu9cv0lnDYCiXJws",
  authDomain: "clone-3b070.firebaseapp.com",
  projectId: "clone-3b070",
  storageBucket: "clone-3b070.appspot.com",
  messagingSenderId: "617960204774",
  appId: "1:617960204774:web:5091c047f89b71a76f8e27",
  measurementId: "G-MNZD33YH7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);