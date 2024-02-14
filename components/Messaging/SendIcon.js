import React, { useState } from 'react';
import { StyleSheet, View, TextInput, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SendIcon = () => {
    const[message,setMessage] = useState("");

    function sendClicked()
    {
        if(message.length > 0)
        {

        }



    }
    function messageChanged(e){ setMessage(e.target.value); }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Type something..."
                placeholderTextColor="grey"
                onChange={messageChanged}
                required
            />
            <MaterialIcons name="send" size={24} color="black" onPress={sendClicked} />


            </View>


        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        marginBottom: 5,
        borderRadius: 25,
        paddingHorizontal: 10,
        backgroundColor: "white"
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
