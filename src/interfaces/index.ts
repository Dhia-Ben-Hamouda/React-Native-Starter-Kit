import { NavigatorScreenParams } from "@react-navigation/native";

export type IAuthStack = {
    SignInScreen: undefined;
    SignUpScreen: undefined;
}

export type IHomeStack = {
    HomeScreen: undefined;
}

export type IMainStack = {
    AuthStack: NavigatorScreenParams<IAuthStack>;
    HomeStack: NavigatorScreenParams<IHomeStack>;
}