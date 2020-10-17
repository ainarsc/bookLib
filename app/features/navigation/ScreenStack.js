import React from 'react';
import {View, StyleSheet} from 'react-native';
import SettingsButton from '../../components/SettingsButton';
import {COLOR_PRIMARY, COLOR_TEXT_LIGHT} from '../../constants';
import {createStackNavigator} from '@react-navigation/stack';
//SCREENS
import Library from '../../views/library';
import Book from '../../views/book';

//CONSTANTS
const LIBRARY = 'Library';
const BOOK = 'Book';
const INITIAL_ROUTE = 'Library';

const styles = StyleSheet.create({
  headerRight: {paddingRight: 10},
});

const HeaderOptions = {
  headerStyle: {
    backgroundColor: COLOR_PRIMARY,
  },
  headerTintColor: COLOR_TEXT_LIGHT,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => (
    <View style={styles.headerRight}>
      <SettingsButton buttonName={'More'} />
    </View>
  ),
};

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName={INITIAL_ROUTE}
    screenOptions={HeaderOptions}>
    <Stack.Screen name={LIBRARY} component={Library} />
    <Stack.Screen name={BOOK} component={Book} />
  </Stack.Navigator>
);

export default HomeStack;
