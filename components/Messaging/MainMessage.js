import React, { useState, useEffect } from 'react';
import {StyleSheet, ScrollView, View,Text ,TextInput, SectionList, SafeAreaView, FlatList, Button} from 'react-native';
import SendIcon from "./SendIcon";
import CircleWithText from './PublicChat';
import MyChat from './PersonalChat';
import axios from "axios";
import portNumber from '../../Portnumber/portNumber';
import AsyncStorage from '@react-native-async-storage/async-storage';
import login from "./../Login-Register/login";


//import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';



import socket from './Socket/socket';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import socket from './Socket/socket';
mainUserID = "";

const MainMessage = () => {
    this.scrollViewRef = React.createRef(null); 
    const [dataResponse, setDataResponse] = useState([{}]);
    const[maxScrollY, setMaxScrollY] = useState(0);
    const[currentY, setCurrentY] = useState(0);
    const[isVisible, setIsVisible] = useState(false);
    const[maxYScroll, setMaxYScroll] = useState(0);
  
    //const myUserId = await AsyncStorage.getItem("userid");
   

    useEffect(() => {
            axios.get(`http://${portNumber}:3000/messaging/getMessages`)
            .then(response => {
              AsyncStorage.getItem("userid").then(res =>{
                mainUserID = res;

              // console.log(response.data);
                setDataResponse(response.data);


              })
            })
            .catch(error => {
              console.error("Error fetching data:", error);
            });
            //console.log("This should print"mainUserID);
            socket.on("data", async (msg) => {
              //console.log(msg);
              setDataResponse( prevData =>[...prevData, {clientid: mainUserID, message: msg.message, firstname: msg.firstName, userid: msg.userid, lastname: msg.lastName, timeposted: msg.postedTime}]);
              if(msg.userid != undefined)
              {
                
                if(mainUserID == msg.userid)
                {
                  this.scrollViewRef.current.scrollToEnd({ animated: true });
                }
              }
            
              
            })
          
      },[]);
      const handleScroll = (event) => {
        const { x, y } = event.nativeEvent.contentOffset;
        //console.log('Current position:', { x, y });

        setCurrentY(y);
      };
      const handleContentSizeChange = (contentWidth, contentHeight) => {
    
        if((contentHeight-900) < currentY)
        {
          this.scrollViewRef.current.scrollToEnd({ animated: true });

        }
        
        console.log(contentHeight);
      };

    return (
            <SafeAreaView style={styles.safeView}>
      

                <ScrollView onContentSizeChange={handleContentSizeChange} onScroll={handleScroll} ref={this.scrollViewRef} keyboardaware={true} contentContainerStyle={styles.scrollContainer} >
                    <View style={styles.mainBox}>  
                      {

                        dataResponse.map( data =>{
                          if(data.message)
                          {
                            if(data.clientid == data.userid || mainUserID == data.userid)
                            {

                              return(
                                
                                    <View style={styles.chatBox}> 
                                      <MyChat  message={data.message} firstname={data.firstname} lastname={data.lastname} timeposted={data.timeposted}/>
                                    </View>
                              ) 

                            }else 
                            {
                              return(
                                <View style={styles.chatBox}>
                                        <CircleWithText message={data.message} firstname={data.firstname} lastname={data.lastname} timeposted={data.timeposted}/>
                                </View>
                              )
                            }
                             
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
    newMessage:{
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    newTextMessage:{
      backgroundColor: "green",
      padding: 10,
      borderRadius: 20,
      marginRight: 10,
      marginBottom: 10,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 6,

    },

     
    
    mainBox: {
        flexDirection: 'column', 
        alignItems: 'flex-start', 
      },
    chatBox: {
        width:"100%",
        padding: 5,
        borderRadius: 8,
        marginBottom: 10 // Add margin to create space between chat boxes
      },
      myChatBox: {
        width: '100%', // Adjust the width as needed
        padding: 5,
        borderRadius: 8,
        marginBottom: 10 // Add margin to create space between chat boxes
      },
    checkIcon: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    },


})


export default MainMessage;