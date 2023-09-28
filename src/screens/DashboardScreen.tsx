import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from "../constants/constants";
import React, {useEffect, useState} from "react";
import DashboardCard from "../components/DashboardCard";
import {CountGraphModel} from "../models/CountGraphModel";
import {CountGraph} from "../components/CountGraph";

export default function DashboardScreen() {
    const items: Array<CountGraphModel> = new Array<CountGraphModel>();

    for (let i = 0; i < 24; i++) {
        const date = new Date('2023-09-30T13:00:00.000Z');
        date.setMinutes(date.getMinutes() + i * 10);
        items.push({count: Math.floor(Math.random() * 10), timestamp: date})
    }
    
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <DashboardCard>
                        <CountGraph items={items}></CountGraph>
                    </DashboardCard>
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
