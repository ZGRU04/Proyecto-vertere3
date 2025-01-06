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
{/* <View style={styles.container}>
        <Stack.Screen
            options={{
                title: 'My home',
                headerStyle: { backgroundColor: '#f4511e' },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
                }}
        />
        <Text>Home Screen</Text>
        <Stack.Screen
            options={{
                title: 'My home',
                headerStyle: { backgroundColor: '#f4511e' },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
                }}
        />
        <Text>Home Screen</Text>
        <Link href={{ pathname: 'Qrscaner', params: { name: 'Bacon' } }}>Go to qr</Link>
    </View>
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
}); */}
