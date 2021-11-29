import React from 'react'
import { StyleSheet, View, TextInput, FlatList, ActivityIndicator, Text, Picker, Image} from 'react-native'
import JoueurItem from '../Components/JoueurItem'
import { getAllPlayers } from '../API/API_Joueurs'
import { getAllClubs } from '../API/API_Clubs'
import { TouchableOpacity } from 'react-native-gesture-handler'

//Component JoueursListe permettant d'afficher et de filtrer la liste des joueurs envoyés par l'api
class JoueursListe extends React.Component {

  //Constructeur : initialisation de tous les paramètres du state utilisé
    constructor(props) {
      super(props)
      this.searchedText = ""
      this.searchedPost = ""
      this.state = {
        searchedPost: "0",
        clubs: [],
        joueurs: [],
        joueursFiltrésNom: [],
        joueursFiltrésFinal: [],
        isLoading: false
      }
    }
  
    //Lancement d'une recherche à la construction du component
    componentDidMount(){
        this._searchPlayers()
    }

    //Fonction permettant de réceptionner les joueurs de l'api
    _loadPlayers() {
        this.setState({ isLoading: true })
        getAllPlayers().then(data => {

          //Tri des joueurs par ordre décroissant sur leur cote
            data.poolPlayers.sort(function(a, b) {
              return b.quotation - a.quotation;
              }),

            //Remplissage des trois array utilisés
            this.setState({
                
                joueurs: [ ...this.state.joueurs, ...data.poolPlayers ],
                joueursFiltrésNom: [ ...this.state.joueursFiltrésNom, ...data.poolPlayers ],
                joueursFiltrésFinal: [ ...this.state.joueursFiltrésFinal, ...data.poolPlayers ],
                isLoading: false
            })
        })
        
        //Fonction permettant de réceptionner tous les clubs de l'api
        getAllClubs().then(data => {
            this.setState({
                clubs: Object.entries(data)[0][1],
                isLoading: false,
            })
        })
    }
  
    //Fonction permettant de mettre à jour le state en fonction des caractères ecrits par l'utilisateur dans la barre de recherche
    _searchTextInputChanged(text) {
        this.setState({ searchedText: text })
    }
  
    //Fonction permettant d'afficher le component DetailPlayer et de lui envoyer toute la data requise
    _displayDetailPlayer = (joueurId, firstName,lastName, ultraPosition, clubId, averageRating, totalGoals, totalMatches, totalStartedMacthes, totalPlayedMatches, maillot, nomClub) => {
        this.props.navigation.navigate("DetailPlayer", { joueurId: joueurId, firstName: firstName,lastName: lastName, ultraPosition: ultraPosition, clubId: clubId, averageRating: averageRating, totalGoals: totalGoals, totalMatches: totalMatches, totalStartedMacthes: totalStartedMacthes, totalPlayedMatches: totalPlayedMatches, maillot: maillot, nomClub: nomClub })
    }

    //Fonction permettant de filtrer la liste de joueurs sur leur nom et sur leur poste
   _displaySearchedText() {
        
        //S'il n'y a pas de filtrage sur le poste
        if (this.state.searchedPost=="0") {

            if (this.state.searchedText!=undefined) {

                const txt=this.state.searchedText.toLowerCase()
                const copieJoueurs=[]
                if (this.state.joueurs==undefined)
                {
                    console.log("Liste Vide")
                }
                this.state.joueurs.forEach(function (joueur) {
                    var name=joueur.lastName.toLowerCase()
                    if (name.includes(txt))
                    copieJoueurs.push(joueur)
                });

                //Mise à jour du state avec le nouvel array de joueurs
                this.setState({ joueursFiltrésNom: [] })
                this.setState({ joueursFiltrésNom: copieJoueurs })
                this.setState({ joueursFiltrésFinal: [] })
                this.setState({ joueursFiltrésFinal: copieJoueurs })
            }

            else {
                this.setState({ joueursFiltrésNom: [] })
                this.setState({ joueursFiltrésNom: this.state.joueurs })
                this.setState({ joueursFiltrésFinal: [] })
                this.setState({ joueursFiltrésFinal: this.state.joueurs })
            }
        }

        //S'il y un filtrage sur le poste
        else {
        this.setState({ joueursFiltrésFinal: [] })
            const copieJoueurs1=[]
            const copieJoueurs2=[]
            const post=this.state.searchedPost
            this.state.joueursFiltrésNom.forEach(function (joueur) {
            if (post==joueur.ultraPosition) {
                copieJoueurs1.push(joueur)
            }
        })

        if (this.state.searchedText!=undefined) {
            const txt=this.state.searchedText.toLowerCase()
            copieJoueurs1.forEach(function (joueur) {
                var name=joueur.lastName.toLowerCase()
                if (name.includes(txt))
                copieJoueurs2.push(joueur)
            })
            this.setState({ joueursFiltrésFinal: copieJoueurs2 })
            
        }
        else {this.setState({ joueursFiltrésFinal: copieJoueurs1 })}
        }
        
    }

    //Fonction appelée pour lancer une rechercher
    _searchPlayers() {
      this.setState({
      }, () => {
          this._loadPlayers()
      })
    }

    
  
    //Fonction permettant d'afficher l'animation de chargement
    _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }

    //Fonction permettant de modifier le state en fonction de la valeur du Picker choisie par l'utilisateur
    _setSelectedPicker(value) {
        this.setState({ searchedPost: value })
    }
  
    render() {

      //Affichage des filtrages et de leurs résultats sous forme de liste de JoueurItem
      return (
        <View style={styles.main_container}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
          
          <TextInput
            style={styles.textinput}
            placeholder='Nom du joueur'
            onChangeText={(text) => this._searchTextInputChanged(text)}
            onSubmitEditing={() => this._searchPlayers()}
          />

            
                <Picker
                    selectedValue={this.state.searchedPost}
                    style={styles.pickerContainer}
                    onValueChange={(value, index) => this.setState({searchedPost: value})}
                >
                    <Picker.Item label="Sélectionner un poste" value="0" />
                    <Picker.Item label="Gardien" value="10" />
                    <Picker.Item label="Défenseur central" value="20" />
                    <Picker.Item label="Latéral" value="21" />
                    <Picker.Item label="Milieu défensif" value="30" />
                    <Picker.Item label="Milieu offensif" value="31" />
                    <Picker.Item label="Attaquant" value="40" />
                </Picker>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => this._displaySearchedText()}>
              <Text style={styles.textButtonContainer}>Rechercher</Text>
          </TouchableOpacity>

          <View style={styles.joueursContainer}>
          <Text style={styles.jerseyNameContainer}>Maillot</Text>
            <Text style={styles.jerseyNameContainer}>Nom</Text>
            <Text style={styles.others}>Note</Text>
            <Text style={styles.others}>Buts</Text>
            <Text style={styles.others}>Poste</Text>
            <Text style={styles.others}>Cote</Text>
          </View>
          
          <FlatList style={styles.Container}
            data={this.state.joueursFiltrésFinal}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <JoueurItem joueur={item} data={this.state.clubs} displayDetailPlayer={this._displayDetailPlayer}/>}
          />
          {this._displayLoading()}
        </View>
      )
    }
  }
  
  //Externalisation des styles
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
        margin:50
    },

    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      paddingLeft: 5,
      borderWidth: 0.2,
      borderRadius:20
    },

    joueursContainer: {
        margin:10,
        flexDirection:'row'
    },

    jerseyNameContainer: {
        flex: 2,
        flexWrap: 'wrap'
    },

    others: {
        marginLeft: 10,
        flex: 1,
        flexWrap: 'wrap'
    },

    listContainer: {
       height: 250,
       flexWrap: "wrap"
    },

    buttonContainer: {
        margin: 10,
        marginLeft: 160,
        marginRight: 150,
        borderWidth: 0.2,
        borderRadius:20,
        borderColor: 'white',
        backgroundColor: '#5BBA49'

      },

      textButtonContainer: {
          color: 'white',
          marginLeft: 5
      },

      pickerContainer: {
        marginTop:0,
        marginLeft: 5,
        marginRight: 5
    },

    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  
  //Exportation du component JoueursListe
  export default JoueursListe