import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainStack from "./routes/MainStack";

export default function App() {
	return (
		<>
			<NavigationContainer>
				<GestureHandlerRootView style={{ flex: 1 }} >
					<MainStack />
				</GestureHandlerRootView>
			</NavigationContainer>
		</>
	)
}