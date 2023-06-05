// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnat55EUFC16eYHI5JG5ifttlCcqcXiO8",
  authDomain: "fir-1-fffe4.firebaseapp.com",
  projectId: "fir-1-fffe4",
  storageBucket: "fir-1-fffe4.appspot.com",
  messagingSenderId: "358320674969",
  appId: "1:358320674969:web:8d5d369cf55223b73c4008",
  measurementId: "G-JX0P34LLEP"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)