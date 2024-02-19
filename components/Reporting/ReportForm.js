import {View, Text, StyleSheet, Button,SafeAreaView, ScrollView} from "react-native";
import DropdownComponent from "./locationDropdown";
import DropdownLocationType from "./locationDropdown";
import ProblemTitleBox from "./ProblemTitle";
import ProblemDescBox from "./DescribeTextBox";
import {useState} from "react";
import SubmitProblem from "./SubmitReport";

export default function ReportForm() {
    return (
        <SafeAreaView style={styles.background}>
            <ScrollView>
                <View style={styles.background}>
                    <Text style={styles.title}> Report A Problem </Text>
                    <Text style={styles.text}> Problem Title: </Text>
                    <ProblemTitleBox/>
                    <Text style={styles.text}> Location: </Text>
                    <DropdownComponent/>
                    <Text style={styles.text}> Describe Your Problem: </Text>
                    <ProblemDescBox/>
                    <SubmitProblem/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#00008b",
    },
    title: {
        fontSize: 40,
        color: '#ffffff',
        marginBottom: 15,
        padding: 35,

    },
    text: {
        fontSize: 25,
        padding: 5,
        color: '#ffffff',
        // fontSize: 100,
    }
});