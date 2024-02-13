import {StyleSheet, Text, View} from 'react-native';
import ReportForm from "../../components/Reporting/ReportForm";

export default function TabOneScreen() {
    return (
        <View>
            <ReportForm/>
        </View>
        // <ReportForm/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});