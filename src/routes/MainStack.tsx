import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList } from "../@types/types";
import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
    )
}