import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, ScrollView, ActivityIndicator, Text, Picker, Image} from 'react-native'
import JoueurItem from '../Components/JoueurItem'
import { getAllPlayers } from '../API/API_Joueurs'
import { getAllClubs } from '../API/API_Clubs'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'

class JoueursListe extends React.Component {

    constructor(props) {
      super(props)
      this.searchedText = ""
      this.searchedPost = ""
      //this.clubs
      //this.page = 0
      //this.totalPages = 0
      this.state = {
        searchedPost: "0",
        clubs: [],
        joueurs: [],
        joueursFiltrésNom: [],
        joueursFiltrésFinal: [],
        isLoading: false
      }
    }
  
    componentDidMount(){
        this._searchPlayers()
        //console.log(this.state.joueursFiltrésFinal)
    }

    _loadPlayers() {
        this.setState({ isLoading: true })
        getAllPlayers().then(data => {
            data.poolPlayers.sort(function(a, b) {
              return b.quotation - a.quotation;
              }),
            this.setState({
                
                joueurs: [ ...this.state.joueurs, ...data.poolPlayers ],
                joueursFiltrésNom: [ ...this.state.joueursFiltrésNom, ...data.poolPlayers ],
                joueursFiltrésFinal: [ ...this.state.joueursFiltrésFinal, ...data.poolPlayers ],
                isLoading: false
            })
        })

        
        //console.log(this.state.clubs)
        getAllClubs().then(data => {
            this.setState({
                clubs: Object.entries(data)[0][1],
                isLoading: false,
            })
            //console.log(Object.entries(this.state.clubs))
            /*Object.entries(this.state.clubs).forEach((club) => {
                console.log(club[1].id)
            })*/
        })
    }
  
    _searchTextInputChanged(text) {
    //this.setState(this.searchedText= text)
      //this.searchedText = text 

        
        //Pour rendre à chaque caractère
        this.setState({ searchedText: text })
        //Pour afficher la liste a chaque nouveau caractère
        //this._loadFilms()*/
    }
  
    //Recherche par nom uniquement 
   /* _displaySearchedText() {
        console.log(this.state.searchedText)
        if (this.state.searchedText.length > 0) {

            const txt=this.state.searchedText.toLowerCase()
            console.log(txt)
            const copieJoueurs=[]
            if (this.state.joueurs==undefined)
            {
                console.log("Liste Vide")
            }
            this.state.joueurs.forEach(function (joueur) {
                //console.log(joueur.lastName)
                var name=joueur.lastName.toLowerCase()
                if (name.includes(txt))
                copieJoueurs.push(joueur)
            });
            this.setState({ joueursFiltrésNom: [] })
            this.setState({ joueursFiltrésNom: copieJoueurs })
            console.log(copieJoueurs)
        }
        else {console.log("Pas de texte recherché")}
    }*/

    _displayDetailPlayer = (joueurId, quotation) => {
        //console.log(this.props.navigation)
        if (joueurId==undefined) {
            console.log("Pas de joueur")
        }
        else (console.log(joueurId))
        this.props.navigation.navigate("DetailPlayer", { joueurId: joueurId , quotation: quotation})
    }

   _displaySearchedText() {
        console.log(this.state.searchedText)
        if (this.state.searchedPost=="0") {

            if (this.state.searchedText!=undefined) {

                const txt=this.state.searchedText.toLowerCase()
                console.log(txt)
                const copieJoueurs=[]
                if (this.state.joueurs==undefined)
                {
                    console.log("Liste Vide")
                }
                this.state.joueurs.forEach(function (joueur) {
                    //console.log(joueur.lastName)
                    var name=joueur.lastName.toLowerCase()
                    if (name.includes(txt))
                    copieJoueurs.push(joueur)
                });
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

        else {
        console.log("Pas de Poste")

        this.setState({ joueursFiltrésFinal: [] })
            const copieJoueurs1=[]
            const copieJoueurs2=[]
            const post=this.state.searchedPost
            this.state.joueursFiltrésNom.forEach(function (joueur) {
            if (post==joueur.ultraPosition) {
                copieJoueurs1.push(joueur)
            }
        })
        console.log("poste : "+post)

        if (this.state.searchedText!=undefined) {
            const txt=this.state.searchedText.toLowerCase()
            copieJoueurs1.forEach(function (joueur) {
                //console.log(joueur.lastName)
                var name=joueur.lastName.toLowerCase()
                if (name.includes(txt))
                copieJoueurs2.push(joueur)
            })
            this.setState({ joueursFiltrésFinal: copieJoueurs2 })
            
        }
        else {this.setState({ joueursFiltrésFinal: copieJoueurs1 })}
        }

        //console.log(this.state.clubs)
        
    }

    _searchPlayers() {
      //this.page = 0
      //this.totalPages = 0
      this.setState({
        //joueurs: [],
      }, () => {
          this._loadPlayers()
      })
    }

    
  
    _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }


    

    _setSelectedPicker(value) {
        //console.log("Choix : "+ value)
        this.setState({ searchedPost: value })

        /*this.setState({ joueursFiltrés: [] })

        const copieJoueurs=[]
        console.log("Not Pushed")
        this.state.joueursFiltrés.forEach(function (joueur) {
            console.log(joueur.ultraPosition)
        if (value==joueur.ultraPosition) {
                console.log("Pushed")
                copieJoueurs.push(joueur)
            }
        });
        this.setState({ joueursFiltrés: copieJoueurs })*/

        //console.log(this.state.searchedPost)*/
    }

   /* _displayDetailForFilm = (idFilm) => {
        console.log("Display film with id " + idFilm)
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
    }*/
  
    render() {
        console.log(this.props)
      return (
        <View style={styles.main_container}>
            <Image style={styles.logo} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/logo.png')}/>
          
          <TextInput
            style={styles.textinput}
            placeholder='Nom du joueur'
            onChangeText={(text) => this._searchTextInputChanged(text)}
            onSubmitEditing={() => this._searchPlayers()}
          />

            <View >
                
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
            </View>

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
            /*onEndReachedThreshold={0.5}
            onEndReached={() => {
                if (this.page < this.totalPages) {
                   this._loadFilms()
                }
            }}*/
            //renderItem={({item}) => <JoueurItem joueur={item} displayDetailPlayer={this._displayDetailPlayer} />}
          />
          {this._displayLoading()}
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    main_container: {
      flex: 3,
      marginTop: 35
    },

    logo: {
        width: 100,
        height: 40,
        marginLeft: 140,
        margin:50,
    },

    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      paddingLeft: 5,
      borderWidth: 0.2,
      borderRadius:20,
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
        backgroundColor: '#5BBA49',

      },

      textButtonContainer: {
          color: 'white',
          marginLeft: 5
      },

      pickerContainer: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        paddingLeft: 5,
        borderWidth: 0.2,
        borderRadius:20,
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
  
  export default JoueursListe