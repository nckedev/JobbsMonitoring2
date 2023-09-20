import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from "../constants/constants";
import React from "react";
import DashboardCard from "../components/DashboardCard";

export default function DashboardScreen() {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <DashboardCard/>
                    <DashboardCard/>
                    <DashboardCard/>
                    <DashboardCard/>
                    <DashboardCard/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20
    }
})
