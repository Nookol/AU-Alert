import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../auth/firebase';
import colors from '../constants/Colors'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserData} from "../components/Messaging/saveUserData/saveUserData";
import {isAuEmail} from "../components/Login-Register/userEmailFilter";
import {setCookie} from "../api/cookies";

const Register = () => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [registration, setRegistration] = useState({
        email: null,
        password: null,
        confirmPassword: null,
        fName: null,
        lName: null,
        phone: null,
        token : null
    });

    const handleRegister = async () => {

        if (!isAuEmail(registration.email, registration.fName, registration.lName)) {
            alert("Invalid Email: must be an Aurora.edu authorized email.")
            return;
        }
        let apiUrl = `http://localhost:3000/register`;
        if (registration.email && registration.password && registration.confirmPassword === registration.password) {
            setLoading(true);
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, registration.email, registration.password);
                const sessionToken = userCredential._tokenResponse['idToken']
                await setCookie("sessionToken", sessionToken);
                const response = await axios.post(apiUrl, {...registration, token: sessionToken})
                console.log(response);
                let s = response.config.data;
                const emailIndexStart = s.indexOf('"email":"') + '"email":"'.length;
                const emailIndexEnd = s.indexOf('"', emailIndexStart);
                const email = s.substring(emailIndexStart, emailIndexEnd);
                await getUserData(registration.email);
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

    //
    // Input Handlers
    //
    const handleInputChange = (field, text) => {
        setRegistration(prevState => ({
            ...prevState,
            [field]: text
        }));
    };

    const handleEmailChange = (text) => {handleInputChange('email', text);};

    const handlePasswordChange = (text) => {handleInputChange('password', text);};

    const handleConfirmPasswordChange = (text) => {handleInputChange('confirmPassword', text);};

    const handleLNameChange = (text) => {handleInputChange('lName', text);};

    const handleFNameChange = (text) => {handleInputChange('fName', text);};

    const handlePhoneChange = (text) => {handleInputChange('phone', text);};

    const storeToken = async (token) => {
        try {
            await AsyncStorage.setItem('@userToken', token);
        } catch (error) {
            console.error('Error storing token:', error);
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
            <Button title="Register" onPress={handleRegister}/>
            <Button title="Back to Login" onPress={() => {
                navigation.navigate('index')
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

export default Register;
