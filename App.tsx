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
import { Button, PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LoginScreen } from './src/modules/auth/presentation/screens/LoginScreen';

export function App(): React.JSX.Element {
	return (
		<PaperProvider>
			<SafeAreaView style={{flex:1,  backgroundColor: 'white'}}>
				{/* <Text>Vertere 3</Text>
				<Text>Entorno Actual: {Config.ENV}</Text>
				<Text>API URL: {Config.API_URL}</Text>
				<Button icon='pencil' >Hola mundo</Button>
				<Icon name="magnify" size={24} color='black'></Icon> */}
				<LoginScreen></LoginScreen>
			</SafeAreaView>
		</PaperProvider>
	);
}
