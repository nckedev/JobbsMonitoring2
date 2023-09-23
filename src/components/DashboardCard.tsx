import React from "react";
import {
    Pressable,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {COLORS} from "../constants/constants";
import Animated from 'react-native-reanimated'


interface AnimatedSplashEntryProps extends React.ComponentProps<typeof TouchableOpacity> {
    animationsProps?: React.ComponentProps<typeof Animated.View>
    test?: string,
}

export default function DashboardCard(props: AnimatedSplashEntryProps) {
    const {test, animationsProps, ...pr} = props
    return (
        <Pressable {...pr}  style = { { alignSelf: "stretch", marginLeft: 20, marginRight: 20}}>
            <Animated.View
                style={style.container}
                entering={animationsProps?.entering}
            >
                { pr.children}
            </Animated.View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Card.Light,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderStyle: "solid",
        borderWidth: 0,
        height: 200,
        borderColor: COLORS.Text.Dark,
        padding : 10,
    },
})