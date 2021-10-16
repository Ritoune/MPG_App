import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import JoueursListe from './JoueursListe'

class JoueurItem extends React.Component {
    render() {
        console.log(this.props)
        const { joueur} = this.props
        if (joueur.stats.averagerating=undefined)
        {
            noteROunded=0
        }
        else {
            const noteROunded=Math.round((joueur.stats.averageRating)*10)/10
            console.log("Arrondi : "+noteROunded)
        }
        

        return (
          <TouchableOpacity style={styles.main_container} /*onPress={() => displayDetailForFilm(film.id)}*/>
            <View style={styles.playerContainer}> 
                <Text style={styles.lastName}>{joueur.lastName}</Text>
                <Text style={styles.others}>{Math.round((joueur.stats.averageRating)*10)/10}</Text>
                <Text style={styles.others}>{joueur.stats.totalGoals}</Text>
                <Text style={styles.others}>{joueur.ultraPosition}</Text>
                <Text style={styles.others}>{joueur.quotation}</Text>
            </View>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    height: 30,
    flexDirection: 'row'
  },
  playerContainer:{
      flex: 3,
      flexDirection:'row'
  },

  lastName: {
      flex: 2,
      flexWrap: 'wrap'
  },
  
  others: {
    flex: 1,
    flexWrap: 'wrap'
  }
})

export default JoueurItem