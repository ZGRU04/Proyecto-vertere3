import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';


import Config from 'react-native-config';
import { Button, PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LoginScreen } from './src/modules/auth/presentation/screens/LoginScreen';
import { MainNavigator } from './src/navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';

import { Main } from './src/Main';

enableScreens();

export function App(): React.JSX.Element {
	const isAuthenticated = true;

	return (
		<NavigationContainer>
			<PaperProvider>
				<Main/>
			</PaperProvider>
		</NavigationContainer>
		//isAuthenticated ? <MainNavigator/> : <AuthNavigation/>
	);
}

// <PaperProvider>
		// 	<SafeAreaView style={{flex:1,  backgroundColor: 'white'}}>
		// 		{/* <Text>Vertere 3</Text>
		// 		<Text>Entorno Actual: {Config.ENV}</Text>
		// 		<Text>API URL: {Config.API_URL}</Text>
		// 		<Button icon='pencil' >Hola mundo</Button>
		// 		<Icon name="magnify" size={24} color='black'></Icon> */}
		// 		<LoginScreen></LoginScreen>
		// 	</SafeAreaView>
		// </PaperProvider>
