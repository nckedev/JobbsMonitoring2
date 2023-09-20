import React, {PropsWithChildren} from "react";
import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS} from "../constants/constants";
import Animated, {FadeIn, FadeInLeft, FadeInRight, SlideInLeft} from 'react-native-reanimated'


interface AnimatedSplashEntryProps extends React.ComponentProps<typeof TextInput>{
    animationsProps?: React.ComponentProps<typeof Animated.View>
    test?: string,
}

export default function AnimatedSplashEntry(props: AnimatedSplashEntryProps) {
    const {test, animationsProps, ...pr} = props
    return (
        <Animated.View
            style={style.container}
            entering={animationsProps?.entering}
        >
            <TextInput cursorColor={COLORS.Text.Dark} style={style.textInput} {...pr}></TextInput>
        </Animated.View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Text.Light,
        paddingVertical: 4,
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: COLORS.Border.Light,
        width: '100%'
    },
    textInput: {
        fontSize: 30,
        width: "100%",
        color: COLORS.Text.Dark
    }
})