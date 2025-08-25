import { View, Text, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import Card1 from './src/components/Card1'
import Footer from './src/components/Footer'

export default function App() {
  return (
    <View style={styles.container}>

      <Header />



      <View style={styles.content}>


        <Card1 
        title="House of Dragons" 
        desc="Guerra pelo trono..."
        img="https://conteudo.imguol.com.br/c/entretenimento/bc/2022/06/22/poster-oficial-de-house-of-the-dragon-1655915054477_v2_3x4.jpg"
        />

        <Card1 
        title="Lord of The Rings" 
        desc="Batalha contra..." 
        img="https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        />

        <Card1
        title="Dexter"
        desc="O serial killer de..."
        img= "https://m.media-amazon.com/images/I/81JKXT1j0OL.jpg"
        />



        <View style={styles.vermais}>
          <Text style={styles.textvermais}>Ver mais..</Text>
        </View>





      </View>

      <Footer />

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
    backgroundColor: "#a6ccc1",

  },


  vermais: {
    backgroundColor: "#123041",
    width: 90,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto"


  },

  textvermais:{
    color:"#fff"
  }

})