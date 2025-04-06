// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBK51eO_sRGOAlt0Po8OyAMyD0XrJ1t7VA",
  authDomain: "trad-91272.firebaseapp.com",
  projectId: "trad-91272",
  storageBucket: "trad-91272.appspot.com",
  messagingSenderId: "787626063935",
  appId: "1:787626063935:web:1826fe40335a391ddba08a",
  measurementId: "G-80VKTGKZHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
