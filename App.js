import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text>logo</Text>
        <View style={styles.menu}></View>
      </View>



      <View style={styles.content}>


        <View style={styles.card1}>
          <View style={styles.fotocard1}></View>

          <View style={styles.subcard}>
            <Text>Titulo</Text>
            <Text>subtitulo fgdsgf</Text>
          </View>

        </View>


        <View style={styles.card2}>
          <View style={styles.fotocard2}></View>

          <View style={styles.titulo}>

            <Text>subtitulo fgdsgf</Text>
          </View>

        </View>



        <View style={styles.vermais}>
          <Text>Ver mais..</Text>
        </View>





      </View>

      <View style={styles.rodape}>
        <Text>Geovanna</Text>
      </View>

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


  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "rgb(89, 196, 229)",

  },

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


  vermais:{
    backgroundColor:"#rgb(233, 154, 51)",
    width:90,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: "auto",
    marginRight:"auto"
  

  },


  rodape: {
    flex: 2,
    width: "100%",
    backgroundColor: "rgb(233, 154, 51)",
    justifyContent: "center",
    alignItems: "center"
  }
})