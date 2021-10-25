import React from 'react'
import { View, StyleSheet, ActivityIndicator, Text, ScrollView, Image} from 'react-native'

class DetailPlayer extends React.Component {
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
  
    componentDidMount() {
        console.log(this.props)
    console.log("Param : "+this.props.navigation.state.params.joueurId)
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
  
    _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View >
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }
  
    /*_displayPlayer() {
      //const { film } = this.state
      if (this.state.joueur != undefined) {
        return (
          <ScrollView>
              <Text>Nom du joueur : {this.state.joueur.lastName} </Text>
          </ScrollView>
        )
      }
      else {<Text>Erreur de transmission de données</Text>}
    }*/
  
    render() {
        var poste=''
        switch(this.state.ultraPosition){
            case 10:
            //this.setState({ ultraPosition: 'G'})
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

  const styles = StyleSheet.create({
    
  
    jersey: {
      //flex: 2,
      //flexWrap: 'wrap',
      width: 60,
      height: 60,
      marginTop: 20,
      marginLeft: 160,
      //marginRight: 150,
  },

    nom: {
        //flex: 2,
        //flexWrap: 'wrap',
        //width: 25,
        //height: 15,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#5BBA49',
        marginTop: 18,
        marginLeft: 160,
        marginRight: 40,

        
        
    },

    prenom: {
        //flex: 2,
        //flexWrap: 'wrap',
        //width: 25,
        //height: 15,
        //marginTop:10,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#5BBA49',
        marginLeft: 132,
        marginRight: 40,
        //justifyContent: 'space-between',
        //alignItems: 'center',
    },

    poste: {
        //flex: 2,
        //flexWrap: 'wrap',
        //width: 25,
        //height: 15,
        marginTop:30,
        marginLeft: 120,
        marginRight: 40,
        fontSize: 16,
        //justifyContent: 'space-between',
        //alignItems: 'center',
    },

    club: {
        //flex: 2,
        //flexWrap: 'wrap',
        //width: 25,
        //height: 15,
        //marginTop:30,
        fontSize: 16,
        marginLeft: 140,
        marginRight: 40,
        //justifyContent: 'space-between',
        //alignItems: 'center',
    },

    statsContainer: {
        marginTop: 50,
        borderWidth: 0.2,
        borderRadius:20,
    },

    stat: {
        //flex: 2,
        flexDirection:'row'
    },
        
    gauche: {
        //flex: 2,
        //flexWrap: 'wrap',
        //width: 25,
        //height: 15,
        marginTop:5,
        marginBottom:5,
        flex: 1,
        flexWrap: 'wrap',
        //borderRightWidth: 0.2,
        marginLeft: 20,
        
        //marginRight: 40,
        //justifyContent: 'space-between',
        //alignItems: 'center',
    },

    droite: {
        //flex: 2,
        //flexWrap: 'wrap',
        //width: 25,
        //height: 15,
        marginTop:5,
        marginBottom:5,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 30,
        //marginRight: 40,
        //justifyContent: 'space-between',
    },
    
  })

  export default DetailPlayer
  