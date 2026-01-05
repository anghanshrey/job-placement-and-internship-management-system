import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzzOIdZwQndTv6-I05KHjp8KlHcSasTMg",
  authDomain: "job-placement-system-f4044.firebaseapp.com",
  projectId: "job-placement-system-f4044",
  appId: "1:206424620496:web:2157e350d9ff1ef2190dd5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
