import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenStack from './app/features/navigation/ScreenStack';

const App = () => (
  <NavigationContainer>
    <ScreenStack />
  </NavigationContainer>
);

export default App;
