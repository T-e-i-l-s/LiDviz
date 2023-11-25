import { StatusBar } from 'expo-status-bar';
import { Animated, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function App() {
    
  return (

    <View style={{
      width: '100%', 
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 30
    }}>

      <Image 
      source={require('../../../assets/images/problem.png')}
      style={{width: '70%', height: Dimensions.get('window').width*0.7}}/>

      <Text style={styles.main.title}>
        Упс, что-то не так...
      </Text>

      <Text style={styles.main.text}>
        Эта функция еще разрабатывается. Скоро она станет доступна.
      </Text>

    </View>

  );

}
