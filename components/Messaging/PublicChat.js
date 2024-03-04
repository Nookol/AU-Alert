import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBox = ({ message, firstname,lastname,timeposted }) => {

  const fullName = firstname+" "+lastname;
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
      <Text style={styles.senderName}>sent by: {fullName}</Text>
      <Text style={styles.senderName}>{timeposted}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginRight: 50,
    marginLeft: 2,
    padding: 8,
    maxWidth: '100%',    
  },
  messageContainer: {

    //height: 90
    maxHeight: 100
  },
  messageText: {
    fontSize: 16,
  },
  senderName: {
    fontSize: 12,
    color: 'gray',
    alignSelf: 'flex-start',
  },
});

export default ChatBox;