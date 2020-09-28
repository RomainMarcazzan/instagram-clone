import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNhj1uWFLIvrDpmsVpcNeKcX3lt_MO6CQ",
  authDomain: "instagram-clone-bcfa3.firebaseapp.com",
  databaseURL: "https://instagram-clone-bcfa3.firebaseio.com",
  projectId: "instagram-clone-bcfa3",
  storageBucket: "instagram-clone-bcfa3.appspot.com",
  messagingSenderId: "365019050201",
  appId: "1:365019050201:web:2801dce1cafa7f10eb8ec8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
