import {View, Text, StyleSheet} from 'react-native'
import {Image} from 'expo-image'

function Header() {
  return (
      <View style={styles.header}>
          <Image
          style={styles.img}
           source={"https://img.freepik.com/vetores-premium/arte-cinema-vetor_23-2147494040.jpg"}
          />
          
          <Image
          style={styles.menu}
           source={"https://cdn-icons-png.flaticon.com/512/3388/3388823.png"}
          />

          </View>
  )
}



const styles = StyleSheet.create({
  

  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "#123041",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20
  },

  img: {
    width: 70,
    height: 70,
  },


  menu: {
    width: 60,
    height: 60,
  },

})

export default Header