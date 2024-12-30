import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'

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
                mode="outlined"
                activeOutlineColor='#00d461'
            />
            <TextInput
                label="Contraceña"
                value={password}
                onChangeText={password => setPassword(password)}
                style={styles.input}
                mode="outlined"
                secureTextEntry={true}
                activeOutlineColor='#00d461'
            />
            <Text>
                e: {email}  _  
                p: {password}
            </Text>
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
