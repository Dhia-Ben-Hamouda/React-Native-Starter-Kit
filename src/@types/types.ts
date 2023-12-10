import { NavigatorScreenParams } from "@react-navigation/native"

export type AuthStackParamList = {
    SignInScreen: undefined,
    SignUpScreen: undefined
}

export type MainStackParamList = {
    AuthStack: NavigatorScreenParams<AuthStackParamList>,
}