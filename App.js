
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainMessage from "./Messaging/MainMessage";
import SendIcon from './Messaging/SendIcon';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
        <MainMessage/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    paddingTop: 40,
    backgroundColor: "green"
  }

});

