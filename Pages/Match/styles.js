import { StyleSheet, StatusBar, Dimensions } from 'react-native';


// Main styles
const main = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#212832',
    paddingTop: StatusBar.currentHeight,
  },

  safeArea: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});


// topBlock styles
const topBlock = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    height: '40%'
  },
  
  teamsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height*0.4 - StatusBar.currentHeight - 40
  },

  teamBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.OS == 'web' ? '75%' : '50%',
    padding: 15,
  },

  teamName: {
    color: '#bababa',
    fontSize: 32,
    fontFamily: 'font'
  },

  teamScore: {
    color: '#bababa',
    fontSize: 70,
    fontWeight: '900',
    fontFamily: 'font'
  },
});


export default {
  'main': main,
  'topBlock': topBlock
}