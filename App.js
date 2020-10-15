import 'react-native-gesture-handler';
import React from 'react';
import Main from './app/views/main';
import {NavigationContainer} from '@react-navigation/native';

const App = () => (
  <NavigationContainer>
    <Main />
  </NavigationContainer>
);

export default App;
