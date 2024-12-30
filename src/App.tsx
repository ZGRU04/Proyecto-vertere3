import 'react-native-gesture-handler';

import { AuthNavigation } from './navigation/AuthNavigation';
import { MainNavigator } from './navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';

export function App(): React.JSX.Element {
	const isAuthenticated = true;

	return (
		<MainNavigator/>
		//isAuthenticated ? <MainNavigator/> : <AuthNavigation/>
	);
}
