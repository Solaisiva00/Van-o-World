import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  GoogleAuthProvider
} from "firebase/auth";
import { collection, doc, getDoc, query, where } from "firebase/firestore/lite";
import { getFirestore, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBuyLwGk6XVoCo5gbWR9w1fV_eyAf2QWfo",
  authDomain: "vanlifea.firebaseapp.com",
  projectId: "vanlifea",
  storageBucket: "vanlifea.appspot.com",
  messagingSenderId: "1041838197181",
  appId: "1:1041838197181:web:8e40dbd6673ab552586ad4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//init service(firestore)
const db = getFirestore(app);
//init collection ref
const collectionRef = collection(db, "vans");
//auth
export const auth = getAuth(app);
//google auth provider
export const provider=new GoogleAuthProvider()

export async function setUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User created:", user);
    const verify = await sendEmailVerification(auth.currentUser);
    throw {message:"successfully Created account and please verify it through email"}
  } catch (error) {
    const err=error.message
    return err
  }
}

export async function getVansList() {
  const data = await getDocs(collectionRef);
  const arr = data.docs;
  const dataArr = arr.map((doc) => ({ ...doc.data(), id: doc.id }));
  console.log("data is from google firestore");
  return dataArr;
}

export async function getVanList(id) {
  const docref = doc(db, "vans", id);
  const snapShot = (await getDoc(docref)).data();
  console.log("data is from google firestore");
  return snapShot;
}
export async function getHostVanLists() {
  const q = query(collectionRef, where("hostId", "==", "123"));
  const data = await getDocs(q);
  const arr = data.docs;
  const dataArr = arr.map((doc) => ({ ...doc.data(), id: doc.id }));
  console.log("data is from google firestore");
  return dataArr;
}


export async function loginUser(email,password){
  try {
   const usercred=await signInWithEmailAndPassword(auth,email,password)
   console.log(usercred.user);
  
 } catch (error) {
     const err=error.message
     return err
 }
}


