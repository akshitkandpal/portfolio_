import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEOEExBpnmfbesHa4v4eE4YnskfmJjvZc",
  authDomain: "portfolio-site123.firebaseapp.com",
  projectId: "portfolio-site123",
  storageBucket: "portfolio-site123.appspot.com",
  messagingSenderId: "498349050905",
  appId: "1:498349050905:web:d562e25740786aa2cdee88"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);