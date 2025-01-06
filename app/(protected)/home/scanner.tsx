import { Text, View, StyleSheet } from 'react-native';

export default function ScannerScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escanea tu producto</Text>
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