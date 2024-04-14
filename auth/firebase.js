import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCYH0AX14R9G1TkADeJWxqZ6_aMEEWmamg",
    authDomain: "au-report-bbe7d.firebaseapp.com",
    projectId: "au-report-bbe7d",
    storageBucket: "au-report-bbe7d.appspot.com",
    messagingSenderId: "81948261786",
    appId: "1:81948261786:web:85b921f67d075122964e23",
    measurementId: "G-XL5YWLR8PZ"
};

const email = document.getElementById("email").value;
sendPasswordResetEmail(auth, email)
    .then(data => {
    console.log(data);
    alert("Email Sent")
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
})

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

