import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBox = ({ message }) => {
  return (
    <View style={styles.container}>
    
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>can someone d
        sdfasdfasdfasdfadf</Text>
      </View>
      <Text style={styles.senderName}>sent by: nchuwan01</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    maxWidth: '100%',
    position: "absolute",
    
  },
  messageContainer: {
    marginBottom: 5,
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