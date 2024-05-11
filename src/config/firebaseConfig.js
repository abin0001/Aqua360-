// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import {getFirestore} from "firebase/firestore";
// // // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyBMKPMPAurpUz7rSyNy0UsCwrNI4oG9Nnk",
// //   authDomain: "aqua360-cbce9.firebaseapp.com",
// //   databaseURL: "https://aqua360-cbce9-default-rtdb.firebaseio.com",
// //   projectId: "aqua360-cbce9",
// //   storageBucket: "aqua360-cbce9.appspot.com",
// //   messagingSenderId: "809389634026",
// //   appId: "1:809389634026:web:072a3f2730aeb9cb18c293",
// //   measurementId: "G-TF7YQR0TD6"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // // const analytics = getAnalytics(app);
// // export const db = getFirestore(app);
// // import { initializeApp } from "firebase/app";
// // import { getFirestore } from "firebase/firestore";

// // const firebaseConfig = {
// //       apiKey: "AIzaSyBMKPMPAurpUz7rSyNy0UsCwrNI4oG9Nnk",
// //       authDomain: "aqua360-cbce9.firebaseapp.com",
// //       databaseURL: "https://aqua360-cbce9-default-rtdb.firebaseio.com",
// //       projectId: "aqua360-cbce9",
// //       storageBucket: "aqua360-cbce9.appspot.com",
// //       messagingSenderId: "809389634026",
// //       appId: "1:809389634026:web:072a3f2730aeb9cb18c293",
// //       measurementId: "G-TF7YQR0TD6"
// // };

// // const app = initializeApp(firebaseConfig);
// // export const db = getFirestore(app);

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBMKPMPAurpUz7rSyNy0UsCwrNI4oG9Nnk",
//     authDomain: "aqua360-cbce9.firebaseapp.com",
//           databaseURL: "https://aqua360-cbce9-default-rtdb.firebaseio.com",
//           projectId: "aqua360-cbce9",
//           storageBucket: "aqua360-cbce9.appspot.com",
//           messagingSenderId: "809389634026",
//           appId: "1:809389634026:web:072a3f2730aeb9cb18c293",
//           measurementId: "G-TF7YQR0TD6"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import App from "../App";


const firebaseConfig = {
  apiKey: "AIzaSyBMKPMPAurpUz7rSyNy0UsCwrNI4oG9Nnk",
  authDomain: "aqua360-cbce9.firebaseapp.com",
  projectId: "aqua360-cbce9",
  storageBucket: "aqua360-cbce9.appspot.com",
  messagingSenderId: "809389634026",
  appId: "1:809389634026:web:072a3f2730aeb9cb18c293",
  measurementId: "G-TF7YQR0TD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvoder = new GoogleAuthProvider();

export const db = getFirestore(app);




// import firebase from 'firebase/app';
// import 'firebase/database'; // or 'firebase/firestore' for Firestore

// const firebaseConfig = {
//   // Your Firebase project config
//    apiKey: "AIzaSyBMKPMPAurpUz7rSyNy0UsCwrNI4oG9Nnk",
//   authDomain: "aqua360-cbce9.firebaseapp.com",
//   projectId: "aqua360-cbce9",
//   storageBucket: "aqua360-cbce9.appspot.com",
//   messagingSenderId: "809389634026",
//   appId: "1:809389634026:web:072a3f2730aeb9cb18c293",
//   measurementId: "G-TF7YQR0TD6"
// };

// firebase.initializeApp(firebaseConfig);

// const db = firebase.database(); // Realtime Database

// export default db;
