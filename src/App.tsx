/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginScreen } from './modules/auth/presentation/screens/LoginScreen';

export function App(): React.JSX.Element {
	return (
		<PaperProvider>
			<SafeAreaView style={{flex:1,  backgroundColor: 'white'}}>
				<LoginScreen></LoginScreen>
			</SafeAreaView>
		</PaperProvider>
	);
}
