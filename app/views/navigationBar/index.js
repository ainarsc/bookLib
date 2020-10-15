import React from 'react';
import {View} from 'react-native';
import Heading from '../../components/heading';
import NavStyle from './style';

const NavBar = () => {
  return (
    <View style={NavStyle.container}>
      <Heading> FOO </Heading>
      <Heading> BAR </Heading>
      <Heading> X </Heading>
    </View>
  );
};

export default NavBar;
