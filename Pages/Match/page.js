import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles'
import {LinearGradient} from 'expo-linear-gradient';
import Owl from '../Event/rating/page'

export default function App({ navigation, route }) {

  const param = route.params

  const toMenuPage = () => {
    navigation.navigate(param.page)
  }

  return (

    <View style={styles.main.background}>

      <StatusBar style="auto" />

      {/* Arrow */}
      <View style={{width: '100%', alignItems: 'flax-start'}}>
        <TouchableOpacity
        style={{width: 40, marginLeft: 20}}
        underlayColor={'rgba(255,0,255,0)'}
        onPress={toMenuPage}>
          <Image 
          style={{width:40, height:40}}
          source={require('../../assets/icons/back.png')}/>
        </TouchableOpacity>
      </View>

      {/* Top Block */}
      {/* <LinearGradient colors={['#373045', '#373045', '#453037']} style={styles.topBlock.container}> */}
        
        {/* Arrow */}
        {/* <View style={{width: '100%', alignItems: 'flax-start'}}>
          <TouchableOpacity
          style={{width: 40, marginLeft: 20}}
          underlayColor={'rgba(255,0,255,0)'}
          onPress={toMenuPage}>
            <Image 
            style={{width:40, height:40}}
            source={require('../../assets/icons/back.png')}/>
          </TouchableOpacity>
        </View> */}

        {/* Score */}
        {/* <View style={styles.topBlock.teamsRow}> */}

          {/* First team */}
          {/* <View style={styles.topBlock.teamBlock}>
            <Text style={styles.topBlock.teamScore}>{param.matchInfo.team1.score}</Text>
            <Text style={styles.topBlock.teamName}>{param.matchInfo.team1.name}</Text>
          </View>

          <Text style={styles.topBlock.teamScore}>:</Text> */}
          
          {/* Second team */}
          {/* <View style={styles.topBlock.teamBlock}>
            <Text style={styles.topBlock.teamScore}>{param.matchInfo.team2.score}</Text>
            <Text style={styles.topBlock.teamName}>{param.matchInfo.team2.name}</Text>
          </View> */}

        {/* </View>

      </LinearGradient> */}

      <Owl/>

    </View>

  );

}
