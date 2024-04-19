import React, { useState } from 'react';
import { View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { auth } from './firebase';
import {sendPasswordResetEmail} from "firebase/auth"; // Import your Firebase initialization module

function PasswordReset() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;
        sendPasswordResetEmail(auth, emailVal).then(data => {
            alert("Check email for resetting password")
        }).catch(error => {
            alert(error.code)
        });
    }
    
    return (
        <div>
            <h1>Forgot Password</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name="email"/>
                <button>Reset</button>
            </form>
        </div>
    )
}

export default PasswordReset;
