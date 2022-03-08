
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

import { getStorage } from 'firebase/storage'




// INIT FIREBASE
export const app = initializeApp(firebaseConfig);


// INIT SERVICES
export const db = getFirestore()


// COLLECTIONS REF
export const colRefOrder = collection(db, 'orders')


// QUERIES
export const q = query(colRefOrder, orderBy('createdAt'))


// GET REAL TIME COLLECTION DATA
onSnapshot(q, (snapshot) => {
    let orders = []
    snapshot.docs.forEach((doc) => {
        orders.push({ ...doc.data(), id: doc.id })
    })
    // console.log(orders)
})


// ADDING DOCUMENTS  < --- USE THE HANDLECHANGE METHOD IN REACT AND THIS ONE FOR HTML
// const form = document.getElementById('form')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     addDoc(colRefOrder, {
//         name: form.name.value,
//         email: form.email.value,
//         createdAt: serverTimestamp()
//     })
//         .then(() => {
//             form.reset()
//         })
// })

// FIREBASE CLOUD STORAGE
export const storage = getStorage(app)

export default { colRefOrder }