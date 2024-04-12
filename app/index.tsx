import React from "react";
import {StyleSheet, View, KeyboardAvoidingView, Platform} from "react-native";
import Login from "../components/Login-Register/login";

const App = () => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}
        >
            <View style={styles.innerContainer}>
                <Login />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
    }
});

export default App;
