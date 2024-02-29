import { Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { getFromApi } from "../../api/get";

export default function MyReports() {
    const [res, setRes] = useState("Loading..."); // Initial state message

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await SecureStore.getItemAsync('sessionToken');
                const data = await getFromApi('private', token);
                setRes(JSON.stringify(data));
            } catch (error) {
                console.error('Error fetching data:', error);
                setRes("Error fetching data");
            }
        };
        fetchData();
    });

    return (
        <View>
            <Text>{res}</Text>
        </View>
    );
}
