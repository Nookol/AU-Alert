import Login from "../components/Login-Register/login";
import {StyleSheet, View} from "react-native";

const App = () => {
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
