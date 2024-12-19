import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'

export const LoginFormScreen = () => {
    const [text, setText] = React.useState("");
    return (
        <View style={styles.container}>
            <TextInput
                label="Correo electronico"
                value={text}
                onChangeText={text => setText(text)}
                style={styles.input}
            />
            <TextInput
                label="Contraceña"
                value={text}
                onChangeText={text => setText(text)}
                style={styles.input}
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
