//firebase config key setup
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// import * as firebase from 'firebase';
//Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAwx4M9Uyi_muASYXbIcI49TFjXcE5BTxQ",
    authDomain: "stratagem-18548.firebaseapp.com",
    projectId: "stratagem-18548",
    storageBucket: "stratagem-18548.appspot.com",
    messagingSenderId: "333725124686",
    appId: "1:333725124686:web:3270f76f499aac04a8db1f",
    measurementId: "G-1P8F1XXKGR"
  };
  

// if(!firebase.apps.length)
// {
//     firebase.initializeApp(firebaseConfig);

// }
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
// export { firebase };