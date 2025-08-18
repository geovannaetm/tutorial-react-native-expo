import { View, Text, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import Card1 from './src/components/Card1'
import Card2 from './src/components/Card2'
import Footer from './src/components/Footer'

export default function App() {
  return (
    <View style={styles.container}>

     <Header/>



      <View style={styles.content}>


       <Card1/>


      <Card2/>



        <View style={styles.vermais}>
          <Text>Ver mais..</Text>
        </View>





      </View>

     <Footer/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: " #3daff1",
    justifyContent: "center",
    alignItems: "center"

  },


  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "rgb(89, 196, 229)",

  },

 
  vermais:{
    backgroundColor:"#rgb(233, 154, 51)",
    width:90,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: "auto",
    marginRight:"auto"
  

  },

})