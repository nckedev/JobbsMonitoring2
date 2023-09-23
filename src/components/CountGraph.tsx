import React from "react";
import {CountGraphModel} from "../models/CountGraphModel";
import {StyleSheet, Text, View} from "react-native";
import {COLORS} from "../constants/constants";

interface CountGraphProps extends React.ComponentProps<any> {
    items: Array<CountGraphModel>
}

export const CountGraph = (props: CountGraphProps) => {
    const total = props.items.reduce((acc, curr) => acc + curr.count, 0)
    return (
        <View style={styles.container}>
            <View style={{position: "absolute"}}>
                <Text style={{fontSize: 100, color: COLORS.Severity.Error, fontWeight: "bold"}}>{total}</Text>
            </View>
            <View style={{position: "absolute"}}>
                <Text>Graph</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container :{ 
        flex :1 ,
        alignSelf: "stretch",
        alignItems : "flex-start",
        justifyContent: "flex-end"
    }
})
