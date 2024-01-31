// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdgmDl9kaPnEuxXew6iRdpLstl_RhIcZQ",
  authDomain: "reactauthlearn.firebaseapp.com",
  projectId: "reactauthlearn",
  storageBucket: "reactauthlearn.appspot.com",
  messagingSenderId: "227609991057",
  appId: "1:227609991057:web:c4590485ba68f5d169ac30",
  measurementId: "G-NTXYKCPQ68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
