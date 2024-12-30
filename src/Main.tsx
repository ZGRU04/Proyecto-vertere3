import 'react-native-gesture-handler';

import { AuthNavigation } from './navigation/AuthNavigation';
import { MainNavigator } from './navigation/MainNavigator';

export const Main = () => {
	const isAuthenticated = true;

	return (
		isAuthenticated ? <MainNavigator /> : <AuthNavigation/>
	);
}

{/* <AuthNavigation/> */}
{/* <SafeAreaView style={{flex:1,  backgroundColor: 'white'}}>
	<Text>Vertere 3</Text>
	<Text>Entorno Actual: {Config.ENV}</Text>
	<Text>API URL: {Config.API_URL}</Text>
	<Button icon='pencil' >Hola mundo</Button>
	<Icon name="magnify" size={24} color='black'></Icon>
	<LoginScreen></LoginScreen>
</SafeAreaView> */}
