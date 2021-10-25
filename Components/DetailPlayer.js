import React from 'react'
import { View, ActivityIndicator, Text, ScrollView } from 'react-native'

class DetailPlayer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        joueurId: undefined,
        isLoading: true
      }
    }
  
    componentDidMount() {
        console.log(this.props)
    console.log("Param : "+this.props.navigation.state.params.joueurId)
      this.setState({joueurId: this.props.navigation.state.params.joueurId})
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
  
    _displayPlayer() {
      //const { film } = this.state
      if (this.state.joueur != undefined) {
        return (
          <ScrollView>
              <Text>Nom du joueur : {this.state.joueur.lastName} </Text>
          </ScrollView>
        )
      }
      else {<Text>Erreur de transmission de données</Text>}
    }
  
    render() {
        console.log(this.state.joueurId)
        var test=""
        if (this.state.joueurId != undefined) {
            test="C'est good"
        }
        else {test="Erreur"}
      return (
          <Text> {this.state.joueurId} </Text>
      )
    }
  }

  export default DetailPlayer
  