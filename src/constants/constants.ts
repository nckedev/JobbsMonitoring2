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
    Card : { 
        Light : '#f8f8f8'
    } as const,
    Severity: {
        Error: 'rgba(199,54,54,0.49)',
        Warning: '',
    } as const,
} as const;

export const ROUTES: Record<string, string> = {
    Login: "login",
    TabNavigator: ""
} as const;