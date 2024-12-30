import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../modules/auth/presentation/screens/LoginScreen";

const Stack = createStackNavigator()

export const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}
