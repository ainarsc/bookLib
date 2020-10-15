import React from 'react';
import {View, Text} from 'react-native';
import NavStyle from './style';

const NavBar = () => {
  return (
    <View style={NavStyle.container}>
      <Text style={NavStyle.items}> FOO </Text>
      <Text style={NavStyle.items}> BAR </Text>
      <Text style={NavStyle.items}> X </Text>
    </View>
  );
};

export default NavBar;
