import React from 'react'
import { View, StyleSheet, ActivityIndicator, Text, Image} from 'react-native'

//Component affichant la fiche technique d'un joueur
class DetailPlayer extends React.Component {
  //Constructeur : initialisation de tous les paramètres du state utilisé
    constructor(props) {
      super(props)
      this.state = {
        joueurId: undefined,
        firstName: undefined,
        lastName: undefined,
        ultraPosition: undefined,
        clubId: undefined,
        averageRating: undefined,
        totalGoals: undefined,
        totalStartedMatches: undefined,
        totalPlayedMatches: undefined,
        maillot: undefined,
        nomClub: undefined,
        isLoading: true
      }
    }
  
    //Fonction appelée lors de la construction du component
    //Mise à jour du state avec toute les valeurs envoyés par le component JoueurItem
    componentDidMount() {
        this.setState({
            joueurId: this.props.navigation.state.params.joueurId,
            firstName: this.props.navigation.state.params.firstName,
            lastName: this.props.navigation.state.params.lastName,
            ultraPosition: this.props.navigation.state.params.ultraPosition,
            clubId: this.props.navigation.state.params.clubId,
            averageRating: this.props.navigation.state.params.averageRating,
            totalGoals: this.props.navigation.state.params.totalGoals,
            totalStartedMacthes: this.props.navigation.state.params.totalStartedMacthes,
            totalPlayedMatches: this.props.navigation.state.params.totalPlayedMatches,
            maillot: this.props.navigation.state.params.maillot,
            nomClub: this.props.navigation.state.params.nomClub
          })
    }
  
    //Affichage de l'animation de chargement
    _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View >
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }
  
    render() {
        //Attribution du bon poste en fonction de la valeur du paramètre du state ultraPosition
        var poste=''
        switch(this.state.ultraPosition){
            case 10:
            poste='Gardien de but'
            break;

            case 20:
            poste='Défenseur central'
            break;

            case 21:
            poste='Latéral'
            break;

            case 30:
            poste='Milieu défensif'
            break;

            case 31:
            poste='Milieu offensif'
            break;

            case 40:
            poste='Attaquant'
            break;
        }
        
      return (
          
          //Affichage des statistiques du joueur sélectionné par l'utilisateur
          <View>
              <Image style={styles.jersey} source={{uri: this.state.maillot,}}/>
              <Text style={styles.nom}> {this.state.firstName} </Text>
              <Text style={styles.prenom}> {this.state.lastName} </Text>
              <Text style={styles.poste}> Poste : {poste} </Text>
              <Text style={styles.club}> Club : {this.state.nomClub} </Text>
              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <Text style={styles.gauche}> Moyenne :  </Text>
                    <Text style={styles.droite}> {this.state.averageRating} </Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.gauche}> Nombre de buts :  </Text>
                    <Text style={styles.droite}> {this.state.totalGoals} </Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.gauche}> Nombre de titularisations : </Text>
                    <Text style={styles.droite}> {this.state.totalStartedMacthes} </Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.gauche}> Nombre de matchs joués :  </Text>
                    <Text style={styles.droite}> {this.state.totalPlayedMatches} </Text>
                </View>
              </View>
          </View>
      )
    }
  }

  //Externalisation des styles
  const styles = StyleSheet.create({
    
    jersey: {
      width: 60,
      height: 60,
      marginTop: 20,
      marginLeft: 160
  },

    nom: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#5BBA49',
        marginTop: 18,
        marginLeft: 160,
        marginRight: 40
    },

    prenom: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#5BBA49',
        marginLeft: 132,
        marginRight: 40
    },

    poste: {
        marginTop:30,
        marginLeft: 120,
        marginRight: 40,
        fontSize: 16
    },

    club: {
        fontSize: 16,
        marginLeft: 140,
        marginRight: 40,
    },

    statsContainer: {
        marginTop: 50,
        borderWidth: 0.2,
        borderRadius:20,
    },

    stat: {
        flexDirection:'row'
    },
        
    gauche: {
        marginTop:5,
        marginBottom:5,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 20
    },

    droite: {
        marginTop:5,
        marginBottom:5,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 30
    },
    
  })

  //Exportation du component DetailPlayer
  export default DetailPlayer
  