// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8NHhbf8ROmZjv_NfzG094t9XNZOMfwGU',
  authDomain: 'insta2-87753.firebaseapp.com',
  projectId: 'insta2-87753',
  storageBucket: 'insta2-87753.appspot.com',
  messagingSenderId: '357009177408',
  appId: '1:357009177408:web:22e566a728053e97bad8a5',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
