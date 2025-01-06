import { useNavigation, useRouter } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function LogoutScreen() {
    const router = useRouter();
    
    const goToLogin = () => {
        router.replace('/');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cerrando sesión...</Text>
            <Button onPress={goToLogin}>Ir a dloguin</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});