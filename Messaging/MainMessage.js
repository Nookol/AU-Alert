import React from 'react';
import {StyleSheet, View, TextInput, SectionList, SafeAreaView} from 'react-native';
import SendIcon from "./SendIcon";
import CircleWithText from './PublicChat';
import MyChat from './PersonalChat';


const MainMessage = () => {
    return (
        <SafeAreaView style={styles.safeView}>

            <View style={styles.mainBox}>
                <View style={styles.chatBox}> 
                    <CircleWithText />

                    

                </View>
                


                <View style={styles.myChatBox}>
                        <MyChat />
                </View>
            </View>
            
            
            <View style={styles.checkIcon}>
                <SendIcon />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create( {
    safeView:{
        flex:1
    },
    mainBox: {
        flex: 1,
        flexDirection: 'column'
        

    },
  
    checkIcon: {
        backgroundColor: "red",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    },


})


export default MainMessage;