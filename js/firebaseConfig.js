// Import SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJenGvObSgirFafSdZzYMFRcGq9I_blmU",
  authDomain: "allinenglish.firebaseapp.com",
  projectId: "allinenglish",
  storageBucket: "allinenglish.firebasestorage.app",
  messagingSenderId: "735099754373",
  appId: "1:735099754373:web:405499c6d37e5a487d96ec",
  measurementId: "G-5VHYXBKGM3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };