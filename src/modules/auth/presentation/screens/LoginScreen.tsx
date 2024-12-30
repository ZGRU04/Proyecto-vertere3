import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LoginFormScreen } from '../components/LoginFormScreen';
import { Button } from 'react-native-paper';
import { globalVariables } from '../../../../themes/GlobalVariables';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <LoginFormScreen></LoginFormScreen>
        <Button
            mode='contained'
            theme={{ colors: globalVariables.primaryButton }}
        >Ingresar</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 700,
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100, // Tamaño de la imagen
        borderRadius: 10,
        textAlign: 'center'
    },
});
