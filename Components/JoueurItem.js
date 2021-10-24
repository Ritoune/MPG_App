import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
//import { getAllClubs } from '../API/API_Clubs'

class JoueurItem extends React.Component {
    constructor(props) {
        super(props)
        //this.clubs,
        this.state = {
          //ultraPosition: '',
          isLoading: false,
          clubs: []
        }
        //console.log(props)
        //console.log(this.props.data)
      }

      componentDidMount()
      {
          this.setState({clubs: this.props.data})
          //console.log(this.props.data)
          //const listClubs=this.props.data
          //console.log(this.state.clubs)

        /*this.state.data.forEach(function (club) {
            if (club.id==this.clubId) {
                console.log("Trouvé")
            }
        })*/
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

        var urlJersey=" "
        Object.entries(this.state.clubs).forEach((club) => {
            //console.log(club[1])
            if (joueur.clubId==club[1].id) {
                urlJersey=club[1].defaultJerseyUrl
            }

            
        })
        console.log(urlJersey)
        //console.log(joueur.clubId)

        

        return (
          <TouchableOpacity style={styles.main_container} /*onPress={() => displayDetailForFilm(film.id)}*/>
            <View style={styles.playerContainer}> 
                <Image style={styles.logo} source={{uri: urlJersey,}}/>
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

  logo: {
    //flex: 2,
    //flexWrap: 'wrap',
    width: 25,
    height: 25,
    marginLeft: 20,
    marginRight: 40,
    margin:0,
},
  
  others: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5
  }
})

export default JoueurItem