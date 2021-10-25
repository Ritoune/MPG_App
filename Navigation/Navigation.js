import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import JoueursListe from '../Components/JoueursListe'
import DetailPlayer from '../Components/DetailPlayer'
import Presentation from '../Components/Présentation'

//Creation du navigateur de vue avec la librairy react navigation
const MPGStackNavigator = createStackNavigator({
  
  //View Presentation
    Présentation: {
        screen: Presentation,
        navigationOptions: {
            headerShown: false
        }
    },

    //View JoueursListe
    JoueursListe: {
        screen: JoueursListe,
        navigationOptions: {
            headerShown: false
        }
    },

    //View DetailPlayer
    DetailPlayer: { 
      screen: DetailPlayer,
      navigationOptions: {
          title: 'Fiche du joueur',
          headerStyle: {
            backgroundColor: '#5BBA49',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        //headerShown: false
    }
    }
  })
  
  //Exportation du navigateur de vue MPGStackNavigator
  export default createAppContainer(MPGStackNavigator)