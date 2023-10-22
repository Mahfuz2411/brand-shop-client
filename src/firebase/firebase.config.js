import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNY-y3Bzbeu-5bhOrNlGrXJXkHSw7QkIo",
  authDomain: "brand-shop-55732.firebaseapp.com",
  projectId: "brand-shop-55732",
  storageBucket: "brand-shop-55732.appspot.com",
  messagingSenderId: "185487028603",
  appId: "1:185487028603:web:6d7c5546caa21ba05b8dde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;
