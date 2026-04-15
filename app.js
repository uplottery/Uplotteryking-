import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBImu7q1AsoWlAZHreVFSnlFID4ccB_XHU",
  authDomain: "uplotteryking-f2f52.firebaseapp.com",
  projectId: "uplotteryking-f2f52",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// LOGIN
window.login = async () => {
  let email = email.value;
  let pass = password.value;

  let user = await signInWithEmailAndPassword(auth, email, pass);

  if(email === "uplottery@gmail.com"){
    window.location = "admin.html";
  } else {
    window.location = "dashboard.html";
  }
};

// SIGNUP
window.signup = async () => {
  let email = email.value;
  let pass = password.value;

  let user = await createUserWithEmailAndPassword(auth, email, pass);

  await setDoc(doc(db, "users", user.user.uid), {
    balance: 0
  });

  alert("Account Created");
};

// BET
window.placeBet = async () => {
  alert("Bet Placed ₹50");
};

// RECHARGE
window.submitRecharge = async () => {
  let utr = document.getElementById("utr").value;

  await addDoc(collection(db, "recharges"), {
    utr: utr,
    status: "pending"
  });

  alert("Submitted");
};

// ADMIN RESULT
window.uploadResult = async () => {
  await setDoc(doc(db, "result", "today"), {
    n1: n1.value,
    n2: n2.value,
    n3: n3.value,
    n4: n4.value
  });

  alert("Result Uploaded");
};