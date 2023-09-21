import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from "../constants/constants";
import React, {useEffect, useState} from "react";
import DashboardCard from "../components/DashboardCard";
import {CountGraphModel} from "../models/CountGraphModel";

export default function DashboardScreen() {
    const items: Array<CountGraphModel> = new Array<CountGraphModel>();

    for (let i = 0; i < 100; i++) {
        const date = new Date();
        date.setMinutes(date.getMinutes() - i * 10);
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

interface CountGraphProps extends React.ComponentProps<any> {
    items: Array<CountGraphModel>
}

const CountGraph = (props: CountGraphProps) => {
    const total = props.items.reduce((acc, curr) => acc + curr.count, 0)
    return (
        <View style={{flex: 1, alignSelf: "stretch", alignItems: "flex-start", justifyContent: "center"}}>
            <View style={{position: "absolute"}}>
                <Text>test</Text>
            </View>
            <View style={{position: "absolute"}}>
                <Text style={{fontSize: 100, color: COLORS.Severity.Error, fontWeight: "bold"}}>{total}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20
    }
})
