import React from "react";
import { AuthStackScreens } from "../types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardingScreen, SignUpScreen, SignInScreen } from "../screens";

const Stack = createNativeStackNavigator<AuthStackScreens>();

export default function AuthStack() {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
    )
}