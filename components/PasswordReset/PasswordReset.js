import React, { useState } from 'react';
import { View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { auth } from './firebase'; // Import your Firebase initialization module

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleResetPassword = async () => {
        try {
            setLoading(true);
            await auth.sendPasswordResetEmail(email);
            Alert.alert('Password Reset Email Sent', 'Check your email to reset your password.');
        } catch (error) {
            console.error('Error sending password reset email:', error.message);
            Alert.alert('Password Reset Error', 'Failed to send password reset email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Button title="Reset Password" onPress={handleResetPassword} disabled={loading} />
            {loading && <ActivityIndicator size="small" color="#0000ff" />}
        </View>
    );
};

export default PasswordReset;
