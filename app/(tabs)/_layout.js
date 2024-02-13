import React from 'react';
import {Tabs} from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home'
                }}
            />
            <Tabs.Screen
                name="report"
                options={{
                    title: 'Report'
                }}
            />
            <Tabs.Screen
                name="messaging"
                options={{
                    title: 'Messaging'
                }}
            />
        </Tabs>
    );
}
