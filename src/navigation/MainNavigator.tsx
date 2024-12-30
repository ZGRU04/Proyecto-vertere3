import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../modules/auth/presentation/screens/LoginScreen';
import { HomeScreen } from '../modules/HomeScreen.tsx/presentation/screens/HomeScreen';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
  )
}
