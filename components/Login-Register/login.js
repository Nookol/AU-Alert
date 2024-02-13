import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 40, paddingBottom: 50}}> Login </Text>
            </View>
            <View>
                <TextInput style={styles.textBox} placeholder={"Email"} placeholderTextColor={'gray'}/>
            </View>
            <View>
                <TextInput style={styles.textBox} placeholder={"Password"} placeholderTextColor={'gray'}/>
            </View>
            <Button title={"Login"}></Button>
            <Button title={"Register"}></Button>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#73a3e0"
    },
    title: {
        fontSize: 15,
    },
    separator: {
        marginVertical: 100,
    },
    textBox: {
        backgroundColor: 'lightgray',
        padding: 10,
        margin: 5,
        width: 200,
        borderRadius: 5,
        color: '#000'
    }
});