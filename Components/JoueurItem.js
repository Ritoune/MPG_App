import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

//Component JoueurItem correspondant à chaque élément de la Flatlist du component JoueursListe
class JoueurItem extends React.Component {

  //Constructeur : intialisation de chaque paramètre du state utilisés
    constructor(props) {
        super(props)
        this.state = {
          isLoading: false,
          clubs: []
        }
      }

      //Mise à jour du state à la construction du component, avec les données collectés de l'api donnant la liste des joueurs
      componentDidMount()
      {
          this.setState({clubs: this.props.data})
      }

      

    render() {
        const { joueur, displayDetailPlayer} = this.props

        //Attribution du bon poste en fonction de la valeur de ultraPosition
        var poste=''
        switch(joueur.ultraPosition){
            case 10:
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

        //Attribution de l'arrondi de la moyenne
        //Prise en charge des cas de joueurs non notés 
        var noteRounded=0
        if(joueur.stats.averageRating==undefined)
        {
            noteRounded=0
        }
        else
        {
            noteRounded=Math.round((joueur.stats.averageRating)*10)/10
        }

        //Prise en charge des joueurs qui n'ont pas encore marqué et qui n'ont pas de valeur pour totalGoals dans l'api 
        var buts=0
        if(joueur.stats.totalGoals==undefined)
        {
            buts=0
        }
        else
        {
            buts=joueur.stats.totalGoals
        }

        //Attribution du bon maillot et de la bonne abréviation du nom du club pour chaque joueur
        var nomClub=" "
        var urlJersey=" "
        Object.entries(this.state.clubs).forEach((club) => {
            if (joueur.clubId==club[1].id) {
                urlJersey=club[1].defaultJerseyUrl
                nomClub=club[1].shortName
            }
        })

        //Affichage de chaque élément de la FlatList du component JoueursListe
        return (
          <TouchableOpacity style={styles.main_container} onPress={() => displayDetailPlayer(joueur.id, joueur.firstName,joueur.lastName, joueur.ultraPosition, joueur.clubId, noteRounded, joueur.stats.totalGoals, joueur.stats.totalMatches, joueur.stats.totalStartedMatches, joueur.stats.totalPlayedMatches, urlJersey, nomClub)}>
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

//Externalisation des styles
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

//Exportation du component JoueurItem
export default JoueurItem