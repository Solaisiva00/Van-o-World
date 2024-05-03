import { initializeApp } from "firebase/app";
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
// init firebaseapp
const app = initializeApp(firebaseConfig);
//init service(firestore)
const db = getFirestore(app);
//init collection ref
const collectionRef = collection(db, "vans");

export async function getVansList() {
  const data=await getDocs(collectionRef)
  const arr=data.docs
  const dataArr=arr.map(doc=>({...doc.data(),id:doc.id}))
  console.log("data is from google firestore");
   return dataArr
}

export async function getVanList(id){
  const docref=doc(db,"vans",id)
  const snapShot=(await getDoc(docref)).data()
  console.log("data is from google firestore");
  return snapShot
}
export async function getHostVanLists() {
  const q=query(collectionRef,where("hostId","==","123"))
  const data=await getDocs(q)
  const arr=data.docs
  const dataArr=arr.map(doc=>({...doc.data(),id:doc.id}))
  console.log("data is from google firestore");
   return dataArr
}

// export async function getHostVanList(id) {
  //   const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  //   const hostVan = await fetch(url);
//   if (!hostVan.ok) {
//     throw {
  //       message: "Failed to fetch data",
  //       statusText: hostVan.statusText,
  //       status: hostVan.status,
  //     };
  //   }
  //   const res = await hostVan.json();
  //   return res.vans;
  // }
  // export async function getVanList(id) {
  //   const url = id ? `/api/vans/${id}` : "/api/vans/";
  //   const van = await fetch(url);
  //   if (!van.ok) {
  //     throw {
  //       message: "Failed to fetch Data",
  //       statusText: van.statusText,
  //       status: van.status,
  //     };
  //   }
  //   const res = await van.json();
  //   return res.vans;
  // }
  export async function loginUser(creds) {
    const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
