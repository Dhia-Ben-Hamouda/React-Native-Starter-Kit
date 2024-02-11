import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainStack from "./routes/MainStack";
import store, { persistor } from "./app/store";

export default function App() {
	return (
		<>
			<NavigationContainer>
				<StoreProvider store={store} >
					<PersistGate persistor={persistor} >
						<GestureHandlerRootView style={{ flex: 1 }} >
							<MainStack />
						</GestureHandlerRootView>
					</PersistGate>
				</StoreProvider>
			</NavigationContainer>
		</>
	)
}