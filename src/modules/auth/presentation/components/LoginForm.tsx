import { StyleSheet, View, Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { Controller, useForm } from 'react-hook-form';

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { InputModeEnum } from '../../../../themes/imputs/enums/InputMode.enum';
import { globalStyleInputColor } from '../../../../themes/imputs/globaStyleInputs';
import { ButtonModeEnum } from '../../../../themes/buttons/enums/ButtonMode.enum';
import { papersButtonVariables } from '../../../../themes/buttons/globalStyleButtons';
import { Login } from '../../domain/entities/login';
import { globalTextStyle } from '../../../../themes/errors/error';


const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Introduce un correo válido")
        .required("El correo es obligatorio"),
    password: Yup.string()
        .required("La contraseña es obligatoria"),
});

export const LoginFormComponent = ({ onSubmit }: { onSubmit: (data: Login) => void }) => {
    
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const submit = (data: Login) => {
        onSubmit(data)
    }

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <TextInput
                            style={ styles.input }
                            label="Correo electrónico"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onBlur={ onBlur }
                            onChangeText={ onChange }
                            value={ value }
                            mode={ InputModeEnum.OUTLINED }
                            activeOutlineColor={globalStyleInputColor.outlineGreyColor}
                        />
                        {errors.email && (
                            <Text style={globalTextStyle.error} >{errors.email.message}</Text>
                        )}
                    </View>
                )}
            />
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <TextInput
                            style={ styles.input }
                            label="Contraseña"
                            onBlur={ onBlur }
                            onChangeText={ onChange }
                            value={value}
                            mode={InputModeEnum.OUTLINED}
                            secureTextEntry={true}
                            activeOutlineColor={globalStyleInputColor.outlineGreyColor}
                        />
                        {errors.password && (
                            <Text style={globalTextStyle.error}>{errors.password.message}</Text>
                        )}
                    </View>
                )}
            />
            <Button
                mode={ButtonModeEnum.CONTAINED}
                labelStyle={{color: papersButtonVariables.primaryButton.fontColor}}
                theme={{ colors: papersButtonVariables.primaryButton }}
                onPress={handleSubmit(submit)}
            >
                Ingresar
            </Button>
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
