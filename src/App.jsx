import { useState } from "react";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import { Button } from "primereact/button";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
//
const firebaseConfig = {
  apiKey: "AIzaSyBY_35EOBLljUI8K6VXliPFojlZqkiNBww",
  authDomain: "tasktimer-4f038.firebaseapp.com",
  projectId: "tasktimer-4f038",
  storageBucket: "tasktimer-4f038.appspot.com",
  messagingSenderId: "85269641302",
  appId: "1:85269641302:web:b5bb645eb28f67bba523f7",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();
//collection reference
const collectionRef = collection(db, "books");
//get collection data
getDocs(collectionRef).then((snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

function App() {
  const [count, setCount] = useState(0);
  const clickHandle = () => {
    setCount(count + 1);
  };
  return (
    <PrimeReactProvider>
      <Button className="p-button" label="Click me" onClick={clickHandle} />
      <p>Clicked {count} times</p>
    </PrimeReactProvider>
  );
}

export default App;
