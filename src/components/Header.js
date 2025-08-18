import {View, Text, StyleSheet} from 'react-native'


function Header() {
  return (
      <View style={styles.header}>
            <Text>logo</Text>
            <View style={styles.menu}></View>
          </View>
  )
}



const styles = StyleSheet.create({
  

  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgb(233, 154, 51)",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20
  },


  menu: {
    width: 40,
    height: 40,
    backgroundColor: "rgb(13, 16, 18)"
  },

})

export default Header