import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Profile() {

    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text>Página de Contato</Text>
            <Button
                title='Home'
                onPress={() => router.replace('/')}
            />

            <Button
                title='Sobre'
                onPress={() => router.push('/about')}
            />

            <Button
                title='Contato'
                onPress={() => router.push('/contact')}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
