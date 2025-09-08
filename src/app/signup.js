import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Signup() {

    const router = useRouter();

    const [nome, setNome] = useState("nome");
    const [sobrenome, setSobrenome] = useState("sobrenome");

    return (
        <View style={styles.container}>
            <Text>Cadastro</Text>

            <Text>Digite seu  nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}

            />


            <Text>Digite seu Sobrenome:</Text>
            <TextInput
                style={styles.input}
                value={sobrenome}
                onChangeText={setSobrenome}

            />


            <Text>Olá {nome} {sobrenome}!</Text>

           

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#777',
        width: 200,
        margin: 10,
        borderRadius: 5


    }
})
