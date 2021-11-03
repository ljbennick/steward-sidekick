// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCzXZBEBflzpClHh0XXdpQdiQeR67AasI",
  authDomain: "stewardsidekick.firebaseapp.com",
  projectId: "stewardsidekick",
  storageBucket: "stewardsidekick.appspot.com",
  messagingSenderId: "394597518930",
  appId: "1:394597518930:web:f79a42fd0d3e7b2683198b",
  measurementId: "G-27286GXX3C",
};

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
