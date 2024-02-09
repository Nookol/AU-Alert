import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import ReportForm from "./components/Reporting/ReportForm";
// import { createStackNavigator} from 'react-navigation';

// import verCodeScreen from './PassReset';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
      <StatusBar style="auto" />
      {/*<Text> Forgot Password?</Text>*/}
        <ReportForm/>
    </View>

  );
}

// const PReset = CreateStackNavigator({
//     PwdReset: { screen : verCodeScreen }
// });
//
// class verCodeScreen extends React.Component {
//     static navigationOptions = {
//         title: 'PwdReset',
//     };
//     render(){
//         return(
//             <Button
//                 title="PwdReset"
//                 onPress={() => this.checkPwd() }
//             />
//         );
//     }
//     checkPwd = () => {
//         const { navigate } = this.props.navigation;
//         if(password != "pass"){ //pwd checking
//             navigate('PwdReset')
//         }
//     }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
