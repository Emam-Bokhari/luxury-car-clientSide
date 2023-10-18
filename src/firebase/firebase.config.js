// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKZDre6FMJ1ONL8lbCY_oLxzbxmXV7C1Y",
  authDomain: "luxury-car-4f537.firebaseapp.com",
  projectId: "luxury-car-4f537",
  storageBucket: "luxury-car-4f537.appspot.com",
  messagingSenderId: "331666605006",
  appId: "1:331666605006:web:3c499a4e57c4444e65619f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth