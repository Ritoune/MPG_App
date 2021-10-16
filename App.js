import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListLeagues from './Components/ListLeagues'
import JoueursListe from'./Components/JoueursListe'

export default class App extends React.Component {
  render() {
    return (
      <JoueursListe/>
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
