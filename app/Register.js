import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebase';

const Register = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [registration, setRegistration] = useState({
        email: null,
        password: null,
        confirmPassword: null,
        fName: null,
        lName: null,
        phone: null
    });

    const handleEmailChange = (text) => {
        setRegistration(prevState => ({
            ...prevState,
            email: text
        }));
    };

    const handlePasswordChange = (text) => {
        setRegistration(prevState => ({
            ...prevState,
            password: text
        }));
    };

    const handleConfirmPasswordChange = (text) => {
        setRegistration(prevState => ({
            ...prevState,
            confirmPassword: text
        }));
    };

    const handleLNameChange = (text) => {
        setRegistration(prevState => ({
            ...prevState,
            lName: text
        }));
    };

    const handleFNameChange = (text) => {
        setRegistration(prevState => ({
            ...prevState,
            fName: text
        }));
    };

    const handlePhoneChange = (text) => {
        setRegistration(prevState => ({
            ...prevState,
            phone: text
        }));
    };

    const handleRegister = async () => {
        if (registration.email && registration.password && registration.confirmPassword === registration.password) {
            setLoading(true);
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, registration.email, registration.password);
                console.log('User registered successfully');
                navigation.navigate('Home');
            } catch (error) {
                console.error('Error registering user:', error.message);
                Alert.alert('Registration Failed', error.message);
            }
            setLoading(false);
        } else {
            Alert.alert('Registration Failed', 'Please enter valid email and password.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.textBox}
                placeholder="Email"
                placeholderTextColor="gray"
                onChangeText={handleEmailChange}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry
                onChangeText={handlePasswordChange}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Confirm Password"
                placeholderTextColor="gray"
                secureTextEntry
                onChangeText={handleConfirmPasswordChange}
            />
            <TextInput
                style={styles.textBox}
                placeholder="First Name"
                placeholderTextColor="gray"
                onChangeText={handleFNameChange}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Last Name"
                placeholderTextColor="gray"
                onChangeText={handleLNameChange}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Phone"
                placeholderTextColor="gray"
                onChangeText={handlePhoneChange}
            />
            <Button title="Register" onPress={handleRegister} />
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#73a3e0',
    },
    title: {
        fontSize: 40,
        paddingBottom: 50,
    },
    textBox: {
        backgroundColor: 'lightgray',
        padding: 10,
        margin: 5,
        width: 200,
        borderRadius: 5,
        color: '#000',
    },
});

export default Register;
