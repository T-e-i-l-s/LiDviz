import { StatusBar } from 'expo-status-bar';
import { Animated, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import { useRef, useState } from 'react';
import MatchesScreen from './matches/page'
import RatingScreen from './rating/page'
const screenWidth = Dimensions.get('window').width

const navigationBarColors = ['#bababa','#3c464d']
export default function App({ navigation }) {

  const sliderPosition = useRef(
    new Animated.Value(-screenWidth/4)
  ).current

  const [navigationBarColor1, setNavigationBarColor1] = useState(navigationBarColors[0])
  const [navigationBarColor2, setNavigationBarColor2] = useState(navigationBarColors[1])
  const [screen, setScreen] = useState('matches')
  const [topBlockHeight, setTopBlockHeight] = useState(0)

  const events = [
    {'title': 'Li7 league', 'type': 'football', 'begin': '01.11.2023', 'end': '20.11.2023'}
  ]

  const matches = [
    {'team1': {'name': 'Team A', 'score': '3'}, 'team2': {'name': 'Team B', 'score': '1'}},
    {'team1': {'name': 'Team A', 'score': '3'}, 'team2': {'name': 'Team B', 'score': '1'}},
    {'team1': {'name': 'Team A', 'score': '3'}, 'team2': {'name': 'Team B', 'score': '1'}},
  ]

  const toMenuPage = () => {
    navigation.navigate('Menu')
  }

  const openMatches = () => {
    console.log(styles.navigationBar.container.height)
    setNavigationBarColor1(navigationBarColors[0])
    setNavigationBarColor2(navigationBarColors[1])
    Animated.timing(sliderPosition, {
      toValue: -screenWidth/4,
      duration: 200,
      useNativeDriver: true
    }).start()
    setScreen('matches')
  }

  const openTop = () => {
    setNavigationBarColor1(navigationBarColors[1])
    setNavigationBarColor2(navigationBarColors[0])
    Animated.timing(sliderPosition, {
      toValue: screenWidth/4,
      duration: 200,
      useNativeDriver: true
    }).start()
    setScreen('rating')
  }

  return (

    <View style={styles.main.background}>

      <StatusBar style="auto" />

      <View style={styles.main.safeArea}>

        {/* Safe zone */}

        {/* Top Block */}
        <View style={{width: '100%', alignItems: 'flax-start'}}
        onLayout={event =>
          setTopBlockHeight(topBlockHeight + event.nativeEvent.layout.height)
        }>
          <TouchableOpacity
          style={{width: 40, marginLeft: 20}}
          underlayColor={'rgba(255,0,255,0)'}
          onPress={toMenuPage}>
            <Image 
            style={{width:40, height:40}}
            source={require('../../assets/icons/back.png')}/>
          </TouchableOpacity>
        </View>

        {/* Navigation Bar */}
        <View style={styles.navigationBar.container}
        onLayout={event => 
          setTopBlockHeight(topBlockHeight + event.nativeEvent.layout.height)
        }>
          <Text 
          onPress={openMatches}
          style={[styles.navigationBar.title, {color: navigationBarColor1}]}>
            Матчи
          </Text>
          <Text 
          onPress={openTop}
          style={[styles.navigationBar.title, {color: navigationBarColor2}]}>
            Рейтинг
          </Text>
        </View>
        <Animated.View 
        style={[styles.navigationBar.slider,{transform: [{'translateX': sliderPosition}]}]}>
        </Animated.View>

        {
          screen == 'matches' ? (
            <View style={{
              height: Dimensions.get('window').height - topBlockHeight, 
              width: '100%',
              alignItems: 'center'
            }}>
              <MatchesScreen/>
            </View>
          ):(
            <RatingScreen/>
          )
        }

      </View>

    </View>

  );

}
