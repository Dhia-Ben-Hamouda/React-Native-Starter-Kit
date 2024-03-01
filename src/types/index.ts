import { NavigatorScreenParams } from "@react-navigation/native";
import { backgrounds, colors } from "../theme";

export interface IUser {

}

// redux state types / interfaces

export interface IReduxAuthState {
    user: IUser | null;
    isAuthenticated: boolean;
}

// navigation types / interfaces

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