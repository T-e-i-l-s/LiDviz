import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function App() {

  const matches = [
    {'team1': {'name': 'Team A', 'score': '0'}, 'team2': {'name': 'Team D', 'score': '1'}},
    {'team1': {'name': 'Team D', 'score': '3'}, 'team2': {'name': 'Team B', 'score': '7'}},
    {'team1': {'name': 'Team A', 'score': '1'}, 'team2': {'name': 'Team C', 'score': '7'}},
    {'team1': {'name': 'Team C', 'score': '4'}, 'team2': {'name': 'Team D', 'score': '5'}},
    {'team1': {'name': 'Team A', 'score': '5'}, 'team2': {'name': 'Team B', 'score': '1'}},
  ]
    
  return (

    <FlatList 
    showsVerticalScrollIndicator={false}
    scrollEnabled={true}
    style={{width: '90%'}} 
    data={matches} 
    renderItem={({item, index}) => (
      <View style={[styles.matches.matchBlock,{
        marginBottom: index == matches.length-1 ? 15 : 0
      }]}>

        {/* Score */}
        <View style={styles.matches.teamsRow}>

          {/* First team */}
          <View style={[styles.matches.teamBlock, {
            backgroundColor: item.team1.score > item.team2.score ? '#1b252b' : '#1b252b',
            borderTopLeftRadius: 15,
            borderRightWidth: 1,
            borderColor: '#3c464d',
          }]}>
            <Text style={styles.matches.teamName}>{item.team1.name}</Text>
            <Text style={styles.matches.teamScore}>{item.team1.score}</Text>
          </View>
          
          {/* Second team */}
          <View style={[styles.matches.teamBlock,{
            backgroundColor: item.team2.score > item.team1.score ? '#1b252b' : '#1b252b',
            borderTopRightRadius: 15,
          }]}>
            <Text style={styles.matches.teamName}>{item.team2.name}</Text>
            <Text style={styles.matches.teamScore}>{item.team2.score}</Text>
          </View>

        </View>

        {/* Button(Show match info) */}
        <Text style={styles.matches.matchInfoBlock}>Подробнее</Text>

      </View>
    )}/>

  );

}
