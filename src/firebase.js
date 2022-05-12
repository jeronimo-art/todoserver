import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  databaseURL: "https://todoapp-40c39-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyBVOoj0t0NHphCgEG99i1ZDPpvI_vOQtQo",
  authDomain: "todoapp-40c39.firebaseapp.com",
  projectId: "todoapp-40c39",
  storageBucket: "todoapp-40c39.appspot.com",
  messagingSenderId: "221443957513",
  appId: "1:221443957513:web:a0197f7eae36db009d69d8"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
