import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class JoueurItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          //ultraPosition: '',
          isLoading: false
        }
      }

    render() {
        //console.log(this.props)
        const { joueur} = this.props
        

        /*switch(joueur.ultraPosition){
            case 10:
            console.log("Gardien de but")
            this.setState({ ultraPosition: 'G'})
            break;

            case 20:
            this.setState({ ultraPosition: 'D'})
            break;

            case 21:
            this.setState({ ultraPosition: 'L'})
            break;

            case 30:
            this.setState({ ultraPosition: 'MD'})
            break;

            case 31:
            this.setState({ ultraPosition: 'MO'})
            break;

            case 40:
            this.setState({ ultraPosition: 'A'})
            break;
        }*/

        var poste=''
        switch(joueur.ultraPosition){
            case 10:
            //this.setState({ ultraPosition: 'G'})
            poste='G'
            break;

            case 20:
            poste='D'
            break;

            case 21:
            poste='L'
            break;

            case 30:
            poste='MD'
            break;

            case 31:
            poste='MO'
            break;

            case 40:
            poste='A'
            break;
        }

        var noteRounded=0
        if(joueur.stats.averageRating==undefined)
        {
            noteRounded=0
        }
        else
        {
            noteRounded=Math.round((joueur.stats.averageRating)*10)/10
        }

        var buts=0
        if(joueur.stats.totalGoals==undefined)
        {
            buts=0
        }
        else
        {
            buts=joueur.stats.totalGoals
        }

        

        return (
          <TouchableOpacity style={styles.main_container} /*onPress={() => displayDetailForFilm(film.id)}*/>
            <View style={styles.playerContainer}> 
                <Text style={styles.lastName}>{joueur.lastName}</Text>
                <Text style={styles.others}>{noteRounded}</Text>
                <Text style={styles.others}>{buts}</Text>
                <Text style={styles.others}>{poste}</Text>
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
      flexWrap: 'wrap',
      marginLeft: 5
  },
  
  others: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5
  }
})

export default JoueurItem