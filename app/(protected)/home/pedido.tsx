import { Text, View, StyleSheet } from 'react-native';

export default function PedidoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tu pedido</Text>
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