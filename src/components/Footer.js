import {View, Text, StyleSheet} from 'react-native'

function Footer() {
  return (
    <View style={styles.rodape}>
            <Text>Geovanna</Text>
    </View>
  )
}


const styles = StyleSheet.create({
 
    rodape: {
      flex: 2,
      width: "100%",
      backgroundColor: "rgb(233, 154, 51)",
      justifyContent: "center",
      alignItems: "center"
    }
  })

export default Footer