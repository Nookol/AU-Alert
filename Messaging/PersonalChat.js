import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyChat = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>Help me find dunham hall. adfasd dsssfffffffffdddddddddddddd
        dd
        dddddddddddddddddddddd
        ddddddddddddddddddddddd
        ffffffffffffffffffff sddddd
        iiiiiiiiiiiiiiiiiiiggggggggggggg
        gggggggggggggggggggggggggggg
        ggggggggggggggggggggggggggggg
        ggggggggggggggggddddddddd
        sd
        </Text>
      </View>
      <Text style={styles.senderName}>sent by: nchuwa01</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    position: "absolute",
    marginLeft: 10,
    marginTop: 40,
    alignSelf: 'flex-end',
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
    alignSelf: 'flex-end',
  },
});

export default MyChat;