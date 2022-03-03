
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3pxKX8giHBYNfIR6BCDkAFybp4kb5Q2g",
  authDomain: "acc---the-printshop.firebaseapp.com",
  projectId: "acc---the-printshop",
  storageBucket: "acc---the-printshop.appspot.com",
  messagingSenderId: "87606147099",
  appId: "1:87606147099:web:fa7f93617bcc251abd60be"
};

import {
    getFirestore,
    collection,
    query,
    orderBy,
    onSnapshot,
    addDoc,
    serverTimestamp
} from 'firebase/firestore'




// INIT FIREBASE
const app = initializeApp(firebaseConfig);


// INIT SERVICES
const db = getFirestore()


// COLLECTIONS REF
const colRefOrder = collection(db, 'orders')


// QUERIES
const q = query(colRefOrder, orderBy('createdAt'))


// GET REAL TIME COLLECTION DATA
onSnapshot(q, (snapshot) => {
    let orders = []
    snapshot.docs.forEach((doc) => {
        orders.push({...doc.data(), id: doc.id})
    })
    console.log(orders)
})


// ADDING DOCUMENTS
const addOrderForm = document.querySelector('.nameAndEmail')
addOrderForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRefOrder, {
        name: addOrderForm.name.value,
        email: addOrderForm.email.value,
        createdAt: serverTimestamp
    })
        .then(() => {
            addOrderForm.reset()
        })
})