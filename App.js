import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JoueursListe from'./Components/JoueursListe'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Navigation from './Navigation/Navigation'

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
