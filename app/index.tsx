import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { LoginScreen } from '../src/modules/auth/presentation/screens/LoginScreen';

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
      <LoginScreen/>
  );
}
