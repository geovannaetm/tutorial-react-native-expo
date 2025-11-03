import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {

    const router = useRouter()

    const handleLogin = async() => {
      await  AsyncStorage.setItem('logado', 'true')
    }

    return (
        <View style={styles.container}>
            <Text>Inicializador</Text>

            <Button 
                title='Logar'
                onPress={handleLogin}
            />

            <Button 
                title='Cadastro'
                onPress={() => router.navigate('/signup')}
            />
            <Button 
                title='Home'
                onPress={() => router.navigate('/home')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})