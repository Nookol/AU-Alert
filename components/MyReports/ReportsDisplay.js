import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

let colorData = "yellow";
const ReportsDisplay = ({title, location, status}) => {
    const [colorStatus, setColorStatus] = useState("yellow");

    if (status === "complete")
        colorData = "green";
    else if (status === "pending")
        colorData = "#6eadb9";
    else if (status === "referred")
        colorData = "purple";
    else if (status === "open")
        colorData = "orange";

    return (
        <View style={styles.container}>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.location}>Location: {location}</Text>
            <Text style={{color: colorData}}>Status: {status}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    location: {
        fontSize: 16,
        marginBottom: 3,
    },
    status: {
        fontSize: 16,

        color: 'green', // You can change color based on status
    },
});

export default ReportsDisplay;