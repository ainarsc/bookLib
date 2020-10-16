import 'react-native-gesture-handler';
import React from 'react';
import Main from './app/views/main';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Main} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
