import Login from "../components/Login-Register/login";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const App = () => {
    const [user, setUser] = useState();

    return (
        <View style={styles.container}>
            <Login/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default App;
