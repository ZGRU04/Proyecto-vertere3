import { Link, Stack, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { LoginScreen } from '../src/modules/auth/presentation/screens/LoginScreen';
import { Main } from '../src/Main';
import { PaperProvider } from 'react-native-paper';

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
      <LoginScreen/>
  );
}
