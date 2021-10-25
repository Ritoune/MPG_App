import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import JoueursListe from '../Components/JoueursListe'
import DetailPlayer from '../Components/DetailPlayer'

const MPGStackNavigator = createStackNavigator({
    JoueursListe: {
      screen: JoueursListe,
    },
    DetailPlayer: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
      screen: DetailPlayer
    }
  })
  
  export default createAppContainer(MPGStackNavigator)