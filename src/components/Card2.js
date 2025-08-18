import {View, Text, StyleSheet} from 'react-native'


function Card2() {
  return (
    <View style={styles.card2}>
              <View style={styles.fotocard2}></View>
    
              <View style={styles.titulo}>
    
                <Text>subtitulo fgdsgf</Text>
              </View>
    
            </View>
  )
}

const styles = StyleSheet.create({
 
    card2: {
  
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
  
    titulo: {
      flexDirection: "colum"
    },
  
    fotocard2: {
      width: 80,
      height: 80,
      backgroundColor: "rgb(13, 16, 18)",
      margin: 10
    },
  
  
  })

export default Card2