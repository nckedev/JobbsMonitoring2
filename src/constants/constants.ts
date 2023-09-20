import {ColorValue} from "react-native";

type ColorType = "Dark" | "Light";

export const COLORS = {
    Primary: '#592d86',
    PrimaryLight: '',
    Secondary: '#da7a29',
    Background: "",
    Text: {
        Dark: '#3d3d3d',
        Light: '#e5e5e5',
        PlaceHolder: '#d3d3d3'
    } as const,
    Border: {
        Light: '#b6b6b6'
    } as const,
    Severity: {
        Error: '',
        Warning: '',
    } as const,
} as const;

export const ROUTES: Record<string, string> = {
    Login: "login",
    TabNavigator: ""
} as const;