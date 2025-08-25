import { View, Text, StyleSheet } from 'react-native'
import {Image} from 'expo-image'


function Card1({title, desc, img}) {
  return (
    <View style={styles.card1}>
      <Image
      style={styles.fotocard1}
      source={img}
      />

      <View style={styles.subcard}>
        <Text>{title}</Text>
        <Text>{desc}</Text>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({

  card1: {

    width: "80%",
    height: 120,
    backgroundColor: "rgb(207, 211, 212)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 40,
    borderRadius: 20

  },

  subcard: {
    flexDirection: "colum"
  },

  fotocard1: {
    width: 80,
    height: 80,
    backgroundColor: "rgb(13, 16, 18)",
    margin: 10
  },


})

export default Card1