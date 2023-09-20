import {CompositeNavigationProp, NavigationContainer} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import {BottomTabParams} from "./TabNavigator";
import DashboardScreen from "../screens/DashboardScreen";

export type ListNavigatorParams = {
    list : undefined,
}

type ListNavigationProps = CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParams>,
    NativeStackNavigationProp<ListNavigatorParams>>

// type prop = NativeStackNavigationProp<ListNavigatorParams>

const Stack = createNativeStackNavigator<ListNavigatorParams>();

export default function ListNavigator() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name={'list'} component={DashboardScreen}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}
