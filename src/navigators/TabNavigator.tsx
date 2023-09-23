import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import DashboardTab from "../screens/DashboardScreen";
import ListNavigator, {ListNavigatorParams} from "./ListNavigator";
import AlertsScreen from "../screens/AlertsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {Octicons} from '@expo/vector-icons';
import {COLORS} from "../constants/constants";

export type BottomTabParams = {
    Dash: undefined,
    List: ListNavigatorParams,
    Search : undefined,
    Alerts: undefined,
    Settings: undefined,
}

const Tab = createBottomTabNavigator<BottomTabParams>()

export default function TabNavigator() {
    const activeIconSize = 32;
    const inactiveIconSize = 25;
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: COLORS.Text.Dark,
            tabBarInactiveTintColor: COLORS.Text.Light,
        }}>
            <Tab.Screen name="Dash"
                        component={DashboardTab}
                        options={{
                            tabBarIcon: (tab) => {
                                const icon = "apps"
                                return (
                                    <Octicons name={icon}
                                              size={tab.focused ? activeIconSize : inactiveIconSize}
                                              color={tab.color}/>
                                );
                            },
                        }}/>
            <Tab.Screen name="List"
                        component={ListNavigator}
                        options={{
                            tabBarIcon: (tab) => {
                                const icon = "list-unordered";
                                return (
                                    <Octicons name={icon}
                                              size={tab.focused ? activeIconSize : inactiveIconSize}
                                              color={tab.color}/>
                                );
                            },
                        }}/>
            <Tab.Screen name="Search"
                        component={ListNavigator}
                        options={{
                            tabBarIcon: (tab) => {
                                const icon = "search";
                                return (
                                    <Octicons name={icon}
                                              size={tab.focused ? activeIconSize : inactiveIconSize}
                                              color={tab.color}/>
                                );
                            },
                        }}/>
            <Tab.Screen name="Alerts"
                        component={AlertsScreen}
                        options={{
                            tabBarIcon: (tab) => {
                                const icon = "bell";
                                return (
                                    <Octicons name={icon}
                                              size={tab.focused ? activeIconSize : inactiveIconSize}
                                              color={tab.color}/>
                                );
                            },
                        }}/>
            <Tab.Screen name="Settings"
                        component={SettingsScreen}
                        options={{
                            tabBarIcon: (tab) => {
                                const icon = "gear"
                                return (
                                    <Octicons name={icon}
                                              size={tab.focused ? activeIconSize : inactiveIconSize}
                                              color={tab.color}/>
                                );
                            },
                        }}/>
        </Tab.Navigator>
    )
}

