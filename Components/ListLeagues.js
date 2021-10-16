import React from 'react'
import { StyleSheet, View, Image, Text, TextInput, Button, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'

class ListLeagues extends React.Component {
    render(){
        return (
            <View>
                <Image style={styles.logo} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/logo.png')}/>

                <TouchableOpacity style={styles.leagueContainer}>
                    <Image style={styles.image} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/frenchflag.png')}/>
                    <Text style={styles.LeagueName}>Ligue 1 Uber Eats </Text>
                    <Image style={styles.fleche} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/fleche.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.leagueContainer}>
                    <Image style={styles.image} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/frenchflag.png')}/>
                    <Text style={styles.LeagueName}>Ligue 2 BKT </Text>
                    <Image style={styles.fleche} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/fleche.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.leagueContainer}>
                    <Image style={styles.image} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/englishflag.png')}/>
                    <Text style={styles.LeagueName}>Premier League </Text>
                    <Image style={styles.fleche} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/fleche.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.leagueContainer}>
                    <Image style={styles.image} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/italianflag.png')}/>
                    <Text style={styles.LeagueName}>Serie A </Text>
                    <Image style={styles.fleche} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/fleche.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.leagueContainer}>
                    <Image style={styles.image} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/spanishflag.png')}/>
                    <Text style={styles.LeagueName}>Liga BBVA </Text>
                    <Image style={styles.fleche} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/fleche.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.leagueContainer}>
                    <Image style={styles.image} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/championsleague.png')}/>
                    <Text style={styles.LeagueName}>Champions league </Text>
                    <Image style={styles.fleche} source={require('/Users/henripetrelli/Documents/CRNA_MPG/MPG_App/assets/fleche.png')}/>
                </TouchableOpacity>
            </View>
            
        )
    }
}

    const styles = StyleSheet.create({
        image: {
          width: 20,
          height: 20,
          margin: 5,
          marginLeft: 20,
          marginRight:10,
          flex: 0.3,
          borderRadius:30
        },

        logo: {
            width: 100,
            height: 40,
            marginLeft: 140,
            margin:50,
        },
        leagueContainer: {
          flexDirection: 'row',
          margin: 10,
          borderWidth: 0.2,
          borderRadius:20,
        },

        LeagueName: {
          fontWeight: 'bold',
          fontSize: 20,
          flex: 3,
          flexWrap: 'wrap',
          paddingRight: 5
        },
        fleche: {
          width: 10,
          height: 12,
          margin: 10,
          justifyContent:'center',
          alignItems: 'center',
          marginLeft: 10,
          marginRight:10,
          flex: 0.2
        },
      })

export default ListLeagues