import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8YrNtQtk-xy-UYsYs0Xrx564eEOt-7CU",
  authDomain: "signup-form-ce3ef.firebaseapp.com",
  projectId: "signup-form-ce3ef",
  storageBucket: "signup-form-ce3ef.appspot.com",
  messagingSenderId: "902740321913",
  appId: "1:902740321913:web:3c2d2af1d34cdda6a856a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Track the number of failed attempts
let failedAttempts = 0;

// Function triggered on login form submission
window.login = function(e) {
  e.preventDefault();

  // Get user input from form fields
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  const loginButton = document.getElementById("signIn");

  // Retry with exponential backoff, delays from 1s to 50s
  signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then(function(success) {
      alert('Login Successful'); // Show a popup message
      window.location.replace('user.html'); // Redirect to user page after login
    })
    .catch(function(err) {
      failedAttempts++;
      let errorMessage = "An error occurred. Please try again.";
      if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        errorMessage = `Invalid credentials. Please try again in ${failedAttempts * 10} seconds.`;
        alert(errorMessage); // Show a popup message
        loginButton.disabled = true; // Disable the login button
        setTimeout(() => {
          loginButton.disabled = false; // Enable the login button after the delay
        }, failedAttempts * 10000); // 10 seconds delay multiplied by failed attempts
      } else {
        alert(errorMessage);
      }
    });

  console.log(emailValue, passwordValue); // Log user input for debugging
};

// Attach the login function to the form submission
document.getElementById("login-form").addEventListener("submit", window.login);
