import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Students log in with a username only. Firebase needs an email, so we build a hidden one.
export const toEmail = u => u.trim().toLowerCase() + "@kantakumpleto.app";
export const validUser = u => /^[a-z0-9_]{3,20}$/.test(u.trim().toLowerCase());
export const msg = e => ({
  "auth/invalid-credential": "Wrong username or password.",
  "auth/email-already-in-use": "That username is already taken.",
  "auth/weak-password": "Password needs at least 6 characters.",
  "auth/network-request-failed": "No internet connection."
}[e.code] || "Something went wrong. Please try again.");
