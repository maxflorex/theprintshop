
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSENGER_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID
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

export const gsCanvasRef = ref(storage, 'canvas/')
export const gsAluminumRef = ref(storage, 'aluminum/')


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
