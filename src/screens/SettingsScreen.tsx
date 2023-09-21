import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from "react";

export default function SettingsScreen() {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text>Settings</Text>
                    <SettingsElement></SettingsElement>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const SettingsElement = () => {
    return (
        <View style={{flex: 1, justifyContent: "space-between", flexDirection: "row", alignSelf: "stretch"}}>
            <Text>Update interval</Text>
            <Text>9</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 15,
    }
});