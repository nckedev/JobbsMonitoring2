import React, {PropsWithChildren} from "react";
import {
    Button,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    Touchable,
    TouchableOpacity,
    View
} from 'react-native';
import {COLORS} from "../constants/constants";
import Animated, {FadeIn, FadeInLeft, FadeInRight, SlideInLeft} from 'react-native-reanimated'


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
        backgroundColor: COLORS.Text.Light,
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