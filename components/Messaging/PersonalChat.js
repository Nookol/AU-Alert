import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyChat = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>Help e find dunhasssssssssssss
        asdddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddm 
        </Text>
      </View>
      <Text style={styles.senderName}>sent by: Narayan Chuwan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 8,
    marginLeft: 50,
    marginRight: 2,
    maxWidth: '100%',    

  },
  messageContainer: {
    marginBottom: 5,
    maxHeight: 100

  },
  messageText: {
    fontSize: 16,
  },
  senderName: {
    fontSize: 12,
    color: 'gray',
    alignSelf: 'flex-end',
  },
});

export default MyChat;