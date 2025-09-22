import { View, Text, StyleSheet, Pressable } from 'react-native'
import {Image} from 'expo-image'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import { useUserStore} from '../stores/useUserStore';

function CardUser({id, name, email, avatar}) {


  const router = useRouter()
  const {users, setUsers} = useUserStore()

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3333/profile/${id}`, {
      method: 'DELETE'
    });

    if(response.ok){
      alert("Usuário deletado com sucesso")
      const updatedUsers = users.filter(user => user.id !== id);//cria um novo array sem o id que foi deletado
      setUsers(updatedUsers);
    } else {
      alert("Erro ao deletar usuário")
    }
  }


   const handleEdit = () => {
       console.log("Editar usuário")
       router.push({
        pathname: '/edituser',
        params: {id, name, email, avatar}
      })
    }

  return (
    <View style={styles.card}>
      <Image 
        style={styles.image}
        source={avatar}
      />
      <View style={styles.info}>
        <Text style={styles.h1}>{name}</Text>
        <Text>{email}</Text>
      </View>
      <View>
        <Pressable onPress={handleEdit}>
       <Feather name="edit" size={22} color="black" />
        </Pressable>

        <Pressable onPress={handleDelete}>
        <EvilIcons name="trash" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 10,
    flexDirection: 'row',
    gap: 15,
    backgroundColor: "#cab1b1ff",
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15,
  },
  image: {
    width: 50,
    height: 60,
    backgroundColor: "#000"
  },
  info: {
    flex: 1,
    flexDirection: 'column',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "rgb(90, 120, 138)"
  }
})

export default CardUser