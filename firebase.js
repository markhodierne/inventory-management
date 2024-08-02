// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc2zXDW4L8j5ti4vr9pEz5RGHk-jDI0qM",
  authDomain: "inventory-management-88da5.firebaseapp.com",
  projectId: "inventory-management-88da5",
  storageBucket: "inventory-management-88da5.appspot.com",
  messagingSenderId: "671601766429",
  appId: "1:671601766429:web:886954e8ed0c89d03bd6f4",
  measurementId: "G-P1PFJH0MZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };