// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS6jxKeC4UnyApIfjJbwAaLxdNeNjdgdQ",
  authDomain: "clone1-375c8.firebaseapp.com",
  projectId: "clone1-375c8",
  storageBucket: "clone1-375c8.appspot.com",
  messagingSenderId: "1073039260606",
  appId: "1:1073039260606:web:94d88dde4f2e61fcbd17ef",
  measurementId: "G-J7R7GNG4BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
