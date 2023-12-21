// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8KIjYWQ3JeudcDMxtzMGYE-K2NwBUB98",
  authDomain: "priority-pilot-1.firebaseapp.com",
  projectId: "priority-pilot-1",
  storageBucket: "priority-pilot-1.appspot.com",
  messagingSenderId: "487880965876",
  appId: "1:487880965876:web:44a6836bf76c178ea0a8a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app