import 'react-native-gesture-handler';
import React from 'react';
//SCREENS
import Main from './app/views/main';
import Book from './app/views/book';
//REACT NAVIGATION COMPONENTS
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Book" component={Book} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
