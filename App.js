import 'react-native-gesture-handler';
import React from 'react';
import Main from './app/views/main';
import Book from './app/views/book';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="SomeBook" component={Book} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
