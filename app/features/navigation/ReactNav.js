import 'react-native-gesture-handler';
import React from 'react';

//REACT NAVIGATION COMPONENTS
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ReactNav = ({children, initialRoute}) => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={initialRoute}>
      {children}
    </Stack.Navigator>
  </NavigationContainer>
);

export default ReactNav;
