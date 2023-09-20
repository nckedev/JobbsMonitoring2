import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from "../screens/SplashScreen";
import TabNavigator from "./TabNavigator";
import {SafeAreaView} from "react-native";

export type SplashNavigatorParamList = {
    Splash: undefined,
    Tabs: undefined,
}

const Stack = createNativeStackNavigator<SplashNavigatorParamList>();

export default function SplashNavigator() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Tabs" component={TabNavigator} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
