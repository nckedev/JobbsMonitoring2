import {
    Alert,
    Button,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack";
import {SplashNavigatorParamList} from "../navigators/SplashNavigator";
import AnimatedSplashEntry from "../components/AnimatedSplashEntry";
import {useState} from "react";
import Animated, {
    SlideInLeft,
    SlideInUp, ZoomIn
} from "react-native-reanimated";
import {COLORS} from "../constants/constants";
import AnimatedSplashButton from "../components/SplashButton";

type SplashScreenProp = NativeStackScreenProps<SplashNavigatorParamList, 'Splash'>

export default function SplashScreen({route, navigation}: SplashScreenProp) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        // <ScrollView style={style.content} contentContainerStyle={{ flexGrow:1, justifyContent: "center", gap: 10}}>
        <KeyboardAvoidingView style={style.content}
                              behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <View style={{alignSelf: "center", flexDirection: "row"}}>

                <Animated.Text style={[style.logoText, {color: COLORS.Primary}]}
                               entering={SlideInLeft.duration(200).springify().mass(1)}>
                    J
                </Animated.Text>
                <Animated.Text style={[style.logoText, {color: COLORS.Secondary}]}
                               entering={SlideInUp.duration(200).delay(300).springify().mass(0.6)}>
                    M
                </Animated.Text>
                <Animated.Text style={[style.logoText, {color: COLORS.Text.Dark}]}
                               entering={ZoomIn.duration(200).delay(800).springify()}>
                    .
                </Animated.Text>
            </View>
            <AnimatedSplashEntry placeholder={"Username@jobbs.se"}
                                icon={"bell"} 
                                 placeholderTextColor={COLORS.Text.PlaceHolder}
                                 onChangeText={setUsername}
                                 animationsProps={{entering: ZoomIn.duration(500).delay(1000).springify()}}
                                 value={username}/>
            <AnimatedSplashEntry placeholder={"Password"}
                                 placeholderTextColor={COLORS.Text.PlaceHolder}
                                 onChangeText={setPassword}
                                 animationsProps={{entering: ZoomIn.duration(500).delay(1300).springify()}}
                                 value={password}/>
            <AnimatedSplashButton onPress={() => loginPressed(username, password, navigation )} 
                                  animationsProps={ { entering : ZoomIn.duration(500).delay(1500).springify()}} 
                                  style={{ marginTop:20}}/>
        </KeyboardAvoidingView>
        // </ScrollView>
    )
}

const loginPressed = (username: string, password: string, navigation: NativeStackNavigationProp<SplashNavigatorParamList, "Splash", undefined>): void => {
    if (username == 'Test') {
        navigation.replace('Tabs')
    } else {
        Alert.alert("fel användarnamn eller lösenord")
    }
}


const style = StyleSheet.create({
    content: {
        flex: 1,
        alignItem: 'center',
        // flexGrow: 1,
        justifyContent: 'center',
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    logoText: {
        alignSelf: 'center',
        fontSize: 200,
        // shadowColor : '#000',
        // shadowRadius: 100,
        // shadowOpacity: 1,
        // shadowOffset : { height : 0 , width: 0},
        fontWeight: "800",
        color: COLORS.Primary,
    }


})
