import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { InputModeEnum } from '../../../../themes/imputs/enums/InputMode.enum';
import { globalStyleInputColor } from '../../../../themes/imputs/globaStyleInputs';
import { ButtonModeEnum } from '../../../../themes/buttons/enums/ButtonMode.enum';
import { papersButtonVariables } from '../../../../themes/buttons/globalStyleButtons';
import { Login } from '../../domain/entities/login';

export const LoginFormComponent = ({ onSubmit }: { onSubmit: (data: Login) => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let isSubmited: boolean = false;

    const submit = () => {
        isSubmited = true;
        onSubmit({email, password});
    }
    /**
     * validacion de input
     * mostrar spinner
     * si: redireccionar
     * no: Mostrat alerta de fallo
     */

    const isValidForm = () => {
        let isValid = true;
    }

    return (
        <View style={styles.container}>
            <TextInput
                label="Correo electronico"
                value={email}
                onChangeText={email => setEmail(email)}
                mode={InputModeEnum.OUTLINED}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput
                label="Contraseña"
                value={password}
                onChangeText={password => setPassword(password)}
                style={styles.input}
                mode={InputModeEnum.OUTLINED}
                secureTextEntry={true}
                activeOutlineColor={globalStyleInputColor.outlineGreyColor}
            />
            <Button
                mode={ButtonModeEnum.CONTAINED}
                labelStyle={{color: papersButtonVariables.primaryButton.fontColor}}
                theme={{ colors: papersButtonVariables.primaryButton }}
                onPress={submit}
            >Ingresar</Button>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    input: {
        marginBottom: 10,
        color: 'green'
    }
});
