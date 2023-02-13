// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { Axios } from "axios";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa0ECQInHR3Id2yLGf8QJNBrs15hHjUxU",
  authDomain: "employee-management-3fb82.firebaseapp.com",
  projectId: "employee-management-3fb82",
  storageBucket: "employee-management-3fb82.appspot.com",
  messagingSenderId: "917711668698",
  appId: "1:917711668698:web:2f51f2d42dc1194b416ce3",
  measurementId: "G-N1677MPGX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { Axios, db }