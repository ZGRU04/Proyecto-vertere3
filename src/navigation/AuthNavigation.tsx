import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../modules/auth/presentation/screens/LoginScreen";

export type RootStackParams = {
    Login: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
            }
        }}>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}
