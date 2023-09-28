import {AuthConfiguration, authorize, refresh} from "react-native-app-auth";


export default async function AzureAD() {
    const config: AuthConfiguration = {
        issuer: 'https://login.microsoftonline.com/jobbs/v2.0',
        clientId: '',
        redirectUrl: '',
        scopes: ['openid', 'profile', 'email', 'offline_access'],
    }

    const authState = await authorize(config);

    const refreshedState = await refresh(config, {refreshToken: authState.refreshToken});

    return (<></>);
}