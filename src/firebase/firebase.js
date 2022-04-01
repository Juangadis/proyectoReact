import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC9Toa6bCTmXGnFHrdGJDXWmFaicrLocdM",
  authDomain: "proyecto-react-coderhouse22.firebaseapp.com",
  projectId: "proyecto-react-coderhouse22",
  storageBucket: "proyecto-react-coderhouse22.appspot.com",
  messagingSenderId: "167286779969",
  appId: "1:167286779969:web:dcc4ce423d7ed087d756c0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);