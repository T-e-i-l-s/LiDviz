import { StyleSheet, Platform } from 'react-native';


// Matches list styles
const matches = StyleSheet.create({
  matchBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b232e',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#3c464d',
    marginTop: 15
  },

  teamsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  teamBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.OS == 'web' ? '75%' : '50%',
    padding: 15,
  },

  teamName: {
    color: '#bababa',
    fontSize: 23,
    fontFamily: 'font'
  },

  teamScore: {
    color: '#bababa',
    fontSize: 35,
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
  'matches': matches,
}