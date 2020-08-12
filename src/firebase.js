import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB2zhETL4UKsYH6WPG4B4EM3KdbadSFtb4",
    authDomain: "seefoodapp-eb81d.firebaseapp.com",
    databaseURL: "https://seefoodapp-eb81d.firebaseio.com",
    projectId: "seefoodapp-eb81d",
    storageBucket: "seefoodapp-eb81d.appspot.com",
    messagingSenderId: "389748240385",
    appId: "1:389748240385:web:dc6d63d7f6e5de348f1000",
    measurementId: "G-SMC0WEPH9X"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
const storage = firebase.storage()
export const storageRef = storage.ref()


export default firebase