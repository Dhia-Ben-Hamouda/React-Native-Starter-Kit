import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackScreens } from "../types";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

const Stack = createNativeStackNavigator<MainStackScreens>();

export default function MainStack() {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
    )
}