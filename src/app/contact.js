import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import CardUser from '../components/CardUser';

export default function Contact() {

    const router = useRouter();

    const [users, setUser] = useState([]);


    useEffect(() => {
        const listUser = async () => {
            const response = await fetch("http://localhost:3333/profile")
            if (response.ok) {
                console.log("Lista carregada com sucesso")
                const data = await response.json()
                console.log(data.profile)
                setUser(data.profile)

            } else {
                console.log("Erro ao carregar a lista")

            }
        }
        listUser()
    }, [])

    return (
        <View style={styles.container}>
            <Text>Página de Contato</Text>

            {users.map((user) => (
                <CardUser
                key={user.id} 
                id={user.id}
                name={user.name} 
                email={user.email} 
                avatar={user.avatar} 
                users={users}
                setUser={setUser}
                />
            ))}



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
