
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
    serverTimestamp,
    getDocs
} from 'firebase/firestore'

import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { useEffect } from "react";


// INIT FIREBASE
export const app = initializeApp(firebaseConfig);


// INIT SERVICES
export const db = getFirestore()


// FIREBASE CLOUD STORAGE
export const storage = getStorage(app)



// COLLECTIONS REF
export const colRefOrder = collection(db, 'orders')
export const colRefPaper = collection(db, 'ordersPaper')
export const colRefFraming = collection(db, 'ordersFraming')
export const colRefAluminum = collection(db, 'ordersAluminum')
export const colMessages = collection(db, 'messages')

export const gsAluminumRef = ref(storage, 'canvas/')



// LIST ALL FILES

// listAll(gsAluminumRef)
//     .then((res) => {
//         res.prefixes.forEach((folderRef) => {
//             console.log(folderRef)

//         })
//         res.items.forEach((itemRef) => {
//             getDownloadURL(itemRef)
//                 .then((url) => {
//                     console.log(url)
//                 })
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     })



// WORKING WITH THE URLS




// QUERIES
export const q = query(colRefOrder, orderBy('createdAt'))


// GET REAL TIME COLLECTION DATA
onSnapshot(q, (snapshot) => {
    let orders = []
    snapshot.docs.forEach((doc) => {
        orders.push({ ...doc.data(), id: doc.id })
    })
})


// AUTHENTIFICATION
export const auth = getAuth(app)

// GET ELEMENTS FROM DATABASE  
export const getOrders = () => {
    getDocs(colRefOrder)
}

export const getOrdersPaper = () => {
    getDocs(colRefPaper)
}

export const getOrdersFraming = () => {
    getDocs(colRefFraming)
}

export const getOrdersAluminum = () => {
    getDocs(colRefAluminum)
}
