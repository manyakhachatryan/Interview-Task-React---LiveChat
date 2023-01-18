


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSMKocdu_jK0BlPBlvtL6TpoPrTyDKK_w",
  authDomain: "chat1-bd06a.firebaseapp.com",
  projectId: "chat1-bd06a",
  storageBucket: "chat1-bd06a.appspot.com",
  messagingSenderId: "107115595152",
  appId: "1:107115595152:web:9ad465e83fbf20991d9f15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()