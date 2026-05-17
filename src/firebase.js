// src/firebase.js
// Firebase initialization for the SJM Knowledge Graph app.
// Import `db` from this file anywhere you need to read/write Firestore.

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDay4PEcn8Kjf3V1PkQVm3hGeJ02cbZyYs",
  authDomain: "sjm-knowledgegraph.firebaseapp.com",
  projectId: "sjm-knowledgegraph",
  storageBucket: "sjm-knowledgegraph.firebasestorage.app",
  messagingSenderId: "951041774157",
  appId: "1:951041774157:web:a6ec894784d0a9b0b0c204",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
