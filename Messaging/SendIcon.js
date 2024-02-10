import React from 'react';
import { StyleSheet, View, TextInput, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SendIcon = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Type something..."
                placeholderTextColor="grey"
            />
            <MaterialIcons name="send" size={24} color="black" />
            </View>


        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 25,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'black',
    },
});

export default SendIcon;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
