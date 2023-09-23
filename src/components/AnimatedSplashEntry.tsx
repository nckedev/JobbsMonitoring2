import React, {FC, PropsWithChildren} from "react";
import {SafeAreaView, StyleSheet, Text, TextInput, TextProps, View} from 'react-native';
import {COLORS} from "../constants/constants";
import Animated, {FadeIn, FadeInLeft, FadeInRight, SlideInLeft} from 'react-native-reanimated'
import {Octicons} from '@expo/vector-icons';


type IconName = "person" | "key";
interface AnimatedSplashEntryProps extends React.ComponentProps<typeof TextInput>{
    animationsProps?: React.ComponentProps<typeof Animated.View>
    icon?: IconName,
}


export default function AnimatedSplashEntry(props: AnimatedSplashEntryProps) {
    const {icon, animationsProps, ...pr} = props
    return (
        <Animated.View
            style={style.container}
            entering={animationsProps?.entering}
        >
        <Octicons name={icon} size={20} color={COLORS.Border.Light} style={{ width : 20}} />
            <TextInput cursorColor={COLORS.Text.Dark} style={style.textInput} {...pr}></TextInput>
        </Animated.View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Card.Light,
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
        alignSelf: "stretch",
        backgroundColor : "#fff343",
        marginLeft: 10,
        fontSize: 25,
        color: COLORS.Text.Dark
    }
})
