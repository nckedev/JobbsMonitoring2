import React, {PropsWithChildren} from "react";
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS} from "../constants/constants";
import Animated, {FadeIn, FadeInLeft, FadeInRight, SlideInLeft} from 'react-native-reanimated'
import {Octicons} from '@expo/vector-icons';



interface AnimatedSplashEntryProps extends React.ComponentProps<typeof TextInput>{
    animationsProps?: React.ComponentProps<typeof Animated.View>
    icon?: string,
}

export default function AnimatedSplashEntry(props: AnimatedSplashEntryProps) {
    const {icon, animationsProps, ...pr} = props
    return (
        <Animated.View
            style={style.container}
            entering={animationsProps?.entering}
        >
        <Octicons name={"bell"} size={20} color={COLORS.Text.PlaceHolder} />
            <TextInput cursorColor={COLORS.Text.Dark} style={style.textInput} {...pr}></TextInput>
        </Animated.View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Text.Light,
        paddingHorizontal: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 20,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: COLORS.Border.Light,
        width: '100%',
        flexDirection: "row",
        paddingTop: 6,
        paddingBottom: 4,
    },
    textInput: {
        marginLeft: 10,
        fontSize: 25,
        color: COLORS.Text.Dark
    }
})
