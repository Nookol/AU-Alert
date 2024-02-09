import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import '@tamagui/core/reset.css'
import {TamaguiProvider, createTamagui} from 'tamagui'
import {config} from '@tamagui/config/v2'
import {Button} from "tamagui";

const tamaguiConfig = createTamagui(config)

export default function App() {
    return (
        <TamaguiProvider config={tamaguiConfig}>
            <View style={styles.container}>
                <Button>BLAH</Button>
            </View>
        </TamaguiProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
