import {createAppContainer} from 'react-navigation'
import {createStackNavigator, HeaderBackground} from 'react-navigation-stack'
import JoueursListe from '../Components/JoueursListe'
import DetailPlayer from '../Components/DetailPlayer'
import Presentation from '../Components/Présentation'

const MPGStackNavigator = createStackNavigator({
    Présentation: {
        screen: Presentation,
        navigationOptions: {
            headerShown: false
        }
    },

    JoueursListe: {
        screen: JoueursListe,
        navigationOptions: {
            headerShown: false
        }
    },
    DetailPlayer: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
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
  
  export default createAppContainer(MPGStackNavigator)