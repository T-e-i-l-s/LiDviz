import { StyleSheet, StatusBar, Dimensions } from 'react-native';


// Main styles
const main = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#212832',
    paddingTop: StatusBar.currentHeight,
    height: Dimensions.get('window').height - StatusBar.currentHeight,
  },

  safeArea: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  pageTitle: {
    color: '#bababa',
    fontSize: 25,
    fontFamily: 'font'
  },

  listTitle: {
    color: '#3c464d',
    fontSize: 17,
    fontFamily: 'font',
    marginBottom: 10,
  },
});


// Event list styles
const navigationBar = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },

  title: {
    width: '50%',
    color: '#bababa',
    fontSize: 20,
    fontFamily: 'font',
    textAlign: 'center',
    padding: 10
  },

  slider: {
    height: 1,
    backgroundColor: '#bababa',
    width: '50%'
  }
});




// Matches list styles
const matches = StyleSheet.create({
  matchBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b252b',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#3c464d',
    marginRight: 10
  },

  teamsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  teamBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  teamName: {
    color: '#bababa',
    fontSize: 20,
    fontFamily: 'font'
  },

  teamScore: {
    color: '#bababa',
    fontSize: 32,
    fontWeight: '900',
    fontFamily: 'font'
  },

  matchInfoBlock: {
    width: '100%',
    color: '#bababa',
    fontSize: 20,
    fontFamily: 'font',
    borderTopWidth: 1,
    borderColor: '#3c464d',
    paddingVertical: 10,
    textAlign: 'center'
  },
});


export default {
  'main': main,
  'navigationBar': navigationBar,
  'matches': matches,
}