import { View, Text, StyleSheet } from 'react-native'

function Footer() {
  return (
    <View style={styles.rodape}>
      <Text style={styles.namerodape}>Geovanna</Text>
    </View>
  )
}


const styles = StyleSheet.create({

  rodape: {
    flex: 2,
    width: "100%",
    backgroundColor: "#123041",
    justifyContent: "center",
    alignItems: "center",
   
  },

  namerodape: {
    color:"#fff",
    fontSize: "20px"
  }



})

export default Footer