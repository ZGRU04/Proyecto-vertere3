import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LoginFormScreen } from '../components/LoginFormScreen';
import { Button } from 'react-native-paper';
import { papersButtonVariables} from '../../../../themes/buttons/globalStyleButtons';
import { ButtonModeEnum } from '../../../../themes/buttons/enums/ButtonMode.enum';

export const LoginScreen = () => {

    const redirectToHome = () => {
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <LoginFormScreen></LoginFormScreen>
            <Button
                mode={ButtonModeEnum.CONTAINED}
                theme={{ colors: papersButtonVariables.primaryButton }}
                onPress={redirectToHome}
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
