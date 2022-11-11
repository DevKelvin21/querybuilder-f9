// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcFJWDEjBMcM0nOCQqrdD8oTY4bmXuiDk",
  authDomain: "querybuilder-f9.firebaseapp.com",
  projectId: "querybuilder-f9",
  storageBucket: "querybuilder-f9.appspot.com",
  messagingSenderId: "242073373137",
  appId: "1:242073373137:web:fdedc1b0467cb412fb38f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const getData = async (idDocument) => {
  const data = [];
  try {
    const queryRef = doc(db, "queries", idDocument);
    const docRef = await getDoc(queryRef);

    if (!docRef.exists || !docRef.data()) {
      data.push("No such document!");
    } else {
      data.push(docRef.data());
    }
  } catch (error) {
    data.push("No such document!");
    // throw new Error(error);
  }

  return data;
};

export default getData;
