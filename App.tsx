/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
	Text,
	View,
} from 'react-native';
import Config from 'react-native-config';
import { PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {
	return (
		<PaperProvider>
			<View>
				<Text>Vertere 3</Text>
				<Text>Entorno Actual: {Config.ENV}</Text>
				<Text>API URL: {Config.API_URL}</Text>
			</View>
		</PaperProvider>
	);
}

export default App;
