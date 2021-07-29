import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwibixVmmgT0ehBBN3VGSZ9biwAZKXMpc",
  authDomain: "ecommerce-next-tailwind.firebaseapp.com",
  projectId: "ecommerce-next-tailwind",
  storageBucket: "ecommerce-next-tailwind.appspot.com",
  messagingSenderId: "433778320447",
  appId: "1:433778320447:web:5502fee7205688cba5848a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
