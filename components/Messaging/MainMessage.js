import React from 'react';
import {StyleSheet, ScrollView, View, TextInput, SectionList, SafeAreaView} from 'react-native';
import SendIcon from "./SendIcon";
import CircleWithText from './PublicChat';
import MyChat from './PersonalChat';

const MainMessage = () => {
    const data = [1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,
        1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1];
    
    
    return (
        
        <SafeAreaView style={styles.safeView}>
            <ScrollView contentContainerStyle={styles.scrollContainer} >
                <View style={styles.mainBox}>  
                    {data.map((item, index) => {
                    if (item === 1) {
                        if(data.length > 50)
                        {
                            data.shift();
                        }
                        return (
                            <View key={index} style={styles.chatBox}> 
                                <CircleWithText />
                            </View>
                        );
                    } else {
                        if(data.length > 50)
                        {
                            data.shift();
                        }

                        return (
                            <View key={index} style={styles.myChatBox}>
                                <MyChat />
                            </View>
                        );
                    }
                })}
                   
                </View>

            </ScrollView> 
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
    scrollContainer:{
        paddingBottom: 50
    },

    mainBox: {
        flexDirection: 'column', 
        alignItems: 'flex-start', 
      },
    chatBox: {
        padding: 5,
        borderRadius: 8,

        marginBottom: 10, // Add margin to create space between chat boxes
      },
      myChatBox: {
        width: '100%', // Adjust the width as needed
        padding: 5,
        borderRadius: 8,
        marginBottom: 10, // Add margin to create space between chat boxes
      },
    checkIcon: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    },


})


export default MainMessage;