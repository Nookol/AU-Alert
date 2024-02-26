import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReportForm from "../components/Reporting/ReportForm";
import MainMessage from "../components/Messaging/MainMessage";
import { StyleSheet, View } from "react-native";
import MyReports from "../components/Reporting/MyReports";
const Tab = createBottomTabNavigator();
export default function Home() {
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="New Report" component={ReportForm} />
        <Tab.Screen name="Messaging" component={MainMessage} />
        <Tab.Screen name="My Reports" component={MyReports} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "-15%",
    marginBottom: "-5%",
  },
});
