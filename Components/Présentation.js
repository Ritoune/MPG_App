import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, ScrollView, ActivityIndicator, Text, Picker, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Presentation extends React.Component {

    
    render() {

        return (
          <View style={styles.main_container}>
              <Image style={styles.logo} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/logo.png')}/>
              <View style={styles.presentation}>
                <Text style={styles.titre}>Test technique MPG </Text>
                <Text style={styles.auteur}>Par Henri Petrelli</Text>
              </View>
              <TouchableOpacity style={styles.buttonContainer} onPress={() =>this.props.navigation.navigate("JoueursListe")}>
                  <Text style={styles.textButtonContainer}>Découvrir la béta</Text>
              </TouchableOpacity>
          </View>
        )
    }

}

const styles = StyleSheet.create({

    main_container: {
        flex: 3,
        marginTop: 35,
        backgroundColor: 'white'
      },
  
      logo: {
          width: 100,
          height: 40,
          marginLeft: 140,
          margin:50,
          marginTop:100
      },

      presentation: {
        marginTop: 30,
        marginBottom: 30,
        borderWidth: 0.2,
        borderRadius:20,
        marginLeft:40,
        marginRight: 40
      },

    titre: {
      //flex: 3,
      marginTop:35,
      marginLeft: 50,
      fontSize: 25
      //backgroundColor: 'white'
    },

    auteur: {
        //flex: 3,
        marginTop: 35,
        marginLeft: 80,
        marginBottom: 35,
        fontSize: 20
        //backgroundColor: 'white'
      },

    buttonContainer: {
        margin: 10,
        marginTop: 100,
        marginLeft: 110,
        marginRight: 130,
        borderWidth: 0.2,
        borderRadius:20,
        borderColor: 'white',
        backgroundColor: '#5BBA49',

      },

      textButtonContainer: {
          color: 'white',
          fontSize: 18,
          marginLeft: 5
      },

    
  })

export default Presentation