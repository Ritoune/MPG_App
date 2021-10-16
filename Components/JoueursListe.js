import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native'
import JoueurItem from '../Components/JoueurItem'
import { getAllPlayers } from '../API/API_Joueurs'

class JoueursListe extends React.Component {

    constructor(props) {
      super(props)
      this.searchedText = ""
      //this.page = 0
      //this.totalPages = 0
      this.state = {
        joueurs: [],
        isLoading: false
      }
    }
  
    _loadPlayers() {
      if (this.searchedText.length > 0) {
        this.setState({ isLoading: true })
        getAllPlayers().then(data => {
            //this.totalPages = data.total_pages
            this.setState({
              joueurs: [ ...this.state.joueurs, ...data.poolPlayers ],
              isLoading: false
            })
            console.log("Dans la liste")
        })
      }
    }
  
    _searchTextInputChanged(text) {
      this.searchedText = text 

        /*
        //Pour rendre à chaque caractère
        this.setState({ searchedText: text })
        //Pour afficher la liste a chaque nouveau caractère
        this._loadFilms()*/
    }
  
    _searchPlayers() {
      this.page = 0
      this.totalPages = 0
      this.setState({
        films: [],
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

   /* _displayDetailForFilm = (idFilm) => {
        console.log("Display film with id " + idFilm)
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
    }*/
  
    render() {
      return (
        <View style={styles.main_container}>
          <TextInput
            style={styles.textinput}
            placeholder='Titre du film'
            onChangeText={(text) => this._searchTextInputChanged(text)}
            onSubmitEditing={() => this._searchPlayers()}
          />
          <Button title='Rechercher' onPress={() => this._searchPlayers()}/>
          <FlatList
            data={this.state.joueurs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <JoueurItem joueur={item}/>}
            /*onEndReachedThreshold={0.5}
            onEndReached={() => {
                if (this.page < this.totalPages) {
                   this._loadFilms()
                }
            }}
            renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}*/
          />
          {this._displayLoading()}
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      marginTop: 35
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
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