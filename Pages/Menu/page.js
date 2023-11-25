import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function App({ navigation }) {

  const events = [
    {'title': 'Li7 league', 'type': 'football', 'begin': '01.11.2023', 'end': '20.11.2023'}
  ]

  const matches = [
    {'team1': {'name': 'Team A', 'score': '0'}, 'team2': {'name': 'Team D', 'score': '1'}},
    {'team1': {'name': 'Team D', 'score': '3'}, 'team2': {'name': 'Team B', 'score': '7'}},
    {'team1': {'name': 'Team A', 'score': '1'}, 'team2': {'name': 'Team C', 'score': '7'}},
    {'team1': {'name': 'Team C', 'score': '4'}, 'team2': {'name': 'Team D', 'score': '5'}},
    {'team1': {'name': 'Team A', 'score': '5'}, 'team2': {'name': 'Team B', 'score': '1'}},
  ]

  const toEventPage = () => {
    navigation.navigate('Event')
  }

  return (

    <View style={styles.main.background}>

      <StatusBar style="auto" />

      <View style={styles.main.safeArea}>

        {/* Safe zone */}

        {/* Page title */}
        <Text style={styles.main.pageTitle}>ЛиДвиж</Text>

        {/* Events list */}
        <View style={{width: '90%'}}>
          <Text style={styles.main.listTitle}>События</Text>
          <FlatList 
          style={{width: '100%'}} 
          data={events} 
          renderItem={({item}) => (
            <TouchableOpacity 
            underlayColor={'rgba(255, 0, 255,0)'}
            style={styles.events.eventBlock} 
            onPress={toEventPage}>
              <Text style={styles.events.eventTitle}>{item.title}</Text>
              <Text style={styles.events.eventType}>{item.type}</Text>
              <Text style={styles.events.eventDate}>{item.begin + " - " + item.end}</Text>
            </TouchableOpacity>
          )}/>
        </View>

        {/* last matchs */}
        <View style={{width: '100%'}}>
          <Text style={[styles.main.listTitle,{paddingLeft: '5%'}]}>Последнее</Text>
          <FlatList 
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          horizontal={true}
          style={{width: '100%'}} 
          data={matches} 
          renderItem={({item, index}) => (
            <View style={[styles.matches.matchBlock, {
              marginLeft: index == 0 ? Dimensions.get('window').width*0.05 : 0
            }]}>

              {/* Score */}
              <View style={styles.matches.teamsRow}>

                {/* First team */}
                <View style={[styles.matches.teamBlock, {
                  borderRightWidth: 1,
                  borderColor: '#3c464d',
                }]}>
                  <Text style={styles.matches.teamName}>{item.team1.name}</Text>
                  <Text style={styles.matches.teamScore}>{item.team1.score}</Text>
                </View>
                
                {/* Second team */}
                <View style={styles.matches.teamBlock}>
                  <Text style={styles.matches.teamName}>{item.team2.name}</Text>
                  <Text style={styles.matches.teamScore}>{item.team2.score}</Text>
                </View>

              </View>

              {/* Button(Show match info) */}
              <Text style={styles.matches.matchInfoBlock}>Подробнее</Text>

            </View>
          )}/>
        </View>

      </View>

    </View>

  );

}
