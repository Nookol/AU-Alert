import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import portNumber from '../../Portnumber/portNumber'; 
import socket from './Socket/socket';  


firstName = "";
lastName = "";
email="";
userid="";

const SendIcon = () => {
    const[message,setMessage] = useState("");

    async function sendClicked()
    {           
        if(message.length > 0)
        {
           
           socket.emit("message", message);
           if(firstName === "" || userid === "" || email === "" || lastName==="")
           {
                firstName =await AsyncStorage.getItem("first");
                lastName = await AsyncStorage.getItem("last");
                email = await AsyncStorage.getItem("email");
                userid = await AsyncStorage.getItem("userid");

           }
           
           
           
           socket.emit("message",  {message: message, firstName: firstName, lastName: lastName, email: email, userid: userid, postedTime:new Date(new Date()).toLocaleString("en-US", { timeZone: "America/Chicago" })});
          
            axios.post(`http://${portNumber}:3000/messaging/postMessages`, {message: message, userid: userid, postedTime:  new Date(new Date()).toLocaleString("en-US", { timeZone: "America/Chicago" })})
            .then(response => {
                console.log("This is the response " + response)
           //     this.scrollViewRef.current.scrollToEnd({ animated: true });


            })
            .catch(error => {
              // Handle error
              console.log("it's going into the error lane!");
              console.error('Error posting data:', error);
    
            });
            setMessage("");



        }



    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
            <TextInput
                maxLength={200}
                style={styles.input}
                placeholder="Type something..."
                placeholderTextColor="grey"
                onChangeText={newMessage => setMessage(newMessage)}
                defaultValue={message}
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
