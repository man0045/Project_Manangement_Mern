// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg_voSquRouPQrPNxx04X_wK_peZpQaVw",
  authDomain: "projex-db6e3.firebaseapp.com",
  projectId: "projex-db6e3",
  storageBucket: "projex-db6e3.appspot.com",
  messagingSenderId: "675785955860",
  appId: "1:675785955860:web:d64c4b99dabd8d5198e501",
  measurementId: "G-Z3K3QCV8LH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;