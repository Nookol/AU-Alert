import {StyleSheet, View, Text} from 'react-native';
import MainMessage from "../../components/Messaging/MainMessage";

export default function Messaging() {
    return (
        <MainMessage/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
