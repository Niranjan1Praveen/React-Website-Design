
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAbZgVIw9sDJdrtLklCzc1tnrDijNxru8Q",
  authDomain: "blog-app-93d68.firebaseapp.com",
  projectId: "blog-app-93d68",
  storageBucket: "blog-app-93d68.appspot.com",
  messagingSenderId: "142821331572",
  appId: "1:142821331572:web:cf1bf9e38627d6445c7721"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const provider_fb = new FacebookAuthProvider()