import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthStackParamList } from "../@types/types";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignInScreen" component={SignInScreen}  />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen}  />
        </Stack.Navigator>
    )
}