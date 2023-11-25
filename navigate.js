import Menu from './Pages/Menu/page'
import Event from './Pages/Event/page'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function Navigate () {

  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={ Menu }
        options={ { headerShown: false, animationEnabled: false } }
      />
      <Stack.Screen
        name="Event"
        component={ Event }
        options={ { headerShown: false, animationEnabled: false } }
      />
    </Stack.Navigator>
  </NavigationContainer>
}
