import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import MainStack from "./routes/MainStack";
import { store } from "./app/store";
import { theme } from "./theme/theme";

export default function App() {
	return (
		<>
			<NavigationContainer>
				<StoreProvider store={store} >
					<PaperProvider theme={theme} >
						<MainStack />
					</PaperProvider>
				</StoreProvider>
			</NavigationContainer>
		</>
	)
}