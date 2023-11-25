import { StyleSheet, StatusBar } from 'react-native';


// Main styles
const main = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#212832',
    paddingTop: StatusBar.currentHeight,
  },

  title: {
    width: '70%',
    color: '#bababa',
    fontSize: 28,
    fontFamily: 'font',
    textAlign: 'center'
  },

  text: {
    width: '70%',
    color: '#bababa',
    fontSize: 19,
    fontFamily: 'font',
    textAlign: 'center'
  },
});



export default {
  'main': main
}