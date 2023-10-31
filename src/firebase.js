// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB803hrd2DyqFc1ti-n8AQJOVr2-oapm8M",
  authDomain: "fir-authentication-933ef.firebaseapp.com",
  projectId: "fir-authentication-933ef",
  storageBucket: "fir-authentication-933ef.appspot.com",
  messagingSenderId: "101436176741",
  appId: "1:101436176741:web:bb79a249e627e4e431498c",
  measurementId: "G-SRJWGT1X5X"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};
