import { initializeApp } from "firebase/app";
import { FIREBASE_API } from "./constants";


const firebaseConfig = {
  apiKey: FIREBASE_API,
  authDomain: "new-tech-8eb3d.firebaseapp.com",
  projectId: "new-tech-8eb3d",
  storageBucket: "new-tech-8eb3d.firebasestorage.app",
  messagingSenderId: "835612803851",
  appId: "1:835612803851:web:5ec5e52849f55000fe580e",
  measurementId: "G-5LN47YFLXZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
