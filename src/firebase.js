import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBd4XlowpW3W1a0cmEIqPnnLxczLdTc750",
  authDomain: "upload-f1b52.firebaseapp.com",
  projectId: "upload-f1b52",
  storageBucket: "upload-f1b52.appspot.com",
  messagingSenderId: "200292550833",
  appId: "1:200292550833:web:a7520d0c4be17b550efa90"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);