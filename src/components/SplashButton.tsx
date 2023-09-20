import React, {PropsWithChildren} from "react";
import {Button, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../constants/constants";
import Animated, {FadeIn, FadeInLeft, FadeInRight, SlideInLeft} from 'react-native-reanimated'


interface AnimatedSplashEntryProps extends React.ComponentProps<typeof TouchableOpacity> {
    animationsProps?: React.ComponentProps<typeof Animated.View>
    test?: string,
}

export default function AnimatedSplashButton(props: AnimatedSplashEntryProps) {
    const {test, animationsProps, ...pr} = props
    return (
        <TouchableOpacity {...pr} >
            <Animated.View
                style={style.container}
                entering={animationsProps?.entering}
            >
                <Text style={{ color: COLORS.Text.Light, fontSize: 25, fontWeight: "bold"}}>LOGIN</Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Text.Dark,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderStyle: "solid",
        borderWidth: 3,
        height: 50,
        borderColor: COLORS.Text.Dark,
        width: '100%'
    },
})