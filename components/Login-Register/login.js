import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/auth/firebase"; // Assuming this is your correct Firebase initialization
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import colors from "@/constants/Colors";
import saveUserData from "./../Messaging/saveUserData/saveUserData";
import portNumber from '@/Portnumber/portNumber';
import {setCookie} from "@/api/cookies";

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
  

    const trySignIn = async () => {
        try {
            let userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const sessionToken = userCredential._tokenResponse['idToken']
            await setCookie("sessionToken", sessionToken);
            console.log('User signed in successfully');
            saveUserData(userCredential._tokenResponse.email);
           // userData(userCredential._tokenResponse.email);
            return true;
        } catch (error) {
            console.error('Error signing in:', error.message);
            return false;
        }
    };

    const handleLogin = async () => {
        if (email !== '' && password !== '') {
            setLoading(true);
            const success = await trySignIn();
            setLoading(false);
            if (success) {
                navigation.navigate('Home')
            } else {
                Alert.alert('Login Failed', 'Invalid email or password.');
            }
        } else {
            Alert.alert('Login Failed', 'Please enter valid email and password.');
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.textBox}
                placeholder="Email"
                placeholderTextColor="gray"
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin}/>
            <Button title="Register" onPress={() => {
                navigation.navigate('Register')
            }}/>
            <Button title="Bypass to app" onPress={() => {
                navigation.navigate('Home')
            }}/>
            {loading && <ActivityIndicator size="large" color="#0000ff"/>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.main.background,
    },
    title: {
        color: colors.main.text,
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

export default Login;
