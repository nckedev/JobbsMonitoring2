import React from "react";
import {CountGraphModel} from "../models/CountGraphModel";
import {StyleSheet, Text, View} from "react-native";
import {COLORS} from "../constants/constants";
import {curveBasis, line, scaleLinear, scaleTime} from 'd3';
import {Canvas, Line, Path, Skia, SkPath, vec} from "@shopify/react-native-skia";

const GRAPH_HEIGHT = 200;
const GRAPH_WIDTH = 340;

interface GraphData {
    min: number,
    max: number,
    curve: SkPath;
}

const makeGraph = (data: Array<CountGraphModel>): GraphData => {
    const min = Math.min(...data.map(x => x.count));
    const max = Math.max(...data.map(x => x.count));
    // console.log(new Date(2023, 8, 30, 15))
    // console.log(data)

    const getYAxis = scaleLinear()
        .domain([0, max])
        .range([GRAPH_HEIGHT- 10, 10 ]);

    const getXAxis = scaleTime()
        .domain([new Date(2023, 8, 30, 15), new Date(2023, 8, 30, 16)])
        .range([0, GRAPH_WIDTH]);

    const curvedLine = line<CountGraphModel>()
        .x(x => getXAxis(x.timestamp))
        .y(x => getYAxis(x.count))
        .curve(curveBasis)(data);

    const skiaPath = Skia.Path.MakeFromSVGString(curvedLine!);

    return {
        min,
        max,
        curve: skiaPath!
    };
}

interface CountGraphProps extends React.ComponentProps<any> {
    items: Array<CountGraphModel>
}

export const CountGraph = (props: CountGraphProps) => {
    const total = props.items.reduce((acc, curr) => acc + curr.count, 0)

    const graphData = makeGraph(props.items);
    return (
        <View style={styles.container}>
            <View style={{position: "absolute"}}>
                <Text style={{fontSize: 100, color: COLORS.Severity.Error, fontWeight: "bold"}}>{total}</Text>
            </View>
            <View style={{position: "absolute", zIndex: 99,  width: 200, height: 200}}>
                <Canvas style={{backgroundColor: "#ff342", height: GRAPH_HEIGHT, width: GRAPH_WIDTH}}>
                    <Path path={graphData.curve!}
                          style={"stroke"}
                          strokeWidth={2}
                          color={"#000000"}
                    />
                </Canvas>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        alignItems: "flex-start",
        justifyContent: "flex-end"
    }
})
