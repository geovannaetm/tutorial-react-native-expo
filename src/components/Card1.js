import {View, Text, StyleSheet} from 'react-native'


function Card1() {
  return (
    <View style={styles.card1}>
              <View style={styles.fotocard1}></View>
    
              <View style={styles.subcard}>
                <Text>Titulo</Text>
                <Text>subtitulo fgdsgf</Text>
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