import { NavigatorScreenParams } from "@react-navigation/native";

export type AuthStackScreens = {
    SignInScreen: undefined;
    SignUpScreen: undefined;
    OnBoardingScreen: undefined;
}

export type HomeStackScreens = {
    HomeScreen: undefined;
}

export type MainStackScreens = {
    AuthStack: NavigatorScreenParams<AuthStackScreens>;
    HomeStack: NavigatorScreenParams<HomeStackScreens>;
}