import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { InputModeEnum } from '../../../../themes/imputs/enums/InputMode.enum';
import { globalStyleInputColor } from '../../../../themes/imputs/globaStyleInputs';

export const LoginFormScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                label="Correo electronico"
                value={email}
                onChangeText={email => setEmail(email)}
                style={styles.input}
                mode={InputModeEnum.OUTLINED}
                activeOutlineColor={globalStyleInputColor.outlineGreyColor}
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    input: {
        marginBottom: 10
    }
});
